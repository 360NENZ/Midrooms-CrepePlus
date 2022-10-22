@echo off
@echo Hey there! CrepePlus is currently installing... Please wait a few moments. The server will start right after.
DEL CrepePlus Alpha.zip
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1033196205993361438/CrepePackage.zip -Outfile CrepePackage.zip"
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1033197118707486742/StartServer.bat -Outfile StartServer.bat"
powershell -Command "Expand-Archive -Path CrepePackage.Zip CrepePackage -Force"
DEL CrepePackage.zip
DEL LICENCE
DEL readme.md
START StartServer.bat
DEL CrepePlusInstaller.bat