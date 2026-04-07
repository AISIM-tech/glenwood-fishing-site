param(
  [string]$OutputDir = (Join-Path $PSScriptRoot "..\\special-data-cache")
)

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

$sourceUrl = "https://www.usbr.gov/uc/water/hydrodata/reservoir_data/100032/json/49.json"
$fullPoolElevationFt = 7766

if (-not (Test-Path -LiteralPath $OutputDir)) {
  New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

$jsonPath = Join-Path $OutputDir "ruedi-reservoir.json"
$csvPath = Join-Path $OutputDir "ruedi-reservoir-history.csv"

$payload = Invoke-WebRequest -Uri $sourceUrl | Select-Object -ExpandProperty Content | ConvertFrom-Json
$rows = @($payload.data)

if (-not $rows.Count) {
  throw "The USBR feed did not return any rows."
}

$latestRaw = $rows | Where-Object { $_[1] -ne $null -and $_[1] -ne "" } | Select-Object -Last 1

if (-not $latestRaw) {
  throw "The USBR feed did not include any numeric pool elevation values."
}

$history = foreach ($row in $rows) {
  $date = $row[0]
  $elevation = $row[1]

  if ($null -eq $elevation -or $elevation -eq "") {
    continue
  }

  $elevationNumber = [double]$elevation

  [pscustomobject]@{
    observed_at = $date
    elevation_ft = [math]::Round($elevationNumber, 2)
    below_full_pool_ft = [math]::Round([math]::Max(0, $fullPoolElevationFt - $elevationNumber), 2)
  }
}

$history | Export-Csv -Path $csvPath -NoTypeInformation

$latestElevation = [double]$latestRaw[1]
$latest = [pscustomobject]@{
  observed_at = $latestRaw[0]
  elevation_ft = [math]::Round($latestElevation, 2)
  below_full_pool_ft = [math]::Round([math]::Max(0, $fullPoolElevationFt - $latestElevation), 2)
}

$latestObservedDate = [datetime]::ParseExact($latest.observed_at, "yyyy-MM-dd", $null)
$recentMonthKeys = 0..5 | ForEach-Object { $latestObservedDate.AddMonths(-$_).ToString("yyyy-MM") }
$recentMonthlyAverages = $history |
  Where-Object { $recentMonthKeys -contains $_.observed_at.Substring(0, 7) } |
  Group-Object { $_.observed_at.Substring(0, 7) } |
  Sort-Object Name -Descending |
  ForEach-Object {
    $monthDate = [datetime]::ParseExact("$($_.Name)-01", "yyyy-MM-dd", $null)
    $averageElevation = ($_.Group | Measure-Object -Property elevation_ft -Average).Average
    $averageBelowFull = ($_.Group | Measure-Object -Property below_full_pool_ft -Average).Average

    [pscustomobject]@{
      monthKey = $_.Name
      monthLabel = $monthDate.ToString("MMM yyyy")
      averageElevationFt = [math]::Round($averageElevation, 2)
      averageBelowFullPoolFt = [math]::Round($averageBelowFull, 2)
    }
  }

$cachePayload = [pscustomobject]@{
  label = "Ruedi Reservoir"
  sourceLabel = "USBR pool elevation"
  observedAt = $latest.observed_at
  elevationFt = $latest.elevation_ft
  fullPoolElevationFt = $fullPoolElevationFt
  belowFullPoolFt = $latest.below_full_pool_ft
  recentMonthlyAverages = $recentMonthlyAverages
}

$cachePayload | ConvertTo-Json | Set-Content -Path $jsonPath

Write-Host ""
Write-Host "Ruedi reservoir data updated."
Write-Host "CSV:  $csvPath"
Write-Host "JSON: $jsonPath"
Write-Host "History rows: $($history.Count)"
Write-Host "Latest observed date: $($latest.observed_at)"
Write-Host "Latest elevation: $($latest.elevation_ft) ft"
Write-Host "Below full pool: $($latest.below_full_pool_ft) ft"
Write-Host ""
