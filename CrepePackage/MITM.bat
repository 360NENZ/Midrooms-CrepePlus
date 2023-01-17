cd %cd%\py
@echo off
title CrepeSR mitmdump
timeout /t 3
mitmdump -s proxy.py -k
