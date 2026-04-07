@echo off
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File ".\scripts\update-ruedi-reservoir-data.ps1"
pause
