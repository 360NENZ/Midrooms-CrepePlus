@echo Hey there! CrepePlus is currently installing... Please wait a few moments. The server will start right after.
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1033204247602417764/CrepePackage.zip -Outfile CrepePackage.zip
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/1026386264687128626/1033197118707486742/StartServer.bat -Outfile StartServer.bat"
powershell -Command "Expand-Archive -Path CrepePackage.zip CrepePackage -Force"
DEL CrepePackage.zip
DEL readme.md
DEL LICENSE
START StartServer.bat
DEL CrepePlusInstaller.bat