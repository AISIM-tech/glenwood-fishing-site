@echo off
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File ".\scripts\update-all-usgs-timelapses.ps1"
pause
