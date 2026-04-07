param(
  [string]$ConfigPath = "..\camera-feeds.json",
  [string]$OutputRoot = "..\camera-cache"
)

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

$scriptDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$resolvedConfigPath = [System.IO.Path]::GetFullPath((Join-Path $scriptDirectory $ConfigPath))
$resolvedOutputRoot = [System.IO.Path]::GetFullPath((Join-Path $scriptDirectory $OutputRoot))
$resolvedUpdateScriptPath = [System.IO.Path]::GetFullPath((Join-Path $scriptDirectory "update-usgs-camera-cache.ps1"))

$allFeeds = Get-Content -LiteralPath $resolvedConfigPath -Raw | ConvertFrom-Json
$usgsFeeds = @($allFeeds | Where-Object { "$($_.sourceType)".ToLowerInvariant() -eq "usgs" })

if (-not $usgsFeeds.Count) {
  throw "No USGS feeds were found in camera-feeds.json."
}

$tempConfigPath = Join-Path ([System.IO.Path]::GetTempPath()) ("glenwood-usgs-camera-feeds-{0}.json" -f ([guid]::NewGuid().ToString("N")))

try {
  $usgsFeeds | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $tempConfigPath
  & $resolvedUpdateScriptPath -ConfigPath $tempConfigPath -OutputRoot $resolvedOutputRoot
}
finally {
  if (Test-Path -LiteralPath $tempConfigPath) {
    Remove-Item -LiteralPath $tempConfigPath -Force
  }
}
