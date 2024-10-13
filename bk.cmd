@echo off
set source=%1
@echo %source%
set target=%source%-BK
@echo %target%
robocopy %source% %target% /E /XD node_modules

