@echo off
chcp 65001 >nul
title 케어링 ERP 개발환경 설치
echo.
echo  케어링 ERP 자동 설치 시작
echo  ----------------------------------------
echo.

:: 관리자 권한 확인 및 재실행
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo  관리자 권한으로 다시 실행합니다...
    powershell -Command "Start-Process '%~f0' -Verb RunAs"
    exit
)

:: ── Node.js 설치 ──────────────────────────────
echo [1/4] Node.js 확인 중...
node --version >nul 2>&1
if %errorlevel% equ 0 (
    for /f %%i in ('node --version') do echo  Node.js %%i 이미 설치되어 있습니다.
    goto CHECK_GIT
)

echo  Node.js 설치 중... (잠시 기다려주세요)
winget install OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements >nul 2>&1

:: winget 실패시 직접 다운로드
if %errorlevel% neq 0 (
    echo  다른 방법으로 설치 중...
    powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi' -OutFile '%TEMP%\nodejs.msi'; Start-Process msiexec -ArgumentList '/i %TEMP%\nodejs.msi /quiet /norestart' -Wait"
)

:: PATH 새로고침
set "PATH=%PATH%;%ProgramFiles%\nodejs"
call refreshenv >nul 2>&1

node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo  Node.js 설치 실패. 컴퓨터를 재시작 후 다시 실행해주세요.
    pause & exit
)
for /f %%i in ('node --version') do echo  Node.js %%i 설치 완료

:: ── Git 설치 ──────────────────────────────────
:CHECK_GIT
echo.
echo [2/4] Git 확인 중...
git --version >nul 2>&1
if %errorlevel% equ 0 (
    for /f "tokens=1-3" %%i in ('git --version') do echo  Git %%k 이미 설치되어 있습니다.
    goto INSTALL_CLAUDE
)

echo  Git 설치 중... (잠시 기다려주세요)
winget install Git.Git --silent --accept-package-agreements --accept-source-agreements >nul 2>&1

if %errorlevel% neq 0 (
    echo  다른 방법으로 설치 중...
    powershell -Command "Invoke-WebRequest -Uri 'https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/Git-2.44.0-64-bit.exe' -OutFile '%TEMP%\git.exe'; Start-Process '%TEMP%\git.exe' -ArgumentList '/VERYSILENT /NORESTART' -Wait"
)

set "PATH=%PATH%;%ProgramFiles%\Git\cmd"

git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo  Git 설치 완료. PATH 적용을 위해 컴퓨터를 재시작 후 다시 실행해주세요.
    pause & exit
)
for /f "tokens=1-3" %%i in ('git --version') do echo  Git %%k 설치 완료

:: ── Claude Code 설치 ──────────────────────────
:INSTALL_CLAUDE
echo.
echo [3/4] Claude Code 설치 중...
call npm install -g @anthropic-ai/claude-code >nul 2>&1
if %errorlevel% neq 0 (
    echo  Claude Code 설치 실패. 인터넷 연결을 확인해주세요.
    pause & exit
)
echo  Claude Code 설치 완료

:: ── 저장소 클론 ───────────────────────────────
echo.
echo [4/4] 케어링 ERP 파일 받는 중...
set REPO_DIR=%USERPROFILE%\caring-erp

if exist "%REPO_DIR%\.git" (
    echo  폴더가 이미 있습니다. 최신 내용으로 업데이트합니다.
    cd /d "%REPO_DIR%"
    git pull origin master
) else (
    git clone https://github.com/caring-play/hr.caring.git "%REPO_DIR%"
)

if %errorlevel% neq 0 (
    echo.
    echo  저장소 접근 실패.
    echo  GitHub 초대를 수락했는지 확인하거나
    echo  관리자(db.yu@caring.co.kr)에게 문의해주세요.
    pause & exit
)
echo  파일 받기 완료

:: ── 바탕화면에 실행 파일 생성 ─────────────────
set RUN_FILE=%USERPROFILE%\Desktop\케어링_실행.bat
(
echo @echo off
echo chcp 65001 ^>nul
echo title 케어링 ERP - Claude Code
echo cd /d "%REPO_DIR%"
echo echo.
echo echo  ===== 케어링 ERP 개발환경 =====
echo echo  수정하고 싶은 기능을 한국어로 입력하세요.
echo echo  종료하려면 /exit 입력
echo echo  ================================
echo echo.
echo git pull origin master
echo claude
) > "%RUN_FILE%"

echo.
echo  ========================================
echo   설치 완료!
echo  ========================================
echo.
echo   바탕화면의 '케어링_실행.bat' 을
echo   더블클릭하면 바로 시작됩니다.
echo.
echo   처음 실행 시 Claude 로그인이 필요합니다.
echo   (claude.ai 계정으로 로그인)
echo.
pause
