param(
  [int]$PollMinutes = 30
)

$ErrorActionPreference = "Continue"
$scriptDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$updateScript = Join-Path $scriptDirectory "update-usgs-camera-cache.ps1"

Write-Host "Starting camera buffer loop. Polling every $PollMinutes minutes."
Write-Host "Press Ctrl+C to stop."

while ($true) {
  $startedAt = Get-Date
  Write-Host "Refreshing camera cache at $($startedAt.ToString('u'))"

  try {
    & $updateScript
    Write-Host "Refresh complete."
  }
  catch {
    Write-Warning "Camera refresh failed: $($_.Exception.Message)"
  }

  Start-Sleep -Seconds ($PollMinutes * 60)
}
