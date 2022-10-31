@echo Hey there! CrepePlus is currently installing... Please wait a few moments. The server will start right after.
@echo In the meantime, please open MongoDB and press the green 'Connect' button!
@echo off
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1036114351934931034/CrepePackage.zip -Outfile CrepePackage.zip
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1036113032142667796/StartServer.bat -Outfile StartServer.bat"
powershell -Command "Expand-Archive -Path CrepePackage.zip CrepePackage -Force"
DEL CrepePackage.zip
DEL README.md
DEL LICENSE
cls
START StartServer.bat
DEL CrepePlusInstaller.bat
