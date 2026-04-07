param(
  [string]$ConfigPath = "..\camera-feeds.json",
  [string]$OutputRoot = "..\camera-cache"
)

$ErrorActionPreference = "Stop"

function Ensure-Directory {
  param([string]$Path)

  if (-not (Test-Path -LiteralPath $Path)) {
    New-Item -ItemType Directory -Path $Path | Out-Null
  }
}

function Download-File {
  param(
    [string]$Url,
    [string]$Destination
  )

  $tempPath = "$Destination.tmp"
  Invoke-WebRequest -Uri $Url -OutFile $tempPath
  Move-Item -LiteralPath $tempPath -Destination $Destination -Force
}

function Convert-ToSafeTimestamp {
  param([string]$IsoString)

  if (-not $IsoString) {
    return $null
  }

  return $IsoString.Replace(":", "-")
}

function Convert-ToIsoString {
  param([object]$Value)

  if ($null -eq $Value -or "$Value" -eq "") {
    return $null
  }

  if ($Value -is [string]) {
    return $Value
  }

  if ($Value -is [long] -or $Value -is [int] -or $Value -is [double] -or $Value -is [decimal]) {
    return [DateTimeOffset]::FromUnixTimeMilliseconds([long]$Value).UtcDateTime.ToString("o")
  }

  return "$Value"
}

function Update-RollingFrames {
  param(
    [string]$SourceImagePath,
    [string]$FramesDirectory,
    [string]$ImageTimestampIso,
    [int]$RetentionHours = 24
  )

  Ensure-Directory -Path $FramesDirectory

  $safeTimestamp = Convert-ToSafeTimestamp -IsoString $ImageTimestampIso
  if (-not $safeTimestamp) {
    $safeTimestamp = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH-mm-ssZ")
  }

  $framePath = Join-Path $FramesDirectory "$safeTimestamp.jpg"
  Copy-Item -LiteralPath $SourceImagePath -Destination $framePath -Force

  $cutoff = (Get-Date).ToUniversalTime().AddHours(-1 * $RetentionHours)
  Get-ChildItem -LiteralPath $FramesDirectory -Filter "*.jpg" -File | ForEach-Object {
    if ($_.LastWriteTimeUtc -lt $cutoff) {
      Remove-Item -LiteralPath $_.FullName -Force
    }
  }

  return @(Get-ChildItem -LiteralPath $FramesDirectory -Filter "*.jpg" -File | Sort-Object Name)
}

function Get-FrameIsoFromFile {
  param([System.IO.FileInfo]$File)

  if (-not $File) {
    return $null
  }

  $name = $File.BaseName
  if ($name -match "^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2}(?:\.\d+)?)Z$") {
    return "$($matches[1])T$($matches[2]):$($matches[3]):$($matches[4])Z"
  }

  return $null
}

$scriptDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$resolvedConfigPath = if ([System.IO.Path]::IsPathRooted($ConfigPath)) {
  [System.IO.Path]::GetFullPath($ConfigPath)
} else {
  [System.IO.Path]::GetFullPath((Join-Path $scriptDirectory $ConfigPath))
}
$resolvedOutputRoot = if ([System.IO.Path]::IsPathRooted($OutputRoot)) {
  [System.IO.Path]::GetFullPath($OutputRoot)
} else {
  [System.IO.Path]::GetFullPath((Join-Path $scriptDirectory $OutputRoot))
}

Ensure-Directory -Path $resolvedOutputRoot

$feeds = Get-Content -LiteralPath $resolvedConfigPath -Raw | ConvertFrom-Json

