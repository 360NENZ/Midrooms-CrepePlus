@echo off
:menu
echo Welcome to the CrepePlus Manager     -     Created by Midrooms, partly developed by rrryfoo
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo 1) Start the CrepePlus server
echo 2) Update CrepePlus
echo 3) Install NPM modules
echo 4) Update NPM modules
echo 5) Exit

set /p op=Select: 
if "%op%"=="1" goto start
if "%op%"=="2" goto update
if "%op%"=="3" goto instNPM
if "%op%"=="4" goto updaNPM
if "%op%"=="5" exit
cls
goto menu

:start
cd %cd%\CrepePackage
START MITMStart.bat
net start MongoDB
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 1 /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /t REG_SZ /d http://127.0.0.1:8080 /f
npm run start

:update
@echo Updating CrepePlus...
@RD /S /Q "%CD%\CrepePackage"
powershell -Command "Invoke-WebRequest https://github.com/Midrooms/CrepePackages/raw/main/CrepePackage.zip -Outfile CrepePackage.zip"
powershell -Command "Expand-Archive -Path CrepePackage.zip CrepePackage -Force"
DEL CrepePackage.zip
cd %cd%\CrepePackage\
START NPMInstall.bat
cls
@echo CrepePlus has been updated.
PAUSE
cls
goto menu 

:instNPM
cd %CD%\CrepePackage
start NPMInstall.bat
cls
goto menu

:updaNPM
cd %cd%\CrepePackage
start NPMInstall.bat
cls
goto menu