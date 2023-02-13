@echo off
:menu
echo Welcome to the CrepePlus Manager
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo 1) Start the CrepePlus server
echo 2) Update CrepePlus
echo 3) Install/Update node modules
echo 4) Exit
echo 5) Want to try Star Rail CBT3? Enter '5' to learn how.
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

echo Created by Midrooms and rrryfoo
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

set /p op=Select: 
if "%op%"=="1" goto start
if "%op%"=="2" goto update
if "%op%"=="3" goto NPM
if "%op%"=="4" exit
if "%op%"=="5" goto aboutCBT3

cls
goto menu

:start
cd %cd%\CrepePackage
powershell -Command "Start-Process MITM.bat -WindowStyle Minimized"
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 1 /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /t REG_SZ /d http://127.0.0.1:8080 /f
cls
echo CrepePlus has enabled the proxy! Some internet functionality may not work.
echo To disable the proxy, head to system settings - Network and internet -> Proxy -> Manual proxy -> Set up -> Use a proxy server checked off -> Save
echo If you can't figure how to disable the proxy, simply restart your PC.
npm run start

:update
@echo Updating CrepePlus... You will return to the menu once the update is completed.
@RD /S /Q "%CD%\CrepePackage"
powershell -Command "Invoke-WebRequest https://github.com/Midrooms/CrepePackages/raw/main/CrepePackage.zip -Outfile CrepePackage.zip"
powershell -Command "Expand-Archive -Path CrepePackage.zip CrepePackage -Force"
DEL CrepePackage.zip
cd %cd%\CrepePackage\
powershell -Command "Start-Process inode.bat -WindowStyle Minimized"
cls
goto menu

:NPM
cd %CD%\CrepePackage
start inode.bat
cls
goto menu

:aboutCBT3
cls
echo Star Rail's 3rd and final Closed Beta has begun, and you guys can play it too. Except, not with CrepePlus quite yet.
echo If you would like to still try and play, press any key to continue. 
echo If you do not want to, close the manager and open it again.
echo ---
echo Pressing any key will download a folder that contains the steps,
echo and includes the installer for Fiddler Classic. If you already have Fiddler,
echo you do not have to install it again, and can just paste the script found in readme.md (in the CrepePlus-beta folder)
pause
powershell -Command "Invoke-WebRequest https://github.com/Midrooms/CrepePackages/raw/main/CrepePlus-beta.zip -Outfile CrepePlus-beta.zip"
powershell -Command "Expand-Archive -Path CrepePlus-beta.zip CrepePlus-beta -Force"
DEL CrepePlus-beta.zip
cls
echo CrepePlus Beta has been downloaded. Please go to the "CrepePlus-beta" folder for the steps and included Fiddler installer.
pause
cls
goto menu
