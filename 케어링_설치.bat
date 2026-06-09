@echo off
chcp 65001 >nul
title 케어링 ERP 개발환경 설치

echo.
echo  ██████╗██╗  ██╗██╗███████╗
echo ██╔════╝██║  ██║██║╚══███╔╝
echo ██║     ███████║██║  ███╔╝
echo ██║     ██╔══██║██║ ███╔╝
echo ╚██████╗██║  ██║██║███████╗
echo  ╚═════╝╚═╝  ╚═╝╚═╝╚══════╝
echo.
echo  케어링 ERP 개발환경 자동 설치 프로그램
echo  ----------------------------------------
echo.

:: Node.js 설치 확인
echo [1/4] Node.js 확인 중...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo  Node.js가 없습니다. 설치 페이지를 엽니다.
    echo  설치 완료 후 이 파일을 다시 실행해주세요.
    start https://nodejs.org/en/download
    pause
    exit
) else (
    for /f %%i in ('node --version') do echo  Node.js %%i 확인 완료
)

:: Git 설치 확인
echo.
echo [2/4] Git 확인 중...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo  Git이 없습니다. 설치 페이지를 엽니다.
    echo  설치 완료 후 이 파일을 다시 실행해주세요.
    start https://git-scm.com/download/win
    pause
    exit
) else (
    for /f %%i in ('git --version') do echo  Git %%i 확인 완료
)

:: Claude Code 설치
echo.
echo [3/4] Claude Code 설치 중...
npm install -g @anthropic-ai/claude-code >nul 2>&1
if %errorlevel% neq 0 (
    echo  설치 실패. 인터넷 연결을 확인해주세요.
    pause
    exit
)
echo  Claude Code 설치 완료

:: 저장소 클론
echo.
echo [4/4] 케어링 ERP 저장소 받는 중...
set REPO_DIR=%USERPROFILE%\caring-erp

if exist "%REPO_DIR%" (
    echo  이미 폴더가 있습니다. 최신 내용으로 업데이트합니다.
    cd /d "%REPO_DIR%"
    git pull origin master
) else (
    git clone https://github.com/caring-play/hr.caring.git "%REPO_DIR%"
)

if %errorlevel% neq 0 (
    echo  저장소를 받는데 실패했습니다.
    echo  GitHub 초대를 수락했는지 확인해주세요.
    pause
    exit
)

echo.
echo  ----------------------------------------
echo  설치 완료!
echo  ----------------------------------------
echo.
echo  이제 케어링_실행.bat 을 더블클릭하면
echo  Claude Code가 실행됩니다.
echo.

:: 실행 파일 생성
echo @echo off > "%USERPROFILE%\Desktop\케어링_실행.bat"
echo chcp 65001 ^>nul >> "%USERPROFILE%\Desktop\케어링_실행.bat"
echo title 케어링 ERP - Claude Code >> "%USERPROFILE%\Desktop\케어링_실행.bat"
echo cd /d "%REPO_DIR%" >> "%USERPROFILE%\Desktop\케어링_실행.bat"
echo echo. >> "%USERPROFILE%\Desktop\케어링_실행.bat"
echo echo  케어링 ERP 개발 환경이 시작됩니다... >> "%USERPROFILE%\Desktop\케어링_실행.bat"
echo echo  수정을 원하는 기능을 한국어로 입력하세요. >> "%USERPROFILE%\Desktop\케어링_실행.bat"
echo echo. >> "%USERPROFILE%\Desktop\케어링_실행.bat"
echo git pull origin master >> "%USERPROFILE%\Desktop\케어링_실행.bat"
echo claude >> "%USERPROFILE%\Desktop\케어링_실행.bat"

echo  바탕화면에 "케어링_실행.bat" 파일이 생성되었습니다.
echo.
pause
