 @echo CrepePlus is now installing...
@echo In the meantime, please open MongoDB and press the green 'Connect' button.
@echo off
powershell -Command "Invoke-WebRequest https://github.com/Midrooms/CrepePackages/raw/main/CrepePackage.zip -Outfile CrepePackage.zip
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1036113032142667796/StartServer.bat -Outfile StartServer.bat"
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1042097488133357659/CrepePlusUpdater.bat -Outfile CrepeePlusUpdater.bat"
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1042097532131618836/NPMInstall.bat -Outfile NPMInstall.bat"
powershell -Command "Expand-Archive -Path CrepePackage.zip CrepePackage -Force"
DEL CrepePackage.zip
DEL README.md
DEL LICENSE
CD %CD%\CrepePackage
START npminstall.bat
cd..
cls
timeout /t 20
START StartServer.bat
DEL CrepePlusInstaller.bat