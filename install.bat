powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/983998821786878002/1026344036728061982/QuickServerLaunch.bat -Outfile QuickServerLaunch.bat"
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/983998821786878002/1026344793527304212/temp.bat -Outfile temp.bat"
START temp.bat
cls
@echo Please wait for NPM to be installed in the window that just opened. Close it once it's finished, then press a key to continue.
pause
START QuickServerLaunch.bat
DEL CrepePackage.zip
DEL LICENSE
DEL temp.bat
DEL readme.md
DEL install.bat
