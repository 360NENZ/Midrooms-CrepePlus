@echo Please wait while CrepeSR is installed...

powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/983998821786878002/1026344036728061982/QuickServerLaunch.bat -Outfile QuickServerLaunch.bat"
powershell -Command "Invoke-WebRequest https://cdn.discordapp.com/attachments/983998821786878002/1026344793527304212/temp.bat -Outfile temp.bat"
START temp.bat
cls
@echo You must wait for NPM to install. (It's the window that opened when you ran this) Once that's done, close that window and press any key to continue.

pause

START QuickServerLaunch.bat
DEL temp.bat
DEL install.bat