@echo Updating CrepePlus...
@RD /S /Q "%CD%\CrepePackage"
DEL StartServer.bat
DEL NPMInstall.bat
powershell -Command "Invoke-WebRequest https://github.com/Midrooms/CrepePackages/raw/main/CrepePackage.zip -Outfile CrepePackage.zip"
powershell -Command "Expand-Archive -Path CrepePackage.zip CrepePackage -Force"
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1036113032142667796/StartServer.bat -Outfile StartServer.bat"
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1042097532131618836/NPMInstall.bat -Outfile NPMInstall.bat"
DEL CrepePackage.zip
START NPMInstall.bat
cls
@echo CrepePlus has been updated.
@echo Press any key to close.
PAUSE
exit