foreach ($feed in $feeds) {
  $outputSlug = if ($feed.outputSlug) { $feed.outputSlug } else { $feed.id }
  $localDir = Join-Path $resolvedOutputRoot $outputSlug
  Ensure-Directory -Path $localDir

  $localVideoPath = Join-Path $localDir "latest.mp4"
  $localImagePath = Join-Path $localDir "latest.jpg"
  $localSourceMetadataPath = Join-Path $localDir "source-metadata.json"
  $localMetadataPath = Join-Path $localDir "metadata.json"
  $localFramesDir = Join-Path $localDir "frames"

  $sourceType = if ($feed.sourceType) { "$($feed.sourceType)".ToLowerInvariant() } else { "usgs" }

  if ($sourceType -eq "cotrip") {
    $camera = Invoke-WebRequest -Uri $feed.metadataUrl -Headers @{ Accept = "application/json" } | Select-Object -ExpandProperty Content | ConvertFrom-Json
    if (-not $camera) {
      throw "No CoTrip camera metadata returned for $($feed.id)."
    }

    $primaryView = if ($camera.views -and $camera.views.Count -gt 0) { $camera.views[0] } else { $null }
    if (-not $primaryView -or -not $primaryView.videoPreviewUrl) {
      throw "No CoTrip preview image returned for $($feed.id)."
    }

    Download-File -Url $primaryView.videoPreviewUrl -Destination $localImagePath
    if (Test-Path -LiteralPath $localVideoPath) {
      Remove-Item -LiteralPath $localVideoPath -Force
    }

    $latestImageAt = Convert-ToIsoString $primaryView.imageTimestamp
    $frameFiles = Update-RollingFrames -SourceImagePath $localImagePath -FramesDirectory $localFramesDir -ImageTimestampIso $latestImageAt
    $frameAssets = @($frameFiles | ForEach-Object { "./frames/$($_.Name)" })
    $timelapseStatus = if ($frameAssets.Count -gt 1) { "local_timelapse" } else { "image_only" }

    $camera | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath $localSourceMetadataPath

    $publishedMetadata = [ordered]@{
      id = $feed.id
      label = $feed.label
      stationId = $feed.stationId
      stationName = $feed.stationName
      status = $timelapseStatus
      fetchedAt = (Get-Date).ToUniversalTime().ToString("o")
      cameraPageUrl = $feed.cameraPageUrl
      usgsPageUrl = $feed.usgsPageUrl
      source = [ordered]@{
        provider = "CoTrip"
        metadataUrl = $feed.metadataUrl
        cameraId = if ($feed.cameraId) { $feed.cameraId } else { $camera.id }
        viewId = if ($feed.viewId) { $feed.viewId } else { $null }
        latestImageAt = $latestImageAt
        timelapseGeneratedAt = $null
        timelapseLastImageUsedAt = $null
        ingestMinutes = 30
        ingestPeriod = "all day"
        streamUrl = $primaryView.url
        owner = $camera.cameraOwner.name
      }
      timeline = [ordered]@{
        frameCount = $frameAssets.Count
        frameIntervalMinutes = 30
        windowHours = 24
        timelapseStart = if ($frameFiles.Count -gt 0) { Get-FrameIsoFromFile -File $frameFiles[0] } else { $null }
        timelapseEnd = if ($frameFiles.Count -gt 0) { Get-FrameIsoFromFile -File $frameFiles[$frameFiles.Count - 1] } else { $null }
      }
      assets = [ordered]@{
        poster = "./latest.jpg"
        latestStill = "./latest.jpg"
        timelapse = $null
        frames = $frameAssets
        remotePoster = $primaryView.videoPreviewUrl
        remoteTimelapse = $null
        remoteStream = $primaryView.url
      }
    }

    $publishedMetadata | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath $localMetadataPath
    continue
  }

  $metadataContent = Invoke-WebRequest -Uri $feed.metadataUrl | Select-Object -ExpandProperty Content
  $metadataArray = $metadataContent | ConvertFrom-Json

  if (-not $metadataArray -or $metadataArray.Count -eq 0) {
    throw "No camera metadata returned for $($feed.id)."
  }

  $camera = $metadataArray[0]
  $variant = if ($feed.timelapseVariant) { $feed.timelapseVariant } else { "720" }
  $timelapseUrl = if ($camera.locus -eq "umid") {
    "{0}{1}_{2}.mp4" -f $camera.tlDir, $camera.camId, $variant
  } else {
    "{0}{1}_720.mp4" -f $camera.tlDir, $camera.camId
  }
  $thumbnailUrl = "{0}{1}_newest.jpg" -f $camera.thumbDir, $camera.camId

  Download-File -Url $thumbnailUrl -Destination $localImagePath

  $timelapseOk = $true
  try {
    Download-File -Url $timelapseUrl -Destination $localVideoPath
  } catch {
    $timelapseOk = $false
  }

  $camera | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $localSourceMetadataPath

  $publishedMetadata = [ordered]@{
    id = $feed.id
    label = $feed.label
    stationId = $feed.stationId
    stationName = $feed.stationName
    status = if ($timelapseOk) { "live_timelapse" } else { "image_only" }
    fetchedAt = (Get-Date).ToUniversalTime().ToString("o")
    cameraPageUrl = $feed.cameraPageUrl
    usgsPageUrl = $feed.usgsPageUrl
    source = [ordered]@{
      provider = "USGS HIVIS"
      metadataUrl = $feed.metadataUrl
      cameraId = $camera.camId
      latestImageAt = $camera.newestImageDT
      timelapseGeneratedAt = $camera.TL_lastGeneratedDT
      timelapseLastImageUsedAt = $camera.TL_lastImageUsedDT
      ingestMinutes = $camera.ingest.intr
      ingestPeriod = $camera.ingest.period
    }
    assets = [ordered]@{
      poster = "./latest.jpg"
      latestStill = "./latest.jpg"
      timelapse = if ($timelapseOk) { "./latest.mp4" } else { $null }
      remotePoster = $thumbnailUrl
      remoteTimelapse = if ($timelapseOk) { $timelapseUrl } else { $null }
    }
  }

  $publishedMetadata | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $localMetadataPath
}
