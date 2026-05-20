// ===== 급여 데이터 =====
var salData = {
    2026: [
        { month:3, payDate:'2026-04-03', payItems:[{label:'기본급',amt:3800000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000},{label:'연장근로수당',amt:180000}], dedItems:[{label:'국민연금',amt:180000},{label:'건강보험',amt:142060},{label:'장기요양보험',amt:18380},{label:'고용보험',amt:37260},{label:'소득세',amt:112400},{label:'지방소득세',amt:11240}]},
        { month:2, payDate:'2026-03-03', payItems:[{label:'기본급',amt:3800000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000}], dedItems:[{label:'국민연금',amt:180000},{label:'건강보험',amt:142060},{label:'장기요양보험',amt:18380},{label:'고용보험',amt:36450},{label:'소득세',amt:98500},{label:'지방소득세',amt:9850},{label:'연말정산',amt:-215000}]},
        { month:1, payDate:'2026-02-03', payItems:[{label:'기본급',amt:3800000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000}], dedItems:[{label:'국민연금',amt:180000},{label:'건강보험',amt:142060},{label:'장기요양보험',amt:18380},{label:'고용보험',amt:36450},{label:'소득세',amt:98500},{label:'지방소득세',amt:9850}]},
    ],
    2025: [
        { month:12, payDate:'2026-01-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000},{label:'연말상여',amt:500000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:36260},{label:'소득세',amt:105600},{label:'지방소득세',amt:10560}]},
        { month:11, payDate:'2025-12-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000},{label:'연장근로수당',amt:210000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:38610},{label:'소득세',amt:118700},{label:'지방소득세',amt:11870}]},
        { month:10, payDate:'2025-11-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:36260},{label:'소득세',amt:98100},{label:'지방소득세',amt:9810}]},
        { month:9, payDate:'2025-10-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000},{label:'연장근로수당',amt:155000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:37810},{label:'소득세',amt:109300},{label:'지방소득세',amt:10930}]},
        { month:8, payDate:'2025-09-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000},{label:'하계휴가비',amt:300000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:39260},{label:'소득세',amt:127400},{label:'지방소득세',amt:12740}]},
        { month:7, payDate:'2025-08-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:36260},{label:'소득세',amt:98100},{label:'지방소득세',amt:9810}]},
        { month:6, payDate:'2025-07-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000},{label:'연장근로수당',amt:190000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:38160},{label:'소득세',amt:115200},{label:'지방소득세',amt:11520}]},
        { month:5, payDate:'2025-06-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:36260},{label:'소득세',amt:98100},{label:'지방소득세',amt:9810}]},
        { month:4, payDate:'2025-05-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000},{label:'연장근로수당',amt:130000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:37560},{label:'소득세',amt:107600},{label:'지방소득세',amt:10760}]},
        { month:3, payDate:'2025-04-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:36260},{label:'소득세',amt:98100},{label:'지방소득세',amt:9810}]},
        { month:2, payDate:'2025-03-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:36260},{label:'소득세',amt:98100},{label:'지방소득세',amt:9810},{label:'연말정산',amt:-180000}]},
        { month:1, payDate:'2025-02-03', payItems:[{label:'기본급',amt:3700000},{label:'직책수당',amt:200000},{label:'식대',amt:100000},{label:'교통비',amt:50000}], dedItems:[{label:'국민연금',amt:175500},{label:'건강보험',amt:138320},{label:'장기요양보험',amt:17890},{label:'고용보험',amt:36260},{label:'소득세',amt:98100},{label:'지방소득세',amt:9810}]},
    ]
};

// ===== 로그인 기능 =====

function showAlert(msg) {
    return new Promise(function(resolve) {
        var modal = document.getElementById('sys-alert-modal');
        var msgEl = document.getElementById('sys-alert-msg');
        var okBtn = document.getElementById('sys-alert-ok');
        if (!modal) { alert(msg); resolve(); return; }
        msgEl.textContent = msg;
        modal.style.display = 'flex';
        function done() { modal.style.display = 'none'; okBtn.removeEventListener('click', done); resolve(); }
        okBtn.addEventListener('click', done);
    });
}

function showConfirm(msg) {
    return new Promise(function(resolve) {
        var modal  = document.getElementById('sys-confirm-modal');
        var msgEl  = document.getElementById('sys-confirm-msg');
        var okBtn  = document.getElementById('sys-confirm-ok');
        var canBtn = document.getElementById('sys-confirm-cancel');
        if (!modal) { resolve(confirm(msg)); return; }
        msgEl.textContent = msg;
        modal.style.display = 'flex';
        function ok()     { modal.style.display = 'none'; okBtn.removeEventListener('click', ok); canBtn.removeEventListener('click', cancel); resolve(true); }
        function cancel() { modal.style.display = 'none'; okBtn.removeEventListener('click', ok); canBtn.removeEventListener('click', cancel); resolve(false); }
        okBtn.addEventListener('click', ok);
        canBtn.addEventListener('click', cancel);
    });
}

// 테스트 계정 (실제로는 서버에서 확인)
const testAccounts = [
    { id: 'db.yu@caring.co.kr', password: 'gkfnql123!' },
];

// 페이지 로드 시 로그인 상태 확인
window.addEventListener('load', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userData = localStorage.getItem('userData');
    
    if (isLoggedIn === 'true' && userData) {
        showMainPage(JSON.parse(userData));
    } else {
        showLoginPage();
    }
});

// 로그인 페이지 표시
function showLoginPage() {
    document.getElementById('login-page').classList.add('active');
    var cw = document.getElementById('chatbot-widget');
    if (cw) cw.style.display = 'none';
}

// 메인 페이지 표시
function showMainPage(user) {
    document.getElementById('login-page').classList.remove('active');
    var cw = document.getElementById('chatbot-widget');
    if (cw) cw.style.display = 'flex';
    openTabs = [];
    activeTabId = null;
    tabViewStart = 0;
    initializeMainPage(user);
}

var _loginPendingUser = null;

// 로그인 폼 핸들링
document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    hrDataLoad();

    const userId   = document.getElementById('login-id').value.trim();
    const password = document.getElementById('login-password').value;

    // 1) 관리자 계정 확인
    const account = testAccounts.find(acc => acc.id === userId && acc.password === password);
    if (account) {
        // 인사정보에 동일 이메일 직원 있으면 실명/부서 사용
        const adminEmp = employees.find(function(e) { return e.email === userId; });
        const userData = {
            id: userId,
            name:  adminEmp ? adminEmp.name       : userId.split('@')[0].toUpperCase(),
            dept:  adminEmp ? adminEmp.department : '',
            empId: adminEmp ? adminEmp.id         : null
        };
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(userData));
        showMainPage(userData);
        return;
    }

    // 2) 인사정보 직원 계정 확인
    const emp = employees.find(function(e) { return e.email === userId; });
    if (emp) {
        const ext = hrExtData[emp.id] || {};
        const storedPwd = ext.loginPassword !== undefined ? ext.loginPassword : '0000';
        if (storedPwd === password) {
            if (!ext.pwdChanged) {
                // 최초 로그인 → 비밀번호 변경 팝업
                _loginPendingUser = { empId: emp.id, email: userId, name: emp.name, dept: emp.department };
                document.getElementById('pwd-new').value = '';
                document.getElementById('pwd-confirm').value = '';
                var errEl = document.getElementById('pwd-change-err');
                if (errEl) errEl.style.display = 'none';
                document.getElementById('pwd-change-modal').style.display = 'flex';
            } else {
                const userData = { id: userId, name: emp.name, dept: emp.department, empId: emp.id };
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userData', JSON.stringify(userData));
                showMainPage(userData);
            }
            return;
        }
    }

    // 로그인 실패
    await showAlert('아이디 또는 비밀번호가 올바르지 않습니다.');
    document.getElementById('login-password').value = '';
});

async function hrResetPassword() {
    if (!hrCurrentEmpId) { showToast('직원을 먼저 선택해주세요.', 'info'); return; }
    if (!await showConfirm('비밀번호를 0000으로 초기화하시겠습니까?')) return;
    if (!hrExtData[hrCurrentEmpId]) hrExtData[hrCurrentEmpId] = {};
    hrExtData[hrCurrentEmpId].loginPassword = '0000';
    hrExtData[hrCurrentEmpId].pwdChanged    = false;
    hrDataSave();
    showToast('비밀번호가 0000으로 초기화되었습니다.');
}

function pwdChangeConfirm() {
    var newPwd     = document.getElementById('pwd-new').value;
    var confirmPwd = document.getElementById('pwd-confirm').value;
    var errEl      = document.getElementById('pwd-change-err');
    function showErr(msg) { errEl.textContent = msg; errEl.style.display = 'block'; }

    if (!newPwd || newPwd.length < 4) { showErr('비밀번호는 4자리 이상 입력해주세요.'); return; }
    if (newPwd === '0000')            { showErr('초기 비밀번호와 다른 비밀번호를 입력해주세요.'); return; }
    if (newPwd !== confirmPwd)        { showErr('비밀번호가 일치하지 않습니다.'); return; }

    if (!_loginPendingUser) return;
    if (!hrExtData[_loginPendingUser.empId]) hrExtData[_loginPendingUser.empId] = {};
    hrExtData[_loginPendingUser.empId].loginPassword = newPwd;
    hrExtData[_loginPendingUser.empId].pwdChanged    = true;
    hrDataSave();

    document.getElementById('pwd-change-modal').style.display = 'none';

    const userData = { id: _loginPendingUser.email, name: _loginPendingUser.name, dept: _loginPendingUser.dept || '', empId: _loginPendingUser.empId };
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(userData));
    showMainPage(userData);
    _loginPendingUser = null;
}

// 로그아웃
document.getElementById('logout-btn').addEventListener('click', async () => {
    document.getElementById('more-dropdown').style.display = 'none';
    if (await showConfirm('정말 로그아웃 하시겠습니까?')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
        localStorage.removeItem('cave_tabs_v1');
        document.getElementById('login-form').reset();
        openTabs = [];
        activeTabId = null;
        tabViewStart = 0;
        showLoginPage();
    }
});

// ===== 메인 페이지 초기화 =====
function initializeMainPage(user) {
    // openTab('my-home')이 saveTabState로 덮어쓰기 전에 이전 탭 목록을 먼저 읽음
    var prevTabs = [];
    try { var _s = JSON.parse(localStorage.getItem('cave_tabs_v1')); if (_s && Array.isArray(_s.tabs)) prevTabs = _s.tabs; } catch(e) {}
    document.getElementById('user-name-display').textContent = user.name;
    document.getElementById('user-dept-display').textContent = user.dept || '';
    var dashName = document.getElementById('dash-user-name');
    if (dashName) dashName.textContent = user.name;
    updateDashboard();
    loadBadges();
    initGmailIntegration();
    openTab('my-home');
    // 이전 탭들을 복원 (홈 제외, 이미 열린 것 제외)
    prevTabs.forEach(function(id) { if (!openTabs.includes(id)) openTabs.push(id); });
    if (prevTabs.length > 0) { renderTabs(); saveTabState(); }
    // 조직도 날짜 초기화 (탭 클릭 전에도 날짜 표시)
    orgChartDate = new Date();
    setTimeout(renderOrgChart, 100);
    // 마이페이지 메뉴 자동 펼치기
    const myGroup = document.getElementById('group-my');
    const myBtn = document.querySelector('.menu-btn[data-group="my"]');
    if (myGroup && myBtn) { myGroup.classList.add('open'); myBtn.classList.add('open'); }
}


const employees = [
    { id:'E001', name:'김철수',  department:'개발팀',    position:'과장',  email:'chulsu.kim@caring.com',      hire_date:'2020-01-15', phone:'010-1234-5678', salary:{base:4000000, bonus:800000,  allowance:200000} },
    { id:'E002', name:'이영희',  department:'영업팀',    position:'대리',  email:'younghee.lee@caring.com',    hire_date:'2021-06-20', phone:'010-2345-6789', salary:{base:3500000, bonus:700000,  allowance:150000} },
    { id:'E003', name:'박민수',  department:'개발팀',    position:'사원',  email:'minsu.park@caring.com',      hire_date:'2022-03-10', phone:'010-3456-7890', salary:{base:2800000, bonus:500000,  allowance:100000} },
    { id:'E004', name:'정수진',  department:'인사팀',    position:'과장',  email:'sujin.jung@caring.com',      hire_date:'2019-11-05', phone:'010-4567-8901', salary:{base:3800000, bonus:750000,  allowance:180000} },
    { id:'E005', name:'최동욱',  department:'영업팀',    position:'사원',  email:'donguk.choi@caring.com',     hire_date:'2023-01-02', phone:'010-5678-9012', salary:{base:2500000, bonus:400000,  allowance:80000}  },
    { id:'E006', name:'강지현',  department:'간호팀',    position:'팀장',  email:'jihyun.kang@cccare.com',     hire_date:'2018-03-05', phone:'010-6789-0123', salary:{base:5200000, bonus:1000000, allowance:300000} },
    { id:'E007', name:'윤성호',  department:'사회복지팀',position:'과장',  email:'sungho.yoon@cccare.com',     hire_date:'2019-08-15', phone:'010-7890-1234', salary:{base:4100000, bonus:820000,  allowance:200000} },
    { id:'E008', name:'임수연',  department:'행정팀',    position:'대리',  email:'suyeon.lim@cccare.com',      hire_date:'2021-04-01', phone:'010-8901-2345', salary:{base:3300000, bonus:650000,  allowance:150000} },
    { id:'E009', name:'한정민',  department:'요양팀',    position:'팀장',  email:'jungmin.han@ccare.com',      hire_date:'2017-07-10', phone:'010-9012-3456', salary:{base:5500000, bonus:1100000, allowance:350000} },
    { id:'E010', name:'오미래',  department:'간호팀',    position:'과장',  email:'mirae.oh@ccare.com',         hire_date:'2020-09-20', phone:'010-0123-4567', salary:{base:4300000, bonus:860000,  allowance:220000} },
    { id:'E011', name:'서준혁',  department:'행정팀',    position:'사원',  email:'junhyuk.seo@ccare.com',      hire_date:'2023-05-15', phone:'010-1234-0987', salary:{base:2700000, bonus:500000,  allowance:100000} },
    { id:'E012', name:'문소희',  department:'사회복지팀',position:'팀장',  email:'sohee.moon@sunhada.com',     hire_date:'2016-02-01', phone:'010-2345-1098', salary:{base:5800000, bonus:1160000, allowance:400000} },
    { id:'E013', name:'배현우',  department:'요양팀',    position:'대리',  email:'hyunwoo.bae@sunhada.com',    hire_date:'2022-07-01', phone:'010-3456-2109', salary:{base:3200000, bonus:640000,  allowance:140000} },
    { id:'E014', name:'신예진',  department:'행정팀',    position:'사원',  email:'yejin.shin@sunhada.com',     hire_date:'2024-01-15', phone:'010-4567-3210', salary:{base:2600000, bonus:450000,  allowance:90000}  },
    { id:'E015', name:'장민호',  department:'개발팀',    position:'부장',  email:'minho.jang@caring.com',      hire_date:'2015-06-01', phone:'010-5678-4321', salary:{base:6500000, bonus:1300000, allowance:500000} },
];

const vacations = [
    {
        id: 1,
        employee_name: '김철수',
        type: '연차',
        start_date: '2026-04-01',
        end_date: '2026-04-03',
        days: 3,
        status: '진행중'
    },
    {
        id: 2,
        employee_name: '이영희',
        type: '병가',
        start_date: '2026-03-28',
        end_date: '2026-03-30',
        days: 2,
        status: '진행중'
    },
    {
        id: 3,
        employee_name: '박민수',
        type: '연차',
        start_date: '2026-05-10',
        end_date: '2026-05-12',
        days: 3,
        status: '승인대기'
    }
];

// ===== 날짜 분할 입력 유틸리티 =====
function dateSplitHtml(id, wrapCls) {
    var cls = 'date-split-wrap' + (wrapCls ? ' ' + wrapCls : '');
    return '<div class="' + cls + '" id="' + id + '-wrap">' +
        '<input class="date-split-y" type="text" maxlength="4" placeholder="YYYY" oninput="dateSplitInput(this,\'y\')">' +
        '<span class="date-split-sep">년</span>' +
        '<input class="date-split-m" type="text" maxlength="2" placeholder="MM" oninput="dateSplitInput(this,\'m\')">' +
        '<span class="date-split-sep">월</span>' +
        '<input class="date-split-d" type="text" maxlength="2" placeholder="DD" oninput="dateSplitInput(this,\'d\')">' +
        '<span class="date-split-sep">일</span>' +
        '<input type="hidden" id="' + id + '" class="date-split-hidden">' +
        '</div>';
}
function dateSplitInput(el, part) {
    el.value = el.value.replace(/\D/g, '');
    var wrap = el.closest('.date-split-wrap');
    if (!wrap) return;
    var y = wrap.querySelector('.date-split-y');
    var m = wrap.querySelector('.date-split-m');
    var d = wrap.querySelector('.date-split-d');
    var h = wrap.querySelector('.date-split-hidden');
    if (part === 'y' && el.value.length === 4) { m.focus(); m.select(); }
    if (part === 'm' && el.value.length === 2) { d.focus(); d.select(); }
    if (h) {
        h.value = (y.value && m.value && d.value)
            ? y.value.padStart(4,'0') + '-' + m.value.padStart(2,'0') + '-' + d.value.padStart(2,'0')
            : '';
        h.dispatchEvent(new Event('change', { bubbles: true }));
    }
}
function setDateVal(id, val) {
    var wrap = document.getElementById(id + '-wrap');
    if (!wrap) { var inp = document.getElementById(id); if (inp) inp.value = val || ''; return; }
    var y = wrap.querySelector('.date-split-y');
    var m = wrap.querySelector('.date-split-m');
    var d = wrap.querySelector('.date-split-d');
    var h = wrap.querySelector('.date-split-hidden');
    if (val && val.length >= 10) {
        if (y) y.value = val.substring(0, 4);
        if (m) m.value = val.substring(5, 7);
        if (d) d.value = val.substring(8, 10);
        if (h) h.value = val.substring(0, 10);
    } else {
        if (y) y.value = ''; if (m) m.value = ''; if (d) d.value = ''; if (h) h.value = '';
    }
}
function makeDateSplitEl(wrapCls, value, onChange) {
    var wrap = document.createElement('div');
    wrap.className = 'date-split-wrap' + (wrapCls ? ' ' + wrapCls : '');
    wrap.innerHTML =
        '<input class="date-split-y" type="text" maxlength="4" placeholder="YYYY">' +
        '<span class="date-split-sep">년</span>' +
        '<input class="date-split-m" type="text" maxlength="2" placeholder="MM">' +
        '<span class="date-split-sep">월</span>' +
        '<input class="date-split-d" type="text" maxlength="2" placeholder="DD">' +
        '<span class="date-split-sep">일</span>';
    var y = wrap.querySelector('.date-split-y');
    var m = wrap.querySelector('.date-split-m');
    var d = wrap.querySelector('.date-split-d');
    function gv() {
        return (y.value && m.value && d.value)
            ? y.value.padStart(4,'0') + '-' + m.value.padStart(2,'0') + '-' + d.value.padStart(2,'0')
            : '';
    }
    function upd(el, part) {
        el.value = el.value.replace(/\D/g, '');
        if (part === 'y' && el.value.length === 4) { m.focus(); m.select(); }
        if (part === 'm' && el.value.length === 2) { d.focus(); d.select(); }
        if (onChange) onChange(gv());
    }
    y.oninput = function() { upd(y, 'y'); };
    m.oninput = function() { upd(m, 'm'); };
    d.oninput = function() { upd(d, 'd'); };
    if (value && value.length >= 10) {
        y.value = value.substring(0, 4);
        m.value = value.substring(5, 7);
        d.value = value.substring(8, 10);
    }
    Object.defineProperty(wrap, 'value', {
        get: gv,
        set: function(v) {
            if (v && v.length >= 10) {
                y.value = v.substring(0, 4); m.value = v.substring(5, 7); d.value = v.substring(8, 10);
            } else { y.value = ''; m.value = ''; d.value = ''; }
        }
    });
    return wrap;
}

// ===== 탭 관리 시스템 =====
const MAX_VISIBLE_TABS = 6;
const PINNED_TABS = ['my-home'];

function saveTabState() {
    try { localStorage.setItem('cave_tabs_v1', JSON.stringify({ tabs: openTabs, active: activeTabId })); } catch(e) {}
}
function restoreTabState() {
    try {
        var saved = JSON.parse(localStorage.getItem('cave_tabs_v1'));
        if (!saved || !Array.isArray(saved.tabs)) return;
        saved.tabs.forEach(function(id) { if (!openTabs.includes(id)) openTabs.push(id); });
        renderTabs();
    } catch(e) {}
}
let openTabs = [];
let activeTabId = null;
let tabViewStart = 0;

const menuTitles = {
    'dashboard': '대시보드',
    'my-hr-info': '내 인사정보',
    'my-att-apply': '근태신청',
    'my-cert': '증명서 발급',
    'my-sal-slip': '급여명세서 조회',
    'my-org-chart': '조직도',
    'my-gmail': 'G-Mail',
    'my-calendar': 'Calendar',
    'my-slack': 'Slack',
    'my-notion': 'Notion',
    'recruit-applicants': '지원자 관리',
    'hr-info': '인사정보',
    'hr-appointment': '인사발령',
    'hr-appt-request': '인사발령신청',
    'hr-appt-process': '인사발령처리',
    'hr-appt-history': '인사발령내역',
    'hr-report-info': '인사정보 조회',
    'hr-report-join': '입퇴사 조회',
    'hr-report-list': '사원 명부 조회',
    'hr-cert': '증명서 발급',
    'att-status': '연차 현황',
    'att-apply': '연차 신청',
    'att-view': '연차 조회',
    'sal-wage': '임금 정보',
    'sal-calc': '급여 계산',
    'sal-book': '급여 대장',
    'sal-slip': '급여명세서',
    'sal-status': '급여 현황',
    'ret-calc': '퇴직금 계산',
    'ret-status': '퇴직금 현황',
    'ret-reserve': '퇴직적립금',
    'ins-lookup': '보험료 조회',
    'ins-payment': '납부현황',
    'ins-rates': '보험요율안내',
    'approval-send-doc': '상신문서',
    'approval-send-temp': '임시보관문서',
    'approval-send-recv': '수신상신문서',
    'approval-recv-pending': '미결문서',
    'approval-recv-done': '기결문서',
    'approval-recv-closed': '종결문서',
    'approval-recv-ref': '수신참조문서',
    'approval-important': '중요문서함',
    'board-notice': '공지사항',
    'board-free': '자유게시판',
    'board-survey': '설문조사',
    'board-qna': 'FAQ',
    'board-manual': '업무매뉴얼',
    'board-study': '공부방',
    'my-home': '홈',
    'work-note': '업무노트',
    'work-note-personal': '개인노트',
    'work-note-project':  '프로젝트',
    'work-note-shared':   '공용노트',
    'sys-company': '회사정보',
    'sys-workplace': '사업장정보',
    'sys-dept': '부서정보',
    'sys-auth-view': '권한 조회',
    'sys-auth-set': '권한 설정',
    'sys-account': '계정 관리',
    'sys-code': '코드 관리',
    'goal-setting':  '목표설정',
    'goal-manage':   '목표관리',
    'goal-overview': '목표현황',
    'eval-write':   '평가작성',
    'eval-status':  '평가현황',
    'eval-analysis':'평가분석',
    'eval-settings':'평가설정',
    'upload-hr-emp':   '사원 일괄 등록',
    'upload-hr-appt':  '발령 일괄 등록',
    'upload-hr-card':  '인사기록카드 일괄 등록',
    'upload-sal-pay':  '급여 내역 업로드',
    'upload-eval-result': '평가 결과 업로드',
    'upload-att-data': '근태 내역 업로드',
};

function openTab(tabId) {
    if (!openTabs.includes(tabId)) {
        openTabs.push(tabId);
        if (openTabs.length > MAX_VISIBLE_TABS) {
            tabViewStart = openTabs.length - MAX_VISIBLE_TABS;
        }
    }
    activeTabId = tabId;
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    const el = document.getElementById(tabId);
    if (el) { el.classList.add('active'); el.scrollTop = 0; }
    document.querySelectorAll('.menu-btn[data-tab]').forEach(b => b.classList.remove('active'));
    const menuBtn = document.querySelector(`.menu-btn[data-tab="${tabId}"]`);
    if (menuBtn) menuBtn.classList.add('active');
    renderTabs();
    saveTabState();
    // 탭별 초기화
    if (tabId === 'my-slack') setTimeout(initSlackIntegration, 0);
    if (tabId === 'my-notion') setTimeout(initNotionIntegration, 0);
    if (tabId === 'my-home') setTimeout(initHomePage, 0);
    if (tabId === 'my-org-chart') setTimeout(initOrgChart, 0);
    if (tabId === 'dashboard') setTimeout(renderOrgChart, 0);
    if (tabId === 'hr-info') setTimeout(initHrInfo, 0);
    if (tabId === 'board-notice') setTimeout(initBoardNotice, 0);
    if (tabId === 'board-free')   setTimeout(initBoardFree, 0);
    if (tabId === 'board-survey') setTimeout(initBoardSurvey, 0);
    if (tabId === 'board-qna')       setTimeout(initBoardQna, 0);
    if (tabId === 'board-manual')    setTimeout(initBoardManual, 0);
    if (tabId === 'board-study')     setTimeout(initBoardStudy, 0);
    if (tabId === 'sal-wage')        setTimeout(wageInit, 0);
    if (tabId === 'ins-lookup')      setTimeout(insLookupInit, 0);
    if (tabId === 'ins-payment')     setTimeout(insPaymentInit, 0);
    if (tabId === 'ins-rates')       setTimeout(insRatesInit, 0);
    if (tabId === 'hr-appt-request')    setTimeout(apptReqInit, 0);
    if (tabId === 'hr-appt-process')    setTimeout(apptProcessRender, 0);
    if (tabId === 'hr-appt-history')    setTimeout(apptHistoryRender, 0);
    if (tabId === 'work-note-personal') setTimeout(function() { if (!noteInited) noteInit(); else { noteRenderCatFilter(); noteRenderList(); } }, 0);
    if (tabId === 'work-note-project')  setTimeout(projInit, 0);
    if (tabId === 'work-note-shared')   setTimeout(snoteInit, 0);
    if (tabId === 'my-sal-slip')        salInit();
    if (tabId === 'goal-setting')  setTimeout(goalSettingRender, 0);
    if (tabId === 'goal-manage')   setTimeout(goalManageRender, 0);
    if (tabId === 'goal-overview') setTimeout(goalOverviewRender, 0);
    if (tabId === 'eval-write')    setTimeout(function(){ evalInit(); evalWriteRender(); }, 0);
    if (tabId === 'eval-status')   setTimeout(function(){ evalInit(); evalStatusRender(); }, 0);
    if (tabId === 'eval-analysis') setTimeout(function(){ evalInit(); evalAnalysisRender(); }, 0);
    if (tabId === 'eval-settings') setTimeout(function(){ evalInit(); evalSettingsTab(evalSettingsCurrentTab); }, 0);
    if (tabId === 'sys-account') setTimeout(sacctInit, 0);
    if (tabId === 'sys-code') setTimeout(syscodeInit, 0);
    if (tabId === 'sys-dept') setTimeout(sdeptInit, 0);
    if (tabId === 'sys-company') setTimeout(scompInit, 0);
    if (tabId === 'sys-workplace') setTimeout(swpInit, 0);
    if (tabId === 'sys-auth-set')  setTimeout(authInit, 0);
    if (tabId === 'sys-auth-view') setTimeout(authvInit, 0);
    if (tabId === 'upload-hr-emp')  setTimeout(function(){ uploadGuideRender('hr-emp');  }, 0);
    if (tabId === 'upload-hr-appt') setTimeout(function(){ uploadGuideRender('hr-appt'); }, 0);
    if (tabId === 'upload-hr-card') setTimeout(function(){ uploadGuideRender('hr-card'); }, 0);
    setTimeout(renderTabs, 0);
}

function closeTab(tabId, event) {
    if (event) event.stopPropagation();
    if (PINNED_TABS.includes(tabId)) return;
    const idx = openTabs.indexOf(tabId);
    if (idx === -1) return;
    openTabs.splice(idx, 1);
    if (activeTabId === tabId) {
        if (openTabs.length > 0) {
            const newIdx = Math.min(idx, openTabs.length - 1);
            openTab(openTabs[newIdx]);
            return;
        } else {
            activeTabId = null;
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.menu-btn[data-tab]').forEach(b => b.classList.remove('active'));
        }
    }
    if (tabViewStart > 0 && tabViewStart + MAX_VISIBLE_TABS > openTabs.length) {
        tabViewStart = Math.max(0, openTabs.length - MAX_VISIBLE_TABS);
    }
    renderTabs();
    saveTabState();
}

function renderTabs() {
    PINNED_TABS.forEach(function(id) { if (!openTabs.includes(id)) openTabs.unshift(id); });
    const tabBar = document.getElementById('tab-bar');
    const prevBtn = document.getElementById('tab-prev');
    const nextBtn = document.getElementById('tab-next');
    const moreBtn = document.getElementById('tab-more');
    const overflowDd = document.getElementById('tab-overflow-dropdown');
    if (!tabBar) return;

    const hasOverflow = openTabs.length > MAX_VISIBLE_TABS;
    const visibleTabs = openTabs.slice(tabViewStart, tabViewStart + MAX_VISIBLE_TABS);

    if (prevBtn) prevBtn.style.display = hasOverflow && tabViewStart > 0 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = hasOverflow && tabViewStart + MAX_VISIBLE_TABS < openTabs.length ? 'flex' : 'none';
    if (moreBtn) moreBtn.style.display = hasOverflow ? 'flex' : 'none';

    tabBar.innerHTML = visibleTabs.map(id => `
        <div class="tab-item ${id === activeTabId ? 'active' : ''}" onclick="openTab('${id}')">
            <span>${menuTitles[id] || id}</span>
            ${PINNED_TABS.includes(id) ? '' : `<button class="tab-close-btn" onclick="closeTab('${id}', event)">×</button>`}
        </div>
    `).join('');

    if (hasOverflow && overflowDd) {
        const hiddenTabs = openTabs.filter((_, i) => i < tabViewStart || i >= tabViewStart + MAX_VISIBLE_TABS);
        overflowDd.innerHTML = hiddenTabs.map(id => `
            <div class="overflow-tab-item ${id === activeTabId ? 'active' : ''}" onclick="openTab('${id}'); document.getElementById('tab-overflow-dropdown').style.display='none';">
                ${menuTitles[id] || id}
            </div>
        `).join('');
    }
}

// 탭 네비게이션 버튼
document.getElementById('tab-prev').addEventListener('click', () => {
    tabViewStart = Math.max(0, tabViewStart - 1);
    renderTabs();
});
document.getElementById('tab-next').addEventListener('click', () => {
    tabViewStart = Math.min(openTabs.length - MAX_VISIBLE_TABS, tabViewStart + 1);
    renderTabs();
});
document.getElementById('tab-more').addEventListener('click', (e) => {
    e.stopPropagation();
    const dd = document.getElementById('tab-overflow-dropdown');
    dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
});

// 탭바 방어1: MutationObserver — 내용이 비워지면 즉시 재렌더
(function() {
    var tabBar = document.getElementById('tab-bar');
    if (!tabBar) return;
    new MutationObserver(function() {
        if (tabBar.children.length === 0 && openTabs.length > 0) {
            renderTabs();
        }
    }).observe(tabBar, { childList: true });
})();

// 탭바 방어2: setInterval — 500ms마다 탭이 비어있으면 강제 재렌더
setInterval(function() {
    var tabBar = document.getElementById('tab-bar');
    if (tabBar && tabBar.children.length === 0 && openTabs.length > 0) {
        renderTabs();
    }
}, 500);

// 메뉴 클릭 → 탭 열기
document.querySelectorAll('.menu-btn[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => openTab(btn.dataset.tab));
});

// 대분류 서브메뉴 토글
document.querySelectorAll('.menu-btn[data-group]').forEach(btn => {
    btn.addEventListener('click', () => {
        const group = document.getElementById('group-' + btn.dataset.group);
        btn.classList.toggle('open');
        group.classList.toggle('open');
    });
});

// 대시보드 서브탭
document.querySelectorAll('.sub-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const parent = btn.closest('.tab-content');
        parent.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const subtabId = btn.dataset.subtab;
        parent.querySelectorAll('.sub-tab-content').forEach(t => t.classList.remove('active'));
        parent.querySelector('#' + subtabId).classList.add('active');
        if (subtabId === 'org-chart') initOrgChart();
    });
});

// 더보기 메뉴
document.getElementById('more-menu-toggle').addEventListener('click', (e) => {
    e.stopPropagation();
    const dd = document.getElementById('more-dropdown');
    dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('my-info-btn').addEventListener('click', () => {
    openTab('hr-info');
    document.getElementById('more-dropdown').style.display = 'none';
});

// 메뉴 검색
document.getElementById('search-toggle-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const box = document.getElementById('menu-search-box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
    if (box.style.display === 'block') document.getElementById('menu-search-input').focus();
});
document.getElementById('menu-search-input').addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    const results = document.getElementById('menu-search-results');
    if (!q) { results.innerHTML = ''; return; }
    const matches = Object.entries(menuTitles).filter(([, title]) => title.includes(q));
    results.innerHTML = matches.length
        ? matches.map(([id, title]) => `<div class="search-result-item" onclick="openTab('${id}'); document.getElementById('menu-search-box').style.display='none';">${title}</div>`).join('')
        : '<div class="search-no-result">검색 결과 없음</div>';
});

// ===== Gmail API 연동 =====
let gmailAccessToken = null;
let gmailUserEmail = null;
let gmailPollTimer = null;

function getGmailClientId() {
    return localStorage.getItem('icare_gmail_client_id') || '';
}

async function saveGmailClientId() {
    const input = document.getElementById('gmail-client-id-input');
    const id = (input ? input.value : '').trim();
    if (!id || !id.includes('.apps.googleusercontent.com')) {
        await showAlert('올바른 Client ID 형식이 아닙니다.\n예: 123456789-abc.apps.googleusercontent.com');
        return;
    }
    localStorage.setItem('icare_gmail_client_id', id);
    updateGmailConnectedUI('idle');
    // 저장 후 바로 연결 시도
    connectGmail();
}

async function resetGmailClientId() {
    if (!await showConfirm('Client ID 설정을 초기화하고 재설정 화면으로 이동합니다.')) return;
    localStorage.removeItem('icare_gmail_client_id');
    disconnectGmail();
    updateGmailConnectedUI('setup');
}

function getGmailStoredAuth() {
    try {
        const data = localStorage.getItem('icare_gmail_auth');
        if (!data) return null;
        const parsed = JSON.parse(data);
        // 만료 5분 전부터 만료 처리
        if (parsed.expires_at && Date.now() < parsed.expires_at - 300000) {
            return parsed; // 토큰 유효
        }
        return { email: parsed.email, token: null }; // 만료됐지만 이메일은 유지
    } catch(e) { return null; }
}

function saveGmailAuth(token, email, expiresIn) {
    localStorage.setItem('icare_gmail_auth', JSON.stringify({
        token,
        email,
        expires_at: Date.now() + (expiresIn || 3600) * 1000,
    }));
}

function clearGmailAuth() {
    localStorage.removeItem('icare_gmail_auth');
    sessionStorage.removeItem('icare_gmail_token');
    sessionStorage.removeItem('icare_gmail_email');
}

function initGmailIntegration() {
    const clientId = getGmailClientId();
    if (!clientId) {
        updateGmailConnectedUI('setup');
        return;
    }
    const stored = getGmailStoredAuth();
    if (stored && stored.token && stored.email) {
        // 저장된 토큰이 아직 유효 → 팝업 없이 바로 사용
        gmailAccessToken = stored.token;
        gmailUserEmail = stored.email;
        fetchGmailUnread();
        startGmailPoll();
        updateGmailConnectedUI('connected');
        updateCalendarEmbed();
    } else {
        // 토큰 만료 or 없음 → 팝업 없이 자동 재발급 시도
        updateGmailConnectedUI('idle');
        connectGmailSilent();
    }
}

function connectGmailSilent() {
    const clientId = getGmailClientId();
    if (!clientId) return;
    if (typeof google === 'undefined' || !google.accounts) {
        setTimeout(connectGmailSilent, 1500);
        return;
    }
    const GMAIL_SCOPES = 'https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly';
    const client = google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: GMAIL_SCOPES,
        prompt: 'none', // 이전에 권한 부여한 계정이면 팝업 없이 자동 발급
        callback: function(response) {
            if (response.error) {
                // 자동 발급 실패 → 연결 버튼 표시 (로그아웃 or 첫 사용)
                updateGmailConnectedUI('idle');
                return;
            }
            handleGmailToken(response);
        },
    });
    client.requestAccessToken({ prompt: 'none' });
}

async function connectGmail() {
    const clientId = getGmailClientId();
    if (!clientId) { updateGmailConnectedUI('setup'); return; }
    if (typeof google === 'undefined' || !google.accounts) {
        await showAlert('Google API 라이브러리를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
        return;
    }
    const GMAIL_SCOPES = 'https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly';
    const client = google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: GMAIL_SCOPES,
        callback: handleGmailToken,
    });
    client.requestAccessToken();
}

async function handleGmailToken(response) {
    if (response.error) return;
    gmailAccessToken = response.access_token;
    const expiresIn = response.expires_in || 3600;
    try {
        const res = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${gmailAccessToken}` }
        });
        const info = await res.json();
        gmailUserEmail = info.email || '';
        saveGmailAuth(gmailAccessToken, gmailUserEmail, expiresIn);
    } catch(e) {
        saveGmailAuth(gmailAccessToken, '', expiresIn);
    }
    fetchGmailUnread();
    startGmailPoll();
    updateGmailConnectedUI('connected');
    updateCalendarEmbed();
    // 홈 캘린더 갱신
    if (document.getElementById('home-cal-events')) loadHomeCal();
}

function disconnectGmail() {
    gmailAccessToken = null;
    gmailUserEmail = null;
    clearGmailAuth();
    if (gmailPollTimer) { clearInterval(gmailPollTimer); gmailPollTimer = null; }
    setBadge('my-gmail', 0);
    updateCalendarEmbed();
}

async function fetchGmailUnread() {
    if (!gmailAccessToken) return;
    try {
        const res = await fetch(
            'https://gmail.googleapis.com/gmail/v1/users/me/labels/INBOX',
            { headers: { Authorization: `Bearer ${gmailAccessToken}` } }
        );
        if (res.status === 401) { disconnectGmail(); updateGmailConnectedUI('idle'); return; }
        const data = await res.json();
        setBadge('my-gmail', data.messagesUnread || 0);
    } catch(e) {}
}

function startGmailPoll() {
    if (gmailPollTimer) clearInterval(gmailPollTimer);
    gmailPollTimer = setInterval(fetchGmailUnread, 60000);
}

function toggleGmailAccountMenu(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('gmail-account-menu');
    if (!menu) return;
    const isOpen = menu.style.display !== 'none';
    menu.style.display = isOpen ? 'none' : 'block';
    if (!isOpen) {
        // 외부 클릭 시 닫기 (1회성 리스너)
        const close = (ev) => {
            if (!menu.contains(ev.target)) { menu.style.display = 'none'; }
            document.removeEventListener('click', close);
        };
        setTimeout(() => document.addEventListener('click', close), 0);
    }
}

// state: 'setup' | 'idle' | 'connected'
function updateGmailConnectedUI(state) {
    const elSetup = document.getElementById('gmail-setup');
    const elIdle  = document.getElementById('gmail-not-connected');
    const elConn  = document.getElementById('gmail-client-ui');
    const emailEl = document.getElementById('gmail-account-label');
    if (!elSetup) return;
    elSetup.style.display = state === 'setup'     ? 'block' : 'none';
    elIdle.style.display  = state === 'idle'      ? 'block' : 'none';
    elConn.style.display  = state === 'connected' ? 'block' : 'none';
    if (state === 'connected') {
        if (emailEl) emailEl.textContent = gmailUserEmail || '';
        loadGmailInbox();
    }
    if (state === 'setup') {
        const input = document.getElementById('gmail-client-id-input');
        if (input) input.value = getGmailClientId();
    }
}

// ===== Gmail 메일 클라이언트 =====
let gmailLastReplyFrom = '';

async function gmailFetch(url, options = {}) {
    if (!gmailAccessToken) return null;
    const res = await fetch(url, {
        ...options,
        headers: { 'Authorization': `Bearer ${gmailAccessToken}`, ...(options.headers || {}) }
    });
    if (res.status === 401) { disconnectGmail(); updateGmailConnectedUI('idle'); return null; }
    return res.json();
}

function gmailHeader(headers, name) {
    const h = (headers || []).find(h => h.name.toLowerCase() === name.toLowerCase());
    return h ? h.value : '';
}

function gmailFormatDate(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    const now = new Date();
    if (d.toDateString() === now.toDateString())
        return d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    return d.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
}

function gmailSenderName(from) {
    const m = from.match(/^"?(.+?)"?\s*<[^>]+>$/);
    return m ? m[1].trim() : from.replace(/<[^>]+>/, '').trim() || from;
}

function escHtml(s) {
    return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function b64urlDecode(str) {
    const b64 = str.replace(/-/g,'+').replace(/_/g,'/');
    const pad = b64.length % 4 ? '='.repeat(4 - b64.length % 4) : '';
    const bin = atob(b64 + pad);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder('utf-8').decode(bytes);
}

function getEmailBody(payload) {
    if (!payload) return '';
    if (payload.body?.data) {
        const txt = b64urlDecode(payload.body.data);
        return payload.mimeType === 'text/html' ? txt
            : `<pre style="white-space:pre-wrap;font-family:inherit;">${escHtml(txt)}</pre>`;
    }
    if (!payload.parts) return '';
    for (const p of payload.parts) if (p.mimeType === 'text/html' && p.body?.data) return b64urlDecode(p.body.data);
    for (const p of payload.parts) if (p.mimeType === 'text/plain' && p.body?.data)
        return `<pre style="white-space:pre-wrap;font-family:inherit;">${escHtml(b64urlDecode(p.body.data))}</pre>`;
    for (const p of payload.parts) { const b = getEmailBody(p); if (b) return b; }
    return '';
}

async function searchGmail() {
    const query = (document.getElementById('gmail-search-input')?.value || '').trim();
    if (!query) { clearGmailSearch(); return; }
    if (!gmailAccessToken) return;

    const listEl   = document.getElementById('gmail-msg-list');
    const headerEl = document.querySelector('.gmail-list-header');
    const clearBtn = document.getElementById('gmail-search-clear');
    if (!listEl) return;

    if (clearBtn) clearBtn.style.display = 'inline';
    if (headerEl) headerEl.innerHTML = '검색 중...';
    listEl.innerHTML = '<div class="gmail-loading">검색 중...</div>';

    try {
        const data = await gmailFetch(
            `https://gmail.googleapis.com/gmail/v1/users/me/messages?q=${encodeURIComponent(query)}&maxResults=30`
        );
        if (!data?.messages?.length) {
            if (headerEl) headerEl.innerHTML = `검색결과 <span class="gmail-list-header-count">0건</span>`;
            listEl.innerHTML = '<div class="gmail-empty">검색 결과가 없습니다.</div>';
            return;
        }
        const msgs = await Promise.all(
            data.messages.map(m => gmailFetch(
                `https://gmail.googleapis.com/gmail/v1/users/me/messages/${m.id}?format=metadata&metadataHeaders=From&metadataHeaders=Subject&metadataHeaders=Date`
            ))
        );
        const valid = msgs.filter(Boolean);
        if (headerEl) headerEl.innerHTML =
            `검색결과 <span class="gmail-list-header-count">${valid.length}건</span>`;
        renderGmailList(valid);
    } catch(e) {
        listEl.innerHTML = '<div class="gmail-empty" style="color:#e04d68;">검색 중 오류가 발생했습니다.</div>';
    }
}

function clearGmailSearch() {
    const input  = document.getElementById('gmail-search-input');
    const clear  = document.getElementById('gmail-search-clear');
    if (input) input.value = '';
    if (clear) clear.style.display = 'none';
    loadGmailInbox();
}

async function loadGmailInbox() {
    const listEl = document.getElementById('gmail-msg-list');
    if (!listEl || !gmailAccessToken) return;
    const headerEl = document.querySelector('.gmail-list-header');
    if (headerEl) headerEl.textContent = '받은편지함';
    listEl.innerHTML = '<div class="gmail-loading">불러오는 중...</div>';
    try {
        const data = await gmailFetch('https://gmail.googleapis.com/gmail/v1/users/me/messages?labelIds=INBOX&maxResults=30');
        if (!data?.messages?.length) { listEl.innerHTML = '<div class="gmail-empty">받은 메일이 없습니다.</div>'; return; }
        const msgs = await Promise.all(
            data.messages.map(m => gmailFetch(
                `https://gmail.googleapis.com/gmail/v1/users/me/messages/${m.id}?format=metadata&metadataHeaders=From&metadataHeaders=Subject&metadataHeaders=Date`
            ))
        );
        renderGmailList(msgs.filter(Boolean));
    } catch(e) {
        listEl.innerHTML = '<div class="gmail-empty" style="color:#e04d68;">메일을 불러오지 못했습니다.</div>';
    }
}

function renderGmailList(msgs) {
    const listEl = document.getElementById('gmail-msg-list');
    if (!listEl) return;
    if (!msgs.length) { listEl.innerHTML = '<div class="gmail-empty">메일이 없습니다.</div>'; return; }
    listEl.innerHTML = msgs.map(msg => {
        const h = msg.payload?.headers || [];
        const from = gmailHeader(h, 'From');
        const subject = gmailHeader(h, 'Subject') || '(제목 없음)';
        const date = gmailHeader(h, 'Date');
        const unread = msg.labelIds?.includes('UNREAD');
        return `<div class="gmail-msg-item${unread ? ' unread' : ''}" onclick="openGmailMessage('${msg.id}',this)">
            <div class="gmail-msg-top">
                <span class="gmail-unread-dot"></span>
                <span class="gmail-msg-from">${escHtml(gmailSenderName(from))}</span>
                <span class="gmail-msg-date">${escHtml(gmailFormatDate(date))}</span>
            </div>
            <div class="gmail-msg-subject">${escHtml(subject)}</div>
        </div>`;
    }).join('');
}

async function openGmailMessage(id, el) {
    document.querySelectorAll('.gmail-msg-item').forEach(i => i.classList.remove('gm-active'));
    if (el) el.classList.add('gm-active');

    const placeholder = document.getElementById('gmail-view-placeholder');
    const content = document.getElementById('gmail-view-content');
    if (placeholder) placeholder.style.display = 'none';
    if (content) { content.style.display = 'flex'; document.getElementById('gmail-view-subject').textContent = '불러오는 중...'; }

    const msg = await gmailFetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?format=full`);
    if (!msg) return;

    const h = msg.payload?.headers || [];
    const subject = gmailHeader(h, 'Subject') || '(제목 없음)';
    const from    = gmailHeader(h, 'From');
    const to      = gmailHeader(h, 'To');
    const date    = new Date(gmailHeader(h, 'Date'));
    const dateStr = isNaN(date) ? gmailHeader(h,'Date') :
        date.toLocaleString('ko-KR', { year:'numeric', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit' });

    document.getElementById('gmail-view-subject').textContent = subject;
    document.getElementById('gmail-view-meta').innerHTML =
        `<strong>보낸 사람:</strong> ${escHtml(from)}<br>` +
        `<strong>받는 사람:</strong> ${escHtml(to)}<br>` +
        `<strong>날짜:</strong> ${escHtml(dateStr)}`;

    gmailLastReplyFrom = from;

    const body = getEmailBody(msg.payload);
    const iframe = document.getElementById('gmail-view-iframe');
    if (iframe) {
        iframe.srcdoc = `<html><head><style>body{font-family:-apple-system,sans-serif;font-size:14px;line-height:1.6;color:#333;padding:20px 28px;margin:0;}img{max-width:100%;}a{color:#F36178;}</style></head><body>${body}</body></html>`;
        iframe.style.height = '60vh';
        iframe.onload = () => {
            try { iframe.style.height = Math.min(iframe.contentDocument.body.scrollHeight + 40, 800) + 'px'; } catch(e) {}
        };
    }

    // 읽음 처리
    if (msg.labelIds?.includes('UNREAD')) {
        if (el) el.classList.remove('unread');
        await gmailFetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}/modify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ removeLabelIds: ['UNREAD'] })
        });
        fetchGmailUnread();
    }
}

// 답장
function openReplyPopup() {
    openComposePopup(gmailLastReplyFrom,
        'Re: ' + (document.getElementById('gmail-view-subject')?.textContent || ''));
}

// 메일 쓰기 / 답장
function openComposePopup(toVal, subjectVal) {
    document.getElementById('compose-to').value = toVal || '';
    document.getElementById('compose-subject').value = subjectVal || '';
    document.getElementById('compose-body').value = '';
    document.getElementById('compose-title').textContent = toVal ? '답장' : '새 메일';
    document.getElementById('compose-overlay').style.display = 'block';
    document.getElementById('compose-modal').style.display  = 'flex';
    document.getElementById(toVal ? 'compose-body' : 'compose-to').focus();
}

function closeComposePopup() {
    document.getElementById('compose-overlay').style.display = 'none';
    document.getElementById('compose-modal').style.display   = 'none';
}

function utf8ToBase64(str) {
    const bytes = new TextEncoder().encode(str);
    let bin = '';
    bytes.forEach(b => bin += String.fromCharCode(b));
    return btoa(bin);
}

function buildRawEmail(to, subject, body) {
    const mime = [
        `MIME-Version: 1.0`,
        `To: ${to}`,
        `Subject: =?UTF-8?B?${utf8ToBase64(subject)}?=`,
        `Content-Type: text/plain; charset=UTF-8`,
        `Content-Transfer-Encoding: base64`,
        ``,
        utf8ToBase64(body)
    ].join('\r\n');
    // mime is all ASCII at this point (base64 parts)
    return btoa(mime).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}

// ===== 발송 취소 & 토스트 =====
const SEND_DELAY_SEC = 5;
let pendingSendData  = null;
let pendingSendTimer = null;
let pendingSendInterval = null;

function doSendGmail() {
    const to      = document.getElementById('compose-to').value.trim();
    const subject = document.getElementById('compose-subject').value.trim();
    const body    = document.getElementById('compose-body').value.trim();
    if (!to)      { showToast('받는 사람을 입력하세요.', 'error'); return; }
    if (!subject) { showToast('제목을 입력하세요.', 'error'); return; }
    if (!gmailAccessToken) { showToast('Gmail이 연결되지 않았습니다.', 'error'); return; }

    pendingSendData = { to, subject, body };
    closeComposePopup();
    showUndoToast();
}

function showUndoToast() {
    clearPendingSend();
    const toast   = document.getElementById('send-undo-toast');
    const bar     = document.getElementById('send-undo-bar');
    const textEl  = document.getElementById('send-undo-text');
    if (!toast) return;

    let remaining = SEND_DELAY_SEC;
    textEl.textContent = `${remaining}초 후 발송됩니다.`;
    toast.classList.add('visible');

    // 프로그레스 바 애니메이션
    bar.style.transition = 'none';
    bar.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
        bar.style.transition = `width ${SEND_DELAY_SEC}s linear`;
        bar.style.width = '0%';
    }));

    // 초 카운트다운
    pendingSendInterval = setInterval(() => {
        remaining--;
        if (remaining > 0) {
            textEl.textContent = `${remaining}초 후 발송됩니다.`;
        } else {
            clearInterval(pendingSendInterval);
        }
    }, 1000);

    // 실제 발송 타이머
    pendingSendTimer = setTimeout(() => {
        toast.classList.remove('visible');
        executeSend();
    }, SEND_DELAY_SEC * 1000);
}

function cancelSend() {
    clearPendingSend();
    const data = pendingSendData;
    pendingSendData = null;
    const toast = document.getElementById('send-undo-toast');
    if (toast) toast.classList.remove('visible');
    // 작성 내용 복원
    if (data) {
        openComposePopup(data.to, data.subject);
        document.getElementById('compose-body').value = data.body;
    }
    showToast('발송이 취소되었습니다.', 'info');
}

function clearPendingSend() {
    clearTimeout(pendingSendTimer);
    clearInterval(pendingSendInterval);
    pendingSendTimer = null;
    pendingSendInterval = null;
}

async function executeSend() {
    if (!pendingSendData) return;
    const { to, subject, body } = pendingSendData;
    pendingSendData = null;
    try {
        const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${gmailAccessToken}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ raw: buildRawEmail(to, subject, body) })
        });
        if (res.ok) {
            showToast('메일을 보냈습니다.', 'success');
        } else {
            const e = await res.json();
            showToast('전송 실패: ' + (e.error?.message || '오류'), 'error');
        }
    } catch(e) {
        showToast('전송 중 오류가 발생했습니다.', 'error');
    }
}

// 범용 토스트
let appToastTimer = null;
function showToast(message, type = 'success') {
    const toast = document.getElementById('app-toast');
    const icon  = document.getElementById('app-toast-icon');
    const msg   = document.getElementById('app-toast-msg');
    if (!toast) return;
    icon.textContent = type === 'error' ? '✕' : type === 'info' ? 'ℹ' : '';
    msg.textContent  = message;
    toast.className  = `app-toast toast-${type} visible`;
    clearTimeout(appToastTimer);
    appToastTimer = setTimeout(() => toast.classList.remove('visible'), 3000);
}

let calendarViewMode = localStorage.getItem('icare_cal_mode') || 'WEEK';

function setCalendarView(mode) {
    calendarViewMode = mode;
    localStorage.setItem('icare_cal_mode', mode);
    document.querySelectorAll('.cal-view-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.mode === mode);
    });
    updateCalendarEmbed();
}

function updateCalendarEmbed() {
    const notConn = document.getElementById('calendar-not-connected');
    const conn    = document.getElementById('calendar-connected');
    const iframe  = document.getElementById('google-calendar-iframe');
    const emailEl = document.getElementById('calendar-user-email');
    if (!notConn || !conn || !iframe) return;
    // 저장된 뷰 모드 버튼 반영
    document.querySelectorAll('.cal-view-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.mode === calendarViewMode);
    });
    if (gmailUserEmail) {
        const calUrl = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(gmailUserEmail)}&ctz=Asia%2FSeoul&hl=ko&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=1&showTz=0&mode=${calendarViewMode}`;
        iframe.src = calUrl;
        conn.style.display  = 'block';
        notConn.style.display = 'none';
        if (emailEl) emailEl.textContent = gmailUserEmail;
    } else {
        conn.style.display  = 'none';
        notConn.style.display = 'block';
    }
}

// ===== 알림 배지 시스템 =====
const BADGE_STORAGE_KEY = 'icare_badges';

// 개별 항목 → 부모 그룹 맵핑
const BADGE_PARENTS = {
    'my-gmail':      'my-workspace',
    'my-slack':      'my-workspace',
    'my-notion':     'my-workspace',
    'my-workspace':  'my',
    'my-hr':         'my',
};

// 배지 카운트 상태 (개별 항목만 저장, 집계는 recalc)
let badgeCounts = {};

function loadBadges() {
    const saved = localStorage.getItem(BADGE_STORAGE_KEY);
    if (saved) {
        badgeCounts = JSON.parse(saved);
    } else {
        // 최초 로그인 시 데모 값
        badgeCounts = { 'my-gmail': 3, 'my-slack': 2, 'my-notion': 1 };
        saveBadges();
    }
    recalcAggregates();
    renderAllBadges();
}

function saveBadges() {
    // 집계 항목 제외하고 개별 항목만 저장
    const toSave = {};
    ['my-gmail', 'my-slack', 'my-notion'].forEach(k => {
        if (badgeCounts[k]) toSave[k] = badgeCounts[k];
    });
    localStorage.setItem(BADGE_STORAGE_KEY, JSON.stringify(toSave));
}

function clearBadge(tabId) {
    const leafItems = ['my-gmail', 'my-slack', 'my-notion'];
    if (!leafItems.includes(tabId)) return;
    if (!badgeCounts[tabId]) return;
    delete badgeCounts[tabId];
    saveBadges();
    recalcAggregates();
    renderAllBadges();
}

function setBadge(tabId, count) {
    if (count <= 0) {
        delete badgeCounts[tabId];
    } else {
        badgeCounts[tabId] = count;
    }
    saveBadges();
    recalcAggregates();
    renderAllBadges();
}

function recalcAggregates() {
    // 워크스페이스 = G-Mail + Slack + Notion
    badgeCounts['my-workspace'] =
        (badgeCounts['my-gmail']  || 0) +
        (badgeCounts['my-slack']  || 0) +
        (badgeCounts['my-notion'] || 0);

    // 인사관리 (마이페이지 내) — 하위 알림 없으면 0
    badgeCounts['my-hr'] = 0;

    // 마이페이지 = 인사관리 + 워크스페이스
    badgeCounts['my'] =
        (badgeCounts['my-hr']        || 0) +
        (badgeCounts['my-workspace'] || 0);
}

function renderBadgeEl(id, count) {
    const el = document.getElementById(id);
    if (!el) return;
    if (count > 0) {
        el.textContent = count > 99 ? '99+' : count;
        el.style.display = 'inline-flex';
    } else {
        el.style.display = 'none';
    }
}

function renderAllBadges() {
    renderBadgeEl('badge-my-gmail',      badgeCounts['my-gmail']      || 0);
    renderBadgeEl('badge-my-slack',      badgeCounts['my-slack']      || 0);
    renderBadgeEl('badge-my-notion',     badgeCounts['my-notion']     || 0);
    renderBadgeEl('badge-my-workspace',  badgeCounts['my-workspace']  || 0);
    renderBadgeEl('badge-my-hr',         badgeCounts['my-hr']         || 0);
    renderBadgeEl('badge-my',            badgeCounts['my']            || 0);
}

// 외부 클릭 시 드롭다운 닫기
document.addEventListener('click', () => {
    document.getElementById('more-dropdown').style.display = 'none';
    document.getElementById('tab-overflow-dropdown').style.display = 'none';
    document.getElementById('menu-search-box').style.display = 'none';
});

// 사원 테이블 렌더링
function renderEmployeesTable() {
    const tbody = document.getElementById('employees-table');
    tbody.innerHTML = employees.map(emp => `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.position}</td>
            <td>${emp.email}</td>
            <td>${emp.hire_date}</td>
            <td>
                <button class="btn btn-small btn-edit" onclick="editEmployee('${emp.id}')">수정</button>
                <button class="btn btn-small btn-delete" onclick="deleteEmployee('${emp.id}')">삭제</button>
            </td>
        </tr>
    `).join('');
}

// 급여 테이블 렌더링
function renderSalaryTable() {
    const tbody = document.getElementById('salary-table');
    tbody.innerHTML = employees.map(emp => {
        const total = emp.salary.base + emp.salary.bonus + emp.salary.allowance;
        return `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.department}</td>
                <td>${emp.salary.base.toLocaleString()}원</td>
                <td>${emp.salary.bonus.toLocaleString()}원</td>
                <td>${emp.salary.allowance.toLocaleString()}원</td>
                <td><strong>${total.toLocaleString()}원</strong></td>
            </tr>
        `;
    }).join('');
}

// 휴가 테이블 렌더링
function renderVacationTable() {
    const tbody = document.getElementById('vacation-table');
    tbody.innerHTML = vacations.map(vac => `
        <tr>
            <td>${vac.employee_name}</td>
            <td>${vac.type}</td>
            <td>${vac.start_date}</td>
            <td>${vac.end_date}</td>
            <td>${vac.days}일</td>
            <td>
                <span class="badge ${vac.status === '진행중' ? 'badge-active' : 'badge-inactive'}">
                    ${vac.status}
                </span>
            </td>
        </tr>
    `).join('');
}

// 사원 추가 폼 핸들링
var _empForm = document.getElementById('employee-form');
if (_empForm) _empForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const newEmployee = {
        id: 'E' + String(employees.length + 1).padStart(3, '0'),
        name: formData.get('name'),
        department: formData.get('department'),
        position: formData.get('position'),
        email: formData.get('email'),
        hire_date: formData.get('hire_date'),
        phone: formData.get('phone'),
        salary: { base: 3000000, bonus: 600000, allowance: 120000 }
    };

    employees.push(newEmployee);
    await showAlert(newEmployee.name + ' 사원이 추가되었습니다!');
    this.reset();

    // 사원 조회 탭으로 이동
    document.querySelector('[data-tab="employees"]').click();
    renderEmployeesTable();
    updateDashboard();
});

// 사원 수정
async function editEmployee(employeeId) {
    const employee = employees.find(e => e.id === employeeId);
    if (employee) {
        const name = prompt('새로운 이름을 입력하세요:', employee.name);
        if (name) {
            employee.name = name;
            await showAlert('수정되었습니다!');
            renderEmployeesTable();
            updateDashboard();
        }
    }
}

// 사원 삭제 (대시보드 테이블용 - 레거시)
async function deleteEmployee(employeeId) {
    if (await showConfirm('정말 삭제하시겠습니까?')) {
        const index = employees.findIndex(e => e.id === employeeId);
        if (index > -1) {
            employees.splice(index, 1);
            await showAlert('삭제되었습니다!');
            renderEmployeesTable();
            updateDashboard();
        }
    }
}

// 검색 기능
var _searchBtn = document.getElementById('search-btn');
if (_searchBtn) _searchBtn.addEventListener('click', function() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const filtered = employees.filter(emp =>
        emp.name.toLowerCase().includes(searchText) ||
        emp.department.toLowerCase().includes(searchText)
    );

    const tbody = document.getElementById('employees-table');
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 20px;">검색 결과가 없습니다.</td></tr>';
    } else {
        tbody.innerHTML = filtered.map(emp => `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.department}</td>
                <td>${emp.position}</td>
                <td>${emp.email}</td>
                <td>${emp.hire_date}</td>
                <td>
                    <button class="btn btn-small btn-edit" onclick="editEmployee('${emp.id}')">수정</button>
                    <button class="btn btn-small btn-delete" onclick="deleteEmployee('${emp.id}')">삭제</button>
                </td>
            </tr>
        `).join('');
    }
});

// 대시보드 업데이트
function updateDashboard() {
    document.getElementById('total-employees').textContent = employees.length;
}

// Enter 키로 검색
var _searchInput = document.getElementById('search-input');
if (_searchInput) _searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('search-btn').click();
    }
});

// 초기 데이터 로드
updateDashboard();

// ===== Slack 연동 =====
const SLACK_PROXY = 'https://corsproxy.io/?url=';

function getSlackToken() {
    return localStorage.getItem('icare_slack_token') || '';
}

async function saveSlackToken() {
    const input = document.getElementById('slack-token-input');
    const token = (input ? input.value : '').trim();
    if (!token || !token.startsWith('xoxp-')) {
        await showAlert('올바른 User OAuth Token 형식이 아닙니다.\n예: xoxp-...');
        return;
    }
    localStorage.setItem('icare_slack_token', token);
    initSlackIntegration();
}

function initSlackIntegration() {
    const token = getSlackToken();
    const setup = document.getElementById('slack-setup');
    const ui = document.getElementById('slack-client-ui');
    if (!setup || !ui) return;
    if (!token) {
        setup.style.display = 'block';
        ui.style.display = 'none';
    } else {
        setup.style.display = 'none';
        ui.style.display = 'flex';
        loadSlackChannels();
    }
}

async function slackApi(method, params = {}) {
    const token = getSlackToken();
    if (!token) return null;
    const qs = new URLSearchParams({ ...params, token }).toString();
    const slackUrl = `https://slack.com/api/${method}?${qs}`;
    // corsproxy.io 새 형식 + Authorization 헤더 방식 둘 다 시도
    try {
        // 직접 호출 시도 (CORS 허용 환경)
        const res = await fetch(slackUrl, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (!data.ok && data.error === 'invalid_auth') { disconnectSlack(); return null; }
        return data;
    } catch(e) {
        // CORS 차단 시 프록시로 재시도
        try {
            const res2 = await fetch(SLACK_PROXY + encodeURIComponent(slackUrl));
            const text = await res2.text();
            const data = JSON.parse(text);
            if (!data.ok && data.error === 'invalid_auth') { disconnectSlack(); return null; }
            return data;
        } catch(e2) {
            return null;
        }
    }
}

async function loadSlackChannels() {
    const listEl = document.getElementById('slack-channel-list');
    if (!listEl) return;
    listEl.innerHTML = '<div class="slack-loading">불러오는 중...</div>';

    // 워크스페이스 이름
    const authData = await slackApi('auth.test');
    if (authData && authData.ok) {
        const nameEl = document.getElementById('slack-workspace-name');
        if (nameEl) nameEl.textContent = authData.team || '';
    }

    const data = await slackApi('conversations.list', { types: 'public_channel,private_channel,im', limit: 30, exclude_archived: true });
    if (!data || !data.ok) {
        listEl.innerHTML = '<div class="slack-loading" style="color:#e74c3c;">채널을 불러올 수 없습니다.<br>Token 권한을 확인해주세요.</div>';
        return;
    }
    const channels = (data.channels || []).filter(c => c.is_member || c.is_im);
    if (channels.length === 0) {
        listEl.innerHTML = '<div class="slack-loading">참여 중인 채널이 없습니다.</div>';
        return;
    }
    listEl.innerHTML = channels.map(c => `
        <div class="slack-channel-item" onclick="loadSlackMessages('${c.id}', '${c.name || 'DM'}', this)">
            <span class="slack-channel-icon">${c.is_im ? '●' : '#'}</span>
            <span class="slack-channel-name">${c.name || 'DM'}</span>
        </div>
    `).join('');
}

let currentSlackChannel = null;

async function loadSlackMessages(channelId, channelName, el) {
    currentSlackChannel = channelId;
    document.querySelectorAll('.slack-channel-item').forEach(i => i.classList.remove('active'));
    if (el) el.classList.add('active');

    const placeholder = document.getElementById('slack-msg-placeholder');
    const content = document.getElementById('slack-msg-content');
    const header = document.getElementById('slack-msg-header');
    const msgList = document.getElementById('slack-msg-list');

    if (placeholder) placeholder.style.display = 'none';
    if (content) { content.style.display = 'flex'; }
    if (header) header.textContent = '# ' + channelName;
    if (msgList) msgList.innerHTML = '<div class="slack-loading">불러오는 중...</div>';

    const data = await slackApi('conversations.history', { channel: channelId, limit: 30 });
    if (!data || !data.ok) {
        if (msgList) msgList.innerHTML = '<div class="slack-loading" style="color:#e74c3c;">메시지를 불러올 수 없습니다.</div>';
        return;
    }

    const msgs = (data.messages || []).reverse();
    if (msgs.length === 0) {
        if (msgList) msgList.innerHTML = '<div class="slack-loading">메시지가 없습니다.</div>';
        return;
    }

    // 사용자 정보 캐시
    const userIds = [...new Set(msgs.map(m => m.user).filter(Boolean))];
    const userMap = {};
    await Promise.all(userIds.map(async uid => {
        const u = await slackApi('users.info', { user: uid });
        if (u && u.ok) userMap[uid] = u.user.real_name || u.user.name || uid;
    }));

    if (msgList) {
        msgList.innerHTML = msgs.map(m => {
            const ts = new Date(parseFloat(m.ts) * 1000);
            const timeStr = ts.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
            const sender = userMap[m.user] || m.username || '알 수 없음';
            const text = (m.text || '').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
            return `
                <div class="slack-msg-item">
                    <div class="slack-msg-avatar">${sender.charAt(0).toUpperCase()}</div>
                    <div class="slack-msg-body">
                        <div class="slack-msg-meta"><span class="slack-msg-sender">${sender}</span><span class="slack-msg-time">${timeStr}</span></div>
                        <div class="slack-msg-text">${text}</div>
                    </div>
                </div>
            `;
        }).join('');
        msgList.scrollTop = msgList.scrollHeight;
    }
}

function disconnectSlack() {
    localStorage.removeItem('icare_slack_token');
    const setup = document.getElementById('slack-setup');
    const ui = document.getElementById('slack-client-ui');
    if (setup) setup.style.display = 'block';
    if (ui) ui.style.display = 'none';
    const input = document.getElementById('slack-token-input');
    if (input) input.value = '';
}

// ===== Notion 연동 =====
// Notion API는 CORS를 허용하지 않으므로 CORS 프록시를 사용합니다.
const NOTION_PROXY = 'https://corsproxy.io/?';
const NOTION_API = 'https://api.notion.com/v1';

function getNotionToken() {
    return localStorage.getItem('icare_notion_token') || '';
}

async function saveNotionToken() {
    const input = document.getElementById('notion-token-input');
    const token = (input ? input.value : '').trim();
    if (!token || !token.startsWith('secret_')) {
        await showAlert('올바른 Integration Token 형식이 아닙니다.\n예: secret_...');
        return;
    }
    localStorage.setItem('icare_notion_token', token);
    initNotionIntegration();
}

function initNotionIntegration() {
    const token = getNotionToken();
    const setup = document.getElementById('notion-setup');
    const ui = document.getElementById('notion-client-ui');
    if (!setup || !ui) return;
    if (!token) {
        setup.style.display = 'block';
        ui.style.display = 'none';
    } else {
        setup.style.display = 'none';
        ui.style.display = 'flex';
        loadNotionPages();
    }
}

async function notionApi(endpoint, options = {}) {
    const token = getNotionToken();
    if (!token) return null;
    const url = `${NOTION_PROXY}${NOTION_API}${endpoint}`;
    try {
        const res = await fetch(url, {
            method: options.method || 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json',
                ...(options.headers || {})
            },
            body: options.body ? JSON.stringify(options.body) : undefined,
        });
        const data = await res.json();
        if (data.code === 'unauthorized') { disconnectNotion(); return null; }
        return data;
    } catch(e) {
        return null;
    }
}

async function loadNotionPages() {
    const listEl = document.getElementById('notion-page-list');
    if (!listEl) return;
    listEl.innerHTML = '<div class="notion-loading">불러오는 중...</div>';

    const data = await notionApi('/search', {
        method: 'POST',
        body: { filter: { value: 'page', property: 'object' }, sort: { direction: 'descending', timestamp: 'last_edited_time' }, page_size: 30 }
    });

    if (!data || data.object === 'error') {
        listEl.innerHTML = '<div class="notion-loading" style="color:#e74c3c;">페이지를 불러올 수 없습니다.<br>Token 및 연결 설정을 확인해주세요.</div>';
        return;
    }

    const pages = data.results || [];
    if (pages.length === 0) {
        listEl.innerHTML = '<div class="notion-loading">연결된 페이지가 없습니다.</div>';
        return;
    }

    listEl.innerHTML = pages.map(p => {
        const title = getNotionTitle(p);
        const emoji = p.icon && p.icon.type === 'emoji' ? p.icon.emoji + ' ' : '📄 ';
        return `<div class="notion-page-item" onclick="loadNotionPage('${p.id}', this)" data-url="${p.url}">
            <span>${emoji}${title}</span>
        </div>`;
    }).join('');
}

function getNotionTitle(page) {
    try {
        const props = page.properties;
        const titleProp = Object.values(props).find(p => p.type === 'title');
        if (titleProp && titleProp.title && titleProp.title.length > 0) {
            return titleProp.title.map(t => t.plain_text).join('');
        }
    } catch(e) {}
    return '(제목 없음)';
}

async function loadNotionPage(pageId, el) {
    document.querySelectorAll('.notion-page-item').forEach(i => i.classList.remove('active'));
    if (el) el.classList.add('active');

    const placeholder = document.getElementById('notion-view-placeholder');
    const content = document.getElementById('notion-view-content');
    const header = document.getElementById('notion-view-header');
    const body = document.getElementById('notion-view-body');
    const openBtn = document.getElementById('notion-open-btn');

    if (placeholder) placeholder.style.display = 'none';
    if (content) { content.style.display = 'flex'; }
    if (body) body.innerHTML = '<div class="notion-loading">불러오는 중...</div>';

    const pageData = await notionApi(`/pages/${pageId}`);
    if (!pageData) return;

    const title = getNotionTitle(pageData);
    const emoji = pageData.icon && pageData.icon.type === 'emoji' ? pageData.icon.emoji + ' ' : '';
    if (header) header.textContent = emoji + title;
    if (openBtn) openBtn.onclick = () => window.open(pageData.url, '_blank');

    const blocksData = await notionApi(`/blocks/${pageId}/children?page_size=50`);
    if (!blocksData || !blocksData.results) {
        if (body) body.innerHTML = '<div class="notion-loading" style="color:#e74c3c;">내용을 불러올 수 없습니다.</div>';
        return;
    }

    if (body) {
        body.innerHTML = blocksData.results.map(block => renderNotionBlock(block)).join('');
    }
}

function renderNotionBlock(block) {
    const t = block.type;
    const rich = arr => (arr || []).map(r => {
        let text = r.plain_text.replace(/</g,'&lt;').replace(/>/g,'&gt;');
        if (r.annotations) {
            if (r.annotations.bold) text = `<strong>${text}</strong>`;
            if (r.annotations.italic) text = `<em>${text}</em>`;
            if (r.annotations.code) text = `<code style="background:#f0f0f0;padding:1px 5px;border-radius:3px;font-size:12px;">${text}</code>`;
        }
        return text;
    }).join('');

    if (t === 'paragraph') return `<p class="notion-block-p">${rich(block.paragraph.rich_text)}</p>`;
    if (t === 'heading_1') return `<h1 class="notion-block-h1">${rich(block.heading_1.rich_text)}</h1>`;
    if (t === 'heading_2') return `<h2 class="notion-block-h2">${rich(block.heading_2.rich_text)}</h2>`;
    if (t === 'heading_3') return `<h3 class="notion-block-h3">${rich(block.heading_3.rich_text)}</h3>`;
    if (t === 'bulleted_list_item') return `<li class="notion-block-li">${rich(block.bulleted_list_item.rich_text)}</li>`;
    if (t === 'numbered_list_item') return `<li class="notion-block-li">${rich(block.numbered_list_item.rich_text)}</li>`;
    if (t === 'to_do') {
        const checked = block.to_do.checked;
        return `<div class="notion-block-todo"><input type="checkbox" ${checked ? 'checked' : ''} disabled> ${rich(block.to_do.rich_text)}</div>`;
    }
    if (t === 'divider') return `<hr class="notion-block-divider">`;
    if (t === 'code') return `<pre class="notion-block-code"><code>${rich(block.code.rich_text)}</code></pre>`;
    if (t === 'quote') return `<blockquote class="notion-block-quote">${rich(block.quote.rich_text)}</blockquote>`;
    if (t === 'callout') return `<div class="notion-block-callout">${block.callout.icon?.emoji || ''} ${rich(block.callout.rich_text)}</div>`;
    return '';
}

function disconnectNotion() {
    localStorage.removeItem('icare_notion_token');
    const setup = document.getElementById('notion-setup');
    const ui = document.getElementById('notion-client-ui');
    if (setup) setup.style.display = 'block';
    if (ui) ui.style.display = 'none';
    const input = document.getElementById('notion-token-input');
    if (input) input.value = '';
}

// ===== 홈 화면 =====
let attClockInTime = null;
let attClockOutTime = null;
let workTimerInterval = null;

function initHomePage() {
    renderHomeDate();
    renderHomeBirthdays();
    loadHomeCal();
    startRealtimeClock();
    renderDailyQuote();
    renderQuickMenu();

    // 항상 먼저 초기화 후 저장된 데이터 복원
    stopWorkTimer();
    attClockInTime = null;
    attClockOutTime = null;

    const saved = JSON.parse(localStorage.getItem('icare_attendance_today') || '{}');
    const todayStr = new Date().toDateString();

    if (saved.date === todayStr && saved.inTime) {
        attClockInTime = new Date(saved.inTime);
        if (saved.outTime) attClockOutTime = new Date(saved.outTime);

        const btn = document.getElementById('home-att-btn');
        const inLabel = document.getElementById('home-clock-in-label');
        const inTime  = document.getElementById('home-clock-in-time');
        const outLabel = document.getElementById('home-clock-out-label');
        const outTime  = document.getElementById('home-clock-out-time');

        if (inLabel) inLabel.style.display = 'inline';
        if (inTime)  inTime.textContent = formatTimeHMS(attClockInTime);

        if (attClockOutTime) {
            // 퇴근 완료 상태 복원
            if (outLabel) outLabel.style.display = 'inline';
            if (outTime)  outTime.textContent = formatTimeHMS(attClockOutTime);
            if (btn) {
                btn.disabled = true;
                btn.style.opacity = '0.5';
                btn.classList.remove('checkin');
                btn.classList.add('checkout');
                btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg> 퇴근 완료';
            }
            const resetBtn = document.getElementById('home-att-reset-btn');
            if (resetBtn) resetBtn.style.display = 'inline-block';
            const diff = attClockOutTime - attClockInTime;
            const dispEl = document.getElementById('home-work-time-display');
            const statEl = document.getElementById('home-work-time-status');
            if (dispEl) dispEl.textContent = msToHMS(diff);
            if (statEl) statEl.textContent = '퇴근 완료';
        } else {
            // 출근 후 미퇴근 상태 복원 → 타이머 재시작
            if (btn) {
                btn.disabled = false;
                btn.style.opacity = '';
                btn.classList.remove('checkin');
                btn.classList.add('checkout');
                btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg> 퇴근';
            }
            const statEl = document.getElementById('home-work-time-status');
            if (statEl) statEl.textContent = '근무 중';
            startWorkTimer();
        }
    } else {
        resetAttBtn();
    }
}

function renderHomeDate() {
    const el = document.getElementById('home-today-date');
    if (!el) return;
    const d = new Date();
    const days = ['일','월','화','수','목','금','토'];
    el.textContent = `${d.getMonth()+1}/${d.getDate()} (${days[d.getDay()]})`;
}

function startRealtimeClock() {
    const el = document.getElementById('home-realtime-clock');
    if (!el) return;
    function tick() {
        const d = new Date();
        el.textContent = d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    tick();
    clearInterval(window._homeClockInterval);
    window._homeClockInterval = setInterval(tick, 1000);
}

async function toggleAttendance() {
    if (!attClockInTime) {
        // 출근
        attClockInTime = new Date();
        const btn = document.getElementById('home-att-btn');
        btn.classList.remove('checkin');
        btn.classList.add('checkout');
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg> 퇴근';
        document.getElementById('home-clock-in-time').textContent = formatTimeHMS(attClockInTime);
        document.getElementById('home-clock-in-label').style.display = 'inline';
        document.getElementById('home-work-time-status').textContent = '근무 중';
        saveAttendance();
        startWorkTimer();
        showToast('출근 시간이 기록되었습니다. ' + formatTimeHMS(attClockInTime));
    } else if (!attClockOutTime) {
        // 퇴근
        if (!await showConfirm('퇴근 처리하시겠습니까?')) return;
        attClockOutTime = new Date();
        document.getElementById('home-clock-out-time').textContent = formatTimeHMS(attClockOutTime);
        document.getElementById('home-clock-out-label').style.display = 'inline';
        const btn = document.getElementById('home-att-btn');
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg> 퇴근 완료';
        stopWorkTimer();
        const diff = attClockOutTime - attClockInTime;
        document.getElementById('home-work-time-display').textContent = msToHMS(diff);
        document.getElementById('home-work-time-status').textContent = '퇴근 완료';
        saveAttendance();
        showToast('퇴근 시간이 기록되었습니다. ' + formatTimeHMS(attClockOutTime));
    }
}

function resetAttBtn() {
    const btn = document.getElementById('home-att-btn');
    if (!btn) return;
    btn.classList.add('checkin'); btn.classList.remove('checkout');
    btn.disabled = false; btn.style.opacity = '';
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 출근';
    const resetBtn = document.getElementById('home-att-reset-btn');
    if (resetBtn) resetBtn.style.display = 'none';
    const dispEl = document.getElementById('home-work-time-display');
    const statEl = document.getElementById('home-work-time-status');
    if (dispEl) dispEl.textContent = '00:00:00';
    if (statEl) statEl.textContent = '미출근';
}

function startWorkTimer() {
    stopWorkTimer();
    // 즉시 한 번 업데이트 후 1초마다 반복
    function tick() {
        if (!attClockInTime || attClockOutTime) { stopWorkTimer(); return; }
        const diff = Date.now() - attClockInTime.getTime();
        const el = document.getElementById('home-work-time-display');
        const statEl = document.getElementById('home-work-time-status');
        if (el) el.textContent = msToHMS(diff);
        if (statEl && statEl.textContent === '미출근') statEl.textContent = '근무 중';
    }
    tick();
    workTimerInterval = setInterval(tick, 1000);
}

function stopWorkTimer() {
    if (workTimerInterval) { clearInterval(workTimerInterval); workTimerInterval = null; }
}

function saveAttendance() {
    localStorage.setItem('icare_attendance_today', JSON.stringify({
        date: new Date().toDateString(),
        inTime: attClockInTime ? attClockInTime.toISOString() : null,
        outTime: attClockOutTime ? attClockOutTime.toISOString() : null,
    }));
}

function formatTimeHMS(d) {
    return d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function msToHMS(ms) {
    const s = Math.floor(ms / 1000);
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

function renderHomeBirthdays() {
    const el = document.getElementById('home-birthdays');
    if (!el) return;
    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    // employees 데이터에 birthday 필드가 없으므로 hire_date 월 기준 샘플로 표시
    const birthdays = employees.filter(e => {
        const hd = new Date(e.hire_date);
        return (hd.getMonth() + 1) === thisMonth;
    });
    if (birthdays.length === 0) {
        el.innerHTML = '<div style="color:#bbb;font-size:12px;padding:8px 0;">이달 생일자 없음</div>';
        return;
    }
    el.innerHTML = birthdays.map(e => {
        const hd = new Date(e.hire_date);
        const isToday = hd.getDate() === today.getDate();
        return `<div class="home-birthday-item ${isToday ? 'today' : ''}">
            <span class="home-birthday-avatar">${e.name.charAt(0)}</span>
            <span class="home-birthday-name">${e.name}</span>
            <span class="home-birthday-dept">${e.department}</span>
            <span class="home-birthday-date">${thisMonth}/${hd.getDate()}</span>
            ${isToday ? '<span class="home-birthday-badge">오늘!</span>' : ''}
        </div>`;
    }).join('');
}

// Google Calendar colorId → hex 매핑
const CAL_COLORS = {
    '1':'#ac725e','2':'#d06b64','3':'#f83a22','4':'#fa573c',
    '5':'#ff7537','6':'#ffad46','7':'#42d692','8':'#16a765',
    '9':'#7bd148','10':'#b3dc6c','11':'#fbe983','default':'#F36178'
};

// 로컬 시각을 RFC3339 형식으로 변환 (타임존 오프셋 포함)
function toLocalRFC3339(date) {
    const p = n => String(n).padStart(2,'0');
    const tz = -date.getTimezoneOffset();
    const sign = tz >= 0 ? '+' : '-';
    const tzH = p(Math.floor(Math.abs(tz)/60));
    const tzM = p(Math.abs(tz)%60);
    return `${date.getFullYear()}-${p(date.getMonth()+1)}-${p(date.getDate())}T${p(date.getHours())}:${p(date.getMinutes())}:${p(date.getSeconds())}${sign}${tzH}:${tzM}`;
}

async function loadHomeCal() {
    const el = document.getElementById('home-cal-events');
    const acctEl = document.getElementById('home-cal-account');
    if (!el) return;
    if (!gmailUserEmail || !gmailAccessToken) {
        el.innerHTML = `<div class="home-cal-empty-state">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <p>Google 계정을 연결하면<br>오늘의 일정이 표시됩니다.</p>
            <button onclick="openTab('my-gmail')" class="home-cal-connect-btn">계정 연결하기</button>
        </div>`;
        return;
    }
    if (acctEl) acctEl.textContent = gmailUserEmail;
    el.innerHTML = '<div class="home-cal-loading">일정 불러오는 중...</div>';
    try {
        const today = new Date();
        // 로컬 자정 ~ 23:59:59 (타임존 오프셋 정확히 반영)
        const dayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
        const dayEnd   = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
        const timeMin  = toLocalRFC3339(dayStart);
        const timeMax  = toLocalRFC3339(dayEnd);
        const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(timeMin)}&timeMax=${encodeURIComponent(timeMax)}&singleEvents=true&orderBy=startTime&maxResults=30&timeZone=Asia/Seoul`;
        const res = await fetch(url, { headers: { Authorization: `Bearer ${gmailAccessToken}` } });
        if (res.status === 401) {
            el.innerHTML = '<div class="home-empty" style="color:#e74c3c;">Google 재연결이 필요합니다.</div>';
            disconnectGmail(); updateGmailConnectedUI('idle');
            return;
        }
        const data = await res.json();
        if (data.error) {
            // Calendar API 미승인 시 scope 재요청 안내
            el.innerHTML = `<div class="home-cal-empty-state">
                <p style="color:#e74c3c;font-size:12px;">캘린더 접근 권한이 없습니다.<br>G-Mail 탭에서 계정을 재연결하면 일정이 표시됩니다.</p>
                <button onclick="connectGmail()" class="home-cal-connect-btn">재연결</button>
            </div>`;
            return;
        }
        const items = (data.items || []).filter(ev => ev.status !== 'cancelled');
        if (items.length === 0) {
            el.innerHTML = `<div class="home-cal-empty-state">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <p>오늘 예정된 일정이 없습니다.</p>
            </div>`;
            return;
        }
        const now = Date.now();
        el.innerHTML = items.map(ev => {
            const isAllDay = !ev.start.dateTime;
            const startMs  = isAllDay ? null : new Date(ev.start.dateTime).getTime();
            const endMs    = isAllDay ? null : new Date(ev.end.dateTime || ev.end.date).getTime();
            const timeStr  = isAllDay ? '종일' : new Date(startMs).toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'});
            const endStr   = isAllDay ? '' : new Date(endMs).toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'});
            let cls = '';
            if (!isAllDay) { cls = now > endMs ? 'past' : now >= startMs ? 'ongoing' : 'upcoming'; }
            const color = CAL_COLORS[ev.colorId] || CAL_COLORS['default'];
            const ongoingBadge = cls==='ongoing' ? '<span class="home-cal-now-badge">진행 중</span>' : '';
            const loc = ev.location ? `<span class="home-cal-loc">📍 ${ev.location}</span>` : '';
            return `<div class="home-cal-event-card ${cls}" style="border-left-color:${color}">
                <div class="home-cal-event-header">
                    <div class="home-cal-time-wrap">
                        ${isAllDay
                          ? `<span class="home-cal-allday-badge">종일</span>`
                          : `<span class="home-cal-time">${timeStr}</span><span class="home-cal-time-sep">–</span><span class="home-cal-time home-cal-endtime">${endStr}</span>`}
                        ${ongoingBadge}
                    </div>
                </div>
                <div class="home-cal-event-title">${ev.summary || '(제목 없음)'}</div>
                ${loc}
            </div>`;
        }).join('');
    } catch(e) {
        el.innerHTML = '<div class="home-empty" style="color:#e74c3c;">일정을 불러올 수 없습니다.</div>';
    }
}

// ===== 오늘의 명언 =====
const DAILY_QUOTES = [
    { text: "성공은 최종 목적지가 아니라, 여정 그 자체다.", author: "윈스턴 처칠" },
    { text: "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 당신이 옳다.", author: "헨리 포드" },
    { text: "천 번의 실패도 포기하지 않으면 성공의 발판이 된다.", author: "토머스 에디슨" },
    { text: "오늘 할 수 있는 일을 내일로 미루지 마라.", author: "벤저민 프랭클린" },
    { text: "기회는 준비된 사람에게 온다.", author: "루이 파스퇴르" },
    { text: "꿈을 꾸는 사람은 거짓말을 하지 않는다.", author: "안드레 지드" },
    { text: "인생에서 가장 큰 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 다시 일어나는 것이다.", author: "넬슨 만델라" },
    { text: "작은 일에 최선을 다하는 사람이 큰일도 해낸다.", author: "공자" },
    { text: "변화를 두려워하지 마라. 변화야말로 성장의 시작이다.", author: "작자 미상" },
    { text: "지금 이 순간이 내 인생에서 가장 젊은 때다.", author: "작자 미상" },
    { text: "배움에 끝은 없다. 끝이 있다면 그것은 죽음뿐이다.", author: "미켈란젤로" },
    { text: "자신을 믿어라. 당신의 잠재력은 당신이 생각하는 것보다 훨씬 크다.", author: "작자 미상" },
    { text: "열심히 일한 날에는 깊은 잠이 온다.", author: "레오나르도 다빈치" },
    { text: "성공의 비결은 목적의 일관성이다.", author: "벤저민 디즈레일리" },
    { text: "어려운 일을 쉽게 하는 유일한 방법은 즐기는 것이다.", author: "작자 미상" },
    { text: "노력은 배신하지 않는다.", author: "작자 미상" },
    { text: "실패란 더 현명하게 다시 시작할 수 있는 기회다.", author: "헨리 포드" },
    { text: "포기하지 않으면 실패란 없다.", author: "작자 미상" },
    { text: "지금 당장 시작하라. 완벽한 때는 없다.", author: "작자 미상" },
    { text: "당신의 시간은 한정되어 있다. 다른 사람의 삶을 사는 데 낭비하지 마라.", author: "스티브 잡스" },
    { text: "성공한 사람이 되려고 노력하기보다 가치 있는 사람이 되려고 노력하라.", author: "알버트 아인슈타인" },
    { text: "비가 온 뒤에 땅이 굳는다.", author: "한국 속담" },
    { text: "천릿길도 한 걸음부터.", author: "노자" },
    { text: "아는 것을 안다 하고, 모르는 것을 모른다 하는 것, 이것이 앎이다.", author: "공자" },
    { text: "할 수 있다고 생각하면 할 수 있다.", author: "작자 미상" },
    { text: "좋은 팀은 서로의 강점을 알아보고 약점을 채워준다.", author: "작자 미상" },
    { text: "오늘 흘린 땀이 내일의 나를 만든다.", author: "작자 미상" },
    { text: "작은 진전이라도 매일 이루어지면 큰 결과를 만든다.", author: "작자 미상" },
    { text: "함께라면 더 멀리 갈 수 있다.", author: "아프리카 속담" },
    { text: "과거는 바꿀 수 없지만, 미래는 만들 수 있다.", author: "작자 미상" },
    { text: "정직은 최선의 방책이다.", author: "벤저민 프랭클린" },
];

function renderDailyQuote() {
    const qText = document.getElementById('home-quote-text');
    const qAuth = document.getElementById('home-quote-author');
    if (!qText || !qAuth) return;
    // 날짜 기반 고정 인덱스 (매일 바뀜)
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const q = DAILY_QUOTES[dayOfYear % DAILY_QUOTES.length];
    qText.textContent = `"${q.text}"`;
    qAuth.textContent = `— ${q.author}`;
}

// ===== 계정관리 설정 =====
var SACCT_KEY = 'icare_account_settings';
var sacctEmpDefaults = { prefix: '', yearFmt: 'none', sep: '-', seqLen: 4, nextSeq: 1 };

function sacctDatePart(fmt, baseDate) {
    var d = (baseDate && !isNaN(new Date(baseDate))) ? new Date(baseDate) : new Date();
    var yy   = String(d.getFullYear()).slice(2);
    var yyyy = String(d.getFullYear());
    var mm   = String(d.getMonth() + 1).padStart(2, '0');
    var dd   = String(d.getDate()).padStart(2, '0');
    if (fmt === 'YY')     return yy;
    if (fmt === 'YYYY')   return yyyy;
    if (fmt === 'YYMMDD') return yy + mm + dd;
    return '';
}
var sacctDefaults = {
    empRules: {},   // { corpId: { wtCode: { prefix, yearFmt, sep, seqLen, nextSeq } } }
    pw:       { minLen: 8, upper: true, num: true, special: false, expire: 90 },
    session:  { timeout: 60 }
};

function sacctLoad() {
    try {
        var s = JSON.parse(localStorage.getItem(SACCT_KEY));
        if (!s) return JSON.parse(JSON.stringify(sacctDefaults));
        s.empRules = s.empRules || s.empByCorp || {};   // 구버전 키 호환
        s.pw       = Object.assign({}, sacctDefaults.pw,      s.pw      || {});
        s.session  = Object.assign({}, sacctDefaults.session, s.session || {});
        return s;
    } catch(e) { return JSON.parse(JSON.stringify(sacctDefaults)); }
}

function sacctGetCorps() {
    try {
        var arr = JSON.parse(localStorage.getItem('scompData_v1'));
        return Array.isArray(arr) ? arr.filter(function(c){ return c.active !== false; }) : [];
    } catch(e) { return []; }
}

function sacctInit() {
    var s = sacctLoad();
    // 법인 드롭다운
    var corps = sacctGetCorps();
    var corpSel = document.getElementById('sacct-corp-sel');
    corpSel.innerHTML = '<option value="">선택</option>' +
        corps.map(function(c){ return '<option value="' + c.id + '">' + c.name + '</option>'; }).join('');
    // 근무유형 드롭다운
    var wtSel = document.getElementById('sacct-wt-sel');
    var wtCodes = getCodeValues('HR_WORKTYPE');
    wtSel.innerHTML = '<option value="">선택</option>' +
        wtCodes.map(function(v){ return '<option value="' + v.code + '">' + v.label + '</option>'; }).join('');
    wtSel.disabled = true;
    // 비밀번호 정책
    document.getElementById('sacct-pw-minlen').value = s.pw.minLen;
    document.getElementById('sacct-pw-upper').checked = s.pw.upper;
    document.getElementById('sacct-pw-num').checked = s.pw.num;
    document.getElementById('sacct-pw-special').checked = s.pw.special;
    document.getElementById('sacct-pw-expire').value = s.pw.expire;
    // 세션
    document.getElementById('sacct-session-timeout').value = s.session.timeout;
    // 법인 하나면 자동 선택
    if (corps.length === 1) { corpSel.value = corps[0].id; sacctCorpChange(); }
}

var sacctEmpForm = [
    '<div class="sacct-row">',
    '  <label class="sacct-label">고정 접두어</label>',
    '  <div class="sacct-field-wrap">',
    '    <input type="text" id="sacct-emp-prefix" class="sacct-input sacct-input-sm" placeholder="예: C, EMP (없으면 비워두세요)" maxlength="5" oninput="sacctUpdatePreview()">',
    '  </div>',
    '</div>',
    '<div class="sacct-row">',
    '  <label class="sacct-label">연도 형식</label>',
    '  <div class="sacct-radio-group">',
    '    <label class="sacct-radio"><input type="radio" name="sacct-year-fmt" value="none" onchange="sacctUpdatePreview()"> 미포함</label>',
    '    <label class="sacct-radio"><input type="radio" name="sacct-year-fmt" value="YY" onchange="sacctUpdatePreview()"> YY <span class="sacct-hint-inline">(25)</span></label>',
    '    <label class="sacct-radio"><input type="radio" name="sacct-year-fmt" value="YYYY" onchange="sacctUpdatePreview()"> YYYY <span class="sacct-hint-inline">(2025)</span></label>',
    '    <label class="sacct-radio"><input type="radio" name="sacct-year-fmt" value="YYMMDD" onchange="sacctUpdatePreview()"> YYMMDD <span class="sacct-hint-inline">(260514)</span></label>',
    '  </div>',
    '</div>',
    '<div class="sacct-row">',
    '  <label class="sacct-label">구분자</label>',
    '  <div class="sacct-radio-group">',
    '    <label class="sacct-radio"><input type="radio" name="sacct-sep" value="" onchange="sacctUpdatePreview()"> 없음</label>',
    '    <label class="sacct-radio"><input type="radio" name="sacct-sep" value="-" onchange="sacctUpdatePreview()"> 하이픈 <span class="sacct-hint-inline">(-)</span></label>',
    '    <label class="sacct-radio"><input type="radio" name="sacct-sep" value="." onchange="sacctUpdatePreview()"> 점 <span class="sacct-hint-inline">(.)</span></label>',
    '  </div>',
    '</div>',
    '<div class="sacct-row">',
    '  <label class="sacct-label">일련번호 자릿수</label>',
    '  <select id="sacct-seq-len" class="sacct-select" onchange="sacctUpdatePreview()">',
    '    <option value="2">2자리 (01)</option>',
    '    <option value="3">3자리 (001)</option>',
    '    <option value="4">4자리 (0001)</option>',
    '    <option value="5">5자리 (00001)</option>',
    '    <option value="6">6자리 (000001)</option>',
    '  </select>',
    '</div>',
    '<div class="sacct-row">',
    '  <label class="sacct-label">다음 채번 번호</label>',
    '  <div class="sacct-field-wrap">',
    '    <input type="number" id="sacct-next-seq" class="sacct-input sacct-input-sm" value="1" min="1" oninput="sacctUpdatePreview()">',
    '    <span class="sacct-hint">직원 등록 시 이 번호부터 순차 증가합니다.</span>',
    '  </div>',
    '</div>',
    '<div class="sacct-preview-row">',
    '  <span class="sacct-preview-label">미리보기</span>',
    '  <span class="sacct-preview-val" id="sacct-emp-preview">01</span>',
    '</div>'
].join('');

function sacctCorpChange() {
    var corpId = document.getElementById('sacct-corp-sel').value;
    var wtSel = document.getElementById('sacct-wt-sel');
    var body = document.getElementById('sacct-emp-body');
    wtSel.disabled = !corpId;
    wtSel.value = '';
    body.innerHTML = '<div class="sacct-no-corp">법인과 근무유형을 선택하면 사번 규칙을 설정할 수 있습니다.</div>';
}

function sacctLoadRule() {
    var corpId = document.getElementById('sacct-corp-sel').value;
    var wtCode = document.getElementById('sacct-wt-sel').value;
    var body = document.getElementById('sacct-emp-body');
    if (!corpId || !wtCode) {
        body.innerHTML = '<div class="sacct-no-corp">법인과 근무유형을 선택하면 사번 규칙을 설정할 수 있습니다.</div>';
        return;
    }
    body.innerHTML = sacctEmpForm;
    var s = sacctLoad();
    var corpRules = s.empRules[corpId] || {};
    var e = Object.assign({}, sacctEmpDefaults, corpRules[wtCode] || {});
    document.getElementById('sacct-emp-prefix').value = e.prefix;
    var yf = document.querySelector('input[name="sacct-year-fmt"][value="' + e.yearFmt + '"]');
    if (yf) yf.checked = true;
    var sp = document.querySelector('input[name="sacct-sep"][value="' + e.sep + '"]');
    if (sp) sp.checked = true;
    document.getElementById('sacct-seq-len').value = e.seqLen;
    document.getElementById('sacct-next-seq').value = e.nextSeq;
    sacctUpdatePreview();
}

function sacctGetEmp() {
    return {
        prefix:  (document.getElementById('sacct-emp-prefix') || {}).value.trim(),
        yearFmt: (document.querySelector('input[name="sacct-year-fmt"]:checked') || {}).value || 'none',
        sep:     (document.querySelector('input[name="sacct-sep"]:checked') || {}).value || '',
        seqLen:  parseInt((document.getElementById('sacct-seq-len') || {}).value) || 4,
        nextSeq: parseInt((document.getElementById('sacct-next-seq') || {}).value) || 1
    };
}

function sacctUpdatePreview() {
    var e = sacctGetEmp();
    var parts = [];
    if (e.prefix) parts.push(e.prefix);
    if (e.yearFmt !== 'none') { parts.push(sacctDatePart(e.yearFmt)); }
    parts.push(String(e.nextSeq).padStart(e.seqLen, '0'));
    var el = document.getElementById('sacct-emp-preview');
    if (el) el.textContent = parts.join(e.sep);
}

function sacctSave() {
    var s = sacctLoad();
    var corpId = document.getElementById('sacct-corp-sel').value;
    var wtCode = document.getElementById('sacct-wt-sel').value;
    if (corpId && wtCode && document.getElementById('sacct-emp-prefix')) {
        if (!s.empRules) s.empRules = {};
        if (!s.empRules[corpId]) s.empRules[corpId] = {};
        s.empRules[corpId][wtCode] = sacctGetEmp();
    }
    s.pw = {
        minLen:  parseInt(document.getElementById('sacct-pw-minlen').value),
        upper:   document.getElementById('sacct-pw-upper').checked,
        num:     document.getElementById('sacct-pw-num').checked,
        special: document.getElementById('sacct-pw-special').checked,
        expire:  parseInt(document.getElementById('sacct-pw-expire').value)
    };
    s.session = { timeout: parseInt(document.getElementById('sacct-session-timeout').value) };
    localStorage.setItem(SACCT_KEY, JSON.stringify(s));
    showToast('설정이 저장되었습니다.');
}

// 직원 등록 시 사번 자동 채번 (외부 호출용)
// corpId: 법인 ID, wtCode: HR_WORKTYPE 코드값
function sacctGenEmpId(corpId, wtCode, hireDate) {
    var s = sacctLoad();
    if (!s.empRules) s.empRules = {};
    var corpRules = s.empRules[corpId] || {};
    var e = Object.assign({}, sacctEmpDefaults, corpRules[wtCode] || {});
    var parts = [];
    if (e.prefix) parts.push(e.prefix);
    if (e.yearFmt !== 'none') { parts.push(sacctDatePart(e.yearFmt, hireDate)); }
    parts.push(String(e.nextSeq).padStart(e.seqLen, '0'));
    e.nextSeq += 1;
    if (!s.empRules[corpId]) s.empRules[corpId] = {};
    s.empRules[corpId][wtCode] = e;
    localStorage.setItem(SACCT_KEY, JSON.stringify(s));
    return parts.join(e.sep);
}

// 카운터 증가 없이 다음 사번 미리보기 (신규등록 화면에서 표시용)
function sacctPreviewEmpId(corpId, wtCode, hireDate) {
    var s = sacctLoad();
    if (!s.empRules || !s.empRules[corpId] || !s.empRules[corpId][wtCode]) return null;
    var e = Object.assign({}, sacctEmpDefaults, s.empRules[corpId][wtCode]);
    var parts = [];
    if (e.prefix) parts.push(e.prefix);
    if (e.yearFmt !== 'none') { parts.push(sacctDatePart(e.yearFmt, hireDate)); }
    parts.push(String(e.nextSeq).padStart(e.seqLen, '0'));
    return parts.join(e.sep);
}

// 법인명 → 법인 ID 조회
function hrGetCorpId(corpName) {
    if (!corpName) return null;
    sdeptEnsureData();
    var corp = sdeptCompanies.find(function(c){ return c.name === corpName; });
    return corp ? corp.id : null;
}

// 근무형태 레이블 → 코드값 조회 (HR_WORKTYPE)
function hrGetWorktypeCode(label) {
    if (!label) return null;
    var codes = getCodeValues('HR_WORKTYPE');
    var match = codes.find(function(c){ return c.label === label; });
    return match ? match.code : null;
}

// ===== 재직구분 자동 계산 =====
// liveRetireDate: 화면 입력 중인 퇴직일 (미지정 시 저장값 사용)
function hrComputeWorkStatus(empId, liveRetireDate) {
    var ext = hrExtData[empId] || {};
    var today = new Date(); today.setHours(0, 0, 0, 0);

    // 퇴직일이 오늘 이하이면 퇴직 (liveRetireDate 우선)
    var retireDateVal = (liveRetireDate !== undefined) ? liveRetireDate : ext.retire_date;
    if (retireDateVal) {
        var retireD = new Date(retireDateVal); retireD.setHours(0, 0, 0, 0);
        if (retireD < today) return '퇴직';
    }

    // 오늘이 어느 휴직기간 안에 포함되면 휴직
    var leaves = ext.leaveHistory || [];
    for (var i = 0; i < leaves.length; i++) {
        var l = leaves[i];
        if (!l.startDate) continue;
        var s = new Date(l.startDate); s.setHours(0, 0, 0, 0);
        var e = l.endDate ? new Date(l.endDate) : null; if (e) e.setHours(0, 0, 0, 0);
        if (today >= s && (!e || today <= e)) return '휴직';
    }

    return '재직';
}

function hrRefreshWorkStatus() {
    if (!hrCurrentEmpId) return;
    // 화면에서 입력 중인 퇴직일을 직접 읽어 계산
    var retireDateEl = document.getElementById('hrf-retire-date');
    var liveRetireDate = retireDateEl ? retireDateEl.value : undefined;
    var status = hrComputeWorkStatus(hrCurrentEmpId, liveRetireDate);
    document.querySelectorAll('input[name="hrf-work-status"]').forEach(function(r) {
        r.checked = r.value === status;
    });
}

// ===== 인사기록카드 =====
var HR_CARD_CFG = {
    edu:    { tbodyId:'hr-rec-edu',    emptyCols:7, cols:['최종학력','학교명','학과','입학일','졸업일','졸업구분'],     fields:['eduLevel','school','major','enterDate','gradDate','gradType'] },
    career: { tbodyId:'hr-rec-career', emptyCols:7, cols:['회사명','부서','직위','입사일','퇴사일','담당업무'],         fields:['company','dept','pos','enterDate','leaveDate','duty'] },
    cert:   { tbodyId:'hr-rec-cert',   emptyCols:5, cols:['자격명','발급기관','취득일','번호'],                        fields:['name','issuer','acquireDate','number'] },
    reward: { tbodyId:'hr-rec-reward', emptyCols:5, cols:['구분','내용','일자','비고'],                                fields:['type','content','date','note'] }
};

function hrCardGetData(section) {
    if (!hrCurrentEmpId) return [];
    return (hrExtData[hrCurrentEmpId] || {})['card_' + section] || [];
}

function hrCardRender(section) {
    var cfg = HR_CARD_CFG[section];
    if (!cfg) return;
    var tbody = document.getElementById(cfg.tbodyId);
    if (!tbody) return;
    var data = hrCardGetData(section);
    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="' + cfg.emptyCols + '" style="text-align:center;color:#bbb;padding:20px;font-size:12px;">등록된 정보가 없습니다.</td></tr>';
        return;
    }
    var btnStyle = 'height:22px;padding:0 7px;border-radius:3px;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;';
    tbody.innerHTML = data.map(function(row, i) {
        var cells = cfg.fields.map(function(f) {
            return '<td style="padding:7px 10px;border-bottom:1px solid #f5f5f5;font-size:12px;">' + (row[f] || '') + '</td>';
        }).join('');
        return '<tr>' + cells +
            '<td style="padding:4px 8px;border-bottom:1px solid #f5f5f5;text-align:right;white-space:nowrap;">' +
            '<button onclick="hrCardEdit(\'' + section + '\',' + i + ')" style="' + btnStyle + 'background:#fff;border:1px solid #d0d5dd;color:#555;margin-right:4px;">수정</button>' +
            '<button onclick="hrCardDelete(\'' + section + '\',' + i + ')" style="' + btnStyle + 'background:#fff;border:1px solid #f0b0b0;color:#d44;">삭제</button>' +
            '</td></tr>';
    }).join('');
}

function hrCardRenderAll() {
    Object.keys(HR_CARD_CFG).forEach(function(s) { hrCardRender(s); });
    hrCardRenderEval();
}

function hrCardRenderEval() {
    var tbody = document.getElementById('hr-rec-eval');
    if (!tbody || !hrCurrentEmpId) return;
    var emp = employees.find(function(e) { return e.id === hrCurrentEmpId; });
    var empName = emp ? emp.name : '';
    if (!evalInited) evalInit();
    var typeMap = { peer:'동료평가', self:'자기평가', superior:'상위평가', subordinate:'하위평가' };
    var myResponses = evalResponses
        .filter(function(r) { return r.evaluateeName === empName; })
        .map(function(r) {
            var form = evalForms.find(function(f) { return f.id === r.formId; });
            return {
                year:          r.submittedAt ? r.submittedAt.slice(0,4) : '',
                formTitle:     form ? form.title : '',
                typeLabel:     typeMap[r.type] || r.type || '',
                evaluatorName: r.evaluatorName || '',
                submittedAt:   r.submittedAt || ''
            };
        })
        .sort(function(a, b) { return b.submittedAt.localeCompare(a.submittedAt); });

    if (myResponses.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#bbb;padding:20px;font-size:12px;">연동된 평가 내역이 없습니다.</td></tr>';
        return;
    }
    tbody.innerHTML = myResponses.map(function(r) {
        return '<tr>' +
            '<td style="padding:7px 10px;border-bottom:1px solid #f5f5f5;font-size:12px;">' + r.year + '</td>' +
            '<td style="padding:7px 10px;border-bottom:1px solid #f5f5f5;font-size:12px;">' + r.formTitle + '</td>' +
            '<td style="padding:7px 10px;border-bottom:1px solid #f5f5f5;font-size:12px;">' + r.typeLabel + '</td>' +
            '<td style="padding:7px 10px;border-bottom:1px solid #f5f5f5;font-size:12px;">' + r.evaluatorName + '</td>' +
            '<td style="padding:7px 10px;border-bottom:1px solid #f5f5f5;font-size:12px;">' + r.submittedAt + '</td>' +
            '</tr>';
    }).join('');
}

function hrCardShowForm(section) {
    var formEl = document.getElementById('hr-card-form-' + section);
    if (formEl) { formEl.style.display = 'block'; hrCardResetForm(section); }
}

function hrCardHideForm(section) {
    var formEl = document.getElementById('hr-card-form-' + section);
    if (formEl) formEl.style.display = 'none';
    hrCardResetForm(section);
}

function hrCardResetForm(section) {
    var cfg = HR_CARD_CFG[section];
    if (!cfg) return;
    cfg.fields.forEach(function(f) {
        setDateVal('hr-card-' + section + '-' + f, '');
    });
    var idxEl = document.getElementById('hr-card-edit-idx-' + section);
    if (idxEl) idxEl.value = '-1';
    var lbEl = document.getElementById('hr-card-form-label-' + section);
    if (lbEl) { lbEl.textContent = '신규 추가'; lbEl.style.color = '#F36178'; }
}

function hrCardEdit(section, idx) {
    var cfg = HR_CARD_CFG[section];
    var row = hrCardGetData(section)[idx];
    if (!row) return;
    var formEl = document.getElementById('hr-card-form-' + section);
    if (formEl) formEl.style.display = 'block';
    cfg.fields.forEach(function(f) {
        setDateVal('hr-card-' + section + '-' + f, row[f] || '');
    });
    var idxEl = document.getElementById('hr-card-edit-idx-' + section);
    if (idxEl) idxEl.value = idx;
    var lbEl = document.getElementById('hr-card-form-label-' + section);
    if (lbEl) { lbEl.textContent = (idx + 1) + '번째 항목 수정 중'; lbEl.style.color = '#888'; }
}

function hrCardSave(section) {
    if (!hrCurrentEmpId) return;
    var cfg = HR_CARD_CFG[section];
    if (!cfg) return;
    var row = {};
    cfg.fields.forEach(function(f) {
        var el = document.getElementById('hr-card-' + section + '-' + f);
        row[f] = el ? el.value.trim() : '';
    });
    if (!row[cfg.fields[0]]) {
        showToast(cfg.cols[0] + '은(는) 필수 입력입니다.', 'error');
        return;
    }
    if (!hrExtData[hrCurrentEmpId]) hrExtData[hrCurrentEmpId] = {};
    var key = 'card_' + section;
    if (!hrExtData[hrCurrentEmpId][key]) hrExtData[hrCurrentEmpId][key] = [];
    var idxEl = document.getElementById('hr-card-edit-idx-' + section);
    var editIdx = idxEl ? parseInt(idxEl.value) : -1;
    if (editIdx >= 0) {
        hrExtData[hrCurrentEmpId][key][editIdx] = row;
    } else {
        hrExtData[hrCurrentEmpId][key].push(row);
    }
    hrDataSave();
    hrCardRender(section);
    hrCardHideForm(section);
    showToast('저장되었습니다.', 'success');
}

function hrCardDelete(section, idx) {
    if (!hrCurrentEmpId) return;
    var key = 'card_' + section;
    var arr = (hrExtData[hrCurrentEmpId] || {})[key];
    if (!arr) return;
    arr.splice(idx, 1);
    hrDataSave();
    hrCardRender(section);
    showToast('삭제되었습니다.', 'success');
}

// ===== 첨부서류 =====
var HR_FILE_LIMIT = 1 * 1024 * 1024; // 1MB

function hrGetFiles(empId) {
    try { var s = localStorage.getItem('hrFiles_' + empId); return s ? JSON.parse(s) : []; } catch(e) { return []; }
}
function hrSaveFiles(empId, files) {
    try { localStorage.setItem('hrFiles_' + empId, JSON.stringify(files)); }
    catch(e) { showToast('저장 공간이 부족합니다. 파일을 줄이거나 서버 연동 후 이용하세요.', 'error'); }
}

function hrFileRender() {
    var tbody = document.getElementById('hr-file-list');
    if (!tbody) return;
    if (!hrCurrentEmpId) { tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#bbb;padding:30px;font-size:12px;">첨부된 서류가 없습니다.</td></tr>'; return; }
    var files = hrGetFiles(hrCurrentEmpId);
    if (files.length === 0) { tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#bbb;padding:30px;font-size:12px;">첨부된 서류가 없습니다.</td></tr>'; return; }
    var catBg    = { '신분증':'#e8f0fe', '통장사본':'#e6f4ea', '졸업증명서':'#fce8b2', '근로계약서':'#fde7f3', '자격증사본':'#f3e8fd', '주민등록등본':'#e8f5e9', '주민등록초본':'#e8f5e9', '기타':'#f1f3f4' };
    var catColor = { '신분증':'#1a73e8', '통장사본':'#188038', '졸업증명서':'#c46000', '근로계약서':'#c2185b', '자격증사본':'#8430ce', '주민등록등본':'#2e7d32', '주민등록초본':'#2e7d32', '기타':'#5f6368' };
    var bs = 'height:22px;padding:0 8px;border-radius:3px;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;';
    tbody.innerHTML = files.map(function(f, i) {
        var sz = f.size > 1024*1024 ? (f.size/1024/1024).toFixed(1)+'MB' : Math.ceil(f.size/1024)+'KB';
        var bg = catBg[f.category] || catBg['기타'];
        var cl = catColor[f.category] || catColor['기타'];
        var icon = f.mimeType && f.mimeType.startsWith('image/') ? '🖼' : '📄';
        syscodeEnsureData();
        var fileCatGrp = syscodeGroups.find(function(g){ return g.id === 'HR_FILE_CAT'; });
        var catOpts = fileCatGrp ? fileCatGrp.codes.filter(function(c){ return c.active; }).map(function(c){ return c.label; }) : ['기타'];
        if (catOpts.indexOf(f.category) < 0) catOpts = catOpts.concat([f.category]);
        var catSel = '<select onchange="hrFileCatChange('+i+',this.value)" style="border:1px solid '+cl+';background:'+bg+';color:'+cl+';border-radius:10px;font-size:11px;font-weight:600;padding:2px 6px;cursor:pointer;font-family:inherit;">'+
            catOpts.map(function(c){ return '<option value="'+c+'"'+(c===f.category?' selected':'')+'>'+c+'</option>'; }).join('')+'</select>';
        var stored = !!f.dataUrl;
        return '<tr>' +
            '<td style="padding:6px 12px;border-bottom:1px solid #f5f5f5;text-align:center;">' + catSel + '</td>' +
            '<td style="padding:8px 12px;border-bottom:1px solid #f5f5f5;font-size:12px;">' + icon + ' ' + f.name + '</td>' +
            '<td style="padding:8px 12px;border-bottom:1px solid #f5f5f5;font-size:12px;color:#888;text-align:center;">' + sz + '</td>' +
            '<td style="padding:8px 12px;border-bottom:1px solid #f5f5f5;font-size:12px;color:#888;text-align:center;">' + f.date + '</td>' +
            '<td style="padding:8px 12px;border-bottom:1px solid #f5f5f5;text-align:center;"><button onclick="hrFileAutoExtract()" style="'+bs+'background:#fff3e0;border:1px solid #ffcc80;color:#e65100;">AI 추출</button></td>' +
            '<td style="padding:8px 12px;border-bottom:1px solid #f5f5f5;text-align:right;white-space:nowrap;">' +
            (stored ? '<button onclick="hrFilePreview('+i+')" style="'+bs+'background:#fff;border:1px solid #d0d5dd;color:#555;margin-right:4px;">미리보기</button>' : '<span style="font-size:11px;color:#ccc;margin-right:6px;">미리보기 불가</span>') +
            (stored ? '<button onclick="hrFileDownload('+i+')" style="'+bs+'background:#fff;border:1px solid #d0d5dd;color:#555;margin-right:4px;">다운로드</button>' : '') +
            '<button onclick="hrFileDelete('+i+')" style="'+bs+'background:#fff;border:1px solid #f0b0b0;color:#d44;">삭제</button>' +
            '</td></tr>';
    }).join('');
}

function hrFileUploadClick() {
    if (!hrCurrentEmpId) { showToast('사원을 먼저 선택해주세요.', 'error'); return; }
    document.getElementById('hr-file-input').click();
}

function hrFileDrop(e) {
    e.preventDefault();
    document.getElementById('hr-file-dropzone').style.borderColor = '#f5b8c4';
    if (!hrCurrentEmpId) { showToast('사원을 먼저 선택해주세요.', 'error'); return; }
    var files = e.dataTransfer.files;
    if (files && files.length) hrFileProcess(files);
}

function hrFileSelected(input) {
    if (!input.files || !input.files.length) return;
    hrFileProcess(input.files);
    input.value = '';
}

var HR_FILE_CAT_RULES = [
    { cat:'신분증',       kw:['신분증','주민등록증','여권','passport'] },
    { cat:'주민등록등본', kw:['등본','주민등록등본'] },
    { cat:'주민등록초본', kw:['초본','주민등록초본'] },
    { cat:'통장사본',     kw:['통장','계좌','bank','account'] },
    { cat:'졸업증명서',   kw:['졸업','학위','diploma','degree','학교','certificate_edu'] },
    { cat:'자격증사본',   kw:['자격','자격증','license','cert','certificate'] },
    { cat:'근로계약서',   kw:['계약','contract','고용','employment'] }
];
function hrFileDetectCat(filename) {
    var lower = filename.toLowerCase().replace(/[\s_\-]/g, '');
    for (var i = 0; i < HR_FILE_CAT_RULES.length; i++) {
        var rule = HR_FILE_CAT_RULES[i];
        for (var j = 0; j < rule.kw.length; j++) {
            if (lower.indexOf(rule.kw[j]) >= 0) return rule.cat;
        }
    }
    return '기타';
}

function hrFileProcess(fileList) {
    var today = new Date().toISOString().slice(0, 10);
    var existing = hrGetFiles(hrCurrentEmpId);
    Array.from(fileList).forEach(function(file) {
        var cat = hrFileDetectCat(file.name);
        var obj = { id: 'f'+Date.now()+Math.random().toString(36).slice(2,5), name: file.name, category: cat, size: file.size, date: today, mimeType: file.type, dataUrl: null };
        if (file.size <= HR_FILE_LIMIT) {
            var reader = new FileReader();
            reader.onload = function(ev) {
                obj.dataUrl = ev.target.result;
                existing.push(obj);
                hrSaveFiles(hrCurrentEmpId, existing);
                hrFileRender();
                showToast(file.name + ' 첨부 완료', 'success');
            };
            reader.readAsDataURL(file);
        } else {
            existing.push(obj);
            hrSaveFiles(hrCurrentEmpId, existing);
            hrFileRender();
            showToast(file.name + ' 은 1MB 초과로 파일명만 저장됩니다. 서버 연동 후 실제 저장됩니다.', 'warn');
        }
    });
}

function hrFileCatChange(idx, newCat) {
    var files = hrGetFiles(hrCurrentEmpId);
    if (!files[idx]) return;
    files[idx].category = newCat;
    hrSaveFiles(hrCurrentEmpId, files);
    hrFileRender();
}

function hrFileAutoExtract() {
    showToast('AI 자동추출은 서버 연동 후 활성화됩니다.', 'info');
}

function hrFilePreview(idx) {
    var f = hrGetFiles(hrCurrentEmpId)[idx];
    if (!f || !f.dataUrl) { showToast('저장된 파일 데이터가 없습니다.', 'error'); return; }
    var mime = f.mimeType || '';
    var w = window.open('', '_blank');
    if (mime.startsWith('image/')) {
        w.document.write('<html><body style="margin:0;background:#222;min-height:100vh;display:flex;justify-content:center;align-items:flex-start;padding:20px;box-sizing:border-box;"><img src="' + f.dataUrl + '" style="max-width:100%;border-radius:4px;box-shadow:0 4px 20px rgba(0,0,0,0.5);"></body></html>');
    } else if (mime === 'application/pdf') {
        w.document.write('<html><body style="margin:0;height:100vh;"><embed src="' + f.dataUrl + '" type="application/pdf" width="100%" height="100%"></body></html>');
    } else if (mime.startsWith('text/') || mime === '') {
        try {
            var b64 = f.dataUrl.split(',')[1];
            var text = decodeURIComponent(escape(atob(b64)));
            var escaped = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
            w.document.write('<html><body style="margin:0;padding:20px;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-all;background:#fafafa;color:#333;">' + escaped + '</body></html>');
        } catch(e) {
            var a = document.createElement('a'); a.href = f.dataUrl; a.download = f.name; a.click();
            w.close();
            return;
        }
    } else {
        w.close();
        var a = document.createElement('a'); a.href = f.dataUrl; a.download = f.name; a.click();
        return;
    }
    w.document.title = f.name;
    w.document.close();
}

function hrFileDownload(idx) {
    var f = hrGetFiles(hrCurrentEmpId)[idx];
    if (!f || !f.dataUrl) { showToast('저장된 파일 데이터가 없습니다.', 'error'); return; }
    var a = document.createElement('a'); a.href = f.dataUrl; a.download = f.name; a.click();
}

function hrFileDelete(idx) {
    if (!confirm('첨부파일을 삭제하시겠습니까?')) return;
    var files = hrGetFiles(hrCurrentEmpId);
    files.splice(idx, 1);
    hrSaveFiles(hrCurrentEmpId, files);
    hrFileRender();
    showToast('삭제되었습니다.', 'success');
}

// ===== 휴직 내역 모달 =====
var _hrLeaveEmpId  = '';
var _hrLeaveEditIdx = -1; // -1: 신규추가 모드, >=0: 수정 모드

function hrLeaveHistOpen() {
    if (!hrCurrentEmpId) { showToast('사원을 먼저 선택해주세요.', 'error'); return; }
    _hrLeaveEmpId = hrCurrentEmpId;
    var emp = employees.find(function(e) { return e.id === hrCurrentEmpId; });
    var titleEl = document.getElementById('hr-leave-modal-title');
    if (titleEl) titleEl.textContent = emp ? emp.name : '';
    _hrLeaveEditIdx = -1;
    hrLeaveHistRender();
    hrLeaveHistResetForm();
    var modal = document.getElementById('hr-leave-modal');
    if (modal) modal.style.display = 'flex';
}

function hrLeaveHistResetForm() {
    _hrLeaveEditIdx = -1;
    setDateVal('hr-leave-add-start', '');
    setDateVal('hr-leave-add-end', '');
    var el = document.getElementById('hr-leave-add-reason'); if (el) el.value = '';
    var te = document.getElementById('hr-leave-add-type');   if (te) te.value = '';
    var lb = document.getElementById('hr-leave-form-label'); if (lb) { lb.textContent = '신규 추가'; lb.style.color = '#F36178'; }
    var sb = document.getElementById('hr-leave-submit-btn'); if (sb) sb.textContent = '저장';
    var cb = document.getElementById('hr-leave-cancel-btn'); if (cb) cb.style.display = 'none';
}

function hrLeaveHistClose() {
    var modal = document.getElementById('hr-leave-modal');
    if (modal) modal.style.display = 'none';
    hrRefreshWorkStatus();
}

function hrLeaveHistRender() {
    var tbody = document.getElementById('hr-leave-hist-list');
    if (!tbody) return;
    var ext = hrExtData[_hrLeaveEmpId] || {};
    var leaves = ext.leaveHistory || [];
    if (leaves.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:24px;color:#aaa;font-size:13px;">휴직 내역이 없습니다.</td></tr>';
        return;
    }
    var today = new Date(); today.setHours(0, 0, 0, 0);
    tbody.innerHTML = leaves.map(function(l, i) {
        var days = '';
        if (l.startDate && l.endDate) {
            var diff = Math.round((new Date(l.endDate) - new Date(l.startDate)) / 86400000) + 1;
            days = diff + '일';
        }
        var isActive = false;
        if (l.startDate) {
            var s = new Date(l.startDate); s.setHours(0, 0, 0, 0);
            var e = l.endDate ? new Date(l.endDate) : null; if (e) e.setHours(0, 0, 0, 0);
            isActive = today >= s && (!e || today <= e);
        }
        var rowBg = isActive ? '#FFF5F7' : (i % 2 === 1 ? '#fafafa' : '#fff');
        var activeTag = isActive
            ? '<span style="display:inline-block;font-size:10px;background:#F36178;color:#fff;border-radius:10px;padding:1px 6px;margin-left:5px;font-weight:700;vertical-align:middle;line-height:16px;">진행중</span>'
            : '';
        var borderB = 'border-bottom:1px solid #e8e8e8;';
        var td = 'style="padding:9px 10px;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;' + borderB;
        var isEditing = (_hrLeaveEditIdx === i);
        var editingBg = isEditing ? '#FFF8E1' : rowBg;
        var btnStyle   = 'height:24px;padding:0 7px;border-radius:3px;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;';
        var btnCell = isEditing
            ? '<button type="button" onclick="hrLeaveHistDelete(' + i + ')" style="' + btnStyle + 'background:#fff;border:1px solid #f0b0b0;color:#d44;">삭제</button>'
            : '<button type="button" onclick="hrLeaveHistEdit(' + i + ')"   style="' + btnStyle + 'background:#fff;border:1px solid #d0d5dd;color:#555;margin-right:4px;">수정</button>' +
              '<button type="button" onclick="hrLeaveHistDelete(' + i + ')" style="' + btnStyle + 'background:#fff;border:1px solid #f0b0b0;color:#d44;">삭제</button>';
        return '<tr style="background:' + editingBg + ';">' +
            '<td ' + td + 'text-align:center;color:' + (isActive ? '#F36178' : (isEditing ? '#b07000' : '#444')) + ';font-weight:' + (isActive || isEditing ? '600' : '400') + ';">' + (l.type || '') + activeTag + '</td>' +
            '<td ' + td + 'text-align:center;color:#555;">' + (l.startDate || '') + '</td>' +
            '<td ' + td + 'text-align:center;color:#555;">' + (l.endDate || '') + '</td>' +
            '<td ' + td + 'text-align:center;color:#777;">' + days + '</td>' +
            '<td style="padding:9px 10px;font-size:13px;' + borderB + 'color:#444;white-space:normal;word-break:break-all;">' + (l.reason || '<span style="color:#ccc;">-</span>') + '</td>' +
            '<td style="padding:6px 18px 6px 4px;border-bottom:1px solid #e8e8e8;text-align:right;white-space:nowrap;vertical-align:middle;">' + btnCell + '</td></tr>';
    }).join('');
}

function hrLeaveHistAdd() {
    var type   = (document.getElementById('hr-leave-add-type')?.value || '').trim();
    var start  = document.getElementById('hr-leave-add-start')?.value || '';
    var end    = document.getElementById('hr-leave-add-end')?.value || '';
    var reason = (document.getElementById('hr-leave-add-reason')?.value || '').trim();
    if (!type)  { showToast('휴직 구분을 선택해주세요.', 'error'); return; }
    if (!start) { showToast('시작일을 입력해주세요.', 'error'); return; }
    if (!end)   { showToast('종료일을 입력해주세요.', 'error'); return; }
    if (end < start) { showToast('종료일이 시작일보다 빠릅니다.', 'error'); return; }
    if (!hrExtData[_hrLeaveEmpId]) hrExtData[_hrLeaveEmpId] = {};
    if (!hrExtData[_hrLeaveEmpId].leaveHistory) hrExtData[_hrLeaveEmpId].leaveHistory = [];

    if (_hrLeaveEditIdx >= 0) {
        // 수정 모드: 기존 항목 업데이트
        hrExtData[_hrLeaveEmpId].leaveHistory[_hrLeaveEditIdx] = { type: type, startDate: start, endDate: end, reason: reason };
        hrDataSave();
        hrLeaveHistRender();
        hrLeaveHistResetForm();
        showToast('휴직 내역이 저장되었습니다.', 'success');
    } else {
        // 신규 추가
        hrExtData[_hrLeaveEmpId].leaveHistory.push({ type: type, startDate: start, endDate: end, reason: reason });
        hrDataSave();
        hrLeaveHistRender();
        hrLeaveHistResetForm();
        showToast('휴직 내역이 저장되었습니다.', 'success');
    }
}

function hrLeaveHistEdit(idx) {
    var leaves = (hrExtData[_hrLeaveEmpId] || {}).leaveHistory || [];
    var l = leaves[idx];
    if (!l) return;
    _hrLeaveEditIdx = idx;
    // 폼에 기존 데이터 채우기
    var te = document.getElementById('hr-leave-add-type'); if (te) te.value = l.type || '';
    setDateVal('hr-leave-add-start', l.startDate || '');
    setDateVal('hr-leave-add-end', l.endDate || '');
    var re = document.getElementById('hr-leave-add-reason'); if (re) re.value = l.reason || '';
    // 모드 UI 업데이트
    var lb = document.getElementById('hr-leave-form-label');
    if (lb) { lb.textContent = (idx + 1) + '번째 항목 수정 중'; lb.style.color = '#b07000'; }
    var sb = document.getElementById('hr-leave-submit-btn'); if (sb) sb.textContent = '저장';
    var cb = document.getElementById('hr-leave-cancel-btn'); if (cb) cb.style.display = '';
    hrLeaveHistRender();
    // 폼 쪽으로 스크롤
    var formEl = document.getElementById('hr-leave-form-label');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hrLeaveHistCancelEdit() {
    hrLeaveHistResetForm();
    hrLeaveHistRender();
}

function hrLeaveHistDelete(idx) {
    if (!hrExtData[_hrLeaveEmpId] || !hrExtData[_hrLeaveEmpId].leaveHistory) return;
    if (_hrLeaveEditIdx === idx) hrLeaveHistResetForm();
    hrExtData[_hrLeaveEmpId].leaveHistory.splice(idx, 1);
    hrDataSave();
    hrLeaveHistRender();
    showToast('삭제되었습니다.', 'success');
}

// 신규등록 모드에서 법인/근무형태 변경 시 사번 미리보기 갱신
function hrUpdateEmpIdPreview() {
    if (hrMode !== 'new') return;
    var corpName  = (document.getElementById('hrf-corp') || {}).value || '';
    var wtLabel   = (document.getElementById('hrf-work-type') || {}).value || '';
    var corpId    = hrGetCorpId(corpName);
    var wtCode    = hrGetWorktypeCode(wtLabel);
    var idEl      = document.getElementById('hrf-id');
    if (!idEl) return;
    if (corpId && wtCode) {
        var hireDate = (document.getElementById('hrf-hire-date') || {}).value || '';
        var preview = sacctPreviewEmpId(corpId, wtCode, hireDate);
        if (preview) { idEl.value = preview; return; }
    }
    // 규칙 없으면 공란 유지
    idEl.value = '';
}

// ===== 바로가기 커스터마이징 =====
const DEFAULT_QUICK_TABS = ['my-att-apply','my-cert','my-sal-slip','approval-send-doc'];

// 선택 가능한 메뉴 목록 (탭 ID만 있는 것들)
const QUICK_MENU_OPTIONS = [
    'my-home','my-org-chart','my-hr-info','my-att-apply','my-cert','my-sal-slip',
    'my-gmail','my-calendar','my-slack','my-notion',
    'hr-info','hr-appointment','hr-report-info','hr-report-join','hr-report-list','hr-cert',
    'att-status','att-apply','att-view',
    'sal-wage','sal-calc','sal-book','sal-slip','sal-status',
    'ret-calc','ret-status','ret-reserve',
    'ins-lookup','ins-payment','ins-rates',
    'recruit-applicants',
    'approval-send-doc','approval-send-temp','approval-send-recv',
    'approval-recv-pending','approval-recv-done','approval-recv-closed','approval-recv-ref','approval-important',
    'goal-setting','goal-manage','eval-write','eval-status',
    'board-notice','board-free','board-survey','board-qna',
    'work-note-shared','work-note','dashboard',
];

function getQuickMenuTabs() {
    const saved = localStorage.getItem('icare_quick_menu');
    if (saved) {
        try { return JSON.parse(saved); } catch(e) {}
    }
    return DEFAULT_QUICK_TABS;
}

function renderQuickMenu() {
    const el = document.getElementById('home-quick-menu');
    if (!el) return;
    const tabs = getQuickMenuTabs();
    el.innerHTML = tabs.map(tabId => {
        const label = menuTitles[tabId] || tabId;
        return `<button class="home-quick-btn" onclick="openTab('${tabId}')">${label}</button>`;
    }).join('');
}

let _quickDraftSelection = [];

function openQuickMenuSettings() {
    _quickDraftSelection = [...getQuickMenuTabs()];
    const listEl = document.getElementById('quick-menu-option-list');
    if (!listEl) return;
    listEl.innerHTML = QUICK_MENU_OPTIONS.map(tabId => {
        const label = menuTitles[tabId] || tabId;
        const checked = _quickDraftSelection.includes(tabId);
        return `<label class="quick-modal-item ${checked ? 'selected' : ''}" id="qopt-${tabId}">
            <input type="checkbox" value="${tabId}" ${checked ? 'checked' : ''} onchange="toggleQuickOption('${tabId}', this)">
            <span>${label}</span>
        </label>`;
    }).join('');
    document.getElementById('quick-menu-modal-overlay').style.display = 'block';
    document.getElementById('quick-menu-modal').style.display = 'flex';
}

function toggleQuickOption(tabId, checkbox) {
    if (checkbox.checked) {
        if (_quickDraftSelection.length >= 10) {
            checkbox.checked = false;
            showToast('최대 10개까지 선택할 수 있습니다.', 'error');
            return;
        }
        _quickDraftSelection.push(tabId);
        document.getElementById('qopt-' + tabId).classList.add('selected');
    } else {
        _quickDraftSelection = _quickDraftSelection.filter(t => t !== tabId);
        document.getElementById('qopt-' + tabId).classList.remove('selected');
    }
}

function saveQuickMenuSettings() {
    if (_quickDraftSelection.length === 0) {
        showToast('1개 이상 선택해주세요.', 'error'); return;
    }
    localStorage.setItem('icare_quick_menu', JSON.stringify(_quickDraftSelection));
    closeQuickMenuSettings();
    renderQuickMenu();
    showToast('바로가기가 저장되었습니다.');
}

function closeQuickMenuSettings() {
    document.getElementById('quick-menu-modal-overlay').style.display = 'none';
    document.getElementById('quick-menu-modal').style.display = 'none';
}

// ===== 조직도 =====
let orgChartDate = new Date();

function initOrgChart() {
    orgChartDate = new Date();
    renderOrgChart();
}

function switchOrgTab(tab) {
    var bonsa = document.getElementById('org-tab-bonsa');
    var bonbu = document.getElementById('org-tab-bonbu');
    var bonsaBtn = document.getElementById('org-tab-bonsa-btn');
    var bonbuBtn = document.getElementById('org-tab-bonbu-btn');
    if (!bonsa || !bonbu) return;
    if (tab === 'bonsa') {
        bonsa.style.display = '';
        bonbu.style.display = 'none';
        bonsaBtn.classList.add('active');
        bonbuBtn.classList.remove('active');
    } else {
        bonsa.style.display = 'none';
        bonbu.style.display = '';
        bonsaBtn.classList.remove('active');
        bonbuBtn.classList.add('active');
        orgRenderBonbu('bonbu-org-container');
    }
}

// ─── 본부 조직도 동적 렌더링 ───────────────────────────────────────────

// 법인별 고정 색상 팔레트
var ORG_CO_PALETTE = [
    { bg:'#F36178', text:'#fff' },
    { bg:'#4A90D9', text:'#fff' },
    { bg:'#56C4A0', text:'#fff' },
    { bg:'#9B59B6', text:'#fff' },
    { bg:'#E67E22', text:'#fff' },
    { bg:'#34495E', text:'#fff' },
];
var orgCoColorMap = {};

function orgGetCoColor(companyId) {
    if (!orgCoColorMap[companyId]) {
        var n = Object.keys(orgCoColorMap).length;
        orgCoColorMap[companyId] = ORG_CO_PALETTE[n % ORG_CO_PALETTE.length];
    }
    return orgCoColorMap[companyId];
}

// localStorage에서 직접 읽어서 부서 + 법인 데이터 반환
function orgReadData() {
    var companies = [];
    var depts = [];

    var scompRaw = localStorage.getItem('scompData_v1');
    if (scompRaw) {
        try {
            var arr = JSON.parse(scompRaw);
            if (Array.isArray(arr)) companies = arr;
        } catch(e) {}
    }

    var sdeptRaw = localStorage.getItem('sdeptData_v1');
    if (sdeptRaw) {
        try {
            var d = JSON.parse(sdeptRaw);
            if (d && Array.isArray(d.depts)) depts = d.depts;
        } catch(e) {}
    }

    return { companies: companies, depts: depts };
}

// 코드 기준으로 부서를 병합한 트리 반환
function orgBuildMergedTree(data) {
    var depts = data.depts;
    var roots = depts.filter(function(d){ return !d.parentId; });

    // code 기준으로 묶기
    var codeMap = {};
    roots.forEach(function(d) {
        if (!codeMap[d.code]) {
            codeMap[d.code] = { code: d.code, name: d.name, instances: [] };
        }
        codeMap[d.code].instances.push(d);
    });

    var merged = Object.values(codeMap).sort(function(a, b) {
        return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
    });

    merged.forEach(function(node) {
        // 모든 인스턴스의 id를 수집
        var parentIds = node.instances.map(function(d){ return d.id; });

        // 직계 자녀 (cross-company)
        node.children = depts.filter(function(d) {
            return d.parentId && parentIds.indexOf(d.parentId) >= 0;
        });

        // 루트 직속 인원 (부서명이 root 이름과 동일한 직원)
        node.rootMembers = [];
        node.instances.forEach(function(d) {
            employees.filter(function(e){ return e.department === d.name; })
                .forEach(function(e) { node.rootMembers.push({ emp: e, companyId: d.companyId }); });
        });

        // 소속 법인 목록
        node.companyIds = node.instances.map(function(d){ return d.companyId; })
            .filter(function(id, i, arr){ return arr.indexOf(id) === i; });
    });

    return merged;
}

function orgRenderDeptCard(dept) {
    var color = orgGetCoColor(dept.companyId);
    var members = employees.filter(function(e){ return e.department === dept.name; });
    var memberHTML = members.length
        ? members.map(function(e) {
            return '<span class="bonbu-member">' + e.name +
                (e.position ? ' <span class="bonbu-member-pos">(' + e.position + ')</span>' : '') +
                '</span>';
          }).join('')
        : '<span class="bonbu-no-member">인원 없음</span>';

    return '<div class="bonbu-dept-card">' +
        '<div class="bonbu-dept-hd" style="background:' + color.bg + ';color:' + color.text + '">' +
        escapeHtml(dept.name) +
        (members.length ? '<span class="bonbu-dept-cnt">' + members.length + '명</span>' : '') +
        '</div>' +
        '<div class="bonbu-dept-body">' + memberHTML + '</div>' +
        '</div>';
}

function escapeHtml(str) {
    return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function switchDashOrgTab(tab) {
    var bonsa = document.getElementById('dash-org-tab-bonsa');
    var bonbu = document.getElementById('dash-org-tab-bonbu');
    var bonsaBtn = document.getElementById('dash-org-tab-bonsa-btn');
    var bonbuBtn = document.getElementById('dash-org-tab-bonbu-btn');
    if (!bonsa || !bonbu) return;
    if (tab === 'bonsa') {
        bonsa.style.display = '';
        bonbu.style.display = 'none';
        bonsaBtn.classList.add('active');
        bonbuBtn.classList.remove('active');
    } else {
        bonsa.style.display = 'none';
        bonbu.style.display = '';
        bonsaBtn.classList.remove('active');
        bonbuBtn.classList.add('active');
        orgRenderBonbu('dash-bonbu-org-container');
    }
}

function orgRenderBonbu(containerId) {
    var container = document.getElementById(containerId || 'bonbu-org-container');
    if (!container) return;

    // 색상 맵 초기화
    orgCoColorMap = {};

    var data = orgReadData();

    if (!data.depts.length) {
        container.innerHTML = '<div class="bonbu-empty"><div class="bonbu-empty-icon">🏢</div>' +
            '<div>등록된 부서가 없습니다.<br>시스템설정 → 조직관리 → 부서정보에서<br>부서를 먼저 추가해주세요.</div></div>';
        return;
    }

    // 법인 순서대로 색상 먼저 확정 (legend와 카드 색 일치)
    data.companies.forEach(function(c){ orgGetCoColor(c.id); });

    var merged = orgBuildMergedTree(data);

    // 범례
    var legendHTML = data.companies.map(function(c) {
        var col = orgGetCoColor(c.id);
        return '<div class="bonbu-legend-item">' +
            '<div class="bonbu-legend-dot" style="background:' + col.bg + '"></div>' +
            escapeHtml(c.name) + '</div>';
    }).join('');

    var html = (legendHTML ? '<div class="bonbu-legend">' + legendHTML + '</div>' : '') +
               '<div class="bonbu-org-wrap">';

    merged.forEach(function(node) {
        // 소속 법인명 나열
        var corpNames = node.companyIds.map(function(id) {
            var c = data.companies.find(function(x){ return x.id === id; });
            return c ? c.name : id;
        }).join(' · ');

        html += '<div class="bonbu-section">';
        html += '<div class="bonbu-section-hd">' +
            '<div class="bonbu-section-hd-left">' +
            '<span class="bonbu-section-name">' + escapeHtml(node.name) + '</span>' +
            '<span class="bonbu-section-code">(' + escapeHtml(node.code) + ')</span>' +
            '</div>' +
            (corpNames ? '<span class="bonbu-section-corps">' + escapeHtml(corpNames) + '</span>' : '') +
            '</div>';

        var hasContent = node.rootMembers.length || node.children.length;
        if (hasContent) {
            html += '<div class="bonbu-depts-row">';

            // 루트 직속 인원이 있으면 카드로 표시
            node.instances.forEach(function(inst) {
                var instMembers = employees.filter(function(e){ return e.department === inst.name; });
                if (instMembers.length) {
                    html += orgRenderDeptCard(inst);
                }
            });

            // 하위 부서 카드
            node.children.forEach(function(child) {
                html += orgRenderDeptCard(child);
            });

            html += '</div>';
        } else {
            html += '<div class="bonbu-section-empty">하위 부서 또는 소속 인원이 없습니다.</div>';
        }

        html += '</div>'; // bonbu-section
    });

    html += '</div>'; // bonbu-org-wrap

    container.innerHTML = html;
}

function orgChartPrevDay() {
    const d = new Date(orgChartDate);
    d.setDate(d.getDate() - 1);
    orgChartDate = d;
    renderOrgChart();
}

function orgChartNextDay() {
    const d = new Date(orgChartDate);
    d.setDate(d.getDate() + 1);
    orgChartDate = d;
    renderOrgChart();
}

function orgChartToday() {
    orgChartDate = new Date();
    renderOrgChart();
}

function renderOrgChart() {
    const days = ['일','월','화','수','목','금','토'];
    const d = orgChartDate;
    const dateStr = `${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 (${days[d.getDay()]})`;

    // 날짜 표시 - 대시보드 + 마이페이지 조직도 동시 업데이트
    ['org-chart-date', 'my-org-chart-date'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = dateStr;
    });

    const p = n => String(n).padStart(2,'0');
    const dateValue = `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`;

    const activeEmps = employees.filter(e => e.hire_date <= dateValue);

    // 빈 상태 HTML
    const emptyHTML = '<div style="text-align:center;color:#bbb;padding:60px 20px;font-size:14px;">해당 날짜에 재직 중인 직원이 없습니다.</div>';

    // 부서별 그룹핑
    const deptMap = {};
    activeEmps.forEach(e => {
        if (!deptMap[e.department]) deptMap[e.department] = [];
        deptMap[e.department].push(e);
    });

    const positionOrder = ['대표','부사장','전무','상무','이사','부장','차장','과장','대리','사원','인턴'];
    function sortByPosition(emps) {
        return emps.slice().sort((a, b) => {
            let ia = positionOrder.indexOf(a.position);
            let ib = positionOrder.indexOf(b.position);
            if (ia < 0) ia = 99;
            if (ib < 0) ib = 99;
            return ia - ib;
        });
    }

    let treeHTML = emptyHTML;
    if (activeEmps.length > 0) {
        const depts = Object.keys(deptMap);
        const deptCols = depts.map(dept => {
            const members = sortByPosition(deptMap[dept]);
            const memberHTML = members.map(emp => `
                <div class="org-member-card">
                    <div class="org-member-avatar">${emp.name[0]}</div>
                    <div class="org-member-info">
                        <div class="org-member-name">${emp.name}</div>
                        <div class="org-member-pos">${emp.position}</div>
                    </div>
                </div>`).join('');
            return `<div class="org-dept-col">
                <div class="org-dept-connector-top"></div>
                <div class="org-dept-node">${dept}<span class="org-dept-count">${members.length}명</span></div>
                <div class="org-dept-members">${memberHTML}</div>
            </div>`;
        }).join('');

        treeHTML = `
            <div class="org-tree-inner">
                <div class="org-company-node">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    케어 주식회사
                    <span class="org-company-count">총 ${activeEmps.length}명</span>
                </div>
                <div class="org-tree-line-down"></div>
                <div class="org-dept-row-wrap">
                    <div class="org-dept-row-line"></div>
                    <div class="org-dept-row">${deptCols}</div>
                </div>
            </div>`;
    }

    // 대시보드 + 마이페이지 조직도 트리 동시 업데이트
    ['org-chart-tree', 'my-org-chart-tree'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = treeHTML;
    });
}

// 출퇴근 기록 초기화 (당일)
async function resetAttendanceToday() {
    if (!await showConfirm('오늘 출퇴근 기록을 초기화하시겠습니까?')) return;
    localStorage.removeItem('icare_attendance_today');
    attClockInTime = null;
    attClockOutTime = null;
    stopWorkTimer();
    resetAttBtn();
    showToast('출퇴근 기록이 초기화되었습니다.');
}

// ===== 인사정보 관리 =====

// 직원 데이터 localStorage 저장/로드
// ===== 변경이력 =====
var hrHistData = {};

var HR_HIST_LABELS = {
    name:'성명', department:'부서', position:'직위', email:'이메일', hire_date:'입사일', phone:'연락처',
    name_en:'영문명', name_hanja:'한자명', gender:'성별', mobile:'휴대폰',
    zipcode:'우편번호', address:'주소', address_detail:'상세주소',
    bank_code:'은행명', bankAccount:'계좌번호', bankHolder:'예금주',
    corp:'법인', company:'사업장', hire_type:'고용형태', work_type:'근무형태',
    contract_type:'계약형태', schedule_type:'근무스케줄', status:'재직상태',
    retire_date:'퇴직일', retire_reason:'퇴직사유',
    first_hire:'최초입사일', group_hire:'그룹입사일',
    contract_start:'계약시작일', contract_end:'계약종료일',
    probation_start:'수습시작일', probation_end:'수습종료일',
    marital_status:'결혼여부', blood_type:'혈액형', nationality:'국적',
    emergency_name:'비상연락 성명', emergency_phone:'비상연락 전화',
    disability:'장애여부', disability_grade:'장애등급'
};

function hrHistSnapshot(empId) {
    var emp = employees.find(function(e){ return e.id === empId; });
    var ext = hrExtData[empId] || {};
    if (!emp) return null;
    var snap = {};
    Object.keys(HR_HIST_LABELS).forEach(function(k) {
        snap[k] = (emp[k] !== undefined ? emp[k] : ext[k]) || '';
    });
    // bank_code는 코드명으로 변환해서 기록
    if (snap.bank_code) {
        var bankList = getCodeValues('BANK_CODE');
        var bankItem = bankList.find(function(b){ return b.code === snap.bank_code; });
        snap.bank_code = bankItem ? bankItem.label : snap.bank_code;
    }
    return snap;
}

function hrHistRecord(empId, before, after) {
    var changes = [];
    Object.keys(HR_HIST_LABELS).forEach(function(k) {
        var a = String(before[k] || ''), b = String(after[k] || '');
        if (a !== b) changes.push({ field: k, label: HR_HIST_LABELS[k], from: a, to: b });
    });
    if (changes.length === 0) return;
    if (!hrHistData[empId]) hrHistData[empId] = [];
    var emp = employees.find(function(e){ return e.id === empId; });
    hrHistData[empId].unshift({
        ts: new Date().toISOString(),
        by: (window.currentUser && currentUser.name) || '관리자',
        name: emp ? emp.name : empId,
        changes: changes
    });
    if (hrHistData[empId].length > 50) hrHistData[empId].length = 50;
    try { localStorage.setItem('hrHistData_v1', JSON.stringify(hrHistData)); } catch(e) {}
}

function hrHistOpen() {
    if (!hrCurrentEmpId) { showToast('직원을 선택해주세요.', 'info'); return; }
    var emp = employees.find(function(e){ return e.id === hrCurrentEmpId; });
    var list = hrHistData[hrCurrentEmpId] || [];
    var modal = document.getElementById('hr-hist-modal');
    var sub   = document.getElementById('hr-hist-modal-sub');
    var body  = document.getElementById('hr-hist-modal-body');
    if (!modal) return;
    sub.textContent = emp ? emp.name + ' · ' + hrCurrentEmpId : hrCurrentEmpId;
    if (list.length === 0) {
        body.innerHTML = '<div class="hr-hist-empty">저장 이력이 없습니다.<br><span style="font-size:12px;color:#bbb">저장 버튼을 누를 때마다 변경 내역이 기록됩니다.</span></div>';
    } else {
        var rows = [];
        list.forEach(function(entry) {
            var d = new Date(entry.ts);
            var dateStr = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0')
                        + ' ' + String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
            entry.changes.forEach(function(c, ci) {
                rows.push(
                    '<tr>' +
                    (ci === 0
                        ? '<td class="hr-hist-dt" rowspan="' + entry.changes.length + '">' + escHtml(dateStr) + '</td>' +
                          '<td class="hr-hist-by-cell" rowspan="' + entry.changes.length + '">' + escHtml(entry.by) + '</td>'
                        : '') +
                    '<td class="hr-hist-label">' + escHtml(c.label) + '</td>' +
                    '<td class="hr-hist-from">' + (c.from ? escHtml(c.from) : '<span class="hr-hist-nil">-</span>') + '</td>' +
                    '<td class="hr-hist-to">' + (c.to ? escHtml(c.to) : '<span class="hr-hist-nil">-</span>') + '</td>' +
                    '</tr>'
                );
            });
        });
        body.innerHTML =
            '<table class="hr-hist-tbl">' +
            '<thead><tr>' +
              '<th>변경일시</th><th>변경자</th><th>항목</th><th>변경 전</th><th>변경 후</th>' +
            '</tr></thead>' +
            '<tbody>' + rows.join('') + '</tbody>' +
            '</table>';
    }
    modal.style.display = 'flex';
}

function hrHistClose() {
    var modal = document.getElementById('hr-hist-modal');
    if (modal) modal.style.display = 'none';
}

function hrDataSave() {
    try {
        localStorage.setItem('hr_employees_v1',   JSON.stringify(employees));
        localStorage.setItem('hr_extdata_v1',     JSON.stringify(hrExtData));
        localStorage.setItem('hrApptHistory_v1',  JSON.stringify(hrApptHistory));
    } catch(e) {}
}
function hrDataLoad() {
    var savedEmps = localStorage.getItem('hr_employees_v1');
    var savedExt  = localStorage.getItem('hr_extdata_v1');
    var savedAppt = localStorage.getItem('hrApptHistory_v1');
    if (savedEmps) {
        try {
            var parsed = JSON.parse(savedEmps);
            employees.splice(0, employees.length, ...parsed);
        } catch(e) {}
    }
    if (savedExt) {
        try {
            var parsedExt = JSON.parse(savedExt);
            Object.keys(hrExtData).forEach(function(k) { delete hrExtData[k]; });
            Object.assign(hrExtData, parsedExt);
        } catch(e) {}
    }
    if (savedAppt) {
        try {
            var parsedAppt = JSON.parse(savedAppt);
            Object.keys(hrApptHistory).forEach(function(k) { delete hrApptHistory[k]; });
            Object.assign(hrApptHistory, parsedAppt);
        } catch(e) {}
    }
    var savedHist = localStorage.getItem('hrHistData_v1');
    if (savedHist) {
        try { Object.assign(hrHistData, JSON.parse(savedHist)); } catch(e) {}
    }
}

// 직원 추가 HR 데이터
const hrExtData = {
    'E001': { status:'재직', name_en:'KIM CHUL SU',    gender:'남성', birth:'1990-01-15', edu:'대졸',    marital:'기혼', mobile:'010-1234-5678', address:'서울시 강남구 역삼동',      corp:'케어링',           company:'케어링 본사',           hire_type:'정규직', work_type:'상근', bank:'국민은행',  bankAccount:'123456-78-901234', bankHolder:'김철수' },
    'E002': { status:'재직', name_en:'LEE YOUNG HEE',  gender:'여성', birth:'1993-06-20', edu:'대졸',    marital:'미혼', mobile:'010-2345-6789', address:'서울시 서초구 방배동',      corp:'케어링',           company:'케어링 본사',           hire_type:'정규직', work_type:'상근', bank:'신한은행',  bankAccount:'234567-89-012345', bankHolder:'이영희' },
    'E003': { status:'재직', name_en:'PARK MIN SU',    gender:'남성', birth:'1997-03-10', edu:'대졸',    marital:'미혼', mobile:'010-3456-7890', address:'경기도 성남시 분당구',      corp:'케어링',           company:'케어링 본사',           hire_type:'정규직', work_type:'상근', bank:'하나은행',  bankAccount:'345678-90-123456', bankHolder:'박민수' },
    'E004': { status:'재직', name_en:'JUNG SU JIN',    gender:'여성', birth:'1988-11-05', edu:'대학원졸',marital:'기혼', mobile:'010-4567-8901', address:'서울시 송파구 잠실동',      corp:'케어링',           company:'케어링 본사',           hire_type:'정규직', work_type:'상근', bank:'우리은행',  bankAccount:'456789-01-234567', bankHolder:'정수진' },
    'E005': { status:'재직', name_en:'CHOI DONG UK',   gender:'남성', birth:'1999-01-02', edu:'대졸',    marital:'미혼', mobile:'010-5678-9012', address:'서울시 마포구 합정동',      corp:'케어링',           company:'케어링 본사',           hire_type:'계약직', work_type:'상근', bank:'기업은행',  bankAccount:'567890-12-345678', bankHolder:'최동욱' },
    'E006': { status:'재직', name_en:'KANG JI HYUN',   gender:'여성', birth:'1985-03-05', edu:'대졸',    marital:'기혼', mobile:'010-6789-0123', address:'인천시 남동구 구월동',      corp:'케어링커뮤니티케어', company:'케어링커뮤니티케어 본사', hire_type:'정규직', work_type:'상근', bank:'농협은행',  bankAccount:'678901-23-456789', bankHolder:'강지현' },
    'E007': { status:'재직', name_en:'YOON SUNG HO',   gender:'남성', birth:'1987-08-15', edu:'대학원졸',marital:'기혼', mobile:'010-7890-1234', address:'경기도 수원시 영통구',      corp:'케어링커뮤니티케어', company:'케어링커뮤니티케어 본사', hire_type:'정규직', work_type:'상근', bank:'국민은행',  bankAccount:'789012-34-567890', bankHolder:'윤성호' },
    'E008': { status:'재직', name_en:'LIM SU YEON',    gender:'여성', birth:'1994-04-01', edu:'대졸',    marital:'미혼', mobile:'010-8901-2345', address:'서울시 동작구 상도동',      corp:'케어링커뮤니티케어', company:'케어링커뮤니티케어 본사', hire_type:'정규직', work_type:'상근', bank:'신한은행',  bankAccount:'890123-45-678901', bankHolder:'임수연' },
    'E009': { status:'재직', name_en:'HAN JUNG MIN',   gender:'남성', birth:'1982-07-10', edu:'대학원졸',marital:'기혼', mobile:'010-9012-3456', address:'부산시 해운대구 우동',      corp:'케어링케어',        company:'케어링케어 본사',        hire_type:'정규직', work_type:'상근', bank:'하나은행',  bankAccount:'901234-56-789012', bankHolder:'한정민' },
    'E010': { status:'재직', name_en:'OH MI RAE',      gender:'여성', birth:'1991-09-20', edu:'대졸',    marital:'미혼', mobile:'010-0123-4567', address:'대구시 달서구 감삼동',      corp:'케어링케어',        company:'케어링케어 본사',        hire_type:'정규직', work_type:'상근', bank:'우리은행',  bankAccount:'012345-67-890123', bankHolder:'오미래' },
    'E011': { status:'재직', name_en:'SEO JUN HYUK',   gender:'남성', birth:'1998-05-15', edu:'대졸',    marital:'미혼', mobile:'010-1234-0987', address:'경기도 고양시 일산동구',    corp:'케어링케어',        company:'케어링케어 본사',        hire_type:'계약직', work_type:'상근', bank:'기업은행',  bankAccount:'123450-78-901230', bankHolder:'서준혁' },
    'E012': { status:'재직', name_en:'MOON SO HEE',    gender:'여성', birth:'1980-02-01', edu:'대학원졸',marital:'기혼', mobile:'010-2345-1098', address:'광주시 북구 운암동',        corp:'선하다',           company:'선하다 본사',           hire_type:'정규직', work_type:'상근', bank:'농협은행',  bankAccount:'234561-89-012346', bankHolder:'문소희' },
    'E013': { status:'재직', name_en:'BAE HYUN WOO',   gender:'남성', birth:'1995-07-01', edu:'대졸',    marital:'미혼', mobile:'010-3456-2109', address:'서울시 노원구 상계동',      corp:'선하다',           company:'선하다 본사',           hire_type:'정규직', work_type:'상근', bank:'국민은행',  bankAccount:'345672-90-123457', bankHolder:'배현우' },
    'E014': { status:'퇴직', name_en:'SHIN YE JIN',    gender:'여성', birth:'2000-01-15', edu:'대졸',    marital:'미혼', mobile:'010-4567-3210', address:'서울시 강북구 번동',        corp:'선하다',           company:'선하다 본사',           hire_type:'계약직', work_type:'상근', bank:'신한은행',  bankAccount:'456783-01-234568', bankHolder:'신예진' },
    'E015': { status:'재직', name_en:'JANG MIN HO',    gender:'남성', birth:'1978-06-01', edu:'대학원졸',marital:'기혼', mobile:'010-5678-4321', address:'서울시 강남구 삼성동',      corp:'케어링',           company:'케어링 본사',           hire_type:'정규직', work_type:'상근', bank:'하나은행',  bankAccount:'567894-12-345679', bankHolder:'장민호' },
};

// 발령 이력 (샘플)
const hrApptHistory = {
    'E001': [
        { date:'2020-01-15', type:'입사', dept:'개발팀', pos:'사원', title:'', note:'신규입사' },
        { date:'2022-03-01', type:'보직', dept:'개발팀', pos:'대리', title:'', note:'' },
        { date:'2024-01-01', type:'보직', dept:'개발팀', pos:'과장', title:'', note:'' },
    ],
    'E002': [
        { date:'2021-06-20', type:'입사', dept:'영업팀', pos:'사원', title:'', note:'신규입사' },
        { date:'2023-07-01', type:'보직', dept:'영업팀', pos:'대리', title:'', note:'' },
    ],
    'E003': [{ date:'2022-03-10', type:'입사', dept:'개발팀', pos:'사원', title:'', note:'신규입사' }],
    'E004': [
        { date:'2019-11-05', type:'입사', dept:'인사팀', pos:'대리', title:'', note:'경력입사' },
        { date:'2022-01-01', type:'보직', dept:'인사팀', pos:'과장', title:'', note:'' },
    ],
    'E005': [{ date:'2023-01-02', type:'입사', dept:'영업팀', pos:'사원', title:'', note:'신규입사' }],
    'E006': [
        { date:'2018-03-05', type:'입사', dept:'간호팀', pos:'대리', title:'', note:'경력입사' },
        { date:'2021-01-01', type:'보직', dept:'간호팀', pos:'과장', title:'', note:'' },
        { date:'2023-07-01', type:'보직', dept:'간호팀', pos:'팀장', title:'', note:'' },
    ],
    'E007': [
        { date:'2019-08-15', type:'입사', dept:'사회복지팀', pos:'대리', title:'', note:'경력입사' },
        { date:'2022-08-01', type:'보직', dept:'사회복지팀', pos:'과장', title:'', note:'' },
    ],
    'E008': [{ date:'2021-04-01', type:'입사', dept:'행정팀', pos:'사원', title:'', note:'신규입사' },
             { date:'2023-04-01', type:'보직', dept:'행정팀', pos:'대리', title:'', note:'' }],
    'E009': [
        { date:'2017-07-10', type:'입사', dept:'요양팀', pos:'과장', title:'', note:'경력입사' },
        { date:'2020-01-01', type:'보직', dept:'요양팀', pos:'차장', title:'', note:'' },
        { date:'2022-07-01', type:'보직', dept:'요양팀', pos:'팀장', title:'', note:'' },
    ],
    'E010': [
        { date:'2020-09-20', type:'입사', dept:'간호팀', pos:'대리', title:'', note:'경력입사' },
        { date:'2023-09-01', type:'보직', dept:'간호팀', pos:'과장', title:'', note:'' },
    ],
    'E011': [{ date:'2023-05-15', type:'입사', dept:'행정팀', pos:'사원', title:'', note:'신규입사' }],
    'E012': [
        { date:'2016-02-01', type:'입사', dept:'사회복지팀', pos:'과장', title:'', note:'경력입사' },
        { date:'2019-02-01', type:'보직', dept:'사회복지팀', pos:'차장', title:'', note:'' },
        { date:'2021-02-01', type:'보직', dept:'사회복지팀', pos:'팀장', title:'', note:'' },
    ],
    'E013': [{ date:'2022-07-01', type:'입사', dept:'요양팀', pos:'사원', title:'', note:'신규입사' },
             { date:'2024-07-01', type:'보직', dept:'요양팀', pos:'대리', title:'', note:'' }],
    'E014': [
        { date:'2024-01-15', type:'입사', dept:'행정팀', pos:'사원', title:'', note:'계약입사' },
        { date:'2025-12-31', type:'퇴직', dept:'행정팀', pos:'사원', title:'', note:'계약만료' },
    ],
    'E015': [
        { date:'2015-06-01', type:'입사', dept:'개발팀', pos:'과장', title:'', note:'경력입사' },
        { date:'2018-01-01', type:'보직', dept:'개발팀', pos:'차장', title:'', note:'' },
        { date:'2021-01-01', type:'보직', dept:'개발팀', pos:'부장', title:'', note:'' },
    ],
};

let hrCurrentEmpId = null;
let hrMode = 'view'; // 'view' | 'new'

function hrSwitchTab(tabId, btn) {
    document.querySelectorAll('.hr-dtab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.hr-tab-body').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const tabEl = document.getElementById(tabId);
    if (tabEl) tabEl.classList.add('active');
}

function hrResetToFirstTab() {
    document.querySelectorAll('.hr-dtab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.hr-tab-body').forEach(t => t.classList.remove('active'));
    const firstBtn = document.querySelector('#hr-dtab-bar .hr-dtab');
    if (firstBtn) firstBtn.classList.add('active');
    const firstBody = document.getElementById('hrtab-info');
    if (firstBody) firstBody.classList.add('active');
}

function initHrInfo() {
    _hrBuildCorpDropdown();
    _hrBuildCompanyDropdown();
    _hrBuildDeptDropdown();
    _hrBuildCodeDropdowns();

    // 우측 패널 기본 상태: 폼 보이되 공란
    document.getElementById('hr-no-select').style.display = 'none';
    document.getElementById('hr-detail-wrap').style.display = 'flex';
    document.getElementById('hr-d-avatar').textContent = '-';
    document.getElementById('hr-d-name').textContent = '직원 미선택';
    document.getElementById('hr-d-age').textContent = '';
    document.getElementById('hr-d-sub').textContent = '좌측 목록에서 직원을 선택하세요';
    document.querySelectorAll('#hr-detail-wrap input.hr-fi').forEach(el => { el.value = ''; });
    hrSearch();
}

// 주민등록번호 입력 → 내/외국인·성별 자동 설정
function hrRrnInput(el, part) {
    el.value = el.value.replace(/\D/g, '');
    if (part === 'front' && el.value.length === 6) {
        document.getElementById('hrf-rrn-back').focus();
    }
    if (part === 'back' && el.value.length >= 1) {
        var d = parseInt(el.value[0]);
        var foreignMap = { 1:false, 2:false, 3:false, 4:false, 5:true, 6:true, 7:true, 8:true };
        var maleMap    = { 1:true,  2:false, 3:true,  4:false, 5:true, 6:false,7:true, 8:false };
        var setRadio   = function(name, val) {
            document.querySelectorAll('input[name="' + name + '"]').forEach(function(r){ r.checked = r.value === val; });
        };
        if ([1,2,3,4,5,6,7,8].indexOf(d) !== -1) {
            setRadio('hrf-foreign', foreignMap[d] ? '외국인' : '내국인');
            setRadio('hrf-gender',  maleMap[d]    ? '남성'   : '여성');
            var autoEl = document.getElementById('hrf-rrn-auto');
            if (autoEl) autoEl.textContent = (foreignMap[d] ? '외국인' : '내국인') + ' · ' + (maleMap[d] ? '남성' : '여성');
        }
    }
}

// 주민번호 뒷자리 보기/숨기기 토글
function hrRrnToggle() {
    var inp = document.getElementById('hrf-rrn-back');
    var btn = document.getElementById('hrf-rrn-eye');
    if (!inp) return;
    var show = inp.type === 'password';
    inp.type = show ? 'text' : 'password';
    inp.style.letterSpacing = show ? '0' : '';
    if (btn) btn.classList.toggle('active', show);
}

// 메일 도메인 드롭다운 변경
function hrEmailDomainChange() {
    var sel    = document.getElementById('hrf-email-domain-sel');
    var custom = document.getElementById('hrf-email-domain-custom');
    if (!sel || !custom) return;
    custom.style.display = sel.value === '__custom__' ? '' : 'none';
}

// 메일 전체 주소 반환
function hrGetEmail() {
    var id  = (document.getElementById('hrf-email-id')?.value || '').trim();
    var sel = document.getElementById('hrf-email-domain-sel');
    if (!id || !sel) return '';
    var domain = sel.value === '__custom__'
        ? (document.getElementById('hrf-email-domain-custom')?.value || '').trim()
        : sel.value;
    return domain ? id + '@' + domain : id;
}

// 메일 로드 (기존 full address → 분리)
function hrSetEmail(email) {
    var idEl     = document.getElementById('hrf-email-id');
    var selEl    = document.getElementById('hrf-email-domain-sel');
    var customEl = document.getElementById('hrf-email-domain-custom');
    if (!idEl || !selEl) return;
    if (!email) { idEl.value = ''; selEl.value = 'caring.co.kr'; hrEmailDomainChange(); return; }
    var parts  = email.split('@');
    idEl.value = parts[0] || '';
    var domain = parts[1] || '';
    var knownDomains = ['caring.co.kr','gmail.com','naver.com','daum.net'];
    if (knownDomains.indexOf(domain) !== -1) {
        selEl.value = domain;
    } else {
        selEl.value = '__custom__';
        if (customEl) customEl.value = domain;
    }
    hrEmailDomainChange();
}

// 은행 코드도움 초기화 (display input + hidden code input)
function hrInitBankSel(selectedCode) {
    var banks = getCodeValues('BANK_CODE');
    var bank = banks.find(function(b){ return b.code === selectedCode; });
    var dispEl = document.getElementById('hrf-bank-display');
    var codeEl = document.getElementById('hrf-bank');
    if (dispEl) dispEl.value = bank ? (bank.code + ' ' + bank.label) : '';
    if (codeEl) codeEl.value = selectedCode || '';
}

// 성명 입력 시 예금주 기본값 설정
function hrNameInput(el) {
    var holder = document.getElementById('hrf-bank-holder');
    if (holder && !holder.dataset.edited) holder.value = el.value;
}

// 법인 드롭다운 초기화
function hrInitCorpSel(selectedName) {
    var el = document.getElementById('hrf-corp');
    if (el) el.value = selectedName || '';
}

function hrInitCompanySel(corpId, selectedName) {
    var el = document.getElementById('hrf-company');
    if (el) el.value = selectedName || '';
}

function hrCorpChange() {} // 법인/사업장은 부서 선택으로 자동설정 — 직접 편집 없음

// 부서 드롭다운: 선택된 법인에 맞게 필터링
function hrFormRebuildDeptSel() {
    var sel = document.getElementById('hrf-org-dept');
    if (!sel) return;
    sdeptEnsureData();
    var today    = new Date().toISOString().split('T')[0];
    var corpName = (document.getElementById('hrf-corp') || {}).value || '';
    var comp     = corpName ? sdeptCompanies.find(function(c){ return c.name === corpName; }) : null;
    var filtered = sdeptDepts.filter(function(d){
        if (!sdeptIsActiveOn(d, today)) return false;
        if (comp) return d.companyId === comp.id;
        return true;
    });
    var cur = sel.value;
    sel.innerHTML = '<option value="">선택</option>' +
        filtered.map(function(d){ return '<option value="' + d.name + '">' + d.name + '</option>'; }).join('');
    if (cur && filtered.find(function(d){ return d.name === cur; })) sel.value = cur;
    else sel.value = '';
}

// 우편번호 검색 (Kakao Postcode API)
function hrSearchAddress() {
    new daum.Postcode({
        oncomplete: function(data) {
            var zipEl    = document.getElementById('hrf-zipcode');
            var addrEl   = document.getElementById('hrf-address');
            if (zipEl)  zipEl.value  = data.zonecode;
            if (addrEl) addrEl.value = data.roadAddress || data.jibunAddress;
            var detailEl = document.getElementById('hrf-address-detail');
            if (detailEl) { detailEl.value = ''; detailEl.focus(); }
        }
    }).open();
}

function hrNewEmployee() {
    hrMode = 'new';
    hrCurrentEmpId = null;
    document.querySelectorAll('.hr-emp-item').forEach(el => el.classList.remove('selected'));
    var delBtn = document.getElementById('hr-btn-del');
    if (delBtn) delBtn.style.display = 'none';

    document.getElementById('hr-no-select').style.display = 'none';
    document.getElementById('hr-detail-wrap').style.display = 'flex';

    document.getElementById('hr-d-avatar').textContent = '新';
    document.getElementById('hr-d-name').textContent = '신규 직원';
    document.getElementById('hr-d-age').textContent = '';
    document.getElementById('hr-d-sub').textContent = '정보를 입력하고 저장해주세요';

    // 인사정보 탭으로 전환
    hrResetToFirstTab();

    // 모든 input 초기화 + readonly 전체 해제 (hrf-id는 제외 - 별도 처리)
    document.querySelectorAll('#hr-detail-wrap input').forEach(el => {
        if (el.type === 'radio') return;
        if (el.id === 'hrf-id') return;
        el.value = '';
        el.readOnly = false;
    });
    document.querySelectorAll('#hr-detail-wrap select').forEach(el => el.selectedIndex = 0);
    var _wtEl = document.getElementById('hrf-work-type');     if (_wtEl) _wtEl.value = '상근직';
    var _ctEl = document.getElementById('hrf-contract-type'); if (_ctEl) _ctEl.value = '연봉제';
    var _htEl = document.getElementById('hrf-hire-type');     if (_htEl) _htEl.value = '정규직';
    var _stEl = document.getElementById('hrf-schedule-type'); if (_stEl) _stEl.value = '';
    var svcInitEl = document.getElementById('hrf-org-service');
    var jobInitEl = document.getElementById('hrf-org-job');
    if (svcInitEl) svcInitEl.value = '';
    if (jobInitEl) jobInitEl.value = '';
    var bankDispInit = document.getElementById('hrf-bank-display');
    var bankCodeInit = document.getElementById('hrf-bank');
    if (bankDispInit) bankDispInit.value = '';
    if (bankCodeInit) bankCodeInit.value = '';
    hrInitCorpSel('');
    // 주소 검색 필드는 readonly 유지
    var _zipEl = document.getElementById('hrf-zipcode');
    var _addrEl = document.getElementById('hrf-address');
    if (_zipEl)  _zipEl.readOnly  = true;
    if (_addrEl) _addrEl.readOnly = true;
    hrInitBankSel('');
    hrEmailDomainChange();
    var rrnAuto = document.getElementById('hrf-rrn-auto');
    if (rrnAuto) rrnAuto.textContent = '';
    var compTh = document.getElementById('hrf-company-th');
    var compTd = document.getElementById('hrf-company-td');
    if (compTh) compTh.style.display = '';
    if (compTd) compTd.style.display = '';

    // radio 초기화
    document.querySelectorAll('input[name="hrf-foreign"]').forEach(r => r.checked = r.value === '내국인');
    document.querySelectorAll('input[name="hrf-gender"]').forEach(r => r.checked = false);

    // 사번: 공란+잠금 (법인/근무형태 설정 시 자동 채번)
    const idEl = document.getElementById('hrf-id');
    if (idEl) { idEl.value = ''; idEl.readOnly = true; idEl.placeholder = '법인·근무형태 설정 시 자동생성'; }

    setTimeout(() => document.getElementById('hrf-name')?.focus(), 50);
}

function hrSaveEmployee() {
    if (hrMode === 'new') {
        const name = (document.getElementById('hrf-name')?.value || '').trim();
        if (!name) { showToast('성명은 필수 입력 항목입니다.', 'error'); return; }

        const hireDate = (document.getElementById('hrf-hire-date')?.value || '').trim();
        if (!hireDate) { showToast('입사일은 필수 입력 항목입니다.', 'error'); return; }

        const corp = (document.getElementById('hrf-corp')?.value || '').trim();
        if (!corp) { showToast('법인은 필수 입력 항목입니다.', 'error'); return; }

        const workType = document.getElementById('hrf-work-type')?.value || '';
        if (!workType) { showToast('근무형태는 필수 입력 항목입니다.', 'error'); return; }

        const dept     = (document.getElementById('hrf-org-dept')?.value || '').trim();
        const position = (document.getElementById('hrf-org-title')?.value || '').trim();
        const email    = hrGetEmail();
        const phone    = (document.getElementById('hrf-phone')?.value || '').trim();
        const company  = (document.getElementById('hrf-company')?.value || '').trim();
        const status   = (document.getElementById('hrf-status')?.value || '').trim() || '재직';
        const hireType     = document.getElementById('hrf-hire-type')?.value || '정규직';
        const contractType = document.getElementById('hrf-contract-type')?.value || '';
        const orgService   = document.getElementById('hrf-org-service')?.value || '';
        const orgJob       = document.getElementById('hrf-org-job')?.value || '';

        // 사번 확정: 법인+근무형태 규칙이 있으면 sacctGenEmpId(카운터 증가), 없으면 입력값 사용
        var corpIdForRule = hrGetCorpId(corp);
        var wtCodeForRule = hrGetWorktypeCode(workType);
        var id;
        if (corpIdForRule && wtCodeForRule && sacctPreviewEmpId(corpIdForRule, wtCodeForRule, hireDate)) {
            id = sacctGenEmpId(corpIdForRule, wtCodeForRule, hireDate);
        } else {
            id = (document.getElementById('hrf-id')?.value || '').trim();
        }
        if (!id) { showToast('사번을 생성할 수 없습니다. 법인·근무형태를 확인하거나 사번 규칙을 설정해주세요.', 'error'); return; }
        if (employees.find(e => e.id === id)) { showToast('이미 존재하는 사번입니다.', 'error'); return; }
        // 확정된 사번을 화면에도 반영
        const idEl = document.getElementById('hrf-id');
        if (idEl) idEl.value = id;

        employees.push({ id, name, department: dept, position, email, hire_date: hireDate, phone, salary: { base: 0, bonus: 0, allowance: 0 } });
        hrExtData[id] = {
            status,
            name_en:    (document.getElementById('hrf-name-en')?.value    || '').trim(),
            name_hanja: (document.getElementById('hrf-name-hanja')?.value || '').trim(),
            rrn_front:  (document.getElementById('hrf-rrn-front')?.value || '').trim(),
            rrn_back:   (document.getElementById('hrf-rrn-back')?.value  || '').trim(),
            gender: document.querySelector('input[name="hrf-gender"]:checked')?.value || '',
            birth: '', edu: '', marital: '',
            mobile:        (document.getElementById('hrf-mobile')?.value || '').trim(),
            zipcode:       (document.getElementById('hrf-zipcode')?.value || '').trim(),
            address:       (document.getElementById('hrf-address')?.value || '').trim(),
            address_detail:(document.getElementById('hrf-address-detail')?.value || '').trim(),
            corp, company, hire_type: hireType, work_type: workType, contract_type: contractType,
            org_service: orgService, org_job: orgJob,
            bank_code:   (document.getElementById('hrf-bank')?.value || '').trim(),
            bankAccount: (document.getElementById('hrf-bank-account')?.value || '').trim(),
            bankHolder:  (document.getElementById('hrf-bank-holder')?.value || '').trim(),
            loginPassword: '0000',
            pwdChanged: false,
        };
        hrDataSave();
        hrMode = 'view';
        hrCurrentEmpId = id;
        _hrBuildCompanyDropdown();
        _hrBuildDeptDropdown();
        hrSearch();
        selectHrEmployee(id);
        showToast(`${name} 직원이 등록되었습니다.`);
    } else if (hrCurrentEmpId) {
        var _histBefore = hrHistSnapshot(hrCurrentEmpId);
        hrFlushFormToData(hrCurrentEmpId);
        var _histAfter  = hrHistSnapshot(hrCurrentEmpId);
        hrHistRecord(hrCurrentEmpId, _histBefore, _histAfter);
        hrDataSave();
        // 헤더 갱신
        var _savedEmp = employees.find(function(e){ return e.id === hrCurrentEmpId; });
        if (_savedEmp) {
            document.getElementById('hr-d-avatar').textContent = _savedEmp.name[0];
            document.getElementById('hr-d-name').textContent   = _savedEmp.name;
            document.getElementById('hr-d-sub').textContent    = _savedEmp.id + ' · ' + _savedEmp.department + ' · ' + _savedEmp.position;
        }
        hrSearch();
        showToast('저장되었습니다.');
    } else {
        showToast('저장할 직원을 선택하거나 신규등록을 이용해주세요.', 'info');
    }
}

// ===== 인사기록카드 인쇄 =====
function hrPrintCard() {
    if (!hrCurrentEmpId) { showToast('직원을 선택해주세요.', 'info'); return; }
    var emp = employees.find(function(e) { return e.id === hrCurrentEmpId; });
    if (!emp) return;
    var ext = hrExtData[hrCurrentEmpId] || {};
    var appts = hrApptHistory[hrCurrentEmpId] || [];

    function v(val) { return val || '-'; }
    function maskRrn(front, back) {
        if (!front) return '-';
        return front + '-' + (back ? back[0] + '●●●●●●' : '●●●●●●●');
    }
    function tblRows(section, fields) {
        var data = (ext['card_' + section] || []);
        if (!data.length) return '<tr><td colspan="' + fields.length + '" class="empty-td">내역 없음</td></tr>';
        return data.map(function(r) {
            return '<tr>' + fields.map(function(f) { return '<td>' + v(r[f]) + '</td>'; }).join('') + '</tr>';
        }).join('');
    }

    var today = new Date().toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric' });

    var apptRows = appts.length === 0
        ? '<tr><td colspan="8" class="empty-td">내역 없음</td></tr>'
        : appts.map(function(a, i) {
            var prev = i > 0 ? appts[i - 1] : null;
            return '<tr><td>' + v(a.date) + '</td><td>' + v(prev ? prev.dept : '-') + '</td><td>' + v(prev ? prev.pos : '-') + '</td><td>' + v(prev ? (prev.title || '-') : '-') + '</td><td>' + v(a.dept) + '</td><td>' + v(a.pos) + '</td><td>' + v(a.title || '-') + '</td><td>' + v(a.note) + '</td></tr>';
          }).join('');

    var addr = ext.address ? (ext.address + (ext.address_detail ? ' ' + ext.address_detail : '')) : '-';
    var emergency = ext.emergency_name ? (ext.emergency_name + (ext.emergency_relation ? ' (' + ext.emergency_relation + ')' : '') + (ext.emergency_phone ? '  ' + ext.emergency_phone : '')) : '-';
    var militaryPeriod = ext.military_start ? (ext.military_start + ' ~ ' + (ext.military_end || '')) : '-';
    var contractPeriod = ext.contract_start ? (ext.contract_start + ' ~ ' + (ext.contract_end || '')) : '-';
    var probationPeriod = ext.probation_start ? (ext.probation_start + ' ~ ' + (ext.probation_end || '')) : '-';
    var militaryBranchRank = [ext.military_branch, ext.military_rank].filter(Boolean).join(' / ') || '-';
    var disabilityDetail = [ext.disability_type, ext.disability_grade].filter(Boolean).join(' / ') || '-';

    var html = '<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><title>인사기록카드 - ' + emp.name + '</title><style>' +
        '* { margin:0; padding:0; box-sizing:border-box; }' +
        'body { font-family:"Malgun Gothic","맑은 고딕",sans-serif; font-size:11px; color:#000; background:#fff; }' +
        '.page { width:210mm; min-height:297mm; margin:0 auto; padding:12mm 14mm; }' +
        'h1 { text-align:center; font-size:17px; font-weight:700; letter-spacing:6px; margin-bottom:6px; padding-bottom:8px; border-bottom:2.5px solid #000; }' +
        '.section { margin-bottom:13px; }' +
        '.sec-title { font-size:11px; font-weight:700; background:#aaa; color:#fff; padding:4px 8px; letter-spacing:0.5px; }' +
        'table { width:100%; border-collapse:collapse; }' +
        'th, td { border:1px solid #bbb; padding:4px 7px; font-size:10.5px; vertical-align:middle; }' +
        'th { background:#f0f0f0; font-weight:600; white-space:nowrap; text-align:left; color:#333; }' +
        '.hd th { background:#e0e0e0; color:#333; text-align:center; font-weight:600; }' +
        'tbody td { text-align:center; }' +
        '.empty-td { text-align:center !important; color:#aaa; padding:10px; }' +
        '.info-td { text-align:left !important; color:#000; font-weight:normal; }' +
        '.co-stamp { margin-top:20px; display:flex; justify-content:flex-end; align-items:center; gap:16px; }' +
        '.co-stamp-name { font-size:13px; font-weight:700; color:#000; }' +
        '.co-stamp-circle { width:60px; height:60px; border-radius:50%; border:2px solid #F36178; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:700; color:#F36178; text-align:center; line-height:1.4; }' +
        '.date-line { font-size:10px; color:#555; margin-bottom:6px; text-align:right; }' +
        '@media print { body { -webkit-print-color-adjust:exact; print-color-adjust:exact; } .page { padding:10mm 12mm; } }' +
        '</style></head><body><div class="page">' +
        '<h1>인 사 기 록 카 드</h1>' +

        // 기본 인사정보
        '<div class="section"><div class="sec-title">■ 기본 인사정보</div>' +
        '<table>' +
        '<tr><th style="width:13%">사번</th><td class="info-td">' + v(emp.id) + '</td><th style="width:13%">성명</th><td class="info-td">' + v(emp.name) + '</td><th style="width:13%">영문성명</th><td class="info-td">' + v(ext.name_en) + '</td></tr>' +
        '<tr><th>주민등록번호</th><td class="info-td">' + maskRrn(ext.rrn_front, ext.rrn_back) + '</td><th>성별</th><td class="info-td">' + v(ext.gender) + '</td><th>내/외국인</th><td class="info-td">' + v(ext.foreign) + '</td></tr>' +
        '<tr><th>국적</th><td class="info-td">' + (ext.nationality || '대한민국') + '</td><th>체류자격</th><td class="info-td">' + v(ext.visa_type) + '</td><th>혈액형</th><td class="info-td">' + v(ext.blood_type) + '</td></tr>' +
        '<tr><th>개인연락처</th><td class="info-td">' + v(ext.mobile) + '</td><th>업무연락처</th><td class="info-td">' + v(emp.phone) + '</td><th>이메일</th><td class="info-td">' + v(emp.email) + '</td></tr>' +
        '<tr><th>주소</th><td class="info-td" colspan="5">' + addr + '</td></tr>' +
        '</table></div>' +

        // 조직 정보
        '<div class="section"><div class="sec-title">■ 조직 정보</div>' +
        '<table>' +
        '<tr><th style="width:13%">법인</th><td class="info-td">' + v(ext.corp) + '</td><th style="width:13%">사업장</th><td class="info-td">' + v(ext.company) + '</td><th style="width:13%">부서</th><td class="info-td">' + v(emp.department) + '</td></tr>' +
        '<tr><th>직책</th><td class="info-td">' + v(emp.position) + '</td><th>서비스구분</th><td class="info-td">' + v(ext.org_service) + '</td><th>직무</th><td class="info-td">' + v(ext.org_job) + '</td></tr>' +
        '</table></div>' +

        // 재직 정보
        '<div class="section"><div class="sec-title">■ 재직 정보</div>' +
        '<table>' +
        '<tr><th style="width:13%">재직구분</th><td class="info-td">' + v(ext.status) + '</td><th style="width:13%">입사일</th><td class="info-td">' + v(emp.hire_date) + '</td><th style="width:13%">최초입사일</th><td class="info-td">' + v(ext.first_hire) + '</td></tr>' +
        '<tr><th>고용형태</th><td class="info-td">' + v(ext.hire_type) + '</td><th>근무형태</th><td class="info-td">' + v(ext.work_type) + '</td><th>계약형태</th><td class="info-td">' + v(ext.contract_type) + '</td></tr>' +
        '<tr><th>계약기간</th><td class="info-td">' + contractPeriod + '</td><th>수습기간</th><td class="info-td">' + probationPeriod + '</td><th>퇴직일</th><td class="info-td">' + v(ext.retire_date) + '</td></tr>' +
        '</table></div>' +

        // 신상 정보
        '<div class="section"><div class="sec-title">■ 신상 정보</div>' +
        '<table>' +
        '<tr><th style="width:13%">결혼여부</th><td class="info-td">' + v(ext.marital_status) + '</td><th style="width:13%">부양가족수</th><td class="info-td">' + v(ext.dependents) + '</td><th style="width:13%">긴급연락처</th><td class="info-td">' + emergency + '</td></tr>' +
        '<tr><th>병역구분</th><td class="info-td">' + v(ext.military_type) + '</td><th>군별/계급</th><td class="info-td">' + militaryBranchRank + '</td><th>복무기간</th><td class="info-td">' + militaryPeriod + '</td></tr>' +
        '<tr><th>장애여부</th><td class="info-td">' + v(ext.disability) + '</td><th>장애유형/등급</th><td class="info-td">' + disabilityDetail + '</td><th>장애등록번호</th><td class="info-td">' + v(ext.disability_regnum) + '</td></tr>' +
        '</table></div>' +

        // 학력
        '<div class="section"><div class="sec-title">■ 학력 사항</div>' +
        '<table><thead class="hd"><tr><th>최종학력</th><th>학교명</th><th>학과</th><th>입학일</th><th>졸업일</th><th>졸업구분</th></tr></thead>' +
        '<tbody>' + tblRows('edu', ['eduLevel','school','major','enterDate','gradDate','gradType']) + '</tbody></table></div>' +

        // 경력
        '<div class="section"><div class="sec-title">■ 경력 사항</div>' +
        '<table><thead class="hd"><tr><th>회사명</th><th>부서</th><th>직위</th><th>입사일</th><th>퇴사일</th><th>담당업무</th></tr></thead>' +
        '<tbody>' + tblRows('career', ['company','dept','pos','enterDate','leaveDate','duty']) + '</tbody></table></div>' +

        // 자격증
        '<div class="section"><div class="sec-title">■ 자격증</div>' +
        '<table><thead class="hd"><tr><th>자격명</th><th>발급기관</th><th>취득일</th><th>번호</th></tr></thead>' +
        '<tbody>' + tblRows('cert', ['name','issuer','acquireDate','number']) + '</tbody></table></div>' +

        // 상벌
        '<div class="section"><div class="sec-title">■ 상벌 사항</div>' +
        '<table><thead class="hd"><tr><th>구분</th><th>내용</th><th>일자</th><th>비고</th></tr></thead>' +
        '<tbody>' + tblRows('reward', ['type','content','date','note']) + '</tbody></table></div>' +

        // 발령 이력
        '<div class="section"><div class="sec-title">■ 발령 이력</div>' +
        '<table><thead class="hd">' +
        '<tr><th rowspan="2">발령일</th><th colspan="3">발령 전</th><th colspan="3">발령 후</th><th rowspan="2">비고</th></tr>' +
        '<tr><th>부서</th><th>직위</th><th>직책</th><th>부서</th><th>직위</th><th>직책</th></tr>' +
        '</thead><tbody>' + apptRows + '</tbody></table></div>' +

        // 서명란
        '<div class="date-line">확인일: ' + today + '</div>' +
        '<div class="co-stamp">' +
        '<div class="co-stamp-name">케어링(주)</div>' +
        '<div class="co-stamp-circle">직<br>인</div>' +
        '</div>' +
        '</div></body></html>';

    var w = window.open('', '_blank', 'width=960,height=1100,scrollbars=yes');
    if (!w) { showToast('팝업이 차단되었습니다. 브라우저에서 팝업을 허용해주세요.', 'error'); return; }
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(function() { w.print(); }, 500);
}

// form → employees / hrExtData 동기화 (편집 저장용)
function hrFlushFormToData(empId) {
    var emp = employees.find(function(e){ return e.id === empId; });
    if (!emp) return;
    if (!hrExtData[empId]) hrExtData[empId] = {};
    var ext = hrExtData[empId];
    var g = function(id){ var el = document.getElementById(id); return el ? el.value.trim() : ''; };
    var radio = function(name){ var el = document.querySelector('input[name="' + name + '"]:checked'); return el ? el.value : ''; };

    // ── employees 배열 ──
    emp.name       = g('hrf-name')     || emp.name;
    emp.phone      = g('hrf-phone');
    emp.email      = hrGetEmail();
    emp.department = g('hrf-org-dept') || emp.department;
    emp.position   = g('hrf-org-title');
    emp.hire_date  = g('hrf-hire-date') || emp.hire_date;

    // ── hrExtData ──
    ext.name_en        = g('hrf-name-en');
    ext.name_hanja     = g('hrf-name-hanja');
    ext.rrn_front      = g('hrf-rrn-front');
    ext.rrn_back       = g('hrf-rrn-back');
    ext.gender         = radio('hrf-gender');
    ext.foreign        = radio('hrf-foreign');
    ext.mobile         = g('hrf-mobile');
    ext.zipcode        = g('hrf-zipcode');
    ext.address        = g('hrf-address');
    ext.address_detail = g('hrf-address-detail');
    ext.bank_code      = g('hrf-bank');
    ext.bankAccount    = g('hrf-bank-account');
    ext.bankHolder     = g('hrf-bank-holder');
    ext.corp           = g('hrf-corp');
    ext.company        = g('hrf-company');
    ext.org_service    = g('hrf-org-service');
    ext.org_job        = g('hrf-org-job');
    ext.retire_date    = g('hrf-retire-date');
    ext.status         = hrComputeWorkStatus(empId);
    ext.hire_type      = g('hrf-hire-type');
    ext.work_type      = g('hrf-work-type');
    ext.contract_type   = g('hrf-contract-type');
    ext.schedule_type   = g('hrf-schedule-type');
    ext.first_hire     = g('hrf-first-hire');
    ext.group_hire     = g('hrf-group-hire');
    ext.contract_start        = g('hrf-contract-start');
    ext.contract_end          = g('hrf-contract-end');
    ext.probation_start       = g('hrf-probation-start');
    ext.probation_end         = g('hrf-probation-end');
    ext.retire_settlement     = g('hrf-retire-settlement');
    ext.retire_reason         = g('hrf-retire-reason');
    ext.retire_reason_detail  = g('hrf-retire-reason-detail');
    // 신상정보
    ext.marital_status     = g('hrf-marital-status');
    ext.blood_type         = g('hrf-blood-type');
    ext.dependents         = g('hrf-dependents');
    ext.nationality        = g('hrf-nationality');
    ext.visa_type          = g('hrf-visa-type');
    ext.emergency_name     = g('hrf-emergency-name');
    ext.emergency_relation = g('hrf-emergency-relation');
    ext.emergency_phone    = g('hrf-emergency-phone');
    ext.military_type      = g('hrf-military-type');
    ext.military_branch    = g('hrf-military-branch');
    ext.military_rank      = g('hrf-military-rank');
    ext.military_start     = g('hrf-military-start');
    ext.military_end       = g('hrf-military-end');
    ext.disability         = radio('hrf-disability');
    ext.disability_type    = g('hrf-disability-type');
    ext.disability_grade   = g('hrf-disability-grade');
    ext.disability_regnum  = g('hrf-disability-regnum');
    ext.disability_regdate = g('hrf-disability-regdate');
}

// 인사정보 직원 삭제
async function hrDeleteEmployee() {
    if (!hrCurrentEmpId) return;
    var emp = employees.find(function(e) { return e.id === hrCurrentEmpId; });
    if (!emp) return;

    // 연관 데이터 존재 여부 확인
    var blocking = [];

    // 발령 이력 확인
    var apptHist = hrApptHistory[hrCurrentEmpId] || [];
    if (apptHist.length > 0) {
        blocking.push('발령 이력 (' + apptHist.length + '건)');
    }

    // 발령 신청 내역 확인
    var apptReqs = (typeof apptRequests !== 'undefined' ? apptRequests : [])
        .filter(function(r) { return r.empId === hrCurrentEmpId; });
    if (apptReqs.length > 0) {
        blocking.push('발령 신청 내역 (' + apptReqs.length + '건)');
    }

    if (blocking.length > 0) {
        await showAlert(
            '[ ' + emp.name + ' ] 직원은 다음 데이터가 존재하여 삭제할 수 없습니다.\n\n• ' +
            blocking.join('\n• ') +
            '\n\n해당 데이터를 먼저 삭제한 후 다시 시도해주세요.'
        );
        return;
    }

    if (!await showConfirm('[ ' + emp.name + ' ] 직원을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.')) return;

    // employees 배열에서 제거
    var idx = employees.findIndex(function(e) { return e.id === hrCurrentEmpId; });
    if (idx > -1) employees.splice(idx, 1);

    // 확장 데이터 제거
    delete hrExtData[hrCurrentEmpId];

    hrDataSave();
    hrCurrentEmpId = null;
    hrMode = 'view';

    // 삭제 버튼 숨김
    var delBtn = document.getElementById('hr-btn-del');
    if (delBtn) delBtn.style.display = 'none';

    // 빈 상태로 복귀
    document.getElementById('hr-no-select').style.display = 'flex';
    document.getElementById('hr-detail-wrap').style.display = 'none';

    hrSearch();
    showToast(emp.name + ' 직원이 삭제되었습니다.', 'success');
}

function _hrBuildCorpDropdown() {
    if (typeof scompEnsureData === 'function') scompEnsureData();
    var sel = document.getElementById('hr-sel-corp');
    if (!sel) return;
    var corps = (typeof scompList !== 'undefined' ? scompList : []).filter(function(c){ return c.active !== false; });
    var cur = sel.value;
    sel.innerHTML = '<option value="">전체</option>' +
        corps.map(function(c){ return '<option value="' + c.name + '">' + c.name + '</option>'; }).join('');
    if (cur) sel.value = cur;
}

function _hrBuildCompanyDropdown() {
    if (typeof swpEnsureData === 'function') swpEnsureData();
    if (typeof scompEnsureData === 'function') scompEnsureData();
    const corp = document.getElementById('hr-sel-corp')?.value || '';
    const companySel = document.getElementById('hr-sel-company');
    if (!companySel) return;
    var corpId = '';
    if (corp) {
        var found = (typeof scompList !== 'undefined' ? scompList : []).find(function(c){ return c.name === corp; });
        if (found) corpId = found.id;
    }
    var wps = (typeof swpList !== 'undefined' ? swpList : []).filter(function(w){ return w.active !== false && (!corpId || w.companyId === corpId); });
    companySel.innerHTML = '<option value="">전체</option>' +
        wps.map(function(w){ return '<option value="' + w.name + '">' + w.name + '</option>'; }).join('');
}

function _hrBuildDeptDropdown() {
    const corp = document.getElementById('hr-sel-corp')?.value || '';
    const company = document.getElementById('hr-sel-company')?.value || '';
    const deptSel = document.getElementById('hr-sel-dept');
    if (!deptSel) return;
    const filtered = employees.filter(e => {
        const ext = hrExtData[e.id] || {};
        if (corp && ext.corp !== corp) return false;
        if (company && ext.company !== company) return false;
        return true;
    });
    const depts = [...new Set(filtered.map(e => e.department))];
    deptSel.innerHTML = '<option value="">전체</option>' + depts.map(d => `<option value="${d}">${d}</option>`).join('');
}

function _hrBuildCodeDropdowns() {
    var titleInitEl = document.getElementById('hrf-org-title');
    if (titleInitEl) titleInitEl.value = '';
}

function hrUpdateCompanyByCorp() {
    _hrBuildCompanyDropdown();
    _hrBuildDeptDropdown();
    hrSearch();
}

function hrUpdateDeptByCorp() {
    _hrBuildDeptDropdown();
    hrSearch();
}

function hrSearch() {
    const corp    = document.getElementById('hr-sel-corp')?.value || '';
    const company = document.getElementById('hr-sel-company')?.value || '';
    const dept    = document.getElementById('hr-sel-dept')?.value || '';
    const status  = document.querySelector('input[name="hr-status"]:checked')?.value || '재직';
    const query   = (document.getElementById('hr-name-q')?.value || '').trim().toLowerCase();

    const filtered = employees.filter(e => {
        const ext = hrExtData[e.id] || {};
        if (corp && ext.corp !== corp) return false;
        if (company && ext.company !== company) return false;
        if (dept && e.department !== dept) return false;
        if (status !== '전체') {
            const computed = hrComputeWorkStatus(e.id);
            if (status === '재직' && (computed === '재직' || computed === '휴직')) { /* pass */ }
            else if (computed !== status) return false;
        }
        if (query) {
            const nameMatch = e.name.toLowerCase().includes(query);
            const idMatch   = e.id.toLowerCase().includes(query);
            if (!nameMatch && !idMatch) return false;
        }
        return true;
    });

    const lbl = document.getElementById('hr-total-lbl');
    if (lbl) lbl.textContent = `총 ${filtered.length}명`;

    const listEl = document.getElementById('hr-emp-list');
    if (!listEl) return;

    if (filtered.length === 0) {
        listEl.innerHTML = '<div class="hr-emp-empty">검색 결과가 없습니다.</div>';
        return;
    }

    listEl.innerHTML = filtered.map(e => {
        const ext = hrExtData[e.id] || {};
        const liveStatus = hrComputeWorkStatus(e.id);
        const statusCls = liveStatus === '재직' ? 'hr-badge-active' : liveStatus === '휴직' ? 'hr-badge-leave' : 'hr-badge-retired';
        const selected = e.id === hrCurrentEmpId ? 'selected' : '';
        return `<div class="hr-emp-item ${selected}" onclick="selectHrEmployee('${e.id}')">
            <div class="hr-emp-item-avatar">${e.name[0]}</div>
            <div class="hr-emp-item-info">
                <div class="hr-emp-item-name">${e.name}</div>
                <div class="hr-emp-item-sub">${ext.corp ? ext.corp + ' · ' : ''}${e.department}</div>
            </div>
            <div class="hr-emp-item-right">
                <div class="hr-emp-item-code">${e.id}</div>
                <span class="hr-status-badge ${statusCls}">${liveStatus}</span>
            </div>
        </div>`;
    }).join('');
}

function selectHrEmployee(empId) {
    hrMode = 'view';
    hrCurrentEmpId = empId;
    const emp = employees.find(e => e.id === empId);
    if (!emp) return;
    const ext = hrExtData[empId] || {};
    // readonly 복원
    document.querySelectorAll('#hr-detail-wrap .hr-fi-ro').forEach(el => { el.readOnly = true; });

    // 삭제 버튼 표시
    var delBtn = document.getElementById('hr-btn-del');
    if (delBtn) delBtn.style.display = '';

    // 목록 선택 상태 업데이트
    document.querySelectorAll('.hr-emp-item').forEach(el => el.classList.remove('selected'));
    const selectedItem = document.querySelector(`.hr-emp-item[onclick="selectHrEmployee('${empId}')"]`);
    if (selectedItem) selectedItem.classList.add('selected');

    // 상세 패널 표시
    document.getElementById('hr-no-select').style.display = 'none';
    document.getElementById('hr-detail-wrap').style.display = 'flex';

    // 나이 계산
    let age = '';
    if (ext.birth) {
        const by = parseInt(ext.birth.split('-')[0]);
        age = `(${new Date().getFullYear() - by + 1}세)`;
    }

    // 헤더 설정
    document.getElementById('hr-d-avatar').textContent = emp.name[0];
    document.getElementById('hr-d-name').textContent = emp.name;
    document.getElementById('hr-d-age').textContent = age;
    document.getElementById('hr-d-sub').textContent = `${emp.id} · ${emp.department} · ${emp.position}`;

    // 인사정보 탭 채우기
    const setVal = (id, val) => setDateVal(id, val);
    setVal('hrf-id', emp.id);
    setVal('hrf-name', emp.name);
    setVal('hrf-name-en',    ext.name_en    || '');
    setVal('hrf-name-hanja', ext.name_hanja || '');
    // 주민등록번호
    var rrnFront = document.getElementById('hrf-rrn-front');
    var rrnBack  = document.getElementById('hrf-rrn-back');
    var rrnEye   = document.getElementById('hrf-rrn-eye');
    if (rrnFront) rrnFront.value = ext.rrn_front || '';
    if (rrnBack)  { rrnBack.value = ext.rrn_back || ''; rrnBack.type = 'password'; }
    if (rrnEye)   rrnEye.classList.remove('active');
    var rrnAuto = document.getElementById('hrf-rrn-auto');
    if (rrnAuto) rrnAuto.textContent = '';

    setVal('hrf-mobile', ext.mobile || '');
    setVal('hrf-phone', emp.phone || '');
    setVal('hrf-zipcode', ext.zipcode || '');
    setVal('hrf-address', ext.address || '');
    setVal('hrf-address-detail', ext.address_detail || '');
    // 메일 분리 로드
    hrSetEmail(emp.email || '');
    // 은행 드롭다운
    hrInitBankSel(ext.bank_code || ext.bank || '');
    setVal('hrf-bank-account', ext.bankAccount || '');
    // 예금주 기본값: 성명
    var holderEl = document.getElementById('hrf-bank-holder');
    if (holderEl) holderEl.value = ext.bankHolder || emp.name || '';

    // 조직 정보 드롭다운
    const deptEl = document.getElementById('hrf-org-dept');
    if (deptEl) deptEl.value = emp.department || '';
    const titleEl = document.getElementById('hrf-org-title');
    if (titleEl) titleEl.value = emp.position || '';

    // 라디오 선택
    const setRadio = (name, val) => {
        document.querySelectorAll(`input[name="${name}"]`).forEach(r => { r.checked = r.value === val; });
    };
    setRadio('hrf-foreign', '내국인');
    setRadio('hrf-gender', ext.gender || '');

    // 재직정보 탭 채우기 — 재직구분은 항상 자동 계산
    setRadio('hrf-work-status', hrComputeWorkStatus(empId));
    setVal('hrf-hire-date', emp.hire_date);
    setVal('hrf-first-hire', ext.first_hire || emp.hire_date || '');
    setVal('hrf-group-hire', ext.group_hire || emp.hire_date || '');
    setVal('hrf-contract-start', ext.contract_start || '');
    setVal('hrf-contract-end', ext.contract_end || '');
    setVal('hrf-retire-date', ext.retire_date || '');
    setVal('hrf-retire-settlement', ext.retire_settlement || '');
    setVal('hrf-probation-start', ext.probation_start || '');
    setVal('hrf-probation-end', ext.probation_end || '');
    var _htLoadEl = document.getElementById('hrf-hire-type');
    if (_htLoadEl) _htLoadEl.value = ext.hire_type || '정규직';
    var _wtLoadEl = document.getElementById('hrf-work-type');
    if (_wtLoadEl) _wtLoadEl.value = ext.work_type || '상근직';
    var _ctLoadEl = document.getElementById('hrf-contract-type');
    if (_ctLoadEl) _ctLoadEl.value = ext.contract_type || '연봉제';
    var _stLoadEl = document.getElementById('hrf-schedule-type');
    if (_stLoadEl) _stLoadEl.value = ext.schedule_type || '';
    var _rrEl = document.getElementById('hrf-retire-reason');
    if (_rrEl) _rrEl.value = ext.retire_reason || '';
    var _rrdEl = document.getElementById('hrf-retire-reason-detail');
    if (_rrdEl) _rrdEl.value = ext.retire_reason_detail || '';
    // 신상정보 로드
    setVal('hrf-marital-status',     ext.marital_status || '');
    setVal('hrf-blood-type',         ext.blood_type || '');
    setVal('hrf-dependents',         ext.dependents || '');
    setVal('hrf-nationality',        ext.nationality || '');
    setVal('hrf-visa-type',          ext.visa_type || '');
    setVal('hrf-emergency-name',     ext.emergency_name || '');
    setVal('hrf-emergency-relation', ext.emergency_relation || '');
    setVal('hrf-emergency-phone',    ext.emergency_phone || '');
    setVal('hrf-military-type',      ext.military_type || '');
    setVal('hrf-military-branch',    ext.military_branch || '');
    setVal('hrf-military-rank',      ext.military_rank || '');
    setVal('hrf-military-start',     ext.military_start || '');
    setVal('hrf-military-end',       ext.military_end || '');
    setRadio('hrf-disability',       ext.disability || '');
    setVal('hrf-disability-type',    ext.disability_type || '');
    setVal('hrf-disability-grade',   ext.disability_grade || '');
    setVal('hrf-disability-regnum',  ext.disability_regnum || '');
    setVal('hrf-disability-regdate', ext.disability_regdate || '');
    var svcLoadEl = document.getElementById('hrf-org-service');
    if (svcLoadEl) svcLoadEl.value = ext.org_service || '';
    var jobLoadEl = document.getElementById('hrf-org-job');
    if (jobLoadEl) jobLoadEl.value = ext.org_job || '';
    // 법인/사업장
    hrInitCorpSel(ext.corp || '');
    var corps = [];
    try { corps = JSON.parse(localStorage.getItem('scompData_v1') || '[]'); } catch(e) {}
    var foundCorp = corps.find(function(c){ return c.name === (ext.corp || ''); });
    hrInitCompanySel(foundCorp ? foundCorp.id : '', ext.company || '');
    // 근속연수 계산
    if (emp.hire_date) {
        const hd = new Date(emp.hire_date);
        const now = new Date();
        const yrs = now.getFullYear() - hd.getFullYear();
        const mos = now.getMonth() - hd.getMonth();
        setVal('hrf-tenure', `${yrs}년 ${mos >= 0 ? mos : mos + 12}개월`);
    }

    // 발령정보 탭 - 발령전/발령후 구조
    const appts = hrApptHistory[empId] || [];
    const tbody = document.getElementById('hr-appt-tbody');
    if (tbody) {
        if (appts.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:#bbb;padding:28px;">발령 이력이 없습니다.</td></tr>`;
        } else {
            tbody.innerHTML = appts.map((a, i) => {
                const prev = i > 0 ? appts[i - 1] : null;
                const beforeDept = prev ? prev.dept : '-';
                const beforePos  = prev ? prev.pos  : '-';
                const beforeTitle = prev ? (prev.title || '-') : '-';
                return `<tr>
                    <td>${a.date}</td>
                    <td>${beforeDept}</td><td>${beforePos}</td><td>${beforeTitle}</td>
                    <td>${a.dept}</td><td>${a.pos}</td><td>${a.title || '-'}</td>
                    <td>${a.note || '-'}</td>
                </tr>`;
            }).join('');
        }
    }

    // 인사기록카드 탭
    hrCardRenderAll();

    // 현재 열려있는 탭 유지, 없으면 인사정보로
    var _activeBtn = document.querySelector('#hr-dtab-bar .hr-dtab.active');
    if (_activeBtn) {
        var _onclickStr = _activeBtn.getAttribute('onclick') || '';
        var _tabMatch = _onclickStr.match(/'(hrtab-[^']+)'/);
        var _keepTabId = _tabMatch ? _tabMatch[1] : null;
        if (_keepTabId) {
            document.querySelectorAll('.hr-dtab').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.hr-tab-body').forEach(t => t.classList.remove('active'));
            _activeBtn.classList.add('active');
            var _keepTabEl = document.getElementById(_keepTabId);
            if (_keepTabEl) _keepTabEl.classList.add('active');
        } else {
            hrResetToFirstTab();
        }
    } else {
        hrResetToFirstTab();
    }

    // 기관유형 뱃지 초기화 후 사업장 자동 설정
    var _facBadge = document.getElementById('hrf-facility-badge');
    if (_facBadge) { _facBadge.style.display = 'none'; _facBadge.textContent = ''; }
    setTimeout(hrOrgDeptChange, 0);
}

// ===== 공지사항 =====
const noticeData = [
    { id:10, cat:'전체공지', title:'2025년 하반기 경영방침 및 전략 방향 안내', author:'경영지원팀', date:'2025-07-01', views:312, pinned:true,
      body:`<p>임직원 여러분께,</p><p>2025년 하반기 경영방침을 아래와 같이 안내 드립니다.</p><p><strong>핵심 추진 방향</strong></p><ul><li>요양·돌봄 서비스 품질 향상</li><li>디지털 전환(DX) 가속화</li><li>임직원 역량 강화 및 복지 증진</li></ul><p>각 부서에서는 하반기 사업계획을 위 방향에 맞춰 조정해 주시기 바랍니다.</p><p>감사합니다.</p>` },
    { id:9,  cat:'인사공지', title:'2025년 하반기 정기 인사발령 안내', author:'인사팀', date:'2025-06-30', views:445, pinned:true,
      body:`<p>2025년 하반기 정기 인사발령 내용을 안내 드립니다.</p><p>발령 적용일: <strong>2025년 7월 1일</strong></p><p>발령 대상자에게는 개별 통보가 완료되었으며, 세부 내용은 인사팀으로 문의해 주시기 바랍니다.</p>` },
    { id:8,  cat:'시스템공지', title:'케어링 통합 ERP 시스템 오픈 안내', author:'IT팀', date:'2025-06-25', views:891,
      body:`<p>케어링 그룹 통합 ERP 시스템이 정식 오픈되었습니다.</p><p><strong>오픈일:</strong> 2025년 7월 1일</p><p><strong>주요 기능:</strong> 인사관리, 급여, 근태, 결재, 게시판</p><p>시스템 사용 중 문의사항은 IT팀(내선: 1234)으로 연락 주세요.</p>` },
    { id:7,  cat:'업무공지', title:'하반기 급여 지급일 변경 안내 (7월~12월)', author:'급여팀', date:'2025-06-20', views:523,
      body:`<p>2025년 하반기 급여 지급일이 아래와 같이 변경됩니다.</p><p>기존: 매월 25일 → 변경: 매월 <strong>23일</strong></p><p>공휴일 및 주말 시 전영업일에 지급됩니다. 급여 관련 문의는 급여팀으로 연락 주세요.</p>` },
    { id:6,  cat:'인사공지', title:'2025년 하계 휴가 사용 기준 안내', author:'인사팀', date:'2025-06-15', views:677,
      body:`<p>2025년 하계 휴가 사용 기준을 안내 드립니다.</p><p><strong>사용 가능 기간:</strong> 2025년 7월 15일 ~ 8월 31일</p><p><strong>사용 일수:</strong> 연차 소진 또는 별도 부여 휴가 사용</p><p>휴가 사용 전 반드시 팀장 승인 후 전자결재 상신 바랍니다.</p>` },
    { id:5,  cat:'시스템공지', title:'ERP 시스템 정기 점검 안내 (7/5 토요일)', author:'IT팀', date:'2025-06-10', views:298,
      body:`<p>ERP 시스템 정기 점검이 예정되어 있습니다.</p><p><strong>일시:</strong> 2025년 7월 5일(토) 00:00 ~ 06:00</p><p>점검 시간 동안 시스템 접속이 불가합니다. 양해 부탁드립니다.</p>` },
    { id:4,  cat:'업무공지', title:'전자결재 시스템 사용 매뉴얼 배포', author:'IT팀', date:'2025-06-05', views:412,
      body:`<p>전자결재 시스템 사용 매뉴얼을 배포합니다.</p><p>매뉴얼은 첨부파일을 통해 확인하시거나, IT팀에 문의하여 수령하실 수 있습니다.</p><p>주요 내용: 기안 작성, 결재선 지정, 반려 처리, 위임 결재 등</p>` },
    { id:3,  cat:'전체공지', title:'사무실 이전 안내 (강남구 역삼동)', author:'총무팀', date:'2025-05-28', views:534,
      body:`<p>케어링 본사 사무실이 이전합니다.</p><p><strong>이전일:</strong> 2025년 6월 30일(월)</p><p><strong>새 주소:</strong> 서울시 강남구 역삼동 OO빌딩 5~7층</p><p>이전 관련 문의는 총무팀으로 연락 주세요.</p>` },
    { id:2,  cat:'시스템공지', title:'개인정보 보호 교육 필수 이수 안내 (6월 말까지)', author:'법무팀', date:'2025-05-20', views:389,
      body:`<p>2025년 상반기 개인정보 보호 교육을 6월 30일까지 필수 이수해 주시기 바랍니다.</p><p>미이수 시 인사 불이익이 발생할 수 있으니 기한 내 완료 바랍니다.</p><p>교육 링크는 개인 이메일로 발송되었습니다.</p>` },
    { id:1,  cat:'인사공지', title:'신규 입사자 온보딩 교육 일정 안내 (7월)', author:'인사팀', date:'2025-05-15', views:267,
      body:`<p>7월 신규 입사자 온보딩 교육 일정을 안내합니다.</p><p><strong>일시:</strong> 2025년 7월 2일(수) ~ 3일(목) 09:00~18:00</p><p><strong>장소:</strong> 본사 3층 교육장</p><p>대상자는 반드시 참석 바라며, 불참 시 인사팀에 사전 연락 주세요.</p>` },
];

let noticeCurrentId = null;
const NOTICE_PAGE_SIZE = 8;
let noticePage = 1;
var noticeWriteMode = 'new';
var noticeWriteId = null;
var noticeDataInited = false;
var NOTICE_ADMIN_IDS = ['db.yu@caring.co.kr'];

function noticeCurrentUser() {
    try { return JSON.parse(localStorage.getItem('userData')) || { id: '', name: '익명' }; } catch(e) { return { id: '', name: '익명' }; }
}
function noticeIsAdmin() {
    return NOTICE_ADMIN_IDS.indexOf(noticeCurrentUser().id) >= 0;
}
function noticeGetCats() {
    try { var s = localStorage.getItem('noticeCats'); if (s) return JSON.parse(s); } catch(e) {}
    return ['전체공지', '인사공지', '업무공지', '시스템공지'];
}
function noticeSaveCats(cats) { localStorage.setItem('noticeCats', JSON.stringify(cats)); }
function noticeGenId() { return Date.now(); }
function noticeEnsureData() {
    if (noticeDataInited) return;
    noticeDataInited = true;
    try {
        var s = localStorage.getItem('noticeData_v2');
        if (s) {
            var saved = JSON.parse(s);
            noticeData.length = 0;
            saved.forEach(function(n) { noticeData.push(n); });
            return;
        }
    } catch(e) {}
    noticeData.forEach(function(n) { if (!n.authorId) n.authorId = ''; if (!n.blocks) n.blocks = []; });
}
function noticeSaveData() { localStorage.setItem('noticeData_v2', JSON.stringify(noticeData)); }
function noticeBuildCatFilter() {
    var cats = noticeGetCats();
    var sel = document.getElementById('bd-cat-filter');
    if (!sel) return;
    var cur = sel.value;
    sel.innerHTML = '<option value="">전체</option>' + cats.map(function(c) { return '<option value="'+c+'"'+(cur===c?' selected':'')+'>'+c+'</option>'; }).join('');
}

function initBoardNotice() {
    noticeEnsureData();
    noticePage = 1;
    noticeBuildCatFilter();
    document.getElementById('bd-cat-filter').value = '';
    document.getElementById('bd-search-q').value = '';
    var adminBtn = document.getElementById('bd-notice-admin-btn');
    if (adminBtn) adminBtn.style.display = noticeIsAdmin() ? 'inline-block' : 'none';
    noticeGoList();
}

function noticeGoList() {
    document.getElementById('bd-list-view').style.display = 'block';
    document.getElementById('bd-detail-view').style.display = 'none';
    document.getElementById('bd-write-view').style.display = 'none';
    nActiveEditorCtx = { type: 'note' };
    noticeRenderList();
}

function noticeRenderList() {
    const cat   = document.getElementById('bd-cat-filter')?.value || '';
    const query = (document.getElementById('bd-search-q')?.value || '').trim().toLowerCase();

    const filtered = noticeData.filter(n => {
        if (cat && n.cat !== cat) return false;
        if (query && !n.title.toLowerCase().includes(query)) return false;
        return true;
    });

    // 고정글 상단 (기간 만료 체크)
    const today_str = new Date().toISOString().split('T')[0];
    function noticeIsPinActive(n) {
        if (!n.pinned) return false;
        if (n.pinEnd && n.pinEnd < today_str) return false;
        if (n.pinStart && n.pinStart > today_str) return false;
        return true;
    }
    const pinned   = filtered.filter(n => noticeIsPinActive(n));
    const normal   = filtered.filter(n => !noticeIsPinActive(n));
    const sorted   = [...pinned, ...normal];

    const total    = sorted.length;
    const pages    = Math.max(1, Math.ceil(total / NOTICE_PAGE_SIZE));
    if (noticePage > pages) noticePage = pages;

    const start = (noticePage - 1) * NOTICE_PAGE_SIZE;
    const paged = sorted.slice(start, start + NOTICE_PAGE_SIZE);

    const tbody = document.getElementById('bd-notice-tbody');
    if (!tbody) return;

    if (paged.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="bd-empty">등록된 공지사항이 없습니다.</td></tr>`;
    } else {
        let rowNum = total - start;
        tbody.innerHTML = paged.map(n => {
            const isActive = noticeIsPinActive(n);
            return `
            <tr class="bd-row${isActive ? ' bd-pinned' : ''}" onclick="noticeViewDetail(${n.id})">
                <td class="bd-col-no">${isActive ? '<span class="bd-pin-badge">공지</span>' : rowNum--}</td>
                <td class="bd-col-cat"><span class="bd-cat-badge bd-cat-${n.cat.replace(/공지/,'')}">${n.cat}</span></td>
                <td class="bd-col-title"><span class="bd-title-link">${n.title}</span></td>
                <td class="bd-col-author">${n.author}</td>
                <td class="bd-col-date">${n.date}</td>
                <td class="bd-col-view">${n.views.toLocaleString()}</td>
            </tr>`;
        }).join('');
    }

    // 페이지네이션
    const pg = document.getElementById('bd-pagination');
    if (!pg) return;
    let html = '';
    if (pages > 1) {
        html += `<button class="bd-pg-btn" onclick="noticeChangePage(${noticePage-1})" ${noticePage===1?'disabled':''}>&#8249;</button>`;
        for (let i = 1; i <= pages; i++) {
            html += `<button class="bd-pg-btn${i===noticePage?' active':''}" onclick="noticeChangePage(${i})">${i}</button>`;
        }
        html += `<button class="bd-pg-btn" onclick="noticeChangePage(${noticePage+1})" ${noticePage===pages?'disabled':''}>&#8250;</button>`;
    }
    pg.innerHTML = html;
}

function noticeChangePage(p) {
    const cat   = document.getElementById('bd-cat-filter')?.value || '';
    const query = (document.getElementById('bd-search-q')?.value || '').trim().toLowerCase();
    const total = noticeData.filter(n => (!cat || n.cat === cat) && (!query || n.title.toLowerCase().includes(query))).length;
    const pages = Math.max(1, Math.ceil(total / NOTICE_PAGE_SIZE));
    noticePage = Math.max(1, Math.min(p, pages));
    noticeRenderList();
}

function noticeViewDetail(id) {
    var n = noticeData.find(function(x) { return x.id === id; });
    if (!n) return;
    n.views++;
    noticeSaveData();
    noticeCurrentId = id;

    document.getElementById('bd-list-view').style.display = 'none';
    document.getElementById('bd-detail-view').style.display = 'block';
    document.getElementById('bd-write-view').style.display = 'none';

    document.getElementById('bd-d-cat').textContent    = n.cat;
    document.getElementById('bd-d-title').textContent  = n.title;
    document.getElementById('bd-d-author').textContent = n.author;
    document.getElementById('bd-d-date').textContent   = n.date;
    document.getElementById('bd-d-view').textContent   = n.views.toLocaleString();

    var bodyEl = document.getElementById('bd-d-body');
    if (n.blocks && n.blocks.length) {
        bodyEl.innerHTML = boardBlocksToHtml(n.blocks);
    } else {
        bodyEl.innerHTML = n.body || '';
    }

    // 수정/삭제 버튼 (본인 or 관리자)
    var actEl = document.getElementById('bd-d-actions');
    if (actEl) {
        var u = noticeCurrentUser();
        var canEdit = noticeIsAdmin() || (u.id && u.id === n.authorId);
        actEl.innerHTML = canEdit
            ? '<button class="eval-view-btn" onclick="noticeOpenEdit('+id+')">수정</button>' +
              '<button class="eval-view-btn" style="color:#e05070;margin-left:6px;" onclick="noticeDeletePost('+id+')">삭제</button>'
            : '';
    }

    var idx  = noticeData.findIndex(function(x) { return x.id === id; });
    var prev = noticeData[idx - 1];
    var next = noticeData[idx + 1];
    document.getElementById('bd-detail-nav').innerHTML =
        '<div class="bd-nav-row"><span class="bd-nav-label">이전글</span>' +
        (prev ? '<span class="bd-nav-link" onclick="noticeViewDetail('+prev.id+')">' + prev.title + '</span>' : '<span class="bd-nav-none">이전 글이 없습니다.</span>') +
        '</div><div class="bd-nav-row"><span class="bd-nav-label">다음글</span>' +
        (next ? '<span class="bd-nav-link" onclick="noticeViewDetail('+next.id+')">' + next.title + '</span>' : '<span class="bd-nav-none">다음 글이 없습니다.</span>') +
        '</div>';
}

function noticeOpenWrite() {
    noticeEnsureData();
    noticeWriteMode = 'new';
    noticeWriteId = null;
    noticeShowWriteView({ title: '', cat: '', blocks: [], pinned: false });
}
function noticeOpenEdit(id) {
    var n = noticeData.find(function(x) { return x.id === id; });
    if (!n) return;
    var u = noticeCurrentUser();
    if (!noticeIsAdmin() && u.id !== n.authorId) { showToast('수정 권한이 없습니다.', 'error'); return; }
    noticeWriteMode = 'edit';
    noticeWriteId = id;
    noticeShowWriteView(n);
}
function noticePinToggle() {
    var checked = document.getElementById('bd-w-pin').checked;
    var datesEl = document.getElementById('bd-w-pin-dates');
    if (datesEl) datesEl.style.display = checked ? 'flex' : 'none';
    if (checked && !document.getElementById('bd-w-pin-start').value) {
        setDateVal('bd-w-pin-start', new Date().toISOString().split('T')[0]);
    }
}
function noticeShowWriteView(data) {
    document.getElementById('bd-list-view').style.display = 'none';
    document.getElementById('bd-detail-view').style.display = 'none';
    document.getElementById('bd-write-view').style.display = 'block';
    document.getElementById('bd-write-title-hd').textContent = noticeWriteMode === 'edit' ? '글 수정' : '글쓰기';
    var cats = noticeGetCats();
    var catSel = document.getElementById('bd-w-cat');
    catSel.innerHTML = '<option value="">분류 선택</option>' + cats.map(function(c) {
        return '<option value="'+c+'"'+(data.cat===c?' selected':'')+'>'+c+'</option>';
    }).join('');
    document.getElementById('bd-w-title').value = data.title || '';
    var pinRow = document.getElementById('bd-w-pin-row');
    if (noticeIsAdmin()) {
        pinRow.style.display = 'flex';
        var isPinned = !!data.pinned;
        document.getElementById('bd-w-pin').checked = isPinned;
        setDateVal('bd-w-pin-start', data.pinStart || '');
        setDateVal('bd-w-pin-end', data.pinEnd || '');
        var datesEl = document.getElementById('bd-w-pin-dates');
        if (datesEl) datesEl.style.display = isPinned ? 'flex' : 'none';
    } else {
        pinRow.style.display = 'none';
    }
    nBlockEditorGlobalInit();
    var zone = document.getElementById('bd-write-editor-zone');
    var blocks = (data.blocks && data.blocks.length) ? data.blocks
        : (data.body ? [{ id: nBlkGenId(), type:'p', html: data.body, checked:false, collapsed:false, indent:0, childHtml:'' }]
        : [nBlkNew('p')]);
    nZoneRender(zone, blocks);
    nSetupFileDropZone('bd-write-editor-zone');
    nActiveEditorCtx = { type: 'board' };
    setTimeout(function() { document.getElementById('bd-w-title').focus(); }, 50);
}
function noticeCancelWrite() {
    nActiveEditorCtx = { type: 'note' };
    if (noticeWriteMode === 'edit' && noticeWriteId) {
        noticeViewDetail(noticeWriteId);
    } else {
        noticeGoList();
    }
}
function noticeSaveWrite() {
    var title = (document.getElementById('bd-w-title').value || '').trim();
    var cat   = document.getElementById('bd-w-cat').value;
    if (!title) { showToast('제목을 입력하세요.', 'error'); return; }
    if (!cat)   { showToast('분류를 선택하세요.', 'error'); return; }
    var zone   = document.getElementById('bd-write-editor-zone');
    var blocks = zone ? nGetBlocks(zone) : [];
    var pinned = noticeIsAdmin() ? document.getElementById('bd-w-pin').checked : false;
    var pinStart = (pinned && noticeIsAdmin()) ? (document.getElementById('bd-w-pin-start').value || '') : '';
    var pinEnd   = (pinned && noticeIsAdmin()) ? (document.getElementById('bd-w-pin-end').value || '') : '';
    var today  = new Date().toISOString().split('T')[0];
    var u      = noticeCurrentUser();
    nActiveEditorCtx = { type: 'note' };
    if (noticeWriteMode === 'edit') {
        var n = noticeData.find(function(x) { return x.id === noticeWriteId; });
        if (n) { n.title = title; n.cat = cat; n.blocks = blocks; n.body = ''; n.pinned = pinned; n.pinStart = pinStart; n.pinEnd = pinEnd; }
        noticeSaveData();
        showToast('수정되었습니다.', 'success');
        noticeViewDetail(noticeWriteId);
    } else {
        var newPost = { id: noticeGenId(), cat: cat, title: title, author: u.name || u.id,
            authorId: u.id, date: today, views: 0, pinned: pinned, pinStart: pinStart, pinEnd: pinEnd, blocks: blocks, body: '' };
        noticeData.unshift(newPost);
        noticeSaveData();
        showToast('게시글이 등록되었습니다.', 'success');
        noticeGoList();
    }
}
async function noticeDeletePost(id) {
    if (!await showConfirm('이 게시글을 삭제하시겠습니까?')) return;
    var u = noticeCurrentUser();
    var n = noticeData.find(function(x) { return x.id === id; });
    if (!n) return;
    if (!noticeIsAdmin() && u.id !== n.authorId) { showToast('삭제 권한이 없습니다.', 'error'); return; }
    var idx = noticeData.findIndex(function(x) { return x.id === id; });
    if (idx >= 0) noticeData.splice(idx, 1);
    noticeSaveData();
    showToast('삭제되었습니다.', 'success');
    noticeGoList();
}
function noticeOpenAdminPanel() {
    if (!noticeIsAdmin()) return;
    var overlay = document.createElement('div');
    overlay.className = 'goal-modal-overlay';
    overlay.id = 'notice-admin-overlay';
    overlay.innerHTML = '<div class="goal-modal" style="width:380px;">' +
        '<div class="goal-modal-title">분류 관리 <span style="font-size:11px;color:#bbb;font-weight:400;">(관리자)</span></div>' +
        '<div id="notice-admin-cats" style="margin-bottom:12px;max-height:240px;overflow-y:auto;"></div>' +
        '<div style="display:flex;gap:8px;">' +
        '<input class="eval-editor-input" id="notice-admin-new-cat" placeholder="새 분류 이름" style="flex:1;" onkeydown="if(event.key===\'Enter\')noticeAdminAddCat()">' +
        '<button class="eval-editor-save" onclick="noticeAdminAddCat()">추가</button>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;margin-top:16px;">' +
        '<button class="eval-editor-cancel" onclick="noticeCloseAdminPanel()">닫기</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
    noticeAdminRenderCats();
}
function noticeCloseAdminPanel() {
    var el = document.getElementById('notice-admin-overlay');
    if (el) el.remove();
    noticeBuildCatFilter();
    noticeRenderList();
}
function noticeAdminRenderCats() {
    var el = document.getElementById('notice-admin-cats');
    if (!el) return;
    var cats = noticeGetCats();
    el.innerHTML = cats.length === 0
        ? '<div style="color:#bbb;font-size:13px;padding:8px 0;">분류가 없습니다.</div>'
        : cats.map(function(c) {
            return '<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f5f5f5;">' +
                '<span style="font-size:13px;color:#333;">' + c + '</span>' +
                '<button class="eval-view-btn" style="color:#e05070;" onclick="noticeAdminDelCat(\'' + c.replace(/'/g,"\\'") + '\')">삭제</button>' +
                '</div>';
        }).join('');
}
function noticeAdminAddCat() {
    var v = (document.getElementById('notice-admin-new-cat').value || '').trim();
    if (!v) return;
    var cats = noticeGetCats();
    if (cats.indexOf(v) >= 0) { showToast('이미 존재하는 분류입니다.', 'error'); return; }
    cats.push(v);
    noticeSaveCats(cats);
    document.getElementById('notice-admin-new-cat').value = '';
    noticeAdminRenderCats();
    showToast('"' + v + '" 분류가 추가되었습니다.', 'success');
}
async function noticeAdminDelCat(cat) {
    if (!await showConfirm('"' + cat + '" 분류를 삭제하시겠습니까?')) return;
    var cats = noticeGetCats();
    noticeSaveCats(cats.filter(function(c) { return c !== cat; }));
    noticeAdminRenderCats();
}

// ===== 자유게시판 =====
const FREE_SEED = [
    { id:1, cat:'일상', title:'오늘 점심 구내식당 메뉴가 너무 맛있었어요!', author:'김철수', authorId:'', date:'2025-07-01', views:84, blocks:[], body:`<p>오늘 구내식당에서 제육볶음이 나왔는데 진짜 맛있더라고요.</p><p>요즘 식당 메뉴 퀄리티가 많이 올라간 것 같아서 기분이 좋네요. 다들 점심 드셨나요?</p>`, comments:[] },
    { id:2, cat:'취미', title:'주말에 보드게임 카페 다녀왔어요 - 후기 공유!', author:'이영희', authorId:'', date:'2025-06-30', views:63, blocks:[], body:`<p>이번 주말에 친구들이랑 보드게임 카페 다녀왔어요.</p><p>뱅이랑 아줄을 처음 해봤는데 생각보다 재미있었어요. 다음에 같이 갈 분 있으면 연락주세요!</p>`, comments:[] },
    { id:3, cat:'운동/건강', title:'퇴근 후 러닝 모임 참여자 모집합니다', author:'박민수', authorId:'', date:'2025-06-28', views:102, blocks:[], body:`<p>안녕하세요! 퇴근 후 한강 러닝 모임을 시작하려고 합니다.</p><p>매주 화, 목요일 오후 7시 여의도 한강공원 집합 예정입니다. 관심 있으신 분은 댓글로 알려주세요.</p>`, comments:[] },
    { id:4, cat:'음식', title:'강남역 근처 맛집 추천해드려요', author:'정수진', authorId:'', date:'2025-06-27', views:157, blocks:[], body:`<p>요즘 자주 가는 국수 맛집 공유합니다. 강남역 10번 출구에서 도보 3분 거리에 있어요.</p><p>점심시간에 줄이 길어서 12시 전에 가시는 걸 추천해요. 이름은 '명동 칼국수'입니다!</p>`, comments:[] },
    { id:5, cat:'여행', title:'제주도 3박 4일 여행 후기 - 사진 많음', author:'최동욱', authorId:'', date:'2025-06-25', views:198, blocks:[], body:`<p>연차 써서 제주도 다녀왔어요. 성산일출봉, 협재해수욕장, 사려니숲길 코스로 다녀왔는데 정말 힐링됐습니다.</p><p>렌트카는 미리 예약하는 게 좋고, 숙소는 애월 쪽을 추천합니다!</p>`, comments:[] },
    { id:6, cat:'기타', title:'사무실 에어컨 온도 관련 건의', author:'강지원', authorId:'', date:'2025-06-24', views:76, blocks:[], body:`<p>요즘 날씨가 너무 더운데 사무실 에어컨 온도를 좀 낮춰주실 수 있을까요?</p><p>개인 선풍기를 가져와도 될지도 궁금합니다. 총무팀에서 확인해주시면 감사하겠습니다!</p>`, comments:[] },
    { id:7, cat:'일상', title:'어제 야근하다가 발견한 야경이 예쁘더라고요', author:'윤서준', authorId:'', date:'2025-06-23', views:55, blocks:[], body:`<p>어제 늦게까지 일하다가 창밖을 봤는데 서울 야경이 정말 예쁘더라고요.</p><p>힘들었지만 그 순간만큼은 뿌듯했습니다. 야근 파이팅!</p>`, comments:[] },
    { id:8, cat:'취미', title:'독서 모임 멤버 구합니다 (월 1회)', author:'임채린', authorId:'', date:'2025-06-22', views:89, blocks:[], body:`<p>직장인 독서 모임을 만들려고 합니다. 월 1회, 책 한 권씩 읽고 이야기 나누는 모임이에요.</p><p>장르는 소설, 에세이 등 가볍게 읽을 수 있는 책 위주로 선정할 예정입니다. 관심 있으시면 알려주세요!</p>`, comments:[] },
    { id:9, cat:'운동/건강', title:'헬스장 등록했어요 - 함께 다닐 분?', author:'오현진', authorId:'', date:'2025-06-20', views:44, blocks:[], body:`<p>드디어 집 근처 헬스장 등록했어요! 혼자 다니면 의지가 약해서요.</p><p>회사 근처 분들 함께 다닐 분 계시면 같이 가요. 저는 주로 저녁 6~7시 사이에 갑니다.</p>`, comments:[] },
    { id:10, cat:'음식', title:'집에서 만든 마라탕 레시피 공유해요', author:'신도현', authorId:'', date:'2025-06-18', views:132, blocks:[], body:`<p>마라탕 배달 시키면 너무 비싸서 집에서 직접 만들어 봤어요!</p><p>마라 소스는 편의점/마트에서 구할 수 있고, 재료는 두부, 버섯, 어묵, 숙주 등 좋아하는 거 넣으면 돼요. 생각보다 만들기 쉬우니 도전해보세요!</p>`, comments:[] },
];
let freeData = [];
let freeCurrentId = null;
let freeWriteMode = 'new';
let freeWriteId = null;
const FREE_PAGE_SIZE = 8;
let freePage = 1;

function freeEnsureData() {
    var saved = localStorage.getItem('freeData_v1');
    if (saved) {
        try { freeData = JSON.parse(saved); } catch(e) { freeData = FREE_SEED.map(function(n) { return Object.assign({}, n); }); }
    } else {
        freeData = FREE_SEED.map(function(n) { return Object.assign({comments:[]}, n); });
        freeSaveData();
    }
}
function freeSaveData() { localStorage.setItem('freeData_v1', JSON.stringify(freeData)); }
function freeGenId() { return freeData.length ? Math.max.apply(null, freeData.map(function(n){ return n.id; })) + 1 : 1; }
function freeCurrentUser() { return JSON.parse(localStorage.getItem('userData') || '{}'); }

function initBoardFree() {
    freeEnsureData();
    freePage = 1;
    freeRebuildCatFilter();
    document.getElementById('free-cat-filter').value = '';
    document.getElementById('free-search-q').value = '';
    freeGoList();
}

function freeGoList() {
    document.getElementById('free-list-view').style.display = 'block';
    document.getElementById('free-detail-view').style.display = 'none';
    document.getElementById('free-write-view').style.display = 'none';
    freeRenderList();
}

function freeRenderList() {
    const cat   = document.getElementById('free-cat-filter')?.value || '';
    const query = (document.getElementById('free-search-q')?.value || '').trim().toLowerCase();

    const filtered = freeData.filter(n => {
        if (cat && n.cat !== cat) return false;
        if (query && !n.title.toLowerCase().includes(query)) return false;
        return true;
    });

    const sorted = [...filtered].sort((a, b) => b.id - a.id);
    const total  = sorted.length;
    const pages  = Math.max(1, Math.ceil(total / FREE_PAGE_SIZE));
    if (freePage > pages) freePage = pages;

    const start = (freePage - 1) * FREE_PAGE_SIZE;
    const paged = sorted.slice(start, start + FREE_PAGE_SIZE);

    const tbody = document.getElementById('free-notice-tbody');
    if (!tbody) return;

    let rowNum = total - start;
    tbody.innerHTML = paged.map(n => {
        const cmtCnt = (n.comments && n.comments.length) ? ` <span style="color:#F36178;font-size:11px;">[${n.comments.length}]</span>` : '';
        return `<tr class="bd-row" onclick="freeViewDetail(${n.id})">
            <td class="bd-col-no">${rowNum--}</td>
            <td class="bd-col-cat"><span class="bd-cat-badge">${n.cat}</span></td>
            <td class="bd-col-title"><span class="bd-title-text">${n.title}</span>${cmtCnt}</td>
            <td class="bd-col-author">${n.author}</td>
            <td class="bd-col-date">${n.date}</td>
            <td class="bd-col-view">${n.views}</td>
        </tr>`;
    }).join('');

    const pg = document.getElementById('free-pagination');
    if (!pg) return;
    let html = '';
    if (pages > 1) {
        html += `<button class="bd-pg-btn" onclick="freeChangePage(${freePage-1})" ${freePage===1?'disabled':''}>&#8249;</button>`;
        for (let i = 1; i <= pages; i++) {
            html += `<button class="bd-pg-btn${i===freePage?' active':''}" onclick="freeChangePage(${i})">${i}</button>`;
        }
        html += `<button class="bd-pg-btn" onclick="freeChangePage(${freePage+1})" ${freePage===pages?'disabled':''}>&#8250;</button>`;
    }
    pg.innerHTML = html;
}

function freeChangePage(p) {
    const cat   = document.getElementById('free-cat-filter')?.value || '';
    const query = (document.getElementById('free-search-q')?.value || '').trim().toLowerCase();
    const total = freeData.filter(n => (!cat || n.cat === cat) && (!query || n.title.toLowerCase().includes(query))).length;
    const pages = Math.max(1, Math.ceil(total / FREE_PAGE_SIZE));
    freePage = Math.max(1, Math.min(p, pages));
    freeRenderList();
}

function freeViewDetail(id) {
    freeEnsureData();
    const n = freeData.find(x => x.id === id);
    if (!n) return;
    n.views++;
    freeSaveData();
    freeCurrentId = id;

    document.getElementById('free-d-cat').textContent    = n.cat;
    document.getElementById('free-d-title').textContent  = n.title;
    document.getElementById('free-d-author').textContent = n.author;
    document.getElementById('free-d-date').textContent   = n.date;
    document.getElementById('free-d-view').textContent   = n.views;

    var bodyEl = document.getElementById('free-d-body');
    if (n.blocks && n.blocks.length) {
        bodyEl.innerHTML = boardBlocksToHtml(n.blocks);
    } else {
        bodyEl.innerHTML = n.body || '';
    }

    // 수정/삭제 버튼
    var actEl = document.getElementById('free-d-actions');
    if (actEl) {
        var u = freeCurrentUser();
        var canEdit = (u.id && u.id === n.authorId);
        actEl.innerHTML = canEdit
            ? '<button class="eval-view-btn" onclick="freeOpenEdit('+id+')">수정</button>' +
              '<button class="eval-view-btn" style="color:#e05070;margin-left:6px;" onclick="freeDeletePost('+id+')">삭제</button>'
            : '';
    }

    document.getElementById('free-list-view').style.display   = 'none';
    document.getElementById('free-write-view').style.display  = 'none';
    document.getElementById('free-detail-view').style.display = 'block';

    const sorted = [...freeData].sort((a, b) => b.id - a.id);
    const idx  = sorted.findIndex(x => x.id === id);
    const prev = sorted[idx - 1];
    const next = sorted[idx + 1];
    document.getElementById('free-detail-nav').innerHTML = `
        <div class="bd-nav-row">
            <span class="bd-nav-label">이전글</span>
            ${prev ? `<span class="bd-nav-link" onclick="freeViewDetail(${prev.id})">${prev.title}</span>` : '<span class="bd-nav-none">이전 글이 없습니다.</span>'}
        </div>
        <div class="bd-nav-row">
            <span class="bd-nav-label">다음글</span>
            ${next ? `<span class="bd-nav-link" onclick="freeViewDetail(${next.id})">${next.title}</span>` : '<span class="bd-nav-none">다음 글이 없습니다.</span>'}
        </div>`;

    freeRenderComments(n);
}

function freeRenderComments(n) {
    var el = document.getElementById('free-d-comments');
    if (!el) return;
    var u = freeCurrentUser();
    var cmts = n.comments || [];
    var listHtml = cmts.length === 0
        ? '<div class="bd-comment-empty">아직 댓글이 없습니다. 첫 댓글을 남겨보세요!</div>'
        : cmts.map(function(c) {
            var canDel = u.id && u.id === c.authorId;
            return '<div class="bd-comment-item">' +
                '<div class="bd-comment-meta">' +
                '<span class="bd-comment-author">'+c.author+'</span>' +
                '<span class="bd-comment-date">'+c.date+'</span>' +
                (canDel ? '<button class="bd-comment-del" onclick="freeDeleteComment('+n.id+','+c.id+')">삭제</button>' : '') +
                '</div>' +
                '<div class="bd-comment-body">'+c.body.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</div>' +
                '</div>';
        }).join('');
    el.innerHTML = '<div class="bd-comment-section">' +
        '<div class="bd-comment-hd">댓글 ' + cmts.length + '개</div>' +
        '<div class="bd-comment-list">' + listHtml + '</div>' +
        '<div class="bd-comment-form">' +
        '<textarea class="bd-comment-input" id="free-comment-input" placeholder="댓글을 입력하세요"></textarea>' +
        '<button class="bd-comment-submit" onclick="freeAddComment('+n.id+')">등록</button>' +
        '</div></div>';
}

function freeAddComment(postId) {
    var input = document.getElementById('free-comment-input');
    var body = (input ? input.value : '').trim();
    if (!body) { showToast('댓글 내용을 입력하세요.', 'error'); return; }
    var u = freeCurrentUser();
    if (!u || !u.id) { showToast('로그인이 필요합니다.', 'error'); return; }
    var n = freeData.find(function(x) { return x.id === postId; });
    if (!n) return;
    if (!n.comments) n.comments = [];
    var cid = n.comments.length ? Math.max.apply(null, n.comments.map(function(c){ return c.id; })) + 1 : 1;
    var today = new Date().toISOString().split('T')[0];
    n.comments.push({ id: cid, author: u.name || u.id, authorId: u.id, date: today, body: body });
    freeSaveData();
    showToast('댓글이 등록되었습니다.', 'success');
    freeRenderComments(n);
}

async function freeDeleteComment(postId, cid) {
    if (!await showConfirm('댓글을 삭제하시겠습니까?')) return;
    var n = freeData.find(function(x) { return x.id === postId; });
    if (!n || !n.comments) return;
    var u = freeCurrentUser();
    var c = n.comments.find(function(x) { return x.id === cid; });
    if (!c || u.id !== c.authorId) { showToast('삭제 권한이 없습니다.', 'error'); return; }
    n.comments = n.comments.filter(function(x) { return x.id !== cid; });
    freeSaveData();
    showToast('댓글이 삭제되었습니다.', 'success');
    freeRenderComments(n);
}

function freeOpenWrite() {
    freeEnsureData();
    freeWriteMode = 'new';
    freeWriteId = null;
    freeShowWriteView({ title: '', cat: '', blocks: [] });
}
function freeOpenEdit(id) {
    var n = freeData.find(function(x) { return x.id === id; });
    if (!n) return;
    var u = freeCurrentUser();
    if (u.id !== n.authorId) { showToast('수정 권한이 없습니다.', 'error'); return; }
    freeWriteMode = 'edit';
    freeWriteId = id;
    freeShowWriteView(n);
}
function freeShowWriteView(data) {
    document.getElementById('free-list-view').style.display   = 'none';
    document.getElementById('free-detail-view').style.display = 'none';
    document.getElementById('free-write-view').style.display  = 'block';
    document.getElementById('free-write-title-hd').textContent = freeWriteMode === 'edit' ? '글 수정' : '글쓰기';
    var catSel = document.getElementById('free-w-cat');
    if (catSel && data.cat) catSel.value = data.cat;
    document.getElementById('free-w-title').value = data.title || '';
    nBlockEditorGlobalInit();
    var zone = document.getElementById('free-write-editor-zone');
    var blocks = (data.blocks && data.blocks.length) ? data.blocks
        : (data.body ? [{ id: nBlkGenId(), type:'p', html: data.body, checked:false, collapsed:false, indent:0, childHtml:'' }]
        : [nBlkNew('p')]);
    nZoneRender(zone, blocks);
    nSetupFileDropZone('free-write-editor-zone');
    nActiveEditorCtx = { type: 'board' };
    setTimeout(function() { document.getElementById('free-w-title').focus(); }, 50);
}
function freeCancelWrite() {
    nActiveEditorCtx = { type: 'note' };
    if (freeWriteMode === 'edit' && freeWriteId) {
        freeViewDetail(freeWriteId);
    } else {
        freeGoList();
    }
}
function freeSaveWrite() {
    var title = (document.getElementById('free-w-title').value || '').trim();
    var cat   = document.getElementById('free-w-cat').value;
    if (!title) { showToast('제목을 입력하세요.', 'error'); return; }
    if (!cat)   { showToast('분류를 선택하세요.', 'error'); return; }
    var zone   = document.getElementById('free-write-editor-zone');
    var blocks = zone ? nGetBlocks(zone) : [];
    var today  = new Date().toISOString().split('T')[0];
    var u      = freeCurrentUser();
    nActiveEditorCtx = { type: 'note' };
    if (freeWriteMode === 'edit') {
        var n = freeData.find(function(x) { return x.id === freeWriteId; });
        if (n) { n.title = title; n.cat = cat; n.blocks = blocks; n.body = ''; }
        freeSaveData();
        showToast('수정되었습니다.', 'success');
        freeViewDetail(freeWriteId);
    } else {
        var newPost = { id: freeGenId(), cat: cat, title: title, author: u.name || u.id,
            authorId: u.id, date: today, views: 0, blocks: blocks, body: '', comments: [] };
        freeData.unshift(newPost);
        freeSaveData();
        showToast('게시글이 등록되었습니다.', 'success');
        freeGoList();
    }
}
async function freeDeletePost(id) {
    if (!await showConfirm('이 게시글을 삭제하시겠습니까?')) return;
    var u = freeCurrentUser();
    var n = freeData.find(function(x) { return x.id === id; });
    if (!n) return;
    if (u.id !== n.authorId) { showToast('삭제 권한이 없습니다.', 'error'); return; }
    freeData = freeData.filter(function(x) { return x.id !== id; });
    freeSaveData();
    showToast('삭제되었습니다.', 'success');
    freeGoList();
}

function freeGetCats() {
    var saved = localStorage.getItem('freeCats_v1');
    if (saved) { try { return JSON.parse(saved); } catch(e) {} }
    return ['일상','취미','운동/건강','음식','여행','기타'];
}
function freeSaveCats(cats) { localStorage.setItem('freeCats_v1', JSON.stringify(cats)); }

function freeOpenAdminPanel() {
    var overlay = document.createElement('div');
    overlay.className = 'goal-modal-overlay';
    overlay.id = 'free-admin-overlay';
    overlay.innerHTML = '<div class="goal-modal" style="width:380px;">' +
        '<div class="goal-modal-title">분류 관리</div>' +
        '<div id="free-admin-cats" style="margin-bottom:12px;max-height:240px;overflow-y:auto;"></div>' +
        '<div style="display:flex;gap:8px;">' +
        '<input class="eval-editor-input" id="free-admin-new-cat" placeholder="새 분류 이름" style="flex:1;" onkeydown="if(event.key===\'Enter\')freeAdminAddCat()">' +
        '<button class="eval-editor-save" onclick="freeAdminAddCat()">추가</button>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;margin-top:16px;">' +
        '<button class="eval-editor-cancel" onclick="freeCloseAdminPanel()">닫기</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
    freeAdminRenderCats();
}
function freeCloseAdminPanel() {
    var el = document.getElementById('free-admin-overlay');
    if (el) el.remove();
    freeRebuildCatFilter();
}
function freeAdminRenderCats() {
    var el = document.getElementById('free-admin-cats');
    if (!el) return;
    var cats = freeGetCats();
    el.innerHTML = cats.length === 0
        ? '<div style="color:#bbb;font-size:13px;padding:8px 0;">유형이 없습니다.</div>'
        : cats.map(function(c) {
            return '<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f5f5f5;">' +
                '<span style="font-size:13px;color:#333;">' + c + '</span>' +
                '<button class="eval-view-btn" style="color:#e05070;" onclick="freeAdminDelCat(\'' + c.replace(/'/g,"\\'") + '\')">삭제</button>' +
                '</div>';
        }).join('');
}
function freeAdminAddCat() {
    var v = (document.getElementById('free-admin-new-cat').value || '').trim();
    if (!v) return;
    var cats = freeGetCats();
    if (cats.indexOf(v) >= 0) { showToast('이미 존재하는 유형입니다.', 'error'); return; }
    cats.push(v);
    freeSaveCats(cats);
    document.getElementById('free-admin-new-cat').value = '';
    freeAdminRenderCats();
    showToast('"' + v + '" 유형이 추가되었습니다.', 'success');
}
async function freeAdminDelCat(cat) {
    if (!await showConfirm('"' + cat + '" 유형을 삭제하시겠습니까?')) return;
    freeSaveCats(freeGetCats().filter(function(c) { return c !== cat; }));
    freeAdminRenderCats();
}
function freeRebuildCatFilter() {
    var sel = document.getElementById('free-cat-filter');
    if (!sel) return;
    var cur = sel.value;
    var cats = freeGetCats();
    sel.innerHTML = '<option value="">전체</option>' + cats.map(function(c) {
        return '<option value="'+c+'"'+(c===cur?' selected':'')+'>'+c+'</option>';
    }).join('');
    freeRenderList();
}

// ===== 설문조사 =====
let surveyData = [
    {
        id: 'sv1',
        title: '2025년 하반기 복지 수요조사',
        status: '진행중',
        period: '2025-07-01 ~ 2025-07-31',
        target: '전직원',
        responses: 47,
        total: 120,
        questions: [
            { type: 'radio', label: '선호하는 복지 혜택은 무엇인가요?', options: ['건강검진 지원', '자기계발비 지원', '식대 지원 확대', '교통비 지원', '휴가 일수 확대'] },
            { type: 'checkbox', label: '이용하고 싶은 사내 시설은? (복수선택)', options: ['헬스장', '카페테리아', '수면실', '독서실', '어린이집'] },
            { type: 'textarea', label: '기타 건의사항이 있으시면 자유롭게 작성해 주세요.' },
        ],
    },
    {
        id: 'sv2',
        title: '직원 만족도 조사 (2025 상반기)',
        status: '종료',
        period: '2025-04-01 ~ 2025-04-15',
        target: '전직원',
        responses: 98,
        total: 110,
        questions: [
            { type: 'radio', label: '전반적인 업무 만족도는?', options: ['매우 만족', '만족', '보통', '불만족', '매우 불만족'], results: [22, 41, 24, 8, 3] },
            { type: 'radio', label: '회사의 복지 수준은?', options: ['매우 만족', '만족', '보통', '불만족', '매우 불만족'], results: [18, 35, 31, 10, 4] },
            { type: 'textarea', label: '개선되었으면 하는 점을 작성해 주세요.' },
        ],
    },
    {
        id: 'sv3',
        title: '사내 식당 메뉴 개선 설문',
        status: '진행중',
        period: '2025-07-01 ~ 2025-07-20',
        target: '전직원',
        responses: 31,
        total: 120,
        questions: [
            { type: 'radio', label: '현재 사내 식당 만족도는?', options: ['매우 만족', '만족', '보통', '불만족', '매우 불만족'] },
            { type: 'checkbox', label: '추가되었으면 하는 메뉴는? (복수선택)', options: ['한식 강화', '샐러드/건강식', '라면/분식', '카페 음료', '비건 메뉴'] },
            { type: 'textarea', label: '기타 의견을 적어주세요.' },
        ],
    },
];

// 참여 여부 기록
const surveyAnswered = {};

// 설문 작성 질문 상태
let svWriteQuestions = [];
let svWriteQCount = 0;

function initBoardSurvey() {
    surveyGoList();
}

function surveyGoList() {
    document.getElementById('survey-list-view').style.display = 'block';
    document.getElementById('survey-participate-view').style.display = 'none';
    document.getElementById('survey-result-view').style.display = 'none';
    document.getElementById('survey-write-view').style.display = 'none';
    surveyRenderList('전체', document.querySelector('.sv-filter-btn.active'));
}

function surveyOpenWrite() {
    document.getElementById('survey-list-view').style.display = 'none';
    document.getElementById('survey-participate-view').style.display = 'none';
    document.getElementById('survey-result-view').style.display = 'none';
    document.getElementById('survey-write-view').style.display = 'block';
    document.getElementById('sv-w-title').value = '';
    document.getElementById('sv-w-target').value = '';
    document.getElementById('sv-w-anonymous').checked = false;
    setDateVal('sv-w-start', '');
    setDateVal('sv-w-end', '');
    svWriteQuestions = [];
    svWriteQCount = 0;
    document.getElementById('sv-w-questions').innerHTML = '';
    svAddQuestion();
}

function surveyCancelWrite() {
    surveyGoList();
}

function svAddQuestion() {
    var qid = ++svWriteQCount;
    svWriteQuestions.push({ id: qid, type: 'radio', label: '', options: [''] });
    svRenderWriteQuestions();
}

function svRenderWriteQuestions() {
    var el = document.getElementById('sv-w-questions');
    if (!el) return;
    el.innerHTML = svWriteQuestions.map(function(q, qi) {
        var optionsHtml = '';
        if (q.type === 'radio' || q.type === 'checkbox') {
            optionsHtml = '<div class="sv-w-opts">' +
                q.options.map(function(opt, oi) {
                    return '<div class="sv-w-opt-row">' +
                        '<input class="sv-w-opt-input" type="text" value="'+opt.replace(/"/g,'&quot;')+'" placeholder="옵션 '+(oi+1)+'" onchange="svUpdateOpt('+qi+','+oi+',this.value)">' +
                        (q.options.length > 1 ? '<button class="sv-w-opt-del" onclick="svDelOpt('+qi+','+oi+')">×</button>' : '') +
                        '</div>';
                }).join('') +
                '<button class="sv-w-opt-add" onclick="svAddOpt('+qi+')">+ 옵션 추가</button>' +
                '</div>';
        }
        return '<div class="sv-w-q-item" id="svq-'+q.id+'">' +
            '<div class="sv-w-q-row1">' +
            '<select class="sv-w-q-type" onchange="svChangeQType('+qi+',this.value)">' +
            '<option value="radio"'+(q.type==='radio'?' selected':'')+'>객관식 (단일선택)</option>' +
            '<option value="checkbox"'+(q.type==='checkbox'?' selected':'')+'>객관식 (복수선택)</option>' +
            '<option value="textarea"'+(q.type==='textarea'?' selected':'')+'>주관식</option>' +
            '</select>' +
            '<input class="sv-w-q-text" type="text" value="'+q.label.replace(/"/g,'&quot;')+'" placeholder="질문 내용을 입력하세요" onchange="svUpdateQLabel('+qi+',this.value)">' +
            '<button class="sv-w-q-del" onclick="svDelQuestion('+qi+')" title="삭제">×</button>' +
            '</div>' + optionsHtml + '</div>';
    }).join('');
}

function svChangeQType(qi, type) {
    if (svWriteQuestions[qi]) {
        svWriteQuestions[qi].type = type;
        if (type === 'radio' || type === 'checkbox') {
            if (!svWriteQuestions[qi].options.length) svWriteQuestions[qi].options = [''];
        }
        svRenderWriteQuestions();
    }
}
function svUpdateQLabel(qi, val) { if (svWriteQuestions[qi]) svWriteQuestions[qi].label = val; }
function svUpdateOpt(qi, oi, val) { if (svWriteQuestions[qi] && svWriteQuestions[qi].options[oi] !== undefined) svWriteQuestions[qi].options[oi] = val; }
function svAddOpt(qi) { if (svWriteQuestions[qi]) { svWriteQuestions[qi].options.push(''); svRenderWriteQuestions(); } }
function svDelOpt(qi, oi) { if (svWriteQuestions[qi]) { svWriteQuestions[qi].options.splice(oi, 1); svRenderWriteQuestions(); } }
function svDelQuestion(qi) { svWriteQuestions.splice(qi, 1); svRenderWriteQuestions(); }

function surveySaveWrite() {
    var title  = (document.getElementById('sv-w-title').value || '').trim();
    var target = (document.getElementById('sv-w-target').value || '').trim();
    var start  = document.getElementById('sv-w-start').value;
    var end    = document.getElementById('sv-w-end').value;
    if (!title)  { showToast('설문 제목을 입력하세요.', 'error'); return; }
    if (!target) { showToast('설문 대상을 입력하세요.', 'error'); return; }
    if (!start || !end) { showToast('설문 기간을 설정하세요.', 'error'); return; }
    // read current labels from DOM before saving
    document.querySelectorAll('.sv-w-q-text').forEach(function(inp, qi) {
        if (svWriteQuestions[qi]) svWriteQuestions[qi].label = inp.value;
    });
    document.querySelectorAll('.sv-w-q-item').forEach(function(item, qi) {
        if (!svWriteQuestions[qi]) return;
        item.querySelectorAll('.sv-w-opt-input').forEach(function(inp, oi) {
            if (svWriteQuestions[qi].options[oi] !== undefined) svWriteQuestions[qi].options[oi] = inp.value;
        });
    });
    var questions = svWriteQuestions.map(function(q) {
        var qObj = { type: q.type, label: q.label };
        if (q.type === 'radio' || q.type === 'checkbox') qObj.options = q.options.filter(function(o) { return o.trim(); });
        return qObj;
    }).filter(function(q) { return q.label.trim(); });
    if (!questions.length) { showToast('질문을 하나 이상 입력하세요.', 'error'); return; }
    var anonymous = document.getElementById('sv-w-anonymous').checked;
    var newId = 'sv' + Date.now();
    var newSurvey = {
        id: newId, title: title, status: '진행중',
        period: start + ' ~ ' + end, target: target,
        responses: 0, total: 100, anonymous: anonymous, questions: questions
    };
    surveyData.unshift(newSurvey);
    showToast('설문이 등록되었습니다.', 'success');
    surveyGoList();
}

function surveyRenderList(filter, btn) {
    // 필터 버튼 active 처리
    if (btn) {
        document.querySelectorAll('.sv-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    const grid = document.getElementById('sv-card-grid');
    if (!grid) return;

    const list = filter === '전체' ? surveyData : surveyData.filter(s => s.status === filter);

    grid.innerHTML = list.map(s => {
        const isActive = s.status === '진행중';
        const rateNum  = Math.round((s.responses / s.total) * 100);
        const actionBtn = isActive
            ? `<button class="sv-participate-btn" onclick="surveyParticipate('${s.id}')">참여하기</button>`
            : `<button class="sv-result-btn" onclick="surveyShowResult('${s.id}')">결과보기</button>`;
        return `
        <div class="sv-card">
            <div class="sv-card-header">
                <span class="sv-card-status ${isActive ? 'sv-status-active' : 'sv-status-ended'}">${s.status}</span>
                ${s.anonymous ? '<span class="sv-anon-badge">익명</span>' : ''}
            </div>
            <div class="sv-card-title">${s.title}</div>
            <div class="sv-card-meta">
                <div class="sv-meta-row"><span class="sv-meta-label">기간</span><span>${s.period}</span></div>
                <div class="sv-meta-row"><span class="sv-meta-label">대상</span><span>${s.target}</span></div>
                <div class="sv-meta-row"><span class="sv-meta-label">응답률</span><span>${rateNum}% (${s.responses}/${s.total}명)</span></div>
            </div>
            <div class="sv-card-footer">
                ${actionBtn}
            </div>
        </div>`;
    }).join('');
}

function surveyParticipate(id) {
    const s = surveyData.find(x => x.id === id);
    if (!s) return;

    document.getElementById('survey-list-view').style.display = 'none';
    document.getElementById('survey-result-view').style.display = 'none';
    document.getElementById('survey-participate-view').style.display = 'block';

    const content = document.getElementById('sv-participate-content');
    const qHtml = s.questions.map((q, qi) => {
        let inputHtml = '';
        if (q.type === 'radio') {
            inputHtml = q.options.map((opt, oi) => `
                <label class="sv-option-label">
                    <input type="radio" name="sv_q${qi}_${id}" value="${oi}"> ${opt}
                </label>`).join('');
        } else if (q.type === 'checkbox') {
            inputHtml = q.options.map((opt, oi) => `
                <label class="sv-option-label">
                    <input type="checkbox" name="sv_q${qi}_${id}" value="${oi}"> ${opt}
                </label>`).join('');
        } else if (q.type === 'textarea') {
            inputHtml = `<textarea class="sv-textarea" placeholder="의견을 입력해 주세요." rows="4"></textarea>`;
        }
        return `
        <div class="sv-question-block">
            <div class="sv-question-num">Q${qi + 1}</div>
            <div class="sv-question-label">${q.label}</div>
            <div class="sv-question-options">${inputHtml}</div>
        </div>`;
    }).join('');

    const anonNotice = s.anonymous
        ? `<div class="sv-anon-notice">🔒 이 설문은 익명으로 진행됩니다. 응답자 정보가 수집되지 않습니다.</div>`
        : '';
    content.innerHTML = `
        <div class="sv-detail-card">
            <div class="sv-detail-title">${s.title}</div>
            <div class="sv-detail-meta">${s.period} | 대상: ${s.target}</div>
            ${anonNotice}
            <div class="sv-questions">${qHtml}</div>
            <div class="sv-submit-row">
                <button class="sv-submit-btn" onclick="surveySubmit('${s.id}')">설문 제출하기</button>
            </div>
        </div>`;
}

function surveySubmit(id) {
    surveyAnswered[id] = true;
    var s = surveyData.find(function(x) { return x.id === id; });
    if (s && !s.anonymous) {
        var u = JSON.parse(localStorage.getItem('userData') || '{}');
        if (!s.respondents) s.respondents = [];
        var today = new Date().toISOString().split('T')[0];
        var already = s.respondents.some(function(r) { return r.id === u.id; });
        if (!already) s.respondents.push({ id: u.id || '', name: u.name || u.id || '알 수 없음', dept: u.department || '', date: today });
        s.responses = s.respondents.length;
    } else if (s) {
        s.responses = (s.responses || 0) + 1;
    }
    showToast('설문에 참여해 주셔서 감사합니다!', 'success');
    surveyGoList();
}

function surveyShowResult(id) {
    const s = surveyData.find(x => x.id === id);
    if (!s) return;

    document.getElementById('survey-list-view').style.display = 'none';
    document.getElementById('survey-participate-view').style.display = 'none';
    document.getElementById('survey-result-view').style.display = 'block';

    const content = document.getElementById('sv-result-content');

    const qHtml = s.questions.map((q, qi) => {
        if (q.type === 'textarea') {
            return `
            <div class="sv-question-block">
                <div class="sv-question-num">Q${qi + 1}</div>
                <div class="sv-question-label">${q.label}</div>
                <div class="sv-result-text-note">주관식 문항은 결과를 공개하지 않습니다.</div>
            </div>`;
        }
        const results = q.results || q.options.map(() => 0);
        const total   = results.reduce((a, b) => a + b, 0) || 1;
        const barsHtml = q.options.map((opt, oi) => {
            const cnt = results[oi] || 0;
            const pct = Math.round((cnt / total) * 100);
            return `
            <div class="sv-bar-row">
                <span class="sv-bar-label">${opt}</span>
                <div class="sv-rate-bar-wrap">
                    <div class="sv-rate-bar" style="width:${pct}%"></div>
                </div>
                <span class="sv-bar-pct">${pct}% (${cnt}명)</span>
            </div>`;
        }).join('');
        return `
        <div class="sv-question-block">
            <div class="sv-question-num">Q${qi + 1}</div>
            <div class="sv-question-label">${q.label}</div>
            <div class="sv-bars">${barsHtml}</div>
        </div>`;
    }).join('');

    const anonResultNotice = s.anonymous
        ? `<div class="sv-anon-notice">🔒 익명 설문 — 응답자 개인 정보 없이 집계 결과만 표시됩니다.</div>`
        : '';

    let respondentHtml = '';
    if (!s.anonymous) {
        const respondents = s.respondents || [];
        const rows = respondents.length === 0
            ? '<div class="sv-resp-empty">아직 응답자가 없습니다.</div>'
            : respondents.map((r, i) => `
                <div class="sv-resp-row">
                    <span class="sv-resp-num">${i + 1}</span>
                    <span class="sv-resp-name">${r.name}</span>
                    <span class="sv-resp-dept">${r.dept || ''}</span>
                    <span class="sv-resp-date">${r.date}</span>
                </div>`).join('');
        respondentHtml = `
            <div class="sv-respondent-section">
                <div class="sv-resp-header">응답자 목록 <span class="sv-resp-count">${respondents.length}명</span></div>
                ${rows}
            </div>`;
    }

    content.innerHTML = `
        <div class="sv-detail-card">
            <div class="sv-detail-title">${s.title}</div>
            <div class="sv-detail-meta">${s.period} | 총 응답: ${s.responses}명</div>
            ${anonResultNotice}
            <div class="sv-questions">${qHtml}</div>
            ${respondentHtml}
        </div>`;
}

// ===== FAQ =====
const FAQ_SEED = {
    '성장': [
        { q:'역량 개발을 위한 사내 교육 프로그램은 어떻게 신청하나요?', a:'사내 교육 프로그램은 매 분기 초 인사팀에서 공지하며, 전자결재 시스템의 [교육신청] 메뉴에서 신청하실 수 있습니다. 선착순 마감이므로 공지 후 빠르게 신청해 주세요.' },
        { q:'자기계발비 지원 기준과 신청 방법이 궁금합니다.', a:'재직 1년 이상 직원을 대상으로 연간 30만원 한도 내에서 도서, 강의, 자격증 취득 비용을 지원합니다. 영수증 첨부 후 경비처리 시스템에서 신청하시면 됩니다.' },
        { q:'사내 멘토링 제도는 어떻게 운영되나요?', a:'신입·주니어 직원을 대상으로 연 1회(상반기) 멘토링 프로그램을 운영합니다. 참여 희망자는 인사팀에 신청하시면 성향 및 직무를 고려하여 멘토를 배정해 드립니다.' },
        { q:'외부 교육 참석 시 비용 처리는 어떻게 하나요?', a:'사전에 팀장 승인을 받고 전자결재로 교육 참석 신청서를 제출하신 후, 교육 완료 후 영수증과 수료증을 첨부하여 비용처리 신청하시면 됩니다.' },
        { q:'직무 관련 자격증 취득 시 지원이 있나요?', a:'직무 연관성이 인정되는 자격증의 경우 응시료 전액 지원 및 취득 시 인센티브를 지급합니다. 지원 대상 자격증 목록은 인사팀에서 확인하실 수 있습니다.' },
    ],
    '행정': [
        { q:'명함 신규 제작은 어떻게 신청하나요?', a:'총무팀에 이메일(총무팀 대표메일)로 이름, 직위, 연락처, 이메일 정보를 보내주시면 약 3~5 영업일 내에 제작 후 전달드립니다.' },
        { q:'사무용품 요청은 어디에 하면 되나요?', a:'그룹웨어 [물품신청] 메뉴에서 필요한 사무용품을 신청하시면 됩니다. 매주 화·목 오전 10시에 일괄 배포됩니다.' },
        { q:'회의실 예약은 어떻게 하나요?', a:'그룹웨어 [회의실 예약] 메뉴에서 원하는 날짜와 시간대를 선택하여 예약하시면 됩니다. 중복 예약 방지를 위해 미사용 시 반드시 취소해 주세요.' },
        { q:'출장 신청 절차를 알고 싶습니다.', a:'출장 전 전자결재로 출장신청서를 상신하고 승인을 받으신 후 출장을 진행하시면 됩니다. 복귀 후 3일 이내에 출장보고서와 영수증을 제출해 주세요.' },
        { q:'법인카드 사용 규정이 어떻게 되나요?', a:'법인카드는 팀별로 승인권자(팀장 이상)의 사전 승인 후 사용 가능합니다. 사적 사용 및 유흥·사치성 업종 사용은 엄격히 금지되며, 사용 후 3일 내 증빙 처리 필수입니다.' },
    ],
    '시스템': [
        { q:'ERP 로그인이 안 될 때 어떻게 해야 하나요?', a:'비밀번호 5회 오류 시 계정이 잠깁니다. IT팀(내선 1234)에 연락하시거나 로그인 화면의 [비밀번호 초기화] 버튼을 이용하세요. 초기 비밀번호는 사번+생년월일 형태로 발급됩니다.' },
        { q:'ERP 비밀번호 변경 주기는 어떻게 되나요?', a:'보안 정책상 90일마다 비밀번호 변경이 권장됩니다. 변경은 우측 상단 [내 계정] > [비밀번호 변경] 메뉴에서 가능합니다.' },
        { q:'시스템 오류 발생 시 어디에 신고하나요?', a:'IT팀 내선(1234) 또는 헬프데스크 이메일(it@caring.co.kr)로 오류 화면 캡처와 함께 신고해 주세요. 긴급 장애는 전화로 즉시 신고해 주시기 바랍니다.' },
        { q:'재택근무 시 VPN 접속 방법을 알고 싶습니다.', a:'IT팀에서 발급받은 VPN 계정으로 사내 VPN 클라이언트에 접속하시면 됩니다. 최초 설치가 필요한 경우 IT팀에 설치 파일과 매뉴얼을 요청해 주세요.' },
        { q:'개인 PC에서 업무 시스템 접속이 가능한가요?', a:'보안 정책상 개인 PC에서의 직접 접속은 제한됩니다. VPN 접속 후 원격 데스크톱을 통해 사무실 PC에 연결하는 방식으로만 허용됩니다.' },
    ],
    '인사': [
        { q:'연차 발생 기준이 어떻게 되나요?', a:'입사 1년 미만은 매월 1일 발생(최대 11일), 1년 이상부터 매년 15일 + 2년마다 1일씩 추가(최대 25일)됩니다. 정확한 잔여 연차는 ERP [근태관리] > [연차현황]에서 확인하세요.' },
        { q:'경조사 휴가는 며칠이나 되나요?', a:'결혼(본인 5일, 자녀 1일), 출산(배우자 10일), 부모·배우자 사망 5일, 조부모·형제자매 사망 3일, 자녀 사망 3일이 지원됩니다. 증빙 서류는 복귀 후 3일 내 제출하세요.' },
        { q:'인사평가는 언제, 어떻게 진행되나요?', a:'상반기(6~7월)와 하반기(12~1월) 연 2회 진행됩니다. ERP [평가관리] 메뉴에서 자기평가를 먼저 진행하고, 이후 팀장 평가 → 최종 확정 순으로 진행됩니다.' },
        { q:'인사기록 정정은 어떻게 신청하나요?', a:'ERP 인사정보 화면에서 직접 수정 후 저장하거나, 주민등록번호·학력 등 주요 정보 변경 시에는 증빙 서류와 함께 인사팀에 이메일로 신청해 주세요.' },
        { q:'육아휴직 신청 절차가 어떻게 되나요?', a:'휴직 예정일 30일 전까지 전자결재로 육아휴직 신청서를 상신해 주세요. 복직 예정일도 30일 전에 사전 통보하셔야 합니다. 자세한 내용은 인사팀(내선 2345)에 문의하세요.' },
    ],
    '채용': [
        { q:'임직원 추천 채용 제도가 있나요?', a:'네, 현직 임직원이 추천한 지인이 채용될 경우 추천인에게 소정의 추천 보상금을 지급하는 제도가 있습니다. 대상 직군 및 보상 기준은 채용팀 공지를 통해 확인하세요.' },
        { q:'수습 기간은 어떻게 되나요?', a:'신규 입사자는 3개월의 수습 기간이 적용됩니다. 수습 기간 중 평가를 통해 정규 전환 여부가 결정되며, 수습 중 급여는 정규직 기준의 90%가 지급됩니다.' },
        { q:'인턴십 지원 방법이 궁금합니다.', a:'채용 홈페이지(careers.caring.co.kr)에서 인턴십 공고를 확인하고 지원하실 수 있습니다. 인턴십은 방학 기간(동·하계) 중 운영되며, 우수 인턴은 정규직 전환 기회가 있습니다.' },
        { q:'내부 공모 지원은 어떻게 하나요?', a:'사내 공지 또는 ERP [내부공모] 메뉴에서 공모 중인 포지션을 확인하고 지원서를 제출하시면 됩니다. 지원 전 현재 소속팀장에게 사전 동의를 받아야 합니다.' },
        { q:'경력직 지인 추천 시 이력서는 어디로 보내나요?', a:'채용팀 이메일(recruit@caring.co.kr)로 지원자 이력서와 함께 추천인 정보를 기재하여 보내주시면 됩니다. 채용 성공 시 추천 보상금이 지급됩니다.' },
    ],
    '총무': [
        { q:'주차 등록은 어떻게 하나요?', a:'총무팀에 차량번호를 등록하시면 사내 주차장을 이용하실 수 있습니다. 주차 공간이 한정되어 있으므로 선착순으로 등록됩니다. 등록 후 변경 시에도 총무팀에 알려주세요.' },
        { q:'복지 포인트 사용처와 잔액 확인 방법이 궁금합니다.', a:'복지 포인트는 복지몰(welfare.caring.co.kr) 또는 제휴 가맹점에서 사용 가능합니다. 잔액은 복지몰 로그인 후 [내 포인트] 메뉴에서 확인하세요.' },
        { q:'건강검진 신청은 어디서 하나요?', a:'매년 상반기 총무팀에서 건강검진 안내 공지를 발송합니다. 공지에 포함된 제휴 병원 리스트에서 선택하여 직접 예약하시고, 예약 완료 후 총무팀에 일정을 알려주세요.' },
        { q:'사내 체육시설 이용 방법이 어떻게 되나요?', a:'지하 1층 피트니스센터는 평일 07:00~22:00 이용 가능합니다. ERP [시설예약] 메뉴에서 시간 예약 후 이용하시면 되며, 이용 등록은 총무팀에 문의하세요.' },
        { q:'퇴직금 수령 방법과 지급 시기가 궁금합니다.', a:'퇴직 후 14일 이내에 지정 계좌로 퇴직금이 지급됩니다. 계좌 정보는 인사정보 화면의 계좌 정보를 기준으로 처리되므로, 퇴직 전 계좌 정보를 최신으로 유지해 주세요.' },
    ],
    '재무': [
        { q:'법인카드 한도 초과 시 어떻게 처리하나요?', a:'법인카드 한도 초과 시 재무팀에 한도 증액 요청서를 제출하거나, 초과분을 개인 카드로 결제 후 비용처리 신청을 하시면 됩니다.' },
        { q:'경비 처리 기한은 어떻게 되나요?', a:'지출 발생일로부터 30일 이내에 비용처리를 완료해야 합니다. 미처리 시 다음 급여에서 공제될 수 있으며, 분기 마감일(3/31, 6/30, 9/30, 12/31) 전에는 반드시 처리 완료 바랍니다.' },
        { q:'세금계산서 발행 요청 절차가 어떻게 되나요?', a:'재무팀 이메일(finance@caring.co.kr)로 거래처 정보(사업자번호, 상호, 금액, 품목)를 보내주시면 처리해 드립니다. 마감일(매월 말일) 2일 전까지 요청해 주세요.' },
        { q:'급여일에 급여가 입금되지 않았을 때 어떻게 하나요?', a:'급여팀(내선 3456)에 즉시 연락해 주세요. 등록된 계좌번호 오류이거나 은행 전산 지연 등의 이유일 수 있으며, 확인 후 당일 또는 익일 재지급 처리해 드립니다.' },
        { q:'가족수당 신청 기준이 어떻게 되나요?', a:'배우자 월 5만원, 자녀 1인당 월 3만원(최대 2인)의 가족수당이 지급됩니다. 신청 시 가족관계증명서와 함께 인사팀에 신청서를 제출하시면 다음 달 급여부터 반영됩니다.' },
    ],
};

let faqData = {};
let faqTabs = [];
let qnaCurrentTab = '';

function faqEnsureData() {
    var savedTabs  = localStorage.getItem('faqTabs_v1');
    var savedItems = localStorage.getItem('faqData_v1');
    if (savedTabs) {
        try { faqTabs = JSON.parse(savedTabs); } catch(e) { faqTabs = Object.keys(FAQ_SEED); }
    } else {
        faqTabs = Object.keys(FAQ_SEED);
    }
    if (savedItems) {
        try { faqData = JSON.parse(savedItems); } catch(e) { faqData = JSON.parse(JSON.stringify(FAQ_SEED)); }
    } else {
        faqData = JSON.parse(JSON.stringify(FAQ_SEED));
    }
    // seed any tabs not yet in faqData
    faqTabs.forEach(function(t) { if (!faqData[t]) faqData[t] = []; });
}
function faqSaveData() {
    localStorage.setItem('faqTabs_v1',  JSON.stringify(faqTabs));
    localStorage.setItem('faqData_v1',  JSON.stringify(faqData));
}

function initBoardQna() {
    faqEnsureData();
    qnaCurrentTab = faqTabs[0] || '';
    faqRenderTabBar();
    qnaRender();
}

function faqRenderTabBar() {
    var bar = document.getElementById('faq-tab-bar');
    if (!bar) return;
    bar.innerHTML = faqTabs.map(function(tab) {
        return '<button class="qna-tab' + (tab === qnaCurrentTab ? ' active' : '') + '" onclick="qnaSwitchTabName(\'' + tab.replace(/'/g,"\\'") + '\', this)">' + tab + '</button>';
    }).join('');
}

function qnaSwitchTabName(tab) {
    qnaCurrentTab = tab;
    faqRenderTabBar();
    if (document.getElementById('qna-search-q')) document.getElementById('qna-search-q').value = '';
    qnaRender();
}

function qnaSwitchTab(tab, btn) { qnaSwitchTabName(tab); }

function qnaRender() {
    faqEnsureData();
    var u = faqCurrentUser();
    var query = (document.getElementById('qna-search-q')?.value || '').trim().toLowerCase();
    var items = (faqData[qnaCurrentTab] || []).filter(function(item) {
        return !query || item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query);
    });
    var lbl = document.getElementById('qna-count-lbl');
    if (lbl) lbl.textContent = '';
    var list = document.getElementById('qna-list');
    if (!list) return;
    if (items.length === 0) {
        list.innerHTML = '<div class="qna-empty">등록된 FAQ가 없습니다.</div>';
        return;
    }
    list.innerHTML = items.map(function(item, i) {
        var canEdit = u && u.id && u.id === item.authorId;
        var actHtml = canEdit
            ? '<button class="eval-view-btn" style="margin-left:auto;font-size:11px;" onclick="event.stopPropagation();faqOpenEdit(\'' + qnaCurrentTab.replace(/'/g,"\\'") + '\',' + i + ')">수정</button>' +
              '<button class="eval-view-btn" style="color:#e05070;font-size:11px;" onclick="event.stopPropagation();faqDelete(\'' + qnaCurrentTab.replace(/'/g,"\\'") + '\',' + i + ')">삭제</button>'
            : '';
        return '<div class="qna-item" id="qna-item-' + i + '">' +
            '<div class="qna-q-row" onclick="qnaToggle(' + i + ')" style="display:flex;align-items:center;">' +
            '<span class="qna-q-badge">Q</span>' +
            '<span class="qna-q-text">' + item.q + '</span>' +
            actHtml +
            '<span class="qna-arrow" id="qna-arrow-' + i + '">﹀</span>' +
            '</div>' +
            '<div class="qna-a-row" id="qna-a-' + i + '" style="display:none;">' +
            '<span class="qna-a-badge">A</span>' +
            '<span class="qna-a-text">' + item.a + '</span>' +
            '</div></div>';
    }).join('');
}

function qnaToggle(i) {
    var aRow  = document.getElementById('qna-a-' + i);
    var arrow = document.getElementById('qna-arrow-' + i);
    var item  = document.getElementById('qna-item-' + i);
    var isOpen = aRow.style.display !== 'none';
    aRow.style.display = isOpen ? 'none' : 'flex';
    arrow.textContent  = isOpen ? '﹀' : '︿';
    if (item) item.classList.toggle('qna-item-open', !isOpen);
}

function faqCurrentUser() { return JSON.parse(localStorage.getItem('userData') || '{}'); }

function faqOpenWrite() {
    faqEnsureData();
    if (!faqTabs.length) { showToast('탭을 먼저 추가하세요.', 'error'); return; }
    var overlay = document.createElement('div');
    overlay.className = 'goal-modal-overlay';
    overlay.id = 'faq-write-overlay';
    var tabOpts = faqTabs.map(function(t) {
        return '<option value="'+t+'"'+(t===qnaCurrentTab?' selected':'')+'>'+t+'</option>';
    }).join('');
    overlay.innerHTML = '<div class="goal-modal" style="width:520px;">' +
        '<div class="goal-modal-title">FAQ 추가</div>' +
        '<div style="display:flex;flex-direction:column;gap:10px;">' +
        '<select class="eval-editor-input" id="faq-w-tab" style="height:36px;">' + tabOpts + '</select>' +
        '<input class="eval-editor-input" id="faq-w-q" placeholder="질문을 입력하세요" style="height:36px;">' +
        '<textarea class="eval-editor-input" id="faq-w-a" placeholder="답변을 입력하세요" style="height:100px;resize:vertical;"></textarea>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;">' +
        '<button class="eval-editor-cancel" onclick="faqCloseWrite()">취소</button>' +
        '<button class="eval-editor-save" onclick="faqSaveWrite(-1)">등록</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
}

function faqOpenEdit(tab, idx) {
    faqEnsureData();
    var item = (faqData[tab] || [])[idx];
    if (!item) return;
    var overlay = document.createElement('div');
    overlay.className = 'goal-modal-overlay';
    overlay.id = 'faq-write-overlay';
    overlay.innerHTML = '<div class="goal-modal" style="width:520px;">' +
        '<div class="goal-modal-title">FAQ 수정</div>' +
        '<div style="display:flex;flex-direction:column;gap:10px;">' +
        '<input type="hidden" id="faq-edit-tab" value="'+tab.replace(/"/g,'&quot;')+'">' +
        '<input type="hidden" id="faq-edit-idx" value="'+idx+'">' +
        '<input class="eval-editor-input" id="faq-w-q" value="'+item.q.replace(/"/g,'&quot;')+'" placeholder="질문" style="height:36px;">' +
        '<textarea class="eval-editor-input" id="faq-w-a" placeholder="답변" style="height:100px;resize:vertical;">'+item.a+'</textarea>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;">' +
        '<button class="eval-editor-cancel" onclick="faqCloseWrite()">취소</button>' +
        '<button class="eval-editor-save" onclick="faqSaveWrite('+idx+')">저장</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
}

function faqCloseWrite() {
    var el = document.getElementById('faq-write-overlay');
    if (el) el.remove();
}

function faqSaveWrite(editIdx) {
    var q = (document.getElementById('faq-w-q').value || '').trim();
    var a = (document.getElementById('faq-w-a').value || '').trim();
    if (!q) { showToast('질문을 입력하세요.', 'error'); return; }
    if (!a) { showToast('답변을 입력하세요.', 'error'); return; }
    var u = faqCurrentUser();
    if (editIdx >= 0) {
        var tab = document.getElementById('faq-edit-tab').value;
        var idx = parseInt(document.getElementById('faq-edit-idx').value);
        if (faqData[tab] && faqData[tab][idx]) {
            faqData[tab][idx].q = q;
            faqData[tab][idx].a = a;
        }
    } else {
        var tab2 = document.getElementById('faq-w-tab').value;
        if (!faqData[tab2]) faqData[tab2] = [];
        faqData[tab2].unshift({ q: q, a: a, authorId: u.id || '', date: new Date().toISOString().split('T')[0] });
    }
    faqSaveData();
    faqCloseWrite();
    qnaRender();
    showToast(editIdx >= 0 ? '수정되었습니다.' : 'FAQ가 추가되었습니다.', 'success');
}

async function faqDelete(tab, idx) {
    if (!await showConfirm('이 FAQ를 삭제하시겠습니까?')) return;
    var u = faqCurrentUser();
    var item = (faqData[tab] || [])[idx];
    if (!item || u.id !== item.authorId) { showToast('삭제 권한이 없습니다.', 'error'); return; }
    faqData[tab].splice(idx, 1);
    faqSaveData();
    qnaRender();
    showToast('삭제되었습니다.', 'success');
}

function faqOpenTabMgr() {
    faqEnsureData();
    var overlay = document.createElement('div');
    overlay.className = 'goal-modal-overlay';
    overlay.id = 'faq-tab-overlay';
    overlay.innerHTML = '<div class="goal-modal" style="width:380px;">' +
        '<div class="goal-modal-title">탭 관리</div>' +
        '<div id="faq-tab-list" style="max-height:240px;overflow-y:auto;margin-bottom:12px;"></div>' +
        '<div style="display:flex;gap:8px;">' +
        '<input class="eval-editor-input" id="faq-tab-new" placeholder="새 탭 이름" style="flex:1;" onkeydown="if(event.key===\'Enter\')faqAddTab()">' +
        '<button class="eval-editor-save" onclick="faqAddTab()">추가</button>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;margin-top:16px;">' +
        '<button class="eval-editor-cancel" onclick="faqCloseTabMgr()">닫기</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
    faqRenderTabList();
}

function faqRenderTabList() {
    var el = document.getElementById('faq-tab-list');
    if (!el) return;
    el.innerHTML = faqTabs.length === 0
        ? '<div style="color:#bbb;font-size:13px;padding:8px 0;">탭이 없습니다.</div>'
        : faqTabs.map(function(t, i) {
            return '<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f5f5f5;">' +
                '<span style="font-size:13px;color:#333;">' + t + '</span>' +
                '<button class="eval-view-btn" style="color:#e05070;" onclick="faqDelTab(\'' + t.replace(/'/g,"\\'") + '\')">삭제</button>' +
                '</div>';
        }).join('');
}

function faqAddTab() {
    var v = (document.getElementById('faq-tab-new').value || '').trim();
    if (!v) return;
    if (faqTabs.indexOf(v) >= 0) { showToast('이미 존재하는 탭입니다.', 'error'); return; }
    faqTabs.push(v);
    if (!faqData[v]) faqData[v] = [];
    faqSaveData();
    document.getElementById('faq-tab-new').value = '';
    faqRenderTabList();
    faqRenderTabBar();
    showToast('"' + v + '" 탭이 추가되었습니다.', 'success');
}

async function faqDelTab(tab) {
    if (!await showConfirm('"' + tab + '" 탭을 삭제하시겠습니까? 탭 안의 FAQ도 함께 삭제됩니다.')) return;
    faqTabs = faqTabs.filter(function(t) { return t !== tab; });
    delete faqData[tab];
    if (qnaCurrentTab === tab) qnaCurrentTab = faqTabs[0] || '';
    faqSaveData();
    faqRenderTabList();
    faqRenderTabBar();
    qnaRender();
}

function faqCloseTabMgr() {
    var el = document.getElementById('faq-tab-overlay');
    if (el) el.remove();
}

// ===== 인사발령 =====

// 처리 대기 신청 목록 (신규 신청 시 여기에 추가)
let apptRequests = [
    { id:'REQ-001', reqDate:'2025-06-28', empId:'E003', empName:'박민수', type:'보직', curDept:'개발팀', curPos:'사원', newDept:'개발팀', newPos:'대리', corp:'케어링', company:'케어링 본사', apptDate:'2025-07-01', note:'', status:'대기', processor:'' },
    { id:'REQ-002', reqDate:'2025-06-29', empId:'E005', empName:'최동욱', type:'전적', curDept:'영업팀', curPos:'사원', newDept:'개발팀', newPos:'사원', corp:'케어링', company:'케어링 본사', apptDate:'2025-07-01', note:'부서 이동 요청', status:'승인', processor:'인사팀장' },
    { id:'REQ-003', reqDate:'2025-07-01', empId:'E008', empName:'임수연', type:'보직', curDept:'행정팀', curPos:'대리', newDept:'행정팀', newPos:'과장', corp:'케어링커뮤니티케어', company:'케어링커뮤니티케어 본사', apptDate:'2025-07-15', note:'', status:'대기', processor:'' },
    { id:'REQ-004', reqDate:'2025-07-02', empId:'E013', empName:'배현우', type:'전적', curDept:'요양팀', curPos:'대리', newDept:'사회복지팀', newPos:'대리', corp:'선하다', company:'선하다 본사', apptDate:'2025-08-01', note:'본인 희망', status:'반려', processor:'인사팀장' },
];

// 완료된 발령 내역
let apptHistory = [
    { date:'2025-07-01', empId:'E001', empName:'김철수',  type:'보직', beforeDept:'개발팀', beforePos:'대리',   afterDept:'개발팀',    afterPos:'과장',   corp:'케어링',           processor:'인사팀장', note:'' },
    { date:'2025-07-01', empId:'E006', empName:'강지현',  type:'보직', beforeDept:'간호팀', beforePos:'과장',   afterDept:'간호팀',    afterPos:'팀장',   corp:'케어링커뮤니티케어', processor:'인사팀장', note:'' },
    { date:'2025-04-01', empId:'E009', empName:'한정민',  type:'전적', beforeDept:'간호팀', beforePos:'팀장',   afterDept:'요양팀',    afterPos:'팀장',   corp:'케어링케어',        processor:'인사팀장', note:'조직 개편' },
    { date:'2025-04-01', empId:'E012', empName:'문소희',  type:'전적', beforeDept:'행정팀', beforePos:'팀장',   afterDept:'사회복지팀',afterPos:'팀장',   corp:'선하다',           processor:'인사팀장', note:'' },
    { date:'2025-01-01', empId:'E004', empName:'정수진',  type:'보직', beforeDept:'인사팀', beforePos:'대리',   afterDept:'인사팀',    afterPos:'과장',   corp:'케어링',           processor:'인사팀장', note:'' },
    { date:'2025-01-01', empId:'E015', empName:'장민호',  type:'전적', beforeDept:'개발팀', beforePos:'차장',   afterDept:'개발팀',    afterPos:'부장',   corp:'케어링',           processor:'인사팀장', note:'직무 확대' },
    { date:'2024-07-01', empId:'E007', empName:'윤성호',  type:'보직', beforeDept:'사회복지팀', beforePos:'대리', afterDept:'사회복지팀', afterPos:'과장', corp:'케어링커뮤니티케어', processor:'인사팀장', note:'' },
    { date:'2025-12-31', empId:'E014', empName:'신예진',  type:'퇴직', beforeDept:'행정팀', beforePos:'사원',   afterDept:'-',         afterPos:'-',      corp:'선하다',           processor:'인사팀장', note:'계약만료' },
];

const APPT_HIST_PAGE = 8;
let apptHistPage = 1;
var apptHistFilters = { type: '', search: '' };

// ── 발령신청 ──────────────────────────────────────

var APPT_BADGE_COLORS = {
    'A01': 'hire', 'A02': 'retire', 'A03': 'leave',
    'A04': 'return', 'A05': 'transfer', 'A06': 'promo', 'A07': 'dual'
};

var APPT_TYPE_GUIDE = {
    '입사': {
        cls: 'hire',
        desc: '신규 직원이 조직에 합류하는 발령입니다. 신규·경력·계약 입사를 포함합니다.',
        checklist: [
            '성명 및 입사예정일 입력',
            '법인 및 사업장 배정',
            '부서 · 직위 지정',
            '고용형태 선택 (정규직/계약직 등)',
            '입사서류 첨부 권장',
        ],
        notes: [
            '사번은 인사팀 승인 후 자동 발급됩니다.',
            '입사서류 첨부 시 AI 자동 입력 기능이 추후 지원될 예정입니다.',
        ]
    },
    '퇴직': {
        cls: 'retire',
        desc: '재직 관계가 종료되는 발령입니다. 자진퇴직·계약만료·권고사직 등을 포함합니다.',
        checklist: [
            '직원 검색 후 현재 정보 확인',
            '퇴직예정일 입력',
            '퇴직사유 선택',
        ],
        notes: [
            '퇴직금 · 연차 정산은 승인 처리 시 체크리스트에서 결정합니다.',
            '권고사직의 경우 별도 협의 절차가 필요할 수 있습니다.',
            '미사용 연차가 있는 경우 인사팀 확인이 필요합니다.',
        ]
    },
    '휴직': {
        cls: 'leave',
        desc: '질병·육아·기타 사유로 일정 기간 근무를 중단하는 발령입니다.',
        checklist: [
            '직원 검색 후 현재 정보 확인',
            '휴직구분 선택 (육아·질병·가족돌봄 등)',
            '휴직시작일 및 복직예정일 입력',
        ],
        notes: [
            '육아휴직은 최대 1년 (부부 합산 1년 6개월) 사용 가능합니다.',
            '질병휴직은 진단서 등 증빙서류가 필요합니다.',
            '복직 시 반드시 별도의 복직 발령을 신청하세요.',
        ]
    },
    '복직': {
        cls: 'return',
        desc: '휴직 종료 후 원래 직무로 복귀하는 발령입니다.',
        checklist: [
            '직원 검색 후 현재 휴직 상태 확인',
            '복직예정일 입력',
        ],
        notes: [
            '원칙적으로 휴직 전 부서 · 직무로 복귀합니다.',
            '직무 변경이 필요한 경우 복직 후 보직 발령을 별도로 신청하세요.',
        ]
    },
    '전적': {
        cls: 'transfer',
        desc: '소속 법인 또는 사업장을 변경하는 발령입니다. 법인내 · 법인간 이동을 포함합니다.',
        checklist: [
            '직원 검색 후 현재 법인 · 사업장 확인',
            '새 법인 및 사업장 선택',
            '새 부서 · 직위 지정',
            '발령예정일 입력',
        ],
        notes: [
            '법인간 이동 시 전적보상금 지급 여부를 확인하세요.',
            '4대보험 처리 변경이 발생할 수 있습니다.',
        ]
    },
    '보직': {
        cls: 'promo',
        desc: '부서 · 직무 · 직위를 변경하는 발령입니다. 부서이동 · 직위변경을 포함합니다.',
        checklist: [
            '직원 검색 후 현재 부서 · 직위 확인',
            '새 부서 선택',
            '새 직위 입력',
            '발령예정일 입력',
        ],
        notes: [
            '동일 법인 · 사업장 내 이동에 해당합니다.',
            '법인 · 사업장 변경이 수반되는 경우 전적 발령을 이용하세요.',
        ]
    },
    '겸직': {
        cls: 'dual',
        desc: '현재 직무를 유지하면서 다른 직무를 추가로 담당하는 발령입니다.',
        checklist: [
            '직원 검색 후 현재 직무 확인',
            '겸직 부서 · 직위 지정',
            '겸직시작일 및 종료예정일 입력',
        ],
        notes: [
            '겸직 중에는 주 직무가 유지됩니다.',
            '겸직 종료 후 별도 해제 발령이 필요할 수 있습니다.',
        ]
    },
};

function apptHelperRender(type) {
    var body = document.getElementById('apptreq-helper-body');
    if (!body) return;
    var helperEl = document.getElementById('apptreq-helper');

    if (!type) {
        if (helperEl) helperEl.style.display = 'none';
        body.innerHTML = '';
        return;
    }
    if (helperEl) helperEl.style.display = '';

    var guide = APPT_TYPE_GUIDE[type];
    if (!guide) { body.innerHTML = ''; return; }

    var checkHtml = guide.checklist.map(function(item) {
        return '<li class="aphelp-chk-item"><span class="aphelp-chk-icon">✓</span><span>' + escHtml(item) + '</span></li>';
    }).join('');

    var noteHtml = guide.notes.map(function(note) {
        return '<li class="aphelp-note-item">' + escHtml(note) + '</li>';
    }).join('');

    body.innerHTML =
        '<div class="aphelp-head">' +
            '<span class="aphelp-badge aphelp-badge-' + guide.cls + '">' + escHtml(type) + '</span>' +
            '<p class="aphelp-typedesc">' + escHtml(guide.desc) + '</p>' +
        '</div>' +
        '<div class="aphelp-block">' +
            '<div class="aphelp-block-title">입력 체크리스트</div>' +
            '<ul class="aphelp-chk-list">' + checkHtml + '</ul>' +
        '</div>' +
        '<div class="aphelp-block">' +
            '<div class="aphelp-block-title">유의사항</div>' +
            '<ul class="aphelp-note-list">' + noteHtml + '</ul>' +
        '</div>';
}

// ─── dreq 피커 모달 ───────────────────────────────────────
var _dreqPickerItems = [];
var _dreqPickerTarget = null;
var _dreqPickerCallback = null;
var _dreqPickerSelected = null;

function dreqPickerOpen(title, items, targetId, callback) {
    _dreqPickerItems = items.slice();
    _dreqPickerTarget = targetId;
    _dreqPickerCallback = callback || null;
    _dreqPickerSelected = null;
    var titleEl = document.getElementById('dreq-picker-title');
    if (titleEl) titleEl.textContent = title;
    var colHd = document.getElementById('dreq-picker-col-hd');
    if (colHd) colHd.textContent = title ? title.replace(' 선택', '') : '항목';
    var queryEl = document.getElementById('dreq-picker-query');
    if (queryEl) queryEl.value = '';
    dreqPickerFilter();
    var modal = document.getElementById('dreq-picker-modal');
    if (modal) modal.style.display = 'flex';
    setTimeout(function(){ if (queryEl) queryEl.focus(); }, 50);
}

function dreqPickerFilter() {
    var q = (document.getElementById('dreq-picker-query')?.value || '').toLowerCase();
    var filtered = _dreqPickerItems.filter(function(it){ return !q || it.toLowerCase().includes(q); });
    dreqPickerRenderList(filtered);
}

function dreqPickerRenderList(items) {
    var list = document.getElementById('dreq-picker-list');
    if (!list) return;
    var sel = _dreqPickerSelected;
    list.innerHTML = items.length
        ? items.map(function(it){
            var safe = it.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
            var isSel = sel === it;
            return '<tr onclick="dreqPickerRowClick(\'' + safe + '\')" ondblclick="dreqPickerConfirm()" style="cursor:pointer;background:' + (isSel ? '#FFF0F3' : '#fff') + ';">' +
                '<td style="padding:9px 14px;font-size:13px;border-bottom:1px solid #eee;color:' + (isSel ? '#F36178' : '#222') + ';font-family:inherit;font-weight:' + (isSel ? '600' : '400') + ';">' + escHtml(it) + '</td>' +
                '</tr>';
        }).join('')
        : '<tr><td style="padding:24px;text-align:center;color:#bbb;font-size:13px;">검색 결과가 없습니다</td></tr>';
}

function dreqPickerRowClick(val) {
    _dreqPickerSelected = val;
    dreqPickerFilter();
}

function dreqPickerConfirm() {
    if (!_dreqPickerSelected) { showToast('항목을 선택해주세요.', 'error'); return; }
    if (_dreqPickerTarget) {
        var el = document.getElementById(_dreqPickerTarget);
        if (el) el.value = _dreqPickerSelected;
    }
    if (_dreqPickerCallback) _dreqPickerCallback(_dreqPickerSelected);
    dreqPickerClose();
}

function dreqPickerClose() {
    var modal = document.getElementById('dreq-picker-modal');
    if (modal) modal.style.display = 'none';
    _dreqPickerSelected = null;
}

function apptDreqCorpSearch(corpId, compId) {
    if (typeof scompEnsureData === 'function') scompEnsureData();
    var corps = (typeof scompList !== 'undefined' ? scompList : [])
        .filter(function(c){ return c.active !== false; })
        .map(function(c){ return c.name; });
    dreqPickerOpen('법인 선택', corps, corpId, function() {
        var compEl = document.getElementById(compId);
        if (compEl) compEl.value = '';
    });
}

function apptDreqCompanySearch(corpId, compId) {
    if (typeof swpEnsureData === 'function') swpEnsureData();
    if (typeof scompEnsureData === 'function') scompEnsureData();
    var corpName = (document.getElementById(corpId)?.value || '');
    if (!corpName) { showToast('먼저 법인을 선택해주세요.', 'info'); return; }
    var corps = (typeof scompList !== 'undefined' ? scompList : []);
    var corp = corps.find(function(c){ return c.name === corpName; });
    var wps = (typeof swpList !== 'undefined' ? swpList : [])
        .filter(function(w){ return w.active !== false && (!corp || w.corpId === corp.id); })
        .map(function(w){ return w.name; });
    dreqPickerOpen('사업장 선택', wps, compId);
}

function apptDreqPosSearch(targetId) {
    var labels = getCodeValues('HR_POSITION').map(function(c){ return c.label; });
    dreqPickerOpen('직위 선택', labels, targetId);
}

function apptDreqEmpTypeSearch(targetId) {
    var labels = getCodeValues('HR_EMPTYPE').map(function(c){ return c.label; });
    dreqPickerOpen('고용형태 선택', labels, targetId);
}

// ─── 입사서류 첨부 ──────────────────────────────────────
var _dreqFiles = [];

function dreqFilesAdd(event) {
    Array.from(event.target.files).forEach(function(f){ _dreqFiles.push(f); });
    dreqFilesRender();
    event.target.value = '';
}

function dreqFilesDrop(event) {
    event.preventDefault();
    event.currentTarget.classList.remove('drag-over');
    Array.from(event.dataTransfer.files).forEach(function(f){ _dreqFiles.push(f); });
    dreqFilesRender();
}

function dreqFilesDragover(event) {
    event.preventDefault();
    event.currentTarget.classList.add('drag-over');
}

function dreqFilesDragleave(event) {
    event.currentTarget.classList.remove('drag-over');
}

function dreqFilesRemove(idx) {
    _dreqFiles.splice(idx, 1);
    dreqFilesRender();
}

function dreqFilesRender() {
    var el = document.getElementById('dreq-file-list');
    if (!el) return;
    if (_dreqFiles.length === 0) { el.innerHTML = ''; return; }
    el.innerHTML = _dreqFiles.map(function(f, i){
        var kb = f.size < 1024*1024
            ? Math.round(f.size / 1024) + ' KB'
            : (f.size / 1024 / 1024).toFixed(1) + ' MB';
        return '<div class="dreq-file-item">' +
            '<span class="dreq-file-name">' + escHtml(f.name) + '</span>' +
            '<span class="dreq-file-size">' + kb + '</span>' +
            '<button type="button" class="dreq-file-remove" onclick="dreqFilesRemove(' + i + ')">×</button>' +
            '</div>';
    }).join('');
}

function _dreqFileSection() {
    return '<div class="apptreq-card">' +
        '<div class="apptreq-card-hd"><span class="apptreq-card-dot"></span>입사서류 첨부</div>' +
        '<div class="apptreq-card-body">' +
        '<div class="dreq-file-zone" onclick="document.getElementById(\'dreq-file-input\').click()" ' +
        'ondrop="dreqFilesDrop(event)" ondragover="dreqFilesDragover(event)" ondragleave="dreqFilesDragleave(event)">' +
        '<div class="dreq-file-zone-icon">📎</div>' +
        '<div class="dreq-file-zone-text">파일을 드래그하거나 클릭하여 업로드</div>' +
        '<div class="dreq-file-zone-hint">이력서, 재직증명서, 학위증명서 등 (복수 선택 가능)</div>' +
        '<input type="file" id="dreq-file-input" multiple style="display:none;" onchange="dreqFilesAdd(event)">' +
        '</div>' +
        '<div id="dreq-file-list"></div>' +
        '<div class="dreq-ai-hint">' +
        '<span class="dreq-ai-badge">AI</span>' +
        '<span class="dreq-ai-hint-text">첨부된 서류에서 인사정보를 자동으로 추출하는 기능이 준비 중입니다.</span>' +
        '</div>' +
        '</div></div>';
}

// ─── 인사발령신청 동적 폼 ────────────────────────────────
var _apptSelectedType = '';
var _apptDreqEmpSelected = null;

var APPT_TYPE_META = [
    { label:'입사', cls:'hire' },
    { label:'퇴직', cls:'retire' },
    { label:'휴직', cls:'leave' },
    { label:'복직', cls:'return' },
    { label:'전적', cls:'transfer' },
    { label:'보직', cls:'promo' },
    { label:'겸직', cls:'dual' },
];

function apptReqRenderTypeGrid() {
    var el = document.getElementById('apptreq-type-grid');
    if (!el) return;
    el.innerHTML = APPT_TYPE_META.map(function(t) {
        return '<button type="button" class="sub-tab-btn" onclick="apptReqSelectType(\'' + t.label + '\')">' + t.label + '</button>';
    }).join('');
}

function apptReqSelectType(type) {
    _apptSelectedType = type;
    _apptDreqEmpSelected = null;
    _dreqFiles = [];
    document.querySelectorAll('#apptreq-type-grid .sub-tab-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.textContent === type);
    });
    var body = document.getElementById('apptreq-form-body');
    if (body) body.innerHTML = apptReqFormHtml(type);
    var footer = document.getElementById('apptreq-footer');
    if (footer) footer.style.display = 'flex';
    apptHelperRender(type);
}

function _apptDreqBuildCorp(corpId, compId) {
    if (typeof scompEnsureData === 'function') scompEnsureData();
    var sel = document.getElementById(corpId);
    if (!sel) return;
    var corps = (typeof scompList !== 'undefined' ? scompList : []).filter(function(c){ return c.active !== false; });
    sel.innerHTML = '<option value="">선택</option>' + corps.map(function(c){ return '<option value="' + c.name + '">' + c.name + '</option>'; }).join('');
}

function _apptDreqBuildComp(corpId, compId) {
    if (typeof swpEnsureData === 'function') swpEnsureData();
    if (typeof scompEnsureData === 'function') scompEnsureData();
    var corpName = (document.getElementById(corpId)?.value || '');
    var sel = document.getElementById(compId);
    if (!sel) return;
    var corps = (typeof scompList !== 'undefined' ? scompList : []);
    var corp = corps.find(function(c){ return c.name === corpName; });
    var wps = (typeof swpList !== 'undefined' ? swpList : [])
        .filter(function(w){ return w.active !== false && (!corp || w.corpId === corp.id); });
    sel.innerHTML = '<option value="">선택</option>' + wps.map(function(w){ return '<option value="' + w.name + '">' + w.name + '</option>'; }).join('');
}

function apptDreqEmpSearchOpen() {
    _apptEmpSelected = null;
    _apptEmpAll = employees.slice();
    var modal = document.getElementById('appt-emp-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    var searchEl = document.getElementById('appt-emp-search');
    if (searchEl) searchEl.value = '';
    _apptEmpRenderList('');
    setTimeout(function(){ if (searchEl) searchEl.focus(); }, 50);
}

function apptDreqFillEmpCard(emp) {
    var ext = (typeof hrExtData !== 'undefined' ? hrExtData[emp.id] : null) || {};
    var queryEl = document.getElementById('dreq-emp-query');
    if (queryEl) queryEl.value = emp.name + ' (' + emp.id + ')';
    var card = document.getElementById('dreq-emp-card');
    if (!card) return;
    card.style.display = 'block';
    var sv = function(id, v) { var e = document.getElementById(id); if (e) e.textContent = v || ''; };
    sv('dreq-show-name', emp.name);
    sv('dreq-show-id', emp.id);
    sv('dreq-show-dept', emp.department || '');
    sv('dreq-show-pos', emp.position || '');
    sv('dreq-show-corp', ext.corp || '');
    sv('dreq-show-company', ext.company || '');
}

function apptDreqDeptSearch(targetId) {
    _hrDeptTargetId = targetId;
    hrDeptSearchOpen();
}

// ─── 동적 폼 HTML 빌더 헬퍼 ──────────────────────────────
function _dreqRow() {
    var args = Array.prototype.slice.call(arguments);
    return '<div class="apptreq-row">' + args.join('') + '</div>';
}
function _dreqField(label, inputHtml, full) {
    return '<div class="apptreq-field' + (full ? ' apptreq-field-full' : '') + '">' +
        (label ? '<label class="apptreq-label">' + label + '</label>' : '') + inputHtml + '</div>';
}
function _dreqInput(id, placeholder, attrs) {
    return '<input type="text" id="' + id + '" class="apptreq-input" placeholder="' + (placeholder||'') + '" ' + (attrs||'') + '>';
}
function _dreqSelect(id, optHtml, onChange) {
    var onch = onChange ? ' onchange="' + onChange + '"' : '';
    return '<select id="' + id + '" class="apptreq-input" style="appearance:auto"' + onch + '>' + optHtml + '</select>';
}
function _dreqDate(id) {
    return dateSplitHtml(id, 'apptreq-date');
}
function _dreqTextarea(id, placeholder) {
    return '<textarea id="' + id + '" class="apptreq-input" rows="3" style="height:auto;padding:8px 12px;resize:vertical;" placeholder="' + (placeholder||'') + '"></textarea>';
}

function _apptFormEmpSection() {
    return '<div class="apptreq-card">' +
        '<div class="apptreq-card-hd"><span class="apptreq-card-dot"></span>직원 선택</div>' +
        '<div class="apptreq-card-body">' +
        '<div class="apptreq-field" style="max-width:420px">' +
        '<label class="apptreq-label">직원 검색</label>' +
        '<div class="apptreq-input-group">' +
        '<input type="text" id="dreq-emp-query" class="apptreq-input" placeholder="이름 또는 사번으로 검색" readonly>' +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqEmpSearchOpen()">검색</button>' +
        '</div></div>' +
        '<div id="dreq-emp-card" class="dreq-emp-card" style="display:none;">' +
        '<div><span class="dreq-emp-name" id="dreq-show-name"></span>' +
        '<span class="dreq-emp-id" id="dreq-show-id"></span></div>' +
        '<div class="dreq-emp-meta"><span id="dreq-show-dept"></span>' +
        '<span class="dreq-sep">·</span><span id="dreq-show-pos"></span>' +
        '<span class="dreq-sep">·</span><span id="dreq-show-corp"></span>' +
        '<span class="dreq-sep">·</span><span id="dreq-show-company"></span></div>' +
        '</div>' +
        '</div></div>';
}

function apptReqFormHtml(type) {
    switch(type) {
        case '입사':   return _apptFormHire();
        case '퇴직':   return _apptFormRetire();
        case '휴직':   return _apptFormLeave();
        case '복직':   return _apptFormReturn();
        case '전적':   return _apptFormTransfer();
        case '보직':   return _apptFormPromo();
        case '겸직':   return _apptFormDual();
        default: return '';
    }
}

function _apptFormHire() {
    var corpBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-hire-corp', '법인 선택', 'readonly') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqCorpSearch(\'dreq-hire-corp\',\'dreq-hire-company\')">검색</button></div>';
    var compBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-hire-company', '사업장 선택', 'readonly') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqCompanySearch(\'dreq-hire-corp\',\'dreq-hire-company\')">검색</button></div>';
    var deptBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-hire-dept', '부서 선택', 'readonly') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqDeptSearch(\'dreq-hire-dept\')">검색</button></div>';
    var posBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-hire-pos', '직위 선택') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqPosSearch(\'dreq-hire-pos\')">검색</button></div>';
    var empTypeBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-hire-emptype', '고용형태 선택', 'readonly') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqEmpTypeSearch(\'dreq-hire-emptype\')">검색</button></div>';
    return '<div class="apptreq-card">' +
        '<div class="apptreq-card-hd"><span class="apptreq-card-dot"></span>입사 정보</div>' +
        '<div class="apptreq-card-body">' +
        _dreqRow(_dreqField('성명', _dreqInput('dreq-hire-name', '입사자 이름')),
                 _dreqField('입사예정일', _dreqDate('dreq-date'))) +
        _dreqRow(_dreqField('법인', corpBtn),
                 _dreqField('사업장', compBtn)) +
        _dreqRow(_dreqField('부서', deptBtn),
                 _dreqField('직위', posBtn)) +
        _dreqRow(_dreqField('고용형태', empTypeBtn)) +
        _dreqField('특이사항', _dreqTextarea('dreq-note', '특이사항 입력 (선택)'), true) +
        '</div></div>' +
        _dreqFileSection();
}

function _apptFormRetire() {
    var reasonOpts = '<option value="">선택</option><option>자진퇴직</option><option>계약만료</option><option>권고사직</option><option>기타</option>';
    return _apptFormEmpSection() +
        '<div class="apptreq-card">' +
        '<div class="apptreq-card-hd"><span class="apptreq-card-dot"></span>퇴직 정보</div>' +
        '<div class="apptreq-card-body">' +
        _dreqRow(_dreqField('퇴직예정일', _dreqDate('dreq-date')),
                 _dreqField('퇴직사유', _dreqSelect('dreq-retire-reason', reasonOpts))) +
        _dreqField('특이사항', _dreqTextarea('dreq-note', '특이사항 (선택)'), true) +
        '</div></div>';
}

function _apptFormLeave() {
    var leaveOpts = '<option value="">선택</option><option>질병휴직</option><option>육아휴직</option><option>가족돌봄휴직</option><option>개인사유</option><option>기타</option>';
    return _apptFormEmpSection() +
        '<div class="apptreq-card">' +
        '<div class="apptreq-card-hd"><span class="apptreq-card-dot"></span>휴직 정보</div>' +
        '<div class="apptreq-card-body">' +
        _dreqRow(_dreqField('휴직구분', _dreqSelect('dreq-leave-type', leaveOpts))) +
        _dreqRow(_dreqField('휴직시작일', _dreqDate('dreq-date')),
                 _dreqField('복직예정일', _dreqDate('dreq-leave-end'))) +
        _dreqField('특이사항', _dreqTextarea('dreq-note', '휴직 사유 및 특이사항'), true) +
        '</div></div>';
}

function _apptFormReturn() {
    return _apptFormEmpSection() +
        '<div class="apptreq-card">' +
        '<div class="apptreq-card-hd"><span class="apptreq-card-dot"></span>복직 정보</div>' +
        '<div class="apptreq-card-body">' +
        _dreqRow(_dreqField('복직예정일', _dreqDate('dreq-date'))) +
        _dreqField('특이사항', _dreqTextarea('dreq-note', '복직 관련 특이사항 (선택)'), true) +
        '</div></div>';
}

function _apptFormTransfer() {
    var corpBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-new-corp', '법인 선택', 'readonly') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqCorpSearch(\'dreq-new-corp\',\'dreq-new-company\')">검색</button></div>';
    var compBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-new-company', '사업장 선택', 'readonly') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqCompanySearch(\'dreq-new-corp\',\'dreq-new-company\')">검색</button></div>';
    var deptBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-new-dept', '부서 선택', 'readonly') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqDeptSearch(\'dreq-new-dept\')">검색</button></div>';
    var posBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-new-pos', '직위 선택') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqPosSearch(\'dreq-new-pos\')">검색</button></div>';
    return _apptFormEmpSection() +
        '<div class="apptreq-card">' +
        '<div class="apptreq-card-hd"><span class="apptreq-card-dot"></span>전적 정보</div>' +
        '<div class="apptreq-card-body">' +
        _dreqRow(_dreqField('새 법인', corpBtn),
                 _dreqField('새 사업장', compBtn)) +
        _dreqRow(_dreqField('새 부서', deptBtn),
                 _dreqField('새 직위', posBtn)) +
        _dreqRow(_dreqField('발령예정일', _dreqDate('dreq-date'))) +
        _dreqField('특이사항', _dreqTextarea('dreq-note', '전적 관련 특이사항 (선택)'), true) +
        '</div></div>';
}

function _apptFormPromo() {
    var deptBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-new-dept', '부서 선택', 'readonly') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqDeptSearch(\'dreq-new-dept\')">검색</button></div>';
    var posBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-new-pos', '직위 선택') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqPosSearch(\'dreq-new-pos\')">검색</button></div>';
    return _apptFormEmpSection() +
        '<div class="apptreq-card">' +
        '<div class="apptreq-card-hd"><span class="apptreq-card-dot"></span>보직 정보</div>' +
        '<div class="apptreq-card-body">' +
        _dreqRow(_dreqField('새 부서', deptBtn),
                 _dreqField('새 직위', posBtn)) +
        _dreqRow(_dreqField('발령예정일', _dreqDate('dreq-date'))) +
        _dreqField('특이사항', _dreqTextarea('dreq-note', '보직 변경 특이사항 (선택)'), true) +
        '</div></div>';
}

function _apptFormDual() {
    var deptBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-new-dept', '부서 선택', 'readonly') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqDeptSearch(\'dreq-new-dept\')">검색</button></div>';
    var posBtn = '<div class="apptreq-input-group">' + _dreqInput('dreq-new-pos', '직위 선택') +
        '<button type="button" class="apptreq-search-btn" onclick="apptDreqPosSearch(\'dreq-new-pos\')">검색</button></div>';
    return _apptFormEmpSection() +
        '<div class="apptreq-card">' +
        '<div class="apptreq-card-hd"><span class="apptreq-card-dot"></span>겸직 정보</div>' +
        '<div class="apptreq-card-body">' +
        _dreqRow(_dreqField('겸직 부서', deptBtn),
                 _dreqField('겸직 직위', posBtn)) +
        _dreqRow(_dreqField('겸직시작일', _dreqDate('dreq-date')),
                 _dreqField('종료예정일', _dreqDate('dreq-dual-end'))) +
        _dreqField('특이사항', _dreqTextarea('dreq-note', '겸직 관련 특이사항 (선택)'), true) +
        '</div></div>';
}

function apptReqInit() {
    var saved = localStorage.getItem('apptRequests_v1');
    if (saved) { try { var p = JSON.parse(saved); if (p.length) apptRequests.splice(0, apptRequests.length, ...p); } catch(e){} }
    _apptSelectedType = '';
    _apptDreqEmpSelected = null;
    apptReqRenderTypeGrid();
    apptHelperRender('');
    apptReqSideRender();
}

function apptReqBuildCorp() {
    if (typeof scompEnsureData === 'function') scompEnsureData();
    var sel = document.getElementById('appt-req-corp');
    if (!sel) return;
    var corps = (typeof scompList !== 'undefined' ? scompList : []).filter(function(c){ return c.active !== false; });
    sel.innerHTML = '<option value="">선택</option>' +
        corps.map(function(c){ return '<option value="' + c.name + '">' + c.name + '</option>'; }).join('');
    apptReqBuildCompany();
}

function apptReqBuildCompany() {
    if (typeof swpEnsureData === 'function') swpEnsureData();
    if (typeof scompEnsureData === 'function') scompEnsureData();
    var corpName = (document.getElementById('appt-req-corp')?.value || '');
    var sel = document.getElementById('appt-req-company');
    if (!sel) return;
    var corps = (typeof scompList !== 'undefined' ? scompList : []);
    var corp  = corps.find(function(c){ return c.name === corpName; });
    var workplaces = (typeof swpList !== 'undefined' ? swpList : [])
        .filter(function(w){ return w.active !== false && (!corp || w.corpId === corp.id); });
    sel.innerHTML = '<option value="">선택</option>' +
        workplaces.map(function(w){ return '<option value="' + w.name + '">' + w.name + '</option>'; }).join('');
}

function apptReqEmpLookup() {
    var empId = (document.getElementById('appt-req-id')?.value || '').trim();
    var emp = employees.find(function(e){ return e.id === empId; });
    var ext = emp ? (hrExtData[emp.id] || {}) : {};
    var sv = function(id, v){ var el = document.getElementById(id); if (el) el.value = v || ''; };
    if (emp) {
        sv('appt-req-name',       emp.name);
        sv('appt-req-cur-dept',   emp.department);
        sv('appt-req-cur-pos',    emp.position);
        sv('appt-req-cur-corp',   ext.corp || '');
        sv('appt-req-cur-company',ext.company || '');
    } else {
        ['appt-req-name','appt-req-cur-dept','appt-req-cur-pos','appt-req-cur-corp','appt-req-cur-company']
            .forEach(function(id){ sv(id,''); });
    }
}

var _apptEmpSelected = null;
var _apptEmpAll = [];

function apptReqEmpSearch() {
    _apptEmpSelected = null;
    _apptEmpAll = employees.slice();
    var query = (document.getElementById('appt-req-id')?.value || '').trim();
    var modal = document.getElementById('appt-emp-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    var searchEl = document.getElementById('appt-emp-search');
    if (searchEl) searchEl.value = query;
    _apptEmpRenderList(query.toLowerCase());
    setTimeout(function(){ if (searchEl) searchEl.focus(); }, 50);
}

function _apptEmpRenderList(q) {
    var matched = _apptEmpAll.filter(function(e){
        return !q || e.id.toLowerCase().includes(q) || e.name.toLowerCase().includes(q);
    });
    var tbody = document.getElementById('appt-emp-list');
    if (!tbody) return;
    tbody.innerHTML = matched.slice(0, 100).map(function(e){
        var sel = _apptEmpSelected && _apptEmpSelected.id === e.id;
        var bg = sel ? 'background:#fff0f3;' : '';
        var fw = sel ? '700' : '500';
        return '<tr onclick="apptEmpModalSelect(\'' + e.id + '\')" ondblclick="apptEmpModalConfirm()" style="cursor:pointer;' + bg + '">' +
            '<td style="padding:7px 12px;font-size:12px;border-bottom:1px solid #f0f0f0;font-weight:' + fw + ';color:#555;">' + escHtml(e.id) + '</td>' +
            '<td style="padding:7px 12px;font-size:13px;border-bottom:1px solid #f0f0f0;font-weight:' + fw + ';color:#222;border-left:1px solid #f0f0f0;">' + escHtml(e.name) + '</td>' +
            '<td style="padding:7px 12px;font-size:12px;border-bottom:1px solid #f0f0f0;color:#888;border-left:1px solid #f0f0f0;">' + escHtml(e.department||'') + '</td>' +
            '</tr>';
    }).join('') || '<tr><td colspan="3" style="padding:24px;text-align:center;color:#bbb;font-size:13px;">검색 결과가 없습니다</td></tr>';
}

function apptEmpModalFilter() {
    var q = (document.getElementById('appt-emp-search')?.value || '').toLowerCase();
    _apptEmpRenderList(q);
}

function apptEmpModalSelect(empId) {
    _apptEmpSelected = _apptEmpAll.find(function(e){ return e.id === empId; }) || null;
    var q = (document.getElementById('appt-emp-search')?.value || '').toLowerCase();
    _apptEmpRenderList(q);
}

function apptEmpModalClose() {
    var modal = document.getElementById('appt-emp-modal');
    if (modal) modal.style.display = 'none';
    _apptEmpSelected = null;
}

function apptEmpModalConfirm() {
    if (!_apptEmpSelected) { showToast('직원을 선택해주세요.', 'error'); return; }
    var selected = _apptEmpSelected;
    apptEmpModalClose();
    if (_apptSelectedType && _apptSelectedType !== '입사') {
        _apptDreqEmpSelected = selected;
        apptDreqFillEmpCard(selected);
        return;
    }
    var idEl = document.getElementById('appt-req-id');
    if (idEl) { idEl.value = selected.id; apptReqEmpLookup(); }
}

function apptReqDeptSearch() {
    _hrDeptTargetId = 'appt-req-dept';
    hrDeptSearchOpen();
}

function apptRequestSubmit() {
    if (!_apptSelectedType) { showToast('발령 구분을 선택해주세요.', 'error'); return; }
    var type = _apptSelectedType;
    var date = (document.getElementById('dreq-date')?.value || '').trim();
    var note = (document.getElementById('dreq-note')?.value || '').trim();
    var seq = apptRequests.reduce(function(max, r){
        var n = parseInt((r.id||'').replace('REQ-',''), 10) || 0; return n > max ? n : max;
    }, 0) + 1;
    var req = {
        id: 'REQ-' + String(seq).padStart(3,'0'),
        reqDate: new Date().toISOString().split('T')[0],
        type, note, status: '대기', processor: ''
    };

    if (type === '입사') {
        var hireName = (document.getElementById('dreq-hire-name')?.value || '').trim();
        if (!hireName) { showToast('성명을 입력해주세요.', 'error'); return; }
        if (!date) { showToast('입사예정일을 입력해주세요.', 'error'); return; }
        Object.assign(req, {
            empId: '', empName: hireName,
            curDept: '', curPos: '',
            newDept: (document.getElementById('dreq-hire-dept')?.value || '').trim(),
            newPos:  (document.getElementById('dreq-hire-pos')?.value || '').trim(),
            corp:    document.getElementById('dreq-hire-corp')?.value || '',
            company: document.getElementById('dreq-hire-company')?.value || '',
            empType: document.getElementById('dreq-hire-emptype')?.value || '',
            apptDate: date,
        });
    } else {
        if (!_apptDreqEmpSelected) { showToast('직원을 검색하여 선택해주세요.', 'error'); return; }
        if (!date) { showToast('발령 예정일을 입력해주세요.', 'error'); return; }
        var emp = _apptDreqEmpSelected;
        var ext = (typeof hrExtData !== 'undefined' ? hrExtData[emp.id] : null) || {};
        Object.assign(req, {
            empId: emp.id, empName: emp.name,
            curDept: emp.department, curPos: emp.position,
            newDept: (document.getElementById('dreq-new-dept')?.value || '').trim() || emp.department,
            newPos:  (document.getElementById('dreq-new-pos')?.value || '').trim() || emp.position,
            corp:    document.getElementById('dreq-new-corp')?.value || ext.corp || '',
            company: document.getElementById('dreq-new-company')?.value || ext.company || '',
            apptDate: date,
        });
        if (type === '퇴직') {
            req.retireReason = document.getElementById('dreq-retire-reason')?.value || '';
        } else if (type === '휴직') {
            req.leaveType = document.getElementById('dreq-leave-type')?.value || '';
            req.leaveEnd  = document.getElementById('dreq-leave-end')?.value || '';
        } else if (type === '겸직') {
            req.dualEnd = document.getElementById('dreq-dual-end')?.value || '';
        }
    }

    apptRequests.unshift(req);
    localStorage.setItem('apptRequests_v1', JSON.stringify(apptRequests));
    showToast((req.empName || '신규') + ' 발령신청이 제출되었습니다.');
    apptRequestReset();
    apptReqSideRender();
}

function apptRequestReset() {
    _apptSelectedType = '';
    _apptDreqEmpSelected = null;
    _dreqFiles = [];
    document.querySelectorAll('#apptreq-type-grid .sub-tab-btn').forEach(function(btn){ btn.classList.remove('active'); });
    var body = document.getElementById('apptreq-form-body');
    if (body) body.innerHTML = '';
    var footer = document.getElementById('apptreq-footer');
    if (footer) footer.style.display = 'none';
    apptHelperRender('');
}

function apptTypeBadge(type) {
    var map = { '입사':'hire', '퇴직':'retire', '휴직':'leave', '복직':'return', '전적':'transfer', '보직':'promo', '겸직':'dual' };
    var cls = map[type] ? ' appt-type-' + map[type] : '';
    return '<span class="appt-type-badge' + cls + '">' + escHtml(type) + '</span>';
}

function apptReqSideRender() {
    var container = document.getElementById('appt-req-side-list');
    if (!container) return;
    var list = apptRequests.slice(0, 8);
    if (list.length === 0) {
        container.innerHTML = '<div class="appt-side-empty">신청 내역이 없습니다</div>';
        return;
    }
    var badge = function(s) {
        var cls = s === '대기' ? 'appt-badge-wait' : s === '승인' ? 'appt-badge-ok' : 'appt-badge-reject';
        return '<span class="appt-status-badge ' + cls + '">' + s + '</span>';
    };
    container.innerHTML = '<table class="bd-tbl appt-req-side-tbl"><thead><tr>' +
        '<th>신청일</th><th>성명</th><th>구분</th><th>발령예정일</th><th>상태</th>' +
        '</tr></thead><tbody>' +
        list.map(function(r){
            return '<tr>' +
                '<td>' + r.reqDate + '</td>' +
                '<td style="font-weight:600">' + escHtml(r.empName) + '</td>' +
                '<td>' + apptTypeBadge(r.type) + '</td>' +
                '<td>' + r.apptDate + '</td>' +
                '<td>' + badge(r.status) + '</td>' +
            '</tr>';
        }).join('') +
        '</tbody></table>';
}

// ── 발령처리 ──────────────────────────────────────
var _apptApprovePendingId = null;

function apptGetLocType(companyName) {
    if (!companyName) return '본사';
    if (typeof swpEnsureData === 'function') swpEnsureData();
    var wp = (typeof swpList !== 'undefined' ? swpList : []).find(function(w) { return w.name === companyName; });
    return (wp && wp.facilityType) ? '기관' : '본사';
}

function apptApproveOpen(reqId) {
    _apptApprovePendingId = reqId;
    document.querySelectorAll('input[name="apv-corp"]').forEach(r => r.checked = false);
    document.querySelectorAll('input[name="apv-dir"]').forEach(r => r.checked = false);
    document.getElementById('apv-transfer-pay').checked = false;
    document.getElementById('apv-annual-leave').checked = false;
    document.getElementById('apv-annual-count').value = '';
    document.getElementById('apv-annual-detail').style.display = 'none';
    document.getElementById('apv-severance').checked = false;
    document.getElementById('apv-note').value = '';

    var req = apptRequests.find(r => r.id === reqId);
    var autoDetected = false;
    if (req) {
        // Header info
        document.getElementById('apv-info-emp').textContent = req.empName;
        document.getElementById('apv-info-badge').textContent = req.type;

        // Auto-detect 법인 구분
        var ext = (typeof hrExtData !== 'undefined' ? hrExtData[req.empId] : null) || {};
        var curCorp = ext.corp || '';
        var newCorp = req.corp || '';
        if (curCorp && newCorp) {
            var corpVal = (curCorp === newCorp) ? '법인내 이동' : '법인간 이동';
            var corpEl = document.querySelector('input[name="apv-corp"][value="' + corpVal + '"]');
            if (corpEl) { corpEl.checked = true; autoDetected = true; }
        }

        // Auto-detect 이동 방향
        var curCompany = ext.company || '';
        var newCompany = req.company || '';
        var curType = apptGetLocType(curCompany);
        var newType = apptGetLocType(newCompany);
        var dirMap = { '본사→본사':'본사→본사', '본사→기관':'본사→센터', '기관→본사':'센터→본사', '기관→기관':'센터→센터' };
        var dirVal = dirMap[curType + '→' + newType];
        if (dirVal) {
            var dirEl = document.querySelector('input[name="apv-dir"][value="' + dirVal + '"]');
            if (dirEl) { dirEl.checked = true; autoDetected = true; }
        }
    }
    var chip = document.getElementById('apv-auto-chip');
    if (chip) chip.style.display = autoDetected ? 'inline-block' : 'none';

    document.getElementById('appt-approve-modal').style.display = 'flex';
}

function apptApproveClose() {
    document.getElementById('appt-approve-modal').style.display = 'none';
    _apptApprovePendingId = null;
}

function apvToggleAnnual(cb) {
    var d = document.getElementById('apv-annual-detail');
    d.style.display = cb.checked ? 'flex' : 'none';
    if (!cb.checked) document.getElementById('apv-annual-count').value = '';
}

function apptApproveConfirm() {
    var corpEl = document.querySelector('input[name="apv-corp"]:checked');
    var dirEl  = document.querySelector('input[name="apv-dir"]:checked');
    if (!corpEl) { showToast('법인 구분을 선택해주세요.', 'error'); return; }
    if (!dirEl)  { showToast('이동 방향을 선택해주세요.', 'error'); return; }
    var annualChecked = document.getElementById('apv-annual-leave').checked;
    var extra = {
        corpType: corpEl.value,
        moveDir: dirEl.value,
        transferPay: document.getElementById('apv-transfer-pay').checked,
        annualLeave: annualChecked,
        annualCount: annualChecked ? (parseInt(document.getElementById('apv-annual-count').value) || 0) : null,
        severance: document.getElementById('apv-severance').checked,
        procNote: document.getElementById('apv-note').value.trim()
    };
    var id = _apptApprovePendingId;
    apptApproveClose();
    apptProcess(id, '승인', extra);
}

function apptProcessRender() {
    const statusF = document.getElementById('appt-proc-status-filter')?.value || '';
    const query   = (document.getElementById('appt-proc-search')?.value || '').trim().toLowerCase();
    const filtered = apptRequests.filter(r => {
        if (statusF && r.status !== statusF) return false;
        if (query && !r.empId.toLowerCase().includes(query) && !r.empName.toLowerCase().includes(query)) return false;
        return true;
    });
    const tbody = document.getElementById('appt-proc-tbody');
    if (!tbody) return;
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="bd-empty">신청 내역이 없습니다.</td></tr>`;
        return;
    }
    const statusBadge = s => {
        const cls = s === '대기' ? 'appt-badge-wait' : s === '승인' ? 'appt-badge-ok' : 'appt-badge-reject';
        return `<span class="appt-status-badge ${cls}">${s}</span>`;
    };
    tbody.innerHTML = filtered.map(r => `
        <tr>
            <td>${r.reqDate}</td>
            <td>${r.empId}</td>
            <td>${r.empName}</td>
            <td>${apptTypeBadge(r.type)}</td>
            <td>${r.curDept} / ${r.curPos}</td>
            <td>${r.newDept} / ${r.newPos}</td>
            <td>${r.apptDate}</td>
            <td>${statusBadge(r.status)}</td>
            <td>
                ${r.status === '대기' ? `
                    <button class="appt-proc-btn appt-proc-ok"  onclick="apptApproveOpen('${r.id}')">승인</button>
                    <button class="appt-proc-btn appt-proc-rej" onclick="apptProcess('${r.id}','반려')">반려</button>
                ` : `<span style="color:#bbb;font-size:12px;">처리완료</span>`}
            </td>
        </tr>`).join('');
}

function apptProcess(reqId, action, extra) {
    const req = apptRequests.find(r => r.id === reqId);
    if (!req) return;
    req.status = action;
    req.processor = '인사팀장';
    if (action === '승인') {
        apptHistory.unshift({
            date: req.apptDate, empId: req.empId, empName: req.empName,
            type: req.type, beforeDept: req.curDept, beforePos: req.curPos,
            afterDept: req.newDept, afterPos: req.newPos, corp: req.corp,
            processor: '인사팀장', note: req.note,
            ...(extra || {})
        });
        // employees 정보 업데이트
        const emp = employees.find(e => e.id === req.empId);
        if (emp) { emp.department = req.newDept; emp.position = req.newPos; }
        showToast(req.empName + ' 발령이 승인되었습니다.');
    } else {
        showToast(req.empName + ' 발령 신청이 반려되었습니다.', 'info');
    }
    localStorage.setItem('apptRequests_v1', JSON.stringify(apptRequests));
    apptProcessRender();
}

// ── 발령내역 ──────────────────────────────────────
function apptHistSetFilter(key, val) {
    apptHistFilters[key] = val;
    apptHistPage = 1;
    apptHistoryRender();
}

function apptHistoryRender() {
    var wrap = document.getElementById('appt-history-wrap');
    if (!wrap) return;
    var tf = apptHistFilters;

    var typeOpts = '<option value="">전체 구분</option>' +
        ['입사','퇴직','휴직','복직','전적','보직','겸직'].map(function(t){
            return '<option value="' + t + '"' + (t === tf.type ? ' selected' : '') + '>' + t + '</option>';
        }).join('');

    var filtered = apptHistory.filter(function(h) {
        if (tf.type && h.type !== tf.type) return false;
        var q = (tf.search || '').toLowerCase();
        if (q && h.empId.toLowerCase().indexOf(q) < 0 && h.empName.toLowerCase().indexOf(q) < 0) return false;
        return true;
    });

    var total = filtered.length;
    var pages = Math.max(1, Math.ceil(total / APPT_HIST_PAGE));
    if (apptHistPage > pages) apptHistPage = 1;
    var paged = filtered.slice((apptHistPage - 1) * APPT_HIST_PAGE, apptHistPage * APPT_HIST_PAGE);

    var html =
        '<div class="apptreq-header">' +
        '<div class="apptreq-header-row apptreq-header-row-between">' +
        '<div class="apptreq-header-title-group"><h2 class="apptreq-title">인사발령내역</h2>' +
        '<span class="apptreq-desc">처리 완료된 발령 이력을 조회합니다</span></div>' +
        '<div class="appt-proc-toolbar-wrap">' +
        '<select class="bd-cat-sel" onchange="apptHistSetFilter(\'type\',this.value)">' + typeOpts + '</select>' +
        '<input type="text" class="appt-search-inp" placeholder="사번 또는 성명 검색" value="' + (tf.search || '').replace(/"/g, '&quot;') + '" oninput="apptHistSetFilter(\'search\',this.value)">' +
        '<button class="eval-dl-btn" onclick="apptHistoryDownloadExcel()">↓ 엑셀</button>' +
        '</div></div><div class="apptreq-header-line"></div></div>' +
        '<div style="margin-top:16px;">';

    var dirLabelMap = { '본사→센터':'기관 외→기관', '센터→본사':'기관→기관 외', '본사→본사':'기관 외→기관 외', '센터→센터':'기관→기관' };
    var typeClassMap = { '전보':'transfer', '승진':'promo', '겸직':'dual', '파견':'dispatch', '휴직':'leave', '복직':'return' };

    if (paged.length === 0) {
        html += '<div class="apptreq-card" style="padding:48px;text-align:center;color:#bbb;font-size:14px;">발령 내역이 없습니다.</div>';
    } else {
        html += '<div class="aphist-list">';
        paged.forEach(function(h) {
            var typeCls = typeClassMap[h.type] ? ' appt-type-' + typeClassMap[h.type] : '';

            var moveTags = '';
            if (h.corpType) moveTags += '<span class="aphist-corp-tag">' + escHtml(h.corpType) + '</span>';
            if (h.moveDir)  moveTags += '<span class="aphist-dir-tag">' + escHtml(dirLabelMap[h.moveDir] || h.moveDir) + '</span>';

            var chips = '';
            if (h.transferPay)  chips += '<span class="aphist-chip aphist-chip-pay">전적보상금</span>';
            if (h.annualLeave)  chips += '<span class="aphist-chip aphist-chip-annual">연차' + (h.annualCount != null ? ' ' + h.annualCount + '일' : '') + '</span>';
            if (h.severance)    chips += '<span class="aphist-chip aphist-chip-sev">퇴직금</span>';

            html += '<div class="aphist-card">' +
                '<div class="aphist-card-head">' +
                '<div class="aphist-card-left">' +
                '<span class="appt-type-badge' + typeCls + '">' + escHtml(h.type) + '</span>' +
                '<span class="aphist-name">' + escHtml(h.empName) + '</span>' +
                '<span class="aphist-empid">' + escHtml(h.empId) + '</span>' +
                (moveTags ? '<span class="aphist-tags">' + moveTags + '</span>' : '') +
                '</div>' +
                '<div class="aphist-card-right">' +
                '<span class="aphist-meta">' + escHtml(h.date) + '</span>' +
                '<span class="aphist-meta-sep">·</span>' +
                '<span class="aphist-meta">처리: ' + escHtml(h.processor) + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="aphist-card-body">' +
                '<div class="aphist-route">' +
                '<span class="aphist-route-loc">' + escHtml(h.beforeDept) + '<em>' + escHtml(h.beforePos) + '</em></span>' +
                '<span class="aphist-route-arrow">→</span>' +
                '<span class="aphist-route-loc">' + escHtml(h.afterDept) + '<em>' + escHtml(h.afterPos) + '</em></span>' +
                '</div>' +
                (chips ? '<div class="aphist-chips">' + chips + '</div>' : '') +
                (h.procNote ? '<div class="aphist-note">' + escHtml(h.procNote) + '</div>' : '') +
                '</div>' +
                '</div>';
        });
        html += '</div>';
    }

    if (pages > 1) {
        html += '<div class="appt-hist-pg-row">';
        html += '<button class="bd-pg-btn" onclick="apptHistChangePage(' + (apptHistPage-1) + ')"' + (apptHistPage===1 ? ' disabled' : '') + '>&#8249;</button>';
        for (var i = 1; i <= pages; i++)
            html += '<button class="bd-pg-btn' + (i===apptHistPage ? ' active':'') + '" onclick="apptHistChangePage(' + i + ')">' + i + '</button>';
        html += '<button class="bd-pg-btn" onclick="apptHistChangePage(' + (apptHistPage+1) + ')"' + (apptHistPage===pages ? ' disabled':'') + '>&#8250;</button>';
        html += '</div>';
    }
    html += '</div>';

    wrap.innerHTML = html;
    if (tf.search) {
        var inp = wrap.querySelector('input[type="text"]');
        if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
    }
}

function apptHistChangePage(p) {
    apptHistPage = p;
    apptHistoryRender();
}

function apptHistoryDownloadExcel() {
    var tf = apptHistFilters;
    var filtered = apptHistory.filter(function(h) {
        if (tf.type && h.type !== tf.type) return false;
        var q = (tf.search || '').toLowerCase();
        if (q && h.empId.toLowerCase().indexOf(q) < 0 && h.empName.toLowerCase().indexOf(q) < 0) return false;
        return true;
    });
    var dirLabelMap2 = { '본사→센터':'기관 외→기관', '센터→본사':'기관→기관 외', '본사→본사':'기관 외→기관 외', '센터→센터':'기관→기관' };
    var rows = [['발령일','사번','성명','발령구분','발령 전 부서','발령 전 직위','발령 후 부서','발령 후 직위','법인','법인구분','이동방향','전적보상금','연차정산','연차개수','퇴직금','특이사항','처리자']];
    filtered.forEach(function(h) {
        rows.push([
            h.date, h.empId, h.empName, h.type,
            h.beforeDept, h.beforePos, h.afterDept, h.afterPos, h.corp,
            h.corpType || '', dirLabelMap2[h.moveDir] || h.moveDir || '',
            h.transferPay ? 'Y' : '', h.annualLeave ? 'Y' : '', h.annualCount != null ? h.annualCount : '',
            h.severance ? 'Y' : '', h.procNote || '', h.processor
        ]);
    });
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = [{wch:12},{wch:8},{wch:8},{wch:8},{wch:14},{wch:8},{wch:14},{wch:8},{wch:18},{wch:10},{wch:14},{wch:8},{wch:8},{wch:8},{wch:8},{wch:20},{wch:10}];
    XLSX.utils.book_append_sheet(wb, ws, '인사발령내역');
    var now = new Date();
    var stamp = now.getFullYear() + ('0'+(now.getMonth()+1)).slice(-2) + ('0'+now.getDate()).slice(-2);
    XLSX.writeFile(wb, '인사발령내역_' + stamp + '.xlsx');
}

// ===== 개인노트 =====
var noteCurrentId = null;
var noteNextId = 1;
var noteData = [];
var noteCurrentCat = '';
var noteDragCat = null;
var noteSaveTimer = null;
var noteInited = false;

var NOTE_CAT_COLOR_PALETTE = ['#4a90d9','#e8a020','#9b59b6','#2ecc71','#e74c3c','#1abc9c','#e67e22','#d35400','#8e44ad','#16a085','#c0392b','#27ae60'];
var NOTE_DEFAULT_CATS = [
    { name: '업무', color: '#4a90d9' },
    { name: '회의록', color: '#e8a020' },
    { name: '아이디어', color: '#9b59b6' },
    { name: '개인', color: '#2ecc71' },
    { name: '기타', color: '#999' }
];
var noteCats = [];
var NOTE_CAT_COLORS = {};

function noteLoadCategories() {
    var saved = localStorage.getItem('icare_note_cats');
    if (saved) {
        try { noteCats = JSON.parse(saved); } catch(e) { noteCats = NOTE_DEFAULT_CATS.slice(); }
    } else {
        noteCats = NOTE_DEFAULT_CATS.map(function(c) { return { name: c.name, color: c.color }; });
    }
    NOTE_CAT_COLORS = {};
    noteCats.forEach(function(c) { NOTE_CAT_COLORS[c.name] = c.color; });
}

function noteSaveCategories() {
    try { localStorage.setItem('icare_note_cats', JSON.stringify(noteCats)); } catch(e) {}
    NOTE_CAT_COLORS = {};
    noteCats.forEach(function(c) { NOTE_CAT_COLORS[c.name] = c.color; });
}

function noteRenderCatFilter() {
    var container = document.getElementById('note-cat-filter');
    if (!container) return;
    var html = '<button class="note-cat-btn' + (!noteCurrentCat ? ' active' : '') + '" onclick="noteSetCat(this,\'\')">전체</button>';
    noteCats.forEach(function(c) {
        var active = noteCurrentCat === c.name ? ' active' : '';
        html += '<button class="note-cat-btn' + active + '" ' +
            'draggable="true" ' +
            'ondragstart="noteCatDragStart(this,\'' + c.name + '\')" ' +
            'ondragover="noteCatDragOver(event,this)" ' +
            'ondragleave="noteCatDragLeave(this)" ' +
            'ondrop="noteCatDrop(event,\'' + c.name + '\')" ' +
            'ondragend="noteCatDragEnd()" ' +
            'onclick="noteSetCat(this,\'' + c.name + '\')">' +
            c.name +
            '</button>';
    });
    container.innerHTML = html;
}

/* ── 개인노트 유형 관리 모달 ── */
function noteOpenCatMgr() {
    var overlay = document.getElementById('note-cat-mgr-overlay');
    if (!overlay) return;
    noteCatMgrRender();
    overlay.style.display = 'flex';
}
function noteCloseCatMgr(evt) {
    if (evt && evt.target !== document.getElementById('note-cat-mgr-overlay')) return;
    document.getElementById('note-cat-mgr-overlay').style.display = 'none';
}
function noteCloseCatMgrDirect() {
    var overlay = document.getElementById('note-cat-mgr-overlay');
    if (overlay) overlay.style.display = 'none';
}
function noteCatMgrRender() {
    var list = document.getElementById('note-cat-mgr-list');
    if (!list) return;
    list.innerHTML = noteCats.map(function(c, i) {
        return '<div class="snote-cat-mgr-item">' +
            '<span class="snote-cat-mgr-name" style="display:flex;align-items:center;gap:8px;">' +
            '<span style="width:10px;height:10px;border-radius:50%;background:' + (c.color || '#aaa') + ';display:inline-block;flex-shrink:0;"></span>' +
            c.name + '</span>' +
            '<button class="snote-cat-mgr-del" onclick="noteDeleteCatFromMgr(\'' + c.name.replace(/'/g,"\\'") + '\')">×</button>' +
            '</div>';
    }).join('');
}
function noteAddCatFromMgr() {
    var inp = document.getElementById('note-cat-mgr-input');
    if (!inp) return;
    var name = inp.value.trim();
    if (!name) { inp.focus(); return; }
    for (var i = 0; i < noteCats.length; i++) {
        if (noteCats[i].name === name) { showToast('이미 있는 카테고리입니다.', 'error'); inp.focus(); return; }
    }
    var usedColors = noteCats.map(function(c) { return c.color; });
    var color = '#aaa';
    for (var j = 0; j < NOTE_CAT_COLOR_PALETTE.length; j++) {
        if (usedColors.indexOf(NOTE_CAT_COLOR_PALETTE[j]) < 0) { color = NOTE_CAT_COLOR_PALETTE[j]; break; }
    }
    noteCats.push({ name: name, color: color });
    noteSaveCategories();
    inp.value = '';
    noteCatMgrRender();
    noteRenderCatFilter();
    noteRenderCatSelect();
}
async function noteDeleteCatFromMgr(cat) {
    if (!await showConfirm('"' + cat + '" 카테고리를 삭제할까요?\n해당 카테고리의 노트는 미분류로 변경됩니다.')) return;
    noteCats = noteCats.filter(function(c) { return c.name !== cat; });
    noteSaveCategories();
    noteData.forEach(function(n) { if (n.category === cat) n.category = ''; });
    noteSaveToStorage();
    if (noteCurrentCat === cat) noteCurrentCat = '';
    noteCatMgrRender();
    noteRenderCatFilter();
    noteRenderCatSelect();
    noteRenderList();
}

function noteRenderCatSelect() {
    var sel = document.getElementById('note-cat-select');
    if (!sel) return;
    var current = sel.value;
    var html = '<option value="">카테고리 없음</option>';
    noteCats.forEach(function(c) {
        html += '<option value="' + c.name + '">' + c.name + '</option>';
    });
    sel.innerHTML = html;
    if (current) sel.value = current;
}

function noteShowAddCat() {
    var row = document.getElementById('note-cat-input-row');
    if (row) row.style.display = 'flex';
    var inp = document.getElementById('note-cat-new-input');
    if (inp) { inp.value = ''; inp.focus(); }
}

function noteHideAddCat() {
    var row = document.getElementById('note-cat-input-row');
    if (row) row.style.display = 'none';
}

async function noteConfirmAddCat() {
    var inp = document.getElementById('note-cat-new-input');
    if (!inp) return;
    var name = inp.value.trim();
    if (!name) { inp.focus(); return; }
    for (var i = 0; i < noteCats.length; i++) {
        if (noteCats[i].name === name) { await showAlert('이미 있는 카테고리입니다.'); inp.focus(); return; }
    }
    var usedColors = noteCats.map(function(c) { return c.color; });
    var color = '#aaa';
    for (var j = 0; j < NOTE_CAT_COLOR_PALETTE.length; j++) {
        if (usedColors.indexOf(NOTE_CAT_COLOR_PALETTE[j]) < 0) { color = NOTE_CAT_COLOR_PALETTE[j]; break; }
    }
    noteCats.push({ name: name, color: color });
    noteSaveCategories();
    noteRenderCatFilter();
    noteRenderCatSelect();
}

async function noteDeleteCat(cat) {
    if (!await showConfirm('"' + cat + '" 카테고리를 삭제할까요?\n해당 카테고리의 노트는 미분류로 변경됩니다.')) return;
    noteCats = noteCats.filter(function(c) { return c.name !== cat; });
    noteSaveCategories();
    noteData.forEach(function(n) { if (n.category === cat) n.category = ''; });
    noteSaveToStorage();
    if (noteCurrentCat === cat) noteCurrentCat = '';
    noteRenderCatFilter();
    noteRenderCatSelect();
    noteRenderList();
}

function noteCatDragStart(el, name) {
    noteDragCat = name;
    el.classList.add('dragging');
}

function noteCatDragOver(e, el) {
    e.preventDefault();
    if (!noteDragCat || el.dataset.cat === noteDragCat) return;
    document.querySelectorAll('.note-cat-btn').forEach(function(b) { b.classList.remove('drag-over'); });
    el.classList.add('drag-over');
}

function noteCatDragLeave(el) {
    el.classList.remove('drag-over');
}

function noteCatDrop(e, targetName) {
    e.preventDefault();
    if (!noteDragCat || noteDragCat === targetName) return;
    var fromIdx = -1, toIdx = -1;
    for (var i = 0; i < noteCats.length; i++) {
        if (noteCats[i].name === noteDragCat) fromIdx = i;
        if (noteCats[i].name === targetName) toIdx = i;
    }
    if (fromIdx < 0 || toIdx < 0) return;
    var item = noteCats.splice(fromIdx, 1)[0];
    noteCats.splice(toIdx, 0, item);
    noteSaveCategories();
    noteDragCat = null;
    noteRenderCatFilter();
    noteRenderCatSelect();
}

function noteCatDragEnd() {
    noteDragCat = null;
    document.querySelectorAll('.note-cat-btn').forEach(function(b) {
        b.classList.remove('dragging');
        b.classList.remove('drag-over');
    });
}

function noteLoadFromStorage() {
    noteLoadCategories();
    try {
        var saved = localStorage.getItem('icare_notes');
        if (saved) {
            noteData = JSON.parse(saved);
            noteNextId = noteData.reduce(function(max, n) { return Math.max(max, n.id); }, 0) + 1;
        } else {
            noteData = [
                { id:1, title:'업무 인수인계 정리', category:'업무', body:'1. 급여 시스템 마감 절차\n2. 결재선 설정 방법\n3. 신규 입사자 온보딩 체크리스트', date:'2025-07-01', updated:'2025-07-01' },
                { id:2, title:'7월 하반기 목표', category:'아이디어', body:'- ERP 사용법 숙지\n- 인사발령 프로세스 정리\n- 복지 제도 개선안 작성', date:'2025-07-02', updated:'2025-07-02' },
                { id:3, title:'면담 메모', category:'회의록', body:'- 개발팀 이동 희망\n- 역량 개발 교육 신청 예정', date:'2025-07-03', updated:'2025-07-03' }
            ];
            noteNextId = 4;
            noteSaveToStorage();
        }
    } catch(e) {
        noteData = [];
        noteNextId = 1;
    }
}

function noteSaveToStorage() {
    try { localStorage.setItem('icare_notes', JSON.stringify(noteData)); } catch(e) {}
}

// ===== 노트 블록 에디터 =====
var nBlkIdCtr = Date.now();
var nSlashBlockId = null;
var nSlashActive = -1;
var nCPickMode = 'text';
var nBlockAutoSaveTimer = null;
var nSelTimer = null;

function nBlkGenId() { return 'nb_' + (nBlkIdCtr++); }

function nBlkNew(type) {
    return { id: nBlkGenId(), type: type || 'p', html: '', checked: false, collapsed: false, indent: 0, childHtml: '' };
}

function nOlLetter(n) { return String.fromCharCode(96 + Math.min(n, 26)); }
function nOlRoman(n) {
    var r = ['i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii','xiii','xiv','xv'];
    return (n >= 1 && n <= 15) ? r[n - 1] : (n + '');
}

function nBlocksText(blocks) {
    if (!blocks || !blocks.length) return '';
    return blocks.map(function(b) {
        if (b.type === 'divider') return '';
        var d = document.createElement('div');
        d.innerHTML = b.html || '';
        return d.textContent || '';
    }).filter(Boolean).join(' ');
}

function nWrapToBlock(wrap) {
    var id = wrap.getAttribute('data-id');
    var type = wrap.getAttribute('data-type');
    var indent = parseInt(wrap.getAttribute('data-indent') || '0', 10);
    var block = { id: id, type: type, html: '', checked: false, collapsed: false, indent: indent, childHtml: '' };
    if (type === 'divider') return block;
    if (type === 'subpage') {
        var spEl = wrap.querySelector('.nb-subpage-block');
        block.pageId    = spEl ? parseInt(spEl.getAttribute('data-page-id'), 10) : null;
        block.pageTitle = spEl ? (spEl.querySelector('.nb-subpage-title') || {}).textContent || '' : '';
        return block;
    }
    if (type === 'cols') {
        var colZones = wrap.querySelectorAll('.nb-col > .nb-editor-zone');
        block.cols = Array.from(colZones).map(function(zone) { return { blocks: nGetBlocks(zone) }; });
        block.colCount = block.cols.length;
        return block;
    }
    if (type === 'image') {
        var imgEl = wrap.querySelector('img.nb-image');
        var iwrap = wrap.querySelector('.nb-image-wrap');
        block.src   = imgEl ? (imgEl.getAttribute('src') || '') : '';
        block.width = iwrap ? (parseFloat(iwrap.style.width) || 80) : 80;
        block.alt   = imgEl ? (imgEl.getAttribute('alt') || '') : '';
        return block;
    }
    if (type === 'file') {
        var dlEl = wrap.querySelector('a.nb-file-dl');
        block.src      = dlEl ? (dlEl.getAttribute('href') || '') : '';
        block.fileName = wrap.getAttribute('data-filename') || '';
        block.fileSize = parseInt(wrap.getAttribute('data-filesize') || '0', 10);
        block.mime     = wrap.getAttribute('data-mime') || '';
        return block;
    }
    if (type === 'table') {
        var tRows = parseInt(wrap.getAttribute('data-rows') || '3', 10);
        var tCols = parseInt(wrap.getAttribute('data-cols') || '3', 10);
        var tCells = [];
        for (var tr3 = 0; tr3 < tRows; tr3++) {
            var tRow = [];
            for (var tc3 = 0; tc3 < tCols; tc3++) {
                var cellEl = wrap.querySelector('[data-cell="' + tr3 + '_' + tc3 + '"]');
                tRow.push(cellEl ? cellEl.innerHTML : '');
            }
            tCells.push(tRow);
        }
        block.cells = tCells; block.rows = tRows; block.cols = tCols;
        return block;
    }
    var el = wrap.querySelector('.nb-block');
    block.html = el ? el.innerHTML : '';
    if (type === 'todo') {
        var check = wrap.querySelector('.nb-todo-check');
        block.checked = check ? check.classList.contains('checked') : false;
    } else if (type === 'toggle') {
        var tzone = wrap.querySelector('.nb-toggle-children > .nb-editor-zone');
        var ch = document.getElementById('nb-tch-' + id);
        block.childBlocks = tzone ? nGetBlocks(tzone) : [];
        block.collapsed = ch ? !ch.classList.contains('open') : true;
    }
    return block;
}

function nGetBlocks(container) {
    var c = container || document.getElementById('note-blocks-editor');
    if (!c) return [];
    return Array.from(c.querySelectorAll(':scope > .nb-block-wrap')).map(nWrapToBlock);
}

// 범용 블록 렌더러 — 모든 에디터 존에서 사용
function nZoneRender(zone, blocks) {
    if (!blocks || !blocks.length) blocks = [nBlkNew('p')];
    zone.innerHTML = '';
    var olCount = 0;
    blocks.forEach(function(block) {
        if (block.type === 'ol') olCount++; else olCount = 0;
        zone.appendChild(nBlkMakeWrap(block, olCount));
    });
}

function noteRenderBlocks(note) {
    var container = document.getElementById('note-blocks-editor');
    if (!container) return;
    if (!note.blocks || note.blocks.length === 0) {
        if (note.body) {
            note.blocks = note.body.split('\n').filter(function(l) { return l.trim(); }).map(function(line) {
                var d = document.createElement('div');
                d.textContent = line;
                return { id: nBlkGenId(), type: 'p', html: d.innerHTML, checked: false, collapsed: false, indent: 0 };
            });
        }
        if (!note.blocks || note.blocks.length === 0) note.blocks = [nBlkNew('p')];
    }
    nZoneRender(container, note.blocks);
}

function nBlkMakeWrap(block, olNum) {
    var wrap = document.createElement('div');
    wrap.className = 'nb-block-wrap';
    wrap.setAttribute('data-id', block.id);
    wrap.setAttribute('data-type', block.type);
    wrap.setAttribute('data-indent', block.indent || 0);
    var hnd = '<div class="nb-drag-handle" title="드래그하여 이동">⣿</div>';
    var indent = block.indent || 0;

    if (block.type === 'divider') {
        wrap.innerHTML = hnd + '<div class="nb-divider"></div>';
        nSetupDrag(wrap);
        return wrap;
    }
    var phMap = { p:'내용을 입력하거나 \'/\' 를 입력하세요...', h1:'제목 1', h2:'제목 2', h3:'제목 3', h4:'제목 4', ul:'목록 항목', ol:'목록 항목', todo:'할 일...', toggle:'토글 제목...', quote:'인용문' };
    var ph = (phMap[block.type] || '').replace(/'/g, '&#39;');
    var html = block.html || '';

    if (block.type === 'ul') {
        var bullets = ['•','◦','▪','–'];
        var bul = bullets[Math.min(indent, 3)];
        wrap.innerHTML = hnd + '<div class="nb-list-row" style="padding-left:' + (indent * 20) + 'px"><span class="nb-ul-dot">' + bul + '</span><div class="nb-block" contenteditable="true" data-type="ul" data-id="' + block.id + '" data-ph="' + ph + '">' + html + '</div></div>';
    } else if (block.type === 'ol') {
        var olLabels = [(olNum || 1) + '.', nOlLetter(olNum || 1) + '.', nOlRoman(olNum || 1) + '.', (olNum || 1) + '.'];
        var olLbl = olLabels[Math.min(indent, 3)];
        wrap.innerHTML = hnd + '<div class="nb-list-row" style="padding-left:' + (indent * 20) + 'px"><span class="nb-ol-num">' + olLbl + '</span><div class="nb-block" contenteditable="true" data-type="ol" data-id="' + block.id + '" data-ph="' + ph + '">' + html + '</div></div>';
    } else if (block.type === 'todo') {
        var cc = block.checked ? ' checked' : '', tc = block.checked ? ' done' : '';
        wrap.innerHTML = hnd + '<div class="nb-todo-row"><span class="nb-todo-check' + cc + '" onclick="nBlkToggleTodo(\'' + block.id + '\')"></span><div class="nb-block' + tc + '" contenteditable="true" data-type="todo" data-id="' + block.id + '" data-ph="' + ph + '">' + html + '</div></div>';
    } else if (block.type === 'toggle') {
        var oc = block.collapsed ? '' : ' open';
        wrap.innerHTML = hnd +
            '<div class="nb-toggle-row"><span class="nb-toggle-arrow' + oc + '" id="nb-arr-' + block.id + '" onclick="event.stopPropagation();nBlkToggleCollapse(\'' + block.id + '\')">▶</span><div class="nb-block" contenteditable="true" data-type="toggle" data-id="' + block.id + '" data-ph="' + ph + '">' + html + '</div></div>' +
            '<div class="nb-toggle-children' + oc + '" id="nb-tch-' + block.id + '"></div>';
        // 토글 본문 = 완전한 중첩 에디터 존
        var tZone = document.createElement('div');
        tZone.className = 'nb-editor-zone nb-zone-toggle';
        var tChildren = wrap.querySelector('.nb-toggle-children');
        if (tChildren) tChildren.appendChild(tZone);
        var childBlocks = block.childBlocks;
        if (!childBlocks && block.childHtml) { // 구버전 마이그레이션
            childBlocks = [{ id: nBlkGenId(), type: 'p', html: block.childHtml, checked: false, collapsed: false, indent: 0 }];
        }
        nZoneRender(tZone, childBlocks || []);
    } else if (block.type === 'cols') {
        var colCount = block.colCount || (block.cols ? block.cols.length : 2);
        var colsHtml = '';
        for (var ci = 0; ci < colCount; ci++) { colsHtml += '<div class="nb-col"></div>'; }
        wrap.innerHTML = hnd + '<div class="nb-cols-wrap nb-cols-' + colCount + '">' + colsHtml + '</div>';
        // 각 열 = 완전한 중첩 에디터 존
        var colEls = wrap.querySelectorAll('.nb-col');
        colEls.forEach(function(colEl, ci) {
            var zone = document.createElement('div');
            zone.className = 'nb-editor-zone nb-zone-col';
            colEl.appendChild(zone);
            var colData = block.cols && block.cols[ci];
            var colBlocks = colData && colData.blocks ? colData.blocks
                : (colData && colData.html ? [{ id: nBlkGenId(), type: 'p', html: colData.html, checked: false, collapsed: false, indent: 0 }] : null);
            nZoneRender(zone, colBlocks || []);
        });
    } else if (block.type === 'table') {
        var tRows = block.rows || 3;
        var tCols = block.cols || 3;
        var cells = block.cells;
        // 셀 데이터 없으면 빈 배열로 초기화
        if (!cells) {
            cells = [];
            for (var tri = 0; tri < tRows; tri++) {
                var trow = [];
                for (var tci = 0; tci < tCols; tci++) trow.push('');
                cells.push(trow);
            }
        }
        wrap.setAttribute('data-rows', tRows);
        wrap.setAttribute('data-cols', tCols);
        var tableHtml = '<table class="nb-table"><thead><tr>';
        for (var ci2 = 0; ci2 < tCols; ci2++) {
            var hCellHtml = (cells[0] && cells[0][ci2] !== undefined) ? cells[0][ci2] : '';
            tableHtml += '<th><div class="nb-cell" contenteditable="true" data-row="0" data-col="' + ci2 + '" data-cell="0_' + ci2 + '" data-ph="열 ' + (ci2+1) + '">' + hCellHtml + '</div></th>';
        }
        tableHtml += '</tr></thead><tbody>';
        for (var ri2 = 1; ri2 < tRows; ri2++) {
            tableHtml += '<tr>';
            for (var ci3 = 0; ci3 < tCols; ci3++) {
                var dCellHtml = (cells[ri2] && cells[ri2][ci3] !== undefined) ? cells[ri2][ci3] : '';
                tableHtml += '<td><div class="nb-cell" contenteditable="true" data-row="' + ri2 + '" data-col="' + ci3 + '" data-cell="' + ri2 + '_' + ci3 + '" data-ph="">' + dCellHtml + '</div></td>';
            }
            tableHtml += '</tr>';
        }
        tableHtml += '</tbody></table>';
        var bid2 = block.id;
        wrap.innerHTML = hnd + '<div class="nb-table-wrap">' + tableHtml +
            '<div class="nb-tbl-add-row" onmousedown="event.preventDefault();nTblAddRow(\'' + bid2 + '\')">＋ 행 추가</div>' +
            '<div class="nb-tbl-add-col" onmousedown="event.preventDefault();nTblAddCol(\'' + bid2 + '\')">＋</div>' +
            '</div>';
        // 셀 이벤트 부착
        wrap.querySelectorAll('.nb-cell[contenteditable]').forEach(function(cellDiv) {
            cellDiv.addEventListener('keydown', function(e) { nTblCellKeydown(e, bid2, cellDiv); });
            cellDiv.addEventListener('input', function() { nAutoSave(); });
            cellDiv.addEventListener('blur', function() { nBlkLinkify(cellDiv); });
            cellDiv.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                var row = parseInt(cellDiv.getAttribute('data-row'), 10);
                var col = parseInt(cellDiv.getAttribute('data-col'), 10);
                nTblShowCtx(e.clientX, e.clientY, bid2, row, col);
            });
        });
    } else if (block.type === 'image') {
        var wPct = (block.width || 80) + '%';
        wrap.innerHTML = hnd + '<div class="nb-image-wrap" style="width:' + wPct + '">' +
            '<img class="nb-image" alt="' + (block.alt || '').replace(/"/g, '&quot;') + '">' +
            '<div class="nb-image-resize-handle" title="드래그하여 크기 조절"></div>' +
            '<button class="nb-image-del" onmousedown="event.preventDefault();event.stopPropagation();nBlockDel(\'' + block.id + '\')" title="이미지 삭제">×</button>' +
            '</div>';
        var imgEl = wrap.querySelector('img.nb-image');
        if (imgEl && block.src) imgEl.src = block.src;
        nSetupImageResize(wrap);
    } else if (block.type === 'file') {
        var fIcon = nFileIcon(block.mime || '');
        var fSize = nFileSizeStr(block.fileSize || 0);
        var fName = (block.fileName || '파일').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        wrap.setAttribute('data-filename', block.fileName || '');
        wrap.setAttribute('data-filesize', block.fileSize || 0);
        wrap.setAttribute('data-mime', block.mime || '');
        wrap.innerHTML = hnd +
            '<div class="nb-file-block">' +
            '<span class="nb-file-icon">' + fIcon + '</span>' +
            '<div class="nb-file-info">' +
            '<div class="nb-file-name">' + fName + '</div>' +
            '<div class="nb-file-size">' + fSize + '</div>' +
            '</div>' +
            '<a class="nb-file-dl" download="' + (block.fileName || '파일').replace(/"/g, '&quot;') + '">다운로드</a>' +
            '<button class="nb-file-del" onmousedown="event.preventDefault();event.stopPropagation();nBlockDel(\'' + block.id + '\')" title="삭제">×</button>' +
            '</div>';
        var dlEl2 = wrap.querySelector('a.nb-file-dl');
        if (dlEl2 && block.src) dlEl2.href = block.src;
    } else if (block.type === 'subpage') {
        var spTitle = (block.pageTitle || '새 페이지').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        var spId = block.pageId || '';
        wrap.innerHTML = hnd +
            '<div class="nb-subpage-block" data-page-id="' + spId + '" onclick="snoteOpenPage(' + spId + ')">' +
            '<span class="nb-subpage-icon">📄</span>' +
            '<span class="nb-subpage-title">' + spTitle + '</span>' +
            '<span class="nb-subpage-del" onmousedown="event.preventDefault();event.stopPropagation();nBlockDel(\'' + block.id + '\')" title="삭제">×</span>' +
            '</div>';
    } else {
        wrap.innerHTML = hnd + '<div class="nb-block" contenteditable="true" data-type="' + block.type + '" data-id="' + block.id + '" data-ph="' + ph + '">' + html + '</div>';
    }

    // 제목/본문 블록에만 이벤트 부착 (toggle·cols 는 nZoneRender 내부에서 재귀적으로 처리)
    if (block.type !== 'cols' && block.type !== 'toggle' && block.type !== 'table' && block.type !== 'image' && block.type !== 'file' && block.type !== 'subpage') {
        var el = wrap.querySelector('.nb-block[contenteditable]');
        if (el) nBlkAttach(el, block.id);
    } else if (block.type === 'toggle') {
        // 토글 제목 부분만 부착
        var titleEl = wrap.querySelector('.nb-toggle-row .nb-block[contenteditable]');
        if (titleEl) nBlkAttach(titleEl, block.id);
    }
    nSetupDrag(wrap);
    return wrap;
}

function nBlkLinkify(el) {
    if (!el) return;
    var urlRegex = /(https?:\/\/[^\s<>"']+)/g;
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    var textNodes = [];
    var node;
    while ((node = walker.nextNode())) {
        var par = node.parentElement;
        var inLink = false;
        while (par && par !== el) { if (par.tagName === 'A') { inLink = true; break; } par = par.parentElement; }
        urlRegex.lastIndex = 0;
        if (!inLink && urlRegex.test(node.textContent)) textNodes.push(node);
    }
    textNodes.forEach(function(tn) {
        urlRegex.lastIndex = 0;
        var parts = tn.textContent.split(urlRegex);
        if (parts.length <= 1) return;
        var frag = document.createDocumentFragment();
        parts.forEach(function(part, i) {
            if (i % 2 === 1) {
                var url = part.replace(/[).,;:!?'"]+$/, '');
                var a = document.createElement('a');
                a.href = url; a.className = 'nb-inline-link';
                a.target = '_blank'; a.rel = 'noopener noreferrer';
                a.textContent = url;
                frag.appendChild(a);
                var trail = part.slice(url.length);
                if (trail) frag.appendChild(document.createTextNode(trail));
            } else {
                if (part) frag.appendChild(document.createTextNode(part));
            }
        });
        tn.parentNode.replaceChild(frag, tn);
    });
}

function nBlkAttach(el, blockId) {
    el.addEventListener('keydown', function(e) { nBlkKeydown(e, blockId); });
    el.addEventListener('input', function() { nBlkInput(blockId); });
    el.addEventListener('blur', function() { nBlkLinkify(el); });
    el.addEventListener('click', function(e) { e.stopPropagation(); });
}

function nBlkKeydown(e, blockId) {
    var el = document.querySelector('.nb-block[data-id="' + blockId + '"]');
    if (!el) return;
    var wrap = el.closest('.nb-block-wrap');
    var container = (wrap && wrap.closest('.nb-editor-zone')) || document.getElementById('note-blocks-editor');
    var slash = document.getElementById('nb-slash');
    var slashOpen = slash && slash.style.display !== 'none';
    if (e.key === 'ArrowUp' && slashOpen) { e.preventDefault(); nSlashNav(-1); return; }
    if (e.key === 'ArrowDown' && slashOpen) { e.preventDefault(); nSlashNav(1); return; }
    if (e.key === 'Enter' && slashOpen) { e.preventDefault(); nSlashPick(); return; }
    if (e.key === 'Escape') { if (slashOpen) { e.preventDefault(); nSlashHide(); } return; }
    if (e.ctrlKey && !e.altKey) {
        if (e.key === 'b') { e.preventDefault(); nFmt('bold'); return; }
        if (e.key === 'i') { e.preventDefault(); nFmt('italic'); return; }
        if (e.key === 'u') { e.preventDefault(); nFmt('underline'); return; }
    }
    if (e.key === 'Tab') {
        var type2 = el.getAttribute('data-type');
        if (type2 === 'ul' || type2 === 'ol') {
            e.preventDefault();
            var curIndent = parseInt(wrap.getAttribute('data-indent') || '0', 10);
            var newIndent = e.shiftKey ? Math.max(0, curIndent - 1) : Math.min(3, curIndent + 1);
            if (newIndent !== curIndent) nBlkRerender(blockId, { indent: newIndent });
            return;
        }
        e.preventDefault();
        document.execCommand('insertText', false, '    ');
        return;
    }
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        var allWraps = Array.from(container.querySelectorAll(':scope > .nb-block-wrap'));
        var idx = allWraps.indexOf(wrap);
        var curType = el.getAttribute('data-type');
        var curIndent = parseInt(wrap.getAttribute('data-indent') || '0', 10);
        // 빈 리스트 항목에서 엔터 → 리스트 탈출 (p로 전환)
        var curText = el.innerText || '';
        if ((curType === 'ul' || curType === 'ol' || curType === 'todo') && (curText === '' || curText === '\n')) {
            nChangeType(blockId, 'p');
            return;
        }
        // 리스트 타입이면 같은 타입으로 계속
        var newType = (curType === 'ul' || curType === 'ol' || curType === 'todo') ? curType : 'p';
        var newBlock = nBlkNew(newType);
        if (newType !== 'p') newBlock.indent = curIndent;
        // ol이면 현재 위치까지 번호 계산
        var olNum = 0;
        if (newType === 'ol') {
            for (var ci = 0; ci <= idx; ci++) {
                if (allWraps[ci].getAttribute('data-type') === 'ol') olNum++; else olNum = 0;
            }
            olNum++;
        }
        var newWrap = nBlkMakeWrap(newBlock, olNum);
        if (idx >= 0 && idx < allWraps.length - 1) container.insertBefore(newWrap, allWraps[idx + 1]);
        else container.appendChild(newWrap);
        if (newType === 'ol') nUpdateOlNums(container);
        var newEl = newWrap.querySelector('.nb-block[contenteditable]');
        if (newEl) { newEl.focus(); nCaretPos(newEl, 0); }
        nAutoSave();
        return;
    }
    if (e.key === 'Backspace') {
        var text = el.innerText || '';
        var empty = text === '' || text === '\n';
        var type = el.getAttribute('data-type');
        if (empty) {
            var allWraps = Array.from(container.querySelectorAll(':scope > .nb-block-wrap'));
            if (type !== 'p') { e.preventDefault(); nChangeType(blockId, 'p'); nUpdateOlNums(container); return; }
            if (allWraps.length <= 1) return;
            e.preventDefault();
            var idx = allWraps.indexOf(wrap);
            wrap.remove();
            nUpdateOlNums(container);
            if (idx > 0) {
                var prevEl = allWraps[idx - 1].querySelector('.nb-block[contenteditable]');
                if (prevEl) { prevEl.focus(); nCaretPos(prevEl, -1); }
            }
            nAutoSave();
        }
    }
}
function nUpdateOlNums(container) {
    var olCount = 0;
    Array.from(container.querySelectorAll(':scope > .nb-block-wrap')).forEach(function(w) {
        if (w.getAttribute('data-type') === 'ol') {
            olCount++;
            var indent = parseInt(w.getAttribute('data-indent') || '0', 10);
            var olLabels = [olCount + '.', nOlLetter(olCount) + '.', nOlRoman(olCount) + '.', olCount + '.'];
            var lbl = w.querySelector('.nb-ol-num');
            if (lbl) lbl.textContent = olLabels[Math.min(indent, 3)];
        } else {
            olCount = 0;
        }
    });
}

function nBlkInput(blockId) {
    var el = document.querySelector('.nb-block[data-id="' + blockId + '"]');
    if (!el) return;
    nAutoSave();
    var text = el.innerText || '';
    var type = el.getAttribute('data-type');
    if (type === 'p' || type === 'ul' || type === 'ol' || type === 'quote') {
        var mdMap = { '# ': 'h1', '## ': 'h2', '### ': 'h3', '#### ': 'h4', '- ': 'ul', '> ': 'quote' };
        for (var pat in mdMap) {
            if (text === pat || text.startsWith(pat)) { el.innerHTML = ''; nChangeType(blockId, mdMap[pat]); return; }
        }
        if (/^\d+\. /.test(text)) { el.innerHTML = ''; nChangeType(blockId, 'ol'); return; }
        if (text === '[] ' || text === '[ ] ') { el.innerHTML = ''; nChangeType(blockId, 'todo'); return; }
        if (text.trimEnd() === '---') { nChangeType(blockId, 'divider'); return; }
    }
    var lastSlash = text.lastIndexOf('/');
    if (lastSlash >= 0 && (lastSlash === 0 || /[\s]/.test(text[lastSlash - 1]))) {
        var query = text.slice(lastSlash + 1);
        var rect = el.getBoundingClientRect();
        var sel = window.getSelection();
        if (sel && sel.rangeCount > 0) { try { var r2 = sel.getRangeAt(0).getBoundingClientRect(); if (r2 && r2.width >= 0) rect = r2; } catch(ex) {} }
        nSlashShow(blockId, rect.left || el.getBoundingClientRect().left, rect.bottom || el.getBoundingClientRect().bottom + 20, query);
    } else {
        nSlashHide();
    }
}

var nSlashItems = [
    { type:'p',       icon:'T',  label:'텍스트',      desc:'일반 텍스트' },
    { type:'h1',      icon:'H1', label:'제목 1',      desc:'큰 제목' },
    { type:'h2',      icon:'H2', label:'제목 2',      desc:'중간 제목' },
    { type:'h3',      icon:'H3', label:'제목 3',      desc:'작은 제목' },
    { type:'h4',      icon:'H4', label:'제목 4',      desc:'가장 작은 제목' },
    { type:'ul',      icon:'•',  label:'글머리 기호', desc:'순서 없는 목록' },
    { type:'ol',      icon:'1.', label:'번호 목록',   desc:'번호 있는 목록' },
    { type:'todo',    icon:'☐',  label:'할 일',       desc:'체크박스' },
    { type:'toggle',  icon:'▶',  label:'토글',        desc:'접기/펼치기' },
    { type:'quote',   icon:'"',  label:'인용',        desc:'인용문' },
    { type:'divider', icon:'—',  label:'구분선',      desc:'가로 구분선' },
    { type:'subpage', icon:'📄', label:'페이지',      desc:'하위 페이지 만들기' },
    { type:'col2',    icon:'▐▌', label:'2열',         desc:'2개 열 나누기' },
    { type:'col3',    icon:'▐▌▌',label:'3열',         desc:'3개 열 나누기' },
    { type:'col4',    icon:'4열', label:'4열',         desc:'4개 열 나누기' },
    { type:'col5',    icon:'5열', label:'5열',         desc:'5개 열 나누기' },
    { type:'table',   icon:'⊞',  label:'표',           desc:'3×3 표 삽입' },
    { type:'image',   icon:'🖼', label:'이미지',        desc:'이미지 파일 삽입' },
    { type:'file',    icon:'📎', label:'파일',          desc:'파일 첨부' },
];

function nSlashShow(blockId, x, y, query) {
    var slash = document.getElementById('nb-slash');
    if (!slash) return;
    nSlashBlockId = blockId;
    var q = (query || '').toLowerCase();
    var filtered = q ? nSlashItems.filter(function(i) { return i.label.indexOf(q) >= 0 || i.type.indexOf(q) >= 0; }) : nSlashItems;
    if (!filtered.length) { nSlashHide(); return; }
    nSlashActive = 0;
    slash.innerHTML = filtered.map(function(item, i) {
        return '<div class="nb-slash-item' + (i === 0 ? ' active' : '') + '" data-type="' + item.type + '" onmousedown="event.preventDefault();nSlashPickType(\'' + item.type + '\')">' +
            '<div class="nb-slash-icon">' + item.icon + '</div>' +
            '<div><div style="font-weight:600;font-size:13px">' + item.label + '</div><div style="font-size:11px;color:#aaa">' + item.desc + '</div></div>' +
            '</div>';
    }).join('');
    var mh = Math.min(filtered.length * 54 + 8, 290);
    var top = (y + 8 + mh > window.innerHeight) ? (y - mh - 8) : (y + 8);
    slash.style.left = Math.max(10, Math.min(x, window.innerWidth - 220)) + 'px';
    slash.style.top = Math.max(10, top) + 'px';
    slash.style.display = 'block';
}

function nSlashHide() {
    var slash = document.getElementById('nb-slash');
    if (slash) slash.style.display = 'none';
    nSlashBlockId = null; nSlashActive = -1;
}

function nSlashNav(dir) {
    var items = document.querySelectorAll('#nb-slash .nb-slash-item');
    if (!items.length) return;
    nSlashActive = (nSlashActive + dir + items.length) % items.length;
    items.forEach(function(item, i) { item.classList.toggle('active', i === nSlashActive); });
    if (items[nSlashActive]) items[nSlashActive].scrollIntoView({ block: 'nearest' });
}

function nSlashPick() {
    var items = document.querySelectorAll('#nb-slash .nb-slash-item');
    var idx = Math.max(0, nSlashActive);
    if (items[idx]) nSlashPickType(items[idx].getAttribute('data-type'));
}

function nSlashPickType(type) {
    var bid = nSlashBlockId;
    if (!bid) return;
    var el = document.querySelector('.nb-block[data-id="' + bid + '"]');
    if (el) {
        var t = el.innerText || '';
        var si = t.lastIndexOf('/');
        if (si >= 0) el.innerText = t.slice(0, si);
    }
    nSlashHide();
    if (/^col[2-5]$/.test(type)) {
        nChangeToColBlock(bid, parseInt(type.slice(3), 10));
        return;
    }
    if (type === 'table') {
        nChangeToTableBlock(bid, 3, 3);
        return;
    }
    if (type === 'subpage') {
        snoteInsertSubPage(bid);
        return;
    }
    if (type === 'image' || type === 'file') {
        var picker = document.getElementById('nb-file-picker');
        if (picker) {
            picker.setAttribute('accept', type === 'image' ? 'image/*' : '*/*');
            picker.setAttribute('data-for', bid);
            picker.value = '';
            picker.click();
        }
        return;
    }
    nChangeType(bid, type);
}

function nBlkRerender(blockId, updates) {
    var oldWrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!oldWrap) return null;
    var container = oldWrap.closest('.nb-editor-zone') || document.getElementById('note-blocks-editor');
    if (!container) return null;
    var block = nWrapToBlock(oldWrap);
    if (updates) { for (var k in updates) { if (Object.prototype.hasOwnProperty.call(updates, k)) block[k] = updates[k]; } }
    var allWraps = Array.from(container.querySelectorAll(':scope > .nb-block-wrap'));
    var wIdx = allWraps.indexOf(oldWrap);
    var olCnt = 0;
    for (var i = 0; i <= wIdx; i++) { if (allWraps[i].getAttribute('data-type') === 'ol') olCnt++; else olCnt = 0; }
    var newWrap = nBlkMakeWrap(block, olCnt);
    oldWrap.parentNode.replaceChild(newWrap, oldWrap);
    return newWrap;
}

function nChangeType(blockId, newType) {
    var newWrap = nBlkRerender(blockId, { type: newType, indent: 0 });
    if (!newWrap) return;
    if (newType === 'divider') {
        // 구분선 아래에 빈 단락 자동 추가 (같은 존 안에)
        var container = newWrap.closest('.nb-editor-zone') || document.getElementById('note-blocks-editor');
        var nextBlock = nBlkNew('p');
        var nextWrap = nBlkMakeWrap(nextBlock, 0);
        newWrap.parentNode.insertBefore(nextWrap, newWrap.nextSibling);
        var nextEl = nextWrap.querySelector('.nb-block[contenteditable]');
        if (nextEl) { nextEl.focus(); nCaretPos(nextEl, 0); }
    } else {
        var newEl = newWrap.querySelector('.nb-block[contenteditable]');
        if (newEl) { newEl.focus(); nCaretPos(newEl, -1); }
    }
    nAutoSave();
}

function nColKeydown(e, blockId, colEl) {
    if (e.ctrlKey && !e.altKey) {
        if (e.key === 'b') { e.preventDefault(); nFmt('bold'); return; }
        if (e.key === 'i') { e.preventDefault(); nFmt('italic'); return; }
        if (e.key === 'u') { e.preventDefault(); nFmt('underline'); return; }
    }
    if (e.key === 'Tab') {
        e.preventDefault();
        var wrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
        if (!wrap) return;
        var colEls = Array.from(wrap.querySelectorAll('.nb-col .nb-block'));
        var curIdx = colEls.indexOf(colEl);
        var nextIdx = e.shiftKey ? curIdx - 1 : curIdx + 1;
        if (nextIdx >= 0 && nextIdx < colEls.length) { colEls[nextIdx].focus(); nCaretPos(colEls[nextIdx], -1); }
    }
}

function nChangeToColBlock(blockId, colCount) {
    var oldWrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!oldWrap) return;
    var cols = [];
    for (var i = 0; i < colCount; i++) cols.push({ blocks: [nBlkNew('p')] });
    var block = { id: blockId, type: 'cols', html: '', cols: cols, colCount: colCount, checked: false, collapsed: false, indent: 0, childBlocks: [] };
    var newWrap = nBlkMakeWrap(block, 0);
    oldWrap.parentNode.replaceChild(newWrap, oldWrap);
    var firstEl = newWrap.querySelector('.nb-block[contenteditable]');
    if (firstEl) { firstEl.focus(); nCaretPos(firstEl, 0); }
    nAutoSave();
}

function nChangeToTableBlock(blockId, rows, cols) {
    var oldWrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!oldWrap) return;
    var cells = [];
    for (var ri = 0; ri < rows; ri++) {
        var row = [];
        for (var ci = 0; ci < cols; ci++) row.push('');
        cells.push(row);
    }
    var block = { id: blockId, type: 'table', html: '', rows: rows, cols: cols, cells: cells, checked: false, collapsed: false, indent: 0 };
    var newWrap = nBlkMakeWrap(block, 0);
    oldWrap.parentNode.replaceChild(newWrap, oldWrap);
    var firstCell = newWrap.querySelector('.nb-cell[contenteditable]');
    if (firstCell) { firstCell.focus(); nCaretPos(firstCell, 0); }
    nAutoSave();
}

function nTblCellKeydown(e, blockId, cellDiv) {
    if (e.ctrlKey && !e.altKey) {
        if (e.key === 'b') { e.preventDefault(); nFmt('bold'); return; }
        if (e.key === 'i') { e.preventDefault(); nFmt('italic'); return; }
        if (e.key === 'u') { e.preventDefault(); nFmt('underline'); return; }
    }
    if (e.key === 'Tab') {
        e.preventDefault();
        var wrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
        if (!wrap) return;
        var allCells = Array.from(wrap.querySelectorAll('.nb-cell[contenteditable]'));
        var curIdx = allCells.indexOf(cellDiv);
        if (e.shiftKey) {
            if (curIdx > 0) { allCells[curIdx - 1].focus(); nCaretPos(allCells[curIdx - 1], -1); }
        } else {
            if (curIdx < allCells.length - 1) { allCells[curIdx + 1].focus(); nCaretPos(allCells[curIdx + 1], -1); }
            else { nTblAddRow(blockId); } // 마지막 셀에서 Tab → 행 추가
        }
        return;
    }
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        var row = parseInt(cellDiv.getAttribute('data-row'), 10);
        var col = parseInt(cellDiv.getAttribute('data-col'), 10);
        var wrap2 = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
        if (!wrap2) return;
        var tRows2 = parseInt(wrap2.getAttribute('data-rows'), 10);
        var nextRow = row + 1;
        if (nextRow < tRows2) {
            var nextCell = wrap2.querySelector('[data-cell="' + nextRow + '_' + col + '"]');
            if (nextCell) { nextCell.focus(); nCaretPos(nextCell, 0); }
        } else {
            // 마지막 행에서 Enter → 행 추가 후 해당 열 셀 포커스
            nTblAddRow(blockId, col);
        }
    }
}

// 행 추가 — 맨 끝에 (키보드 Tab/Enter에서 사용)
function nTblAddRow(blockId, focusCol) {
    var wrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!wrap) return;
    var block = nWrapToBlock(wrap);
    var newRow = [];
    for (var ci = 0; ci < block.cols; ci++) newRow.push('');
    block.cells.push(newRow);
    block.rows = block.cells.length;
    var newWrap = nBlkMakeWrap(block, 0);
    wrap.parentNode.replaceChild(newWrap, wrap);
    var newRowIdx = block.rows - 1;
    var fc = focusCol !== undefined ? focusCol : 0;
    var targetCell = newWrap.querySelector('[data-cell="' + newRowIdx + '_' + fc + '"]');
    if (targetCell) { targetCell.focus(); nCaretPos(targetCell, 0); }
    nAutoSave();
}

// 열 추가 — 맨 끝에
function nTblAddCol(blockId) {
    var wrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!wrap) return;
    var block = nWrapToBlock(wrap);
    block.cells = block.cells.map(function(row) { return row.concat(['']); });
    block.cols = block.cols + 1;
    var newWrap = nBlkMakeWrap(block, 0);
    wrap.parentNode.replaceChild(newWrap, wrap);
    nAutoSave();
}

// 특정 위치에 행 삽입 (컨텍스트 메뉴)
function nTblInsertRow(blockId, afterRowIdx) {
    var wrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!wrap) return;
    var block = nWrapToBlock(wrap);
    var newRow = [];
    for (var ci = 0; ci < block.cols; ci++) newRow.push('');
    block.cells.splice(afterRowIdx + 1, 0, newRow);
    block.rows = block.cells.length;
    var newWrap = nBlkMakeWrap(block, 0);
    wrap.parentNode.replaceChild(newWrap, wrap);
    var targetCell = newWrap.querySelector('[data-cell="' + (afterRowIdx + 1) + '_0"]');
    if (targetCell) { targetCell.focus(); nCaretPos(targetCell, 0); }
    nAutoSave();
}

// 특정 위치에 열 삽입 (컨텍스트 메뉴)
function nTblInsertCol(blockId, afterColIdx) {
    var wrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!wrap) return;
    var block = nWrapToBlock(wrap);
    block.cells = block.cells.map(function(row) {
        var r = row.slice(); r.splice(afterColIdx + 1, 0, ''); return r;
    });
    block.cols = block.cols + 1;
    var newWrap = nBlkMakeWrap(block, 0);
    wrap.parentNode.replaceChild(newWrap, wrap);
    nAutoSave();
}

// 특정 행 삭제 (컨텍스트 메뉴)
function nTblDelRow(blockId, rowIdx) {
    var wrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!wrap) return;
    var block = nWrapToBlock(wrap);
    if (block.rows <= 1) return;
    block.cells.splice(rowIdx, 1);
    block.rows = block.cells.length;
    var newWrap = nBlkMakeWrap(block, 0);
    wrap.parentNode.replaceChild(newWrap, wrap);
    nAutoSave();
}

// 특정 열 삭제 (컨텍스트 메뉴)
function nTblDelCol(blockId, colIdx) {
    var wrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!wrap) return;
    var block = nWrapToBlock(wrap);
    if (block.cols <= 1) return;
    block.cells = block.cells.map(function(row) { var r = row.slice(); r.splice(colIdx, 1); return r; });
    block.cols = block.cols - 1;
    var newWrap = nBlkMakeWrap(block, 0);
    wrap.parentNode.replaceChild(newWrap, wrap);
    nAutoSave();
}

// 컨텍스트 메뉴
var nTblCtxTarget = null;
function nTblShowCtx(x, y, blockId, rowIdx, colIdx) {
    nTblHideCtx();
    var menu = document.createElement('div');
    menu.id = 'nb-tbl-ctx';
    menu.className = 'nb-tbl-ctx';
    var items = [
        { label: '위에 행 추가',   fn: function() { nTblInsertRow(blockId, rowIdx - 1); } },
        { label: '아래 행 추가',   fn: function() { nTblInsertRow(blockId, rowIdx); } },
        { label: '이 행 삭제',     fn: function() { nTblDelRow(blockId, rowIdx); }, del: true, disabled: rowIdx === 0 },
        { sep: true },
        { label: '왼쪽에 열 추가', fn: function() { nTblInsertCol(blockId, colIdx - 1); } },
        { label: '오른쪽에 열 추가', fn: function() { nTblInsertCol(blockId, colIdx); } },
        { label: '이 열 삭제',     fn: function() { nTblDelCol(blockId, colIdx); }, del: true },
    ];
    items.forEach(function(item) {
        if (item.sep) { var sep = document.createElement('div'); sep.className = 'nb-tbl-ctx-sep'; menu.appendChild(sep); return; }
        var div = document.createElement('div');
        div.className = 'nb-tbl-ctx-item' + (item.del ? ' del' : '') + (item.disabled ? ' disabled' : '');
        div.textContent = item.label;
        if (!item.disabled) {
            div.addEventListener('mousedown', function(e) { e.preventDefault(); nTblHideCtx(); item.fn(); });
        }
        menu.appendChild(div);
    });
    document.body.appendChild(menu);
    nTblCtxTarget = menu;
    // 화면 밖 넘침 방지
    var mw = 170, mh = items.length * 32 + 8;
    var left = (x + mw > window.innerWidth) ? x - mw : x;
    var top = (y + mh > window.innerHeight) ? y - mh : y;
    menu.style.left = Math.max(4, left) + 'px';
    menu.style.top = Math.max(4, top) + 'px';
}
function nTblHideCtx() {
    var old = document.getElementById('nb-tbl-ctx');
    if (old) old.remove();
    nTblCtxTarget = null;
}
document.addEventListener('mousedown', function(e) {
    if (nTblCtxTarget && !nTblCtxTarget.contains(e.target)) nTblHideCtx();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') nTblHideCtx();
});

// ── 파일/이미지 블록 헬퍼 ──

function nFileIcon(mime) {
    if (!mime) return '📎';
    if (mime.startsWith('image/')) return '🖼';
    if (mime.startsWith('video/')) return '🎬';
    if (mime.startsWith('audio/')) return '🎵';
    if (mime.includes('pdf')) return '📄';
    if (mime.includes('word') || mime.includes('document')) return '📝';
    if (mime.includes('excel') || mime.includes('sheet') || mime.includes('csv')) return '📊';
    if (mime.includes('powerpoint') || mime.includes('presentation')) return '📊';
    if (mime.includes('zip') || mime.includes('rar') || mime.includes('tar') || mime.includes('gz')) return '🗜';
    if (mime.includes('text')) return '📄';
    return '📎';
}

function nFileSizeStr(bytes) {
    if (!bytes || bytes === 0) return '0 B';
    var units = ['B', 'KB', 'MB', 'GB'];
    var i = Math.min(3, Math.floor(Math.log(bytes) / Math.log(1024)));
    return (bytes / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0) + ' ' + units[i];
}

function nImageCompress(dataUrl, callback) {
    var img = new Image();
    img.onload = function() {
        var MAX = 1920;
        var w = img.width, h = img.height;
        // 작은 이미지 & 이미 작은 파일은 그대로
        if (w <= MAX && h <= MAX && dataUrl.length < 400000) { callback(dataUrl); return; }
        var ratio = Math.min(MAX / w, MAX / h, 1);
        var cw = Math.max(1, Math.round(w * ratio));
        var ch = Math.max(1, Math.round(h * ratio));
        var canvas = document.createElement('canvas');
        canvas.width = cw; canvas.height = ch;
        canvas.getContext('2d').drawImage(img, 0, 0, cw, ch);
        callback(canvas.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = function() { callback(dataUrl); };
    img.src = dataUrl;
}

function nActiveBlocksContainer() {
    var taskPage = document.getElementById('proj-task-page');
    if (taskPage && taskPage.style.display !== 'none') {
        return document.getElementById('proj-task-blocks-editor');
    }
    return document.getElementById('note-blocks-editor');
}

function nInsertBlockAfterOrAppend(afterBlockId, block) {
    if (!block.id) block.id = nBlkGenId();
    if (!block.checked) block.checked = false;
    if (!block.collapsed) block.collapsed = false;
    if (block.indent === undefined) block.indent = 0;
    if (!block.html) block.html = '';
    var newWrap = nBlkMakeWrap(block, 0);
    if (afterBlockId) {
        var afterWrap = document.querySelector('.nb-block-wrap[data-id="' + afterBlockId + '"]');
        if (afterWrap) {
            afterWrap.parentNode.insertBefore(newWrap, afterWrap.nextSibling);
            return newWrap;
        }
    }
    var container = nActiveBlocksContainer();
    if (container) container.appendChild(newWrap);
    return newWrap;
}

function nBlockDel(blockId) {
    var wrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!wrap) return;
    var container = wrap.closest('.nb-editor-zone') || document.getElementById('note-blocks-editor');
    // 마지막 블록이면 빈 단락으로 교체
    if (container && container.querySelectorAll(':scope > .nb-block-wrap').length <= 1) {
        var empty = nBlkNew('p');
        empty.id = blockId;
        nBlkRerender(blockId, { type: 'p', html: '' });
        return;
    }
    wrap.remove();
    nAutoSave();
}

function nSetupImageResize(wrap) {
    var handle = wrap.querySelector('.nb-image-resize-handle');
    var iwrap = wrap.querySelector('.nb-image-wrap');
    if (!handle || !iwrap) return;
    handle.addEventListener('mousedown', function(e) {
        e.preventDefault(); e.stopPropagation();
        var startX = e.clientX;
        var startW = iwrap.offsetWidth;
        var zone = wrap.closest('.nb-editor-zone') || document.getElementById('note-blocks-editor');
        var containerW = zone ? zone.clientWidth : 600;
        iwrap.classList.add('resizing');
        function onMove(ev) {
            var newPct = Math.min(100, Math.max(10, (startW + ev.clientX - startX) / containerW * 100));
            iwrap.style.width = newPct.toFixed(1) + '%';
        }
        function onUp() {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            iwrap.classList.remove('resizing');
            nAutoSave();
        }
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });
}

function nFilePickerChange(input) {
    var files = Array.from(input.files || []);
    if (!files.length) return;
    var targetId = input.getAttribute('data-for') || null;
    input.value = '';
    input.removeAttribute('data-for');

    files.forEach(function(file, idx) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var src = e.target.result;
            var isImage = file.type.startsWith('image/');
            // 첫 파일은 슬래시 블록 교체, 나머지는 뒤에 삽입
            var insertId = (idx === 0) ? targetId : null;

            if (isImage) {
                nImageCompress(src, function(compSrc) {
                    if (idx === 0 && insertId) {
                        nBlkRerender(insertId, { type: 'image', src: compSrc, width: 80, alt: file.name });
                    } else {
                        var prevId = (idx === 0) ? null : files[idx - 1]._insertedId;
                        nInsertBlockAfterOrAppend(prevId || insertId,
                            { type: 'image', src: compSrc, width: 80, alt: file.name });
                    }
                    nAutoSave();
                });
            } else {
                if (idx === 0 && insertId) {
                    nBlkRerender(insertId, { type: 'file', src: src, fileName: file.name, fileSize: file.size, mime: file.type || '' });
                } else {
                    nInsertBlockAfterOrAppend(insertId,
                        { type: 'file', src: src, fileName: file.name, fileSize: file.size, mime: file.type || '' });
                }
                nAutoSave();
            }
        };
        reader.readAsDataURL(file);
    });
}

// ── 파일 붙여넣기 & 드래그드롭 ──

function nSetupFileDropZone(zoneId) {
    var el = document.getElementById(zoneId);
    if (!el) return;
    el.addEventListener('dragover', function(e) {
        var types = Array.from(e.dataTransfer.types || []);
        if (types.indexOf('Files') >= 0) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            el.classList.add('nb-file-dragover');
        }
    });
    el.addEventListener('dragleave', function(e) {
        if (!el.contains(e.relatedTarget)) el.classList.remove('nb-file-dragover');
    });
    el.addEventListener('drop', function(e) {
        el.classList.remove('nb-file-dragover');
        var files = e.dataTransfer.files;
        if (!files || !files.length) return;
        var types = Array.from(e.dataTransfer.types || []);
        if (types.indexOf('Files') < 0) return;
        e.preventDefault();
        e.stopPropagation();
        Array.from(files).forEach(function(file) {
            var reader = new FileReader();
            reader.onload = function(ev) {
                var src = ev.target.result;
                if (file.type.startsWith('image/')) {
                    nImageCompress(src, function(compSrc) {
                        nInsertBlockAfterOrAppend(null, { type: 'image', src: compSrc, width: 80, alt: file.name });
                        nAutoSave();
                    });
                } else {
                    nInsertBlockAfterOrAppend(null, { type: 'file', src: src, fileName: file.name, fileSize: file.size, mime: file.type || '' });
                    nAutoSave();
                }
            };
            reader.readAsDataURL(file);
        });
    });
}

function nAddLink() {
    var sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    var url = prompt('링크 URL을 입력하세요:', 'https://');
    if (!url || !url.trim() || url.trim() === 'https://') return;
    url = url.trim();
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    document.execCommand('createLink', false, url);
    var editor = document.getElementById('note-blocks-editor');
    if (editor) {
        editor.querySelectorAll('a').forEach(function(a) {
            a.className = 'nb-inline-link';
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        });
    }
    var fbar = document.getElementById('nb-fbar');
    if (fbar) fbar.style.display = 'none';
    nAutoSave();
}

function nSetupDrag(wrap) {
    var handle = wrap.querySelector('.nb-drag-handle');
    if (!handle) return;
    handle.addEventListener('mousedown', function(e) {
        e.stopPropagation();
        wrap.setAttribute('draggable', 'true');
    });
    wrap.addEventListener('dragstart', function(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', wrap.getAttribute('data-id'));
        setTimeout(function() { wrap.classList.add('nb-dragging'); }, 0);
    });
    wrap.addEventListener('dragend', function() {
        wrap.setAttribute('draggable', 'false');
        wrap.classList.remove('nb-dragging');
        document.querySelectorAll('.nb-drag-over').forEach(function(el) { el.classList.remove('nb-drag-over'); });
        nAutoSave();
    });
    wrap.addEventListener('dragover', function(e) {
        // 파일 드롭은 에디터 존 레벨에서 처리
        var types = Array.from(e.dataTransfer.types || []);
        if (types.indexOf('Files') >= 0) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        document.querySelectorAll('.nb-drag-over').forEach(function(el) { el.classList.remove('nb-drag-over'); });
        wrap.classList.add('nb-drag-over');
    });
    wrap.addEventListener('dragleave', function(e) {
        if (!wrap.contains(e.relatedTarget)) wrap.classList.remove('nb-drag-over');
    });
    wrap.addEventListener('drop', function(e) {
        e.preventDefault();
        var draggedId = e.dataTransfer.getData('text/plain');
        var targetId = wrap.getAttribute('data-id');
        if (draggedId === targetId) return;
        var container = wrap.closest('.nb-editor-zone') || document.getElementById('note-blocks-editor');
        if (!container) return;
        var draggedWrap = container.querySelector(':scope > .nb-block-wrap[data-id="' + draggedId + '"]');
        if (draggedWrap) {
            var rect = wrap.getBoundingClientRect();
            if (e.clientY < rect.top + rect.height / 2) container.insertBefore(draggedWrap, wrap);
            else container.insertBefore(draggedWrap, wrap.nextSibling);
        }
        wrap.classList.remove('nb-drag-over');
        nAutoSave();
    });
}

function nCaretPos(el, pos) {
    try {
        var range = document.createRange(), sel = window.getSelection();
        if (pos === 0) { range.setStart(el, 0); range.collapse(true); }
        else { range.selectNodeContents(el); range.collapse(false); }
        sel.removeAllRanges(); sel.addRange(range);
    } catch(e) {}
}

function nCheckSel() {
    var fbar = document.getElementById('nb-fbar');
    if (!fbar) return;
    var sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) { fbar.style.display = 'none'; return; }
    var range = sel.getRangeAt(0);
    var anchor = range.commonAncestorContainer;
    var inNote = (function() { var e = document.getElementById('note-editor-body'); return e && e.contains(anchor); })();
    var inTask = (function() { var e = document.getElementById('proj-task-editor-body'); return e && e.contains(anchor); })();
    if (!inNote && !inTask) { fbar.style.display = 'none'; return; }
    var rect = range.getBoundingClientRect();
    if (!rect || rect.width === 0) { fbar.style.display = 'none'; return; }
    var fw = 240, left = rect.left + (rect.width - fw) / 2;
    left = Math.max(10, Math.min(left, window.innerWidth - fw - 10));
    var top = rect.top - 50; if (top < 10) top = rect.bottom + 8;
    fbar.style.left = left + 'px'; fbar.style.top = top + 'px'; fbar.style.display = 'flex';
}

function nFmt(cmd) {
    document.execCommand(cmd, false, null);
    setTimeout(nCheckSel, 10);
    nAutoSave();
}

function nShowCPick(mode) {
    nCPickMode = mode;
    var cpick = document.getElementById('nb-cpick');
    if (!cpick) return;
    var tColors = [['기본',''],['회색','#888888'],['갈색','#8B4513'],['주황','#E86F30'],['노랑','#E6AC00'],['초록','#2E8B57'],['파랑','#1565C0'],['보라','#7B1FA2'],['분홍','#E91E82'],['빨강','#D32F2F']];
    var bgColors = [['없음',''],['회색','#F0F0F0'],['갈색','#FFF3E0'],['주황','#FFF0E8'],['노랑','#FFFDE7'],['초록','#E8F5E9'],['파랑','#E3F2FD'],['보라','#F3E5F5'],['분홍','#FCE4EC'],['빨강','#FFEBEE']];
    var list = mode === 'text' ? tColors : bgColors;
    cpick.innerHTML = '<div class="nb-cpick-title">' + (mode === 'text' ? '글자 색' : '배경 색') + '</div><div class="nb-cpick-swatches">' +
        list.map(function(c) {
            var bg = mode === 'text' ? (c[1] || '#222') : (c[1] || '#fff');
            var bd = c[1] ? '' : ';border:1.5px solid #ddd';
            return '<div class="nb-cpick-swatch" title="' + c[0] + '" style="background:' + bg + bd + '" onmousedown="event.preventDefault();nApplyColor(\'' + c[1] + '\',\'' + mode + '\')"></div>';
        }).join('') + '</div>';
    cpick.style.display = 'block';
}

function nApplyColor(color, mode) {
    var cpick = document.getElementById('nb-cpick');
    if (cpick) cpick.style.display = 'none';
    if (mode === 'text') {
        if (color) document.execCommand('foreColor', false, color);
        else document.execCommand('removeFormat', false, null);
    } else {
        document.execCommand('hiliteColor', false, color || 'transparent');
    }
    nAutoSave();
}

function nBlkToggleTodo(blockId) {
    var wrap = document.querySelector('.nb-block-wrap[data-id="' + blockId + '"]');
    if (!wrap) return;
    var check = wrap.querySelector('.nb-todo-check');
    var el = wrap.querySelector('.nb-block');
    if (!check) return;
    var done = check.classList.toggle('checked');
    if (el) el.classList.toggle('done', done);
    nAutoSave();
}

function nBlkToggleCollapse(blockId) {
    var arrow = document.getElementById('nb-arr-' + blockId);
    var ch = document.getElementById('nb-tch-' + blockId);
    if (!arrow || !ch) return;
    arrow.classList.toggle('open');
    ch.classList.toggle('open');
    nAutoSave();
}

var nActiveEditorCtx = { type: 'note' }; // { type:'note' } | { type:'task', projId, taskId } | { type:'proj-section', section, projId, meetingId? }

function nbCreateEditor(zone, blocks) {
    zone.innerHTML = '';
    nZoneRender(zone, blocks && blocks.length ? blocks : [nBlkNew('p')]);
    var ctx = { type: 'snote', zone: zone };
    nActiveEditorCtx = ctx;
    return ctx;
}
function nbGetBlocks(ctx) {
    if (!ctx || !ctx.zone) return [];
    return nGetBlocks(ctx.zone);
}

function nAutoSave() {
    if (nActiveEditorCtx.type === 'task') { projTaskPageAutoSave(); return; }
    if (nActiveEditorCtx.type === 'proj-section') { projDetailAutoSave(); return; }
    if (nActiveEditorCtx.type === 'goal') return;
    if (nActiveEditorCtx.type === 'board') return;
    if (nActiveEditorCtx.type === 'snote') return;
    // eval form editor zone — 블록 에디터가 열려 있어도 노트 자동저장 하지 않음
    var ae = document.activeElement;
    if (ae && ae.closest && ae.closest('#eval-form-editor-zone')) return;
    if (nBlockAutoSaveTimer) clearTimeout(nBlockAutoSaveTimer);
    var ss = document.getElementById('note-save-status');
    if (ss && !ss.textContent) ss.textContent = '...';
    nBlockAutoSaveTimer = setTimeout(function() { noteSave(true); }, 700);
}

// ── 블록 에디터 전역 이벤트 리스너 (탭과 무관하게 1회 초기화) ──
var nBlockEditorGlobalInited = false;
function nBlockEditorGlobalInit() {
    if (nBlockEditorGlobalInited) return;
    nBlockEditorGlobalInited = true;

    // 선택 시 포맷 툴바 표시
    document.addEventListener('selectionchange', function() {
        clearTimeout(nSelTimer);
        nSelTimer = setTimeout(nCheckSel, 60);
    });

    // 에디터 바깥 클릭 시 툴바/슬래시 메뉴 닫기
    document.addEventListener('mousedown', function(e) {
        var fbar  = document.getElementById('nb-fbar');
        var slash = document.getElementById('nb-slash');
        var cpick = document.getElementById('nb-cpick');
        if (fbar  && !fbar.contains(e.target))  fbar.style.display  = 'none';
        if (cpick && !fbar.contains(e.target))  cpick.style.display = 'none';
        if (slash && !slash.contains(e.target)) nSlashHide();
        // 표 컨텍스트 메뉴 닫기
        if (typeof nTblCtxTarget !== 'undefined' && nTblCtxTarget && !nTblCtxTarget.contains(e.target)) nTblHideCtx();
    });

    // 드래그 후 draggable 초기화
    document.addEventListener('mouseup', function() {
        document.querySelectorAll('.nb-block-wrap[draggable="true"]').forEach(function(w) { w.setAttribute('draggable', 'false'); });
    });

    // 링크 클릭 → 새 탭 열기 (contenteditable 내 a 클릭 우회) — 이벤트 위임
    document.addEventListener('mousedown', function(e) {
        var a = e.target.closest ? e.target.closest('.nb-inline-link') : null;
        if (!a) return;
        // 에디터 안에 있을 때만
        var inEditor = a.closest('.nb-editor-zone');
        if (inEditor) { e.preventDefault(); window.open(a.href, '_blank', 'noopener,noreferrer'); }
    });

    // ── 파일/이미지 붙여넣기 ──
    document.addEventListener('paste', function(e) {
        var active = document.activeElement;
        var inEditor = active && active.closest ? active.closest('.nb-editor-zone') : null;
        if (!inEditor) return;
        var items = e.clipboardData && e.clipboardData.items;
        if (!items) return;
        var hasFile = false;
        for (var pi = 0; pi < items.length; pi++) { if (items[pi].kind === 'file') { hasFile = true; break; } }
        if (!hasFile) return;
        e.preventDefault();
        var focusedBlock = active.closest ? active.closest('.nb-block[contenteditable]') : null;
        var afterId = focusedBlock ? focusedBlock.getAttribute('data-id') : null;
        for (var qi = 0; qi < items.length; qi++) {
            if (items[qi].kind !== 'file') continue;
            (function(file, prevId) {
                var reader = new FileReader();
                reader.onload = function(ev) {
                    var src = ev.target.result;
                    if (file.type.startsWith('image/')) {
                        nImageCompress(src, function(compSrc) {
                            nInsertBlockAfterOrAppend(prevId, { type: 'image', src: compSrc, width: 80, alt: file.name || '' });
                            nAutoSave();
                        });
                    } else {
                        nInsertBlockAfterOrAppend(prevId, { type: 'file', src: src, fileName: file.name, fileSize: file.size, mime: file.type || '' });
                        nAutoSave();
                    }
                };
                reader.readAsDataURL(file);
            })(items[qi].getAsFile(), afterId);
        }
    });

    // ── 파일 드래그드롭 ──
    nSetupFileDropZone('note-blocks-editor');
    nSetupFileDropZone('proj-task-blocks-editor');
}

function noteInit() {
    try {
        nBlockEditorGlobalInit(); // 전역 리스너 1회 등록
        noteLoadFromStorage();
        noteInited = true;
        noteRenderCatFilter();
        noteRenderCatSelect();
        noteRenderList();
        if (noteData.length > 0) {
            noteOpen(noteData[0].id);
        } else {
            var ed = document.getElementById('note-editor');
            var empty = document.getElementById('note-editor-empty');
            if (ed) ed.style.display = 'none';
            if (empty) empty.style.display = 'flex';
        }
    } catch(e) {
        console.error('[noteInit error]', e);
    }
}

function noteRenderList() {
    var searchEl = document.getElementById('note-search');
    var q = searchEl ? searchEl.value.toLowerCase() : '';
    var filtered = noteData.filter(function(n) {
        var matchCat = !noteCurrentCat || n.category === noteCurrentCat;
        var bodyText = nBlocksText(n.blocks || []);
        var matchQ = !q || (n.title && n.title.toLowerCase().indexOf(q) >= 0) || (bodyText && bodyText.toLowerCase().indexOf(q) >= 0);
        return matchCat && matchQ;
    });
    var list = document.getElementById('note-list');
    if (!list) return;
    if (filtered.length === 0) {
        list.innerHTML = '<div style="padding:24px;text-align:center;color:#bbb;font-size:13px;">노트가 없습니다.</div>';
        return;
    }
    list.innerHTML = filtered.map(function(n) {
        var active = n.id === noteCurrentId ? ' active' : '';
        var preview = nBlocksText(n.blocks || []).slice(0, 50) || '내용 없음';
        var cat = n.category || '';
        var catColor = NOTE_CAT_COLORS[cat] || '#ccc';
        var catBadge = cat ? '<span class="note-item-cat" style="background:' + catColor + '15;color:' + catColor + ';border:1px solid ' + catColor + '40">' + cat + '</span>' : '';
        return '<div class="note-item' + active + '" onclick="noteOpen(' + n.id + ')">' +
            '<div class="note-item-title-row">' +
            '<span class="note-item-title">' + (n.title || '제목 없음') + '</span>' +
            catBadge +
            '</div>' +
            '<div class="note-item-preview">' + preview + '</div>' +
            '<div class="note-item-date">' + (n.updated || '') + '</div>' +
            '</div>';
    }).join('');
}

function noteOpen(id) {
    var n = null;
    for (var i = 0; i < noteData.length; i++) {
        if (noteData[i].id === id) { n = noteData[i]; break; }
    }
    if (!n) return;
    noteCurrentId = id;

    var empty = document.getElementById('note-editor-empty');
    var editor = document.getElementById('note-editor');
    var titleInput = document.getElementById('note-title-input');
    var catSelect = document.getElementById('note-cat-select');
    var saveStatus = document.getElementById('note-save-status');

    if (empty) empty.style.display = 'none';
    if (editor) editor.style.display = 'flex';
    if (titleInput) titleInput.value = n.title || '';
    noteRenderBlocks(n);
    noteRenderCatSelect();
    if (catSelect) catSelect.value = n.category || '';
    if (saveStatus) saveStatus.textContent = '';
    noteRenderList();
}

function noteNew() {
    if (!noteInited) noteInit();
    var today = new Date().toISOString().split('T')[0];
    var n = { id: noteNextId++, title: '', category: noteCurrentCat || '', blocks: [nBlkNew('p')], date: today, updated: today };
    noteData.unshift(n);
    noteSaveToStorage();
    noteOpen(n.id);
    setTimeout(function() {
        var t = document.getElementById('note-title-input');
        if (t) t.focus();
    }, 50);
}

function noteSetCat(btn, cat) {
    noteCurrentCat = cat;
    noteRenderCatFilter();
    noteRenderList();
}

function noteCatChange() {
    var catSelect = document.getElementById('note-cat-select');
    var n = null;
    for (var i = 0; i < noteData.length; i++) {
        if (noteData[i].id === noteCurrentId) { n = noteData[i]; break; }
    }
    if (!n || !catSelect) return;
    n.category = catSelect.value;
    noteSaveToStorage();
    noteRenderList();
}

// noteAutoSave: title input의 oninput에서 호출 (alias)
function noteAutoSave() { nAutoSave(); }

function noteSave(silent) {
    var n = null;
    for (var i = 0; i < noteData.length; i++) {
        if (noteData[i].id === noteCurrentId) { n = noteData[i]; break; }
    }
    if (!n) return;
    var titleInput = document.getElementById('note-title-input');
    var catSelect = document.getElementById('note-cat-select');
    var saveStatus = document.getElementById('note-save-status');
    n.title = titleInput ? (titleInput.value.trim() || '제목 없음') : '제목 없음';
    var blocks = nGetBlocks();
    if (blocks.length > 0) n.blocks = blocks;
    n.category = catSelect ? catSelect.value : (n.category || '');
    n.updated = new Date().toISOString().split('T')[0];
    noteSaveToStorage();
    if (saveStatus) {
        saveStatus.textContent = silent ? '자동 저장됨 ✓' : '저장됨 ✓';
        setTimeout(function() { if (saveStatus) saveStatus.textContent = ''; }, silent ? 1200 : 2000);
    }
    noteRenderList();
}

async function noteDelete() {
    if (!noteCurrentId) return;
    if (!await showConfirm('이 노트를 삭제하시겠습니까?')) return;
    noteData = noteData.filter(function(x) { return x.id !== noteCurrentId; });
    noteSaveToStorage();
    noteCurrentId = null;
    var editor = document.getElementById('note-editor');
    var empty = document.getElementById('note-editor-empty');
    if (editor) editor.style.display = 'none';
    if (empty) empty.style.display = 'flex';
    noteRenderList();
}

// ===== 프로젝트 =====
let projData = [
    { id:1, name:'하반기 인사제도 개편', status:'In Progress', type:'인사', leader:'정수진', team:['인사팀'], start:'2025-07-01', end:'2025-09-30', progress:35,
      desc:'평가체계 개편, 복지제도 재설계, 직무등급 체계 수립',
      tasks:[
        { id:'t1a', text:'현행 평가체계 분석', done:true,  status:'Done',        assignee:'정수진', dueDate:'2025-07-15', detail:'' },
        { id:'t1b', text:'벤치마킹 리포트 작성', done:true, status:'Done',       assignee:'정수진', dueDate:'2025-07-31', detail:'' },
        { id:'t1c', text:'개편안 초안 작성', done:false,    status:'In Progress', assignee:'',      dueDate:'',          detail:'' },
        { id:'t1d', text:'경영진 보고', done:false,          status:'Todo',       assignee:'',      dueDate:'',          detail:'' },
        { id:'t1e', text:'최종안 확정', done:false,          status:'Todo',       assignee:'',      dueDate:'',          detail:'' },
      ]
    },
    { id:2, name:'ERP 시스템 오픈', status:'Archive', type:'IT', leader:'장민호', team:['IT팀','인사팀'], start:'2025-04-01', end:'2025-06-30', progress:100,
      desc:'케어링 그룹 통합 ERP 시스템 구축 및 오픈',
      tasks:[
        { id:'t2a', text:'요구사항 정의', done:true,  status:'Done', assignee:'장민호', dueDate:'2025-04-15', detail:'' },
        { id:'t2b', text:'시스템 설계',   done:true,  status:'Done', assignee:'장민호', dueDate:'2025-04-30', detail:'' },
        { id:'t2c', text:'개발 및 테스트',done:true,  status:'Done', assignee:'IT팀',   dueDate:'2025-05-31', detail:'' },
        { id:'t2d', text:'사용자 교육',   done:true,  status:'Done', assignee:'인사팀', dueDate:'2025-06-15', detail:'' },
        { id:'t2e', text:'정식 오픈',     done:true,  status:'Done', assignee:'장민호', dueDate:'2025-06-30', detail:'' },
      ]
    },
    { id:3, name:'하반기 신입 공채', status:'In Progress', type:'채용', leader:'김철수', team:['채용팀'], start:'2025-07-15', end:'2025-08-31', progress:20,
      desc:'2025년 하반기 신입사원 공채 진행',
      tasks:[
        { id:'t3a', text:'채용공고 게시',      done:true,  status:'Done',        assignee:'김철수', dueDate:'2025-07-15', detail:'' },
        { id:'t3b', text:'서류심사',           done:false, status:'In Progress', assignee:'',      dueDate:'2025-07-31', detail:'' },
        { id:'t3c', text:'1차 면접',           done:false, status:'Todo',        assignee:'',      dueDate:'',          detail:'' },
        { id:'t3d', text:'2차 면접',           done:false, status:'Todo',        assignee:'',      dueDate:'',          detail:'' },
        { id:'t3e', text:'최종 합격자 발표',   done:false, status:'Todo',        assignee:'',      dueDate:'',          detail:'' },
      ]
    },
    { id:4, name:'사무실 이전 준비', status:'Release', type:'총무', leader:'강지현', team:['총무팀'], start:'2025-05-01', end:'2025-06-28', progress:100,
      desc:'본사 사무실 강남구 역삼동 이전 준비',
      tasks:[
        { id:'t4a', text:'이전 계획 수립',  done:true, status:'Done', assignee:'강지현', dueDate:'2025-05-07', detail:'' },
        { id:'t4b', text:'인테리어 공사',   done:true, status:'Done', assignee:'총무팀', dueDate:'2025-05-31', detail:'' },
        { id:'t4c', text:'IT 인프라 이전',  done:true, status:'Done', assignee:'IT팀',   dueDate:'2025-06-20', detail:'' },
        { id:'t4d', text:'이전 완료',       done:true, status:'Done', assignee:'강지현', dueDate:'2025-06-28', detail:'' },
      ]
    },
    { id:5, name:'복지몰 제휴 확대', status:'Backlog', type:'경영지원', leader:'윤성호', team:['총무팀','경영지원팀'], start:'2025-08-01', end:'2025-10-31', progress:0,
      desc:'임직원 복지몰 제휴처 확대 및 포인트 한도 증액 검토',
      tasks:[
        { id:'t5a', text:'현행 제휴처 현황 파악', done:false, status:'Todo', assignee:'', dueDate:'', detail:'' },
        { id:'t5b', text:'추가 제휴 후보 선정',   done:false, status:'Todo', assignee:'', dueDate:'', detail:'' },
        { id:'t5c', text:'협의 및 계약',          done:false, status:'Todo', assignee:'', dueDate:'', detail:'' },
      ]
    },
];
let projCurrentFilter = '전체';
var projSearchQuery = '';
let projTypes = ['인사','IT','채용','총무','경영지원','마케팅','운영'];
let projTaskCurrentProjId = null;
let projTaskCurrentTaskId = null;

// 상태 → CSS 클래스 매핑
function projStatusCls(s) {
    var map = { 'Backlog':'proj-status-backlog', 'In Progress':'proj-status-inprogress',
                'Completed':'proj-status-completed', 'Confirm':'proj-status-confirm',
                'Release':'proj-status-release', 'Archive':'proj-status-archive' };
    return map[s] || 'proj-status-backlog';
}
// 상태 → 한글 표시명
function projStatusLabel(s) {
    var map = { 'Backlog':'준비 중', 'In Progress':'진행 중', 'Completed':'실행 완료',
                'Confirm':'검토 및 승인', 'Release':'배포 및 적용', 'Archive':'기록 및 자산화' };
    return map[s] || s;
}
// 태스크 상태 → 점 색상
function projTaskDotColor(s) {
    var map = { 'Todo':'#ccc', 'In Progress':'#1976d2', 'Done':'#388e3c' };
    return map[s] || '#ccc';
}
// 태스크 데이터 정규화 (구버전 호환)
function projNormalizeTask(t, idx) {
    return {
        id: t.id || ('t_' + Date.now() + '_' + idx),
        text: t.text || '',
        done: !!t.done,
        status: t.status || (t.done ? 'Done' : 'Todo'),
        assignee: t.assignee || '',
        dueDate: t.dueDate || '',
        detail: t.detail || '',
    };
}

function projInit() {
    nBlockEditorGlobalInit();
    var saved = projLoadLocal();
    if (saved) { projData = saved.data || saved; projTypes = saved.types || projTypes; }
    // 기존 태스크/프로젝트 정규화
    projData.forEach(function(p) {
        if (!p.tasks) p.tasks = [];
        p.tasks = p.tasks.map(projNormalizeTask);
        if (!p.descBlocks)   p.descBlocks   = [];
        if (!p.deliverables) p.deliverables = [];
        if (!p.references)   p.references   = [];
        if (!p.meetings)     p.meetings     = [];
        if (!p.sharedWith)   p.sharedWith   = [];
    });
    projRender();
}

function projFilter(f, btn) {
    projCurrentFilter = f;
    document.querySelectorAll('.proj-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    projRender();
}

function projSearchChange(val) {
    projSearchQuery = val.trim().toLowerCase();
    projRender();
}

function projRender() {
    var grid = document.getElementById('proj-grid');
    var toolbar = document.getElementById('proj-toolbar');
    if (!grid) return;

    // 서브메뉴에 따라 다른 뷰 표시
    if (projSubMenu === 'team') {
        if (toolbar) toolbar.style.display = 'none';
        grid.innerHTML = '<div class="proj-sub-placeholder">팀 프로젝트 기능은 팀 연동 설정 후 이용할 수 있습니다.<br><span style="font-size:12px;color:#ddd;">Team sync feature coming soon</span></div>';
        return;
    }
    if (projSubMenu === 'shared') {
        if (toolbar) toolbar.style.display = 'none';
        var sharedList = projData.filter(function(p){ return p.sharedWith && p.sharedWith.length > 0; });
        if (sharedList.length === 0) {
            grid.innerHTML = '<div class="proj-sub-placeholder">공유된 프로젝트가 없습니다.<br><span style="font-size:12px;color:#ddd;">프로젝트 추가 시 공유 대상을 설정하면 여기에 표시됩니다.</span></div>';
        } else {
            grid.innerHTML = sharedList.map(function(p) {
                var typeBadge = p.type ? '<span class="proj-type-badge">' + p.type + '</span>' : '';
                var doneCnt = (p.tasks||[]).filter(function(t){return t.done;}).length;
                var total = (p.tasks||[]).length;
                var shareNames = (p.sharedWith||[]).join(', ');
                return '<div class="proj-card" onclick="projDetailPageOpen(' + p.id + ')">' +
                    '<div class="proj-card-top">' +
                    '<span class="proj-status-badge ' + projStatusCls(p.status) + '">' + projStatusLabel(p.status) + '</span>' + typeBadge +
                    '<span class="proj-card-period">' + p.start + ' ~ ' + p.end + '</span>' +
                    '</div>' +
                    '<div class="proj-card-name">' + p.name + '</div>' +
                    '<div class="proj-card-desc">' + (p.desc || '') + '</div>' +
                    '<div class="proj-card-meta"><span>담당: ' + (p.leader||'—') + '</span><span style="color:#F36178;">공유: ' + shareNames + '</span></div>' +
                    '<div class="proj-progress-wrap">' +
                    '<div class="proj-progress-bar"><div class="proj-progress-fill" style="width:' + p.progress + '%"></div></div>' +
                    '<span class="proj-progress-lbl">' + doneCnt + '/' + total + '</span>' +
                    '</div></div>';
            }).join('');
        }
        return;
    }

    if (toolbar) toolbar.style.display = '';
    var list = projCurrentFilter === '전체' ? projData : projData.filter(function(p) { return p.status === projCurrentFilter; });
    if (projSearchQuery) {
        list = list.filter(function(p) {
            return (p.name||'').toLowerCase().indexOf(projSearchQuery) >= 0 ||
                   (p.desc||'').toLowerCase().indexOf(projSearchQuery) >= 0 ||
                   (p.leader||'').toLowerCase().indexOf(projSearchQuery) >= 0 ||
                   (p.type||'').toLowerCase().indexOf(projSearchQuery) >= 0 ||
                   (p.team||[]).join(' ').toLowerCase().indexOf(projSearchQuery) >= 0;
        });
    }
    if (list.length === 0) {
        var emptyMsg = projSearchQuery ? '"' + projSearchQuery + '" 검색 결과가 없습니다.' : '해당 프로젝트가 없습니다.';
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:#bbb;padding:60px;font-size:14px;">' + emptyMsg + '</div>';
        return;
    }
    grid.innerHTML = list.map(function(p) {
        var typeBadge = p.type ? '<span class="proj-type-badge">' + p.type + '</span>' : '';
        var doneCnt = (p.tasks || []).filter(function(t){return t.done;}).length;
        var total = (p.tasks || []).length;
        return '<div class="proj-card" onclick="projDetailPageOpen(' + p.id + ')">' +
            '<div class="proj-card-top">' +
            '<span class="proj-status-badge ' + projStatusCls(p.status) + '">' + projStatusLabel(p.status) + '</span>' + typeBadge +
            '<span class="proj-card-period">' + p.start + ' ~ ' + p.end + '</span>' +
            '</div>' +
            '<div class="proj-card-name">' + p.name + '</div>' +
            '<div class="proj-card-desc">' + (p.desc || '') + '</div>' +
            '<div class="proj-card-meta"><span>담당: ' + (p.leader||'—') + '</span><span>' + (p.team||[]).join(', ') + '</span></div>' +
            '<div class="proj-progress-wrap">' +
            '<div class="proj-progress-bar"><div class="proj-progress-fill" style="width:' + p.progress + '%"></div></div>' +
            '<span class="proj-progress-lbl">' + doneCnt + '/' + total + '</span>' +
            '</div></div>';
    }).join('');
}

// ── 하위메뉴 ──
var projSubMenu = 'my';
function projSubSwitch(type) {
    projSubMenu = type;
    document.querySelectorAll('.proj-submenu-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.getAttribute('data-type') === type);
    });
    projRender();
}

// ── 프로젝트 상세 풀페이지 ──
var projDetailCurrentId = null;
var projDetailCurrentTab = 'overview';
var projDetailAutoSaveTimer = null;

function projDetailPageOpen(id) {
    nBlockEditorGlobalInit();
    var p = projData.find(function(x){ return x.id === id; });
    if (!p) return;
    // 새 프로젝트 필드 초기화
    if (!p.descBlocks)   p.descBlocks   = [];
    if (!p.deliverables) p.deliverables = [];
    if (!p.references)   p.references   = [];
    if (!p.meetings)     p.meetings     = [];

    projDetailCurrentId = id;
    projDetailCurrentTab = 'overview';
    document.getElementById('proj-detail-page-name').textContent = p.name;
    document.querySelectorAll('.proj-detail-nav').forEach(function(btn) {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === 'overview');
    });
    document.getElementById('proj-detail-page').style.display = 'flex';
    projDetailRenderContent('overview');
}

function projDetailPageClose() {
    projDetailFlushSave();
    document.getElementById('proj-detail-page').style.display = 'none';
    projDetailCurrentId = null;
    nActiveEditorCtx = { type: 'note' };
    projRender();
}

function projDetailTab(tab) {
    if (projDetailCurrentTab === tab) return;
    projDetailFlushSave();
    projDetailCurrentTab = tab;
    document.querySelectorAll('.proj-detail-nav').forEach(function(btn) {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });
    projDetailRenderContent(tab);
}

function projDetailRenderContent(tab) {
    var p = projData.find(function(x){ return x.id === projDetailCurrentId; });
    if (!p) return;
    var content = document.getElementById('proj-detail-content');
    if (!content) return;
    content.innerHTML = '';
    if      (tab === 'overview')     projDetailRenderOverview(p, content);
    else if (tab === 'tasks')        projDetailRenderTasks(p, content);
    else if (tab === 'deliverables') projDetailRenderDeliverables(p, content);
    else if (tab === 'meetings')     projDetailRenderMeetings(p, content);
    else if (tab === 'references')   projDetailRenderReferences(p, content);
}

function projDetailRenderOverview(p, content) {
    // 메타 그리드
    var metaDiv = document.createElement('div');
    metaDiv.className = 'proj-detail-meta-grid';
    var sharedChips = (p.sharedWith && p.sharedWith.length)
        ? p.sharedWith.map(function(s){ return '<span class="proj-share-chip" style="font-size:11px;padding:2px 8px 2px 10px;">' + s + '</span>'; }).join('')
        : '—';
    metaDiv.innerHTML =
        '<div class="proj-detail-meta-item"><span class="proj-detail-lbl">단계</span><span class="proj-status-badge ' + projStatusCls(p.status) + '">' + projStatusLabel(p.status) + '</span></div>' +
        '<div class="proj-detail-meta-item"><span class="proj-detail-lbl">기간</span>' + (p.start||'—') + ' ~ ' + (p.end||'—') + '</div>' +
        '<div class="proj-detail-meta-item"><span class="proj-detail-lbl">담당자</span>' + (p.leader||'—') + '</div>' +
        '<div class="proj-detail-meta-item"><span class="proj-detail-lbl">팀</span>' + ((p.team&&p.team.length) ? p.team.join(', ') : '—') + '</div>' +
        (p.type ? '<div class="proj-detail-meta-item"><span class="proj-detail-lbl">유형</span><span class="proj-type-badge">' + p.type + '</span></div>' : '') +
        '<div class="proj-detail-meta-item" style="grid-column:1/-1;flex-wrap:wrap;gap:6px;align-items:center;"><span class="proj-detail-lbl">공유 대상</span>' + sharedChips + '</div>';
    content.appendChild(metaDiv);

    // 진행률
    var prog = document.createElement('div');
    prog.className = 'proj-progress-wrap';
    prog.style.marginBottom = '24px';
    var done = (p.tasks||[]).filter(function(t){return t.done;}).length;
    var total = (p.tasks||[]).length;
    prog.innerHTML = '<div class="proj-progress-bar"><div class="proj-progress-fill" style="width:' + p.progress + '%"></div></div><span class="proj-progress-lbl">' + done + '/' + total + ' 완료</span>';
    content.appendChild(prog);

    // 설명 에디터
    var hd = document.createElement('div');
    hd.className = 'proj-detail-section-hd';
    hd.innerHTML = '<span class="proj-detail-section-title">프로젝트 설명</span>';
    content.appendChild(hd);

    var wrap = document.createElement('div');
    wrap.className = 'proj-detail-editor-wrap';
    var ed = document.createElement('div');
    ed.id = 'proj-desc-editor';
    ed.className = 'note-blocks-editor nb-editor-zone';
    wrap.appendChild(ed);
    content.appendChild(wrap);

    var blocks = p.descBlocks && p.descBlocks.length ? p.descBlocks : [nBlkNew('p')];
    nZoneRender(ed, blocks);
    nSetupFileDropZone('proj-desc-editor');
    nActiveEditorCtx = { type: 'proj-section', section: 'desc', projId: p.id };
}

function projDetailRenderTasks(p, content) {
    nActiveEditorCtx = { type: 'note' };
    var done = (p.tasks||[]).filter(function(t){return t.done;}).length;
    var total = (p.tasks||[]).length;

    var hd = document.createElement('div');
    hd.className = 'proj-detail-section-hd';
    hd.innerHTML = '<span class="proj-detail-section-title">태스크</span>' +
        '<span class="proj-detail-section-sub">' + done + '/' + total + ' 완료</span>' +
        '<button class="proj-task-add-btn" onclick="projDetailAddTask()">+ 태스크 추가</button>';
    content.appendChild(hd);

    var prog = document.createElement('div');
    prog.className = 'proj-progress-wrap';
    prog.style.marginBottom = '14px';
    prog.innerHTML = '<div class="proj-progress-bar"><div class="proj-progress-fill" style="width:' + p.progress + '%"></div></div><span class="proj-progress-lbl">' + p.progress + '%</span>';
    content.appendChild(prog);

    var taskList = document.createElement('div');
    taskList.className = 'proj-detail-task-list';
    taskList.id = 'proj-detail-task-list';
    (p.tasks||[]).forEach(function(t) {
        var dotColor = projTaskDotColor(t.status||'Todo');
        var doneClass = t.done ? ' done' : '';
        var item = document.createElement('div');
        item.className = 'proj-task-item' + doneClass;
        item.innerHTML =
            '<input type="checkbox"' + (t.done?' checked':'') + ' onchange="projDetailToggleTask(\'' + t.id + '\',this)" onclick="event.stopPropagation()">' +
            '<span style="flex:1">' + (t.text||'') + '</span>' +
            '<div class="proj-task-item-right">' +
            '<span class="proj-task-status-dot" style="background:' + dotColor + '" title="' + (t.status||'Todo') + '"></span>' +
            (t.dueDate ? '<span style="font-size:11px;color:#bbb">' + t.dueDate + '</span>' : '') +
            '<button class="proj-task-open-btn" onclick="event.stopPropagation();projDetailOpenTask(\'' + t.id + '\')">상세 →</button>' +
            '</div>';
        taskList.appendChild(item);
    });
    content.appendChild(taskList);
}

function projDetailAddTask() {
    var list = document.getElementById('proj-detail-task-list');
    if (!list) return;
    if (list.querySelector('.proj-task-add-row')) return; // 이미 열려있음
    var row = document.createElement('div');
    row.className = 'proj-task-add-row';
    row.innerHTML =
        '<input class="proj-task-add-input" type="text" placeholder="태스크 이름 입력 후 Enter">' +
        '<button class="proj-task-add-confirm" onclick="projDetailAddTaskConfirm()">추가</button>' +
        '<button class="proj-task-add-cancel" onclick="this.closest(\'.proj-task-add-row\').remove()">취소</button>';
    list.appendChild(row);
    var inp = row.querySelector('.proj-task-add-input');
    inp.focus();
    inp.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') { e.preventDefault(); projDetailAddTaskConfirm(); }
        if (e.key === 'Escape') { row.remove(); }
    });
}

function projDetailAddTaskConfirm() {
    var inp = document.querySelector('.proj-task-add-input');
    if (!inp) return;
    var text = inp.value.trim();
    if (!text) { inp.focus(); return; }
    var p = projData.find(function(x){ return x.id === projDetailCurrentId; });
    if (!p) return;
    p.tasks.push({ id: nBlkGenId(), text: text, done: false, status: 'Todo', assignee: '', dueDate: '', blocks: [] });
    projSaveLocal();
    projDetailRenderContent('tasks');
}

function projDetailToggleTask(taskId, el) {
    var p = projData.find(function(x){ return x.id === projDetailCurrentId; });
    if (!p) return;
    var t = p.tasks.find(function(x){ return x.id === taskId; });
    if (!t) return;
    t.done = el.checked;
    t.status = t.done ? 'Done' : 'In Progress';
    p.progress = p.tasks.length ? Math.round(p.tasks.filter(function(x){return x.done;}).length / p.tasks.length * 100) : 0;
    projSaveLocal();
    projRender();
    projDetailRenderContent('tasks');
}

function projDetailOpenTask(taskId) {
    projTaskOpen(projDetailCurrentId, taskId);
}

function projDetailRenderDeliverables(p, content) {
    var hd = document.createElement('div');
    hd.className = 'proj-detail-section-hd';
    hd.innerHTML = '<span class="proj-detail-section-title">최종 결과물</span>';
    content.appendChild(hd);

    var desc = document.createElement('p');
    desc.style.cssText = 'font-size:12px;color:#bbb;margin:0 0 16px;';
    desc.textContent = '링크, 파일, 페이지 등 결과물을 자유롭게 기록하세요.';
    content.appendChild(desc);

    var wrap = document.createElement('div');
    wrap.className = 'proj-detail-editor-wrap';
    var ed = document.createElement('div');
    ed.id = 'proj-deliv-editor';
    ed.className = 'note-blocks-editor nb-editor-zone';
    wrap.appendChild(ed);
    content.appendChild(wrap);

    var blocks = p.deliverables && p.deliverables.length ? p.deliverables : [nBlkNew('p')];
    nZoneRender(ed, blocks);
    nSetupFileDropZone('proj-deliv-editor');
    nActiveEditorCtx = { type: 'proj-section', section: 'deliv', projId: p.id };
}

function projDetailRenderReferences(p, content) {
    var hd = document.createElement('div');
    hd.className = 'proj-detail-section-hd';
    hd.innerHTML = '<span class="proj-detail-section-title">참고자료</span>';
    content.appendChild(hd);

    var desc = document.createElement('p');
    desc.style.cssText = 'font-size:12px;color:#bbb;margin:0 0 16px;';
    desc.textContent = '프로젝트 진행에 참고한 자료, 링크, 파일을 아카이빙하세요.';
    content.appendChild(desc);

    var wrap = document.createElement('div');
    wrap.className = 'proj-detail-editor-wrap';
    var ed = document.createElement('div');
    ed.id = 'proj-ref-editor';
    ed.className = 'note-blocks-editor nb-editor-zone';
    wrap.appendChild(ed);
    content.appendChild(wrap);

    var blocks = p.references && p.references.length ? p.references : [nBlkNew('p')];
    nZoneRender(ed, blocks);
    nSetupFileDropZone('proj-ref-editor');
    nActiveEditorCtx = { type: 'proj-section', section: 'ref', projId: p.id };
}

function projDetailRenderMeetings(p, content) {
    nActiveEditorCtx = { type: 'note' };
    var hd = document.createElement('div');
    hd.className = 'proj-detail-section-hd';
    hd.innerHTML = '<span class="proj-detail-section-title">회의록</span>' +
        '<button class="proj-meeting-add-btn" onclick="projDetailMeetingNew()">+ 회의 추가</button>';
    content.appendChild(hd);

    var list = document.createElement('div');
    list.className = 'proj-meetings-list';
    list.id = 'proj-meetings-list';

    if (!p.meetings || p.meetings.length === 0) {
        list.innerHTML = '<div class="proj-detail-empty">아직 회의록이 없습니다.<br>회의 추가 버튼으로 새 회의록을 작성하세요.</div>';
    } else {
        p.meetings.slice().reverse().forEach(function(m) {
            var item = document.createElement('div');
            item.className = 'proj-meeting-item';
            item.setAttribute('data-mid', m.id);
            item.innerHTML =
                '<div class="proj-meeting-item-hd">' +
                '<span class="proj-meeting-item-title">' + (m.title||'제목 없음') + '</span>' +
                '<span class="proj-meeting-item-date">' + (m.date||'') + '</span>' +
                '<button class="proj-meeting-del-btn" title="삭제" onclick="event.stopPropagation();projDetailMeetingDel(\'' + m.id + '\')">×</button>' +
                '</div>';
            item.addEventListener('click', function() { projDetailMeetingOpen(m.id); });
            list.appendChild(item);
        });
    }
    content.appendChild(list);
}

function projDetailMeetingNew() {
    var p = projData.find(function(x){ return x.id === projDetailCurrentId; });
    if (!p) return;
    if (!p.meetings) p.meetings = [];
    var mid = 'm' + Date.now();
    var today = new Date().toISOString().split('T')[0];
    p.meetings.push({ id: mid, title: '새 회의', date: today, blocks: [] });
    projSaveLocal();
    projDetailMeetingOpen(mid);
}

function projDetailMeetingOpen(mid) {
    var p = projData.find(function(x){ return x.id === projDetailCurrentId; });
    if (!p) return;
    var m = (p.meetings||[]).find(function(x){ return x.id === mid; });
    if (!m) return;

    var content = document.getElementById('proj-detail-content');
    content.innerHTML = '';

    var backBtn = document.createElement('button');
    backBtn.className = 'proj-meeting-back-btn';
    backBtn.textContent = '← 회의록 목록';
    backBtn.onclick = function() { projDetailFlushSave(); projDetailRenderMeetings(p, content); };
    content.appendChild(backBtn);

    var titleRow = document.createElement('div');
    titleRow.className = 'proj-meeting-title-row';
    var titleInp = document.createElement('input');
    titleInp.className = 'proj-meeting-title-input';
    titleInp.type = 'text';
    titleInp.value = m.title || '';
    titleInp.placeholder = '회의 제목';
    titleInp.oninput = function() {
        m.title = titleInp.value;
        projSaveLocal();
    };
    var dateInp = makeDateSplitEl('dsp-meet', m.date || '', function(v) {
        m.date = v;
        projSaveLocal();
    });
    titleRow.appendChild(titleInp);
    titleRow.appendChild(dateInp);
    content.appendChild(titleRow);

    var wrap = document.createElement('div');
    wrap.className = 'proj-detail-editor-wrap';
    var ed = document.createElement('div');
    ed.id = 'proj-meeting-' + mid + '-editor';
    ed.className = 'note-blocks-editor nb-editor-zone';
    wrap.appendChild(ed);
    content.appendChild(wrap);

    var blocks = m.blocks && m.blocks.length ? m.blocks : [nBlkNew('p')];
    nZoneRender(ed, blocks);
    nSetupFileDropZone('proj-meeting-' + mid + '-editor');
    nActiveEditorCtx = { type: 'proj-section', section: 'meeting', projId: p.id, meetingId: mid };

    setTimeout(function() { titleInp.select(); titleInp.focus(); }, 60);
}

async function projDetailMeetingDel(mid) {
    var p = projData.find(function(x){ return x.id === projDetailCurrentId; });
    if (!p || !p.meetings) return;
    if (!await showConfirm('이 회의록을 삭제하시겠습니까?')) return;
    p.meetings = p.meetings.filter(function(m){ return m.id !== mid; });
    projSaveLocal();
    projDetailRenderContent('meetings');
}

// 프로젝트 상세 페이지 자동저장
function projDetailAutoSave() {
    if (projDetailAutoSaveTimer) clearTimeout(projDetailAutoSaveTimer);
    var ss = document.getElementById('proj-detail-save-status');
    if (ss && !ss.textContent) ss.textContent = '...';
    projDetailAutoSaveTimer = setTimeout(function() { projDetailFlushSave(); }, 700);
}

function projDetailFlushSave() {
    if (projDetailAutoSaveTimer) { clearTimeout(projDetailAutoSaveTimer); projDetailAutoSaveTimer = null; }
    var ctx = nActiveEditorCtx;
    if (ctx.type !== 'proj-section') return;
    var p = projData.find(function(x){ return x.id === ctx.projId; });
    if (!p) return;

    var z;
    if (ctx.section === 'desc') {
        z = document.getElementById('proj-desc-editor');
        if (z) p.descBlocks = nGetBlocks(z);
    } else if (ctx.section === 'deliv') {
        z = document.getElementById('proj-deliv-editor');
        if (z) p.deliverables = nGetBlocks(z);
    } else if (ctx.section === 'ref') {
        z = document.getElementById('proj-ref-editor');
        if (z) p.references = nGetBlocks(z);
    } else if (ctx.section === 'meeting' && ctx.meetingId) {
        var m = (p.meetings||[]).find(function(x){ return x.id === ctx.meetingId; });
        if (m) {
            z = document.getElementById('proj-meeting-' + ctx.meetingId + '-editor');
            if (z) m.blocks = nGetBlocks(z);
        }
    }
    projSaveLocal();
    var ss = document.getElementById('proj-detail-save-status');
    if (ss) { ss.textContent = '저장됨'; setTimeout(function(){ if(ss) ss.textContent = ''; }, 1500); }
}

// 편집 버튼
function projDetailEditCurrent() {
    if (!projDetailCurrentId) return;
    projDetailFlushSave();
    projFormOpenEdit(projDetailCurrentId);
}

function projOpenDetail(id) {
    var p = projData.find(function(x){return x.id===id;});
    if (!p) return;
    document.getElementById('proj-modal-title').textContent = p.name;
    var doneCnt = (p.tasks||[]).filter(function(t){return t.done;}).length;
    var total = (p.tasks||[]).length;
    var typeHtml = p.type ? '<div><span class="proj-detail-lbl">유형</span><span class="proj-type-badge">' + p.type + '</span></div>' : '';
    var taskHtml = (p.tasks||[]).map(function(t) {
        var dotColor = projTaskDotColor(t.status);
        var doneClass = t.done ? ' done' : '';
        return '<div class="proj-task-item' + doneClass + '" onclick="event.stopPropagation()">' +
            '<input type="checkbox"' + (t.done?' checked':'') + ' onchange="projToggleTask(' + id + ',\'' + t.id + '\',this)" onclick="event.stopPropagation()">' +
            '<span style="flex:1">' + t.text + '</span>' +
            '<div class="proj-task-item-right">' +
            '<span class="proj-task-status-dot" style="background:' + dotColor + '" title="' + (t.status||'Todo') + '"></span>' +
            (t.dueDate ? '<span style="font-size:11px;color:#bbb">' + t.dueDate + '</span>' : '') +
            '<button class="proj-task-open-btn" onclick="event.stopPropagation();projTaskOpen(' + id + ',\'' + t.id + '\')">상세 →</button>' +
            '</div></div>';
    }).join('');
    document.getElementById('proj-modal-body').innerHTML =
        '<div class="proj-detail-meta">' +
        '<div><span class="proj-detail-lbl">단계</span><span class="proj-status-badge ' + projStatusCls(p.status) + '">' + p.status + '</span></div>' +
        '<div><span class="proj-detail-lbl">기간</span>' + p.start + ' ~ ' + p.end + '</div>' +
        '<div><span class="proj-detail-lbl">담당자</span>' + (p.leader||'—') + '</div>' +
        '<div><span class="proj-detail-lbl">팀</span>' + (p.team||[]).join(', ') + '</div>' +
        typeHtml + '</div>' +
        '<div class="proj-detail-desc">' + (p.desc||'') + '</div>' +
        '<div class="proj-detail-task-hd">태스크 <span style="color:#aaa;font-size:12px;font-weight:400;">' + doneCnt + '/' + total + ' 완료</span></div>' +
        '<div class="proj-progress-wrap" style="margin-bottom:12px;">' +
        '<div class="proj-progress-bar"><div class="proj-progress-fill" style="width:' + p.progress + '%"></div></div>' +
        '<span class="proj-progress-lbl">' + p.progress + '%</span></div>' +
        taskHtml;
    document.getElementById('proj-modal-bg').style.display = 'flex';
}

function projToggleTask(projId, taskId, el) {
    var p = projData.find(function(x){return x.id===projId;});
    if (!p) return;
    var t = p.tasks.find(function(x){return x.id===taskId;});
    if (!t) return;
    t.done = el.checked;
    t.status = t.done ? 'Done' : 'In Progress';
    p.progress = p.tasks.length ? Math.round(p.tasks.filter(function(x){return x.done;}).length / p.tasks.length * 100) : 0;
    projSaveLocal();
    projRender();
    projOpenDetail(projId);
}

function projCloseModal(e) {
    if (!e || e.target === document.getElementById('proj-modal-bg')) {
        document.getElementById('proj-modal-bg').style.display = 'none';
    }
}

var projFormCurrentEditId = null; // null = 새 프로젝트, id = 편집 중인 프로젝트
var projFormShareList = []; // 현재 폼의 공유 대상 목록

function projFormShareRenderChips() {
    var chips = document.getElementById('pf-share-chips');
    if (!chips) return;
    chips.innerHTML = projFormShareList.map(function(name, i) {
        return '<span class="proj-share-chip">' + name +
               '<button class="proj-share-chip-del" type="button" onclick="projFormShareRemove(' + i + ')">×</button>' +
               '</span>';
    }).join('');
}

function projFormShareAdd(val) {
    val = val.trim();
    if (!val) return;
    if (projFormShareList.indexOf(val) < 0) {
        projFormShareList.push(val);
        projFormShareRenderChips();
    }
    var inp = document.getElementById('pf-share-input');
    if (inp) inp.value = '';
}

function projFormShareRemove(idx) {
    projFormShareList.splice(idx, 1);
    projFormShareRenderChips();
}

function projFormShareKeydown(e) {
    var inp = e.target;
    if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        projFormShareAdd(inp.value);
    } else if (e.key === 'Backspace' && inp.value === '' && projFormShareList.length > 0) {
        projFormShareList.pop();
        projFormShareRenderChips();
    }
}

function projFormShareInputChange(val) {
    // 쉼표 입력 시 자동 추가
    if (val.indexOf(',') >= 0) {
        val.split(',').forEach(function(v) { projFormShareAdd(v); });
    }
}

function projNew() {
    projFormCurrentEditId = null;
    projFormShareList = [];
    document.getElementById('pf-name').value = '';
    document.getElementById('pf-desc').value = '';
    document.getElementById('pf-status').value = 'Backlog';
    document.getElementById('pf-leader').value = '';
    setDateVal('pf-start', '');
    setDateVal('pf-end', '');
    document.getElementById('pf-team').value = '';
    document.getElementById('pf-share-input').value = '';
    document.getElementById('pf-task-list').innerHTML = '';
    projFormShareRenderChips();
    document.getElementById('proj-form-title').textContent = '프로젝트 추가';
    projFormRenderTypeSelect(null);
    projFormAddTask();
    document.getElementById('proj-form-bg').style.display = 'flex';
    setTimeout(function() { document.getElementById('pf-name').focus(); }, 80);
}

function projFormOpenEdit(id) {
    var p = projData.find(function(x){ return x.id === id; });
    if (!p) return;
    projFormCurrentEditId = id;
    projFormShareList = (p.sharedWith || []).slice();
    document.getElementById('pf-name').value = p.name || '';
    document.getElementById('pf-desc').value = p.desc || '';
    document.getElementById('pf-status').value = p.status || 'Backlog';
    document.getElementById('pf-leader').value = p.leader !== '—' ? (p.leader||'') : '';
    setDateVal('pf-start', p.start !== '—' ? (p.start||'') : '');
    setDateVal('pf-end',   p.end   !== '—' ? (p.end||'')   : '');
    document.getElementById('pf-team').value = (p.team||[]).join(', ');
    document.getElementById('pf-share-input').value = '';
    projFormShareRenderChips();
    projFormRenderTypeSelect(p.type||null);
    document.getElementById('pf-task-list').innerHTML = '';
    (p.tasks||[]).forEach(function(t) { projFormAddTask(t.text); });
    document.getElementById('proj-form-title').textContent = '프로젝트 편집';
    document.getElementById('proj-form-bg').style.display = 'flex';
    setTimeout(function() { document.getElementById('pf-name').focus(); }, 80);
}

function projFormRenderTypeSelect(selectedType) {
    var sel = document.getElementById('pf-type');
    if (!sel) return;
    sel.innerHTML = '<option value="">유형 없음</option>' +
        projTypes.map(function(t) {
            return '<option value="' + t + '"' + (t === selectedType ? ' selected' : '') + '>' + t + '</option>';
        }).join('');
}

function projFormAddTask(value) {
    var list = document.getElementById('pf-task-list');
    var row = document.createElement('div');
    row.className = 'proj-form-task-row';
    var inp = document.createElement('input');
    inp.type = 'text';
    inp.placeholder = '작업 내용을 입력하세요';
    inp.value = value || '';
    inp.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') { e.preventDefault(); projFormAddTask(); setTimeout(function() { var rows = list.querySelectorAll('.proj-form-task-row input'); if (rows.length) rows[rows.length-1].focus(); }, 30); }
    });
    var del = document.createElement('button');
    del.className = 'proj-form-task-del';
    del.innerHTML = '×';
    del.title = '삭제';
    del.onclick = function() { row.remove(); };
    row.appendChild(inp);
    row.appendChild(del);
    list.appendChild(row);
    inp.focus();
}

function projFormClose(e) {
    if (!e || e.target === document.getElementById('proj-form-bg')) {
        document.getElementById('proj-form-bg').style.display = 'none';
    }
}

function projFormSave() {
    var name = (document.getElementById('pf-name').value || '').trim();
    if (!name) {
        document.getElementById('pf-name').focus();
        document.getElementById('pf-name').style.borderColor = '#F36178';
        setTimeout(function() { document.getElementById('pf-name').style.borderColor = ''; }, 1500);
        showToast('프로젝트명을 입력해주세요.', 'error');
        return;
    }
    var teamRaw = (document.getElementById('pf-team').value || '').trim();
    var team = teamRaw ? teamRaw.split(/[,，]/).map(function(s) { return s.trim(); }).filter(Boolean) : [];
    var newStatus = document.getElementById('pf-status').value || 'Backlog';
    var newStart  = document.getElementById('pf-start').value || '—';
    var newEnd    = document.getElementById('pf-end').value || '—';
    var newLeader = document.getElementById('pf-leader').value.trim() || '—';
    var newDesc      = document.getElementById('pf-desc').value.trim();
    var newType      = document.getElementById('pf-type').value || '';
    // 입력창에 아직 확정 안 된 값도 추가
    var shareInput = (document.getElementById('pf-share-input').value || '').trim();
    if (shareInput && projFormShareList.indexOf(shareInput) < 0) projFormShareList.push(shareInput);
    var newSharedWith = projFormShareList.slice();

    if (projFormCurrentEditId !== null) {
        // ── 편집 모드 ──
        var p = projData.find(function(x){ return x.id === projFormCurrentEditId; });
        if (!p) return;
        var taskInputs = Array.from(document.querySelectorAll('#pf-task-list .proj-form-task-row input'))
            .map(function(inp) { return inp.value.trim(); }).filter(Boolean);
        // 기존 태스크는 유지하고, 새로 추가된 것만 추가
        var existingNames = (p.tasks||[]).map(function(t){ return t.text; });
        taskInputs.forEach(function(text) {
            if (existingNames.indexOf(text) < 0) {
                p.tasks.push({ id: nBlkGenId(), text: text, done: false, status: 'Todo', assignee: '', dueDate: '', blocks: [] });
            }
        });
        p.name       = name;
        p.desc       = newDesc;
        p.status     = newStatus;
        p.type       = newType;
        p.start      = newStart;
        p.end        = newEnd;
        p.leader     = newLeader;
        p.team       = team;
        p.sharedWith = newSharedWith;
        projSaveLocal();
        projFormClose();
        projRender();
        // 상세 페이지가 열려 있으면 이름 갱신
        var dp = document.getElementById('proj-detail-page');
        if (dp && dp.style.display !== 'none') {
            document.getElementById('proj-detail-page-name').textContent = p.name;
            projDetailRenderContent(projDetailCurrentTab);
        }
        showToast('프로젝트가 수정되었습니다.', 'success');
    } else {
        // ── 추가 모드 ──
        var tasks = Array.from(document.querySelectorAll('#pf-task-list .proj-form-task-row input'))
            .map(function(inp) { return inp.value.trim(); })
            .filter(Boolean)
            .map(function(text) {
                return { id: nBlkGenId(), text: text, done: false, status: 'Todo', assignee: '', dueDate: '', blocks: [] };
            });
        var maxId = projData.reduce(function(m, p) { return Math.max(m, p.id || 0); }, 0);
        var newProj = {
            id: maxId + 1,
            name: name, desc: newDesc, status: newStatus, type: newType,
            start: newStart, end: newEnd, leader: newLeader, team: team,
            sharedWith: newSharedWith,
            progress: 0, tasks: tasks,
            descBlocks: [], deliverables: [], references: [], meetings: [],
        };
        projData.push(newProj);
        projSaveLocal();
        projFormClose();
        projCurrentFilter = '전체';
        document.querySelectorAll('.proj-filter-btn').forEach(function(b, i) { b.classList.toggle('active', i === 0); });
        projRender();
        showToast('프로젝트가 추가되었습니다.', 'success');
    }
}

function projSaveLocal() {
    try { localStorage.setItem('projData', JSON.stringify({ data: projData, types: projTypes })); } catch(e) {}
}

function projLoadLocal() {
    try {
        var saved = localStorage.getItem('projData');
        if (saved) { var parsed = JSON.parse(saved); if (parsed) return parsed; }
    } catch(e) {}
    return null;
}

// ── 태스크 상세 풀페이지 ──
var projTaskAutoSaveTimer = null;

function projTaskOpen(projId, taskId) {
    var p = projData.find(function(x){return x.id===projId;});
    if (!p) return;
    var t = p.tasks.find(function(x){return x.id===taskId;});
    if (!t) return;

    projTaskCurrentProjId = projId;
    projTaskCurrentTaskId = taskId;
    nActiveEditorCtx = { type: 'task', projId: projId, taskId: taskId };

    // 브레드크럼
    document.getElementById('proj-task-page-proj-name').textContent = p.name;
    document.getElementById('proj-task-page-task-name').textContent = t.text || '(제목 없음)';

    // 제목
    document.getElementById('proj-task-page-title').value = t.text || '';

    // 메타
    document.getElementById('proj-task-page-status').value = t.status || 'Todo';
    document.getElementById('proj-task-page-assignee').value = t.assignee || '';
    setDateVal('proj-task-page-due', t.dueDate || '');

    // 저장 상태 초기화
    var ss = document.getElementById('proj-task-page-save-status');
    if (ss) ss.textContent = '';

    // 블록 에디터 렌더
    var zone = document.getElementById('proj-task-blocks-editor');
    if (zone) {
        var blocks = (t.blocks && t.blocks.length) ? t.blocks : [{ id: nBlkGenId(), type: 'p', html: '', checked: false, collapsed: false, indent: 0 }];
        // 구버전 detail 문자열 마이그레이션
        if (!t.blocks && t.detail) {
            blocks = t.detail.split('\n').filter(function(l){return l.trim();}).map(function(line){
                var d = document.createElement('div'); d.textContent = line;
                return { id: nBlkGenId(), type: 'p', html: d.innerHTML, checked: false, collapsed: false, indent: 0 };
            });
            if (!blocks.length) blocks = [{ id: nBlkGenId(), type: 'p', html: '', checked: false, collapsed: false, indent: 0 }];
        }
        nZoneRender(zone, blocks);
    }

    // 프로젝트 상세 모달 닫기
    document.getElementById('proj-modal-bg').style.display = 'none';

    // 풀페이지 표시
    document.getElementById('proj-task-page').style.display = 'flex';

    // 타이틀에 포커스
    setTimeout(function() {
        var titleInp = document.getElementById('proj-task-page-title');
        if (titleInp) { titleInp.focus(); titleInp.select(); }
    }, 60);
}

function projTaskPageAutoSave() {
    if (projTaskAutoSaveTimer) clearTimeout(projTaskAutoSaveTimer);
    var ss = document.getElementById('proj-task-page-save-status');
    if (ss) ss.textContent = '...';
    projTaskAutoSaveTimer = setTimeout(function() {
        projTaskPageFlushSave();
    }, 700);
}

function projTaskPageFlushSave() {
    var projId = projTaskCurrentProjId;
    var taskId = projTaskCurrentTaskId;
    if (!projId || !taskId) return;
    var p = projData.find(function(x){return x.id===projId;});
    if (!p) return;
    var t = p.tasks.find(function(x){return x.id===taskId;});
    if (!t) return;

    var titleVal = (document.getElementById('proj-task-page-title').value || '').trim();
    if (titleVal) t.text = titleVal;
    t.status = document.getElementById('proj-task-page-status').value;
    t.done = (t.status === 'Done');
    t.assignee = document.getElementById('proj-task-page-assignee').value.trim();
    t.dueDate = document.getElementById('proj-task-page-due').value;

    var zone = document.getElementById('proj-task-blocks-editor');
    if (zone) t.blocks = nGetBlocks(zone);

    p.progress = p.tasks.length ? Math.round(p.tasks.filter(function(x){return x.done;}).length / p.tasks.length * 100) : 0;
    projSaveLocal();
    projRender();

    // 브레드크럼 태스크명 갱신
    var bc = document.getElementById('proj-task-page-task-name');
    if (bc) bc.textContent = t.text || '(제목 없음)';
    var ss = document.getElementById('proj-task-page-save-status');
    if (ss) { ss.textContent = '저장됨'; setTimeout(function(){ if(ss) ss.textContent=''; }, 1800); }
}

function projTaskPageTitleChange() {
    projTaskPageAutoSave();
}

function projTaskPageMetaChange() {
    projTaskPageAutoSave();
}

function projTaskPageClose() {
    // 즉시 저장 후 닫기
    if (projTaskAutoSaveTimer) { clearTimeout(projTaskAutoSaveTimer); projTaskAutoSaveTimer = null; }
    projTaskPageFlushSave();

    document.getElementById('proj-task-page').style.display = 'none';

    var projId = projTaskCurrentProjId;
    projTaskCurrentProjId = null;
    projTaskCurrentTaskId = null;

    // 상세 풀페이지에서 열었으면 → 상세 페이지 태스크 탭 갱신
    var detailPage = document.getElementById('proj-detail-page');
    if (detailPage && detailPage.style.display !== 'none') {
        nActiveEditorCtx = { type: 'note' };
        var p = projData.find(function(x){ return x.id === projDetailCurrentId; });
        if (p) {
            var content = document.getElementById('proj-detail-content');
            projDetailRenderTasks(p, content);
        }
    } else {
        nActiveEditorCtx = { type: 'note' };
        if (projId) setTimeout(function() { projOpenDetail(projId); }, 30);
    }
}

// ── 유형 관리 ──
function projTypeManagerOpen() {
    projTypeRenderList();
    document.getElementById('proj-type-bg').style.display = 'flex';
    document.getElementById('proj-type-input').value = '';
}

function projTypeRenderList() {
    var list = document.getElementById('proj-type-list');
    if (!list) return;
    var colors = ['#F36178','#1976d2','#388e3c','#e65100','#7b1fa2','#546e7a','#d81b60','#00796b','#f57f17'];
    if (!projTypes.length) {
        list.innerHTML = '<div style="color:#ccc;font-size:13px;padding:8px 0;">등록된 유형이 없습니다.</div>';
        return;
    }
    list.innerHTML = projTypes.map(function(t, i) {
        var color = colors[i % colors.length];
        return '<div class="proj-type-item">' +
            '<div class="proj-type-item-name">' +
            '<span class="proj-type-color-dot" style="background:' + color + '"></span>' + t + '</div>' +
            '<button class="proj-type-del-btn" onclick="projTypeDel(\'' + t.replace(/'/g,"\\'") + '\')" title="삭제">×</button>' +
            '</div>';
    }).join('');
}

function projTypeAdd() {
    var inp = document.getElementById('proj-type-input');
    var name = (inp.value || '').trim();
    if (!name) { inp.focus(); return; }
    if (projTypes.indexOf(name) >= 0) { showToast('이미 존재하는 유형입니다.', 'error'); return; }
    projTypes.push(name);
    projSaveLocal();
    inp.value = '';
    projTypeRenderList();
    projFormRenderTypeSelect(document.getElementById('pf-type') ? document.getElementById('pf-type').value : null);
    showToast('\'' + name + '\' 유형이 추가되었습니다.', 'success');
}

function projTypeDel(name) {
    projTypes = projTypes.filter(function(t){return t!==name;});
    projSaveLocal();
    projTypeRenderList();
    projFormRenderTypeSelect(null);
}

function projTypeManagerClose(e) {
    if (!e || e.target === document.getElementById('proj-type-bg')) {
        document.getElementById('proj-type-bg').style.display = 'none';
    }
}

/* ───────────────────────────────
   급여명세서조회
─────────────────────────────── */

function salFmt(n) {
    var absN = Math.abs(n);
    var str = absN.toLocaleString() + '원';
    return n < 0 ? '-' + str : str;
}

function salRender() {
    var selEl = document.getElementById('sal-year-select');
    var year = selEl ? parseInt(selEl.value) : 2026;
    if (isNaN(year)) year = 2026;
    var list = salData[year] || [];

    // 연간 요약 — 개별 셀 직접 업데이트
    var totalPay = 0, totalDed = 0;
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list[i].payItems.length; j++) totalPay += list[i].payItems[j].amt;
        for (var k = 0; k < list[i].dedItems.length; k++) totalDed += list[i].dedItems[k].amt;
    }
    var totalNet = totalPay - totalDed;
    var elPay = document.getElementById('sal-total-pay');
    var elDed = document.getElementById('sal-total-ded');
    var elNet = document.getElementById('sal-total-net');
    if (elPay) elPay.textContent = salFmt(totalPay);
    if (elDed) elDed.textContent = salFmt(totalDed);
    if (elNet) elNet.textContent = salFmt(totalNet);

    // 월별 카드
    var grid = document.getElementById('sal-grid');
    if (!grid) return;
    if (list.length === 0) {
        grid.innerHTML = '<div class="sal-empty">해당 연도의 급여 데이터가 없습니다.</div>';
        return;
    }
    var months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
    var html = '';
    for (var m = 0; m < list.length; m++) {
        var d = list[m];
        var pay = 0, ded = 0;
        for (var p = 0; p < d.payItems.length; p++) pay += d.payItems[p].amt;
        for (var q = 0; q < d.dedItems.length; q++) ded += d.dedItems[q].amt;
        var net = pay - ded;
        html += '<div class="sal-card" onclick="salOpenDetail(' + year + ',' + d.month + ')">' +
            '<div class="sal-card-month">' + months[d.month - 1] + '</div>' +
            '<div class="sal-card-paydate">지급일 ' + d.payDate + '</div>' +
            '<div class="sal-card-divider"></div>' +
            '<div class="sal-card-row"><span class="sal-card-lbl">지급합계</span><span class="sal-card-val">' + salFmt(pay) + '</span></div>' +
            '<div class="sal-card-row"><span class="sal-card-lbl">공제합계</span><span class="sal-card-val ded">-' + salFmt(ded) + '</span></div>' +
            '<div class="sal-card-row net-row"><span class="sal-card-lbl">실수령액</span><span class="sal-card-val net">' + salFmt(net) + '</span></div>' +
            '<div class="sal-card-btn">명세서 보기</div>' +
            '</div>';
    }
    grid.innerHTML = html;
}

function salOpenDetail(year, month) {
    const d = (salData[year] || []).find(x => x.month === month);
    if (!d) return;
    const months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
    const pay = d.payItems.reduce((a,i) => a+i.amt, 0);
    const ded = d.dedItems.reduce((a,i) => a+i.amt, 0);
    const net = pay - ded;

    document.getElementById('sal-modal-title').textContent = `${year}년 ${months[month-1]} 급여명세서`;
    document.getElementById('sal-modal-sub').textContent = `지급일: ${d.payDate} · 유단비 · CF26030901`;

    document.getElementById('sal-modal-body').innerHTML = `
        <div class="sal-detail-net">
            <div class="sal-detail-net-lbl">실수령액</div>
            <div class="sal-detail-net-amt">${salFmt(net)}</div>
        </div>
        <div class="sal-detail-cols">
            <div class="sal-detail-col">
                <div class="sal-detail-col-title pay">지급 내역</div>
                ${d.payItems.map(i => `<div class="sal-detail-row"><span>${i.label}</span><span>${salFmt(i.amt)}</span></div>`).join('')}
                <div class="sal-detail-total pay">합계 ${salFmt(pay)}</div>
            </div>
            <div class="sal-detail-col">
                <div class="sal-detail-col-title ded">공제 내역</div>
                ${d.dedItems.map(i => `<div class="sal-detail-row"><span>${i.label}</span><span>${salFmt(i.amt)}</span></div>`).join('')}
                <div class="sal-detail-total ded">합계 ${salFmt(ded)}</div>
            </div>
        </div>`;

    document.getElementById('sal-modal-bg').style.display = 'flex';
}

function salCloseModal(e) {
    if (!e || e.target === document.getElementById('sal-modal-bg')) {
        document.getElementById('sal-modal-bg').style.display = 'none';
    }
}

function salInit() { salRender(); }

/* ───────────────────────────────
   내 인사정보
─────────────────────────────── */
function myHrTab(tab, btn) {
    ['basic','family','career','cert','appoint','eval','reward'].forEach(t => {
        const el = document.getElementById('my-hr-' + t);
        if (el) el.style.display = t === tab ? '' : 'none';
    });
    document.querySelectorAll('.my-hr-tab').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

function myHrAvatarChange(input) {
    if (!input.files || !input.files[0]) return;
    const reader = new FileReader();
    reader.onload = e => {
        const img = document.getElementById('my-hr-avatar-img');
        if (img) { img.src = e.target.result; img.style.objectFit = 'cover'; }
        localStorage.setItem('myHrAvatar', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
}

/* ───────────────────────────────
   AI 챗봇
─────────────────────────────── */
const chatbotReplies = {
    '안녕': '안녕하세요! 무엇이든 물어보세요 😊',
    '인사': '인사 관련 문의는 [인사관리] 메뉴에서 확인하실 수 있습니다. 직원 등록, 발령, 인사기록카드 등을 관리할 수 있어요.',
    '급여': '급여 관련 기능은 현재 준비 중입니다. 추후 급여 명세서, 공제 내역 등을 확인할 수 있게 될 예정이에요.',
    '공지': '공지사항은 좌측 메뉴 [게시판 > 공지사항]에서 확인하실 수 있습니다.',
    '발령': '인사발령은 [인사관리 > 인사발령]에서 신청, 처리, 내역을 관리할 수 있습니다.',
    '설문': '설문조사는 [게시판 > 설문조사]에서 참여하고 결과를 확인할 수 있습니다.',
    '게시판': '게시판에는 공지사항, 자유게시판, 설문조사, Q&A가 있습니다.',
    '비밀번호': '비밀번호 변경은 시스템 관리자에게 문의하세요.',
    '로그아웃': '화면 우측 상단의 사용자 아이콘을 클릭하면 로그아웃할 수 있습니다.',
    '연차': '연차 관련 기능은 현재 개발 중입니다. 곧 업데이트될 예정이에요.',
    '부서': '부서 정보는 [시스템설정 > 부서 정보]에서 확인하실 수 있습니다.',
    'q&a': 'Q&A는 [게시판 > Q&A]에서 부서별 자주 묻는 질문과 답변을 확인할 수 있습니다.',
    '도움': '도움이 필요하신가요? 인사, 급여, 발령, 게시판 등 궁금한 키워드를 입력해보세요!',
    '감사': '천만에요! 더 궁금한 점이 있으면 언제든지 물어보세요 😊',
};

const chatbotDefaultReplies = [
    '죄송해요, 정확히 이해하지 못했어요. 다른 표현으로 다시 물어봐 주시겠어요? 😅',
    '해당 내용은 확인이 필요합니다. 관련 메뉴를 직접 확인하시거나 관리자에게 문의해보세요.',
    '더 자세한 도움이 필요하시면 인사팀에 문의해 주세요! 제가 알고 있는 키워드: 인사, 급여, 발령, 공지, 게시판, 설문 등이에요.',
];

let chatbotOpen = false;

/* FAB 클릭 이벤트 - onclick 속성 의존 없이 addEventListener 방식 */
document.addEventListener('DOMContentLoaded', function () {
    var fab = document.getElementById('chatbot-fab');
    if (fab) fab.addEventListener('click', chatbotToggle);

    // 대시보드 환영 배너 날짜/이름
    var days = ['일','월','화','수','목','금','토'];
    var now = new Date();
    var dateStr = now.getFullYear() + '년 ' + (now.getMonth()+1) + '월 ' + now.getDate() + '일 (' + days[now.getDay()] + ')';
    var el = document.getElementById('dash-today');
    if (el) el.textContent = dateStr;
});

function chatbotToggle() {
    chatbotOpen = !chatbotOpen;
    var box     = document.getElementById('chatbot-box');
    var fab     = document.getElementById('chatbot-fab');
    var dot     = document.getElementById('chatbot-dot');
    var closeIc = document.getElementById('chatbot-close-icon');
    var input   = document.getElementById('chatbot-input');

    if (box)     box.style.display = chatbotOpen ? 'flex' : 'none';
    if (closeIc) closeIc.style.display = chatbotOpen ? 'inline' : 'none';
    if (dot)     dot.style.display = chatbotOpen ? 'none' : 'block';
    if (fab) {
        if (chatbotOpen) fab.classList.add('is-open');
        else             fab.classList.remove('is-open');
    }
    if (chatbotOpen && input) setTimeout(function(){ input.focus(); }, 100);
}

function chatbotClose() {
    chatbotOpen = true;   /* toggle이 반전시킴 */
    chatbotToggle();
}

function chatbotSend() {
    const input = document.getElementById('chatbot-input');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';

    // 사용자 메시지 추가
    chatbotAppend('user', text);

    // 타이핑 인디케이터
    const typingId = 'chatbot-typing-' + Date.now();
    const msgs = document.getElementById('chatbot-messages');
    const typing = document.createElement('div');
    typing.className = 'chatbot-msg bot chatbot-typing';
    typing.id = typingId;
    typing.innerHTML = `<div class="chatbot-bubble"><span class="chatbot-dot-anim"></span><span class="chatbot-dot-anim"></span><span class="chatbot-dot-anim"></span></div>`;
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;

    // 응답 딜레이
    setTimeout(() => {
        document.getElementById(typingId)?.remove();
        const reply = chatbotGetReply(text);
        chatbotAppend('bot', reply);
    }, 900 + Math.random() * 400);
}

function chatbotAppend(role, text) {
    const msgs = document.getElementById('chatbot-messages');
    const div = document.createElement('div');
    div.className = `chatbot-msg ${role}`;
    div.innerHTML = `<div class="chatbot-bubble">${text}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
}

function chatbotGetReply(text) {
    const lower = text.toLowerCase().replace(/\s/g, '');
    for (const [key, val] of Object.entries(chatbotReplies)) {
        if (lower.includes(key.replace(/\s/g, ''))) return val;
    }
    return chatbotDefaultReplies[Math.floor(Math.random() * chatbotDefaultReplies.length)];
}

/* 환영 배너 프로필 사진 */
function welcomeProfileChange(input) {
    if (!input.files || !input.files[0]) return;
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.getElementById('welcome-profile-img');
        if (img) {
            img.src = e.target.result;
            img.style.objectFit = 'cover';
            img.style.opacity = '1';
            localStorage.setItem('welcomeProfileImg', e.target.result);
        }
    };
    reader.readAsDataURL(input.files[0]);
}

document.addEventListener('DOMContentLoaded', function() {
    // 인사 데이터 복원 (새로고침 유지)
    hrDataLoad();

    // 내 인사정보 아바타 복원
    var savedHrAvatar = localStorage.getItem('myHrAvatar');
    if (savedHrAvatar) {
        var hrImg = document.getElementById('my-hr-avatar-img');
        if (hrImg) { hrImg.src = savedHrAvatar; hrImg.style.objectFit = 'cover'; }
    }
    // 저장된 프로필 사진 복원
    var saved = localStorage.getItem('welcomeProfileImg');
    if (saved) {
        var img = document.getElementById('welcome-profile-img');
        if (img) {
            img.src = saved;
            img.style.objectFit = 'cover';
            img.style.opacity = '1';
        }
    }
    // 동그라미 클릭 시 파일 선택
    var circle = document.getElementById('welcome-profile-circle');
    if (circle) {
        circle.addEventListener('click', function() {
            document.getElementById('welcome-profile-input').click();
        });
    }
});

// ═══════════════════════════════════════════
// ───────────── 평가관리 시스템 ─────────────
// ═══════════════════════════════════════════

var evalForms       = [];   // 평가 양식 목록
var evalAssignments = [];   // 평가 배정 목록
var evalResponses   = [];   // 제출된 평가 응답
var evalCurrentUser = '';   // 현재 사용자 이름
var evalInited      = false;
var evalSettingsCurrentTab = 'forms';
var evalFormEditorId = null; // null=신규, id=편집중

// ── 저장/로드 ──
function evalSaveLocal() {
    try {
        localStorage.setItem('evalData', JSON.stringify({
            forms: evalForms, assignments: evalAssignments,
            responses: evalResponses, currentUser: evalCurrentUser
        }));
    } catch(e) {}
}
function evalLoadLocal() {
    try { var s = localStorage.getItem('evalData'); return s ? JSON.parse(s) : null; } catch(e) { return null; }
}
function evalGenId() { return 'ev' + Date.now().toString(36) + Math.random().toString(36).slice(2,5); }

function evalInit() {
    if (evalInited) return;
    evalInited = true;
    var saved = evalLoadLocal();
    if (saved) {
        evalForms       = saved.forms       || [];
        evalAssignments = saved.assignments || [];
        evalResponses   = saved.responses   || [];
        evalCurrentUser = saved.currentUser || '';
    }
    evalSeedDemo();
    evalSeedDemo2026Peer();
}

function evalSeedDemo() {
    var SEED_FLAG = 'ev-demo-peer-ydb-v1';
    if (evalForms.find(function(f){ return f.id === SEED_FLAG; })) return;

    var formId = SEED_FLAG;
    var qs = [
        { id: 'dq1', text: '업무 전문성 및 역량', type: 'rating', scale: 5, points: 25 },
        { id: 'dq2', text: '팀워크 및 협업 태도', type: 'rating', scale: 5, points: 25 },
        { id: 'dq3', text: '의사소통 능력', type: 'rating', scale: 5, points: 25 },
        { id: 'dq4', text: '적극성 및 책임감', type: 'rating', scale: 5, points: 25 }
    ];
    var tqs = [
        { id: 'dq5', text: '이 동료의 강점을 자유롭게 서술해 주세요.', type: 'text' },
        { id: 'dq6', text: '개선이 필요한 점이 있다면 작성해 주세요.', type: 'text' }
    ];

    evalForms.push({
        id: formId,
        title: '2025년 상반기 동료평가',
        anonymous: true,
        blocks: [],
        ratingQuestions: qs,
        textQuestions: tqs
    });

    var evaluators = ['김간호', '이지원', '박민준', '최수아', '정하늘'];
    var aIds = evaluators.map(function(name, i) { return 'da' + i; });

    evaluators.forEach(function(name, i) {
        evalAssignments.push({
            id: aIds[i], type: 'peer',
            evaluatorName: name, evaluateeName: '유단비',
            formId: formId, startDate: '2025-06-01', endDate: '2025-06-30', status: 'submitted'
        });
    });

    var seeds = [
        { scores: [5,4,5,5], str: '업무 처리 속도가 빠르고 정확해서 팀 전체의 신뢰를 받고 있습니다. 특히 어려운 케이스에서도 침착하게 대처하는 모습이 인상적입니다.', imp: '가끔 혼자 해결하려는 경향이 있어 도움을 요청하는 타이밍이 조금 아쉬울 때가 있습니다.' },
        { scores: [4,5,4,4], str: '동료들과의 협력이 자연스럽고 분위기를 긍정적으로 이끄는 능력이 뛰어납니다. 어떤 상황에서도 밝은 태도를 유지해 줘서 감사합니다.', imp: '좀 더 적극적으로 의견을 제시해 주면 팀 회의가 더 풍성해질 것 같습니다.' },
        { scores: [5,5,5,4], str: '소통이 명확하고 보고 내용이 항상 체계적으로 정리되어 있어 업무 파악이 쉽습니다. 후배들에게도 친절하게 설명해 주는 모습이 좋습니다.', imp: '가끔 세부 사항에 너무 집착하는 경향이 있어 큰 그림을 놓치는 경우가 있었습니다.' },
        { scores: [4,4,5,5], str: '어떤 업무든 꼼꼼하게 마무리하고 책임감이 강합니다. 급박한 상황에서도 우선순위를 잘 정리하는 능력이 탁월합니다.', imp: '개인 의견을 표현하는 데 조금 더 자신감을 가져도 좋을 것 같습니다.' },
        { scores: [5,4,4,5], str: '맡은 역할을 끝까지 완수하는 태도가 돋보이며, 팀워크 측면에서도 항상 모범이 됩니다. 업무 지식도 풍부해 옆에 있으면 든든합니다.', imp: '새로운 시도에 대해 조금 더 열린 자세를 가지면 더욱 성장할 수 있을 것 같습니다.' }
    ];

    seeds.forEach(function(s, i) {
        var answers = qs.map(function(q, qi) {
            return { questionId: q.id, value: s.scores[qi] };
        });
        answers.push({ questionId: 'dq5', value: s.str });
        answers.push({ questionId: 'dq6', value: s.imp });
        evalResponses.push({
            id: 'dr' + i, assignmentId: aIds[i],
            evaluatorName: evaluators[i], evaluateeName: '유단비',
            type: 'peer', formId: formId,
            submittedAt: '2025-06-' + (10 + i * 4),
            answers: answers
        });
    });

    evalSaveLocal();
}

function evalSeedDemo2026Peer() {
    var SEED_FLAG = 'ev-demo-lead-peer-2026-v1';
    if (evalForms.find(function(f){ return f.id === SEED_FLAG; })) return;

    var formId = SEED_FLAG;
    var items = [
        { id:'lpq_s1',  itemType:'section', title:'업무 성과 및 전문성' },
        { id:'lpq1',    itemType:'scale', text:'담당 업무에 대한 전문 지식이 충분하다', scale:5 },
        { id:'lpq2',    itemType:'scale', text:'주어진 목표를 기한 내에 완수한다', scale:5 },
        { id:'lpq3',    itemType:'scale', text:'업무 결과물의 완성도가 높다', scale:5 },
        { id:'lpq_s2',  itemType:'section', title:'리더십 및 협업' },
        { id:'lpq4',    itemType:'scale', text:'팀원의 의견을 경청하고 존중한다', scale:5 },
        { id:'lpq5',    itemType:'scale', text:'팀 목표를 위해 자신의 역할을 명확히 수행한다', scale:5 },
        { id:'lpq6',    itemType:'scale', text:'도움이 필요한 동료를 적극적으로 지원한다', scale:5 },
        { id:'lpq7',    itemType:'scale', text:'갈등 상황에서 건설적으로 해결책을 제시한다', scale:5 },
        { id:'lpq_s3',  itemType:'section', title:'의사소통 및 피드백' },
        { id:'lpq8',    itemType:'scale', text:'업무 관련 내용을 명확하게 전달한다', scale:5 },
        { id:'lpq9',    itemType:'scale', text:'피드백을 수용하고 개선에 반영한다', scale:5 },
        { id:'lpq_s4',  itemType:'section', title:'태도 및 성장' },
        { id:'lpq10',   itemType:'scale', text:'새로운 도전과 변화에 유연하게 대응한다', scale:5 },
        { id:'lpq11',   itemType:'scale', text:'지속적인 학습과 자기 개발에 노력한다', scale:5 },
        { id:'lpq_t1',  itemType:'text', text:'이 리드의 가장 큰 강점을 구체적으로 서술해 주세요.' },
        { id:'lpq_t2',  itemType:'text', text:'개선이 필요한 부분이 있다면 솔직하게 작성해 주세요.' },
        { id:'lpq_t3',  itemType:'text', text:'리드로서 팀에 기여한 점 중 가장 인상적인 사례를 적어주세요.' },
        { id:'lpq_t4',  itemType:'text', text:'향후 성장을 위해 어떤 역량을 개발하면 좋을지 제안해 주세요.' },
        { id:'lpq_t5',  itemType:'text', text:'이 리드와 함께 일하면서 특별히 감사한 점이 있다면 적어주세요.' }
    ];

    evalForms.push({
        id: formId, title: '리드 동료 피드백',
        formType: 'peer', year: '2026', anonymous: true,
        items: items, blocks: []
    });

    var evaluators = ['김민서', '이준혁', '박소연', '정우진', '최아름', '한동현'];
    var aIds = evaluators.map(function(n, i){ return 'lpa' + i; });
    evaluators.forEach(function(name, i){
        evalAssignments.push({
            id: aIds[i], type: 'peer',
            evaluatorName: name, evaluateeName: '유단비',
            formId: formId, startDate: '2026-03-01', endDate: '2026-03-31', status: 'submitted'
        });
    });

    var scaleIds = ['lpq1','lpq2','lpq3','lpq4','lpq5','lpq6','lpq7','lpq8','lpq9','lpq10','lpq11'];
    var seeds = [
        { sc:[5,5,4,5,5,5,4,5,5,4,5],
          t1:'업무 전반에 대한 깊은 이해를 바탕으로 팀원들이 막히는 부분을 빠르게 해결해 줍니다. 복잡한 케이스에서도 흔들리지 않고 방향을 제시하는 능력이 탁월합니다.',
          t2:'결정을 내리기 전에 팀원들과 더 많은 논의 시간이 있으면 좋겠다는 생각이 들 때가 있습니다.',
          t3:'신규 프로세스 도입 시 직접 매뉴얼을 작성하고 팀 전체를 교육하셔서 업무 혼선을 최소화해 주셨습니다.',
          t4:'대외적인 커뮤니케이션 역량을 더 키우면 팀 전체의 대외 인지도 향상에도 도움이 될 것 같습니다.',
          t5:'야근이 있는 날에도 항상 팀원들의 상태를 먼저 챙겨주셔서 정말 감사합니다.' },
        { sc:[4,5,5,4,5,4,5,4,5,5,4],
          t1:'팀 내 갈등이 생겼을 때 중립적인 시각으로 조율해 주는 능력이 매우 뛰어납니다. 모두의 의견을 존중하면서도 결론을 이끌어 내는 모습이 인상적입니다.',
          t2:'업무량이 많을 때 혼자 처리하려는 경향이 있어 팀원에게 분배하는 부분에서 조금 더 유연해지면 좋겠습니다.',
          t3:'팀워크가 흔들렸던 시기에 개별 면담을 통해 각자의 고충을 듣고 팀 분위기를 빠르게 회복시켜 준 것이 기억에 남습니다.',
          t4:'새로운 기술 트렌드에 대한 스터디를 팀과 함께 하면 집단 성장에 큰 도움이 될 것 같습니다.',
          t5:'어떤 질문을 해도 무시하지 않고 성실하게 답해 주셔서 항상 편하게 여쭤볼 수 있었습니다.' },
        { sc:[5,4,5,5,4,5,4,5,4,5,5],
          t1:'보고 자료나 공유 내용이 항상 명확하게 정리되어 있어 팀원 모두가 빠르게 이해할 수 있습니다. 정보를 구조적으로 전달하는 능력이 탁월합니다.',
          t2:'세부 사항에 집중하다 보니 일정 관리에서 소소한 누락이 생기는 경우가 있었습니다.',
          t3:'월간 리뷰 때마다 팀 전체의 성과와 개선점을 체계적으로 정리해서 발표해 주신 것이 매우 도움이 됐습니다.',
          t4:'프로젝트 관리 도구나 협업 툴을 적극 활용하면 팀 효율이 더 높아질 것 같습니다.',
          t5:'어려운 상황에서도 유머를 잃지 않고 팀 분위기를 밝게 유지해 주셔서 감사합니다.' },
        { sc:[4,4,4,5,5,4,4,4,4,4,4],
          t1:'팀원들의 성장을 진심으로 응원하고 지원해 주는 모습이 느껴집니다. 격려의 말 한마디가 힘이 될 때가 많았습니다.',
          t2:'의사결정 후에 그 배경과 이유를 좀 더 상세히 공유해 주시면 팀원들이 방향을 더 잘 이해할 수 있을 것 같습니다.',
          t3:'바쁜 시기에도 1:1 피드백 시간을 꼬박꼬박 지켜주신 것이 업무 방향을 잡는 데 큰 도움이 되었습니다.',
          t4:'외부 네트워크를 넓혀 팀에 새로운 인사이트를 가져오는 활동을 늘려가면 좋을 것 같습니다.',
          t5:'칭찬을 아끼지 않으시고 작은 성취에도 인정해 주셔서 동기부여가 많이 되었습니다.' },
        { sc:[5,5,5,4,5,5,5,5,5,5,5],
          t1:'책임감과 전문성이 팀에서 단연 돋보입니다. 어떤 프로젝트에서도 끝까지 완수하는 태도가 팀 전체에 긍정적인 영향을 미칩니다.',
          t2:'완벽함을 추구하다 보니 속도가 늦어지는 경우가 있습니다. 80% 완성도로 빠르게 내보내고 피드백을 받는 방식도 고려해 보면 좋겠습니다.',
          t3:'갑작스러운 인력 부족 상황에서 공백을 메워 프로젝트 일정을 지켜내신 것이 대단했습니다.',
          t4:'발표나 프레젠테이션 역량을 키우면 팀의 성과를 더 효과적으로 알릴 수 있을 것 같습니다.',
          t5:'믿고 따를 수 있는 리드가 있다는 것이 얼마나 큰 안정감을 주는지 실감하고 있습니다. 감사합니다.' },
        { sc:[4,5,4,4,4,5,4,4,5,4,5],
          t1:'팀 내에서 모르는 게 없을 정도로 도메인 지식이 넓습니다. 어떤 질문에도 근거 있는 답변을 주시는 것이 팀 전체의 성장에 도움이 됩니다.',
          t2:'바쁠 때는 응답이 늦어지는 경우가 있어 간단한 사항이라도 확인 메시지를 남겨주시면 좋겠습니다.',
          t3:'신입 팀원 온보딩 시 직접 짝이 되어 2주간 꼼꼼하게 안내해 주신 덕분에 팀에 빠르게 적응할 수 있었습니다.',
          t4:'자신만의 노하우나 경험을 문서화해서 팀 자산으로 남겨두면 지식 공유에 큰 도움이 될 것 같습니다.',
          t5:'항상 정직하고 공정하게 대해주셔서 신뢰하고 일할 수 있는 환경을 만들어 주심에 감사합니다.' }
    ];

    seeds.forEach(function(s, i){
        var answers = scaleIds.map(function(qid, qi){ return { questionId: qid, value: s.sc[qi] }; });
        answers.push({ questionId:'lpq_t1', value:s.t1 });
        answers.push({ questionId:'lpq_t2', value:s.t2 });
        answers.push({ questionId:'lpq_t3', value:s.t3 });
        answers.push({ questionId:'lpq_t4', value:s.t4 });
        answers.push({ questionId:'lpq_t5', value:s.t5 });
        var d = 5 + i * 4;
        evalResponses.push({
            id: 'lpr' + i, assignmentId: aIds[i],
            evaluatorName: evaluators[i], evaluateeName: '유단비',
            type: 'peer', formId: formId,
            submittedAt: '2026-03-' + (d < 10 ? '0' : '') + d,
            answers: answers
        });
    });

    evalSaveLocal();
}

// ── 현재 사용자 설정 배너 ──
function evalUserBannerHtml(wrapId) {
    if (evalCurrentUser) {
        return '<div class="eval-user-banner">' +
            '<span class="eval-user-banner-label">현재 사용자:</span>' +
            '<span class="eval-user-name">' + evalCurrentUser + '</span>' +
            '<button class="eval-user-change-btn" onclick="evalUserChange(\'' + wrapId + '\')">변경</button>' +
            '</div>';
    }
    return '<div class="eval-user-banner">' +
        '<div class="eval-user-set-row" style="width:100%">' +
        '<span class="eval-user-banner-label" style="white-space:nowrap;">내 이름을 입력하세요</span>' +
        '<input class="eval-user-set-input" id="eval-user-input-' + wrapId + '" type="text" placeholder="예: 김간호" onkeydown="if(event.key===\'Enter\')evalUserSave(\'' + wrapId + '\')">' +
        '<button class="eval-user-set-btn" onclick="evalUserSave(\'' + wrapId + '\')">확인</button>' +
        '</div></div>';
}
function evalUserSave(wrapId) {
    var inp = document.getElementById('eval-user-input-' + wrapId);
    if (!inp || !inp.value.trim()) return;
    evalCurrentUser = inp.value.trim();
    evalSaveLocal();
    if (wrapId === 'self')      evalSelfRender();
    if (wrapId === 'peer')      evalPeerRender();
    if (wrapId === 'probation') evalProbationRender();
    if (wrapId === 'multi')     evalMultiRender();
}
function evalUserChange(wrapId) {
    evalCurrentUser = '';
    evalSaveLocal();
    if (wrapId === 'self')      evalSelfRender();
    if (wrapId === 'peer')      evalPeerRender();
    if (wrapId === 'probation') evalProbationRender();
    if (wrapId === 'multi')     evalMultiRender();
}

// ══════════════════════════════════════
// ─── 셀프평가 / 동료평가 화면 ───
// ══════════════════════════════════════
function evalSelfRender() {
    evalMyEvalRender('eval-self-wrap', 'self', '셀프평가', 'self');
}
function evalPeerRender() {
    evalMyEvalRender('eval-peer-wrap', 'peer', '동료평가', 'peer');
}
function evalProbationRender() {
    evalMyEvalRender('eval-probation-wrap', 'probation', '수습평가', 'probation');
}
function evalMultiRender() {
    evalMyEvalRender('eval-multi-wrap', 'multi', '다면평가', 'multi');
}

function evalMyEvalRender(wrapId, type, typeLabel, userWrapId) {
    var wrap = document.getElementById(wrapId);
    if (!wrap) return;

    var html = evalUserBannerHtml(userWrapId);

    if (!evalCurrentUser) { wrap.innerHTML = html; return; }

    var myAssigns = evalAssignments.filter(function(a) {
        return a.type === type && a.evaluatorName === evalCurrentUser;
    });

    if (myAssigns.length === 0) {
        html += '<div class="eval-empty">배정된 ' + typeLabel + '가 없습니다.</div>';
    } else {
        html += '<div class="eval-card-list">';
        var today = new Date().toISOString().split('T')[0];
        myAssigns.forEach(function(a) {
            var resp = evalResponses.find(function(r){ return r.assignmentId === a.id; });
            var isSubmitted = !!resp;
            var deadlinePassed = a.endDate && today > a.endDate;
            var form = evalForms.find(function(f){ return f.id === a.formId; });
            var formName = form ? form.title : '(양식 없음)';
            var canOpen = !deadlinePassed || isSubmitted;
            var statusLabel = isSubmitted
                ? (deadlinePassed ? '제출완료' : '제출완료 · 수정 가능')
                : (deadlinePassed ? '기한 만료' : '미제출');
            var statusClass = isSubmitted ? 'submitted' : 'pending';
            var clickAttr = canOpen ? ' onclick="evalFormPageOpen(\'' + a.id + '\')"' : '';
            html += '<div class="eval-card ' + (isSubmitted ? 'submitted' : '') + (canOpen ? ' clickable' : '') + '"' + clickAttr + '>' +
                '<span class="eval-type-badge eval-type-' + type + '">' + typeLabel + '</span>' +
                '<div class="eval-card-info">' +
                '<div class="eval-card-title">' + (type === 'self' ? '나 (' + a.evaluateeName + ')' : a.evaluateeName) + ' 평가</div>' +
                '<div class="eval-card-sub">' + formName + (a.startDate && a.endDate ? ' · ' + a.startDate + ' ~ ' + a.endDate : a.period ? ' · ' + a.period : '') + '</div>' +
                '</div>' +
                '<span class="eval-card-status ' + statusClass + '">' + statusLabel + '</span>' +
                '</div>';
        });
        html += '</div>';
    }
    wrap.innerHTML = html;
}

// ══════════════════════════════════════
// ─── 평가 작성 풀페이지 ───
// ══════════════════════════════════════
var evalFormPageCurrentAssignId = null;
var evalFormPageAnswers = {}; // { questionId: value }

function evalFormPageOpen(assignId) {
    var a = evalAssignments.find(function(x){ return x.id === assignId; });
    if (!a) return;
    var form = evalForms.find(function(f){ return f.id === a.formId; });
    if (!form) return;

    evalFormPageCurrentAssignId = assignId;
    evalFormPageAnswers = {};

    // 이미 응답한 경우 답변 로드
    var existing = evalResponses.find(function(r){ return r.assignmentId === assignId; });
    if (existing) {
        existing.answers.forEach(function(ans){ evalFormPageAnswers[ans.questionId] = ans.value; });
    }

    var today = new Date().toISOString().split('T')[0];
    var deadlinePassed = a.endDate && today > a.endDate;
    var isSubmitted = !!existing;
    var isReadOnly = deadlinePassed;

    // 상단 정보
    var typeLabel = a.type === 'self' ? '셀프평가' : a.type === 'probation' ? '수습평가' : '동료평가';
    var typeCls   = a.type === 'self' ? 'eval-type-self' : a.type === 'probation' ? 'eval-type-probation' : 'eval-type-peer';
    document.getElementById('eval-form-page-type').textContent = typeLabel;
    document.getElementById('eval-form-page-type').className = 'eval-type-badge ' + typeCls;
    document.getElementById('eval-form-page-title').textContent = form.title;
    document.getElementById('eval-form-page-evaluatee').textContent = '피평가자: ' + a.evaluateeName;

    // 뒤로가기 버튼 — 탭에 따라 다름
    document.getElementById('eval-form-back-btn').onclick = function() {
        document.getElementById('eval-form-page').style.display = 'none';
        if (a.type === 'self') evalSelfRender();
        else if (a.type === 'probation') evalProbationRender();
        else if (a.type === 'multi') evalMultiRender();
        else evalPeerRender();
    };

    // 질문 렌더
    var body = document.getElementById('eval-form-body');
    var isSubmitted = !!existing;
    var html = '';

    // 안내문 영역 (블록 에디터 읽기 전용) — 실제 내용이 있을 때만 표시
    var hasDescContent = (form.blocks||[]).some(function(b){
        return (b.html||'').replace(/<[^>]*>/g,'').trim().length > 0 || b.type==='divider' || b.type==='image';
    });
    if (hasDescContent) {
        html += '<div id="eval-form-desc-zone" class="eval-form-desc-ro"></div>';
    }

    var formItems = evalFormGetItems(form);
    var qNum = 0;

    formItems.forEach(function(item) {
        if (item.itemType === 'section') {
            html += '<div class="eval-editor-section-title" style="margin-top:8px;">' + (item.title || '—') + '</div>';
            return;
        }
        qNum++;
        var ans = evalFormPageAnswers[item.id];
        var pts = (item.itemType === 'scoring' && item.points) ? '<span class="eval-form-q-pts">(' + item.points + '점)</span>' : '';
        html += '<div class="eval-form-q-block">' +
            '<div class="eval-form-q-text">' + (item.text||'') + pts + '</div>';
        if (item.itemType === 'scoring') {
            var scale = item.scale || 5;
            html += '<div class="eval-rating-row">';
            for (var s = 1; s <= scale; s++) {
                var selc = (ans == s) ? ' selected' : '';
                var dis  = isReadOnly ? ' disabled' : '';
                html += '<button class="eval-rating-btn' + selc + '" data-qid="' + item.id + '" data-val="' + s + '"' + dis + ' onclick="evalRatingClick(this)">' + s + '</button>';
            }
            html += '</div>';
        } else if (item.itemType === 'scale') {
            var scale = item.scale || 5;
            var rowMaxW = scale * 64 + (scale - 1) * 6;
            html += '<div class="eval-scale-row" style="max-width:' + rowMaxW + 'px;">';
            for (var s = 1; s <= scale; s++) {
                var selc = (ans == s) ? ' selected' : '';
                var dis  = isReadOnly ? ' disabled' : '';
                var lbl = evalScaleLabel(scale, s - 1);
                html += '<div class="eval-scale-item">' +
                    '<button class="eval-scale-btn' + selc + '" data-qid="' + item.id + '" data-val="' + s + '"' + dis + ' onclick="evalRatingClick(this)">' + s + '</button>' +
                    '<span class="eval-scale-item-label">' + (lbl || '') + '</span>' +
                    '</div>';
            }
            html += '</div>';
        } else {
            html += '<textarea class="eval-form-textarea" data-qid="' + item.id + '"' +
                (isReadOnly ? ' readonly' : ' oninput="evalTextInput(this)"') + '>' +
                (ans || '') + '</textarea>';
        }
        html += '</div>';
    });

    if (isReadOnly) {
        html += isSubmitted
            ? '<div class="eval-form-submitted-msg">✓ 제출완료 · 기한이 지나 수정할 수 없습니다.</div>'
            : '<div class="eval-form-submitted-msg" style="color:#bbb;">⏰ 평가 기한이 지났습니다.</div>';
    } else {
        if (isSubmitted) {
            html += '<div class="eval-form-submitted-msg" style="color:#888;">이전 제출 내용을 불러왔습니다. 수정 후 다시 제출할 수 있습니다.</div>';
        }
        html += '<div class="eval-form-submit-row">' +
            '<button class="eval-form-submit-btn" onclick="evalFormSubmit()">' + (isSubmitted ? '수정 제출하기' : '제출하기') + '</button>' +
            '</div>';
    }
    body.innerHTML = html;

    // 안내문 블록 읽기 전용 렌더
    if (hasDescContent) {
        var descZone = document.getElementById('eval-form-desc-zone');
        if (descZone) {
            nBlockEditorGlobalInit();
            nZoneRender(descZone, form.blocks);
            descZone.querySelectorAll('[contenteditable]').forEach(function(el) {
                el.removeAttribute('contenteditable');
            });
        }
    }

    document.getElementById('eval-form-page').style.display = 'flex';
}

function evalRatingClick(btn) {
    var qid = btn.getAttribute('data-qid');
    var val = parseInt(btn.getAttribute('data-val'));
    evalFormPageAnswers[qid] = val;
    // 같은 질문의 모든 버튼 선택 해제 후 이 버튼만 선택
    document.querySelectorAll('.eval-rating-btn[data-qid="' + qid + '"],.eval-scale-btn[data-qid="' + qid + '"]').forEach(function(b){
        b.classList.remove('selected');
    });
    btn.classList.add('selected');
}
function evalTextInput(textarea) {
    evalFormPageAnswers[textarea.getAttribute('data-qid')] = textarea.value;
}

function evalFormSubmit() {
    var a = evalAssignments.find(function(x){ return x.id === evalFormPageCurrentAssignId; });
    if (!a) return;
    var form = evalForms.find(function(f){ return f.id === a.formId; });
    if (!form) return;

    // 기한 초과 확인
    var today = new Date().toISOString().split('T')[0];
    if (a.endDate && today > a.endDate) {
        showToast('평가 기한이 지났습니다.', 'error');
        return;
    }

    // 미답변 필수 질문 확인
    var unanswered = evalFormQItems(form).filter(function(q){
        return evalFormPageAnswers[q.id] === undefined || evalFormPageAnswers[q.id] === '';
    });
    if (unanswered.length > 0) {
        showToast('모든 질문에 답변해주세요.', 'error');
        return;
    }

    var answers = Object.keys(evalFormPageAnswers).map(function(qid){
        return { questionId: qid, value: evalFormPageAnswers[qid] };
    });
    var submittedAt = new Date().toISOString().split('T')[0];

    var existingResp = evalResponses.find(function(r){ return r.assignmentId === a.id; });
    if (existingResp) {
        existingResp.answers = answers;
        existingResp.submittedAt = submittedAt;
        showToast('평가가 수정되었습니다.', 'success');
    } else {
        evalResponses.push({
            id: evalGenId(),
            assignmentId: a.id,
            evaluatorName: a.evaluatorName,
            evaluateeName: a.evaluateeName,
            type: a.type,
            formId: a.formId,
            period: a.period || '',
            submittedAt: submittedAt,
            answers: answers
        });
        a.status = 'submitted';
        showToast('평가가 제출되었습니다.', 'success');
    }
    evalSaveLocal();
    document.getElementById('eval-form-page').style.display = 'none';
    if (a.type === 'self') evalSelfRender();
    else if (a.type === 'probation') evalProbationRender();
    else if (a.type === 'multi') evalMultiRender();
    else evalPeerRender();
}

// ══════════════════════════════════════
// ─── 평가작성 (통합 탭) ───
// ══════════════════════════════════════
var evalWriteActiveType = 'self';

function evalWriteRender() {
    evalWriteSwitchType(evalWriteActiveType, true);
    var fn = { probation: evalProbationRender, self: evalSelfRender, peer: evalPeerRender, multi: evalMultiRender };
    if (fn[evalWriteActiveType]) fn[evalWriteActiveType]();
}

function evalWriteSwitchType(type, skipRender) {
    evalWriteActiveType = type;
    document.querySelectorAll('.eval-write-type-tab').forEach(function(b) {
        b.classList.toggle('active', b.dataset.type === type);
    });
    document.querySelectorAll('.eval-write-section').forEach(function(s) {
        s.classList.toggle('active', s.id === 'eval-write-' + type);
    });
    if (!skipRender) {
        evalInit();
        var fn = { probation: evalProbationRender, self: evalSelfRender, peer: evalPeerRender, multi: evalMultiRender };
        if (fn[type]) fn[type]();
    }
}

// ══════════════════════════════════════
// ─── 목표관리 ───
// ══════════════════════════════════════
var goalData = { goals: [], assignments: [], achievements: [] };
var evalSynthParams = {};
var goalInited = false;
var goalSettingFilters = { year: '', dept: '', quarter: '', search: '' };
var goalSettingView = 'list'; // 'list' | 'detail'
var goalEditDraft = null;
var goalManageFilters = { year: '', dept: '', search: '' };
var goalManageDetailId = null;
var goalOverviewFilters = { year: '', dept: '', search: '' };

function goalSaveLocal() {
    try { localStorage.setItem('goalData', JSON.stringify(goalData)); } catch(e) {}
}
function goalLoadLocal() {
    try { var s = localStorage.getItem('goalData'); return s ? JSON.parse(s) : null; } catch(e) { return null; }
}
function goalGenId() { return 'gl' + Date.now().toString(36) + Math.random().toString(36).slice(2,5); }

function goalInit() {
    if (goalInited) return;
    goalInited = true;
    var saved = goalLoadLocal();
    if (saved) {
        goalData = saved;
        goalData.goals.forEach(function(g) { if (!g.subGoals) g.subGoals = []; });
        if (!goalData.achievements) goalData.achievements = [];
        if (!goalData.assignments) goalData.assignments = [];
    }
}

// ── 목표설정 ──
function goalSettingRender() {
    goalInit();
    var wrap = document.getElementById('goal-setting-wrap');
    if (!wrap) return;
    if (goalSettingView === 'detail') { goalSettingRenderDetail(wrap); return; }
    goalSettingRenderList(wrap);
}
function goalSettingRenderList(wrap) {
    var gf = goalSettingFilters;
    var years = [], depts = [];
    goalData.goals.forEach(function(g) {
        if (g.year && years.indexOf(g.year) < 0) years.push(g.year);
        if (g.dept && depts.indexOf(g.dept) < 0) depts.push(g.dept);
    });
    years.sort().reverse();
    var yearOpts = '<option value="">전체 년도</option>' + years.map(function(y){ return '<option value="'+y+'"'+(y===gf.year?' selected':'')+'>'+y+'년</option>'; }).join('');
    var deptOpts = '<option value="">전체 부서</option>' + depts.map(function(d){ return '<option value="'+d+'"'+(d===gf.dept?' selected':'')+'>'+d+'</option>'; }).join('');
    var qOpts = '<option value="">전체 분기</option>' + ['1분기','2분기','3분기','4분기'].map(function(q){ return '<option value="'+q+'"'+(q===gf.quarter?' selected':'')+'>'+q+'</option>'; }).join('');
    var filtered = goalData.goals.filter(function(g) {
        if (gf.year && g.year !== gf.year) return false;
        if (gf.dept && g.dept !== gf.dept) return false;
        if (gf.quarter && g.quarter !== gf.quarter) return false;
        if (gf.search) {
            var s = gf.search.toLowerCase();
            var hay = ((g.title||'')+(g.dept||'')+(g.year||'')+(g.desc||'')).toLowerCase();
            var sgHay = (g.subGoals||[]).map(function(sg){ return (sg.title||'')+' '+(sg.assignees||[]).join(' '); }).join(' ').toLowerCase();
            if (hay.indexOf(s) < 0 && sgHay.indexOf(s) < 0) return false;
        }
        return true;
    });
    var html = '<div class="eval-status-filter-bar">' +
        '<select class="eval-sfilter-sel" onchange="goalSettingSetFilter(\'year\',this.value)">' + yearOpts + '</select>' +
        '<select class="eval-sfilter-sel" onchange="goalSettingSetFilter(\'dept\',this.value)">' + deptOpts + '</select>' +
        '<select class="eval-sfilter-sel" onchange="goalSettingSetFilter(\'quarter\',this.value)">' + qOpts + '</select>' +
        '<div class="eval-sfilter-search-wrap"><svg class="eval-sfilter-search-icon" viewBox="0 0 20 20" fill="none"><circle cx="8.5" cy="8.5" r="5" fill="#DBEAFE" stroke="#3D8EF0" stroke-width="1.6"/><path d="M13 13l3 3" stroke="#3D8EF0" stroke-width="1.6" stroke-linecap="round"/></svg><input class="eval-sfilter-search" type="text" placeholder="이름으로 검색" value="' + (gf.search||'') + '" oninput="goalSettingSetFilter(\'search\',this.value)"></div>' +
        '<button class="eval-dl-btn" style="background:#F36178;color:#fff;border-color:#F36178;margin-left:auto;" onclick="goalSettingNewDetail()">+ 목표 추가</button>' +
        '</div>';
    if (filtered.length === 0) {
        html += '<div class="eval-empty">설정된 목표가 없습니다. 목표를 추가해 주세요.</div>';
    } else {
        html += '<table class="eval-status-table"><thead><tr><th style="width:44px;">순번</th><th>년도</th><th>분기</th><th>부서</th><th>목표명</th><th>가중치</th><th>세부목표</th><th>담당자</th><th>관리</th></tr></thead><tbody>';
        filtered.forEach(function(g, rowIdx) {
            var subGoals = g.subGoals || [];
            var allAssignees = [];
            subGoals.forEach(function(sg){ (sg.assignees||[]).forEach(function(a){ if(allAssignees.indexOf(a)<0) allAssignees.push(a); }); });
            var oldAsgns = goalData.assignments.filter(function(a){ return a.goalId === g.id; });
            oldAsgns.forEach(function(a){ if(allAssignees.indexOf(a.assignee)<0) allAssignees.push(a.assignee); });
            var assigneeStr = allAssignees.length === 0 ? '—' : allAssignees.slice(0,3).join(', ') + (allAssignees.length > 3 ? ' 외 '+(allAssignees.length-3)+'명' : '');
            html += '<tr class="goal-list-row" onclick="goalSettingEditDetail(\'' + g.id + '\')">' +
                '<td style="color:#bbb;font-size:12px;text-align:center;">' + (rowIdx+1) + '</td>' +
                '<td style="color:#888;">' + (g.year||'—') + '</td>' +
                '<td>' + (g.quarter||'—') + '</td>' +
                '<td>' + (g.dept||'—') + '</td>' +
                '<td style="text-align:left;font-weight:600;">' + (g.title||'—') + '</td>' +
                '<td>' + (g.weight||0) + '%</td>' +
                '<td>' + subGoals.length + '개</td>' +
                '<td style="text-align:left;color:#666;font-size:12px;">' + assigneeStr + '</td>' +
                '<td onclick="event.stopPropagation();">' +
                '<button class="eval-view-btn" onclick="goalSettingEditDetail(\'' + g.id + '\')">편집</button>' +
                ' <button class="eval-view-btn" style="color:#e05070;" onclick="goalSettingDel(\'' + g.id + '\')">삭제</button></td>' +
                '</tr>';
        });
        html += '</tbody></table>';
    }
    wrap.innerHTML = html;
}
function goalSettingSetFilter(key, val) { goalSettingFilters[key] = val; goalSettingRender(); }
function goalSettingNewDetail() {
    goalEditDraft = { id: null, year: new Date().getFullYear().toString(), quarter: '', dept: '', title: '', weight: 0, desc: '', descBlocks: [], subGoals: [] };
    goalSettingView = 'detail';
    goalSettingRender();
}
function goalSettingEditDetail(id) {
    var g = goalData.goals.find(function(x){ return x.id === id; });
    if (!g) return;
    goalEditDraft = JSON.parse(JSON.stringify(g));
    if (!goalEditDraft.subGoals) goalEditDraft.subGoals = [];
    if (!goalEditDraft.descBlocks) goalEditDraft.descBlocks = [];
    goalEditDraft.subGoals.forEach(function(sg) { if (!sg.descBlocks) sg.descBlocks = []; });
    goalSettingView = 'detail';
    goalSettingRender();
}
function goalSettingBackToList() {
    goalEditDraft = null;
    goalSettingView = 'list';
    nActiveEditorCtx = { type: 'note' };
    goalSettingRender();
}
function goalDraftReadForm() {
    if (!goalEditDraft) return;
    var f = function(id){ return document.getElementById(id); };
    if(f('gd-year')) goalEditDraft.year = f('gd-year').value.trim();
    if(f('gd-quarter')) goalEditDraft.quarter = f('gd-quarter').value;
    if(f('gd-dept')) goalEditDraft.dept = f('gd-dept').value.trim();
    if(f('gd-title')) goalEditDraft.title = f('gd-title').value.trim();
    if(f('gd-weight')) goalEditDraft.weight = parseInt(f('gd-weight').value||0);
    var mainZone = f('gd-desc-zone');
    if (mainZone) { goalEditDraft.descBlocks = nGetBlocks(mainZone); goalEditDraft.desc = nBlocksText(goalEditDraft.descBlocks); }
    goalEditDraft.subGoals.forEach(function(sg, i) {
        if(f('gsub-'+i+'-title')) sg.title = f('gsub-'+i+'-title').value.trim();
        if(f('gsub-'+i+'-weight')) sg.weight = parseInt(f('gsub-'+i+'-weight').value||0);
        if(f('gsub-'+i+'-assignees')) sg.assignees = f('gsub-'+i+'-assignees').value.split(',').map(function(s){ return s.trim(); }).filter(Boolean);
        var sgZone = f('gsub-'+i+'-desc-zone');
        if (sgZone) { sg.descBlocks = nGetBlocks(sgZone); sg.desc = nBlocksText(sg.descBlocks); }
    });
}
function goalDraftAddSub() {
    goalDraftReadForm();
    goalEditDraft.subGoals.push({ id: goalGenId(), title: '', desc: '', descBlocks: [], weight: 0, assignees: [] });
    var wrap = document.getElementById('goal-setting-wrap');
    if (wrap) goalSettingRenderDetail(wrap);
}
function goalDraftDelSub(idx) {
    goalDraftReadForm();
    goalEditDraft.subGoals.splice(idx, 1);
    var wrap = document.getElementById('goal-setting-wrap');
    if (wrap) goalSettingRenderDetail(wrap);
}
function goalSettingRenderDetail(wrap) {
    var g = goalEditDraft;
    if (!g) return;
    var subHtml = (g.subGoals||[]).map(function(sg, i) {
        return '<div class="goal-sub-item">' +
            '<div class="goal-sub-item-hd"><span class="goal-sub-item-num">세부 목표 ' + (i+1) + '</span>' +
            '<button class="goal-sub-del-btn" onclick="goalDraftDelSub(' + i + ')">× 삭제</button></div>' +
            '<div class="goal-sub-form">' +
            '<div class="goal-sub-row">' +
            '<input class="eval-editor-input goal-sub-title-input" id="gsub-'+i+'-title" placeholder="세부 목표명" value="' + (sg.title||'').replace(/"/g,'&quot;') + '">' +
            '<input class="eval-editor-input goal-sub-weight-input" id="gsub-'+i+'-weight" type="number" min="0" max="100" placeholder="가중치%" value="' + (sg.weight||'') + '">' +
            '</div>' +
            '<input class="eval-editor-input" id="gsub-'+i+'-assignees" placeholder="담당자 (쉼표 구분: 홍길동, 김철수)" value="' + (sg.assignees||[]).join(', ').replace(/"/g,'&quot;') + '">' +
            '<div class="goal-field-lbl" style="margin-top:2px;">세부 내용</div>' +
            '<div id="gsub-'+i+'-desc-zone" class="note-blocks-editor nb-editor-zone goal-nblock-zone"></div>' +
            '</div></div>';
    }).join('');
    wrap.innerHTML = '<div class="goal-detail-wrap">' +
        '<div class="goal-detail-hd">' +
        '<button class="eval-analysis-back-btn" onclick="goalSettingBackToList()">← 목록으로</button>' +
        '<span style="font-size:15px;font-weight:700;color:#333;">' + (g.id ? '목표 편집' : '새 목표 추가') + '</span>' +
        '</div>' +
        '<div class="goal-section-card">' +
        '<div class="goal-section-label">기본 정보</div>' +
        '<div class="goal-header-row">' +
        '<div class="goal-header-field"><label class="goal-field-lbl">년도</label><input class="eval-editor-input" id="gd-year" maxlength="4" placeholder="2026" value="' + (g.year||'') + '"></div>' +
        '<div class="goal-header-field"><label class="goal-field-lbl">분기</label><select class="eval-editor-input" id="gd-quarter">' + ['','1분기','2분기','3분기','4분기'].map(function(q){ return '<option value="'+q+'"'+(g.quarter===q?' selected':'')+'>'+q+'</option>'; }).join('') + '</select></div>' +
        '<div class="goal-header-field"><label class="goal-field-lbl">부서</label><input class="eval-editor-input" id="gd-dept" placeholder="예: 간호팀" value="' + (g.dept||'').replace(/"/g,'&quot;') + '"></div>' +
        '<div class="goal-header-field"><label class="goal-field-lbl">가중치(%)</label><input class="eval-editor-input" id="gd-weight" type="number" min="0" max="100" placeholder="0~100" value="' + (g.weight||'') + '"></div>' +
        '</div>' +
        '<div class="goal-header-field-full"><label class="goal-field-lbl">목표명 <span style="color:#F36178;">*</span></label><input class="eval-editor-input" id="gd-title" placeholder="목표명을 입력하세요" value="' + (g.title||'').replace(/"/g,'&quot;') + '"></div>' +
        '<div class="goal-header-field-full"><label class="goal-field-lbl">목표 설명</label>' +
        '<div id="gd-desc-zone" class="note-blocks-editor nb-editor-zone goal-nblock-zone"></div></div>' +
        '</div>' +
        '<div class="goal-section-card">' +
        '<div class="goal-section-title-row"><span class="goal-section-label">세부 목표</span></div>' +
        (g.subGoals.length === 0 ? '<div style="color:#bbb;font-size:13px;padding:12px 0;">세부 목표가 없습니다. 추가 버튼을 눌러 세부 목표를 만들어 보세요.</div>' : subHtml) +
        '<button class="goal-add-sub-btn" onclick="goalDraftAddSub()" style="margin-top:12px;width:100%;">+ 세부 목표 추가</button>' +
        '</div>' +
        '<div class="goal-detail-footer">' +
        '<button class="eval-editor-cancel" onclick="goalSettingBackToList()">취소</button>' +
        '<button class="eval-editor-save" onclick="goalDraftSave()">저장</button>' +
        '</div></div>';
    setTimeout(goalDescEditorsInit, 0);
}
function goalDescEditorsInit() {
    nBlockEditorGlobalInit();
    var g = goalEditDraft;
    if (!g) return;
    var mainZone = document.getElementById('gd-desc-zone');
    if (mainZone) {
        var mb = (g.descBlocks && g.descBlocks.length) ? g.descBlocks : [nBlkNew('p')];
        nZoneRender(mainZone, mb);
        nSetupFileDropZone('gd-desc-zone');
    }
    (g.subGoals||[]).forEach(function(sg, i) {
        var zone = document.getElementById('gsub-'+i+'-desc-zone');
        if (zone) {
            var sb = (sg.descBlocks && sg.descBlocks.length) ? sg.descBlocks : [nBlkNew('p')];
            nZoneRender(zone, sb);
            nSetupFileDropZone('gsub-'+i+'-desc-zone');
        }
    });
    nActiveEditorCtx = { type: 'goal' };
}
function goalDraftSave() {
    goalDraftReadForm();
    var g = goalEditDraft;
    if (!g.title) { showToast('목표명을 입력하세요.', 'error'); return; }
    var id = g.id || goalGenId();
    var goalObj = { id: id, year: g.year, quarter: g.quarter, dept: g.dept, title: g.title, weight: g.weight, desc: g.desc, descBlocks: g.descBlocks||[], subGoals: g.subGoals };
    if (g.id) {
        var idx = goalData.goals.findIndex(function(x){ return x.id === g.id; });
        if (idx >= 0) goalData.goals[idx] = goalObj;
        goalData.assignments = goalData.assignments.filter(function(a){ return a.goalId !== g.id; });
    } else {
        goalData.goals.push(goalObj);
    }
    goalSaveLocal();
    showToast(g.id ? '목표가 수정되었습니다.' : '목표가 추가되었습니다.', 'success');
    goalEditDraft = null;
    goalSettingView = 'list';
    goalSettingRender();
}
async function goalSettingDel(id) {
    if (!await showConfirm('이 목표를 삭제하시겠습니까?')) return;
    goalData.goals = goalData.goals.filter(function(g){ return g.id !== id; });
    goalData.assignments = goalData.assignments.filter(function(a){ return a.goalId !== id; });
    goalData.achievements = goalData.achievements.filter(function(a){ return a.goalId !== id; });
    goalSaveLocal();
    goalSettingRender();
}

// ── 목표관리 ──
function goalManageRender() {
    goalInit();
    var wrap = document.getElementById('goal-manage-wrap');
    if (!wrap) return;
    if (goalManageDetailId) { goalManageRenderDetail(wrap); return; }
    goalManageRenderList(wrap);
}
function goalManageRenderList(wrap) {
    var gf = goalManageFilters;
    var years = [], depts = [];
    goalData.goals.forEach(function(g) {
        if (g.year && years.indexOf(g.year) < 0) years.push(g.year);
        if (g.dept && depts.indexOf(g.dept) < 0) depts.push(g.dept);
    });
    years.sort().reverse();
    var yearOpts = '<option value="">전체 년도</option>' + years.map(function(y){ return '<option value="'+y+'"'+(y===gf.year?' selected':'')+'>'+y+'년</option>'; }).join('');
    var deptOpts = '<option value="">전체 부서</option>' + depts.map(function(d){ return '<option value="'+d+'"'+(d===gf.dept?' selected':'')+'>'+d+'</option>'; }).join('');
    var filtered = goalData.goals.filter(function(g) {
        if (gf.year && g.year !== gf.year) return false;
        if (gf.dept && g.dept !== gf.dept) return false;
        if (gf.search) {
            var s = gf.search.toLowerCase();
            var hay = ((g.title||'')+(g.dept||'')+(g.year||'')).toLowerCase();
            var sgHay = (g.subGoals||[]).map(function(sg){ return (sg.title||'')+' '+(sg.assignees||[]).join(' '); }).join(' ').toLowerCase();
            if (hay.indexOf(s) < 0 && sgHay.indexOf(s) < 0) return false;
        }
        return true;
    });
    var html = '<div class="eval-status-filter-bar">' +
        '<select class="eval-sfilter-sel" onchange="goalManageSetFilter(\'year\',this.value)">' + yearOpts + '</select>' +
        '<select class="eval-sfilter-sel" onchange="goalManageSetFilter(\'dept\',this.value)">' + deptOpts + '</select>' +
        '<div class="eval-sfilter-search-wrap"><svg class="eval-sfilter-search-icon" viewBox="0 0 20 20" fill="none"><circle cx="8.5" cy="8.5" r="5" fill="#DBEAFE" stroke="#3D8EF0" stroke-width="1.6"/><path d="M13 13l3 3" stroke="#3D8EF0" stroke-width="1.6" stroke-linecap="round"/></svg><input class="eval-sfilter-search" type="text" placeholder="이름으로 검색" value="' + (gf.search||'') + '" oninput="goalManageSetFilter(\'search\',this.value)"></div>' +
        '</div>';
    if (filtered.length === 0) {
        html += '<div class="eval-empty">목표설정에서 먼저 목표를 추가해 주세요.</div>';
        wrap.innerHTML = html; return;
    }
    html += '<table class="eval-status-table"><thead><tr><th style="width:44px;">순번</th><th>년도</th><th>분기</th><th>부서</th><th>목표명</th><th>세부목표 / 담당자</th><th>평균 달성률</th><th></th></tr></thead><tbody>';
    filtered.forEach(function(g, rowIdx) {
        var subGoals = g.subGoals || [];
        var allPcts = [];
        var uniqueAssignees = [];
        subGoals.forEach(function(sg) {
            (sg.assignees||[]).forEach(function(a) {
                if (uniqueAssignees.indexOf(a) < 0) uniqueAssignees.push(a);
                var ach = goalData.achievements.find(function(x){ return x.goalId===g.id && x.subGoalId===sg.id && x.assignee===a; });
                if (!ach) ach = goalData.achievements.find(function(x){ return x.goalId===g.id && x.assignee===a && !x.subGoalId; });
                allPcts.push(ach ? (ach.pct||0) : 0);
            });
        });
        var totalAssignees = uniqueAssignees.length;
        var avgPct = allPcts.length === 0 ? 0 : Math.round(allPcts.reduce(function(s,v){ return s+v; },0)/allPcts.length);
        var barColor = avgPct >= 100 ? '#3a7d5a' : '#F36178';
        html += '<tr class="goal-list-row" onclick="goalManageOpenDetail(\'' + g.id + '\')">' +
            '<td style="color:#bbb;font-size:12px;text-align:center;">' + (rowIdx+1) + '</td>' +
            '<td style="color:#888;">' + (g.year||'—') + '</td>' +
            '<td>' + (g.quarter||'—') + '</td>' +
            '<td>' + (g.dept||'—') + '</td>' +
            '<td style="text-align:left;font-weight:600;">' + (g.title||'—') + '</td>' +
            '<td style="color:#888;font-size:12px;">' + subGoals.length + '개 · ' + totalAssignees + '명</td>' +
            '<td style="min-width:140px;"><div style="display:flex;align-items:center;gap:8px;">' +
            '<div style="flex:1;height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+Math.min(avgPct,100)+'%;background:'+barColor+';border-radius:3px;"></div></div>' +
            '<span style="font-size:12px;font-weight:700;color:'+barColor+';min-width:34px;">'+avgPct+'%</span></div></td>' +
            '<td><button class="eval-view-btn">상세 →</button></td>' +
            '</tr>';
    });
    html += '</tbody></table>';
    wrap.innerHTML = html;
}
function goalManageSetFilter(key, val) { goalManageFilters[key] = val; goalManageRender(); }
function goalManageOpenDetail(id) { goalManageDetailId = id; goalManageRender(); }
function goalManageBackToList() { goalManageDetailId = null; goalManageRender(); }
function goalManageRenderDetail(wrap) {
    var g = goalData.goals.find(function(x){ return x.id === goalManageDetailId; });
    if (!g) { goalManageBackToList(); return; }
    var subGoals = g.subGoals || [];
    var subHtml = subGoals.length === 0
        ? '<div style="color:#bbb;font-size:13px;padding:12px 0;">등록된 세부 목표가 없습니다.</div>'
        : subGoals.map(function(sg, si) {
            var assignees = sg.assignees || [];
            var achHtml = assignees.length === 0
                ? '<div style="color:#bbb;font-size:12px;padding:8px 0;">담당자가 없습니다.</div>'
                : assignees.map(function(a, ai) {
                    var ach = goalData.achievements.find(function(x){ return x.goalId===g.id && x.subGoalId===sg.id && x.assignee===a; });
                    if (!ach) ach = goalData.achievements.find(function(x){ return x.goalId===g.id && x.assignee===a && !x.subGoalId; });
                    var pct = ach ? (ach.pct||0) : 0;
                    var barColor = pct >= 100 ? '#3a7d5a' : '#F36178';
                    var hasNote = ach && (ach.note || (ach.noteBlocks && ach.noteBlocks.length));
                    var noteKey = 'sg' + si + 'a' + ai;
                    var noteHtml = hasNote ? goalAchNoteHtml(ach) : '';
                    return '<div class="goal-ach-person-row">' +
                        '<span class="goal-ach-person-name">' + a + '</span>' +
                        '<div class="goal-ach-bar-clickable" onclick="goalAchNoteToggle(\'' + noteKey + '\')" title="' + (hasNote?'상세 현황 보기':'') + '" style="display:flex;align-items:center;gap:8px;flex:1;cursor:' + (hasNote?'pointer':'default') + ';">' +
                        '<div style="flex:1;height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+Math.min(pct,100)+'%;background:'+barColor+';border-radius:3px;transition:width .3s;"></div></div>' +
                        '<span style="font-size:12px;font-weight:700;color:'+barColor+';min-width:32px;text-align:right;">'+pct+'%</span>' +
                        (hasNote ? '<svg viewBox="0 0 16 16" fill="none" style="width:13px;height:13px;flex-shrink:0;opacity:.45;"><path d="M2 4h12M2 8h8M2 12h6" stroke="#888" stroke-width="1.6" stroke-linecap="round"/></svg>' : '') +
                        '</div>' +
                        '<button class="eval-view-btn" onclick="goalAchModal(\'' + g.id + '\',\'' + sg.id + '\',\'' + a.replace(/'/g,"\\'") + '\')">' + (ach?'수정':'입력') + '</button>' +
                        '</div>' +
                        (hasNote ? '<div class="goal-ach-note-expand" id="gach-expand-' + noteKey + '">' + noteHtml + '</div>' : '');
                }).join('');
            return '<div class="goal-sub-detail-item">' +
                '<div class="goal-sub-detail-hd">' +
                '<span class="goal-sub-detail-num">세부 ' + (si+1) + '</span>' +
                '<span class="goal-sub-detail-title">' + (sg.title||'제목 없음') + '</span>' +
                (sg.weight ? '<span class="goal-sub-detail-weight">가중치 ' + sg.weight + '%</span>' : '') +
                '</div>' +
                (sg.descBlocks||sg.desc ? '<div class="goal-sub-detail-desc">' + goalBlocksToHtml(sg.descBlocks, sg.desc) + '</div>' : '') +
                '<div class="goal-sub-detail-ach">' + achHtml + '</div>' +
                '</div>';
        }).join('');
    wrap.innerHTML = '<div class="goal-detail-wrap">' +
        '<div class="goal-detail-hd">' +
        '<button class="eval-analysis-back-btn" onclick="goalManageBackToList()">← 목록으로</button>' +
        '<span class="goal-detail-dept-badge">' + (g.dept||'') + '</span>' +
        (g.year ? '<span style="font-size:13px;color:#aaa;">' + g.year + (g.quarter?' · '+g.quarter:'') + '</span>' : '') +
        '</div>' +
        '<div class="goal-section-card">' +
        '<div class="goal-section-label">목표 개요</div>' +
        '<div style="font-size:17px;font-weight:700;color:#222;margin-bottom:8px;">' + (g.title||'') +
        (g.weight ? ' <span style="font-size:13px;font-weight:400;color:#bbb;">· 가중치 '+g.weight+'%</span>' : '') + '</div>' +
        (g.descBlocks||g.desc ? '<div class="goal-overview-desc">' + goalBlocksToHtml(g.descBlocks, g.desc) + '</div>' : '') +
        '</div>' +
        '<div class="goal-section-card"><div class="goal-section-label">세부 목표 및 달성 현황</div>' + subHtml + '</div>' +
        '</div>';
}
function boardBlocksToHtml(blocks) {
    if (!blocks || !blocks.length) return '';
    var toggleCounter = 0;
    function renderBlock(b, olNum) {
        if (!b) return '';
        var html = b.html || '';
        var indent = b.indent || 0;
        var pad = indent * 16;
        if (b.type === 'divider') return '<hr style="border:none;border-top:1px solid #eee;margin:6px 0;">';
        if (b.type === 'subpage') {
            var spTitle = (b.pageTitle || '새 페이지').replace(/</g,'&lt;').replace(/>/g,'&gt;');
            return '<div onclick="snoteOpenPage(' + (b.pageId||'') + ')" style="display:inline-flex;align-items:center;gap:7px;padding:7px 14px;border:1px solid #e8e0f0;border-radius:8px;cursor:pointer;font-size:13px;color:#555;margin:3px 0;background:#faf8ff;transition:background .12s;" onmouseover="this.style.background=\'#f0eaf8\'" onmouseout="this.style.background=\'#faf8ff\'">📄 <span>' + spTitle + '</span> <span style="color:#bbb;font-size:11px;">→</span></div>';
        }
        if (b.type === 'ul') {
            var bullets = ['•','◦','▪','–'];
            return '<div style="display:flex;gap:6px;align-items:baseline;padding-left:'+pad+'px;font-size:14px;line-height:1.7;margin:2px 0;"><span style="flex-shrink:0;color:#888;">'+bullets[Math.min(indent,3)]+'</span><div>'+( html||'&nbsp;')+'</div></div>';
        }
        if (b.type === 'ol') {
            var olLabels = [(olNum||1)+'.', nOlLetter(olNum||1)+'.', nOlRoman(olNum||1)+'.', (olNum||1)+'.'];
            return '<div style="display:flex;gap:6px;align-items:baseline;padding-left:'+pad+'px;font-size:14px;line-height:1.7;margin:2px 0;"><span style="flex-shrink:0;color:#888;min-width:16px;">'+olLabels[Math.min(indent,3)]+'</span><div>'+(html||'&nbsp;')+'</div></div>';
        }
        if (b.type === 'todo') {
            var check = b.checked ? '☑' : '☐';
            var st = b.checked ? 'text-decoration:line-through;color:#bbb;' : '';
            return '<div style="display:flex;gap:6px;align-items:baseline;font-size:14px;line-height:1.7;margin:2px 0;"><span style="flex-shrink:0;">'+check+'</span><div style="'+st+'">'+(html||'&nbsp;')+'</div></div>';
        }
        if (b.type === 'h1') return '<div style="font-size:20px;font-weight:700;line-height:1.4;margin:10px 0 3px;">'+html+'</div>';
        if (b.type === 'h2') return '<div style="font-size:17px;font-weight:700;line-height:1.4;margin:8px 0 3px;">'+html+'</div>';
        if (b.type === 'h3') return '<div style="font-size:15px;font-weight:600;line-height:1.4;margin:6px 0 2px;">'+html+'</div>';
        if (b.type === 'h4') return '<div style="font-size:14px;font-weight:600;color:#666;line-height:1.4;margin:4px 0;">'+html+'</div>';
        if (b.type === 'quote') return '<div style="border-left:3px solid #F36178;padding-left:12px;color:#555;font-size:14px;line-height:1.7;margin:4px 0;">'+html+'</div>';
        if (b.type === 'toggle') {
            var tid = 'bd-toggle-'+(++toggleCounter);
            var childBlocks = b.childBlocks || [];
            if (!childBlocks.length && b.childHtml) childBlocks = [{ type:'p', html:b.childHtml }];
            var olC2 = 0;
            var childHtml = childBlocks.map(function(cb) {
                if (cb.type === 'ol') olC2++; else olC2 = 0;
                return renderBlock(cb, olC2);
            }).join('');
            return '<div class="bd-toggle-block" id="'+tid+'">' +
                '<div class="bd-toggle-hd" onclick="bdToggleClick(\''+tid+'\')" style="display:flex;align-items:baseline;gap:6px;cursor:pointer;font-size:14px;line-height:1.7;font-weight:500;user-select:none;">' +
                '<span class="bd-toggle-arrow" style="font-size:10px;color:#888;transition:transform 0.15s;transform:rotate(0deg);">▶</span><span>'+html+'</span></div>' +
                '<div class="bd-toggle-body" style="display:none;padding-left:20px;margin-top:2px;">'+childHtml+'</div></div>';
        }
        if (b.type === 'image') {
            if (!b.src) return '';
            var w = (b.width || 80) + '%';
            var alt = (b.alt || '').replace(/"/g,'&quot;');
            return '<div style="margin:6px 0;"><img src="'+b.src+'" alt="'+alt+'" style="max-width:'+w+';border-radius:6px;display:block;"></div>';
        }
        if (b.type === 'file') {
            var fName = (b.fileName || '파일').replace(/</g,'&lt;').replace(/>/g,'&gt;');
            return b.src
                ? '<div style="margin:4px 0;"><a href="'+b.src+'" download="'+fName.replace(/"/g,'&quot;')+'" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border:1px solid #ddd;border-radius:6px;font-size:13px;color:#555;text-decoration:none;">📎 '+fName+'</a></div>'
                : '<div style="margin:4px 0;display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border:1px solid #ddd;border-radius:6px;font-size:13px;color:#aaa;">📎 '+fName+'</div>';
        }
        if (b.type === 'table') {
            var cells = b.cells || [];
            var tRows = b.rows || cells.length || 0;
            var tCols = b.cols || (cells[0] ? cells[0].length : 0);
            if (!tRows || !tCols) return '';
            var tHtml = '<div style="overflow-x:auto;margin:6px 0;"><table style="border-collapse:collapse;font-size:13px;width:100%;">';
            cells.forEach(function(row, ri) {
                tHtml += '<tr>';
                row.forEach(function(cell, ci) {
                    var tag = ri === 0 ? 'th' : 'td';
                    var st = ri===0 ? 'background:#f8f8f8;font-weight:600;' : '';
                    tHtml += '<'+tag+' style="border:1px solid #e0e0e0;padding:6px 10px;'+st+'">'+(cell||'')+'</'+tag+'>';
                });
                tHtml += '</tr>';
            });
            tHtml += '</table></div>';
            return tHtml;
        }
        if (b.type === 'cols') {
            var cols = b.cols || [];
            var colCount = b.colCount || cols.length || 2;
            var pct = Math.floor(100 / colCount);
            var colsHtml = cols.map(function(col) {
                var colBlocks = col.blocks || (col.html ? [{ type:'p', html:col.html }] : []);
                var olC3 = 0;
                return '<div style="flex:1;min-width:0;padding:0 8px;">' + colBlocks.map(function(cb) {
                    if (cb.type === 'ol') olC3++; else olC3 = 0;
                    return renderBlock(cb, olC3);
                }).join('') + '</div>';
            }).join('');
            return '<div style="display:flex;gap:0;margin:4px 0;">'+colsHtml+'</div>';
        }
        return html ? '<div style="font-size:14px;line-height:1.7;margin:2px 0;">'+html+'</div>' : '';
    }
    var olCount = 0;
    return blocks.map(function(b) {
        if (b.type === 'ol') olCount++; else olCount = 0;
        return renderBlock(b, olCount);
    }).filter(Boolean).join('');
}
function bdToggleClick(tid) {
    var el = document.getElementById(tid);
    if (!el) return;
    var body = el.querySelector('.bd-toggle-body');
    var arrow = el.querySelector('.bd-toggle-arrow');
    if (!body) return;
    var open = body.style.display !== 'none';
    body.style.display = open ? 'none' : 'block';
    if (arrow) arrow.style.transform = open ? 'rotate(0deg)' : 'rotate(90deg)';
}
function goalBlocksToHtml(blocks, fallback) {
    if (blocks && blocks.length) {
        var olCount = 0;
        var html = blocks.map(function(b) {
            if (b.type === 'ol') olCount++; else olCount = 0;
            return goalAchBlockHtml(b, olCount);
        }).filter(Boolean).join('');
        if (html) return html;
    }
    if (fallback) {
        var d = document.createElement('div');
        d.textContent = fallback;
        return '<div style="font-size:13px;line-height:1.65;white-space:pre-wrap;">' + d.innerHTML + '</div>';
    }
    return '';
}
function goalAchNoteHtml(ach) {
    if (!ach) return '';
    if (ach.noteBlocks && ach.noteBlocks.length) {
        var olCount = 0;
        return ach.noteBlocks.map(function(b) {
            if (b.type === 'ol') olCount++; else olCount = 0;
            return goalAchBlockHtml(b, olCount);
        }).filter(Boolean).join('');
    }
    if (ach.note) {
        var d = document.createElement('div');
        d.textContent = ach.note;
        return '<div style="font-size:13px;line-height:1.65;white-space:pre-wrap;">' + d.innerHTML + '</div>';
    }
    return '';
}
function goalAchBlockHtml(b, olNum) {
    if (b.type === 'divider') return '<hr style="border:none;border-top:1px solid #eee;margin:4px 0;">';
    var html = b.html || '';
    var indent = b.indent || 0;
    var pad = indent * 16;
    if (b.type === 'ul') {
        var bullets = ['•','◦','▪','–'];
        return '<div style="display:flex;gap:6px;align-items:baseline;padding-left:' + pad + 'px;font-size:13px;line-height:1.65;margin:1px 0;">' +
            '<span style="flex-shrink:0;color:#888;">' + bullets[Math.min(indent,3)] + '</span><div>' + (html||'&nbsp;') + '</div></div>';
    }
    if (b.type === 'ol') {
        var olLabels = [(olNum||1) + '.', nOlLetter(olNum||1) + '.', nOlRoman(olNum||1) + '.', (olNum||1) + '.'];
        return '<div style="display:flex;gap:6px;align-items:baseline;padding-left:' + pad + 'px;font-size:13px;line-height:1.65;margin:1px 0;">' +
            '<span style="flex-shrink:0;color:#888;min-width:14px;">' + olLabels[Math.min(indent,3)] + '</span><div>' + (html||'&nbsp;') + '</div></div>';
    }
    if (b.type === 'todo') {
        var check = b.checked ? '☑' : '☐';
        var st = b.checked ? 'text-decoration:line-through;color:#bbb;' : '';
        return '<div style="display:flex;gap:6px;align-items:baseline;font-size:13px;line-height:1.65;margin:1px 0;">' +
            '<span style="flex-shrink:0;">' + check + '</span><div style="' + st + '">' + (html||'&nbsp;') + '</div></div>';
    }
    if (b.type === 'h1') return '<div style="font-size:18px;font-weight:700;line-height:1.4;margin:8px 0 2px;">' + html + '</div>';
    if (b.type === 'h2') return '<div style="font-size:15px;font-weight:700;line-height:1.4;margin:6px 0 2px;">' + html + '</div>';
    if (b.type === 'h3') return '<div style="font-size:13px;font-weight:600;line-height:1.4;margin:4px 0 2px;">' + html + '</div>';
    if (b.type === 'h4') return '<div style="font-size:13px;font-weight:600;color:#666;line-height:1.4;margin:2px 0;">' + html + '</div>';
    if (b.type === 'quote') return '<div style="border-left:3px solid #ddd;padding-left:10px;color:#666;font-size:13px;line-height:1.65;margin:2px 0;">' + html + '</div>';
    return html ? '<div style="font-size:13px;line-height:1.65;margin:1px 0;">' + html + '</div>' : '';
}
function goalAchNoteToggle(noteKey) {
    var el = document.getElementById('gach-expand-' + noteKey);
    if (!el) return;
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
}
function goalAchModal(goalId, subGoalId, assignee) {
    var g = goalData.goals.find(function(x){ return x.id===goalId; });
    var sg = (g && g.subGoals) ? g.subGoals.find(function(x){ return x.id===subGoalId; }) : null;
    var ach = goalData.achievements.find(function(x){ return x.goalId===goalId && x.subGoalId===subGoalId && x.assignee===assignee; });
    if (!ach) ach = goalData.achievements.find(function(x){ return x.goalId===goalId && x.assignee===assignee && !x.subGoalId; });
    var overlay = document.createElement('div');
    overlay.className = 'goal-modal-overlay';
    overlay.id = 'goal-ach-modal-overlay';
    overlay.innerHTML = '<div class="goal-modal goal-modal-wide">' +
        '<div class="goal-modal-title">달성치 입력</div>' +
        '<div style="font-size:13px;color:#555;margin-bottom:16px;"><strong>' + assignee + '</strong>' +
        (sg ? ' · ' + (sg.title||'') : '') +
        (g ? '<div style="font-size:11px;color:#bbb;margin-top:2px;">' + (g.title||'') + '</div>' : '') + '</div>' +
        '<div class="goal-modal-grid">' +
        '<label class="eval-editor-lbl">달성률(%)</label>' +
        '<input class="eval-editor-input" id="gach-pct" type="number" min="0" max="100" placeholder="0~100" value="' + (ach?ach.pct:'') + '">' +
        '<label class="eval-editor-lbl">진행 상세 현황</label>' +
        '<div id="gach-note-zone" class="note-blocks-editor nb-editor-zone goal-nblock-zone" style="min-height:120px;"></div>' +
        '</div><div class="goal-modal-actions">' +
        '<button class="eval-editor-cancel" onclick="goalAchModalClose()">취소</button>' +
        '<button class="eval-editor-save" onclick="goalAchSave(\'' + goalId + '\',\'' + subGoalId + '\',\'' + assignee.replace(/'/g,"\\'") + '\')">저장</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
    nBlockEditorGlobalInit();
    var zone = document.getElementById('gach-note-zone');
    if (zone) {
        var existBlocks = (ach && ach.noteBlocks && ach.noteBlocks.length)
            ? ach.noteBlocks
            : (ach && ach.note ? [{ id: nBlkGenId(), type:'p', html: ach.note.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>'), checked:false, collapsed:false, indent:0, childHtml:'' }] : [nBlkNew('p')]);
        nZoneRender(zone, existBlocks);
        nSetupFileDropZone('gach-note-zone');
        nActiveEditorCtx = { type: 'goal' };
    }
}
function goalAchModalClose() {
    var el = document.getElementById('goal-ach-modal-overlay');
    if (el) el.remove();
}
function goalAchSave(goalId, subGoalId, assignee) {
    var pct = parseInt(document.getElementById('gach-pct').value||0);
    var noteZone = document.getElementById('gach-note-zone');
    var noteBlocks = noteZone ? nGetBlocks(noteZone) : [];
    var note = nBlocksText(noteBlocks);
    var today = new Date().toISOString().split('T')[0];
    var existing = goalData.achievements.find(function(x){ return x.goalId===goalId && x.subGoalId===subGoalId && x.assignee===assignee; });
    if (!existing && !subGoalId) existing = goalData.achievements.find(function(x){ return x.goalId===goalId && x.assignee===assignee && !x.subGoalId; });
    if (existing) { existing.pct=pct; existing.note=note; existing.noteBlocks=noteBlocks; existing.updatedAt=today; existing.subGoalId=subGoalId; }
    else goalData.achievements.push({ id:goalGenId(), goalId:goalId, subGoalId:subGoalId, assignee:assignee, pct:pct, note:note, noteBlocks:noteBlocks, updatedAt:today });
    goalSaveLocal();
    goalAchModalClose();
    nActiveEditorCtx = { type: 'note' };
    goalManageRender();
    showToast('달성치가 저장되었습니다.', 'success');
}

// ── 목표현황 (관리자) ──
var goalOverviewDetailId = null;

function goalOverviewRender() {
    goalInit();
    var wrap = document.getElementById('goal-overview-wrap');
    if (!wrap) return;
    if (goalOverviewDetailId) { goalOverviewRenderDetail(wrap); return; }
    var gf = goalOverviewFilters;
    var years = [], depts = [];
    goalData.goals.forEach(function(g) {
        if (g.year && years.indexOf(g.year) < 0) years.push(g.year);
        if (g.dept && depts.indexOf(g.dept) < 0) depts.push(g.dept);
    });
    years.sort().reverse();
    var yearOpts = '<option value="">전체 년도</option>' + years.map(function(y){ return '<option value="'+y+'"'+(y===gf.year?' selected':'')+'>'+y+'년</option>'; }).join('');
    var deptOpts = '<option value="">전체 부서</option>' + depts.map(function(d){ return '<option value="'+d+'"'+(d===gf.dept?' selected':'')+'>'+d+'</option>'; }).join('');
    var filtered = goalData.goals.filter(function(g) {
        if (gf.year && g.year !== gf.year) return false;
        if (gf.dept && g.dept !== gf.dept) return false;
        if (gf.search) {
            var s = gf.search.toLowerCase();
            var hay = ((g.title||'')+(g.dept||'')+(g.year||'')).toLowerCase();
            var sgHay = (g.subGoals||[]).map(function(sg){ return (sg.title||'')+' '+(sg.assignees||[]).join(' '); }).join(' ').toLowerCase();
            if (hay.indexOf(s) < 0 && sgHay.indexOf(s) < 0) return false;
        }
        return true;
    });
    var html = '<div class="eval-status-filter-bar">' +
        '<select class="eval-sfilter-sel" onchange="goalOverviewSetFilter(\'year\',this.value)">' + yearOpts + '</select>' +
        '<select class="eval-sfilter-sel" onchange="goalOverviewSetFilter(\'dept\',this.value)">' + deptOpts + '</select>' +
        '<div class="eval-sfilter-search-wrap"><svg class="eval-sfilter-search-icon" viewBox="0 0 20 20" fill="none"><circle cx="8.5" cy="8.5" r="5" fill="#DBEAFE" stroke="#3D8EF0" stroke-width="1.6"/><path d="M13 13l3 3" stroke="#3D8EF0" stroke-width="1.6" stroke-linecap="round"/></svg><input class="eval-sfilter-search" type="text" placeholder="이름으로 검색" value="' + (gf.search||'') + '" oninput="goalOverviewSetFilter(\'search\',this.value)"></div>' +
        '<button class="eval-dl-btn" style="margin-left:auto;" onclick="goalOverviewDownloadExcel()">↓ 엑셀 다운로드</button>' +
        '</div>';
    if (filtered.length === 0) {
        html += '<div class="eval-empty">표시할 목표가 없습니다.</div>';
        wrap.innerHTML = html; return;
    }
    html += '<table class="eval-status-table"><thead><tr>' +
        '<th style="width:44px;">순번</th><th>년도</th><th>분기</th><th>부서</th><th>목표명</th><th>가중치</th><th>세부목표</th><th>담당자</th><th>평균달성률</th>' +
        '</tr></thead><tbody>';
    filtered.forEach(function(g, rowIdx) {
        var subGoals = g.subGoals || [];
        var allAssignees = [], allPcts = [];
        subGoals.forEach(function(sg) {
            (sg.assignees||[]).forEach(function(a) {
                if (allAssignees.indexOf(a) < 0) allAssignees.push(a);
                var ach = goalData.achievements.find(function(x){ return x.goalId===g.id && x.subGoalId===sg.id && x.assignee===a; });
                if (!ach) ach = goalData.achievements.find(function(x){ return x.goalId===g.id && x.assignee===a && !x.subGoalId; });
                allPcts.push(ach ? (ach.pct||0) : 0);
            });
        });
        var avgPct = allPcts.length === 0 ? 0 : Math.round(allPcts.reduce(function(s,v){ return s+v; },0)/allPcts.length);
        var barColor = avgPct >= 100 ? '#3a7d5a' : '#F36178';
        var assigneeStr = allAssignees.length === 0 ? '—' : allAssignees.slice(0,3).join(', ') + (allAssignees.length > 3 ? ' 외 '+(allAssignees.length-3)+'명' : '');
        html += '<tr class="goal-list-row" onclick="goalOverviewOpenDetail(\'' + g.id + '\')">' +
            '<td style="color:#bbb;font-size:12px;text-align:center;">' + (rowIdx+1) + '</td>' +
            '<td style="color:#888;">' + (g.year||'—') + '</td>' +
            '<td>' + (g.quarter||'—') + '</td>' +
            '<td>' + (g.dept||'—') + '</td>' +
            '<td style="text-align:left;font-weight:600;">' + (g.title||'—') + '</td>' +
            '<td>' + (g.weight||0) + '%</td>' +
            '<td>' + subGoals.length + '개</td>' +
            '<td style="text-align:left;color:#666;font-size:12px;">' + assigneeStr + '</td>' +
            '<td style="min-width:130px;"><div style="display:flex;align-items:center;gap:8px;">' +
            '<div style="flex:1;height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+Math.min(avgPct,100)+'%;background:'+barColor+';border-radius:3px;"></div></div>' +
            '<span style="font-size:12px;font-weight:700;color:'+barColor+';min-width:34px;">'+avgPct+'%</span>' +
            '</div></td>' +
            '</tr>';
    });
    html += '</tbody></table>';
    wrap.innerHTML = html;
}
function goalOverviewSetFilter(key, val) { goalOverviewFilters[key] = val; goalOverviewRender(); }
function goalOverviewDownloadExcel() {
    goalInit();
    var gf = goalOverviewFilters;
    var filtered = goalData.goals.filter(function(g) {
        if (gf.year && g.year !== gf.year) return false;
        if (gf.dept && g.dept !== gf.dept) return false;
        if (gf.search) {
            var s = gf.search.toLowerCase();
            var hay = ((g.title||'')+(g.dept||'')+(g.year||'')).toLowerCase();
            var sgHay = (g.subGoals||[]).map(function(sg){ return (sg.title||'')+' '+(sg.assignees||[]).join(' '); }).join(' ').toLowerCase();
            if (hay.indexOf(s) < 0 && sgHay.indexOf(s) < 0) return false;
        }
        return true;
    });
    var rows = [['년도','분기','부서','목표명','가중치(%)','세부목표','담당자','세부목표명','담당자','달성률(%)','비고']];
    filtered.forEach(function(g) {
        var subGoals = g.subGoals || [];
        if (subGoals.length === 0) {
            rows.push([g.year||'', g.quarter||'', g.dept||'', g.title||'', g.weight||0, 0, '', '', '', '', '']);
        } else {
            subGoals.forEach(function(sg, si) {
                var assignees = sg.assignees || [];
                if (assignees.length === 0) {
                    rows.push([si===0?g.year||'':'', si===0?g.quarter||'':'', si===0?g.dept||'':'', si===0?g.title||'':'', si===0?g.weight||0:'', subGoals.length, '', sg.title||'', '', '', '']);
                } else {
                    assignees.forEach(function(a, ai) {
                        var ach = goalData.achievements.find(function(x){ return x.goalId===g.id && x.subGoalId===sg.id && x.assignee===a; });
                        if (!ach) ach = goalData.achievements.find(function(x){ return x.goalId===g.id && x.assignee===a && !x.subGoalId; });
                        rows.push([
                            si===0&&ai===0?g.year||'':'',
                            si===0&&ai===0?g.quarter||'':'',
                            si===0&&ai===0?g.dept||'':'',
                            si===0&&ai===0?g.title||'':'',
                            si===0&&ai===0?g.weight||0:'',
                            si===0&&ai===0?subGoals.length:'',
                            si===0&&ai===0?(function(){ var all=[]; subGoals.forEach(function(s){ (s.assignees||[]).forEach(function(x){ if(all.indexOf(x)<0)all.push(x); }); }); return all.join(', '); })():'',
                            ai===0?sg.title||'':'',
                            a,
                            ach ? ach.pct||0 : 0,
                            ach ? ach.note||'' : ''
                        ]);
                    });
                }
            });
        }
    });
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = [{wch:6},{wch:8},{wch:10},{wch:20},{wch:8},{wch:8},{wch:20},{wch:20},{wch:10},{wch:8},{wch:20}];
    XLSX.utils.book_append_sheet(wb, ws, '목표현황');
    var now = new Date();
    var stamp = now.getFullYear() + ('0'+(now.getMonth()+1)).slice(-2) + ('0'+now.getDate()).slice(-2);
    XLSX.writeFile(wb, '목표현황_' + stamp + '.xlsx');
}
function goalOverviewOpenDetail(id) { goalOverviewDetailId = id; goalOverviewRender(); }
function goalOverviewBackToList() { goalOverviewDetailId = null; goalOverviewRender(); }
function goalOverviewRenderDetail(wrap) {
    var g = goalData.goals.find(function(x){ return x.id === goalOverviewDetailId; });
    if (!g) { goalOverviewBackToList(); return; }
    var subGoals = g.subGoals || [];
    var subHtml = subGoals.length === 0
        ? '<div style="color:#bbb;font-size:13px;padding:12px 0;">등록된 세부 목표가 없습니다.</div>'
        : subGoals.map(function(sg, si) {
            var assignees = sg.assignees || [];
            var achHtml = assignees.length === 0
                ? '<div style="color:#bbb;font-size:12px;padding:8px 0;">담당자가 없습니다.</div>'
                : assignees.map(function(a) {
                    var ach = goalData.achievements.find(function(x){ return x.goalId===g.id && x.subGoalId===sg.id && x.assignee===a; });
                    if (!ach) ach = goalData.achievements.find(function(x){ return x.goalId===g.id && x.assignee===a && !x.subGoalId; });
                    var pct = ach ? (ach.pct||0) : 0;
                    var barColor = pct >= 100 ? '#3a7d5a' : '#F36178';
                    return '<div class="goal-ach-person-row">' +
                        '<span class="goal-ach-person-name">' + a + '</span>' +
                        '<div style="display:flex;align-items:center;gap:8px;flex:1;">' +
                        '<div style="flex:1;height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+Math.min(pct,100)+'%;background:'+barColor+';border-radius:3px;"></div></div>' +
                        '<span style="font-size:12px;font-weight:700;color:'+barColor+';min-width:32px;text-align:right;">'+pct+'%</span>' +
                        '</div>' +
                        (ach && ach.note ? '<span class="goal-ach-person-note">' + ach.note + '</span>' : '') +
                        '</div>';
                }).join('');
            return '<div class="goal-sub-detail-item">' +
                '<div class="goal-sub-detail-hd">' +
                '<span class="goal-sub-detail-num">세부 ' + (si+1) + '</span>' +
                '<span class="goal-sub-detail-title">' + (sg.title||'제목 없음') + '</span>' +
                (sg.weight ? '<span class="goal-sub-detail-weight">가중치 ' + sg.weight + '%</span>' : '') +
                '</div>' +
                (sg.descBlocks||sg.desc ? '<div class="goal-sub-detail-desc">' + goalBlocksToHtml(sg.descBlocks, sg.desc) + '</div>' : '') +
                '<div class="goal-sub-detail-ach">' + achHtml + '</div>' +
                '</div>';
        }).join('');
    wrap.innerHTML = '<div class="goal-detail-wrap">' +
        '<div class="goal-detail-hd">' +
        '<button class="eval-analysis-back-btn" onclick="goalOverviewBackToList()">← 목록으로</button>' +
        '<span class="goal-detail-dept-badge">' + (g.dept||'') + '</span>' +
        (g.year ? '<span style="font-size:13px;color:#aaa;">' + g.year + (g.quarter?' · '+g.quarter:'') + '</span>' : '') +
        '</div>' +
        '<div class="goal-section-card">' +
        '<div class="goal-section-label">목표 개요</div>' +
        '<div style="font-size:17px;font-weight:700;color:#222;margin-bottom:8px;">' + (g.title||'') +
        (g.weight ? ' <span style="font-size:13px;font-weight:400;color:#bbb;">· 가중치 '+g.weight+'%</span>' : '') + '</div>' +
        (g.descBlocks||g.desc ? '<div class="goal-overview-desc">' + goalBlocksToHtml(g.descBlocks, g.desc) + '</div>' : '') +
        '</div>' +
        '<div class="goal-section-card"><div class="goal-section-label">세부 목표 및 달성 현황</div>' + subHtml + '</div>' +
        '</div>';
}

// ══════════════════════════════════════
// ─── 평가현황 (관리자) ───
// ══════════════════════════════════════
function evalStatusSetFilter(key, val) {
    if (key === 'year' || key === 'type') evalStatusFilters.formId = '';
    evalStatusFilters[key] = val;
    evalStatusRender();
}
function evalStatusSetView(v) {
    evalStatusView = v;
    evalStatusRender();
}
function evalStatusSetDashFilter(v) {
    evalStatusDashFilter = v;
    evalStatusRender();
}
function evalStatusDashToList(formId) {
    evalStatusView = 'list';
    evalStatusFilters.formId = formId;
    evalStatusRender();
}

function evalStatusRender() {
    var wrap = document.getElementById('eval-status-wrap');
    if (!wrap) return;
    var ff = evalStatusFilters;
    var view = evalStatusView;

    var years = [];
    evalForms.forEach(function(f){ if (f.year && years.indexOf(f.year)<0) years.push(f.year); });
    years.sort(function(a,b){ return b-a; });
    var yearOpts = '<option value="">전체 년도</option>' +
        years.map(function(y){ return '<option value="' + y + '"' + (y===ff.year?' selected':'') + '>' + y + '년</option>'; }).join('');
    var formOpts = '<option value="">전체 양식</option>' +
        evalForms.filter(function(f){
            if (ff.year && f.year !== ff.year) return false;
            if (ff.type && f.formType && f.formType !== ff.type) return false;
            return true;
        }).map(function(f){
            return '<option value="' + f.id + '"' + (f.id===ff.formId?' selected':'') + '>' + (f.year?f.year+'년 ':'') + f.title + '</option>';
        }).join('');

    // 공통 필터 (년도·유형·양식)
    var baseList = evalAssignments.filter(function(a) {
        if (ff.year) {
            var aForm = evalForms.find(function(f){ return f.id === a.formId; });
            if (!aForm || aForm.year !== ff.year) return false;
        }
        if (ff.type && a.type !== ff.type) return false;
        if (ff.formId && a.formId !== ff.formId) return false;
        return true;
    });
    // 리스트 전용 필터 (상태·검색)
    var list = baseList.filter(function(a) {
        var resp = evalResponses.find(function(r){ return r.assignmentId === a.id; });
        if (ff.status === 'submitted' && !resp) return false;
        if (ff.status === 'pending'   && resp)  return false;
        if (ff.search) {
            var q = ff.search.toLowerCase();
            if ((a.evaluatorName||'').toLowerCase().indexOf(q) < 0 &&
                (a.evaluateeName||'').toLowerCase().indexOf(q) < 0) return false;
        }
        return true;
    });

    var viewTabs =
        '<div class="eval-status-view-tabs">' +
        '<button class="eval-status-view-tab' + (view==='list'?' active':'') + '" onclick="evalStatusSetView(\'list\')">≡ 리스트</button>' +
        '<button class="eval-status-view-tab' + (view==='dashboard'?' active':'') + '" onclick="evalStatusSetView(\'dashboard\')">⊞ 대시보드</button>' +
        '</div>';

    // 필터바
    var html = '';
    if (view === 'list') {
        html +=
            '<div class="eval-status-filter-bar">' +
            viewTabs +
            '<select class="eval-sfilter-sel" onchange="evalStatusSetFilter(\'year\',this.value)">' + yearOpts + '</select>' +
            '<select class="eval-sfilter-sel" onchange="evalStatusSetFilter(\'type\',this.value)">' + evalTypeOptions(ff.type,'전체 유형') + '</select>' +
            '<select class="eval-sfilter-sel" onchange="evalStatusSetFilter(\'formId\',this.value)">' + formOpts + '</select>' +
            '<select class="eval-sfilter-sel" onchange="evalStatusSetFilter(\'status\',this.value)">' +
            '<option value="all"'      + (ff.status==='all'?       ' selected':'') + '>전체 상태</option>' +
            '<option value="submitted"'+ (ff.status==='submitted'? ' selected':'') + '>제출완료</option>' +
            '<option value="pending"'  + (ff.status==='pending'?   ' selected':'') + '>미제출</option>' +
            '</select>' +
            '<div class="eval-sfilter-search-wrap">' +
            '<svg class="eval-sfilter-search-icon" viewBox="0 0 20 20" fill="none"><circle cx="8.5" cy="8.5" r="5" fill="#DBEAFE" stroke="#3D8EF0" stroke-width="1.6"/><path d="M13 13l3 3" stroke="#3D8EF0" stroke-width="1.6" stroke-linecap="round"/></svg>' +
            '<input class="eval-sfilter-search" type="text" placeholder="이름으로 검색" value="' + (ff.search||'') + '" oninput="evalStatusSetFilter(\'search\',this.value)">' +
            '</div>' +
            '<button class="eval-dl-btn" style="margin-left:auto;" onclick="evalStatusDownloadExcel()">↓ 엑셀 다운로드</button>' +
            '</div>';
    } else {
        html +=
            '<div class="eval-status-filter-bar">' +
            viewTabs +
            '<select class="eval-sfilter-sel" onchange="evalStatusSetFilter(\'year\',this.value)">' + yearOpts + '</select>' +
            '<select class="eval-sfilter-sel" onchange="evalStatusSetFilter(\'type\',this.value)">' + evalTypeOptions(ff.type,'전체 유형') + '</select>' +
            '</div>' +
            '<div class="eval-status-dash-status-tabs">' +
            '<button class="eval-status-dash-status-tab' + (evalStatusDashFilter==='all'?' active':'') + '" onclick="evalStatusSetDashFilter(\'all\')">전체</button>' +
            '<button class="eval-status-dash-status-tab' + (evalStatusDashFilter==='ongoing'?' active':'') + '" onclick="evalStatusSetDashFilter(\'ongoing\')">진행 중</button>' +
            '<button class="eval-status-dash-status-tab' + (evalStatusDashFilter==='ended'?' active-ended active':'') + '" onclick="evalStatusSetDashFilter(\'ended\')">종료</button>' +
            '</div>';
    }

    // 콘텐츠
    if (view === 'dashboard') {
        html += evalStatusRenderDashboard(baseList);
    } else if (list.length === 0) {
        html += '<div class="eval-empty">조건에 맞는 데이터가 없습니다.</div>';
    } else {
        html += '<table class="eval-status-table"><thead><tr>' +
            '<th style="width:44px;">순번</th><th>년도</th><th>유형</th><th>평가자</th><th>피평가자</th><th>평가 양식</th><th>기간</th><th>상태</th><th>제출일</th><th>상세보기</th>' +
            '</tr></thead><tbody>';
        list.forEach(function(a, rowIdx) {
            var resp = evalResponses.find(function(r){ return r.assignmentId === a.id; });
            var form = evalForms.find(function(f){ return f.id === a.formId; });
            var typeLabel = evalTypeLabel(a.type);
            var typeCls   = evalTypeCls(a.type);
            var period = a.startDate && a.endDate ? a.startDate + ' ~ ' + a.endDate : (a.period || '—');
            var statusHtml = resp
                ? '<span class="eval-st-ok">제출완료</span>'
                : '<span class="eval-st-no">미제출</span>';
            html += '<tr>' +
                '<td style="color:#bbb;font-size:12px;text-align:center;">' + (rowIdx+1) + '</td>' +
                '<td style="color:#888;">' + (form ? (form.year || '—') : '—') + '</td>' +
                '<td><span class="eval-type-badge ' + typeCls + '">' + typeLabel + '</span></td>' +
                '<td>' + (a.evaluatorName||'—') + '</td>' +
                '<td>' + (a.evaluateeName||'—') + '</td>' +
                '<td>' + (form ? form.title : '—') + '</td>' +
                '<td style="color:#999;font-size:12px;white-space:nowrap;">' + period + '</td>' +
                '<td>' + statusHtml + '</td>' +
                '<td style="color:#888;">' + (resp ? resp.submittedAt : '—') + '</td>' +
                '<td>' + (resp ? '<button class="eval-view-btn" onclick="evalStatusViewResp(\'' + a.id + '\')">보기</button>' : '') + '</td>' +
                '</tr>';
        });
        html += '</tbody></table>';
    }
    wrap.innerHTML = html;
}

function evalStatusRenderDashboard(baseList) {
    var today = new Date().toISOString().split('T')[0];
    var df = evalStatusDashFilter;

    // formId 기준 그룹핑
    var formGroups = {};
    var formOrder = [];
    baseList.forEach(function(a) {
        var fid = a.formId || '';
        if (!formGroups[fid]) { formGroups[fid] = []; formOrder.push(fid); }
        formGroups[fid].push(a);
    });

    // 진행중/종료 필터
    var filteredOrder = formOrder.filter(function(fid) {
        if (df === 'all') return true;
        var assigns = formGroups[fid];
        var endDates = assigns.map(function(a){ return a.endDate||''; }).filter(Boolean);
        var maxEnd = endDates.sort().reverse()[0] || '';
        var isEnded = maxEnd && maxEnd < today;
        return df === 'ended' ? isEnded : !isEnded;
    });

    if (filteredOrder.length === 0) {
        return '<div class="eval-empty">' + (df==='ongoing'?'진행 중인':df==='ended'?'종료된':'') + ' 평가가 없습니다.</div>';
    }

    var html = '<div class="eval-status-dash-grid">';
    filteredOrder.forEach(function(fid) {
        var assigns = formGroups[fid];
        var form    = evalForms.find(function(f){ return f.id === fid; });
        var total   = assigns.length;
        var submitted = assigns.filter(function(a){
            return !!evalResponses.find(function(r){ return r.assignmentId === a.id; });
        }).length;
        var pending = total - submitted;
        var pct     = total > 0 ? Math.round(submitted / total * 100) : 0;

        var type = assigns[0] ? assigns[0].type : '';
        var et   = EVAL_TYPES.find(function(x){ return x.value === type; }) || { label: type, cls: '' };

        var endDates = assigns.map(function(a){ return a.endDate||''; }).filter(Boolean);
        var maxEnd = endDates.sort().reverse()[0] || '';
        var isEnded = maxEnd && maxEnd < today;

        var periods = assigns.map(function(a){ return (a.startDate||'') + '~' + (a.endDate||''); }).filter(function(p){ return p !== '~'; });
        var uniq = []; periods.forEach(function(p){ if(uniq.indexOf(p)<0) uniq.push(p); });
        var periodStr = uniq.length === 1 ? uniq[0].replace('~', ' ~ ') : (uniq.length > 1 ? uniq.length + '개 기간' : '');

        var barColor = isEnded ? '#aaa' : (pct === 100 ? '#3a7d5a' : '#F36178');
        var pctColor = isEnded ? '#aaa' : (pct === 100 ? '#3a7d5a' : '#D84060');
        var statusTag = isEnded
            ? '<span style="font-size:11px;color:#aaa;background:#f5f5f5;border-radius:4px;padding:2px 8px;">종료</span>'
            : '<span style="font-size:11px;color:#2e7d32;background:#e8f5e9;border-radius:4px;padding:2px 8px;">진행 중</span>';

        html += '<div class="eval-status-dash-card">' +
            '<div class="eval-status-dash-card-hd">' +
            '<span class="eval-type-badge ' + et.cls + '">' + et.label + '</span>' +
            '<span class="eval-status-dash-card-title">' + (form ? (form.year?form.year+'년 ':'')+form.title : fid) + '</span>' +
            statusTag +
            '</div>' +
            (periodStr ? '<div class="eval-status-dash-period">' + periodStr + '</div>' : '') +
            '<div class="eval-status-dash-stats">' +
            '<div class="eval-status-dash-stat"><div class="eval-status-dash-stat-num">' + total + '</div><div class="eval-status-dash-stat-lbl">배정</div></div>' +
            '<div class="eval-status-dash-stat eval-status-dash-stat--ok"><div class="eval-status-dash-stat-num">' + submitted + '</div><div class="eval-status-dash-stat-lbl">제출</div></div>' +
            '<div class="eval-status-dash-stat eval-status-dash-stat--no"><div class="eval-status-dash-stat-num">' + pending + '</div><div class="eval-status-dash-stat-lbl">미제출</div></div>' +
            '</div>' +
            '<div class="eval-status-dash-bar-row">' +
            '<div class="eval-status-dash-bar"><div class="eval-status-dash-bar-fill" style="width:' + pct + '%;background:' + barColor + ';"></div></div>' +
            '<span class="eval-status-dash-pct" style="color:' + pctColor + ';">' + pct + '%</span>' +
            '</div>' +
            '<div class="eval-status-dash-footer">' +
            '<button class="eval-status-dash-list-btn" onclick="evalStatusDashToList(\'' + fid + '\')">리스트에서 보기 →</button>' +
            '</div>' +
            '</div>';
    });
    html += '</div>';
    return html;
}

function evalStatusDownloadExcel() {
    var ff = evalStatusFilters;
    var list = evalAssignments.filter(function(a) {
        var resp = evalResponses.find(function(r){ return r.assignmentId === a.id; });
        if (ff.year) {
            var aForm = evalForms.find(function(f){ return f.id === a.formId; });
            if (!aForm || aForm.year !== ff.year) return false;
        }
        if (ff.type && a.type !== ff.type) return false;
        if (ff.formId && a.formId !== ff.formId) return false;
        if (ff.status === 'submitted' && !resp) return false;
        if (ff.status === 'pending'   && resp)  return false;
        if (ff.search) {
            var q = ff.search.toLowerCase();
            if ((a.evaluatorName||'').toLowerCase().indexOf(q) < 0 &&
                (a.evaluateeName||'').toLowerCase().indexOf(q) < 0) return false;
        }
        return true;
    });

    var rows = [['년도', '유형', '평가자', '피평가자', '평가 양식', '시작일', '종료일', '상태', '제출일']];
    list.forEach(function(a) {
        var resp = evalResponses.find(function(r){ return r.assignmentId === a.id; });
        var form = evalForms.find(function(f){ return f.id === a.formId; });
        var typeLabel = a.type === 'self' ? '셀프평가' : a.type === 'probation' ? '수습평가' : '동료평가';
        rows.push([
            form ? (form.year || '') : '',
            typeLabel,
            a.evaluatorName || '',
            a.evaluateeName || '',
            form ? form.title : '',
            a.startDate || '',
            a.endDate || '',
            resp ? '제출완료' : '미제출',
            resp ? resp.submittedAt : ''
        ]);
    });

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = [
        {wch:6},{wch:10},{wch:12},{wch:12},{wch:24},{wch:12},{wch:12},{wch:8},{wch:12}
    ];
    XLSX.utils.book_append_sheet(wb, ws, '평가현황');
    var now = new Date();
    var stamp = now.getFullYear() + ('0'+(now.getMonth()+1)).slice(-2) + ('0'+now.getDate()).slice(-2);
    XLSX.writeFile(wb, '평가현황_' + stamp + '.xlsx');
}

function evalStatusViewResp(assignId) {
    var a    = evalAssignments.find(function(x){ return x.id === assignId; });
    var form = a ? evalForms.find(function(f){ return f.id === a.formId; }) : null;
    var resp = evalResponses.find(function(r){ return r.assignmentId === assignId; });
    if (!a || !form || !resp) return;

    var typeLabel = a.type==='self'?'셀프평가':a.type==='probation'?'수습평가':'동료평가';
    var qNum = 0;
    var bodyHtml = '';
    evalFormGetItems(form).forEach(function(item) {
        if (item.itemType === 'section') {
            bodyHtml += '<div style="font-size:12px;font-weight:700;color:#F36178;margin:16px 0 8px;padding-bottom:6px;border-bottom:1px solid #f0f0f0;">' + (item.title||'') + '</div>';
            return;
        }
        qNum++;
        var ans = (resp.answers.find(function(a){ return a.questionId===item.id; })||{}).value;
        bodyHtml += '<div class="eval-resp-q-block">' +
            '<div class="eval-resp-q-text">' + (item.text||'') + '</div>';
        if (item.itemType === 'scoring' || item.itemType === 'scale') {
            bodyHtml += '<div style="margin-top:6px;">' +
                (ans ? '<span class="eval-resp-rating-val">' + ans + '점</span>' : '<span style="color:#bbb;font-size:12px;">미응답</span>') +
                '</div>';
        } else {
            bodyHtml += '<div class="eval-resp-text-val">' + (ans || '<span style="color:#ccc;">미응답</span>') + '</div>';
        }
        bodyHtml += '</div>';
    });

    var existing = document.getElementById('eval-resp-modal-overlay');
    if (existing) existing.remove();

    var overlay = document.createElement('div');
    overlay.id = 'eval-resp-modal-overlay';
    overlay.className = 'eval-resp-modal-overlay';
    overlay.innerHTML =
        '<div class="eval-resp-modal">' +
        '<div class="eval-resp-modal-hd">' +
        '<div class="eval-resp-modal-hd-title"><span style="font-size:12px;color:#aaa;">' + typeLabel + ' · ' + a.evaluateeName + '</span><br>' + form.title + '</div>' +
        '<button class="eval-resp-modal-close" onclick="document.getElementById(\'eval-resp-modal-overlay\').remove()">×</button>' +
        '</div>' +
        '<div class="eval-resp-modal-body">' +
        '<div style="font-size:12px;color:#aaa;margin-bottom:16px;">평가자: ' + (form.anonymous ? '익명' : a.evaluatorName) + ' · 제출: ' + resp.submittedAt + '</div>' +
        bodyHtml +
        '</div></div>';
    overlay.addEventListener('click', function(e){ if(e.target===overlay) overlay.remove(); });
    document.body.appendChild(overlay);
}

// ══════════════════════════════════════
// ─── 평가분석 (관리자) ───
// ══════════════════════════════════════
function evalAnalysisSetFilter(key, val) {
    evalAnalysisFilters[key] = val;
    if (key === 'search') {
        evalAnalysisRenderResults();
    } else {
        evalAnalysisFilters.person = null;
        evalAnalysisFilters.drillType = null;
        evalAnalysisFilters.drillFormId = null;
        evalAnalysisRender();
    }
}

function evalAnalysisSearchInput(val) {
    evalAnalysisFilters.search = val;
    evalAnalysisFilters.person = null;
    evalAnalysisFilters.drillType = null;
    evalAnalysisFilters.drillFormId = null;
    evalAnalysisRenderResults();
}

function evalAnalysisSelectPerson(name) {
    evalAnalysisFilters.person = name;
    evalAnalysisFilters.search = name;
    var inp = document.querySelector('#eval-analysis-results ~ * .eval-sfilter-search, .eval-sfilter-search');
    if (!inp) {
        var bar = document.querySelector('.eval-status-filter-bar');
        if (bar) inp = bar.querySelector('.eval-sfilter-search');
    }
    if (inp) inp.value = name;
    evalAnalysisRenderResults();
}

function evalAnalysisPersonBack() {
    evalAnalysisFilters.person = null;
    evalAnalysisFilters.drillType = null;
    evalAnalysisFilters.drillFormId = null;
    var inp = document.querySelector('.eval-sfilter-search');
    if (inp) inp.value = '';
    evalAnalysisFilters.search = '';
    evalAnalysisRenderResults();
}

function evalAnalysisRender() {
    var wrap = document.getElementById('eval-analysis-wrap');
    if (!wrap) return;
    var af = evalAnalysisFilters;

    var formYears = [];
    evalForms.forEach(function(f){ if(f.year && formYears.indexOf(f.year)<0) formYears.push(f.year); });
    formYears.sort().reverse();
    var yearOpts = '<option value=""' + (!af.year?' selected':'') + '>전체 년도</option>' +
        formYears.map(function(y){ return '<option value="'+y+'"'+(y===af.year?' selected':'')+'>'+y+'년</option>'; }).join('');

    wrap.innerHTML =
        '<div class="eval-status-filter-bar">' +
        '<select class="eval-sfilter-sel" onchange="evalAnalysisSetFilter(\'year\',this.value)">' + yearOpts + '</select>' +
        '<select class="eval-sfilter-sel" onchange="evalAnalysisSetFilter(\'type\',this.value)">' + evalTypeOptions(af.type,'전체 유형') + '</select>' +
        '<div class="eval-sfilter-search-wrap">' +
        '<svg class="eval-sfilter-search-icon" viewBox="0 0 20 20" fill="none"><circle cx="8.5" cy="8.5" r="5" fill="#DBEAFE" stroke="#3D8EF0" stroke-width="1.6"/><path d="M13 13l3 3" stroke="#3D8EF0" stroke-width="1.6" stroke-linecap="round"/></svg>' +
        '<input class="eval-sfilter-search" type="text" placeholder="피평가자 이름 검색" value="' + (af.search||'').replace(/"/g,'&quot;') + '" oninput="evalAnalysisSearchInput(this.value)">' +
        '</div>' +
        '</div>' +
        '<div id="eval-analysis-results"></div>';

    evalAnalysisRenderResults();
}

function evalAnalysisRenderResults() {
    var results = document.getElementById('eval-analysis-results');
    if (!results) return;
    var af = evalAnalysisFilters;

    var validFormIds = evalForms.filter(function(f){ return !af.year || f.year===af.year; }).map(function(f){ return f.id; });

    // ── 기본 목록: 피평가자 전체 리스트 ──
    if (!af.person) {
        var personMap = {};
        var personOrder = [];
        evalResponses.forEach(function(r){
            if (r.formId && validFormIds.indexOf(r.formId) < 0) return;
            var a = evalAssignments.find(function(x){ return x.id===r.assignmentId; });
            if (!a) return;
            var name = a.evaluateeName || '';
            if (!name) return;
            if (af.search && name.indexOf(af.search) < 0) return;
            if (!personMap[name]) { personMap[name] = { types: [], count: 0 }; personOrder.push(name); }
            personMap[name].count++;
            var t = a.type || '';
            if (t && personMap[name].types.indexOf(t) < 0) personMap[name].types.push(t);
        });
        if (personOrder.length === 0) {
            results.innerHTML = '<div class="eval-empty" style="margin-top:32px;color:#bbb;font-size:13px;">' + (af.search ? '검색 결과가 없습니다.' : '제출된 평가가 없습니다.') + '</div>';
            return;
        }
        personOrder.sort();
        var html = '<div class="eval-analysis-form-list">';
        personOrder.forEach(function(name){
            var pg = personMap[name];
            var typeOrder = {}; EVAL_TYPES.forEach(function(et,i){ typeOrder[et.value]=i; });
            var sortedTypes = pg.types.slice().sort(function(a,b){ return (typeOrder[a]||99)-(typeOrder[b]||99); });
            var typeBadges = sortedTypes.map(function(tv){
                var et = EVAL_TYPES.find(function(x){ return x.value===tv; });
                return et ? '<span class="eval-type-badge ' + et.cls + '" style="font-size:11px;padding:2px 8px;">' + et.label + '</span>' : '';
            }).join('');
            html += '<div class="eval-analysis-form-row" onclick="evalAnalysisSelectPerson(\'' + name.replace(/\\/g,'\\\\').replace(/'/g,"\\'") + '\')">' +
                '<span class="eval-analysis-form-row-title">' + name + '</span>' +
                '<span style="display:flex;gap:4px;flex-wrap:wrap;">' + typeBadges + '</span>' +
                '<span class="eval-analysis-form-row-meta">' + pg.count + '건 응답</span>' +
                '<button class="eval-analysis-form-row-btn">보기 →</button>' +
                '</div>';
        });
        html += '</div>';
        results.innerHTML = html;
        return;
    }

    // ── af.person 설정: 해당 인원의 양식·분석 ──
    var respList = evalResponses.filter(function(r){
        if (r.formId && validFormIds.indexOf(r.formId) < 0) return false;
        var a = evalAssignments.find(function(x){ return x.id===r.assignmentId; });
        if (!a) return false;
        if ((a.evaluateeName||'') !== af.person) return false;
        return true;
    });

    if (respList.length === 0) {
        results.innerHTML = '<div class="eval-empty">제출된 평가가 없습니다.</div>';
        return;
    }

    if (!af.drillType) {
        // ── Step 1: 양식별 행 목록 ──
        var formGroups = {};
        var formGroupOrder = [];
        respList.forEach(function(r){
            var a = evalAssignments.find(function(x){ return x.id===r.assignmentId; });
            var t = (a && a.type) || r.type || '';
            var fid = r.formId || '';
            var key = t + '|' + fid;
            if (!formGroups[key]) {
                formGroups[key] = { type: t, formId: fid, count: 0 };
                formGroupOrder.push(key);
            }
            formGroups[key].count++;
        });
        var typeOrder = {};
        EVAL_TYPES.forEach(function(et, i){ typeOrder[et.value] = i; });
        formGroupOrder.sort(function(a, b){
            return (typeOrder[formGroups[a].type]||99) - (typeOrder[formGroups[b].type]||99);
        });
        var html = '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">' +
            '<button class="eval-analysis-back-btn" onclick="evalAnalysisPersonBack()">← 목록으로</button>' +
            '<span style="font-size:14px;font-weight:600;color:#333;">👤 ' + af.person + '</span>' +
            '</div>' +
            '<div class="eval-analysis-form-list">';
        formGroupOrder.forEach(function(key){
            var g = formGroups[key];
            var et = EVAL_TYPES.find(function(x){ return x.value===g.type; }) || { label: g.type, cls: '' };
            var form = evalForms.find(function(f){ return f.id===g.formId; });
            var formTitle = form ? (form.year?form.year+'년 ':'')+form.title : g.formId;
            html += '<div class="eval-analysis-form-row" onclick="evalAnalysisDrillIn(\'' + g.type + '\',\'' + g.formId + '\')">' +
                '<span class="eval-type-badge ' + et.cls + '">' + et.label + '</span>' +
                '<span class="eval-analysis-form-row-title">' + formTitle + '</span>' +
                '<span class="eval-analysis-form-row-meta">' + g.count + '건 응답</span>' +
                '<button class="eval-analysis-form-row-btn">결과 보기 →</button>' +
                '</div>';
        });
        html += '</div>';
        results.innerHTML = html;
    } else {
        // ── Step 2: 선택된 양식의 분석 결과 ──
        var drillResps = respList.filter(function(r){
            var a = evalAssignments.find(function(x){ return x.id===r.assignmentId; });
            if (!a || a.type !== af.drillType) return false;
            if (af.drillFormId && r.formId !== af.drillFormId) return false;
            return true;
        });
        var form = evalForms.find(function(f){ return f.id===af.drillFormId; });
        var formTitle = form ? (form.year?form.year+'년 ':'')+form.title : '';
        var html = '<div class="eval-analysis-drill-hd">' +
            '<button class="eval-analysis-back-btn" onclick="evalAnalysisDrillOut()">← 목록으로</button>' +
            '<span class="eval-type-badge ' + evalTypeCls(af.drillType) + '">' + evalTypeLabel(af.drillType) + '</span>' +
            (formTitle ? '<span style="font-size:14px;font-weight:600;color:#333;">' + formTitle + '</span>' : '') +
            '<span style="font-size:13px;color:#888;margin-left:auto;">👤 ' + af.person + '&nbsp;·&nbsp;총 ' + drillResps.length + '건 응답</span>' +
            '</div>';

        if (form) {
            var fResps = drillResps;
            var uid = 'fa_' + af.drillFormId.replace(/[^a-z0-9]/gi,'_') + '_' + af.search.replace(/[^a-z0-9]/gi,'_');
            html += '<div class="eval-analysis-section"><div class="eval-analysis-q-grid">';
            evalFormQItems(form).forEach(function(q, qi){
                var quid = uid + '_q' + qi;
                var isScoring = q.itemType === 'scoring';
                var isScale   = q.itemType === 'scale';
                var isText    = !isScoring && !isScale;
                var typeLbl   = isScoring ? '배점형' : isScale ? '척도형' : '서술형';
                var typeCls   = isScoring ? 'eval-analysis-q-type-scoring' : isScale ? 'eval-analysis-q-type-scale' : 'eval-analysis-q-type-text';
                html += '<div class="eval-analysis-q-item' + (isText ? ' eval-analysis-q-item--full' : '') + '">' +
                    '<div class="eval-analysis-q-text"><span class="eval-analysis-q-type-label ' + typeCls + '">' + typeLbl + '</span>' + (q.text||'') + '</div>';
                if (isScoring || isScale) {
                    var scale = q.scale || 5;
                    var counts = {}; var whoMap = {};
                    var sum = 0, cnt = 0;
                    for (var i = 1; i <= scale; i++) { counts[i] = 0; whoMap[i] = []; }
                    fResps.forEach(function(r){
                        var ans = r.answers.find(function(a){ return a.questionId === q.id; });
                        if (ans && ans.value) {
                            var v = parseInt(ans.value);
                            counts[v] = (counts[v]||0)+1;
                            whoMap[v] = whoMap[v] || [];
                            whoMap[v].push(form.anonymous ? '익명' : r.evaluatorName);
                            sum += v; cnt++;
                        }
                    });
                    var maxCnt = Math.max.apply(null, Object.keys(counts).map(function(k){ return counts[k]; }).concat([1]));
                    for (var v = scale; v >= 1; v--) {
                        var w = Math.round((counts[v]||0) / maxCnt * 100);
                        var cntV = counts[v] || 0;
                        html += '<div class="eval-analysis-bar-row">' +
                            '<span class="eval-analysis-bar-lbl">' + v + '</span>' +
                            '<div class="eval-analysis-bar-wrap"><div class="eval-analysis-bar-fill" style="width:' + w + '%"></div></div>' +
                            '<button class="eval-analysis-score-btn" id="' + quid+'_v'+v + '"' +
                            (cntV===0?' disabled style="opacity:0.3;"':' onclick="evalAnalysisToggleWho(\'' + quid+'_v'+v + '\',\'' + quid+'_w'+v + '\')"') + '>' +
                            cntV + '명</button>' +
                            '</div>' +
                            '<div class="eval-analysis-score-who" id="' + quid+'_w'+v + '">' + (whoMap[v]||[]).join(', ') + '</div>';
                    }
                    if (cnt > 0) {
                        var avgTxt = isScoring
                            ? '평균 ' + (sum/cnt).toFixed(1) + '점 (배점 ' + (q.points||0) + '점 기준)'
                            : '평균 ' + (sum/cnt).toFixed(2) + ' / ' + scale;
                        html += '<div class="eval-analysis-avg">' + avgTxt + '</div>';
                    }
                } else {
                    var textAnswers = [];
                    fResps.forEach(function(r){
                        var ans = r.answers.find(function(a){ return a.questionId === q.id; });
                        if (ans && ans.value) textAnswers.push({ name: form.anonymous?'익명':r.evaluatorName, val: ans.value });
                    });
                    if (textAnswers.length === 0) {
                        html += '<div style="color:#ccc;font-size:12px;">응답 없음</div>';
                    } else {
                        var synthKey = 'synth__' + af.drillFormId + '__' + q.id + '__' + af.person;
                        var synthCache = JSON.parse(localStorage.getItem('evalSynthCache') || '{}');
                        var cachedSynth = synthCache[synthKey] || null;
                        evalSynthParams[quid] = {
                            formId: af.drillFormId, qid: q.id, person: af.person,
                            answers: textAnswers.map(function(t){ return t.val; }),
                            synthKey: synthKey
                        };
                        html += '<div class="eval-synth-section">';
                        html += '<div class="eval-synth-hd">AI 종합평가</div>';
                        html += '<div id="' + quid + '_synth_content">';
                        if (cachedSynth) {
                            html += '<div class="eval-synth-text">' + cachedSynth.replace(/\n/g, '<br>') + '</div>' +
                                '<button class="eval-synth-regen-btn" onclick="evalAnalysisGenSynth(\'' + quid + '\')">↺ 다시 생성</button>';
                        } else {
                            html += '<button class="eval-synth-gen-btn" onclick="evalAnalysisGenSynth(\'' + quid + '\')">✦ AI 종합평가 생성</button>';
                        }
                        html += '</div>';
                        html += '<button class="eval-synth-detail-btn" id="' + quid + '_detail_btn" onclick="evalAnalysisToggleTextDetail(\'' + quid + '_detail\')">평가자별 응답 보기 ▼</button>';
                        html += '<div class="eval-synth-detail-list hidden" id="' + quid + '_detail">' +
                            textAnswers.map(function(t){
                                return '<div class="eval-analysis-text-item"><div class="eval-analysis-text-author">' + t.name + '</div>' + t.val + '</div>';
                            }).join('') +
                            '</div>';
                        html += '</div>';
                    }
                }
                html += '</div>';
            });
            html += '</div></div>';
        }
        results.innerHTML = html;
    }
}
function evalAnalysisDrillIn(type, formId) {
    evalAnalysisFilters.drillType = type;
    evalAnalysisFilters.drillFormId = formId || null;
    evalAnalysisRenderResults();
}
function evalAnalysisDrillOut() {
    evalAnalysisFilters.drillType = null;
    evalAnalysisFilters.drillFormId = null;
    evalAnalysisRenderResults();
}
function evalAnalysisToggleWho(btnId, whoId) {
    var btn = document.getElementById(btnId);
    var who = document.getElementById(whoId);
    if (!btn || !who) return;
    var isOpen = who.style.display === 'block';
    // 같은 질문의 다른 점수 버튼들 닫기
    var qBase = btnId.replace(/_v\d+$/, '');
    document.querySelectorAll('[id^="' + qBase + '_v"]').forEach(function(b){ b.classList.remove('active'); });
    document.querySelectorAll('[id^="' + qBase + '_w"]').forEach(function(w){ w.style.display='none'; });
    if (!isOpen) { btn.classList.add('active'); who.style.display = 'block'; }
}
function evalAnalysisToggleDetail(listId) {
    var el = document.getElementById(listId);
    if (!el) return;
    el.classList.toggle('hidden');
    var btn = el.previousElementSibling;
    if (btn) btn.textContent = el.classList.contains('hidden') ? '개인별 응답 보기' : '개인별 응답 닫기';
}
function evalAnalysisToggleTextDetail(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var isHidden = el.classList.contains('hidden');
    el.classList.toggle('hidden');
    var btn = el.previousElementSibling;
    if (btn) btn.textContent = isHidden ? '평가자별 응답 닫기 ▲' : '평가자별 응답 보기 ▼';
}
async function evalAnalysisGenSynth(quid) {
    var p = evalSynthParams[quid];
    if (!p || !p.answers || p.answers.length === 0) return;
    var apiKey = localStorage.getItem('caringApiKey');
    if (!apiKey) {
        apiKey = prompt('Claude API 키를 입력하세요 (sk-ant-...):');
        if (!apiKey) return;
        localStorage.setItem('caringApiKey', apiKey.trim());
        apiKey = apiKey.trim();
    }
    var contentEl = document.getElementById(quid + '_synth_content');
    if (contentEl) contentEl.innerHTML = '<div class="eval-synth-loading">AI가 종합평가를 작성 중입니다...</div>';
    var promptTxt = '다음은 ' + p.person + '에 대한 평가자들의 서술형 평가 응답입니다:\n\n' +
        p.answers.map(function(t, i){ return (i+1) + '. ' + t; }).join('\n\n') + '\n\n' +
        '위 내용을 바탕으로 아래 형식에 맞게 종합 평가를 한국어 3~5문장으로 작성해 주세요:\n' +
        '- 평가자들이 공통적으로 언급한 내용을 중심으로 어떤 평가를 받았는지 서술하세요.\n' +
        '- 그 외 주목할 만한 의견이 있으면 추가하세요.\n' +
        '- 부정적인 피드백이 있다면 마지막에 주의가 필요하다고 언급하세요.\n' +
        '평가자 이름이나 번호를 언급하지 말고 객관적이고 간결하게 작성하세요.';
    try {
        var res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true'
            },
            body: JSON.stringify({
                model: 'claude-haiku-4-5-20251001',
                max_tokens: 512,
                messages: [{ role: 'user', content: promptTxt }]
            })
        });
        if (!res.ok) {
            var errData = await res.json().catch(function(){ return {}; });
            throw new Error(errData.error && errData.error.message ? errData.error.message : 'HTTP ' + res.status);
        }
        var data = await res.json();
        var synth = (data.content && data.content[0] && data.content[0].text) ? data.content[0].text.trim() : '';
        if (!synth) throw new Error('응답 없음');
        var cache = JSON.parse(localStorage.getItem('evalSynthCache') || '{}');
        cache[p.synthKey] = synth;
        localStorage.setItem('evalSynthCache', JSON.stringify(cache));
        if (contentEl) {
            contentEl.innerHTML = '<div class="eval-synth-text">' + synth.replace(/\n/g, '<br>') + '</div>' +
                '<button class="eval-synth-regen-btn" onclick="evalAnalysisGenSynth(\'' + quid + '\')">↺ 다시 생성</button>';
        }
    } catch(e) {
        if (contentEl) {
            contentEl.innerHTML = '<div class="eval-synth-error">생성 실패: ' + e.message + '</div>' +
                '<button class="eval-synth-gen-btn" onclick="evalAnalysisGenSynth(\'' + quid + '\')">✦ 다시 시도</button>';
        }
    }
}

// ══════════════════════════════════════
// ─── 평가설정 ───
// ══════════════════════════════════════
function evalSettingsTab(tab) {
    evalSettingsCurrentTab = tab;
    document.querySelectorAll('.eval-settings-nav').forEach(function(btn){
        btn.classList.toggle('active', btn.getAttribute('data-stab') === tab);
    });
    if (tab === 'forms')  evalSettingsRenderForms();
    if (tab === 'assign') evalSettingsRenderAssign();
}

// ── 양식 관리 ──
function evalFormsSetYear(yr) {
    evalFormsYear = yr;
    evalSettingsRenderForms();
}


function evalSettingsRenderForms() {
    var content = document.getElementById('eval-settings-content');
    if (!content) return;

    // 년도 목록
    var years = [];
    evalForms.forEach(function(f){ if (f.year && years.indexOf(f.year)<0) years.push(f.year); });
    years.sort(function(a,b){ return b-a; });

    var yearOpts = '<option value=""' + (!evalFormsYear?' selected':'') + '>전체 년도</option>' +
        years.map(function(y){
            return '<option value="'+y+'"'+(String(y)===String(evalFormsYear)?' selected':'')+'>'+y+'년</option>';
        }).join('');
    var editorHtml = '';
    if (evalFormEditorId !== null) editorHtml = evalFormEditorHtml();

    var isEditing = evalFormEditorId !== null;

    var yearChips = '<div class="eval-year-chips">' +
        '<select class="eval-sfilter-sel" style="height:32px;min-width:110px;" onchange="evalFormsSetYear(this.value)">' + yearOpts + '</select>' +
        (isEditing ? '' : '<button class="eval-add-btn" style="margin-left:auto;" onclick="evalFormNew()">+ 양식 추가</button>') +
        '</div>';

    var showForms = evalForms.filter(function(f){ return !evalFormsYear || f.year===evalFormsYear; });
    var typeFormBadge = function(f) {
        if (!f.formType) return '';
        var cls = f.formType==='probation'?'eval-form-type-probation':f.formType==='self'?'eval-form-type-self':f.formType==='peer'?'eval-form-type-peer':'eval-form-type-any';
        return '<span class="eval-form-type-badge ' + cls + '">' + evalTypeLabel(f.formType) + '</span>';
    };
    var listHtml = isEditing ? '' : showForms.length === 0
        ? '<div class="eval-empty" style="padding:30px 0;">' + (evalFormsYear ? evalFormsYear + '년 양식이 없습니다.' : '아직 양식이 없습니다.') + '</div>'
        : '<div class="eval-form-list">' + showForms.map(function(f) {
            var fItems = evalFormGetItems(f);
            var scorCnt = fItems.filter(function(i){ return i.itemType==='scoring'; }).length;
            var scalCnt = fItems.filter(function(i){ return i.itemType==='scale';   }).length;
            var tCnt    = fItems.filter(function(i){ return i.itemType==='text';    }).length;
            var sCnt    = fItems.filter(function(i){ return i.itemType==='section'; }).length;
            var metaParts = [];
            if (sCnt)    metaParts.push('대분류 ' + sCnt + '개');
            if (scorCnt) metaParts.push('배점형 ' + scorCnt + '개');
            if (scalCnt) metaParts.push('척도형 ' + scalCnt + '개');
            if (tCnt)    metaParts.push('서술형 ' + tCnt + '개');
            if (!scorCnt && !scalCnt && !tCnt) metaParts.push('문항 없음');
            if (f.anonymous) metaParts.push('익명');
            return '<div class="eval-form-item">' +
                typeFormBadge(f) +
                '<span class="eval-form-item-name">' + (f.year?f.year+'년 ':'') + f.title + '</span>' +
                '<span class="eval-form-item-meta">' + metaParts.join(' · ') + '</span>' +
                '<div class="eval-form-item-actions">' +
                '<button class="eval-item-btn" onclick="evalFormEdit(\'' + f.id + '\')">편집</button>' +
                '<button class="eval-item-btn" onclick="evalFormCopy(\'' + f.id + '\')">복사</button>' +
                '<button class="eval-item-btn danger" onclick="evalFormDel(\'' + f.id + '\')">삭제</button>' +
                '</div></div>';
        }).join('') + '</div>';

    content.innerHTML = (isEditing ? '' : yearChips) + editorHtml + listHtml;

    if (evalFormEditorId !== null) {
        nBlockEditorGlobalInit();
        var zone = document.getElementById('eval-form-editor-zone');
        if (zone) nZoneRender(zone, evalFormEditorBlocks.length > 0 ? evalFormEditorBlocks : []);
    }
}

function evalFormNew() {
    evalFormEditorId = 'new';
    evalTempItems = [];
    evalFormEditorBlocks = [];
    evalSettingsRenderForms();
    setTimeout(function(){
        var el = document.getElementById('eval-editor-title'); if (el) el.focus();
        var yr = document.getElementById('eval-editor-year'); if (yr && evalFormsYear) yr.value = evalFormsYear;
    }, 60);
}
function evalFormEdit(id) {
    evalFormEditorId = id;
    var form = evalForms.find(function(f){ return f.id === id; });
    if (form) {
        evalTempItems = evalFormGetItems(form);
        evalFormEditorBlocks = JSON.parse(JSON.stringify(form.blocks||[]));
    } else {
        evalTempItems = [];
        evalFormEditorBlocks = [];
    }
    evalSettingsRenderForms();
    setTimeout(function(){ var el = document.getElementById('eval-editor-title'); if(el) el.focus(); }, 60);
}
function evalFormCopy(id) {
    var form = evalForms.find(function(f){ return f.id === id; });
    if (!form) return;
    var copy = JSON.parse(JSON.stringify(form));
    copy.id = evalGenId();
    copy.title = form.title + ' (복사본)';
    evalForms.push(copy);
    evalSaveLocal();
    evalSettingsRenderForms();
    showToast('양식이 복사되었습니다.', 'success');
}
async function evalFormDel(id) {
    if (!await showConfirm('이 양식을 삭제하시겠습니까?')) return;
    evalForms = evalForms.filter(function(f){ return f.id !== id; });
    evalAssignments = evalAssignments.filter(function(a){ return a.formId !== id; });
    evalSaveLocal();
    evalSettingsRenderForms();
}

var evalTempItems = [];          // [{id, itemType:'section'|'scoring'|'scale'|'text', title?, text?, points?, scale?}]
var evalFormEditorBlocks = [];
var evalAssignFilter    = { year: '', type: '', formId: '' };
var evalStatusFilters     = { year: '', type: '', formId: '', status: 'all', search: '' };
var evalStatusView        = 'list';
var evalStatusDashFilter  = 'all';
var evalAnalysisFilters = { year: '', type: '', search: '', person: null, drillType: null, drillFormId: null };
var evalFormsYear = '';          // 양식관리에서 현재 선택된 년도

var SCALE_LABELS_5  = ['매우 그렇지 않다', '그렇지 않다', '보통이다', '그렇다', '매우 그렇다'];
var SCALE_LABELS_10 = ['매우 그렇지 않다', '', '', '', '보통이다', '', '', '', '', '매우 그렇다'];
function evalScaleLabel(scale, idx) {
    var arr = scale === 10 ? SCALE_LABELS_10 : SCALE_LABELS_5;
    return arr[idx] || '';
}
// 평가 유형 순서 (항상 이 순서: 수습→셀프→동료)
var EVAL_TYPES = [
    { value: 'probation', label: '수습평가', cls: 'eval-type-probation' },
    { value: 'self',      label: '셀프평가', cls: 'eval-type-self'      },
    { value: 'peer',      label: '동료평가', cls: 'eval-type-peer'      },
    { value: 'multi',     label: '다면평가', cls: 'eval-type-multi'     }
];
function evalTypeLabel(type) {
    var t = EVAL_TYPES.find(function(x){ return x.value===type; });
    return t ? t.label : type;
}
function evalTypeCls(type) {
    var t = EVAL_TYPES.find(function(x){ return x.value===type; });
    return t ? t.cls : '';
}
function evalTypeOptions(selected, allLabel) {
    var opts = (allLabel ? '<option value="">' + allLabel + '</option>' : '');
    EVAL_TYPES.forEach(function(t){
        opts += '<option value="' + t.value + '"' + (t.value===selected?' selected':'') + '>' + t.label + '</option>';
    });
    return opts;
}

function evalFormGetItems(form) {
    if (form.items && form.items.length) return JSON.parse(JSON.stringify(form.items));
    var result = [];
    // backwards compat: old ratingQuestions → scoring
    (form.ratingQuestions || (form.questions||[]).filter(function(q){ return q.type==='rating'; }))
        .forEach(function(q){ result.push(Object.assign({}, q, { itemType: 'scoring' })); });
    (form.textQuestions || (form.questions||[]).filter(function(q){ return q.type==='text'; }))
        .forEach(function(q){ result.push(Object.assign({}, q, { itemType: 'text' })); });
    return result;
}
function evalFormQItems(form) {
    return evalFormGetItems(form).filter(function(i){ return i.itemType !== 'section'; });
}
function evalFormYear(form) {
    return form.year || '';
}

function evalFormEditorHtml() {
    var isNew = evalFormEditorId === 'new';
    var form = isNew ? null : evalForms.find(function(f){ return f.id === evalFormEditorId; });
    var title    = form ? form.title : '';
    var anonymous = form ? !!form.anonymous : false;
    var totalPts = evalTempItems.filter(function(i){ return i.itemType==='scoring'; })
        .reduce(function(s,i){ return s+(i.points||0); }, 0);
    var formType = form ? (form.formType || '') : '';
    var year = form ? (form.year || '') : (evalFormsYear || '');
    return '<div class="eval-form-editor">' +
        '<div class="eval-form-editor-title">' + (isNew ? '새 양식 추가' : '양식 편집') + '</div>' +
        '<div class="eval-editor-row" style="gap:10px;">' +
        '<div style="flex:0 0 90px;"><label class="eval-editor-lbl">년도</label>' +
        '<input class="eval-editor-input" id="eval-editor-year" type="text" maxlength="4" value="' + year + '" placeholder="예: 2025" style="width:100%;"></div>' +
        '<div style="flex:0 0 130px;"><label class="eval-editor-lbl">양식 유형</label>' +
        '<select class="eval-editor-input" id="eval-editor-formtype" style="width:100%;">' + evalTypeOptions(formType,'유형 선택') + '</select></div>' +
        '<div style="flex:1;"><label class="eval-editor-lbl">양식 제목 <span style="color:#F36178">*</span></label>' +
        '<input class="eval-editor-input" id="eval-editor-title" type="text" value="' + title.replace(/"/g,'&quot;') + '" placeholder="예: 상반기 셀프평가"></div>' +
        '</div>' +
        '<div class="eval-editor-row" style="flex-direction:column;gap:8px;">' +
        '<label class="eval-editor-lbl">안내문 / 설명</label>' +
        '<div id="eval-form-editor-zone" class="nb-editor-zone eval-form-editor-zone"></div>' +
        '</div>' +
        '<div class="eval-editor-row" style="align-items:center;">' +
        '<label class="eval-editor-lbl" style="margin-bottom:0;">익명 평가</label>' +
        '<label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:#555;">' +
        '<input type="checkbox" id="eval-editor-anonymous" style="width:16px;height:16px;accent-color:#F36178;"' + (anonymous ? ' checked' : '') + '> 평가자 이름을 피평가자에게 숨깁니다</label>' +
        '</div>' +
        '<div class="eval-editor-section-title">문항 <span id="eval-items-total" style="font-weight:400;color:#1565c0;">— 배점 합계 ' + totalPts + '점</span></div>' +
        '<div class="eval-q-list" id="eval-items-list">' + evalItemsListHtml() + '</div>' +
        '<div class="eval-add-q-btns">' +
        '<button class="eval-add-q-btn eval-add-section-btn" onclick="evalItemAdd(\'section\')">+ 대분류</button>' +
        '<button class="eval-add-q-btn" onclick="evalItemAdd(\'scoring\')">+ 배점형 문항</button>' +
        '<button class="eval-add-q-btn" style="border-color:#00838f;color:#00838f;" onclick="evalItemAdd(\'scale\')">+ 척도형 문항</button>' +
        '<button class="eval-add-q-btn eval-add-q-btn-text" onclick="evalItemAdd(\'text\')">+ 서술형 문항</button>' +
        '</div>' +
        '<div class="eval-editor-actions">' +
        '<button class="eval-editor-cancel" onclick="evalFormEditorCancel()">취소</button>' +
        '<button class="eval-editor-save" onclick="evalFormEditorSave()">저장</button>' +
        '</div></div>';
}

function evalItemsSyncInputs() {
    var listEl = document.getElementById('eval-items-list');
    if (!listEl) return;
    listEl.querySelectorAll('.eval-q-item').forEach(function(row) {
        var idx = parseInt(row.getAttribute('data-idx'));
        if (isNaN(idx) || !evalTempItems[idx]) return;
        var item = evalTempItems[idx];
        if (item.itemType === 'section') {
            var ti = row.querySelector('.eval-section-title-input');
            if (ti) item.title = ti.value;
        } else {
            var textInp = row.querySelector('.eval-q-text-input');
            var ptsInp  = row.querySelector('.eval-q-points-input');
            var scSel   = row.querySelector('.eval-q-scale-select');
            if (textInp) item.text   = textInp.value;
            if (ptsInp)  item.points = parseInt(ptsInp.value, 10) || 10;
            if (scSel)   item.scale  = parseInt(scSel.value, 10) || 5;
            if (scSel && item.itemType === 'scale') { item.scale = parseInt(scSel.value, 10) || 5; }
        }
    });
}

function evalItemsListHtml() {
    if (evalTempItems.length === 0) {
        return '<div class="eval-q-empty">아래 버튼으로 대분류 또는 문항을 추가하세요.</div>';
    }
    var qNum = 0;
    return evalTempItems.map(function(item, i) {
        var isFirst = i === 0;
        var isLast  = i === evalTempItems.length - 1;
        var moveBtns = '<div class="eval-q-move-group">' +
            '<button class="eval-q-move" onclick="evalItemMove(' + i + ',-1)"' + (isFirst?' disabled style="opacity:0.3;"':'') + '>▲</button>' +
            '<button class="eval-q-move" onclick="evalItemMove(' + i + ',1)"'  + (isLast ?  ' disabled style="opacity:0.3;"':'') + '>▼</button>' +
            '</div>';

        if (item.itemType === 'section') {
            var safeTitle = (item.title||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;');
            return '<div class="eval-q-item eval-item-section-row" data-idx="' + i + '">' +
                '<span class="eval-item-section-badge">대분류</span>' +
                '<input class="eval-section-title-input" type="text" value="' + safeTitle + '" placeholder="대분류 이름">' +
                moveBtns +
                '<button class="eval-q-del" onclick="evalItemDel(' + i + ')">×</button>' +
                '</div>';
        }

        qNum++;
        var isScoring = item.itemType === 'scoring';
        var isScale   = item.itemType === 'scale';
        var isText    = item.itemType === 'text';
        var typeCls   = isScoring ? 'eval-q-type-scoring' : isScale ? 'eval-q-type-scale' : 'eval-q-type-text';
        var typeLabel = isScoring ? '배점형' : isScale ? '척도형' : '서술형';
        var safeText  = (item.text||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;');
        return '<div class="eval-q-item" data-idx="' + i + '">' +
            '<span class="eval-q-num">' + qNum + '</span>' +
            '<input class="eval-q-text-input" type="text" value="' + safeText + '" placeholder="질문 내용을 입력하세요">' +
            '<span class="eval-q-type-badge ' + typeCls + '">' + typeLabel + '</span>' +
            (isScoring
                ? '<input class="eval-q-points-input" type="number" value="' + (item.points||10) + '" min="1" max="100" title="배점">' +
                  '<span class="eval-q-points-unit">점</span>' +
                  '<select class="eval-q-scale-select">' +
                  '<option value="5"' + (item.scale===10?'':' selected') + '>1-5</option>' +
                  '<option value="10"' + (item.scale===10?' selected':'') + '>1-10</option>' +
                  '</select>'
                : (isScale
                    ? '<select class="eval-q-scale-select">' +
                      '<option value="5"' + (item.scale===10?'':' selected') + '>1-5 척도</option>' +
                      '<option value="10"' + (item.scale===10?' selected':'') + '>1-10 척도</option>' +
                      '</select>'
                    : '')) +
            moveBtns +
            '<button class="eval-q-del" onclick="evalItemDel(' + i + ')">×</button>' +
            '</div>';
    }).join('');
}
function evalItemsRefresh() {
    var listEl = document.getElementById('eval-items-list');
    if (listEl) listEl.innerHTML = evalItemsListHtml();
    var totalPts = evalTempItems.filter(function(i){ return i.itemType==='scoring'; })
        .reduce(function(s,i){ return s+(i.points||0); }, 0);
    var el = document.getElementById('eval-items-total');
    if (el) el.textContent = totalPts > 0 ? '— 배점 합계 ' + totalPts + '점' : '';
}
function evalItemDel(idx) {
    evalItemsSyncInputs();
    evalTempItems.splice(idx, 1);
    evalItemsRefresh();
}
function evalItemMove(idx, dir) {
    evalItemsSyncInputs();
    var target = idx + dir;
    if (target < 0 || target >= evalTempItems.length) return;
    var tmp = evalTempItems[idx];
    evalTempItems[idx] = evalTempItems[target];
    evalTempItems[target] = tmp;
    evalItemsRefresh();
}
function evalItemAdd(itemType) {
    evalItemsSyncInputs();
    if (itemType === 'section') {
        evalTempItems.push({ id: evalGenId(), itemType: 'section', title: '' });
    } else if (itemType === 'scoring') {
        evalTempItems.push({ id: evalGenId(), itemType: 'scoring', text: '', scale: 5, points: 10 });
    } else if (itemType === 'scale') {
        evalTempItems.push({ id: evalGenId(), itemType: 'scale', text: '', scale: 5 });
    } else {
        evalTempItems.push({ id: evalGenId(), itemType: 'text', text: '' });
    }
    evalItemsRefresh();
    setTimeout(function() {
        var inputs = document.querySelectorAll('#eval-items-list .eval-q-item:last-child input');
        if (inputs.length) inputs[0].focus();
    }, 50);
}

function evalFormEditorSave() {
    var titleEl     = document.getElementById('eval-editor-title');
    var yearEl      = document.getElementById('eval-editor-year');
    var anonymousEl = document.getElementById('eval-editor-anonymous');
    if (!titleEl || !titleEl.value.trim()) { showToast('양식 제목을 입력하세요.', 'error'); return; }
    evalItemsSyncInputs();
    var qItems = evalTempItems.filter(function(i){ return i.itemType !== 'section'; });
    for (var vi = 0; vi < qItems.length; vi++) {
        if (!(qItems[vi].text||'').trim()) { showToast('문항 내용을 입력하세요.', 'error'); return; }
    }
    if (qItems.length === 0) { showToast('문항을 1개 이상 추가하세요.', 'error'); return; }
    var isAnonymous = !!(anonymousEl && anonymousEl.checked);
    var yr = yearEl ? yearEl.value.trim() : '';
    var formTypeEl = document.getElementById('eval-editor-formtype');
    var formType = formTypeEl ? formTypeEl.value : '';
    var zone = document.getElementById('eval-form-editor-zone');
    var blocks = zone ? nGetBlocks(zone) : [];

    if (evalFormEditorId === 'new') {
        evalForms.push({ id: evalGenId(), year: yr, formType: formType, title: titleEl.value.trim(), anonymous: isAnonymous, blocks: blocks, items: evalTempItems.slice() });
    } else {
        var form = evalForms.find(function(f){ return f.id === evalFormEditorId; });
        if (form) { form.year = yr; form.formType = formType; form.title = titleEl.value.trim(); form.anonymous = isAnonymous; form.blocks = blocks; form.items = evalTempItems.slice(); delete form.questions; delete form.ratingQuestions; delete form.textQuestions; }
    }
    evalSaveLocal();
    evalFormEditorId = null;
    evalTempItems = [];
    evalFormEditorBlocks = [];
    evalSettingsRenderForms();
    showToast('양식이 저장되었습니다.', 'success');
}

function evalFormEditorCancel() {
    evalFormEditorId = null;
    evalTempItems = [];
    evalFormEditorBlocks = [];
    evalSettingsRenderForms();
}

// ── 배정관리 ──
function evalAssignSetFilter(key, val) {
    if (key === 'year' || key === 'type') evalAssignFilter.formId = '';
    evalAssignFilter[key] = val;
    evalSettingsRenderAssign();
}
function evalSettingsRenderAssign() {
    var content = document.getElementById('eval-settings-content');
    if (!content) return;
    var af = evalAssignFilter;

    var formYears = [];
    evalForms.forEach(function(f){ if(f.year && formYears.indexOf(f.year)<0) formYears.push(f.year); });
    formYears.sort().reverse();
    var yearOpts = '<option value=""' + (!af.year?' selected':'') + '>전체 년도</option>' +
        formYears.map(function(y){ return '<option value="'+y+'"'+(y===af.year?' selected':'')+'>'+y+'년</option>'; }).join('');

    var filteredForms = evalForms.filter(function(f){
        if (af.year && f.year !== af.year) return false;
        if (af.type && f.formType && f.formType !== af.type) return false;
        return true;
    });
    var formOpts = '<option value="">양식 선택</option>' +
        filteredForms.map(function(f){
            return '<option value="' + f.id + '"' + (f.id===af.formId?' selected':'') + '>' + (f.year?f.year+'년 ':'') + f.title + '</option>';
        }).join('');

    // 새 배정 추가 폼 — 항상 표시, 드롭다운이 리스트 필터 역할도 겸함
    var addHtml = '<div class="eval-assign-form">' +
        '<div style="font-size:14px;font-weight:700;color:#333;margin-bottom:14px;">새 배정 추가</div>' +
        '<div class="eval-assign-form-grid">' +
        '<div class="eval-assign-form-row"><label class="eval-assign-form-lbl">년도</label>' +
        '<select class="eval-assign-form-input" onchange="evalAssignSetFilter(\'year\',this.value)">' + yearOpts + '</select></div>' +
        '<div class="eval-assign-form-row"><label class="eval-assign-form-lbl">유형</label>' +
        '<select class="eval-assign-form-input" onchange="evalAssignSetFilter(\'type\',this.value)">' + evalTypeOptions(af.type,'유형 선택') + '</select></div>' +
        '<div class="eval-assign-form-row"><label class="eval-assign-form-lbl">양식</label>' +
        '<select class="eval-assign-form-input" onchange="evalAssignSetFilter(\'formId\',this.value)">' + formOpts + '</select></div>' +
        '<div class="eval-assign-form-row"><label class="eval-assign-form-lbl">평가자 이름</label>' +
        '<input class="eval-assign-form-input" id="ea-evaluator" type="text" placeholder="예: 김간호"></div>' +
        '<div class="eval-assign-form-row"><label class="eval-assign-form-lbl">피평가자 이름</label>' +
        '<input class="eval-assign-form-input" id="ea-evaluatee" type="text" placeholder="예: 이요양"></div>' +
        '<div class="eval-assign-form-row"><label class="eval-assign-form-lbl">시작일</label>' +
        dateSplitHtml('ea-start-date', 'dsp-round') + '</div>' +
        '<div class="eval-assign-form-row"><label class="eval-assign-form-lbl">종료일</label>' +
        dateSplitHtml('ea-end-date', 'dsp-round') + '</div>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;">' +
        '<button class="eval-add-btn" onclick="evalAssignAdd()">배정 추가</button>' +
        '</div></div>';

    var filtered = evalAssignments.filter(function(a) {
        if (af.year) { var f = evalForms.find(function(x){ return x.id===a.formId; }); if (!f || f.year !== af.year) return false; }
        if (af.type && a.type !== af.type) return false;
        if (af.formId && a.formId !== af.formId) return false;
        return true;
    });
    var listHtml = filtered.length === 0
        ? '<div class="eval-empty" style="padding:30px 0;">' + (af.type || af.formId || af.year ? '해당 조건의 배정이 없습니다.' : '배정 내역이 없습니다.') + '</div>'
        : '<table class="eval-assign-table"><thead><tr>' +
          '<th>유형</th><th>양식</th><th>평가자</th><th>피평가자</th><th>기간</th><th>상태</th><th></th>' +
          '</tr></thead><tbody>' +
          filtered.map(function(a) {
              var resp = evalResponses.find(function(r){ return r.assignmentId === a.id; });
              var f = evalForms.find(function(x){ return x.id === a.formId; });
              var typeCls = a.type==='probation'?'eval-form-type-probation':a.type==='self'?'eval-form-type-self':a.type==='peer'?'eval-form-type-peer':'eval-form-type-any';
              return '<tr>' +
                  '<td>' + '<span class="eval-form-type-badge ' + typeCls + '" style="font-size:11px;">' + evalTypeLabel(a.type) + '</span>' + '</td>' +
                  '<td style="font-size:12px;color:#888;">' + (f ? (f.year?f.year+'년 ':'')+f.title : '—') + '</td>' +
                  '<td>' + a.evaluatorName + '</td>' +
                  '<td>' + a.evaluateeName + '</td>' +
                  '<td>' + (a.startDate && a.endDate ? a.startDate + ' ~ ' + a.endDate : a.period || '—') + '</td>' +
                  '<td>' + (resp
                      ? '<span style="font-size:11px;color:#388e3c;font-weight:700;">제출완료</span>'
                      : '<span style="font-size:11px;color:#e65100;">미제출</span>') + '</td>' +
                  '<td>' + (resp ? '' : '<button class="eval-item-btn danger" onclick="evalAssignDel(\'' + a.id + '\')">삭제</button>') + '</td>' +
                  '</tr>';
          }).join('') + '</tbody></table>';

    content.innerHTML = addHtml + listHtml;
}

function evalAssignAdd() {
    var af = evalAssignFilter;
    if (!af.type || !af.formId) { showToast('유형과 양식을 먼저 선택하세요.', 'error'); return; }
    var evaluator = ((document.getElementById('ea-evaluator')||{}).value||'').trim();
    var evaluatee = ((document.getElementById('ea-evaluatee')||{}).value||'').trim();
    var startDate = ((document.getElementById('ea-start-date')||{}).value||'').trim();
    var endDate   = ((document.getElementById('ea-end-date')||{}).value||'').trim();

    if (!evaluator) { showToast('평가자 이름을 입력하세요.', 'error'); return; }
    if (!evaluatee) { showToast('피평가자 이름을 입력하세요.', 'error'); return; }

    var dup = evalAssignments.find(function(a){
        return a.type===af.type && a.evaluatorName===evaluator && a.evaluateeName===evaluatee && a.formId===af.formId;
    });
    if (dup) { showToast('동일한 배정이 이미 존재합니다.', 'error'); return; }

    evalAssignments.push({
        id: evalGenId(), type: af.type,
        evaluatorName: evaluator, evaluateeName: evaluatee,
        formId: af.formId, startDate: startDate, endDate: endDate, status: 'pending'
    });
    evalSaveLocal();
    evalSettingsRenderAssign();
    showToast('배정이 추가되었습니다.', 'success');
}

/* ========================================================
   업무매뉴얼 (board-manual) — Notion 스타일 조직별 매뉴얼 허브
   ======================================================== */
var mnlData = [];
var mnlOrgs = ['공통', '본사본부', '주간보호', '방문요양'];
var mnlCats = ['조직정보', '시설/자산/법인서류', '업무툴/시스템', '아마란스/지출방식별 가이드', '업무비용 지원', '제작물/영상제작/디자인', '데이터취합', '인사/채용'];
var mnlActiveOrg = '공통';
var mnlWriteMode = 'new';
var mnlWriteId = null;
var mnlEditorCtx = null;

var MNL_SEED = [
    { id:1,  cat:'조직정보',          orgs:['공통'],   title:'케어링 조직 소개 및 비전',          author:'관리자', authorId:'admin', date:'2026-01-05', views:88, blocks:[], body:'' },
    { id:2,  cat:'인사/채용',         orgs:['공통'],   title:'입사 온보딩 프로세스 가이드',        author:'관리자', authorId:'admin', date:'2026-01-10', views:42, blocks:[], body:'' },
    { id:3,  cat:'인사/채용',         orgs:['공통'],   title:'연차 신청 및 사용 가이드',           author:'관리자', authorId:'admin', date:'2026-02-01', views:61, blocks:[], body:'' },
    { id:4,  cat:'업무툴/시스템',     orgs:['공통'],   title:'I·CARE 시스템 사용 설명서',          author:'관리자', authorId:'admin', date:'2026-02-20', views:55, blocks:[], body:'' },
    { id:5,  cat:'업무비용 지원',     orgs:['공통'],   title:'업무비 신청 기준 및 방법',           author:'관리자', authorId:'admin', date:'2026-03-01', views:30, blocks:[], body:'' },
    { id:6,  cat:'조직정보',          orgs:['본사본부'], title:'본사본부 팀별 역할 안내',           author:'관리자', authorId:'admin', date:'2026-01-15', views:34, blocks:[], body:'' },
    { id:7,  cat:'아마란스/지출방식별 가이드', orgs:['본사본부'], title:'아마란스 법인카드 사용 가이드', author:'관리자', authorId:'admin', date:'2026-02-10', views:28, blocks:[], body:'' },
    { id:8,  cat:'데이터취합',        orgs:['본사본부'], title:'월별 데이터 취합 절차',             author:'관리자', authorId:'admin', date:'2026-03-05', views:19, blocks:[], body:'' },
    { id:9,  cat:'제작물/영상제작/디자인', orgs:['본사본부'], title:'홍보물 제작 가이드라인',        author:'관리자', authorId:'admin', date:'2026-03-10', views:22, blocks:[], body:'' },
    { id:10, cat:'조직정보',          orgs:['주간보호'], title:'주간보호센터 운영 기준 안내',       author:'관리자', authorId:'admin', date:'2026-01-20', views:45, blocks:[], body:'' },
    { id:11, cat:'시설/자산/법인서류',orgs:['주간보호'], title:'주간보호 시설 관리 매뉴얼',        author:'관리자', authorId:'admin', date:'2026-02-15', views:27, blocks:[], body:'' },
    { id:12, cat:'업무툴/시스템',     orgs:['주간보호'], title:'주간보호 기록지 작성 방법',        author:'관리자', authorId:'admin', date:'2026-03-12', views:31, blocks:[], body:'' },
    { id:13, cat:'조직정보',          orgs:['방문요양'], title:'방문요양 서비스 기준 안내',        author:'관리자', authorId:'admin', date:'2026-01-25', views:38, blocks:[], body:'' },
    { id:14, cat:'시설/자산/법인서류',orgs:['방문요양'], title:'방문요양 계약서 작성 가이드',      author:'관리자', authorId:'admin', date:'2026-02-20', views:24, blocks:[], body:'' },
    { id:15, cat:'인사/채용',         orgs:['방문요양'], title:'요양보호사 채용 및 관리 가이드',   author:'관리자', authorId:'admin', date:'2026-03-15', views:36, blocks:[], body:'' },
];

function mnlIsAdmin() {
    var u = JSON.parse(localStorage.getItem('userData') || '{}');
    return u.role === 'admin' || u.id === 'db.yu@caring.co.kr';
}
function mnlEnsureData() {
    var saved = localStorage.getItem('mnlData_v1');
    if (saved) { try { mnlData = JSON.parse(saved); } catch(e) { mnlData = MNL_SEED.map(function(n){ return Object.assign({},n,{orgs:n.orgs.slice()}); }); } }
    else { mnlData = MNL_SEED.map(function(n){ return Object.assign({},n,{orgs:n.orgs.slice()}); }); mnlSaveData(); }
    var savedOrgs = localStorage.getItem('mnlOrgs_v1');
    if (savedOrgs) { try { mnlOrgs = JSON.parse(savedOrgs); } catch(e) {} }
    var savedCats = localStorage.getItem('mnlCats_v1');
    if (savedCats) { try { mnlCats = JSON.parse(savedCats); } catch(e) {} }
}
function mnlSaveData() { localStorage.setItem('mnlData_v1', JSON.stringify(mnlData)); }
function mnlSaveOrgs() { localStorage.setItem('mnlOrgs_v1', JSON.stringify(mnlOrgs)); }
function mnlSaveCats() { localStorage.setItem('mnlCats_v1', JSON.stringify(mnlCats)); }
function mnlGenId() { return mnlData.length ? Math.max.apply(null, mnlData.map(function(n){ return n.id; })) + 1 : 1; }
function mnlCurrentUser() { return JSON.parse(localStorage.getItem('userData') || '{}'); }

function initBoardManual() {
    mnlEnsureData();
    if (!mnlActiveOrg) mnlActiveOrg = '공통';
    var isAdmin = mnlIsAdmin();
    var orgBtn = document.getElementById('mnl-org-btn');
    var catBtn = document.getElementById('mnl-cat-btn');
    var addBtn = document.getElementById('mnl-add-btn');
    if (orgBtn) orgBtn.style.display = isAdmin ? 'inline-flex' : 'none';
    if (catBtn) catBtn.style.display = isAdmin ? 'inline-flex' : 'none';
    if (addBtn) addBtn.style.display = isAdmin ? 'inline-flex' : 'none';
    mnlRender();
}

function mnlRender() {
    mnlRenderOrgTabs();
    mnlRenderGrid();
}

function mnlRenderOrgTabs() {
    var container = document.getElementById('mnl-org-tabs');
    if (!container) return;
    container.innerHTML = '';
    mnlOrgs.forEach(function(org) {
        var btn = document.createElement('button');
        btn.className = 'mnl-org-tab' + (org === mnlActiveOrg ? ' active' : '');
        btn.textContent = org;
        btn.onclick = (function(o){ return function(){ mnlActiveOrg = o; mnlRender(); }; })(org);
        container.appendChild(btn);
    });
}

function mnlRenderGrid() {
    var grid = document.getElementById('mnl-grid');
    if (!grid) return;
    var query = ((document.getElementById('mnl-search-q') || {}).value || '').trim().toLowerCase();
    var filtered = mnlData.filter(function(n) {
        if (!n.orgs) return false;
        var orgMatch = mnlActiveOrg === '공통'
            ? n.orgs.indexOf('공통') >= 0
            : (n.orgs.indexOf(mnlActiveOrg) >= 0 || n.orgs.indexOf('공통') >= 0);
        if (!orgMatch) return false;
        if (query && !n.title.toLowerCase().includes(query)) return false;
        return true;
    });
    grid.innerHTML = '';
    var catItems = {};
    mnlCats.forEach(function(cat) { catItems[cat] = []; });
    filtered.forEach(function(n) {
        if (!catItems[n.cat]) catItems[n.cat] = [];
        catItems[n.cat].push(n);
    });
    var hasAny = false;
    mnlCats.forEach(function(cat) {
        var items = catItems[cat];
        if (!items || items.length === 0) return;
        hasAny = true;
        var card = document.createElement('div');
        card.className = 'mnl-cat-card';
        var hd = document.createElement('div');
        hd.className = 'mnl-cat-header';
        var nameSpan = document.createElement('span');
        nameSpan.className = 'mnl-cat-name';
        nameSpan.textContent = cat;
        var countSpan = document.createElement('span');
        countSpan.className = 'mnl-cat-count';
        countSpan.textContent = items.length;
        hd.appendChild(nameSpan);
        hd.appendChild(countSpan);
        card.appendChild(hd);
        var body = document.createElement('div');
        body.className = 'mnl-cat-body';
        items.forEach(function(n) {
            var item = document.createElement('div');
            item.className = 'mnl-item';
            item.onclick = (function(id){ return function(){ mnlOpenDetail(id); }; })(n.id);
            var titleSpan = document.createElement('span');
            titleSpan.className = 'mnl-item-title';
            titleSpan.textContent = n.title;
            var metaSpan = document.createElement('span');
            metaSpan.className = 'mnl-item-meta';
            metaSpan.textContent = n.date;
            item.appendChild(titleSpan);
            item.appendChild(metaSpan);
            body.appendChild(item);
        });
        card.appendChild(body);
        grid.appendChild(card);
    });
    if (!hasAny) {
        var empty = document.createElement('div');
        empty.className = 'mnl-empty';
        empty.textContent = query ? '검색 결과가 없습니다.' : '등록된 매뉴얼이 없습니다.';
        grid.appendChild(empty);
    }
}

function mnlOpenDetail(id) {
    mnlEnsureData();
    var n = mnlData.find(function(x){ return x.id === id; });
    if (!n) return;
    n.views = (n.views || 0) + 1;
    mnlSaveData();
    document.getElementById('mnl-d-cat').textContent  = n.cat;
    document.getElementById('mnl-d-title').textContent = n.title;
    document.getElementById('mnl-d-author').textContent = n.author;
    document.getElementById('mnl-d-date').textContent  = n.date;
    document.getElementById('mnl-d-view').textContent  = n.views;
    var orgsEl = document.getElementById('mnl-d-orgs');
    orgsEl.innerHTML = '';
    if (n.orgs && n.orgs.length) {
        n.orgs.forEach(function(org) {
            var tag = document.createElement('span');
            tag.className = 'mnl-org-tag';
            tag.textContent = org;
            orgsEl.appendChild(tag);
        });
    }
    var bodyEl = document.getElementById('mnl-d-body');
    if (n.blocks && n.blocks.length) { bodyEl.innerHTML = boardBlocksToHtml(n.blocks); }
    else { bodyEl.innerHTML = '<p style="color:#bbb;font-size:13px;">내용이 없습니다.</p>'; }
    var actEl = document.getElementById('mnl-d-actions');
    actEl.innerHTML = '';
    if (mnlIsAdmin()) {
        var editBtn = document.createElement('button');
        editBtn.className = 'eval-view-btn';
        editBtn.textContent = '수정';
        editBtn.onclick = (function(iid){ return function(){ mnlCloseDetailDirect(); mnlOpenEdit(iid); }; })(id);
        var delBtn = document.createElement('button');
        delBtn.className = 'eval-view-btn';
        delBtn.style.cssText = 'color:#e05070;margin-left:6px;';
        delBtn.textContent = '삭제';
        delBtn.onclick = (function(iid){ return function(){ mnlDeletePost(iid); }; })(id);
        actEl.appendChild(editBtn);
        actEl.appendChild(delBtn);
    }
    document.getElementById('mnl-detail-overlay').style.display = 'flex';
    nActiveEditorCtx = null;
}

function mnlCloseDetail(evt) {
    if (evt && evt.target !== document.getElementById('mnl-detail-overlay')) return;
    mnlCloseDetailDirect();
}
function mnlCloseDetailDirect() {
    var el = document.getElementById('mnl-detail-overlay');
    if (el) el.style.display = 'none';
    mnlRenderGrid();
}

function mnlOpenWrite() {
    if (!mnlIsAdmin()) { showToast('관리자만 작성할 수 있습니다.', 'error'); return; }
    mnlWriteMode = 'new'; mnlWriteId = null;
    document.getElementById('mnl-write-title-hd').textContent = '매뉴얼 추가';
    var catSel = document.getElementById('mnl-w-cat');
    catSel.innerHTML = mnlCats.map(function(c){ return '<option value="'+c+'">'+c+'</option>'; }).join('');
    document.getElementById('mnl-w-title').value = '';
    var orgsEl = document.getElementById('mnl-w-orgs');
    orgsEl.innerHTML = '';
    mnlOrgs.forEach(function(org) {
        var label = document.createElement('label');
        label.className = 'mnl-org-check-label';
        var cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.value = org;
        cb.checked = org === '공통';
        label.appendChild(cb);
        label.appendChild(document.createTextNode(' ' + org));
        orgsEl.appendChild(label);
    });
    var zone = document.getElementById('mnl-write-editor-zone');
    zone.innerHTML = '';
    mnlEditorCtx = nbCreateEditor(zone, []);
    nActiveEditorCtx = mnlEditorCtx;
    document.getElementById('mnl-write-overlay').style.display = 'flex';
}

function mnlOpenEdit(id) {
    if (!mnlIsAdmin()) return;
    mnlEnsureData();
    var n = mnlData.find(function(x){ return x.id === id; });
    if (!n) return;
    mnlWriteMode = 'edit'; mnlWriteId = id;
    document.getElementById('mnl-write-title-hd').textContent = '매뉴얼 수정';
    var catSel = document.getElementById('mnl-w-cat');
    catSel.innerHTML = mnlCats.map(function(c){ return '<option value="'+c+'">'+c+'</option>'; }).join('');
    catSel.value = n.cat;
    document.getElementById('mnl-w-title').value = n.title;
    var orgsEl = document.getElementById('mnl-w-orgs');
    orgsEl.innerHTML = '';
    mnlOrgs.forEach(function(org) {
        var label = document.createElement('label');
        label.className = 'mnl-org-check-label';
        var cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.value = org;
        cb.checked = n.orgs && n.orgs.indexOf(org) >= 0;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(' ' + org));
        orgsEl.appendChild(label);
    });
    var zone = document.getElementById('mnl-write-editor-zone');
    zone.innerHTML = '';
    mnlEditorCtx = nbCreateEditor(zone, n.blocks || []);
    nActiveEditorCtx = mnlEditorCtx;
    document.getElementById('mnl-write-overlay').style.display = 'flex';
}

function mnlCloseWrite(evt) {
    if (evt && evt.type === 'click' && evt.target !== document.getElementById('mnl-write-overlay')) return;
    mnlCloseWriteDirect();
}
function mnlCloseWriteDirect() {
    var el = document.getElementById('mnl-write-overlay');
    if (el) el.style.display = 'none';
    nActiveEditorCtx = null;
}

function mnlSaveWrite() {
    var cat   = document.getElementById('mnl-w-cat').value;
    var title = document.getElementById('mnl-w-title').value.trim();
    if (!title) { showToast('제목을 입력하세요.', 'error'); return; }
    var orgsEl = document.getElementById('mnl-w-orgs');
    var selectedOrgs = [];
    orgsEl.querySelectorAll('input[type=checkbox]:checked').forEach(function(cb){ selectedOrgs.push(cb.value); });
    if (selectedOrgs.length === 0) { showToast('공개 조직을 하나 이상 선택하세요.', 'error'); return; }
    var blocks = mnlEditorCtx ? nbGetBlocks(mnlEditorCtx) : [];
    var u = mnlCurrentUser();
    var today = new Date().toISOString().split('T')[0];
    mnlEnsureData();
    if (mnlWriteMode === 'edit') {
        var n = mnlData.find(function(x){ return x.id === mnlWriteId; });
        if (n) { n.cat = cat; n.title = title; n.orgs = selectedOrgs; n.blocks = blocks; n.date = today; }
    } else {
        mnlData.push({ id:mnlGenId(), cat:cat, title:title, orgs:selectedOrgs, author:u.name||'관리자', authorId:u.id||'admin', date:today, views:0, blocks:blocks, body:'' });
    }
    mnlSaveData();
    showToast(mnlWriteMode === 'edit' ? '수정되었습니다.' : '등록되었습니다.', 'success');
    mnlCloseWriteDirect();
    mnlRenderGrid();
}

async function mnlDeletePost(id) {
    if (!await showConfirm('이 매뉴얼을 삭제하시겠습니까?')) return;
    mnlData = mnlData.filter(function(n){ return n.id !== id; });
    mnlSaveData();
    showToast('삭제되었습니다.', 'success');
    mnlCloseDetailDirect();
}

function mnlOpenOrgMgr() {
    if (!mnlIsAdmin()) return;
    var overlay = document.createElement('div');
    overlay.className = 'goal-modal-overlay';
    overlay.id = 'mnl-org-modal';
    overlay.innerHTML = '<div class="goal-modal" style="width:380px;">' +
        '<div class="goal-modal-title">조직 관리 <span style="font-size:11px;color:#bbb;font-weight:400;">(관리자)</span></div>' +
        '<div id="mnl-org-modal-list" style="margin-bottom:12px;max-height:240px;overflow-y:auto;"></div>' +
        '<div style="display:flex;gap:8px;">' +
        '<input class="eval-editor-input" id="mnl-org-new" placeholder="새 조직 이름" style="flex:1;" onkeydown="if(event.key===\'Enter\')mnlOrgAdd()">' +
        '<button class="eval-editor-save" onclick="mnlOrgAdd()">추가</button>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;margin-top:16px;">' +
        '<button class="eval-editor-cancel" onclick="mnlCloseOrgMgr()">닫기</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
    mnlOrgRender();
}
function mnlCloseOrgMgr() { var el = document.getElementById('mnl-org-modal'); if (el) el.remove(); }
function mnlOrgRender() {
    var el = document.getElementById('mnl-org-modal-list');
    if (!el) return;
    el.innerHTML = mnlOrgs.length === 0
        ? '<div style="color:#bbb;font-size:13px;padding:8px 0;">조직이 없습니다.</div>'
        : mnlOrgs.map(function(o) {
            return '<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f5f5f5;">' +
                '<span style="font-size:13px;color:#333;">' + o + '</span>' +
                (o === '공통' ? '<span style="font-size:11px;color:#ccc;">기본</span>' :
                '<button class="eval-view-btn" style="color:#e05070;" onclick="mnlOrgDel(\'' + o.replace(/\\/g,'\\\\').replace(/'/g,"\\'") + '\')">삭제</button>') +
                '</div>';
        }).join('');
}
function mnlOrgAdd() {
    var inp = document.getElementById('mnl-org-new');
    var v = (inp ? inp.value : '').trim();
    if (!v) return;
    if (mnlOrgs.indexOf(v) >= 0) { showToast('이미 존재하는 조직입니다.', 'error'); return; }
    mnlOrgs.push(v);
    mnlSaveOrgs();
    if (inp) inp.value = '';
    mnlOrgRender();
    showToast('"' + v + '" 조직이 추가되었습니다.', 'success');
}
async function mnlOrgDel(org) {
    if (org === '공통') { showToast('공통은 삭제할 수 없습니다.', 'error'); return; }
    if (!await showConfirm('"' + org + '" 조직을 삭제하시겠습니까?')) return;
    mnlOrgs = mnlOrgs.filter(function(o){ return o !== org; });
    mnlSaveOrgs();
    if (mnlActiveOrg === org) mnlActiveOrg = '공통';
    mnlOrgRender();
}

function mnlOpenCatMgr() {
    if (!mnlIsAdmin()) return;
    var overlay = document.createElement('div');
    overlay.className = 'goal-modal-overlay';
    overlay.id = 'mnl-cat-modal';
    overlay.innerHTML = '<div class="goal-modal" style="width:380px;">' +
        '<div class="goal-modal-title">분류 관리 <span style="font-size:11px;color:#bbb;font-weight:400;">(관리자)</span></div>' +
        '<div id="mnl-cat-modal-list" style="margin-bottom:12px;max-height:240px;overflow-y:auto;"></div>' +
        '<div style="display:flex;gap:8px;">' +
        '<input class="eval-editor-input" id="mnl-cat-new" placeholder="새 분류 이름" style="flex:1;" onkeydown="if(event.key===\'Enter\')mnlCatAdd()">' +
        '<button class="eval-editor-save" onclick="mnlCatAdd()">추가</button>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;margin-top:16px;">' +
        '<button class="eval-editor-cancel" onclick="mnlCloseCatMgr()">닫기</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
    mnlCatRender();
}
function mnlCloseCatMgr() { var el = document.getElementById('mnl-cat-modal'); if (el) el.remove(); }
function mnlCatRender() {
    var el = document.getElementById('mnl-cat-modal-list');
    if (!el) return;
    el.innerHTML = mnlCats.length === 0
        ? '<div style="color:#bbb;font-size:13px;padding:8px 0;">분류가 없습니다.</div>'
        : mnlCats.map(function(c) {
            return '<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f5f5f5;">' +
                '<span style="font-size:13px;color:#333;">' + c + '</span>' +
                '<button class="eval-view-btn" style="color:#e05070;" onclick="mnlCatDel(\'' + c.replace(/\\/g,'\\\\').replace(/'/g,"\\'") + '\')">삭제</button>' +
                '</div>';
        }).join('');
}
function mnlCatAdd() {
    var inp = document.getElementById('mnl-cat-new');
    var v = (inp ? inp.value : '').trim();
    if (!v) return;
    if (mnlCats.indexOf(v) >= 0) { showToast('이미 존재하는 분류입니다.', 'error'); return; }
    mnlCats.push(v);
    mnlSaveCats();
    if (inp) inp.value = '';
    mnlCatRender();
    showToast('"' + v + '" 분류가 추가되었습니다.', 'success');
}
async function mnlCatDel(cat) {
    if (!await showConfirm('"' + cat + '" 분류를 삭제하시겠습니까?')) return;
    mnlCats = mnlCats.filter(function(c){ return c !== cat; });
    mnlSaveCats();
    mnlCatRender();
}

/* ========================================================
   공부방 (board-study) — 영상 갤러리
   YouTube / 직접 링크 지원, 썸네일 자동 추출
   ======================================================== */
var studyData = [];
var studyCurrentId = null;
var studyEditId = null;
var studyPage = 1;
var studyActiveTab = '';
var studyCats = ['직무교육', '자격증', '외국어', '업무스킬', '자기계발', '기타'];
const STUDY_PAGE_SIZE = 16;

var STUDY_SEED = [
    { id:1, cat:'직무교육', title:'요양보호사 직무교육 - 치매 케어의 이해', url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ', desc:'치매 어르신 케어 시 주의사항과 실무 스킬을 다룹니다.', author:'관리자', authorId:'db.yu@caring.co.kr', date:'2026-01-15', views:42 },
    { id:2, cat:'자격증', title:'사회복지사 2급 자격증 시험 준비 가이드', url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ', desc:'사회복지사 자격증 취득을 위한 핵심 요약 강의입니다.', author:'김민준', authorId:'user2', date:'2026-02-03', views:88 },
    { id:3, cat:'업무스킬', title:'엑셀 실무 핵심 기능 총정리', url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ', desc:'업무에서 자주 쓰는 엑셀 함수와 피벗테이블 사용법입니다.', author:'이서연', authorId:'user3', date:'2026-02-20', views:65 },
    { id:4, cat:'자기계발', title:'효과적인 시간 관리 방법 - 생산성 향상', url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ', desc:'바쁜 업무 속에서 시간을 효율적으로 관리하는 방법을 소개합니다.', author:'박지호', authorId:'user4', date:'2026-03-10', views:31 },
];

function studyYtId(url) {
    if (!url) return null;
    var m;
    m = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (m) return m[1];
    m = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (m) return m[1];
    m = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
    if (m) return m[1];
    m = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (m) return m[1];
    return null;
}

function studyThumbUrl(url) {
    var ytId = studyYtId(url);
    if (ytId) return 'https://img.youtube.com/vi/' + ytId + '/mqdefault.jpg';
    return null;
}

function studyEmbedUrl(url) {
    var ytId = studyYtId(url);
    if (ytId) return 'https://www.youtube.com/embed/' + ytId + '?autoplay=1&rel=0';
    return null;
}

function studyEnsureData() {
    var saved = localStorage.getItem('studyData_v2');
    if (saved) { try { studyData = JSON.parse(saved); } catch(e) { studyData = STUDY_SEED.map(function(n){ return Object.assign({},n); }); } }
    else { studyData = STUDY_SEED.map(function(n){ return Object.assign({},n); }); studySaveData(); }
    var savedCats = localStorage.getItem('studyCats_v1');
    if (savedCats) { try { studyCats = JSON.parse(savedCats); } catch(e) {} }
}
function studySaveData() { localStorage.setItem('studyData_v2', JSON.stringify(studyData)); }
function studySaveCats() { localStorage.setItem('studyCats_v1', JSON.stringify(studyCats)); }
function studyGenId() { return studyData.length ? Math.max.apply(null, studyData.map(function(n){ return n.id; })) + 1 : 1; }
function studyCurrentUser() { return JSON.parse(localStorage.getItem('userData') || '{}'); }
function studyIsAdmin() { var u = studyCurrentUser(); return u.role === 'admin' || u.id === 'db.yu@caring.co.kr'; }

function initBoardStudy() {
    studyEnsureData();
    studyPage = 1;
    studyActiveTab = '';
    var isAdmin = studyIsAdmin();
    var catBtn = document.getElementById('study-cat-btn');
    var addBtn = document.getElementById('study-add-btn');
    if (catBtn) catBtn.style.display = isAdmin ? 'inline-flex' : 'none';
    if (addBtn) addBtn.style.display = isAdmin ? 'inline-flex' : 'none';
    studyRenderTabs();
    var sq = document.getElementById('study-search-q');
    if (sq) sq.value = '';
    studyRender();
}

function studyRenderTabs() {
    var container = document.getElementById('study-cat-tabs');
    if (!container) return;
    var tabs = ['전체'].concat(studyCats);
    container.innerHTML = tabs.map(function(c) {
        var val = c === '전체' ? '' : c;
        return '<button class="study-tab' + (studyActiveTab === val ? ' active' : '') + '" onclick="studySetTab(\'' + val.replace(/'/g, "\\'") + '\')">' + c + '</button>';
    }).join('');
    var wSel = document.getElementById('study-w-cat');
    if (wSel) wSel.innerHTML = studyCats.map(function(c){ return '<option value="'+c+'">'+c+'</option>'; }).join('');
}

function studySetTab(val) {
    studyActiveTab = val;
    studyPage = 1;
    studyRenderTabs();
    studyRender();
}

function studyRender() {
    studyEnsureData();
    var cat = studyActiveTab;
    var query = ((document.getElementById('study-search-q') || {}).value || '').trim().toLowerCase();
    var filtered = studyData.filter(function(n){
        if (cat && n.cat !== cat) return false;
        if (query && !n.title.toLowerCase().includes(query)) return false;
        return true;
    });
    var sorted = filtered.slice().sort(function(a,b){ return b.id - a.id; });
    var total = sorted.length;
    var pages = Math.max(1, Math.ceil(total / STUDY_PAGE_SIZE));
    if (studyPage > pages) studyPage = 1;
    var start = (studyPage - 1) * STUDY_PAGE_SIZE;
    var paged = sorted.slice(start, start + STUDY_PAGE_SIZE);

    var grid = document.getElementById('study-grid');
    if (!grid) return;
    grid.innerHTML = '';
    if (paged.length === 0) {
        var emptyEl = document.createElement('div');
        emptyEl.className = 'study-empty';
        emptyEl.innerHTML = '등록된 영상이 없습니다.<br>+ 영상 추가 버튼으로 첫 영상을 올려보세요!';
        grid.appendChild(emptyEl);
    } else {
        paged.forEach(function(n) {
            var card = document.createElement('div');
            card.className = 'study-card';
            card.onclick = (function(id){ return function(){ studyPlay(id); }; })(n.id);

            /* 썸네일 영역 */
            var thumbWrap = document.createElement('div');
            thumbWrap.className = 'study-thumb-wrap';
            var thumb = studyThumbUrl(n.url);
            if (thumb) {
                var img = document.createElement('img');
                img.src = thumb;
                img.alt = '썸네일';
                img.onerror = function(){ this.style.display = 'none'; };
                thumbWrap.appendChild(img);
            }
            var playIcon = document.createElement('div');
            playIcon.className = 'study-play-icon';
            playIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
            thumbWrap.appendChild(playIcon);

            /* 카드 본문 (썸네일 아래) */
            var body = document.createElement('div');
            body.className = 'study-card-body';
            body.innerHTML =
                '<div class="study-card-cat">' + n.cat + '</div>' +
                '<div class="study-card-title">' + n.title + '</div>' +
                '<div class="study-card-meta">' +
                  '<span>' + n.author + '</span>' +
                  '<span>' + n.date + '</span>' +
                  '<span class="study-card-views">조회 ' + n.views + '</span>' +
                '</div>';

            card.appendChild(thumbWrap);
            card.appendChild(body);
            grid.appendChild(card);
        });
    }

    var pg = document.getElementById('study-pagination');
    if (!pg) return;
    var html = '';
    if (pages > 1) {
        html += '<button class="bd-pg-btn" onclick="studyChangePage('+(studyPage-1)+')" '+(studyPage===1?'disabled':'')+'>&#8249;</button>';
        for (var i=1;i<=pages;i++) html += '<button class="bd-pg-btn'+(i===studyPage?' active':'')+'" onclick="studyChangePage('+i+')">'+i+'</button>';
        html += '<button class="bd-pg-btn" onclick="studyChangePage('+(studyPage+1)+')" '+(studyPage===pages?'disabled':'')+'>&#8250;</button>';
    }
    pg.innerHTML = html;
}

function studyChangePage(p) {
    var cat   = studyActiveTab;
    var query = ((document.getElementById('study-search-q') || {}).value || '').trim().toLowerCase();
    var total = studyData.filter(function(n){ return (!cat||n.cat===cat)&&(!query||n.title.toLowerCase().includes(query)); }).length;
    var pages = Math.max(1, Math.ceil(total / STUDY_PAGE_SIZE));
    studyPage = Math.max(1, Math.min(p, pages));
    studyRender();
}

function studyPlay(id) {
    studyEnsureData();
    var n = studyData.find(function(x){ return x.id===id; });
    if (!n) return;
    n.views++;
    studySaveData();
    studyCurrentId = id;

    document.getElementById('study-player-cat').textContent    = n.cat;
    document.getElementById('study-player-title').textContent  = n.title;
    document.getElementById('study-player-desc').textContent   = n.desc || '';
    document.getElementById('study-player-author').textContent = n.author;
    document.getElementById('study-player-date').textContent   = n.date;
    document.getElementById('study-player-views').textContent  = n.views;

    var screen = document.getElementById('study-player-screen');
    var embedUrl = studyEmbedUrl(n.url);
    if (embedUrl) {
        screen.innerHTML = '<iframe src="'+embedUrl+'" allowfullscreen allow="autoplay; encrypted-media"></iframe>';
    } else {
        screen.innerHTML = '<video src="'+n.url+'" controls autoplay style="background:#000;"></video>';
    }

    var actEl = document.getElementById('study-player-actions');
    if (actEl) {
        var u = studyCurrentUser();
        var canEdit = studyIsAdmin() || (u.id && u.id === n.authorId);
        actEl.innerHTML = canEdit
            ? '<button class="eval-view-btn" onclick="studyOpenEdit('+id+')">수정</button>' +
              '<button class="eval-view-btn" style="color:#e05070;margin-left:6px;" onclick="studyDeleteVideo('+id+')">삭제</button>'
            : '';
    }

    document.getElementById('study-player-overlay').style.display = 'flex';
    studyRender();
}

function studyClosePlayer(e) {
    if (e && e.target !== document.getElementById('study-player-overlay')) return;
    var screen = document.getElementById('study-player-screen');
    if (screen) screen.innerHTML = '';
    document.getElementById('study-player-overlay').style.display = 'none';
}

function studyOpenAdd() {
    studyEditId = null;
    document.getElementById('study-modal-title').textContent = '영상 추가';
    document.getElementById('study-w-url').value   = '';
    document.getElementById('study-w-title').value = '';
    document.getElementById('study-w-desc').value  = '';
    studyRebuildCatFilter();
    document.getElementById('study-thumb-preview').style.display = 'none';
    document.getElementById('study-add-overlay').style.display = 'flex';
}

function studyOpenEdit(id) {
    var screen = document.getElementById('study-player-screen');
    if (screen) screen.innerHTML = '';
    document.getElementById('study-player-overlay').style.display = 'none';
    studyEnsureData();
    var n = studyData.find(function(x){ return x.id===id; });
    if (!n) return;
    studyEditId = id;
    document.getElementById('study-modal-title').textContent = '영상 수정';
    document.getElementById('study-w-url').value   = n.url;
    document.getElementById('study-w-title').value = n.title;
    document.getElementById('study-w-desc').value  = n.desc || '';
    studyRebuildCatFilter();
    document.getElementById('study-w-cat').value = n.cat;
    studyPreviewThumb();
    document.getElementById('study-add-overlay').style.display = 'flex';
}

function studyCloseAdd(e) {
    if (e && e.target !== document.getElementById('study-add-overlay')) return;
    document.getElementById('study-add-overlay').style.display = 'none';
}

function studyPreviewThumb() {
    var url   = (document.getElementById('study-w-url') || {}).value || '';
    var thumb = studyThumbUrl(url);
    var prev  = document.getElementById('study-thumb-preview');
    var img   = document.getElementById('study-thumb-img');
    if (thumb && prev && img) {
        img.src = thumb;
        prev.style.display = 'block';
    } else if (prev) {
        prev.style.display = 'none';
    }
}

function studySaveVideo() {
    var url   = (document.getElementById('study-w-url').value || '').trim();
    var title = (document.getElementById('study-w-title').value || '').trim();
    var cat   = document.getElementById('study-w-cat').value;
    var desc  = (document.getElementById('study-w-desc').value || '').trim();
    if (!url)   { showToast('영상 URL을 입력하세요.', 'error'); return; }
    if (!title) { showToast('제목을 입력하세요.', 'error'); return; }
    var u = studyCurrentUser();
    var today = new Date().toISOString().split('T')[0];
    studyEnsureData();
    if (studyEditId) {
        var n = studyData.find(function(x){ return x.id===studyEditId; });
        if (n) { n.url=url; n.title=title; n.cat=cat; n.desc=desc; n.date=today; }
        showToast('수정되었습니다.', 'success');
    } else {
        studyData.push({ id:studyGenId(), url:url, title:title, cat:cat, desc:desc, author:u.name||'사용자', authorId:u.id||'', date:today, views:0 });
        showToast('등록되었습니다.', 'success');
    }
    studySaveData();
    document.getElementById('study-add-overlay').style.display = 'none';
    studyRender();
}

async function studyDeleteVideo(id) {
    var screen = document.getElementById('study-player-screen');
    if (screen) screen.innerHTML = '';
    document.getElementById('study-player-overlay').style.display = 'none';
    if (!await showConfirm('이 영상을 삭제하시겠습니까?')) return;
    studyEnsureData();
    studyData = studyData.filter(function(n){ return n.id !== id; });
    studySaveData();
    showToast('삭제되었습니다.', 'success');
    studyRender();
}

function studyOpenCatMgr() {
    var overlay = document.createElement('div');
    overlay.className = 'goal-modal-overlay';
    overlay.id = 'study-cat-overlay';
    overlay.innerHTML =
        '<div class="goal-modal" style="width:380px;">' +
        '<div class="goal-modal-title">분류 관리</div>' +
        '<div id="study-admin-cats" style="margin-bottom:12px;max-height:240px;overflow-y:auto;"></div>' +
        '<div style="display:flex;gap:8px;">' +
        '<input class="eval-editor-input" id="study-admin-new-cat" placeholder="새 분류 이름" style="flex:1;" onkeydown="if(event.key===\'Enter\')studyCatAdd()">' +
        '<button class="eval-editor-save" onclick="studyCatAdd()">추가</button>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;margin-top:16px;">' +
        '<button class="eval-editor-cancel" onclick="studyCloseCatMgr()">닫기</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
    studyCatRender();
}
function studyCloseCatMgr() {
    var el = document.getElementById('study-cat-overlay');
    if (el) el.remove();
    studyRenderTabs();
}
function studyCatRender() {
    var el = document.getElementById('study-admin-cats');
    if (!el) return;
    el.innerHTML = studyCats.length === 0
        ? '<div style="color:#bbb;font-size:13px;padding:8px 0;">분류가 없습니다.</div>'
        : studyCats.map(function(c) {
            return '<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f5f5f5;">' +
                '<span style="font-size:13px;color:#333;">' + c + '</span>' +
                '<button class="eval-view-btn" style="color:#e05070;" onclick="studyCatDel(\'' + c.replace(/'/g,"\\'") + '\')">삭제</button>' +
                '</div>';
        }).join('');
}
function studyCatAdd() {
    var inp = document.getElementById('study-admin-new-cat');
    var v = (inp ? inp.value : '').trim();
    if (!v) return;
    if (studyCats.indexOf(v) >= 0) { showToast('이미 존재하는 분류입니다.', 'error'); return; }
    studyCats.push(v);
    studySaveCats();
    if (inp) inp.value = '';
    studyCatRender();
    showToast('"' + v + '" 분류가 추가되었습니다.', 'success');
}
async function studyCatDel(cat) {
    if (!await showConfirm('"' + cat + '" 분류를 삭제하시겠습니까?')) return;
    studyCats = studyCats.filter(function(c){ return c !== cat; });
    studySaveCats();
    studyCatRender();
}

/* ========================================================
   4대보험 관리 (ins-lookup / ins-payment / ins-rates)
   ======================================================== */

// 보험요율 (2025년 기준)
var INS_RATES = {
    pension:    { emp: 0.045,   com: 0.045   },   // 국민연금
    health:     { emp: 0.03545, com: 0.03545 },   // 건강보험
    ltcRate:    0.1295,                            // 장기요양: 건강보험료 × 12.95%  (50/50)
    employ:     { emp: 0.009,   com: 0.0115  },   // 고용보험
    accident:   { com: 0.007   }                   // 산재보험 (사업주 전액)
};

function insCalc(base) {
    var pension   = Math.floor(base * INS_RATES.pension.emp  / 10) * 10;
    var pensionCo = Math.floor(base * INS_RATES.pension.com  / 10) * 10;
    var health    = Math.floor(base * INS_RATES.health.emp   / 10) * 10;
    var healthCo  = Math.floor(base * INS_RATES.health.com   / 10) * 10;
    var ltc       = Math.floor(health    * INS_RATES.ltcRate / 2 / 10) * 10;
    var ltcCo     = Math.floor(healthCo  * INS_RATES.ltcRate / 2 / 10) * 10;
    var employ    = Math.floor(base * INS_RATES.employ.emp   / 10) * 10;
    var employCo  = Math.floor(base * INS_RATES.employ.com   / 10) * 10;
    var accident  = Math.floor(base * INS_RATES.accident.com / 10) * 10;
    var empTotal  = pension + health + ltc + employ;
    var comTotal  = pensionCo + healthCo + ltcCo + employCo + accident;
    return { pension, pensionCo, health, healthCo, ltc, ltcCo, employ, employCo, accident, empTotal, comTotal };
}

function insComma(n) { return n.toLocaleString(); }

/* ── 보험료 조회 ── */
function insLookupInit() {
    var yearSel  = document.getElementById('ins-year');
    var monthSel = document.getElementById('ins-month');
    if (!yearSel) return;
    var curYear  = new Date().getFullYear();
    yearSel.innerHTML  = '';
    for (var y = curYear; y >= curYear - 3; y--) {
        var opt = document.createElement('option');
        opt.value = y; opt.textContent = y + '년';
        yearSel.appendChild(opt);
    }
    monthSel.innerHTML = '';
    for (var m = 1; m <= 12; m++) {
        var opt2 = document.createElement('option');
        opt2.value = m; opt2.textContent = m + '월';
        if (m === new Date().getMonth() + 1) opt2.selected = true;
        monthSel.appendChild(opt2);
    }
    insLookupRender();
}

function insLookupRender() {
    var query = ((document.getElementById('ins-search') || {}).value || '').trim().toLowerCase();
    var list  = query ? employees.filter(function(e){ return e.name.includes(query); }) : employees.slice();

    var tbody = document.getElementById('ins-lookup-tbody');
    var tfoot = document.getElementById('ins-lookup-tfoot');
    var sumCards = document.getElementById('ins-summary-cards');
    if (!tbody) return;

    var totals = { pension:0, pensionCo:0, health:0, healthCo:0, ltc:0, ltcCo:0, employ:0, employCo:0, accident:0, empTotal:0, comTotal:0 };

    tbody.innerHTML = '';
    list.forEach(function(emp) {
        var base = emp.salary ? emp.salary.base : 0;
        var r = insCalc(base);
        Object.keys(totals).forEach(function(k){ totals[k] += r[k]; });

        var tr = document.createElement('tr');
        tr.innerHTML =
            '<td class="ins-td-left">' + emp.name + '</td>' +
            '<td class="ins-td-center">' + (emp.department||'') + '</td>' +
            '<td class="ins-td-center">' + (emp.position||'') + '</td>' +
            '<td>' + insComma(base) + '</td>' +
            '<td>' + insComma(r.pension) + '</td>' +
            '<td>' + insComma(r.pensionCo) + '</td>' +
            '<td>' + insComma(r.health) + '</td>' +
            '<td>' + insComma(r.healthCo) + '</td>' +
            '<td>' + insComma(r.ltc) + '</td>' +
            '<td>' + insComma(r.ltcCo) + '</td>' +
            '<td>' + insComma(r.employ) + '</td>' +
            '<td>' + insComma(r.employCo) + '</td>' +
            '<td>' + insComma(r.accident) + '</td>' +
            '<td class="ins-td-total" style="color:#F36178;font-weight:700;">' + insComma(r.empTotal) + '</td>' +
            '<td class="ins-td-total" style="color:#27ae60;font-weight:700;">' + insComma(r.comTotal) + '</td>';
        tbody.appendChild(tr);
    });

    tfoot.innerHTML = '<tr>' +
        '<td class="ins-td-left" colspan="3" style="font-weight:700;">합계</td>' +
        '<td></td>' +
        '<td>' + insComma(totals.pension) + '</td>' +
        '<td>' + insComma(totals.pensionCo) + '</td>' +
        '<td>' + insComma(totals.health) + '</td>' +
        '<td>' + insComma(totals.healthCo) + '</td>' +
        '<td>' + insComma(totals.ltc) + '</td>' +
        '<td>' + insComma(totals.ltcCo) + '</td>' +
        '<td>' + insComma(totals.employ) + '</td>' +
        '<td>' + insComma(totals.employCo) + '</td>' +
        '<td>' + insComma(totals.accident) + '</td>' +
        '<td style="color:#F36178;font-weight:700;">' + insComma(totals.empTotal) + '</td>' +
        '<td style="color:#27ae60;font-weight:700;">' + insComma(totals.comTotal) + '</td>' +
        '</tr>';

    if (sumCards) {
        var grandTotal = totals.empTotal + totals.comTotal;
        sumCards.innerHTML =
            '<div class="ins-summary-card"><div class="ins-summary-card-label">국민연금 합계</div><div class="ins-summary-card-val">' + insComma(totals.pension + totals.pensionCo) + '</div><div class="ins-summary-card-sub">본인 ' + insComma(totals.pension) + ' / 회사 ' + insComma(totals.pensionCo) + '</div></div>' +
            '<div class="ins-summary-card"><div class="ins-summary-card-label">건강+장기요양 합계</div><div class="ins-summary-card-val">' + insComma(totals.health+totals.healthCo+totals.ltc+totals.ltcCo) + '</div><div class="ins-summary-card-sub">본인 ' + insComma(totals.health+totals.ltc) + ' / 회사 ' + insComma(totals.healthCo+totals.ltcCo) + '</div></div>' +
            '<div class="ins-summary-card"><div class="ins-summary-card-label">고용보험 합계</div><div class="ins-summary-card-val">' + insComma(totals.employ + totals.employCo) + '</div><div class="ins-summary-card-sub">본인 ' + insComma(totals.employ) + ' / 회사 ' + insComma(totals.employCo) + '</div></div>' +
            '<div class="ins-summary-card"><div class="ins-summary-card-label">산재보험 (회사)</div><div class="ins-summary-card-val">' + insComma(totals.accident) + '</div><div class="ins-summary-card-sub">전액 사업주 부담</div></div>' +
            '<div class="ins-summary-card highlight"><div class="ins-summary-card-label">월 납부 총합계</div><div class="ins-summary-card-val">' + insComma(grandTotal) + '</div><div class="ins-summary-card-sub">본인 ' + insComma(totals.empTotal) + ' + 회사 ' + insComma(totals.comTotal) + '</div></div>';
    }
}

/* ── 납부현황 ── */
function insPaymentInit() {
    var sel = document.getElementById('ins-pay-year');
    if (!sel) return;
    var cur = new Date().getFullYear();
    sel.innerHTML = '';
    for (var y = cur; y >= cur - 3; y--) {
        var opt = document.createElement('option');
        opt.value = y; opt.textContent = y + '년';
        sel.appendChild(opt);
    }
    insPaymentRender();
}

function insPaymentRender() {
    var tbody  = document.getElementById('ins-pay-tbody');
    var tfoot  = document.getElementById('ins-pay-tfoot');
    var sumDiv = document.getElementById('ins-pay-summary');
    if (!tbody) return;

    var monthTotals = [];
    var yearTotals  = { pension:0, health:0, ltc:0, employ:0, accident:0, emp:0, com:0, grand:0 };

    for (var m = 1; m <= 12; m++) {
        var mt = { month:m, pension:0, health:0, ltc:0, employ:0, accident:0, emp:0, com:0, grand:0 };
        employees.forEach(function(emp) {
            var base = emp.salary ? emp.salary.base : 0;
            var r = insCalc(base);
            mt.pension   += r.pension + r.pensionCo;
            mt.health    += r.health  + r.healthCo;
            mt.ltc       += r.ltc     + r.ltcCo;
            mt.employ    += r.employ  + r.employCo;
            mt.accident  += r.accident;
            mt.emp       += r.empTotal;
            mt.com       += r.comTotal;
            mt.grand     += r.empTotal + r.comTotal;
        });
        Object.keys(yearTotals).forEach(function(k){ yearTotals[k] += mt[k]; });
        monthTotals.push(mt);
    }

    tbody.innerHTML = '';
    var curMonth = new Date().getMonth() + 1;
    monthTotals.forEach(function(mt) {
        var isCur = mt.month === curMonth;
        var tr = document.createElement('tr');
        if (isCur) tr.style.background = '#fff8f9';
        tr.innerHTML =
            '<td class="ins-td-center" style="font-weight:' + (isCur?'700':'400') + ';color:' + (isCur?'#F36178':'#333') + ';">' + mt.month + '월' + (isCur?' ★':'') + '</td>' +
            '<td>' + insComma(mt.pension) + '</td>' +
            '<td>' + insComma(mt.health) + '</td>' +
            '<td>' + insComma(mt.ltc) + '</td>' +
            '<td>' + insComma(mt.employ) + '</td>' +
            '<td>' + insComma(mt.accident) + '</td>' +
            '<td style="color:#F36178;font-weight:600;">' + insComma(mt.emp) + '</td>' +
            '<td style="color:#27ae60;font-weight:600;">' + insComma(mt.com) + '</td>' +
            '<td style="font-weight:700;">' + insComma(mt.grand) + '</td>';
        tbody.appendChild(tr);
    });

    tfoot.innerHTML = '<tr>' +
        '<td class="ins-td-center" style="font-weight:700;">연간 합계</td>' +
        '<td style="font-weight:700;">' + insComma(yearTotals.pension) + '</td>' +
        '<td style="font-weight:700;">' + insComma(yearTotals.health) + '</td>' +
        '<td style="font-weight:700;">' + insComma(yearTotals.ltc) + '</td>' +
        '<td style="font-weight:700;">' + insComma(yearTotals.employ) + '</td>' +
        '<td style="font-weight:700;">' + insComma(yearTotals.accident) + '</td>' +
        '<td style="color:#F36178;font-weight:700;">' + insComma(yearTotals.emp) + '</td>' +
        '<td style="color:#27ae60;font-weight:700;">' + insComma(yearTotals.com) + '</td>' +
        '<td style="font-weight:700;font-size:13px;">' + insComma(yearTotals.grand) + '</td>' +
        '</tr>';

    if (sumDiv) {
        var curMt = monthTotals[curMonth - 1] || monthTotals[0];
        sumDiv.innerHTML =
            '<div class="ins-summary-card"><div class="ins-summary-card-label">이번달 국민연금</div><div class="ins-summary-card-val">' + insComma(curMt.pension) + '</div></div>' +
            '<div class="ins-summary-card"><div class="ins-summary-card-label">이번달 건강보험</div><div class="ins-summary-card-val">' + insComma(curMt.health + curMt.ltc) + '</div></div>' +
            '<div class="ins-summary-card"><div class="ins-summary-card-label">이번달 고용+산재</div><div class="ins-summary-card-val">' + insComma(curMt.employ + curMt.accident) + '</div></div>' +
            '<div class="ins-summary-card highlight"><div class="ins-summary-card-label">이번달 납부 총액</div><div class="ins-summary-card-val">' + insComma(curMt.grand) + '</div><div class="ins-summary-card-sub">연간 ' + insComma(yearTotals.grand) + '</div></div>';
    }
}

/* ── 보험요율안내 ── */
function insRatesInit() { /* static HTML, nothing to initialize */ }




/* ========================================================
   임금정보 (sal-wage)
   ======================================================== */
var wageData = {};  // { empId: { type, base, annual, hourly, meal, transport, position, other, date, note } }

var WAGE_TYPE_LABEL = { '월급제': 'monthly', '시급제': 'hourly', '연봉제': 'annual' };

function wageEnsureData() {
    var saved = localStorage.getItem('wageData_v1');
    if (saved) { try { wageData = JSON.parse(saved); } catch(e) { wageData = {}; } }
    // 기존 employees 데이터 기반으로 초기값 설정
    employees.forEach(function(emp) {
        if (!wageData[emp.id]) {
            var base = emp.salary ? emp.salary.base : 0;
            wageData[emp.id] = {
                type: '월급제',
                base: base,
                annual: base * 12,
                hourly: 0,
                meal: emp.salary ? emp.salary.allowance : 0,
                transport: 50000,
                position: 0,
                other: emp.salary ? emp.salary.bonus : 0,
                date: emp.hire_date || '',
                note: ''
            };
        }
    });
}

function wageSaveData() {
    localStorage.setItem('wageData_v1', JSON.stringify(wageData));
}

function wageInit() {
    wageEnsureData();
    // 부서 필터 옵션 구성
    var sel = document.getElementById('wage-dept-filter');
    if (sel) {
        var depts = [...new Set(employees.map(function(e){ return e.department; }))].sort();
        sel.innerHTML = '<option value="">전체 부서</option>';
        depts.forEach(function(d) {
            var opt = document.createElement('option');
            opt.value = d; opt.textContent = d;
            sel.appendChild(opt);
        });
    }
    wageRender();
}

function wageRender() {
    wageEnsureData();
    var query = ((document.getElementById('wage-search') || {}).value || '').trim().toLowerCase();
    var dept  = ((document.getElementById('wage-dept-filter') || {}).value || '');
    var list  = employees.filter(function(e) {
        if (dept && e.department !== dept) return false;
        if (query && !e.name.toLowerCase().includes(query)) return false;
        return true;
    });

    var tbody = document.getElementById('wage-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    list.forEach(function(emp) {
        var w = wageData[emp.id] || {};
        var typeClass = WAGE_TYPE_LABEL[w.type] || 'monthly';
        var annual = w.type === '연봉제' ? (w.annual || 0) : (w.base || 0) * 12;
        var tr = document.createElement('tr');
        tr.innerHTML =
            '<td class="td-center">' + emp.id + '</td>' +
            '<td class="td-left" style="font-weight:600;">' + emp.name + '</td>' +
            '<td class="td-center">' + (emp.department || '') + '</td>' +
            '<td class="td-center">' + (emp.position || '') + '</td>' +
            '<td class="td-center"><span class="wage-type-badge ' + typeClass + '">' + (w.type || '월급제') + '</span></td>' +
            '<td>' + (w.base ? w.base.toLocaleString() : '-') + '</td>' +
            '<td style="font-weight:600;color:#333;">' + annual.toLocaleString() + '</td>' +
            '<td>' + (w.type === '시급제' && w.hourly ? w.hourly.toLocaleString() : '-') + '</td>' +
            '<td>' + ((w.meal || 0).toLocaleString()) + '</td>' +
            '<td>' + ((w.transport || 0).toLocaleString()) + '</td>' +
            '<td>' + ((w.position || 0).toLocaleString()) + '</td>' +
            '<td>' + ((w.other || 0).toLocaleString()) + '</td>' +
            '<td class="td-center">' + (w.date || '-') + '</td>' +
            '<td class="td-center"><button class="wage-edit-btn" onclick="wageModalOpen(\'' + emp.id + '\')">수정</button></td>';
        tbody.appendChild(tr);
    });
}

function wageModalOpen(empId) {
    wageEnsureData();
    var emp = employees.find(function(e){ return e.id === empId; });
    if (!emp) return;
    var w = wageData[empId] || {};

    document.getElementById('wage-edit-id').value = empId;
    document.getElementById('wage-modal-name').textContent = emp.name + ' (' + (emp.department||'') + ' · ' + (emp.position||'') + ')';

    // 급여유형 라디오
    document.querySelectorAll('input[name="wage-type"]').forEach(function(r) {
        r.checked = r.value === (w.type || '월급제');
    });
    wageTypeToggle(w.type || '월급제');

    document.getElementById('wage-base').value      = w.base || '';
    document.getElementById('wage-annual').value    = w.type === '연봉제' ? (w.annual || '') : ((w.base || 0) * 12 || '');
    document.getElementById('wage-hourly').value    = w.hourly || '';
    document.getElementById('wage-meal').value      = w.meal || '';
    document.getElementById('wage-transport').value = w.transport || '';
    document.getElementById('wage-position').value  = w.position || '';
    document.getElementById('wage-other').value     = w.other || '';
    document.getElementById('wage-date').value      = w.date || '';
    document.getElementById('wage-note').value      = w.note || '';

    // 라디오 이벤트 바인딩
    document.querySelectorAll('input[name="wage-type"]').forEach(function(r) {
        r.onchange = function() { wageTypeToggle(this.value); wageAutoCalc(); };
    });

    wageAutoCalc();
    document.getElementById('wage-modal-overlay').style.display = 'flex';
}

function wageTypeToggle(type) {
    var hourlyRow  = document.getElementById('wage-hourly-row');
    var annualRow  = document.getElementById('wage-annual-row');
    var baseInput  = document.getElementById('wage-base');
    if (type === '시급제') {
        if (hourlyRow) hourlyRow.style.display = 'flex';
        if (annualRow) annualRow.style.display = 'none';
        if (baseInput) baseInput.placeholder = '월 예상 기본급 (선택)';
    } else if (type === '연봉제') {
        if (hourlyRow) hourlyRow.style.display = 'none';
        if (annualRow) { annualRow.style.display = 'flex'; document.getElementById('wage-annual').readOnly = false; document.getElementById('wage-annual').classList.remove('wage-readonly'); }
        if (baseInput) baseInput.placeholder = '월 환산 기본급 (선택)';
    } else {
        if (hourlyRow) hourlyRow.style.display = 'none';
        if (annualRow) { annualRow.style.display = 'flex'; document.getElementById('wage-annual').readOnly = true; document.getElementById('wage-annual').classList.add('wage-readonly'); }
        if (baseInput) baseInput.placeholder = '0';
    }
}

function wageAutoCalc() {
    var type   = (document.querySelector('input[name="wage-type"]:checked') || {}).value || '월급제';
    var base   = parseInt(document.getElementById('wage-base').value) || 0;
    var meal   = parseInt(document.getElementById('wage-meal').value) || 0;
    var trans  = parseInt(document.getElementById('wage-transport').value) || 0;
    var pos    = parseInt(document.getElementById('wage-position').value) || 0;
    var other  = parseInt(document.getElementById('wage-other').value) || 0;
    var annual = parseInt(document.getElementById('wage-annual').value) || 0;

    if (type === '월급제') {
        document.getElementById('wage-annual').value = base * 12 || '';
        annual = base * 12;
    } else if (type === '연봉제') {
        // 연봉 직접 입력 → 기본급 자동 역산
        var annualVal = parseInt(document.getElementById('wage-annual').value) || 0;
        if (annualVal > 0 && base === 0) {
            document.getElementById('wage-base').value = Math.round(annualVal / 12);
            base = Math.round(annualVal / 12);
        }
        annual = annualVal;
    }

    var monthlyTotal = base + meal + trans + pos + other;
    var preview = document.getElementById('wage-total-preview');
    if (preview) {
        preview.innerHTML =
            '<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;">' +
            '<span>기본급 <b>' + base.toLocaleString() + '</b></span>' +
            '<span>+ 식대 <b>' + meal.toLocaleString() + '</b></span>' +
            '<span>+ 교통비 <b>' + trans.toLocaleString() + '</b></span>' +
            '<span>+ 직책수당 <b>' + pos.toLocaleString() + '</b></span>' +
            '<span>+ 기타 <b>' + other.toLocaleString() + '</b></span>' +
            '</div>' +
            '<div style="margin-top:10px;padding-top:10px;border-top:1px solid #fde0e6;">' +
            '월 지급 총액 <strong>' + monthlyTotal.toLocaleString() + '원</strong>' +
            (type !== '시급제' ? '&nbsp;&nbsp;/&nbsp;&nbsp; 연봉 환산 <strong>' + (annual || monthlyTotal * 12).toLocaleString() + '원</strong>' : '') +
            '</div>';
    }
}

function wageSave() {
    var empId = document.getElementById('wage-edit-id').value;
    if (!empId) return;
    var type  = (document.querySelector('input[name="wage-type"]:checked') || {}).value || '월급제';
    var base  = parseInt(document.getElementById('wage-base').value)      || 0;
    var annual= parseInt(document.getElementById('wage-annual').value)    || base * 12;
    var hourly= parseInt(document.getElementById('wage-hourly').value)    || 0;
    var meal  = parseInt(document.getElementById('wage-meal').value)      || 0;
    var trans = parseInt(document.getElementById('wage-transport').value) || 0;
    var pos   = parseInt(document.getElementById('wage-position').value)  || 0;
    var other = parseInt(document.getElementById('wage-other').value)     || 0;
    var date  = document.getElementById('wage-date').value || '';
    var note  = document.getElementById('wage-note').value || '';

    wageData[empId] = { type, base, annual, hourly, meal, transport: trans, position: pos, other, date, note };
    wageSaveData();

    // employees 배열의 salary도 동기화
    var emp = employees.find(function(e){ return e.id === empId; });
    if (emp && emp.salary) {
        emp.salary.base      = base;
        emp.salary.allowance = meal + trans;
        emp.salary.bonus     = other;
    }

    showToast('임금정보가 저장되었습니다.', 'success');
    wageModalClose();
    wageRender();
}

function wageModalClose(evt) {
    if (evt && evt.target !== document.getElementById('wage-modal-overlay')) return;
    document.getElementById('wage-modal-overlay').style.display = 'none';
}


/* ========================================================
   공용노트 (Shared Note)
   ======================================================== */
var snotePages = [];
var snoteCats = ['일반', '업무', '회의록', '아이디어'];
var snoteActivePage = null;
var snoteEditorCtx = null;
var snoteCollapsed = {};

var SNOTE_SEED = [
    { id:1, title:'공용노트 시작하기', cat:'일반', parentId:null, blocks:[], author:'관리자', authorId:'admin', createdAt:'2026-01-01', updatedAt:'2026-01-01', updatedBy:'관리자' }
];

function snoteEnsureData() {
    var saved = localStorage.getItem('snotePages_v1');
    if (saved) { try { snotePages = JSON.parse(saved); } catch(e) { snotePages = SNOTE_SEED.map(function(p){ return Object.assign({},p); }); } }
    else { snotePages = SNOTE_SEED.map(function(p){ return Object.assign({},p); }); snoteSavePages(); }
    var savedCats = localStorage.getItem('snoteCats_v1');
    if (savedCats) { try { snoteCats = JSON.parse(savedCats); } catch(e) {} }
}
function snoteSavePages() { localStorage.setItem('snotePages_v1', JSON.stringify(snotePages)); }
function snoteGenId() { return snotePages.length ? Math.max.apply(null, snotePages.map(function(p){ return p.id; })) + 1 : 1; }
function snoteCurrentUser() { return JSON.parse(localStorage.getItem('userData') || '{}'); }
function snoteIsAdmin() { var u = snoteCurrentUser(); return u.role === 'admin' || u.id === 'db.yu@caring.co.kr'; }

/* ── 권한: 상속 포함 실효 권한 반환 ── */
function snoteEffectivePerm(page) {
    if (!page) return { visibility: 'all', allowedUsers: [] };
    if (page.isSubPage && page.inheritPermission !== false && page.parentId) {
        var parent = snotePages.find(function(p){ return p.id === page.parentId; });
        if (parent) return snoteEffectivePerm(parent);
    }
    return { visibility: page.visibility || 'all', allowedUsers: page.allowedUsers || [] };
}

/* ── 권한: 현재 사용자가 페이지를 볼 수 있는지 확인 ── */
function snoteCanView(page) {
    if (snoteIsAdmin()) return true;
    var u = snoteCurrentUser();
    if (!u.id) return true;
    if (page.authorId && page.authorId === u.id) return true;
    var perm = snoteEffectivePerm(page);
    if (perm.visibility !== 'custom') return true;
    return perm.allowedUsers.indexOf(u.id) >= 0;
}

/* ── 권한: 편집 폼의 권한 UI HTML 생성 ── */
function snotePermUiHtml(page) {
    var isSubPage = page && page.isSubPage;
    var currentVis = page ? (page.visibility || 'all') : 'all';
    var allowedUsers = page ? (page.allowedUsers || []) : [];
    var inheritPerm = !isSubPage || !page || page.inheritPermission !== false;

    var empListHtml = employees.map(function(e) {
        var checked = allowedUsers.indexOf(e.email) >= 0 ? ' checked' : '';
        return '<label class="snote-perm-emp-item">' +
            '<input type="checkbox" class="snote-perm-emp-chk" value="' + e.email + '"' + checked + '>' +
            '<span class="snote-perm-emp-name">' + e.name + '</span>' +
            '<span class="snote-perm-emp-dept">' + e.department + ' · ' + e.position + '</span>' +
            '</label>';
    }).join('');

    var visBlock =
        '<div class="snote-perm-radio-group">' +
        '<label class="snote-perm-radio-label"><input type="radio" name="snote-vis" value="all"' + (currentVis !== 'custom' ? ' checked' : '') + ' onchange="snotePermVisChange()"> 전체 공개</label>' +
        '<label class="snote-perm-radio-label"><input type="radio" name="snote-vis" value="custom"' + (currentVis === 'custom' ? ' checked' : '') + ' onchange="snotePermVisChange()"> 사람 지정</label>' +
        '</div>' +
        '<div id="snote-perm-users-wrap"' + (currentVis !== 'custom' ? ' style="display:none"' : '') + '>' +
        '<div class="snote-perm-search-wrap">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-linecap="round" style="flex-shrink:0;"><circle cx="11" cy="11" r="7" fill="#DBEAFE" stroke="#3D8EF0" stroke-width="2.5"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#3D8EF0" stroke-width="2.5"/></svg>' +
        '<input type="text" id="snote-perm-search" class="snote-perm-search-input" placeholder="이름 또는 팀 검색..." oninput="snotePermEmpSearch()" autocomplete="off">' +
        '</div>' +
        '<div id="snote-perm-users" class="snote-perm-users">' +
        empListHtml +
        '</div>' +
        '<p class="snote-perm-custom-hint" id="snote-perm-hint">체크된 사람만 이 페이지를 볼 수 있습니다. 하위 페이지는 자동으로 권한이 상속됩니다.</p>' +
        '</div>';

    var html = '<div class="snote-perm-section">';
    html += '<div class="snote-perm-title">접근 권한</div>';
    if (isSubPage) {
        html += '<label class="snote-perm-inherit-label">' +
            '<input type="checkbox" id="snote-perm-inherit"' + (inheritPerm ? ' checked' : '') + ' onchange="snotePermInheritChange()"> ' +
            '상위 페이지 권한 상속</label>';
        html += '<div id="snote-perm-custom-section"' + (inheritPerm ? ' style="display:none"' : '') + '>' + visBlock + '</div>';
    } else {
        html += visBlock;
    }
    html += '</div>';
    return html;
}

function snotePermVisChange() {
    var radios = document.querySelectorAll('input[name="snote-vis"]');
    var val = 'all';
    radios.forEach(function(r){ if (r.checked) val = r.value; });
    var wrap = document.getElementById('snote-perm-users-wrap');
    if (wrap) {
        wrap.style.display = val === 'custom' ? 'block' : 'none';
        if (val === 'custom') {
            var searchEl = document.getElementById('snote-perm-search');
            if (searchEl) { searchEl.value = ''; searchEl.focus(); }
            snotePermEmpSearch();
        }
    }
}

function snotePermEmpSearch() {
    var q = ((document.getElementById('snote-perm-search') || {}).value || '').toLowerCase();
    document.querySelectorAll('#snote-perm-users .snote-perm-emp-item').forEach(function(item) {
        var name = (item.querySelector('.snote-perm-emp-name') || {}).textContent || '';
        var dept = (item.querySelector('.snote-perm-emp-dept') || {}).textContent || '';
        var match = !q || name.toLowerCase().indexOf(q) >= 0 || dept.toLowerCase().indexOf(q) >= 0;
        item.style.display = match ? 'flex' : 'none';
    });
}

function snotePermInheritChange() {
    var chk = document.getElementById('snote-perm-inherit');
    var section = document.getElementById('snote-perm-custom-section');
    if (section) section.style.display = (chk && chk.checked) ? 'none' : 'block';
}

function snoteReadPermFromForm(isSubPage) {
    if (isSubPage) {
        var inheritChk = document.getElementById('snote-perm-inherit');
        if (!inheritChk || inheritChk.checked) return { inheritPermission: true, visibility: 'all', allowedUsers: [] };
    }
    var radios = document.querySelectorAll('input[name="snote-vis"]');
    var vis = 'all';
    radios.forEach(function(r){ if (r.checked) vis = r.value; });
    var allowedUsers = [];
    if (vis === 'custom') {
        document.querySelectorAll('.snote-perm-emp-chk:checked').forEach(function(chk){
            allowedUsers.push(chk.value);
        });
    }
    var result = { visibility: vis, allowedUsers: allowedUsers };
    if (isSubPage) result.inheritPermission = false;
    return result;
}

function snoteInit() {
    snoteEnsureData();
    snoteMarkSubPages();
    snoteRenderSidebar();
    snoteShowEmpty();
}

/* 모든 페이지 블록을 스캔해 subpage 블록에서 참조된 pageId를 isSubPage=true 로 마킹 */
function snoteMarkSubPages() {
    var referencedIds = {};
    snotePages.forEach(function(p) {
        (p.blocks || []).forEach(function(b) {
            if (b.type === 'subpage' && b.pageId) referencedIds[b.pageId] = true;
        });
    });
    var changed = false;
    snotePages.forEach(function(p) {
        if (referencedIds[p.id] && !p.isSubPage) {
            p.isSubPage = true;
            changed = true;
        }
    });
    if (changed) snoteSavePages();
}

/* ── 사이드바 렌더 (카테고리별 평탄 목록) ── */
function snoteRenderSidebar() {
    snoteFilterRender();
}

function snoteFilterRender() {
    var list = document.getElementById('snote-list');
    if (!list) return;
    var q = (document.getElementById('snote-search') || {}).value || '';
    q = q.toLowerCase();
    var catMap = {};
    snoteCats.forEach(function(c){ catMap[c] = []; });
    snotePages.forEach(function(p){
        if (p.isSubPage) return;
        if (!snoteCanView(p)) return;
        if (q && (p.title || '').toLowerCase().indexOf(q) < 0) return;
        var c = p.cat || '일반';
        if (!catMap[c]) catMap[c] = [];
        catMap[c].push(p);
    });
    var html = '';
    snoteCats.forEach(function(cat){
        var pages = catMap[cat] || [];
        var isOpen = snoteCollapsed[cat] !== true;
        html += '<div class="snote-cat">';
        html += '<div class="snote-cat-hd" onclick="snoteToggleCat(\'' + cat.replace(/'/g,"\\'") + '\')">';
        html += '<span class="snote-cat-arrow' + (isOpen ? ' open' : '') + '">&#9654;</span>';
        html += '<span>' + cat + '</span>';
        html += '<span class="snote-cat-count">' + pages.length + '</span>';
        html += '</div>';
        if (isOpen) {
            if (pages.length === 0) {
                html += '<div class="snote-no-pages">페이지 없음</div>';
            } else {
                pages.forEach(function(p){
                    var lockBadge = (p.visibility === 'custom') ? '<span class="snote-perm-lock">&#128274;</span>' : '';
                    html += '<div class="snote-page-item' + (snoteActivePage === p.id ? ' active' : '') + '" onclick="snoteOpenPage(' + p.id + ')">';
                    html += '<span class="snote-page-icon">&#128196;</span>';
                    html += '<span class="snote-page-name">' + (p.title || '제목 없음') + lockBadge + '</span>';
                    html += '</div>';
                });
            }
        }
        html += '</div>';
    });
    list.innerHTML = html;
}

function snoteToggleCat(cat) {
    snoteCollapsed[cat] = snoteCollapsed[cat] !== true;
    snoteRenderSidebar();
}

/* ── 빈 화면 ── */
function snoteShowEmpty() {
    var content = document.getElementById('snote-content');
    if (!content) return;
    snoteActivePage = null;
    snoteEditorCtx = null;
    nActiveEditorCtx = { type: 'note' };
    content.innerHTML = '<div class="snote-empty-state"><div class="snote-empty-icon">&#128203;</div><div>왼쪽에서 페이지를 선택하거나<br>새 페이지를 만들어 보세요.</div></div>';
    snoteRenderSidebar();
}

/* ── 페이지 보기 ── */
function snoteOpenPage(id) {
    snoteEnsureData();
    var page = snotePages.find(function(p){ return p.id === id; });
    if (!page) return;
    if (!snoteCanView(page)) {
        var content = document.getElementById('snote-content');
        if (content) content.innerHTML =
            '<div class="snote-empty-state"><div class="snote-empty-icon">&#128274;</div>' +
            '<div>이 페이지에 접근할 권한이 없습니다.</div></div>';
        return;
    }
    snoteActivePage = id;
    snoteEditorCtx = null;
    nActiveEditorCtx = { type: 'note' };
    snoteRenderSidebar();
    var content = document.getElementById('snote-content');
    if (!content) return;
    var u = snoteCurrentUser();
    var canDelete = snoteIsAdmin() || (u.id && u.id === page.authorId);
    var bodyHtml = boardBlocksToHtml(page.blocks || []);
    var effPerm = snoteEffectivePerm(page);
    var permLabel = '';
    if (page.isSubPage && page.inheritPermission !== false) {
        permLabel = '<span style="font-size:11px;color:#bbb;background:#f5f5f5;padding:2px 7px;border-radius:10px;">&#128279; 권한 상속</span>';
    } else if (effPerm.visibility === 'custom') {
        permLabel = '<span style="font-size:11px;color:#e07050;background:#fff4f0;padding:2px 7px;border-radius:10px;">&#128274; ' + effPerm.allowedUsers.length + '명 접근 허용</span>';
    }
    content.innerHTML =
        '<div class="snote-view">' +
        '<div class="snote-view-hd">' +
        '<div class="snote-view-title">' + (page.title||'제목 없음') + '</div>' +
        '<div class="snote-view-actions">' +
        (permLabel ? permLabel + ' ' : '') +
        '<button class="eval-view-btn" onclick="snoteStartEdit(' + page.id + ')">&#9998; 편집</button>' +
        (canDelete ? '<button class="eval-view-btn" style="color:#e05070;" onclick="snoteDelete(' + page.id + ')">삭제</button>' : '') +
        '</div>' +
        '</div>' +
        '<div class="snote-view-meta">' +
        '<span>&#128193; ' + (page.cat || '일반') + '</span>' +
        '<span>&#9998; ' + (page.author||'') + '</span>' +
        '<span>&#128336; ' + (page.updatedAt || page.createdAt||'') + (page.updatedBy && page.updatedBy !== page.author ? ' (' + page.updatedBy + ')' : '') + '</span>' +
        '</div>' +
        '<div class="snote-view-body">' + (bodyHtml || '<p style="color:#bbb;font-size:14px;">내용이 없습니다. 편집 버튼을 눌러 내용을 추가해 보세요.</p>') + '</div>' +
        '</div>';
}

/* ── 새 페이지 / 편집 ── */
function snoteNewPage() {
    snoteActivePage = null;
    snoteEditorCtx = null;
    snoteRenderEdit(null);
}

function snoteStartEdit(id) {
    snoteEnsureData();
    var page = snotePages.find(function(p){ return p.id === id; });
    snoteActivePage = id;
    snoteEditorCtx = null;
    snoteRenderEdit(page);
}

function snoteRenderEdit(page) {
    var content = document.getElementById('snote-content');
    if (!content) return;
    var title = page ? page.title : '';
    var cat = page ? (page.cat || snoteCats[0]) : snoteCats[0];
    var blocks = page ? (page.blocks || []) : [];
    var catOpts = snoteCats.map(function(c){
        return '<option value="' + c + '"' + (c === cat ? ' selected' : '') + '>' + c + '</option>';
    }).join('');
    content.innerHTML =
        '<div class="snote-edit-wrap">' +
        '<div class="snote-edit-hd">' +
        '<input class="snote-edit-title-input" id="snote-edit-title" placeholder="페이지 제목..." value="' + (title||'').replace(/"/g,'&quot;') + '">' +
        '<div class="snote-edit-meta-row">' +
        '<label class="snote-edit-cat-label">유형</label>' +
        '<select class="snote-edit-cat-select" id="snote-edit-cat">' + catOpts + '</select>' +
        '</div>' +
        snotePermUiHtml(page) +
        '</div>' +
        '<div class="snote-edit-body">' +
        '<div id="snote-editor-zone" class="nb-editor-zone"></div>' +
        '</div>' +
        '<div class="snote-edit-footer">' +
        '<button class="eval-editor-cancel" onclick="snoteCancelEdit()">취소</button>' +
        '<button class="eval-editor-save" onclick="snoteSaveEdit(' + (page ? page.id : 'null') + ')">저장</button>' +
        '</div>' +
        '</div>';
    setTimeout(function(){
        var zone = document.getElementById('snote-editor-zone');
        if (zone) snoteEditorCtx = nbCreateEditor(zone, blocks);
        nBlockEditorGlobalInit();
        var titleInput = document.getElementById('snote-edit-title');
        if (titleInput) titleInput.focus();
    }, 0);
}

function snoteCancelEdit() {
    snoteEditorCtx = null;
    nActiveEditorCtx = { type: 'note' };
    if (snoteActivePage) { snoteOpenPage(snoteActivePage); }
    else { snoteShowEmpty(); }
}

function snoteSaveEdit(id) {
    var titleEl = document.getElementById('snote-edit-title');
    var catEl   = document.getElementById('snote-edit-cat');
    var title = (titleEl ? titleEl.value : '').trim();
    if (!title) { showToast('제목을 입력해 주세요.', 'error'); return; }
    var cat    = catEl ? catEl.value : snoteCats[0];
    var blocks = snoteEditorCtx ? nbGetBlocks(snoteEditorCtx) : [];
    var u = snoteCurrentUser();
    var today = new Date().toISOString().slice(0,10);
    snoteEnsureData();
    if (id && id !== 'null') {
        var idx = snotePages.findIndex(function(p){ return p.id === id; });
        if (idx >= 0) {
            var isSubPage = !!snotePages[idx].isSubPage;
            var perm = snoteReadPermFromForm(isSubPage);
            snotePages[idx].title             = title;
            snotePages[idx].cat               = cat;
            snotePages[idx].blocks            = blocks;
            snotePages[idx].updatedAt         = today;
            snotePages[idx].updatedBy         = u.name || '사용자';
            snotePages[idx].visibility        = perm.visibility;
            snotePages[idx].allowedUsers      = perm.allowedUsers;
            if (isSubPage) snotePages[idx].inheritPermission = perm.inheritPermission;
        }
        snoteActivePage = id;
        var numericId = typeof id === 'number' ? id : parseInt(id, 10);
        snotePages.forEach(function(p) {
            (p.blocks || []).forEach(function(b) {
                if (b.type === 'subpage' && b.pageId === numericId) b.pageTitle = title;
            });
        });
    } else {
        var perm = snoteReadPermFromForm(false);
        var np = { id:snoteGenId(), title:title, cat:cat, blocks:blocks,
            visibility: perm.visibility, allowedUsers: perm.allowedUsers,
            inheritPermission: true,
            author:u.name||'사용자', authorId:u.id||'',
            createdAt:today, updatedAt:today, updatedBy:u.name||'사용자' };
        snotePages.push(np);
        snoteActivePage = np.id;
    }
    snoteEditorCtx = null;
    nActiveEditorCtx = { type: 'note' };
    snoteSavePages();
    snoteMarkSubPages();
    showToast('저장되었습니다.', 'success');
    snoteRenderSidebar();
    snoteOpenPage(snoteActivePage);
}

/* ── 에디터 안에서 /페이지 로 새 페이지 링크 삽입 ── */
function snoteInsertSubPage(afterBlockId) {
    var u = snoteCurrentUser();
    var today = new Date().toISOString().slice(0,10);
    snoteEnsureData();
    var np = {
        id: snoteGenId(), title: '새 페이지',
        cat: snoteCats[0], isSubPage: true, parentId: snoteActivePage || null,
        inheritPermission: true, visibility: 'all', allowedUsers: [],
        blocks: [],
        author: u.name||'사용자', authorId: u.id||'',
        createdAt: today, updatedAt: today, updatedBy: u.name||'사용자'
    };
    snotePages.push(np);
    snoteSavePages();
    snoteMarkSubPages();
    var newBlock = { id: nBlkGenId(), type: 'subpage', pageId: np.id, pageTitle: np.title, html: '' };
    nInsertBlockAfterOrAppend(afterBlockId, newBlock);
    snoteRenderSidebar();
    showToast('페이지가 생성되었습니다. 블록을 클릭하면 이동할 수 있습니다.', 'success');
}

/* ── 삭제 ── */
async function snoteDelete(id) {
    var page = snotePages.find(function(p){ return p.id === id; });
    if (!page) return;
    if (!await showConfirm('"' + (page.title||'이 페이지') + '"를 삭제하시겠습니까?')) return;
    snotePages = snotePages.filter(function(p){ return p.id !== id; });
    snoteSavePages();
    showToast('삭제되었습니다.', 'success');
    snoteShowEmpty();
}

/* ── 유형 관리 모달 ── */
function snoteOpenCatMgr() {
    var overlay = document.getElementById('snote-cat-mgr-overlay');
    if (!overlay) return;
    snoteCatMgrRender();
    overlay.style.display = 'flex';
}
function snoteCloseCatMgr(evt) {
    if (evt && evt.target !== document.getElementById('snote-cat-mgr-overlay')) return;
    var overlay = document.getElementById('snote-cat-mgr-overlay');
    if (overlay) overlay.style.display = 'none';
}
function snoteCloseCatMgrDirect() {
    var overlay = document.getElementById('snote-cat-mgr-overlay');
    if (overlay) overlay.style.display = 'none';
}
function snoteCatMgrRender() {
    var list = document.getElementById('snote-cat-mgr-list');
    if (!list) return;
    list.innerHTML = snoteCats.map(function(c, i){
        return '<div class="snote-cat-mgr-item">' +
            '<span class="snote-cat-mgr-name">' + c + '</span>' +
            (snoteCats.length > 1 ? '<button class="snote-cat-mgr-del" onclick="snoteDelCat(' + i + ')">×</button>' : '') +
            '</div>';
    }).join('');
}
function snoteAddCat() {
    var inp = document.getElementById('snote-cat-mgr-input');
    if (!inp) return;
    var val = inp.value.trim();
    if (!val) return;
    if (snoteCats.indexOf(val) >= 0) { showToast('이미 있는 유형입니다.', 'error'); return; }
    snoteCats.push(val);
    localStorage.setItem('snoteCats_v1', JSON.stringify(snoteCats));
    inp.value = '';
    snoteCatMgrRender();
    snoteRenderSidebar();
}
function snoteDelCat(idx) {
    var cat = snoteCats[idx];
    if (snotePages.some(function(p){ return p.cat === cat; })) {
        showToast('이 유형의 페이지가 있어 삭제할 수 없습니다.', 'error'); return;
    }
    snoteCats.splice(idx, 1);
    localStorage.setItem('snoteCats_v1', JSON.stringify(snoteCats));
    snoteCatMgrRender();
    snoteRenderSidebar();
}

// =====================================================================
// ===== 코드관리 (sys-code) =====
// =====================================================================

var SYSCODE_SEED = [
    /* ── 인사 ── */
    { id:'HR_POSITION', category:'인사', name:'직책', codes:[
        {seq:1,code:'P01',label:'사원',active:true},
        {seq:2,code:'P02',label:'대리',active:true},
        {seq:3,code:'P03',label:'과장',active:true},
        {seq:4,code:'P04',label:'차장',active:true},
        {seq:5,code:'P05',label:'부장',active:true},
        {seq:6,code:'P06',label:'팀장',active:true},
        {seq:7,code:'P07',label:'이사',active:true},
        {seq:8,code:'P08',label:'상무',active:true},
        {seq:9,code:'P09',label:'전무',active:true},
        {seq:10,code:'P10',label:'부사장',active:true},
        {seq:11,code:'P11',label:'대표이사',active:true}
    ]},
    { id:'HR_GRADE', category:'인사', name:'직급', codes:[
        {seq:1,code:'G01',label:'1급',active:true},
        {seq:2,code:'G02',label:'2급',active:true},
        {seq:3,code:'G03',label:'3급',active:true},
        {seq:4,code:'G04',label:'4급',active:true},
        {seq:5,code:'G05',label:'5급',active:true}
    ]},
    { id:'HR_EMPTYPE', category:'인사', name:'고용형태', codes:[
        {seq:1,code:'E01',label:'정규직',active:true},
        {seq:2,code:'E02',label:'계약직',active:true},
        {seq:3,code:'E03',label:'파트타임',active:true},
        {seq:4,code:'E04',label:'프리랜서',active:true},
        {seq:5,code:'E05',label:'파견직',active:true},
        {seq:6,code:'E06',label:'인턴',active:true}
    ]},
    { id:'HR_WORKTYPE', category:'인사', name:'근무형태', codes:[
        {seq:1,code:'W01',label:'상근직',active:true},
        {seq:2,code:'W02',label:'비상근직',active:true}
    ]},
    { id:'BANK_CODE', category:'금융', name:'은행코드', codes:[
        {seq:1, code:'001',label:'한국은행',  active:true},
        {seq:2, code:'002',label:'산업은행',  active:true},
        {seq:3, code:'003',label:'기업은행',  active:true},
        {seq:4, code:'004',label:'국민은행',  active:true},
        {seq:5, code:'005',label:'외환은행',  active:true},
        {seq:6, code:'007',label:'수협중앙회',active:true},
        {seq:7, code:'008',label:'수출입은행',active:true},
        {seq:8, code:'011',label:'농협중앙회',active:true},
        {seq:9, code:'012',label:'농·축협',  active:true},
        {seq:10,code:'020',label:'우리은행',  active:true},
        {seq:11,code:'023',label:'SC제일은행',active:true},
        {seq:12,code:'027',label:'한국씨티은행',active:true},
        {seq:13,code:'032',label:'부산은행',  active:true},
        {seq:14,code:'034',label:'광주은행',  active:true},
        {seq:15,code:'035',label:'제주은행',  active:true},
        {seq:16,code:'037',label:'전북은행',  active:true},
        {seq:17,code:'039',label:'경남은행',  active:true},
        {seq:18,code:'045',label:'새마을금고',active:true},
        {seq:19,code:'048',label:'신협중앙회',active:true},
        {seq:20,code:'071',label:'우체국',    active:true},
        {seq:21,code:'081',label:'하나은행',  active:true},
        {seq:22,code:'088',label:'신한은행',  active:true},
        {seq:23,code:'089',label:'케이뱅크',  active:true},
        {seq:24,code:'090',label:'카카오뱅크',active:true},
        {seq:25,code:'092',label:'토스뱅크',  active:true}
    ]},
    { id:'HR_CONTRACT', category:'인사', name:'계약형태', codes:[
        {seq:1,code:'C01',label:'연봉제',active:true},
        {seq:2,code:'C02',label:'월급제',active:true},
        {seq:3,code:'C03',label:'시급제',active:true},
        {seq:4,code:'C04',label:'일급제',active:true}
    ]},
    { id:'HR_SCHEDULE_TYPE', category:'인사', name:'근무유형', codes:[
        {seq:1,code:'SC01',label:'정상근무(9-6)',active:true},
        {seq:2,code:'SC02',label:'스케줄근무',  active:true},
        {seq:3,code:'SC03',label:'재택근무',    active:true},
        {seq:4,code:'SC04',label:'탄력근무',    active:true},
        {seq:5,code:'SC05',label:'교대근무',    active:true}
    ]},
    { id:'HR_SERVICE', category:'인사', name:'서비스구분', codes:[
        {seq:1,code:'SV01',label:'주간보호',active:true},
        {seq:2,code:'SV02',label:'방문요양',active:true},
        {seq:3,code:'SV03',label:'방문간호',active:true},
        {seq:4,code:'SV04',label:'차량목욕',active:true}
    ]},
    { id:'HR_JOB', category:'인사', name:'직무구분', codes:[
        {seq:1, code:'J01',label:'사무직',      active:true},
        {seq:2, code:'J02',label:'사회복지사',   active:true},
        {seq:3, code:'J03',label:'요양보호사',   active:true},
        {seq:4, code:'J04',label:'조리원',      active:true},
        {seq:5, code:'J05',label:'운전원',      active:true},
        {seq:6, code:'J06',label:'위생원',      active:true},
        {seq:7, code:'J07',label:'작업치료사',   active:true},
        {seq:8, code:'J08',label:'물리치료사',   active:true},
        {seq:9, code:'J09',label:'간호사',      active:true},
        {seq:10,code:'J10',label:'간호조무사',   active:true}
    ]},
    { id:'HR_LEAVE_TYPE', category:'인사', name:'휴직구분', codes:[
        {seq:1,code:'L01',label:'일반휴직',active:true},
        {seq:2,code:'L02',label:'육아휴직',active:true},
        {seq:3,code:'L03',label:'병가',    active:true},
        {seq:4,code:'L04',label:'기타',    active:true}
    ]},
    { id:'HR_RETIRE_REASON', category:'인사', name:'퇴직사유', codes:[
        {seq:1,code:'R01',label:'자진퇴사',active:true},
        {seq:2,code:'R02',label:'계약만료',active:true},
        {seq:3,code:'R03',label:'권고사직',active:true},
        {seq:4,code:'R04',label:'해고',    active:true},
        {seq:5,code:'R05',label:'사망',    active:true},
        {seq:6,code:'R06',label:'기타',    active:true}
    ]},
    { id:'HR_APPT_TYPE', category:'인사', name:'발령구분', codes:[
        {seq:1,code:'A01',label:'입사',active:true,desc:'신규 직원이 조직에 합류하는 발령입니다. 신규·경력·계약 입사를 포함합니다.'},
        {seq:2,code:'A02',label:'퇴직',active:true,desc:'재직 관계가 종료되는 발령입니다. 자진퇴사·계약만료·해고 등을 포함합니다.'},
        {seq:3,code:'A03',label:'휴직',active:true,desc:'질병·육아·기타 사유로 일정 기간 근무를 중단하는 발령입니다.'},
        {seq:4,code:'A04',label:'복직',active:true,desc:'휴직 종료 후 원래 직무로 복귀하는 발령입니다.'},
        {seq:5,code:'A05',label:'전적',active:true,desc:'소속 법인·사업장을 변경하는 발령입니다. 법인내·법인간 이동을 포함합니다.'},
        {seq:6,code:'A06',label:'보직',active:true,desc:'부서·직무·직위를 변경하는 발령입니다. 부서이동·직위변경을 포함합니다.'},
        {seq:7,code:'A07',label:'겸직',active:true,desc:'현재 직무를 유지하면서 다른 직무를 추가로 담당하는 발령입니다.'}
    ]},
    { id:'HR_MARITAL_STATUS', category:'인사', name:'결혼여부', codes:[
        {seq:1,code:'MS01',label:'미혼',  active:true},
        {seq:2,code:'MS02',label:'기혼',  active:true},
        {seq:3,code:'MS03',label:'이혼',  active:true},
        {seq:4,code:'MS04',label:'사별',  active:true},
        {seq:5,code:'MS05',label:'기타',  active:true}
    ]},
    { id:'HR_BLOOD_TYPE', category:'인사', name:'혈액형', codes:[
        {seq:1,code:'BT01',label:'A형',  active:true},
        {seq:2,code:'BT02',label:'B형',  active:true},
        {seq:3,code:'BT03',label:'AB형', active:true},
        {seq:4,code:'BT04',label:'O형',  active:true},
        {seq:5,code:'BT05',label:'모름', active:true}
    ]},
    { id:'HR_RELATION', category:'인사', name:'관계', codes:[
        {seq:1,code:'RL01',label:'배우자',active:true},
        {seq:2,code:'RL02',label:'부',    active:true},
        {seq:3,code:'RL03',label:'모',    active:true},
        {seq:4,code:'RL04',label:'자녀',  active:true},
        {seq:5,code:'RL05',label:'형제',  active:true},
        {seq:6,code:'RL06',label:'자매',  active:true},
        {seq:7,code:'RL07',label:'지인',  active:true},
        {seq:8,code:'RL08',label:'기타',  active:true}
    ]},
    { id:'HR_MILITARY_TYPE', category:'인사', name:'병역구분', codes:[
        {seq:1,code:'MT01',label:'현역',         active:true},
        {seq:2,code:'MT02',label:'보충역',        active:true},
        {seq:3,code:'MT03',label:'사회복무요원',   active:true},
        {seq:4,code:'MT04',label:'산업기능요원',   active:true},
        {seq:5,code:'MT05',label:'전문연구요원',   active:true},
        {seq:6,code:'MT06',label:'면제',          active:true},
        {seq:7,code:'MT07',label:'미필',          active:true},
        {seq:8,code:'MT08',label:'해당없음',       active:true}
    ]},
    { id:'HR_MILITARY_BRANCH', category:'인사', name:'군별', codes:[
        {seq:1,code:'MB01',label:'육군',    active:true},
        {seq:2,code:'MB02',label:'해군',    active:true},
        {seq:3,code:'MB03',label:'공군',    active:true},
        {seq:4,code:'MB04',label:'해병대',  active:true},
        {seq:5,code:'MB05',label:'의무경찰',active:true},
        {seq:6,code:'MB06',label:'기타',    active:true}
    ]},
    { id:'HR_DISABILITY_TYPE', category:'인사', name:'장애유형', codes:[
        {seq:1, code:'DT01',label:'지체',    active:true},
        {seq:2, code:'DT02',label:'시각',    active:true},
        {seq:3, code:'DT03',label:'청각',    active:true},
        {seq:4, code:'DT04',label:'언어',    active:true},
        {seq:5, code:'DT05',label:'지적',    active:true},
        {seq:6, code:'DT06',label:'자폐성',  active:true},
        {seq:7, code:'DT07',label:'정신',    active:true},
        {seq:8, code:'DT08',label:'신장',    active:true},
        {seq:9, code:'DT09',label:'심장',    active:true},
        {seq:10,code:'DT10',label:'호흡기',  active:true},
        {seq:11,code:'DT11',label:'간',      active:true},
        {seq:12,code:'DT12',label:'안면',    active:true},
        {seq:13,code:'DT13',label:'뇌전증',  active:true},
        {seq:14,code:'DT14',label:'기타',    active:true}
    ]},
    { id:'HR_DISABILITY_GRADE', category:'인사', name:'장애등급', codes:[
        {seq:1,code:'DG01',label:'심한장애',      active:true},
        {seq:2,code:'DG02',label:'심하지않은장애', active:true}
    ]},
    { id:'HR_FILE_CAT', category:'인사', name:'첨부서류분류', codes:[
        {seq:1, code:'FC01',label:'신분증',      active:true},
        {seq:2, code:'FC02',label:'주민등록등본', active:true},
        {seq:3, code:'FC03',label:'주민등록초본', active:true},
        {seq:4, code:'FC04',label:'통장사본',     active:true},
        {seq:5, code:'FC05',label:'졸업증명서',   active:true},
        {seq:6, code:'FC06',label:'자격증사본',   active:true},
        {seq:7, code:'FC07',label:'근로계약서',   active:true},
        {seq:8, code:'FC08',label:'기타',         active:true}
    ]},
    { id:'HR_GRAD_TYPE', category:'인사', name:'졸업구분', codes:[
        {seq:1,code:'GR01',label:'졸업',  active:true},
        {seq:2,code:'GR02',label:'수료',  active:true},
        {seq:3,code:'GR03',label:'중퇴',  active:true},
        {seq:4,code:'GR04',label:'편입',  active:true},
        {seq:5,code:'GR05',label:'재학중',active:true},
        {seq:6,code:'GR06',label:'수학',  active:true}
    ]},
    { id:'HR_STATUS', category:'인사', name:'재직상태', codes:[
        {seq:1,code:'S01',label:'재직',active:true},
        {seq:2,code:'S02',label:'휴직',active:true},
        {seq:3,code:'S03',label:'퇴직',active:true},
        {seq:4,code:'S04',label:'수습',active:true}
    ]},
    { id:'HR_EDU', category:'인사', name:'최종학력', codes:[
        {seq:1,code:'EDU01',label:'중학교졸업',active:true},
        {seq:2,code:'EDU02',label:'고등학교졸업',active:true},
        {seq:3,code:'EDU03',label:'전문학사',active:true},
        {seq:4,code:'EDU04',label:'학사',active:true},
        {seq:5,code:'EDU05',label:'석사',active:true},
        {seq:6,code:'EDU06',label:'박사',active:true}
    ]},
    { id:'HR_SCHOOL', category:'인사', name:'대학교', codes:[
        {seq:1,code:'SC01',label:'서울대학교',active:true},
        {seq:2,code:'SC02',label:'연세대학교',active:true},
        {seq:3,code:'SC03',label:'고려대학교',active:true},
        {seq:4,code:'SC04',label:'성균관대학교',active:true},
        {seq:5,code:'SC05',label:'한양대학교',active:true},
        {seq:6,code:'SC06',label:'중앙대학교',active:true},
        {seq:7,code:'SC07',label:'경희대학교',active:true},
        {seq:8,code:'SC08',label:'이화여자대학교',active:true},
        {seq:9,code:'SC09',label:'부산대학교',active:true},
        {seq:10,code:'SC10',label:'기타',active:true}
    ]},
    { id:'HR_NATION', category:'인사', name:'국적구분', codes:[
        {seq:1,code:'N01',label:'내국인',active:true},
        {seq:2,code:'N02',label:'외국인',active:true}
    ]},
    { id:'HR_RELATION', category:'인사', name:'가족관계', codes:[
        {seq:1,code:'R01',label:'배우자',active:true},
        {seq:2,code:'R02',label:'부',active:true},
        {seq:3,code:'R03',label:'모',active:true},
        {seq:4,code:'R04',label:'자녀',active:true},
        {seq:5,code:'R05',label:'형제/자매',active:true},
        {seq:6,code:'R06',label:'기타',active:true}
    ]},
    { id:'HR_BANK', category:'인사', name:'은행', codes:[
        {seq:1,code:'BK01',label:'국민은행',active:true},
        {seq:2,code:'BK02',label:'신한은행',active:true},
        {seq:3,code:'BK03',label:'우리은행',active:true},
        {seq:4,code:'BK04',label:'하나은행',active:true},
        {seq:5,code:'BK05',label:'농협은행',active:true},
        {seq:6,code:'BK06',label:'기업은행',active:true},
        {seq:7,code:'BK07',label:'SC제일은행',active:true},
        {seq:8,code:'BK08',label:'씨티은행',active:true},
        {seq:9,code:'BK09',label:'카카오뱅크',active:true},
        {seq:10,code:'BK10',label:'토스뱅크',active:true},
        {seq:11,code:'BK11',label:'케이뱅크',active:true},
        {seq:12,code:'BK12',label:'새마을금고',active:true},
        {seq:13,code:'BK13',label:'신협',active:true},
        {seq:14,code:'BK14',label:'부산은행',active:true},
        {seq:15,code:'BK15',label:'대구은행',active:true},
        {seq:16,code:'BK16',label:'경남은행',active:true},
        {seq:17,code:'BK17',label:'광주은행',active:true},
        {seq:18,code:'BK18',label:'전북은행',active:true},
        {seq:19,code:'BK19',label:'제주은행',active:true}
    ]},
    { id:'HR_ACCTYPE', category:'인사', name:'계좌유형', codes:[
        {seq:1,code:'AC01',label:'급여계좌',active:true},
        {seq:2,code:'AC02',label:'비상계좌',active:true}
    ]},
    /* ── 인사발령 ── */
    { id:'APPT_TYPE', category:'인사발령', name:'발령유형', codes:[
        {seq:1,code:'AP01',label:'입사',active:true},
        {seq:2,code:'AP02',label:'전보',active:true},
        {seq:3,code:'AP03',label:'승진',active:true},
        {seq:4,code:'AP04',label:'강등',active:true},
        {seq:5,code:'AP05',label:'퇴사',active:true},
        {seq:6,code:'AP06',label:'휴직',active:true},
        {seq:7,code:'AP07',label:'복직',active:true},
        {seq:8,code:'AP08',label:'겸직',active:true},
        {seq:9,code:'AP09',label:'파견',active:true}
    ]},
    /* ── 근태 ── */
    { id:'VAC_TYPE', category:'근태', name:'휴가유형', codes:[
        {seq:1,code:'V01',label:'연차',active:true},
        {seq:2,code:'V02',label:'반차(오전)',active:true},
        {seq:3,code:'V03',label:'반차(오후)',active:true},
        {seq:4,code:'V04',label:'병가',active:true},
        {seq:5,code:'V05',label:'경조사',active:true},
        {seq:6,code:'V06',label:'공가',active:true},
        {seq:7,code:'V07',label:'육아휴직',active:true},
        {seq:8,code:'V08',label:'출산휴가',active:true}
    ]},
    { id:'ATT_TYPE', category:'근태', name:'출결유형', codes:[
        {seq:1,code:'A01',label:'정상출근',active:true},
        {seq:2,code:'A02',label:'지각',active:true},
        {seq:3,code:'A03',label:'조퇴',active:true},
        {seq:4,code:'A04',label:'결근',active:true},
        {seq:5,code:'A05',label:'재택근무',active:true},
        {seq:6,code:'A06',label:'출장',active:true}
    ]},
    /* ── 급여 ── */
    { id:'SAL_PAY', category:'급여', name:'지급항목', codes:[
        {seq:1,code:'SP01',label:'기본급',active:true},
        {seq:2,code:'SP02',label:'직책수당',active:true},
        {seq:3,code:'SP03',label:'식대',active:true},
        {seq:4,code:'SP04',label:'교통비',active:true},
        {seq:5,code:'SP05',label:'연장근로수당',active:true},
        {seq:6,code:'SP06',label:'하계휴가비',active:true},
        {seq:7,code:'SP07',label:'상여금',active:true},
        {seq:8,code:'SP08',label:'연말상여',active:true}
    ]},
    { id:'SAL_DED', category:'급여', name:'공제항목', codes:[
        {seq:1,code:'SD01',label:'국민연금',active:true},
        {seq:2,code:'SD02',label:'건강보험',active:true},
        {seq:3,code:'SD03',label:'장기요양보험',active:true},
        {seq:4,code:'SD04',label:'고용보험',active:true},
        {seq:5,code:'SD05',label:'소득세',active:true},
        {seq:6,code:'SD06',label:'지방소득세',active:true},
        {seq:7,code:'SD07',label:'연말정산',active:true}
    ]},
    /* ── 조직 ── */
    { id:'CO_TYPE', category:'조직', name:'법인구분', codes:[
        {seq:1,code:'CO01',label:'법인',active:true},
        {seq:2,code:'CO02',label:'개인',active:true}
    ]},
    { id:'DEPT_TYPE', category:'조직', name:'부서유형', codes:[
        {seq:1,code:'DT01',label:'본사',active:true},
        {seq:2,code:'DT02',label:'본부',active:true},
        {seq:3,code:'DT03',label:'부서',active:true},
        {seq:4,code:'DT04',label:'센터',active:true}
    ]},
    { id:'WP_BIZTYPE', category:'조직', name:'업태', codes:[
        {seq:1,code:'BT01',label:'서비스업',active:true},
        {seq:2,code:'BT02',label:'제조업',active:true},
        {seq:3,code:'BT03',label:'도소매업',active:true},
        {seq:4,code:'BT04',label:'건설업',active:true},
        {seq:5,code:'BT05',label:'부동산업',active:true},
        {seq:6,code:'BT06',label:'금융업',active:true},
        {seq:7,code:'BT07',label:'의료업',active:true},
        {seq:8,code:'BT08',label:'교육서비스업',active:true}
    ]}
];

var syscodeGroups = [];
var syscodeActiveGroupId = null;
var syscodeEditingGroupId = null;
var syscodeEditingCodeIdx = null;

// 코드 시드 버전: 변경 시 해당 그룹 강제 갱신
var SYSCODE_FORCE_RESET = ['HR_WORKTYPE', 'HR_SERVICE', 'HR_JOB', 'DEPT_TYPE', 'HR_APPT_TYPE'];

function syscodeEnsureData() {
    var saved = localStorage.getItem('syscodeGroups_v1');
    if (saved) {
        try {
            syscodeGroups = JSON.parse(saved);
            var merged = false;
            SYSCODE_SEED.forEach(function(seedGrp) {
                var existing = syscodeGroups.find(function(g){ return g.id === seedGrp.id; });
                if (!existing) {
                    syscodeGroups.push(JSON.parse(JSON.stringify(seedGrp)));
                    merged = true;
                } else if (SYSCODE_FORCE_RESET.indexOf(seedGrp.id) !== -1) {
                    // 강제 갱신 대상: 시드로 덮어씀
                    var idx = syscodeGroups.indexOf(existing);
                    syscodeGroups[idx] = JSON.parse(JSON.stringify(seedGrp));
                    merged = true;
                }
            });
            if (merged) syscodeSave();
        } catch(e) {
            syscodeGroups = JSON.parse(JSON.stringify(SYSCODE_SEED));
            syscodeSave();
        }
    } else {
        syscodeGroups = JSON.parse(JSON.stringify(SYSCODE_SEED));
        syscodeSave();
    }
}
function syscodeSave() { localStorage.setItem('syscodeGroups_v1', JSON.stringify(syscodeGroups)); }

/* 외부에서 코드값 목록 가져오기: getCodeValues('HR_POSITION') → [{code,label}, ...] */
function getCodeValues(groupId) {
    syscodeEnsureData();
    var grp = syscodeGroups.find(function(g){ return g.id === groupId; });
    if (!grp) grp = SYSCODE_SEED.find(function(g){ return g.id === groupId; });
    if (!grp) return [];
    return grp.codes.filter(function(c){ return c.active; })
        .sort(function(a,b){ return a.seq - b.seq; })
        .map(function(c){ return { code: c.code, label: c.label }; });
}

/* select 요소를 코드관리 데이터로 채우기
   buildCodeSelect('scf-type', 'CO_TYPE', '법인')
   → <select>에 CO_TYPE 코드 목록 옵션을 채우고 defaultVal 선택 */
function buildCodeSelect(selectId, groupId, defaultVal) {
    var sel = document.getElementById(selectId);
    if (!sel) return;
    var vals = getCodeValues(groupId);
    var blankOpt = (defaultVal === '') ? '<option value="">선택</option>' : '';
    sel.innerHTML = blankOpt + vals.map(function(v){
        return '<option value="' + v.label + '">' + v.label + '</option>';
    }).join('');
    if (defaultVal) sel.value = defaultVal;
}

function syscodeInit() {
    syscodeEnsureData();
    syscodeRenderGroupList();
    if (syscodeActiveGroupId) {
        syscodeRenderCodeList(syscodeActiveGroupId);
    } else {
        document.getElementById('syscode-content').innerHTML =
            '<div class="syscode-empty-state"><div style="font-size:36px;margin-bottom:12px;">🗂️</div><div>왼쪽에서 코드 그룹을 선택해 주세요.</div></div>';
    }
}

var syscodeSearchQ = '';
function syscodeSearchGroup(q) {
    syscodeSearchQ = (q || '').toLowerCase();
    syscodeRenderGroupList();
}

function syscodeRenderGroupList() {
    var list = document.getElementById('syscode-group-list');
    if (!list) return;
    var q = syscodeSearchQ;
    var catMap = {};
    syscodeGroups.forEach(function(g) {
        if (q && g.name.toLowerCase().indexOf(q) < 0 && g.category.toLowerCase().indexOf(q) < 0) return;
        if (!catMap[g.category]) catMap[g.category] = [];
        catMap[g.category].push(g);
    });
    var html = '';
    Object.keys(catMap).forEach(function(cat) {
        html += '<div class="syscode-cat-section">';
        html += '<div class="syscode-cat-label">' + cat + '</div>';
        catMap[cat].forEach(function(g) {
            var isActive = syscodeActiveGroupId === g.id;
            var cnt = (g.codes || []).filter(function(c){ return c.active; }).length;
            html += '<div class="syscode-group-item' + (isActive ? ' active' : '') + '" onclick="syscodeSelectGroup(\'' + g.id + '\')">';
            html += '<span class="syscode-group-name">' + g.name + '</span>';
            html += '<span class="syscode-group-cnt">' + cnt + '</span>';
            html += '</div>';
        });
        html += '</div>';
    });
    if (!html) html = '<div style="padding:20px;color:#bbb;font-size:13px;text-align:center;">' + (q ? '검색 결과 없음' : '그룹이 없습니다.') + '</div>';
    list.innerHTML = html;
}

function syscodeSelectGroup(id) {
    syscodeActiveGroupId = id;
    syscodeRenderGroupList();
    syscodeRenderCodeList(id);
}

function syscodeRenderCodeList(groupId) {
    var content = document.getElementById('syscode-content');
    if (!content) return;
    var grp = syscodeGroups.find(function(g){ return g.id === groupId; });
    if (!grp) return;
    var codes = (grp.codes || []).slice().sort(function(a,b){ return a.seq - b.seq; });
    var rows = codes.map(function(c, i) {
        return '<tr class="syscode-tr' + (!c.active ? ' syscode-inactive' : '') + '">' +
            '<td class="syscode-td-seq">' + c.seq + '</td>' +
            '<td class="syscode-td-code">' + c.code + '</td>' +
            '<td class="syscode-td-label">' + c.label + '</td>' +
            '<td class="syscode-td-active"><span class="syscode-active-badge' + (c.active ? ' on' : '') + '">' + (c.active ? '사용' : '미사용') + '</span></td>' +
            '<td class="syscode-td-actions">' +
            '<button class="syscode-row-btn" onclick="syscodeOpenEditCode(\'' + groupId + '\',' + i + ')">수정</button>' +
            '<button class="syscode-row-btn del" onclick="syscodeDeleteCode(\'' + groupId + '\',' + i + ')">삭제</button>' +
            '</td>' +
            '</tr>';
    }).join('');
    content.innerHTML =
        '<div class="syscode-content-hd">' +
        '<div class="syscode-content-title">' +
        '<span class="syscode-content-cat">' + grp.category + '</span>' +
        '<span class="syscode-content-name">' + grp.name + '</span>' +
        '<span class="syscode-content-id">ID: ' + grp.id + '</span>' +
        '</div>' +
        '<div class="syscode-content-actions">' +
        '<button class="syscode-edit-group-btn" onclick="syscodeOpenEditGroup(\'' + grp.id + '\')">그룹 수정</button>' +
        '<button class="syscode-del-group-btn" onclick="syscodeDeleteGroup(\'' + grp.id + '\')">그룹 삭제</button>' +
        '<button class="syscode-add-code-btn" onclick="syscodeOpenAddCode(\'' + grp.id + '\')">+ 코드 추가</button>' +
        '</div>' +
        '</div>' +
        '<table class="syscode-table">' +
        '<colgroup><col style="width:60px"><col style="width:120px"><col><col style="width:90px"><col style="width:140px"></colgroup>' +
        '<thead><tr>' +
        '<th>순서</th><th>코드값</th><th>코드명</th><th>사용여부</th><th></th>' +
        '</tr></thead>' +
        '<tbody>' + (rows || '<tr><td colspan="5" class="syscode-no-data">등록된 코드가 없습니다.</td></tr>') + '</tbody>' +
        '</table>';
}

/* ── 그룹 추가/수정 ── */
function syscodeOpenAddGroup() {
    syscodeEditingGroupId = null;
    document.getElementById('syscode-group-modal-title').textContent = '코드 그룹 추가';
    document.getElementById('syscode-group-cat').value = '';
    document.getElementById('syscode-group-name').value = '';
    document.getElementById('syscode-group-id').value = '';
    document.getElementById('syscode-group-id').disabled = false;
    var dl = document.getElementById('syscode-cat-list');
    if (dl) {
        var cats = [];
        syscodeGroups.forEach(function(g){ if (cats.indexOf(g.category) < 0) cats.push(g.category); });
        dl.innerHTML = cats.map(function(c){ return '<option value="' + c + '">'; }).join('');
    }
    document.getElementById('syscode-group-modal').style.display = 'flex';
    setTimeout(function(){ document.getElementById('syscode-group-cat').focus(); }, 50);
}
function syscodeOpenEditGroup(id) {
    var grp = syscodeGroups.find(function(g){ return g.id === id; });
    if (!grp) return;
    syscodeEditingGroupId = id;
    document.getElementById('syscode-group-modal-title').textContent = '코드 그룹 수정';
    document.getElementById('syscode-group-cat').value = grp.category;
    document.getElementById('syscode-group-name').value = grp.name;
    document.getElementById('syscode-group-id').value = grp.id;
    document.getElementById('syscode-group-id').disabled = true;
    document.getElementById('syscode-group-modal').style.display = 'flex';
    setTimeout(function(){ document.getElementById('syscode-group-name').focus(); }, 50);
}
function syscodeCloseGroupModal(evt) {
    if (evt && evt.target !== document.getElementById('syscode-group-modal')) return;
    syscodeCloseGroupModalDirect();
}
function syscodeCloseGroupModalDirect() {
    document.getElementById('syscode-group-modal').style.display = 'none';
}
function syscodeSaveGroupModal() {
    var cat  = document.getElementById('syscode-group-cat').value.trim();
    var name = document.getElementById('syscode-group-name').value.trim();
    var id   = document.getElementById('syscode-group-id').value.trim().toUpperCase().replace(/[^A-Z0-9_]/g,'');
    if (!cat)  { showToast('카테고리를 입력해 주세요.', 'error'); return; }
    if (!name) { showToast('그룹명을 입력해 주세요.', 'error'); return; }
    if (!id)   { showToast('그룹 ID를 입력해 주세요.', 'error'); return; }
    if (!syscodeEditingGroupId) {
        if (syscodeGroups.find(function(g){ return g.id === id; })) {
            showToast('이미 존재하는 그룹 ID입니다.', 'error'); return;
        }
        syscodeGroups.push({ id: id, category: cat, name: name, codes: [] });
        syscodeActiveGroupId = id;
    } else {
        var grp = syscodeGroups.find(function(g){ return g.id === syscodeEditingGroupId; });
        if (grp) { grp.category = cat; grp.name = name; }
    }
    syscodeSave();
    syscodeCloseGroupModalDirect();
    syscodeRenderGroupList();
    syscodeRenderCodeList(syscodeActiveGroupId);
    showToast('저장되었습니다.', 'success');
}
async function syscodeDeleteGroup(id) {
    var grp = syscodeGroups.find(function(g){ return g.id === id; });
    if (!grp) return;
    if (!await showConfirm('"' + grp.name + '" 그룹을 삭제하시겠습니까?\n코드 항목도 모두 삭제됩니다.')) return;
    syscodeGroups = syscodeGroups.filter(function(g){ return g.id !== id; });
    syscodeSave();
    if (syscodeActiveGroupId === id) {
        syscodeActiveGroupId = syscodeGroups.length ? syscodeGroups[0].id : null;
    }
    syscodeRenderGroupList();
    if (syscodeActiveGroupId) syscodeRenderCodeList(syscodeActiveGroupId);
    else document.getElementById('syscode-content').innerHTML =
        '<div class="syscode-empty-state"><div style="font-size:36px;margin-bottom:12px;">🗂️</div><div>왼쪽에서 코드 그룹을 선택해 주세요.</div></div>';
    showToast('삭제되었습니다.', 'success');
}

/* ── 코드 항목 추가/수정 ── */
function syscodeOpenAddCode(groupId) {
    syscodeEditingCodeIdx = null;
    var grp = syscodeGroups.find(function(g){ return g.id === groupId; });
    var nextSeq = grp ? (grp.codes.length ? Math.max.apply(null, grp.codes.map(function(c){ return c.seq; })) + 1 : 1) : 1;
    document.getElementById('syscode-code-modal-title').textContent = '코드 추가';
    document.getElementById('syscode-code-val').value = '';
    document.getElementById('syscode-code-val').disabled = false;
    document.getElementById('syscode-code-label').value = '';
    document.getElementById('syscode-code-seq').value = nextSeq;
    document.getElementById('syscode-code-active').checked = true;
    document.getElementById('syscode-code-modal').style.display = 'flex';
    setTimeout(function(){ document.getElementById('syscode-code-val').focus(); }, 50);
}
function syscodeOpenEditCode(groupId, idx) {
    var grp = syscodeGroups.find(function(g){ return g.id === groupId; });
    if (!grp) return;
    var sorted = grp.codes.slice().sort(function(a,b){ return a.seq - b.seq; });
    var c = sorted[idx];
    if (!c) return;
    syscodeEditingCodeIdx = grp.codes.indexOf(c);
    document.getElementById('syscode-code-modal-title').textContent = '코드 수정';
    document.getElementById('syscode-code-val').value = c.code;
    document.getElementById('syscode-code-val').disabled = true;
    document.getElementById('syscode-code-label').value = c.label;
    document.getElementById('syscode-code-seq').value = c.seq;
    document.getElementById('syscode-code-active').checked = c.active;
    document.getElementById('syscode-code-modal').style.display = 'flex';
    setTimeout(function(){ document.getElementById('syscode-code-label').focus(); }, 50);
}
function syscodeCloseCodeModal(evt) {
    if (evt && evt.target !== document.getElementById('syscode-code-modal')) return;
    syscodeCloseCodeModalDirect();
}
function syscodeCloseCodeModalDirect() {
    document.getElementById('syscode-code-modal').style.display = 'none';
}
function syscodeSaveCodeModal() {
    var grp = syscodeGroups.find(function(g){ return g.id === syscodeActiveGroupId; });
    if (!grp) return;
    var codeVal = document.getElementById('syscode-code-val').value.trim();
    var label   = document.getElementById('syscode-code-label').value.trim();
    var seq     = parseInt(document.getElementById('syscode-code-seq').value) || 1;
    var active  = document.getElementById('syscode-code-active').checked;
    if (!codeVal) { showToast('코드값을 입력해 주세요.', 'error'); return; }
    if (!label)   { showToast('코드명을 입력해 주세요.', 'error'); return; }
    if (syscodeEditingCodeIdx === null) {
        if (grp.codes.find(function(c){ return c.code === codeVal; })) {
            showToast('이미 존재하는 코드값입니다.', 'error'); return;
        }
        grp.codes.push({ code: codeVal, label: label, seq: seq, active: active });
    } else {
        var c = grp.codes[syscodeEditingCodeIdx];
        c.label = label; c.seq = seq; c.active = active;
    }
    syscodeSave();
    syscodeCloseCodeModalDirect();
    syscodeRenderGroupList();
    syscodeRenderCodeList(syscodeActiveGroupId);
    showToast('저장되었습니다.', 'success');
}
async function syscodeDeleteCode(groupId, idx) {
    var grp = syscodeGroups.find(function(g){ return g.id === groupId; });
    if (!grp) return;
    var sorted = grp.codes.slice().sort(function(a,b){ return a.seq - b.seq; });
    var c = sorted[idx];
    if (!c) return;
    var usedCount = 0;
    if (groupId === 'HR_POSITION') {
        usedCount = employees.filter(function(e){ return e.position === c.label; }).length;
    } else if (groupId === 'HR_EMPTYPE') {
        usedCount = employees.filter(function(e){ return (hrExtData[e.id] || {}).hire_type === c.label; }).length;
    }
    if (usedCount > 0) {
        showToast('"' + c.label + '" 코드는 현재 ' + usedCount + '명의 직원에게 사용 중입니다. 삭제할 수 없습니다.', 'error');
        return;
    }
    if (!await showConfirm('"' + c.label + '" 코드를 삭제하시겠습니까?')) return;
    grp.codes = grp.codes.filter(function(x){ return x.code !== c.code; });
    syscodeSave();
    syscodeRenderGroupList();
    syscodeRenderCodeList(groupId);
    showToast('삭제되었습니다.', 'success');
}

// =====================================================================
// ===== 부서관리 (sys-dept) =====
// =====================================================================

var SDEPT_SEED = {
    companies: [
        { id:'CO001', code:'1000', name:'케어링(주)', active:true }
    ],
    workplaces: [
        { id:'WP001', code:'1001', name:'케어링 본사', companyId:'CO001', active:true }
    ],
    depts: [
        { id:'DP001', code:'D001', name:'개발팀',    shortName:'개발팀',    type:'팀', parentId:null, companyId:'CO001', workplaceId:'WP001', active:true },
        { id:'DP002', code:'D002', name:'영업팀',    shortName:'영업팀',    type:'팀', parentId:null, companyId:'CO001', workplaceId:'WP001', active:true },
        { id:'DP003', code:'D003', name:'인사팀',    shortName:'인사팀',    type:'팀', parentId:null, companyId:'CO001', workplaceId:'WP001', active:true },
        { id:'DP004', code:'D004', name:'경영지원팀', shortName:'경영지원팀', type:'팀', parentId:null, companyId:'CO001', workplaceId:'WP001', active:true },
        { id:'DP005', code:'D005', name:'마케팅팀',  shortName:'마케팅팀',  type:'팀', parentId:null, companyId:'CO001', workplaceId:'WP001', active:true },
        { id:'DP006', code:'D006', name:'행정팀',    shortName:'행정팀',    type:'팀', parentId:null, companyId:'CO001', workplaceId:'WP001', active:true },
        { id:'DP007', code:'D007', name:'요양팀',    shortName:'요양팀',    type:'팀', parentId:null, companyId:'CO001', workplaceId:'WP001', active:true }
    ]
};

var sdeptCompanies  = [];
var sdeptWorkplaces = [];
var sdeptDepts      = [];
var sdeptExpandedIds = {};
var sdeptSelectedId  = null;
var sdeptAddMode     = false;
var sdeptAddParentId = null;

function sdeptEnsureData() {
    var saved = localStorage.getItem('sdeptData_v1');
    if (saved) {
        try {
            var d = JSON.parse(saved);
            sdeptCompanies  = d.companies  || JSON.parse(JSON.stringify(SDEPT_SEED.companies));
            sdeptWorkplaces = d.workplaces || JSON.parse(JSON.stringify(SDEPT_SEED.workplaces));
            sdeptDepts      = d.depts      || JSON.parse(JSON.stringify(SDEPT_SEED.depts));
        } catch(e) {
            sdeptCompanies  = JSON.parse(JSON.stringify(SDEPT_SEED.companies));
            sdeptWorkplaces = JSON.parse(JSON.stringify(SDEPT_SEED.workplaces));
            sdeptDepts      = JSON.parse(JSON.stringify(SDEPT_SEED.depts));
        }
    } else {
        sdeptCompanies  = JSON.parse(JSON.stringify(SDEPT_SEED.companies));
        sdeptWorkplaces = JSON.parse(JSON.stringify(SDEPT_SEED.workplaces));
        sdeptDepts      = JSON.parse(JSON.stringify(SDEPT_SEED.depts));
        sdeptPersist();
    }
}

function sdeptPersist() {
    localStorage.setItem('sdeptData_v1', JSON.stringify({
        companies:  sdeptCompanies,
        workplaces: sdeptWorkplaces,
        depts:      sdeptDepts
    }));
}

function sdeptIsActiveOn(dept, dateStr) {
    if (!dateStr) dateStr = new Date().toISOString().split('T')[0];
    if (dept.startDate || dept.endDate) {
        var s = dept.startDate || '1900-01-01';
        var e = dept.endDate   || '9999-12-31';
        return dateStr >= s && dateStr <= e;
    }
    return dept.active !== false;
}

function sdeptGetRefDate() {
    var el = document.getElementById('sdept-ref-date');
    return (el && el.value) || new Date().toISOString().split('T')[0];
}

function sdeptSetTodayRef() {
    setDateVal('sdept-ref-date', new Date().toISOString().split('T')[0]);
    sdeptRenderTree();
}

function sdeptFormatDate(el) {
    var raw = el.value.replace(/[^0-9]/g, '').slice(0, 8);
    var out = raw;
    if (raw.length > 6) out = raw.slice(0,4) + '-' + raw.slice(4,6) + '-' + raw.slice(6);
    else if (raw.length > 4) out = raw.slice(0,4) + '-' + raw.slice(4);
    el.value = out;
}

function sdeptGetActiveDeptNames() {
    sdeptEnsureData();
    var today = new Date().toISOString().split('T')[0];
    return sdeptDepts.filter(function(d){ return sdeptIsActiveOn(d, today); }).map(function(d){ return d.name; });
}

var _hrdExpandedIds = {};

function hrDeptSearchOpen() {
    sdeptEnsureData();
    var modal = document.getElementById('hr-dept-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    // 법인 드롭다운 구성
    var corpSel = document.getElementById('hrd-corp-sel');
    if (corpSel) {
        corpSel.innerHTML = sdeptCompanies.map(function(c){
            return '<option value="' + c.id + '">' + c.code + '. ' + c.name + '</option>';
        }).join('');
    }
    // 기준일자 오늘로 초기화
    hrDeptModalSetToday();
    var q = document.getElementById('hrd-search');
    if (q) { q.value = ''; setTimeout(function(){ q.focus(); }, 50); }
}

function hrDeptSearchClose() {
    var modal = document.getElementById('hr-dept-modal');
    if (modal) modal.style.display = 'none';
}

function hrDeptModalSetToday() {
    setDateVal('hrd-ref-date', new Date().toISOString().split('T')[0]);
    hrDeptModalRenderTree();
}

function hrDeptModalGetRefDate() {
    var el = document.getElementById('hrd-ref-date');
    return (el && el.value) ? el.value : new Date().toISOString().split('T')[0];
}

function hrDeptModalExpandAll() {
    var btn = document.getElementById('hrd-expand-btn');
    var expanding = !btn || btn.textContent.indexOf('펼치기') >= 0;
    sdeptDepts.forEach(function(d){ _hrdExpandedIds[d.id] = expanding; });
    sdeptCompanies.forEach(function(c){ _hrdExpandedIds[c.id] = expanding; });
    if (btn) btn.textContent = expanding ? '전체 접기' : '전체 펼치기';
    hrDeptModalRenderTree();
}

function hrDeptModalRenderTree() {
    sdeptEnsureData();
    var tree = document.getElementById('hrd-tree');
    if (!tree) return;
    var q = ((document.getElementById('hrd-search') || {}).value || '').toLowerCase().trim();
    var refDate = hrDeptModalGetRefDate();
    var selCorpId = ((document.getElementById('hrd-corp-sel') || {}).value) || (sdeptCompanies[0] && sdeptCompanies[0].id) || '';
    var html = '';
    sdeptCompanies.filter(function(c){ return c.id === selCorpId; }).forEach(function(company) {
        var expanded = _hrdExpandedIds[company.id] !== false;
        html += '<div class="sdept-node sdept-node-company">' +
            '<div class="sdept-node-row" onclick="_hrdToggle(\'' + company.id + '\')">' +
            '<span class="sdept-node-toggle">' + (expanded ? '▾' : '▸') + '</span>' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" style="flex-shrink:0"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' +
            '<span class="sdept-node-label">' + company.code + '. ' + company.name + '</span>' +
            '</div>';
        if (expanded) {
            var rootDepts = sdeptDepts.filter(function(d){
                if (d.companyId !== company.id) return false;
                if (!d.parentId) return true;
                var p = sdeptDepts.find(function(x){ return x.id === d.parentId; });
                return !p || p.companyId !== company.id;
            });
            html += _hrdRenderNodes(rootDepts, q, refDate, 1);
        }
        html += '</div>';
    });
    tree.innerHTML = html || '<div style="padding:20px;color:#bbb;font-size:12px;text-align:center;">등록된 조직이 없습니다.</div>';
}

function _hrdToggle(id) {
    _hrdExpandedIds[id] = (_hrdExpandedIds[id] === false) ? true : false;
    hrDeptModalRenderTree();
}

function _hrdRenderNodes(depts, q, refDate, level) {
    var html = '';
    depts.forEach(function(dept) {
        var children = sdeptDepts.filter(function(d){ return d.parentId === dept.id; });
        if (q && dept.name.toLowerCase().indexOf(q) < 0 && (dept.code || '').toLowerCase().indexOf(q) < 0) {
            var childHtml = _hrdRenderNodes(children, q, refDate, level + 1);
            if (childHtml) html += childHtml;
            return;
        }
        var hasChildren = children.length > 0;
        var expanded = _hrdExpandedIds[dept.id] !== false;
        var typeMeta = (typeof SDEPT_TYPE_META !== 'undefined' && SDEPT_TYPE_META[dept.type]) || (typeof SDEPT_TYPE_META !== 'undefined' && SDEPT_TYPE_META['팀']) || {};
        var isActive = sdeptIsActiveOn(dept, refDate);
        var rowOpacity = isActive ? '1' : '0.45';
        var typeBadge = (['본사','본부','Function'].indexOf(dept.type) !== -1)
            ? '<span style="font-size:10px;color:' + typeMeta.color + ';border:1px solid ' + typeMeta.color + ';border-radius:4px;padding:1px 5px;margin-left:5px;flex-shrink:0;">' + dept.type + '</span>' : '';
        var deptNameEsc = dept.name.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
        html += '<div class="sdept-node sdept-node-dept" style="padding-left:' + (level * 14) + 'px;opacity:' + rowOpacity + '">' +
            '<div class="sdept-node-row" onclick="hrDeptSearchSelect(\'' + deptNameEsc + '\')" style="cursor:pointer;" onmouseover="this.classList.add(\'hovered\')" onmouseout="this.classList.remove(\'hovered\')">' +
            (hasChildren
                ? '<span class="sdept-node-toggle" onclick="event.stopPropagation();_hrdToggle(\'' + dept.id + '\')">' + (expanded ? '▾' : '▸') + '</span>'
                : '<span class="sdept-node-toggle-empty"></span>') +
            (typeof sdeptTypeIcon === 'function' ? sdeptTypeIcon(dept.type, false) : '') +
            '<span style="display:flex;align-items:center;gap:4px;min-width:0;">' +
            '<span style="font-size:12.5px;color:' + (isActive ? typeMeta.color || '#333' : '#bbb') + ';white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + (dept.code ? dept.code + '. ' : '') + dept.name + '</span>' +
            typeBadge +
            '</span>' +
            '</div>';
        if (hasChildren && expanded) html += _hrdRenderNodes(children, q, refDate, level + 1);
        html += '</div>';
    });
    return html;
}

var _hrDeptTargetId = null;

function hrDeptSearchSelect(deptName) {
    var targetId = _hrDeptTargetId || 'hrf-org-dept';
    _hrDeptTargetId = null;
    var inp = document.getElementById(targetId);
    if (inp) inp.value = deptName;
    hrDeptSearchClose();
    if (targetId === 'hrf-org-dept') hrOrgDeptChange();
}

// ── 코드도움 모달 ──────────────────────────────────────────────
var _hrCodeState = { groupId: '', targetId: '', selected: null, allCodes: [] };

function hrCodeOpen(groupId, targetId, title, col1, col2) {
    syscodeEnsureData();
    var codes = getCodeValues(groupId);
    _hrCodeState = { groupId: groupId, targetId: targetId, selected: null, allCodes: codes };
    var modal = document.getElementById('hr-code-modal');
    if (!modal) return;
    var titleEl = document.getElementById('hr-code-modal-title');
    if (titleEl) titleEl.textContent = title || '코드도움';
    var col1Hd = document.getElementById('hr-code-col1-hd');
    var col2Hd = document.getElementById('hr-code-col2-hd');
    if (col1Hd) col1Hd.textContent = col1 || '코드';
    if (col2Hd) col2Hd.textContent = col2 || '코드명';
    var searchEl = document.getElementById('hr-code-search');
    if (searchEl) searchEl.value = '';
    // 현재 선택값을 미리 selected로 표시
    var currentVal = (document.getElementById(targetId) || {}).value || '';
    if (currentVal) {
        var found = codes.find(function(c){ return c.label === currentVal || c.code === currentVal; });
        if (found) _hrCodeState.selected = found;
    }
    hrCodeRenderList(codes);
    modal.style.display = 'flex';
    if (searchEl) setTimeout(function(){ searchEl.focus(); }, 50);
}

function hrCodeClose() {
    var modal = document.getElementById('hr-code-modal');
    if (modal) modal.style.display = 'none';
    _hrCodeState.selected = null;
}

function hrCodeClear(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.value = '';
    el.dispatchEvent(new Event('change'));
}

function hrCodeFilter() {
    var q = ((document.getElementById('hr-code-search') || {}).value || '').toLowerCase();
    var filtered = _hrCodeState.allCodes.filter(function(c) {
        return !q || c.code.toLowerCase().indexOf(q) !== -1 || c.label.toLowerCase().indexOf(q) !== -1;
    });
    hrCodeRenderList(filtered);
}

function hrCodeRenderList(items) {
    var tbody = document.getElementById('hr-code-list');
    if (!tbody) return;
    var sel = _hrCodeState.selected;
    tbody.innerHTML = items.map(function(c) {
        var isSelected = sel && sel.code === c.code;
        return '<tr onclick="hrCodeRowClick(\'' + c.code.replace(/'/g,"\\'") + '\',\'' + c.label.replace(/'/g,"\\'") + '\')" ondblclick="hrCodeRowDblClick(\'' + c.code.replace(/'/g,"\\'") + '\',\'' + c.label.replace(/'/g,"\\'") + '\')" style="cursor:pointer;background:' + (isSelected ? '#FFF0F3' : '#fff') + ';">' +
               '<td style="padding:8px 12px;text-align:center;font-size:13px;border-right:1px solid #eee;border-bottom:1px solid #eee;color:' + (isSelected ? '#F36178' : '#555') + ';font-family:inherit;">' + c.code + '</td>' +
               '<td style="padding:8px 12px;font-size:13px;border-bottom:1px solid #eee;color:' + (isSelected ? '#F36178' : '#222') + ';font-family:inherit;font-weight:' + (isSelected ? '600' : '400') + ';">' + c.label + '</td>' +
               '</tr>';
    }).join('');
}

function hrCodeRowClick(code, label) {
    _hrCodeState.selected = { code: code, label: label };
    hrCodeFilter();
}

function hrCodeRowDblClick(code, label) {
    _hrCodeState.selected = { code: code, label: label };
    hrCodeConfirm();
}

function hrCodeConfirm() {
    var sel = _hrCodeState.selected;
    var targetId = _hrCodeState.targetId;
    if (sel) {
        if (_hrCodeState.groupId === 'BANK_CODE') {
            var dispEl = document.getElementById('hrf-bank-display');
            var codeEl = document.getElementById('hrf-bank');
            if (dispEl) dispEl.value = sel.code + ' ' + sel.label;
            if (codeEl) codeEl.value = sel.code;
        } else {
            var el = document.getElementById(targetId);
            if (el) {
                el.value = sel.label;
                el.dispatchEvent(new Event('change'));
            }
        }
    }
    hrCodeClose();
}
// ────────────────────────────────────────────────────────────────

function hrCompanyChange() {
    var badge = document.getElementById('hrf-facility-badge');
    if (!badge) return;
    var wpName = (document.getElementById('hrf-company') || {}).value || '';
    if (!wpName) { badge.style.display = 'none'; badge.textContent = ''; return; }
    if (typeof swpEnsureData === 'function') swpEnsureData();
    var wp = (typeof swpList !== 'undefined' ? swpList : []).find(function(w){ return w.name === wpName; });
    var ft = wp && wp.facilityType;
    if (ft) {
        var colors = {
            '주간보호센터': { bg: '#FFF0E6', border: '#F4A65E', text: '#C2610A' },
            '방문요양센터': { bg: '#E8F5E9', border: '#66BB6A', text: '#2E7D32' },
            '방문목욕센터': { bg: '#E3F2FD', border: '#64B5F6', text: '#1565C0' },
            '병설센터':     { bg: '#FCE4EC', border: '#F48FB1', text: '#880E4F' },
            '단기보호센터': { bg: '#F3E5F5', border: '#CE93D8', text: '#6A1B9A' },
            '기타':         { bg: '#F5F5F5', border: '#BDBDBD', text: '#616161' }
        };
        var c = colors[ft] || { bg: '#F0EAFF', border: '#C9B8F0', text: '#7C5CBF' };
        badge.textContent = ft;
        badge.style.background = c.bg;
        badge.style.borderColor = c.border;
        badge.style.color = c.text;
        badge.style.display = '';
    } else {
        badge.style.display = 'none';
        badge.textContent = '';
    }
}

// 부서 선택 시 법인/사업장 자동 설정
function hrOrgDeptChange() {
    var deptName = (document.getElementById('hrf-org-dept') || {}).value || '';

    function setCompanyRowVisible(visible) {
        var th = document.getElementById('hrf-company-th');
        var td = document.getElementById('hrf-company-td');
        var display = visible ? '' : 'none';
        if (th) th.style.display = display;
        if (td) td.style.display = display;
    }

    if (!deptName) { setCompanyRowVisible(true); return; }

    sdeptEnsureData();
    var dept = sdeptDepts.find(function(d) { return d.name === deptName; });
    if (!dept) { setCompanyRowVisible(true); return; }

    // ── 1. 법인 자동 설정 ──
    var sdeptComp = sdeptCompanies.find(function(c) { return c.id === dept.companyId; });
    if (!sdeptComp) return;
    var corpSel = document.getElementById('hrf-corp');
    if (corpSel) corpSel.value = sdeptComp.name;
    // 신규등록 시 사번 미리보기 갱신
    setTimeout(hrUpdateEmpIdPreview, 0);

    // ── 4. 사업장 자동 설정 ──
    var wpName = '';
    if (dept.workplaceId) {
        var sdeptWp = sdeptWorkplaces.find(function(w) { return w.id === dept.workplaceId; });
        if (sdeptWp) wpName = sdeptWp.name;
    }
    // ── 5. 사업장 행 표시/숨김 (연결 사업장이 있는 부서만 표시) ──
    var hasWorkplace = !!dept.workplaceId;
    setCompanyRowVisible(hasWorkplace);

    if (wpName && hasWorkplace) {
        setTimeout(function() {
            var companySel = document.getElementById('hrf-company');
            if (companySel) companySel.value = wpName;
            hrCompanyChange();
        }, 30);
    } else {
        var companySel = document.getElementById('hrf-company');
        if (companySel) companySel.value = '';
        hrCompanyChange();
    }
}

function sdeptInit() {
    sdeptEnsureData();
    if (!document.getElementById('sdept-ref-date').value) {
        setDateVal('sdept-ref-date', new Date().toISOString().split('T')[0]);
    }
    // 회사정보(scompData_v1)와 동기화
    var scompRaw = localStorage.getItem('scompData_v1');
    if (scompRaw) {
        try {
            var scompArr = JSON.parse(scompRaw);
            if (Array.isArray(scompArr) && scompArr.length) {
                sdeptCompanies = scompArr.map(function(c){
                    return { id: c.id, code: c.code, name: c.name, active: c.active !== false };
                });
            }
        } catch(e) {}
    }
    // 사업장정보(swpData_v1)와 동기화
    var swpRaw = localStorage.getItem('swpData_v1');
    if (swpRaw) {
        try {
            var swpArr = JSON.parse(swpRaw);
            if (Array.isArray(swpArr) && swpArr.length) {
                sdeptWorkplaces = swpArr.map(function(w){
                    return { id: w.id, code: w.code, name: w.name, companyId: w.companyId, active: w.active !== false };
                });
            }
        } catch(e) {}
    }
    sdeptBuildCorpSel();
    sdeptCompanies.forEach(function(c){ sdeptExpandedIds[c.id] = true; });
    sdeptWorkplaces.forEach(function(w){ sdeptExpandedIds[w.id] = true; });
    sdeptDepts.forEach(function(d){ sdeptExpandedIds[d.id] = true; });
    sdeptRenderTree();
    if (!sdeptSelectedId) {
        document.getElementById('sdept-right').style.display = 'none';
        document.getElementById('sdept-empty').style.display = 'flex';
    }
}

function sdeptBuildCorpSel() {
    var sel = document.getElementById('sdept-corp-sel');
    if (!sel) return;
    sel.innerHTML = sdeptCompanies.map(function(c){
        return '<option value="' + c.id + '">' + c.code + '. ' + c.name + '</option>';
    }).join('');
}

var SDEPT_TYPE_META = {
    '본사':  { color:'#3D8EF0', icon:'<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    '본부':  { color:'#7C5CDB', icon:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>' },
    '부서':  { color:'#888',    icon:'<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>' },
    '팀':    { color:'#888',    icon:'<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>' },
    '센터':  { color:'#F36178', icon:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>' }
};

function sdeptTypeIcon(type, selected) {
    var meta = SDEPT_TYPE_META[type] || SDEPT_TYPE_META['팀'];
    var color = selected ? '#3D8EF0' : meta.color;
    return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="2" style="flex-shrink:0">' + meta.icon + '</svg>';
}

// ===== 부서 드래그앤드롭 이동 =====
var _sdeptDragId = null;

function sdeptDragStart(e, deptId) {
    _sdeptDragId = deptId;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', deptId);
    document.body.classList.add('sdept-dragging');
}

function sdeptDragEnd(e) {
    _sdeptDragId = null;
    document.body.classList.remove('sdept-dragging');
    document.querySelectorAll('.sdept-drag-over').forEach(function(el) { el.classList.remove('sdept-drag-over'); });
}

function sdeptDragOver(e, targetId) {
    if (!_sdeptDragId || _sdeptDragId === targetId) return;
    if (sdeptIsDescendantOf(targetId, _sdeptDragId)) return;
    e.preventDefault();
    e.stopPropagation();
    document.querySelectorAll('.sdept-drag-over').forEach(function(el) { el.classList.remove('sdept-drag-over'); });
    var el = document.querySelector('[data-drop-id="' + targetId + '"]');
    if (el) el.classList.add('sdept-drag-over');
}

function sdeptDragLeave(e, targetId) {
    if (e.relatedTarget) {
        var el = document.querySelector('[data-drop-id="' + targetId + '"]');
        if (el && el.contains(e.relatedTarget)) return;
    }
    var el2 = document.querySelector('[data-drop-id="' + targetId + '"]');
    if (el2) el2.classList.remove('sdept-drag-over');
}

function sdeptDrop(e, targetId, isCompanyRoot) {
    e.preventDefault();
    e.stopPropagation();
    document.querySelectorAll('.sdept-drag-over').forEach(function(el) { el.classList.remove('sdept-drag-over'); });
    document.body.classList.remove('sdept-dragging');
    if (!_sdeptDragId || _sdeptDragId === targetId) { _sdeptDragId = null; return; }
    if (!isCompanyRoot && sdeptIsDescendantOf(targetId, _sdeptDragId)) { _sdeptDragId = null; return; }

    var dragged = sdeptDepts.find(function(d) { return d.id === _sdeptDragId; });
    _sdeptDragId = null;
    if (!dragged) return;

    var newParentId = null;

    if (isCompanyRoot) {
        newParentId = null;
        dragged.companyId = targetId; // 법인 루트로 직접 이동 시만 법인 변경
    } else {
        var targetDept = sdeptDepts.find(function(d) { return d.id === targetId; });
        if (!targetDept) return;
        newParentId = targetId;
        sdeptExpandedIds[targetId] = true;
    }

    dragged.parentId = newParentId;

    sdeptPersist();
    sdeptRenderTree();
    sdeptSelectDept(dragged.id);
    showToast(dragged.name + ' 부서가 이동되었습니다.', 'success');
}

function sdeptIsDescendantOf(deptId, ancestorId) {
    var dept = sdeptDepts.find(function(d) { return d.id === deptId; });
    if (!dept || !dept.parentId) return false;
    if (dept.parentId === ancestorId) return true;
    return sdeptIsDescendantOf(dept.parentId, ancestorId);
}


function sdeptRenderTree() {
    var tree = document.getElementById('sdept-tree');
    if (!tree) return;
    var q = ((document.getElementById('sdept-search') || {}).value || '').toLowerCase().trim();
    var selCorpId = ((document.getElementById('sdept-corp-sel') || {}).value) || (sdeptCompanies[0] && sdeptCompanies[0].id) || '';
    var html = '';
    sdeptCompanies.filter(function(c){ return c.id === selCorpId; }).forEach(function(company) {
        var expanded = sdeptExpandedIds[company.id] !== false;
        html += '<div class="sdept-node sdept-node-company">' +
            '<div class="sdept-node-row" data-drop-id="' + company.id + '" ondragover="sdeptDragOver(event,\'' + company.id + '\')" ondragleave="sdeptDragLeave(event,\'' + company.id + '\')" ondrop="sdeptDrop(event,\'' + company.id + '\',true)" onclick="sdeptToggleNode(\'' + company.id + '\')">' +
            '<span class="sdept-node-toggle">' + (expanded ? '▾' : '▸') + '</span>' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" style="flex-shrink:0"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' +
            '<span class="sdept-node-label">' + company.code + '. ' + company.name + '</span>' +
            '</div>';
        if (expanded) {
            // 루트 부서: parentId 없거나, 부모가 다른 법인 소속(cross-company 배치)인 경우
            var rootDepts = sdeptDepts.filter(function(d){
                if (d.companyId !== company.id) return false;
                if (!d.parentId) return true;
                var parentDept = sdeptDepts.find(function(p){ return p.id === d.parentId; });
                return !parentDept || parentDept.companyId !== company.id;
            });
            html += sdeptRenderDeptNodes(rootDepts, q, 1);
        }
        html += '</div>';
    });
    tree.innerHTML = html || '<div style="padding:20px;color:#bbb;font-size:12px;text-align:center;">등록된 조직이 없습니다.</div>';
}

function sdeptRenderDeptNodes(depts, q, level) {
    var html = '';
    depts.forEach(function(dept) {
        var children = sdeptDepts.filter(function(d){ return d.parentId === dept.id; });
        if (q && dept.name.toLowerCase().indexOf(q) < 0 && dept.code.toLowerCase().indexOf(q) < 0) {
            var childHtml = sdeptRenderDeptNodes(children, q, level + 1);
            if (childHtml) html += childHtml;
            return;
        }
        var hasChildren = children.length > 0;
        var expanded    = sdeptExpandedIds[dept.id] !== false;
        var isSelected  = dept.id === sdeptSelectedId;
        var typeMeta    = SDEPT_TYPE_META[dept.type] || SDEPT_TYPE_META['팀'];
        var refDate     = sdeptGetRefDate();
        var isActive    = sdeptIsActiveOn(dept, refDate);
        // 상태 판정
        var statusBadge = '';
        if (dept.startDate && dept.startDate > refDate) {
            statusBadge = '<span style="font-size:10px;color:#3D8EF0;border:1px solid #3D8EF0;border-radius:4px;padding:1px 5px;margin-left:4px;flex-shrink:0;">예정 ' + dept.startDate + '</span>';
        } else if (dept.endDate && dept.endDate < refDate) {
            statusBadge = '<span style="font-size:10px;color:#bbb;border:1px solid #ddd;border-radius:4px;padding:1px 5px;margin-left:4px;flex-shrink:0;">종료 ' + dept.endDate + '</span>';
        }
        var rowOpacity  = isActive ? '1' : '0.45';
        // 센터: 연결 사업장 배지 표시
        var wpBadge = '';
        if (dept.type === '센터' && dept.workplaceId) {
            var wp = sdeptWorkplaces.find(function(w){ return w.id === dept.workplaceId; });
            if (wp) wpBadge = '<span style="font-size:10px;color:#fff;background:' + typeMeta.color + ';border-radius:4px;padding:1px 6px;margin-left:5px;flex-shrink:0;">' + wp.name + '</span>';
        }
        // 관리자 배지
        var mgrBadge = '';
        if (dept.managerName) {
            mgrBadge = '<span style="font-size:10px;color:#888;margin-left:5px;flex-shrink:0;">👤 ' + dept.managerName + '</span>';
        }
        // 타입 배지 (본사/본부/Function)
        var typeBadge = '';
        if (['본사','본부','Function'].indexOf(dept.type) !== -1) {
            typeBadge = '<span style="font-size:10px;color:' + typeMeta.color + ';border:1px solid ' + typeMeta.color + ';border-radius:4px;padding:1px 5px;margin-left:5px;flex-shrink:0;">' + dept.type + '</span>';
        }
        html += '<div class="sdept-node sdept-node-dept" style="padding-left:' + (level * 14) + 'px;opacity:' + rowOpacity + '">' +
            '<div class="sdept-node-row' + (isSelected ? ' selected' : '') + '" data-drop-id="' + dept.id + '" draggable="true" ondragstart="sdeptDragStart(event,\'' + dept.id + '\')" ondragover="sdeptDragOver(event,\'' + dept.id + '\')" ondragleave="sdeptDragLeave(event,\'' + dept.id + '\')" ondrop="sdeptDrop(event,\'' + dept.id + '\',false)" ondragend="sdeptDragEnd(event)" onclick="sdeptSelectDept(\'' + dept.id + '\')">' +
            (hasChildren
                ? '<span class="sdept-node-toggle" onclick="event.stopPropagation();sdeptToggleNode(\'' + dept.id + '\')">' + (expanded ? '▾' : '▸') + '</span>'
                : '<span class="sdept-node-toggle-empty"></span>') +
            sdeptTypeIcon(dept.type, isSelected) +
            '<span class="sdept-node-label' + (isSelected ? ' sel' : '') + '" style="color:' + (isSelected ? '#3D8EF0' : isActive ? typeMeta.color : '#bbb') + '">' + (dept.code ? dept.code + '. ' : '') + dept.name + '</span>' +
            typeBadge + wpBadge + mgrBadge + statusBadge +
            '</div>';
        if (hasChildren && expanded) {
            html += sdeptRenderDeptNodes(children, q, level + 1);
        }
        html += '</div>';
    });
    return html;
}

function sdeptPickManager() {
    document.getElementById('sdept-mgr-search').value = '';
    sdeptMgrSearch();
    document.getElementById('sdept-mgr-modal').style.display = 'flex';
}

function sdeptMgrSearch() {
    var q = (document.getElementById('sdept-mgr-search').value || '').toLowerCase().trim();
    var list = document.getElementById('sdept-mgr-list');
    if (!list) return;
    var filtered = employees.filter(function(e){
        if (!e.name) return false;
        var ext = hrExtData[e.id] || {};
        if (ext.status === '퇴직') return false;
        if (!q) return true;
        return e.name.toLowerCase().includes(q) || e.id.toLowerCase().includes(q);
    });
    if (!filtered.length) {
        list.innerHTML = '<div style="padding:16px;text-align:center;color:#bbb;font-size:0.88rem;">검색 결과가 없습니다.</div>';
        return;
    }
    list.innerHTML = filtered.map(function(e){
        var ext = hrExtData[e.id] || {};
        return '<div onclick="sdeptSelectManager(\'' + e.id + '\',\'' + e.name + '\')" style="display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:8px;cursor:pointer;" onmouseover="this.style.background=\'#f7f8fa\'" onmouseout="this.style.background=\'\'">'+
            '<div style="width:32px;height:32px;border-radius:50%;background:#F36178;color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + e.name.charAt(0) + '</div>'+
            '<div><div style="font-size:0.9rem;font-weight:600;color:#222;">' + e.name + '</div><div style="font-size:0.78rem;color:#999;">' + e.id + (e.department ? ' · ' + e.department : '') + '</div></div>'+
            '</div>';
    }).join('');
}

function sdeptSelectManager(empId, empName) {
    document.getElementById('sdf-manager-id').value   = empId;
    document.getElementById('sdf-manager-name').value = empName;
    document.getElementById('sdept-mgr-modal').style.display = 'none';
}

function sdeptClearManager() {
    document.getElementById('sdf-manager-id').value   = '';
    document.getElementById('sdf-manager-name').value = '';
}

function sdeptTypeChange() {
    var type = (document.getElementById('sdf-type') || {}).value || '';
    var wpRow   = document.getElementById('sdf-wp-row');
    var wpLabel = document.getElementById('sdf-wp-label');
    if (!wpRow) return;
    if (type === '본사' || type === '본부' || type === 'Function') {
        wpRow.style.display = 'none';
    } else {
        wpRow.style.display = '';
        if (wpLabel) wpLabel.textContent = (type === '센터') ? '연결 사업장' : '소속 사업장';
    }
}

function sdeptToggleNode(id) {
    sdeptExpandedIds[id] = !sdeptExpandedIds[id];
    sdeptRenderTree();
}

function sdeptExpandAll() {
    sdeptCompanies.forEach(function(c){ sdeptExpandedIds[c.id] = true; });
    sdeptWorkplaces.forEach(function(w){ sdeptExpandedIds[w.id] = true; });
    sdeptDepts.forEach(function(d){ sdeptExpandedIds[d.id] = true; });
    sdeptRenderTree();
}

function sdeptBuildCompanySel(selectedCompanyId) {
    var sel = document.getElementById('sdf-company');
    if (!sel) return;
    sel.innerHTML = sdeptCompanies.map(function(c) {
        return '<option value="' + c.id + '">' + c.name + '</option>';
    }).join('');
    if (selectedCompanyId) sel.value = selectedCompanyId;
}

function sdeptCompanyChange() {
    var sel = document.getElementById('sdf-company');
    if (!sel) return;
    sdeptBuildWpSel(sel.value, '');
}

// sdf-workplace select를 해당 회사의 사업장 목록으로 채우고 선택값 세팅
function sdeptBuildWpSel(companyId, selectedWpId) {
    var sel = document.getElementById('sdf-workplace');
    if (!sel) return;
    var wps = sdeptWorkplaces.filter(function(w){ return w.companyId === companyId; });
    sel.innerHTML = wps.map(function(w){
        return '<option value="' + w.id + '">' + w.name + '</option>';
    }).join('');
    if (selectedWpId) sel.value = selectedWpId;
}

function sdeptSelectDept(id) {
    sdeptSelectedId = id;
    sdeptAddMode = false;
    var dept = sdeptDepts.find(function(d){ return d.id === id; });
    if (!dept) return;
    sdeptRenderTree();
    sdeptShowDetail(dept);
}

function sdeptShowDetail(dept) {
    document.getElementById('sdept-right').style.display = 'flex';
    document.getElementById('sdept-empty').style.display = 'none';
    var parent  = dept.parentId ? sdeptDepts.find(function(d){ return d.id === dept.parentId; }) : null;
    sdeptBuildCompanySel(dept.companyId);
    document.getElementById('sdf-parent').value    = parent    ? parent.name    : '';
    document.getElementById('sdf-code').value      = dept.code      || '';
    buildCodeSelect('sdf-type', 'DEPT_TYPE', dept.type || '부서');
    sdeptTypeChange();
    sdeptBuildWpSel(dept.companyId, dept.workplaceId);
    document.getElementById('sdf-name').value         = dept.name        || '';
    document.getElementById('sdf-shortname').value    = dept.shortName   || '';
    setDateVal('sdf-start-date', dept.startDate || '');
    setDateVal('sdf-end-date',   dept.endDate   || '');
    document.getElementById('sdf-manager-id').value   = dept.managerId   || '';
    document.getElementById('sdf-manager-name').value = dept.managerName || '';
    sdeptSwitchTab('basic', document.querySelector('.sdept-tab'));
    sdeptRenderMembers(dept.id);
}

function sdeptRenderMembers(deptId) {
    var dept = sdeptDepts.find(function(d){ return d.id === deptId; });
    if (!dept) return;
    var members = employees.filter(function(e){ return e.department === dept.name; });
    var list = document.getElementById('sdept-members-list');
    if (!list) return;
    if (members.length === 0) {
        list.innerHTML = '<div class="sdept-no-members">소속 직원이 없습니다.</div>';
        return;
    }
    list.innerHTML =
        '<table class="sdept-members-tbl"><thead><tr><th>사번</th><th>이름</th><th>직책</th><th>이메일</th></tr></thead><tbody>' +
        members.map(function(e){
            return '<tr><td>' + e.id + '</td><td>' + e.name + '</td><td>' + (e.position||'-') + '</td><td>' + (e.email||'-') + '</td></tr>';
        }).join('') + '</tbody></table>';
}

function sdeptCloseDetail() {
    sdeptSelectedId = null;
    sdeptAddMode = false;
    document.getElementById('sdept-right').style.display = 'none';
    document.getElementById('sdept-empty').style.display = 'flex';
    sdeptRenderTree();
}

function sdeptSwitchTab(tabId, btn) {
    document.querySelectorAll('.sdept-tab-body').forEach(function(el){ el.style.display = 'none'; });
    document.querySelectorAll('.sdept-tab').forEach(function(el){ el.classList.remove('active'); });
    var body = document.getElementById('sdept-tab-' + tabId);
    if (body) body.style.display = 'block';
    if (btn) btn.classList.add('active');
}

function sdeptClearSelection() {
    sdeptSelectedId = null;
    sdeptAddMode = false;
    sdeptAddParentId = null;
    var r = document.getElementById('sdept-right');
    var e = document.getElementById('sdept-empty');
    if (r) r.style.display = 'none';
    if (e) e.style.display = 'flex';
}

function sdeptOpenAdd() {
    // 드롭다운에서 선택된 회사 사용 (항상 첫 번째가 아닌 현재 선택된 회사)
    var selCorpId = ((document.getElementById('sdept-corp-sel') || {}).value) || (sdeptCompanies[0] && sdeptCompanies[0].id) || '';
    var company   = sdeptCompanies.find(function(c){ return c.id === selCorpId; }) || sdeptCompanies[0];

    // 현재 선택된 부서가 같은 회사 소속일 때만 상위부서로 사용
    var parentDeptId = sdeptSelectedId;
    var parentDept   = parentDeptId ? sdeptDepts.find(function(d){ return d.id === parentDeptId; }) : null;
    if (parentDept && parentDept.companyId !== (company ? company.id : '')) {
        parentDept = null;
        parentDeptId = null;
    }
    sdeptAddParentId = parentDeptId || null;

    // 사업장: 같은 회사 소속 사업장만 사용 (다른 회사 사업장으로 fallback 금지)
    var companyId = company ? company.id : '';
    var workplace = (parentDept && sdeptWorkplaces.find(function(w){ return w.id === parentDept.workplaceId && w.companyId === companyId; }))
                 || sdeptWorkplaces.find(function(w){ return w.companyId === companyId; })
                 || null;

    sdeptSelectedId = null;
    sdeptAddMode = true;
    document.getElementById('sdept-right').style.display = 'flex';
    document.getElementById('sdept-empty').style.display = 'none';
    sdeptRenderTree();

    sdeptBuildCompanySel(companyId);
    sdeptBuildWpSel(companyId, workplace ? workplace.id : '');
    document.getElementById('sdf-parent').value  = parentDept ? parentDept.name : '';
    document.getElementById('sdf-code').value      = '';
    buildCodeSelect('sdf-type', 'DEPT_TYPE', '부서');
    sdeptTypeChange();
    document.getElementById('sdf-name').value         = '';
    document.getElementById('sdf-shortname').value    = '';
    setDateVal('sdf-start-date', new Date().toISOString().split('T')[0]);
    setDateVal('sdf-end-date',   '');
    document.getElementById('sdf-manager-id').value   = '';
    document.getElementById('sdf-manager-name').value = '';
    sdeptSwitchTab('basic', document.querySelector('.sdept-tab'));
    setTimeout(function(){ var n = document.getElementById('sdf-name'); if(n) n.focus(); }, 50);
}

function sdeptSave() {
    var name      = (document.getElementById('sdf-name').value      || '').trim();
    var code      = (document.getElementById('sdf-code').value      || '').trim();
    var type      = document.getElementById('sdf-type').value;
    var shortName = (document.getElementById('sdf-shortname').value || '').trim() || name;
    var activeEl  = document.querySelector('input[name="sdf-active"]:checked');
    var active    = !activeEl || activeEl.value !== 'N';
    if (!name) { showToast('부서명을 입력해주세요.', 'error'); return; }
    if (!code) { showToast('부서코드를 입력해주세요.', 'error'); return; }
    // 폼의 회사 선택 기준으로 company/workplace 결정
    var selCorpId = ((document.getElementById('sdf-company') || {}).value) || (sdeptCompanies[0] && sdeptCompanies[0].id) || '';
    var company     = sdeptCompanies.find(function(c){ return c.id === selCorpId; }) || sdeptCompanies[0];
    var selWpId     = ((document.getElementById('sdf-workplace') || {}).value) || '';
    var workplace   = sdeptWorkplaces.find(function(w){ return w.id === selWpId; }) || null;
    // 같은 회사 내 코드/이름 중복 체크
    var companyId2 = company ? company.id : '';
    var excludeId  = sdeptAddMode ? null : sdeptSelectedId;
    var dupCode = sdeptDepts.find(function(d){ return d.companyId === companyId2 && d.code === code && d.id !== excludeId; });
    if (dupCode) { showToast('"' + code + '" 코드는 이미 사용 중입니다.', 'error'); return; }
    var dupName = sdeptDepts.find(function(d){ return d.companyId === companyId2 && d.name === name && d.id !== excludeId; });
    if (dupName) { showToast('"' + name + '" 부서명은 이미 사용 중입니다.', 'error'); return; }
    var startDate  = (document.getElementById('sdf-start-date').value  || '').trim() || new Date().toISOString().split('T')[0];
    var endDate    = (document.getElementById('sdf-end-date').value    || '').trim() || null;
    var managerId  = (document.getElementById('sdf-manager-id').value  || '').trim() || null;
    var managerName= (document.getElementById('sdf-manager-name').value|| '').trim() || null;
    if (endDate && endDate < startDate) { showToast('종료일이 시작일보다 앞설 수 없습니다.', 'error'); return; }
    if (sdeptAddMode) {
        var newId = 'DP' + Date.now();
        sdeptDepts.push({ id:newId, code:code, name:name, shortName:shortName, type:type,
            parentId: sdeptAddParentId || null,
            companyId: company ? company.id : '',
            workplaceId: workplace ? workplace.id : '',
            startDate: startDate, endDate: endDate,
            managerId: managerId, managerName: managerName,
            active: true });
        sdeptSelectedId = newId;
        sdeptAddMode = false;
        sdeptAddParentId = null;
        sdeptExpandedIds[newId] = true;
    } else if (sdeptSelectedId) {
        var dept = sdeptDepts.find(function(d){ return d.id === sdeptSelectedId; });
        if (dept) {
            dept.code = code; dept.name = name; dept.shortName = shortName; dept.type = type;
            dept.startDate = startDate; dept.endDate = endDate;
            dept.managerId = managerId; dept.managerName = managerName;
            dept.active = sdeptIsActiveOn(dept, new Date().toISOString().split('T')[0]);
        }
    }
    sdeptPersist();
    sdeptRenderTree();
    _hrBuildCodeDropdowns();
    showToast('저장되었습니다.', 'success');
}

async function sdeptDelete() {
    if (!sdeptSelectedId) return;
    var dept = sdeptDepts.find(function(d){ return d.id === sdeptSelectedId; });
    if (!dept) return;
    // 같은 이름의 다른 부서가 있으면 직원이 어느 쪽 소속인지 특정 불가 → 이름 중복 시 체크 생략
    var duplicateName = sdeptDepts.some(function(d){ return d.name === dept.name && d.id !== dept.id; });
    if (!duplicateName) {
        var usedCount = employees.filter(function(e){ return e.department === dept.name; }).length;
        if (usedCount > 0) {
            showToast('"' + dept.name + '"에 소속 직원이 ' + usedCount + '명 있어 삭제할 수 없습니다.', 'error');
            return;
        }
    }
    if (sdeptDepts.some(function(d){ return d.parentId === sdeptSelectedId; })) {
        showToast('하위 부서가 있어 삭제할 수 없습니다.', 'error');
        return;
    }
    if (!await showConfirm('"' + dept.name + '" 부서를 삭제하시겠습니까?')) return;
    sdeptDepts = sdeptDepts.filter(function(d){ return d.id !== sdeptSelectedId; });
    sdeptPersist();
    sdeptSelectedId = null;
    document.getElementById('sdept-right').style.display = 'none';
    document.getElementById('sdept-empty').style.display = 'flex';
    sdeptRenderTree();
    _hrBuildCodeDropdowns();
    showToast('삭제되었습니다.', 'success');
}

// =====================================================================
// ===== 사업장관리 (sys-workplace) =====
// =====================================================================

var swpList        = [];
var swpCompanies   = [];
var swpSelectedId  = null;
var swpAddMode     = false;

function swpEnsureData() {
    var saved = localStorage.getItem('swpData_v1');
    if (saved) {
        try { swpList = JSON.parse(saved); } catch(e) { swpList = []; }
    } else {
        // 기존 sdeptData_v1의 workplaces를 마이그레이션
        var deptRaw = localStorage.getItem('sdeptData_v1');
        if (deptRaw) {
            try {
                var d = JSON.parse(deptRaw);
                if (d.workplaces && d.workplaces.length) {
                    swpList = d.workplaces.map(function(w){
                        return { id:w.id, code:w.code, name:w.name, shortName:w.shortName||'',
                            companyId:w.companyId, isHead:true, showOrg:true,
                            biztype:'', bizitem:'', phone:'', fax:'', biznum:'', corpnum:'',
                            established:'', closed:'', repname:'', repid:'',
                            zipcode:'', address1:'', address2:'', taxoffice:'', sort:1,
                            mainbizcode:'', taxreportdiv:'0', localtaxadmin:'', localtaxlegal:'',
                            ereportid:'', liquorcode:'0', ezipcode:'', ecity:'', edistrict:'',
                            eroad:'', ebldno:'', reportphone:'', reportmobile:'', email:'',
                            sender:'', sealCorp:'', sealUse:'', sealStamp:'', sealLogo:'',
                            active: w.active !== false };
                    });
                }
            } catch(e) {}
        }
        if (!swpList.length) {
            swpList = [{ id:'WP001', code:'1001', name:'케어링 본사', shortName:'', companyId:'CO001',
                isHead:true, showOrg:true, biztype:'', bizitem:'', phone:'', fax:'',
                biznum:'', corpnum:'', established:'', closed:'', repname:'', repid:'',
                zipcode:'', address1:'', address2:'', taxoffice:'', sort:1,
                mainbizcode:'', taxreportdiv:'0', localtaxadmin:'', localtaxlegal:'',
                ereportid:'', liquorcode:'0', ezipcode:'', ecity:'', edistrict:'',
                eroad:'', ebldno:'', reportphone:'', reportmobile:'', email:'',
                sender:'', sealCorp:'', sealUse:'', sealStamp:'', sealLogo:'', active:true }];
        }
        swpPersist();
    }
    if (!swpList.length) {
        swpList = [{ id:'WP001', code:'1001', name:'케어링 본사', shortName:'', companyId:'CO001', isHead:true, showOrg:true, active:true }];
        swpPersist();
    }
}

function swpPersist() {
    localStorage.setItem('swpData_v1', JSON.stringify(swpList));
    // 메모리 동기화만 (sdeptPersist 호출 금지 — dept 데이터 덮어쓰기 방지)
    if (typeof sdeptWorkplaces !== 'undefined') {
        sdeptWorkplaces = swpList.map(function(w){
            return { id:w.id, code:w.code, name:w.name, companyId:w.companyId, active:w.active !== false };
        });
    }
}

function swpInit() {
    // 회사정보 동기화
    swpCompanies = [];
    var scompRaw = localStorage.getItem('scompData_v1');
    if (scompRaw) {
        try {
            var arr = JSON.parse(scompRaw);
            if (Array.isArray(arr) && arr.length) {
                swpCompanies = arr.map(function(c){
                    return { id:c.id, code:c.code, name:c.name };
                });
            }
        } catch(e) {}
    }
    swpEnsureData();
    swpBuildCorpSel();
    swpRenderList();
    if (!swpSelectedId) {
        document.getElementById('swp-right').style.display = 'none';
        document.getElementById('swp-empty').style.display = 'flex';
    }
}

function swpBuildCorpSel() {
    var sel = document.getElementById('swp-corp-sel');
    if (!sel) return;
    var cur = sel.value;
    sel.innerHTML = '<option value="">전체</option>' +
        swpCompanies.map(function(c){
            return '<option value="' + c.id + '">' + c.code + '. ' + c.name + '</option>';
        }).join('');
    sel.value = cur;
    // 상세 폼의 회사선택 드롭다운도 갱신
    var fsel = document.getElementById('swf-company');
    if (fsel) {
        fsel.innerHTML = swpCompanies.map(function(c){
            return '<option value="' + c.id + '">' + c.code + '. ' + c.name + '</option>';
        }).join('');
    }
}

function swpRenderList() {
    var q      = ((document.getElementById('swp-search') || {}).value || '').toLowerCase().trim();
    var corpId = ((document.getElementById('swp-corp-sel') || {}).value) || '';
    var sort   = ((document.getElementById('swp-sort-sel') || {}).value) || 'code';
    var filtered = swpList.filter(function(w) {
        if (corpId && w.companyId !== corpId) return false;
        return !q || (w.code||'').toLowerCase().indexOf(q) >= 0 || (w.name||'').toLowerCase().indexOf(q) >= 0;
    }).slice().sort(function(a, b) {
        var av = sort === 'name' ? (a.name||'') : (a.code||'');
        var bv = sort === 'name' ? (b.name||'') : (b.code||'');
        return av < bv ? -1 : av > bv ? 1 : 0;
    });
    var stats = document.getElementById('swp-stats');
    if (stats) stats.textContent = '사업장 ' + filtered.length + '건';
    var list = document.getElementById('swp-list');
    if (!list) return;
    if (!filtered.length) {
        list.innerHTML = '<div style="padding:30px;text-align:center;color:#bbb;font-size:12px;">검색 결과가 없습니다.</div>';
        return;
    }
    list.innerHTML = filtered.map(function(w) {
        var corp = swpCompanies.find(function(c){ return c.id === w.companyId; });
        var sel  = w.id === swpSelectedId ? ' selected' : '';
        return '<div class="swp-item' + sel + '" onclick="swpSelect(\'' + w.id + '\')">' +
            '<div class="swp-item-top">' +
            '<span class="swp-item-code">' + (w.code||'') + '</span>' +
            '<span class="swp-item-rep">' + (w.repname||'') + '</span>' +
            '</div>' +
            '<div class="swp-item-name">' + (w.name||'') + '</div>' +
            '<div class="swp-item-corp">' + (corp ? corp.name : '') + '</div>' +
            '</div>';
    }).join('');
}

function swpSelect(id) {
    swpSelectedId = id;
    swpAddMode = false;
    var w = swpList.find(function(x){ return x.id === id; });
    if (!w) return;
    swpRenderList();
    swpShowDetail(w);
}

function swpShowDetail(w) {
    document.getElementById('swp-right').style.display = 'flex';
    document.getElementById('swp-empty').style.display = 'none';
    var fsel = document.getElementById('swf-company');
    if (fsel) fsel.value = w.companyId || '';
    document.getElementById('swf-code').value        = w.code        || '';
    document.getElementById('swf-name').value        = w.name        || '';
    document.getElementById('swf-shortname').value   = w.shortName   || '';
    document.getElementById('swf-biztype').value     = w.biztype     || '';
    document.getElementById('swf-bizitem').value     = w.bizitem     || '';
    document.getElementById('swf-phone').value       = w.phone       || '';
    document.getElementById('swf-fax').value         = w.fax         || '';
    document.getElementById('swf-biznum').value      = w.biznum      || '';
    document.getElementById('swf-corpnum').value     = w.corpnum     || '';
    document.getElementById('swf-established').value = w.established || '';
    document.getElementById('swf-closed').value      = w.closed      || '';
    document.getElementById('swf-repname').value     = w.repname     || '';
    document.getElementById('swf-repid').value       = w.repid       || '';
    document.getElementById('swf-zipcode').value     = w.zipcode     || '';
    document.getElementById('swf-address1').value    = w.address1    || '';
    document.getElementById('swf-address2').value    = w.address2    || '';
    document.getElementById('swf-taxoffice').value   = w.taxoffice   || '';
    document.getElementById('swf-sort').value        = w.sort !== undefined ? w.sort : '';
    document.getElementById('swf-mainbizcode').value  = w.mainbizcode  || '';
    document.getElementById('swf-taxreportdiv').value = w.taxreportdiv || '0';
    document.getElementById('swf-localtaxadmin').value = w.localtaxadmin || '';
    document.getElementById('swf-localtaxlegal').value = w.localtaxlegal || '';
    document.getElementById('swf-ereportid').value   = w.ereportid   || '';
    document.getElementById('swf-liquorcode').value  = w.liquorcode  || '0';
    document.getElementById('swf-ezipcode').value    = w.ezipcode    || '';
    document.getElementById('swf-ecity').value       = w.ecity       || '';
    document.getElementById('swf-edistrict').value   = w.edistrict   || '';
    document.getElementById('swf-eroad').value       = w.eroad       || '';
    document.getElementById('swf-ebldno').value      = w.ebldno      || '';
    document.getElementById('swf-reportphone').value = w.reportphone || '';
    document.getElementById('swf-reportmobile').value = w.reportmobile || '';
    document.getElementById('swf-email').value       = w.email       || '';
    document.getElementById('swf-sender').value      = w.sender      || '';
    document.querySelectorAll('input[name="swf-head"]').forEach(function(r){ r.checked = r.value === (w.isHead ? 'Y' : 'N'); });
    document.querySelectorAll('input[name="swf-active"]').forEach(function(r){ r.checked = r.value === (w.active !== false ? 'Y' : 'N'); });
    document.querySelectorAll('input[name="swf-showorg"]').forEach(function(r){ r.checked = r.value === (w.showOrg !== false ? 'Y' : 'N'); });
    var ftSel = document.getElementById('swf-facility-type');
    if (ftSel) ftSel.value = w.facilityType || '';
    swpHeadChange();
    swpSetSeal('swf-seal-corp-img', 'swf-seal-corp-ph', w.sealCorp);
    swpSetSeal('swf-seal-use-img',  'swf-seal-use-ph',  w.sealUse);
    swpSetSeal('swf-seal-stamp-img','swf-seal-stamp-ph',w.sealStamp);
    swpSetSeal('swf-seal-logo-img', 'swf-seal-logo-ph', w.sealLogo);
    document.getElementById('swf-seal-corp').value  = w.sealCorp  || '';
    document.getElementById('swf-seal-use').value   = w.sealUse   || '';
    document.getElementById('swf-seal-stamp').value = w.sealStamp || '';
    document.getElementById('swf-seal-logo').value  = w.sealLogo  || '';
}

function swpOpenAdd() {
    swpSelectedId = null;
    swpAddMode = true;
    document.getElementById('swp-right').style.display = 'flex';
    document.getElementById('swp-empty').style.display = 'none';
    swpRenderList();
    ['swf-code','swf-name','swf-shortname','swf-biztype','swf-bizitem','swf-phone','swf-fax',
     'swf-biznum','swf-corpnum','swf-established','swf-closed','swf-repname','swf-repid',
     'swf-zipcode','swf-address1','swf-address2','swf-taxoffice','swf-sort',
     'swf-mainbizcode','swf-localtaxadmin','swf-localtaxlegal','swf-ereportid',
     'swf-ezipcode','swf-ecity','swf-edistrict','swf-eroad','swf-ebldno',
     'swf-reportphone','swf-reportmobile','swf-email','swf-sender'].forEach(function(id) {
        var el = document.getElementById(id); if (el) el.value = '';
    });
    document.getElementById('swf-taxreportdiv').value = '0';
    document.getElementById('swf-liquorcode').value = '0';
    document.querySelectorAll('input[name="swf-head"]').forEach(function(r){ r.checked = r.value === 'Y'; });
    document.querySelectorAll('input[name="swf-active"]').forEach(function(r){ r.checked = r.value === 'Y'; });
    document.querySelectorAll('input[name="swf-showorg"]').forEach(function(r){ r.checked = r.value === 'Y'; });
    var ftSel = document.getElementById('swf-facility-type');
    if (ftSel) ftSel.value = '';
    swpHeadChange();
    swpSetSeal('swf-seal-corp-img','swf-seal-corp-ph','');
    swpSetSeal('swf-seal-use-img', 'swf-seal-use-ph', '');
    swpSetSeal('swf-seal-stamp-img','swf-seal-stamp-ph','');
    swpSetSeal('swf-seal-logo-img','swf-seal-logo-ph','');
    ['swf-seal-corp','swf-seal-use','swf-seal-stamp','swf-seal-logo'].forEach(function(id){
        var el = document.getElementById(id); if (el) el.value = '';
    });
    // 현재 선택된 법인으로 설정
    var corpSel = document.getElementById('swp-corp-sel');
    var fsel = document.getElementById('swf-company');
    if (fsel && corpSel && corpSel.value) fsel.value = corpSel.value;
    setTimeout(function(){ var n = document.getElementById('swf-name'); if(n) n.focus(); }, 50);
}

function swpHeadChange() {
    var headEl = document.querySelector('input[name="swf-head"]:checked');
    var isHead = !headEl || headEl.value !== 'N';
    var span = document.getElementById('swf-facility-span');
    if (span) span.style.visibility = isHead ? 'hidden' : 'visible';
    if (isHead) {
        var ft = document.getElementById('swf-facility-type');
        if (ft) ft.value = '';
    }
}

function swpSave() {
    var name = (document.getElementById('swf-name').value || '').trim();
    var code = (document.getElementById('swf-code').value || '').trim();
    if (!name) { showToast('사업장명을 입력해주세요.', 'error'); return; }
    var headEl   = document.querySelector('input[name="swf-head"]:checked');
    var activeEl = document.querySelector('input[name="swf-active"]:checked');
    var showEl   = document.querySelector('input[name="swf-showorg"]:checked');
    var data = {
        code:         code,
        name:         name,
        shortName:    (document.getElementById('swf-shortname').value  || '').trim(),
        companyId:    document.getElementById('swf-company').value     || '',
        isHead:       !headEl   || headEl.value   !== 'N',
        active:       !activeEl || activeEl.value !== 'N',
        showOrg:      !showEl   || showEl.value   !== 'N',
        biztype:      document.getElementById('swf-biztype').value     || '',
        bizitem:      document.getElementById('swf-bizitem').value     || '',
        phone:        document.getElementById('swf-phone').value       || '',
        fax:          document.getElementById('swf-fax').value         || '',
        biznum:       document.getElementById('swf-biznum').value      || '',
        corpnum:      document.getElementById('swf-corpnum').value     || '',
        established:  document.getElementById('swf-established').value || '',
        closed:       document.getElementById('swf-closed').value      || '',
        repname:      document.getElementById('swf-repname').value     || '',
        repid:        document.getElementById('swf-repid').value       || '',
        zipcode:      document.getElementById('swf-zipcode').value     || '',
        address1:     document.getElementById('swf-address1').value    || '',
        address2:     document.getElementById('swf-address2').value    || '',
        taxoffice:    document.getElementById('swf-taxoffice').value   || '',
        sort:         parseInt(document.getElementById('swf-sort').value) || 0,
        mainbizcode:  document.getElementById('swf-mainbizcode').value  || '',
        taxreportdiv: document.getElementById('swf-taxreportdiv').value || '0',
        localtaxadmin: document.getElementById('swf-localtaxadmin').value || '',
        localtaxlegal: document.getElementById('swf-localtaxlegal').value || '',
        ereportid:    document.getElementById('swf-ereportid').value   || '',
        liquorcode:   document.getElementById('swf-liquorcode').value  || '0',
        ezipcode:     document.getElementById('swf-ezipcode').value    || '',
        ecity:        document.getElementById('swf-ecity').value       || '',
        edistrict:    document.getElementById('swf-edistrict').value   || '',
        eroad:        document.getElementById('swf-eroad').value       || '',
        ebldno:       document.getElementById('swf-ebldno').value      || '',
        reportphone:  document.getElementById('swf-reportphone').value || '',
        reportmobile: document.getElementById('swf-reportmobile').value|| '',
        email:        document.getElementById('swf-email').value       || '',
        sender:       document.getElementById('swf-sender').value      || '',
        sealCorp:     document.getElementById('swf-seal-corp').value   || '',
        sealUse:      document.getElementById('swf-seal-use').value    || '',
        sealStamp:    document.getElementById('swf-seal-stamp').value  || '',
        sealLogo:     document.getElementById('swf-seal-logo').value   || '',
        facilityType: document.getElementById('swf-facility-type').value || ''
    };
    if (swpAddMode) {
        data.id = 'WP' + Date.now();
        swpList.push(data);
        swpSelectedId = data.id;
        swpAddMode = false;
    } else if (swpSelectedId) {
        var idx = swpList.findIndex(function(x){ return x.id === swpSelectedId; });
        if (idx >= 0) { data.id = swpSelectedId; swpList[idx] = data; }
    }
    swpPersist();
    swpRenderList();
    showToast('저장되었습니다.', 'success');
}

async function swpDelete() {
    if (!swpSelectedId) return;
    var w = swpList.find(function(x){ return x.id === swpSelectedId; });
    if (!w) return;
    if (!await showConfirm('"' + w.name + '" 사업장을 삭제하시겠습니까?')) return;
    swpList = swpList.filter(function(x){ return x.id !== swpSelectedId; });
    swpPersist();
    swpSelectedId = null;
    document.getElementById('swp-right').style.display = 'none';
    document.getElementById('swp-empty').style.display = 'flex';
    swpRenderList();
    showToast('삭제되었습니다.', 'success');
}

function swpCloseDetail() {
    swpSelectedId = null;
    swpAddMode = false;
    document.getElementById('swp-right').style.display = 'none';
    document.getElementById('swp-empty').style.display = 'flex';
    swpRenderList();
}

function swpSealPreview(input, imgId, phId, hiddenId) {
    if (!input.files || !input.files[0]) return;
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.getElementById(imgId);
        var ph  = document.getElementById(phId);
        var hid = document.getElementById(hiddenId);
        if (img) { img.src = e.target.result; img.style.display = 'block'; }
        if (ph)  { ph.style.display = 'none'; }
        if (hid) { hid.value = e.target.result; }
    };
    reader.readAsDataURL(input.files[0]);
}

function swpSetSeal(imgId, phId, dataUrl) {
    var img = document.getElementById(imgId);
    var ph  = document.getElementById(phId);
    if (dataUrl) {
        if (img) { img.src = dataUrl; img.style.display = 'block'; }
        if (ph)  ph.style.display = 'none';
    } else {
        if (img) { img.src = ''; img.style.display = 'none'; }
        if (ph)  ph.style.display = '';
    }
}

// =====================================================================
// ===== 회사관리 (sys-company) =====
// =====================================================================

var SCOMP_SEED = [
    { id:'CO001', code:'1000', name:'케어링(주)', shortName:'케어링', type:'법인',
      biztype:'', bizitem:'', phone:'', fax:'', biznum:'', corpnum:'',
      established:'', repname:'', address:'', homepage:'', sort:1, active:true }
];

var scompList = [];
var scompSelectedId = null;
var scompAddMode = false;

function scompEnsureData() {
    var saved = localStorage.getItem('scompData_v1');
    if (saved) {
        try { scompList = JSON.parse(saved); }
        catch(e) { scompList = JSON.parse(JSON.stringify(SCOMP_SEED)); }
    } else {
        scompList = JSON.parse(JSON.stringify(SCOMP_SEED));
        scompPersist();
    }
    if (!scompList.length) {
        scompList = JSON.parse(JSON.stringify(SCOMP_SEED));
        scompPersist();
    }
}

function scompPersist() {
    localStorage.setItem('scompData_v1', JSON.stringify(scompList));
}

function scompInit() {
    scompEnsureData();
    scompRenderList();
    if (!scompSelectedId) {
        document.getElementById('scomp-right').style.display = 'none';
        document.getElementById('scomp-empty').style.display = 'flex';
    }
}

function scompRenderList() {
    var q    = ((document.getElementById('scomp-search') || {}).value || '').toLowerCase().trim();
    var sort = ((document.getElementById('scomp-sort-sel') || {}).value) || 'code';
    var filtered = scompList.filter(function(c) {
        return !q || c.code.toLowerCase().indexOf(q) >= 0 || c.name.toLowerCase().indexOf(q) >= 0;
    }).slice().sort(function(a, b) {
        return sort === 'name' ? a.name.localeCompare(b.name) : a.code.localeCompare(b.code);
    });

    var total  = scompList.length;
    var active = scompList.filter(function(c){ return c.active; }).length;
    var corp   = scompList.filter(function(c){ return c.type === '법인'; }).length;
    var indiv  = scompList.filter(function(c){ return c.type === '개인'; }).length;
    var stats  = document.getElementById('scomp-stats');
    if (stats) stats.innerHTML = '전체: <b>' + active + '/' + total + '</b>, 법인: <b style="color:#F36178">' + corp + '</b>, 개인: <b style="color:#3D8EF0">' + indiv + '</b>';

    var list = document.getElementById('scomp-list');
    if (!list) return;
    if (filtered.length === 0) {
        list.innerHTML = '<div style="padding:24px;text-align:center;color:#ccc;font-size:12px;">검색 결과가 없습니다.</div>';
        return;
    }
    list.innerHTML = filtered.map(function(c) {
        var sel = c.id === scompSelectedId ? ' selected' : '';
        var badgeCls = c.type === '법인' ? 'corp' : 'indiv';
        return '<div class="scomp-item' + sel + '" onclick="scompSelect(\'' + c.id + '\')">' +
            '<div class="scomp-item-info">' +
            '<div class="scomp-item-code">' + c.code + '</div>' +
            '<div class="scomp-item-name">' + c.name + '</div>' +
            (c.repname ? '<div class="scomp-item-rep">' + c.repname + '</div>' : '') +
            '</div>' +
            '<span class="scomp-type-badge ' + badgeCls + '">' + c.type + '</span>' +
            '</div>';
    }).join('');
}

function scompSelect(id) {
    scompSelectedId = id;
    scompAddMode = false;
    var c = scompList.find(function(x){ return x.id === id; });
    if (!c) return;
    scompRenderList();
    scompShowDetail(c);
}

function scompShowDetail(c) {
    document.getElementById('scomp-right').style.display = 'flex';
    document.getElementById('scomp-empty').style.display = 'none';
    document.getElementById('scf-code').value      = c.code        || '';
    document.getElementById('scf-name').value      = c.name        || '';
    document.getElementById('scf-shortname').value = c.shortName   || '';
    buildCodeSelect('scf-type', 'CO_TYPE', c.type || '법인');
    document.getElementById('scf-biztype').value   = c.biztype     || '';
    document.getElementById('scf-bizitem').value   = c.bizitem     || '';
    document.getElementById('scf-phone').value     = c.phone       || '';
    document.getElementById('scf-fax').value       = c.fax         || '';
    document.getElementById('scf-biznum').value    = c.biznum      || '';
    document.getElementById('scf-corpnum').value   = c.corpnum     || '';
    document.getElementById('scf-established').value = c.established || '';
    document.getElementById('scf-repname').value   = c.repname     || '';
    document.getElementById('scf-address').value   = c.address     || '';
    document.getElementById('scf-homepage').value  = c.homepage    || '';
    document.getElementById('scf-sort').value      = c.sort != null ? c.sort : '';
    document.querySelectorAll('input[name="scf-active"]').forEach(function(r) {
        r.checked = r.value === (c.active ? 'Y' : 'N');
    });
    // 인감 정보
    var senderEl = document.getElementById('scf-sender');
    if (senderEl) senderEl.value = c.sender || '';
    scompSetSeal('seal-corp-img',  'seal-corp-ph',  c.sealCorp  || '');
    scompSetSeal('seal-use-img',   'seal-use-ph',   c.sealUse   || '');
    scompSetSeal('seal-stamp-img', 'seal-stamp-ph', c.sealStamp || '');
    scompSetSeal('seal-logo-img',  'seal-logo-ph',  c.sealLogo  || '');
    var hc = document.getElementById('scf-seal-corp');   if(hc) hc.value = c.sealCorp  || '';
    var hu = document.getElementById('scf-seal-use');    if(hu) hu.value = c.sealUse   || '';
    var hs = document.getElementById('scf-seal-stamp');  if(hs) hs.value = c.sealStamp || '';
    var hl = document.getElementById('scf-seal-logo');   if(hl) hl.value = c.sealLogo  || '';
}

function scompCloseDetail() {
    scompSelectedId = null;
    scompAddMode = false;
    document.getElementById('scomp-right').style.display = 'none';
    document.getElementById('scomp-empty').style.display = 'flex';
    scompRenderList();
}

function scompOpenAdd() {
    scompSelectedId = null;
    scompAddMode = true;
    document.getElementById('scomp-right').style.display = 'flex';
    document.getElementById('scomp-empty').style.display = 'none';
    scompRenderList();
    ['scf-code','scf-name','scf-shortname','scf-biztype','scf-bizitem','scf-phone',
     'scf-fax','scf-biznum','scf-corpnum','scf-established','scf-repname','scf-address','scf-homepage'].forEach(function(id) {
        var el = document.getElementById(id); if (el) el.value = '';
    });
    buildCodeSelect('scf-type', 'CO_TYPE', '법인');
    document.getElementById('scf-sort').value = '';
    document.querySelectorAll('input[name="scf-active"]').forEach(function(r){ r.checked = r.value === 'Y'; });
    var senderEl = document.getElementById('scf-sender'); if(senderEl) senderEl.value = '';
    scompSetSeal('seal-corp-img',  'seal-corp-ph',  '');
    scompSetSeal('seal-use-img',   'seal-use-ph',   '');
    scompSetSeal('seal-stamp-img', 'seal-stamp-ph', '');
    scompSetSeal('seal-logo-img',  'seal-logo-ph',  '');
    setTimeout(function(){ var el = document.getElementById('scf-name'); if(el) el.focus(); }, 50);
}

function scompSave() {
    var name = (document.getElementById('scf-name').value || '').trim();
    var code = (document.getElementById('scf-code').value || '').trim();
    if (!name) { showToast('회사명을 입력해주세요.', 'error'); return; }
    var activeEl = document.querySelector('input[name="scf-active"]:checked');
    var data = {
        code:        code,
        name:        name,
        shortName:   (document.getElementById('scf-shortname').value || '').trim(),
        type:        document.getElementById('scf-type').value,
        biztype:     (document.getElementById('scf-biztype').value   || '').trim(),
        bizitem:     (document.getElementById('scf-bizitem').value   || '').trim(),
        phone:       (document.getElementById('scf-phone').value     || '').trim(),
        fax:         (document.getElementById('scf-fax').value       || '').trim(),
        biznum:      (document.getElementById('scf-biznum').value    || '').trim(),
        corpnum:     (document.getElementById('scf-corpnum').value   || '').trim(),
        established: (document.getElementById('scf-established').value || '').trim(),
        repname:     (document.getElementById('scf-repname').value   || '').trim(),
        address:     (document.getElementById('scf-address').value   || '').trim(),
        homepage:    (document.getElementById('scf-homepage').value  || '').trim(),
        sort:        parseInt(document.getElementById('scf-sort').value) || 0,
        active:      !activeEl || activeEl.value !== 'N',
        sender:      (document.getElementById('scf-sender')     ? document.getElementById('scf-sender').value     : ''),
        sealCorp:    (document.getElementById('scf-seal-corp')  ? document.getElementById('scf-seal-corp').value  : ''),
        sealUse:     (document.getElementById('scf-seal-use')   ? document.getElementById('scf-seal-use').value   : ''),
        sealStamp:   (document.getElementById('scf-seal-stamp') ? document.getElementById('scf-seal-stamp').value : ''),
        sealLogo:    (document.getElementById('scf-seal-logo')  ? document.getElementById('scf-seal-logo').value  : '')
    };
    if (scompAddMode) {
        data.id = 'CO' + Date.now();
        scompList.push(data);
        scompSelectedId = data.id;
        scompAddMode = false;
    } else if (scompSelectedId) {
        var idx = scompList.findIndex(function(c){ return c.id === scompSelectedId; });
        if (idx >= 0) { data.id = scompSelectedId; scompList[idx] = data; }
    }
    scompPersist();
    scompRenderList();
    showToast('저장되었습니다.', 'success');
}

async function scompDelete() {
    if (!scompSelectedId) return;
    var c = scompList.find(function(x){ return x.id === scompSelectedId; });
    if (!c) return;
    if (!await showConfirm('"' + c.name + '"을(를) 삭제하시겠습니까?')) return;
    scompList = scompList.filter(function(x){ return x.id !== scompSelectedId; });
    scompPersist();
    scompSelectedId = null;
    document.getElementById('scomp-right').style.display = 'none';
    document.getElementById('scomp-empty').style.display = 'flex';
    scompRenderList();
    showToast('삭제되었습니다.', 'success');
}

/* 인감 이미지 미리보기 */
function scompSealPreview(input, imgId, phId, hiddenId) {
    if (!input.files || !input.files[0]) return;
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.getElementById(imgId);
        var ph  = document.getElementById(phId);
        var hid = document.getElementById(hiddenId);
        if (img) { img.src = e.target.result; img.style.display = 'block'; }
        if (ph)  { ph.style.display = 'none'; }
        if (hid) { hid.value = e.target.result; }
    };
    reader.readAsDataURL(input.files[0]);
}

/* 인감 필드 세팅 헬퍼 */
function scompSetSeal(imgId, phId, dataUrl) {
    var img = document.getElementById(imgId);
    var ph  = document.getElementById(phId);
    if (dataUrl) {
        if (img) { img.src = dataUrl; img.style.display = 'block'; }
        if (ph)  ph.style.display = 'none';
    } else {
        if (img) { img.src = ''; img.style.display = 'none'; }
        if (ph)  ph.style.display = '';
    }
}

/* ==============================================
   권한관리 - AUTH SET / AUTH VIEW
   ============================================== */

var AUTH_MENUS = [
    { cat: '마이페이지', items: [
        { key: 'my-home',      label: '홈' },
        { key: 'my-org-chart', label: '조직도' },
        { key: 'my-hr-info',   label: '내 인사정보' },
        { key: 'my-att-apply', label: '근태신청' },
        { key: 'my-cert',      label: '증명서발급' },
        { key: 'my-sal-slip',  label: '급여명세서조회' },
        { key: 'my-gmail',     label: 'Gmail' },
        { key: 'my-calendar',  label: '캘린더' },
        { key: 'my-slack',     label: 'Slack' },
        { key: 'my-notion',    label: 'Notion' },
    ]},
    { cat: '대시보드', items: [
        { key: 'dashboard', label: '대시보드' },
    ]},
    { cat: '인사관리', items: [
        { key: 'hr-info',         label: '인사정보' },
        { key: 'hr-appt-request', label: '인사발령신청' },
        { key: 'hr-appt-process', label: '인사발령처리' },
        { key: 'hr-appt-history', label: '인사발령내역' },
        { key: 'hr-report-info',  label: '인사정보조회' },
        { key: 'hr-report-join',  label: '입퇴사조회' },
        { key: 'hr-report-list',  label: '사원명부조회' },
        { key: 'hr-cert',         label: '증명서발급' },
    ]},
    { cat: '근태관리', items: [
        { key: 'att-apply',  label: '연차신청' },
        { key: 'att-status', label: '연차현황' },
    ]},
    { cat: '급여관리', items: [
        { key: 'sal-wage',   label: '임금정보' },
        { key: 'sal-calc',   label: '급여계산' },
        { key: 'sal-book',   label: '급여대장' },
        { key: 'sal-slip',   label: '급여명세서' },
        { key: 'sal-status', label: '급여현황' },
    ]},
    { cat: '4대보험', items: [
        { key: 'ins-lookup',  label: '보험료조회' },
        { key: 'ins-payment', label: '납부현황' },
        { key: 'ins-rates',   label: '보험요율안내' },
    ]},
    { cat: '퇴직관리', items: [
        { key: 'ret-calc',    label: '퇴직금계산' },
        { key: 'ret-status',  label: '퇴직금현황' },
        { key: 'ret-reserve', label: '퇴직적립금' },
    ]},
    { cat: '채용관리', items: [
        { key: 'recruit-applicants', label: '지원자관리' },
    ]},
    { cat: '목표관리', items: [
        { key: 'goal-setting',  label: '목표설정' },
        { key: 'goal-manage',   label: '목표관리' },
        { key: 'goal-overview', label: '목표현황' },
    ]},
    { cat: '평가관리', items: [
        { key: 'eval-write',    label: '평가작성' },
        { key: 'eval-status',   label: '평가현황' },
        { key: 'eval-analysis', label: '평가분석' },
        { key: 'eval-settings', label: '평가설정' },
    ]},
    { cat: '전자결재', items: [
        { key: 'approval-send-doc',    label: '상신문서' },
        { key: 'approval-send-temp',   label: '임시보관문서' },
        { key: 'approval-send-recv',   label: '수신상신문서' },
        { key: 'approval-recv-pending',label: '미결문서' },
        { key: 'approval-recv-done',   label: '기결문서' },
        { key: 'approval-recv-closed', label: '종결문서' },
        { key: 'approval-recv-ref',    label: '수신참조문서' },
        { key: 'approval-important',   label: '중요문서함' },
    ]},
    { cat: '게시판', items: [
        { key: 'board-notice', label: '공지사항' },
        { key: 'board-free',   label: '자유게시판' },
        { key: 'board-manual', label: '업무매뉴얼' },
        { key: 'board-study',  label: '공부방' },
        { key: 'board-survey', label: '설문조사' },
        { key: 'board-qna',    label: 'FAQ' },
    ]},
    { cat: '업무노트', items: [
        { key: 'work-note-shared',   label: '공용노트' },
        { key: 'work-note-personal', label: '개인노트' },
        { key: 'work-note-project',  label: '프로젝트' },
    ]},
    { cat: '시스템설정', items: [
        { key: 'sys-code',      label: '코드관리' },
        { key: 'sys-company',   label: '회사정보' },
        { key: 'sys-workplace', label: '사업장정보' },
        { key: 'sys-dept',      label: '부서정보' },
        { key: 'sys-auth-view', label: '권한조회' },
        { key: 'sys-auth-set',  label: '권한설정' },
        { key: 'sys-account',   label: '계정관리' },
    ]},
];

var authProfiles    = [];
var authAssignments = [];
var authSelectedId  = null;
var authAddMode     = false;

var AUTH_DEFAULTS = {
    admin: { access:true, view:true, write:true, edit:true, admin:true,  ownOnly:false },
    user:  { access:true, view:true, write:false, edit:false, admin:false, ownOnly:true  }
};

function authPersist() {
    localStorage.setItem('authData_v1', JSON.stringify({ profiles: authProfiles, assignments: authAssignments }));
}

function authLoad() {
    var raw = localStorage.getItem('authData_v1');
    if (raw) {
        try {
            var d = JSON.parse(raw);
            authProfiles    = Array.isArray(d.profiles)    ? d.profiles    : [];
            authAssignments = Array.isArray(d.assignments) ? d.assignments : [];
        } catch(e) { authProfiles = []; authAssignments = []; }
    } else {
        authProfiles = []; authAssignments = [];
    }
    if (authProfiles.length === 0) {
        authProfiles = [
            { id:'PROF_ADMIN', name:'시스템 관리자', type:'admin', desc:'모든 메뉴 접근 및 관리 권한', menus: authBuildMenuPerms('admin') },
            { id:'PROF_USER',  name:'일반 사용자',  type:'user',  desc:'기본 조회 및 본인 데이터 권한', menus: authBuildMenuPerms('user') }
        ];
        authPersist();
    }
}

function authBuildMenuPerms(type) {
    var def = AUTH_DEFAULTS[type] || AUTH_DEFAULTS.user;
    var menus = {};
    AUTH_MENUS.forEach(function(cat) {
        cat.items.forEach(function(item) { menus[item.key] = Object.assign({}, def); });
    });
    return menus;
}

/* --- 권한설정 (auth-set) --- */

function authInit() {
    authLoad();
    authSelectedId = null;
    authAddMode    = false;
    document.getElementById('auth-empty').style.display = 'flex';
    document.getElementById('auth-right').style.display = 'none';
    authBuildCorpSel();
    authRenderList();
}

function authBuildCorpSel() {
    var sel = document.getElementById('auth-corp-sel');
    if (!sel) return;
    var companies = [];
    var raw = localStorage.getItem('scompData_v1');
    if (raw) { try { var arr = JSON.parse(raw); if (Array.isArray(arr)) companies = arr; } catch(e) {} }
    var cur = sel.value;
    sel.innerHTML = '<option value="">전체 법인</option>' +
        companies.map(function(c) {
            return '<option value="' + c.id + '">' + escHtml(c.name) + '</option>';
        }).join('');
    if (cur) sel.value = cur;
}

function authGetCorpFilter() {
    var sel = document.getElementById('auth-corp-sel');
    return sel ? sel.value : '';
}

function authRefreshMembers() {
    if (authSelectedId) authRenderMembers(authSelectedId);
}

function authRenderList() {
    var q = ((document.getElementById('auth-q') || {}).value || '').toLowerCase();
    var list = document.getElementById('auth-list');
    if (!list) return;
    var filtered = authProfiles.filter(function(p) { return !q || p.name.toLowerCase().indexOf(q) >= 0; });
    list.innerHTML = filtered.map(function(p) {
        var active = p.id === authSelectedId ? ' auth-item-active' : '';
        var badge  = p.type === 'admin'
            ? '<span class="auth-badge-admin">관리자</span>'
            : '<span class="auth-badge-user">일반</span>';
        var cnt = authAssignments.filter(function(a) { return a.profileId === p.id; }).length;
        return '<div class="auth-item' + active + '" onclick="authSelect(\'' + p.id + '\')">' +
            '<div class="auth-item-name">' + escHtml(p.name) + badge + '</div>' +
            '<div class="auth-item-sub">' + escHtml(p.desc || '설명 없음') + ' · ' + cnt + '명</div>' +
        '</div>';
    }).join('') || '<div style="padding:20px;text-align:center;color:#bbb;font-size:13px">검색 결과 없음</div>';
}

function authSelect(id) {
    authSelectedId = id; authAddMode = false;
    var p = authProfiles.find(function(x) { return x.id === id; });
    if (!p) return;
    authRenderList();
    authShowDetail(p);
}

function authShowDetail(p) {
    document.getElementById('auth-empty').style.display = 'none';
    document.getElementById('auth-right').style.display = 'flex';
    document.getElementById('arf-name').value = p.name || '';
    document.getElementById('arf-type').value = p.type || 'user';
    document.getElementById('arf-desc').value = p.desc || '';
    document.getElementById('auth-del-btn').style.display = authAddMode ? 'none' : '';
    authRenderPermTable(p.menus || {});
    authRenderMembers(p.id);
}

function authOpenAdd() {
    authSelectedId = null; authAddMode = true;
    authRenderList();
    document.getElementById('auth-empty').style.display = 'none';
    document.getElementById('auth-right').style.display = 'flex';
    document.getElementById('arf-name').value = '';
    document.getElementById('arf-type').value = 'user';
    document.getElementById('arf-desc').value = '';
    document.getElementById('auth-del-btn').style.display = 'none';
    authRenderPermTable(authBuildMenuPerms('user'));
    document.getElementById('auth-members-list').innerHTML = '<div style="color:#bbb;font-size:12px">저장 후 직원을 배정할 수 있습니다.</div>';
    setTimeout(function() { var el = document.getElementById('arf-name'); if (el) el.focus(); }, 50);
}

function authRenderPermTable(menuPerms) {
    var tbody = document.getElementById('auth-tbl-body');
    if (!tbody) return;
    var html = '';
    AUTH_MENUS.forEach(function(cat) {
        html += '<tr class="auth-cat-row"><td colspan="7">' + escHtml(cat.cat) + '</td></tr>';
        cat.items.forEach(function(item) {
            var mp = (menuPerms[item.key]) || {};
            var p  = { access:!!mp.access, view:!!mp.view, write:!!mp.write, edit:!!mp.edit, admin:!!mp.admin, ownOnly:!!mp.ownOnly };
            var k  = item.key.replace(/-/g,'_');
            html += '<tr class="auth-menu-row">' +
                '<td class="auth-menu-name">' + escHtml(item.label) + '</td>' +
                authCkCell(k, 'access',  p.access,  false) +
                authCkCell(k, 'view',    p.view,    !p.access) +
                authCkCell(k, 'write',   p.write,   !p.access) +
                authCkCell(k, 'edit',    p.edit,    !p.access) +
                authCkCell(k, 'admin',   p.admin,   !p.access) +
                authCkCell(k, 'ownOnly', p.ownOnly, !p.access) +
            '</tr>';
        });
    });
    tbody.innerHTML = html;
}

function authCkCell(key, perm, checked, disabled) {
    var chk = checked  ? ' checked' : '';
    var dis = disabled ? ' disabled' : '';
    var cls = disabled ? ' class="auth-ck auth-ck-dis"' : ' class="auth-ck"';
    var onch = perm === 'access' ? ' onchange="authToggleAccess(\'' + key + '\',this)"' : '';
    return '<td style="text-align:center"><input type="checkbox"' + cls + chk + dis + onch +
        ' id="arp-' + key + '-' + perm + '"></td>';
}

function authToggleAccess(key, el) {
    var on = el.checked;
    ['view','write','edit','admin','ownOnly'].forEach(function(perm) {
        var ck = document.getElementById('arp-' + key + '-' + perm);
        if (!ck) return;
        ck.disabled = !on;
        if (on) { ck.classList.remove('auth-ck-dis'); }
        else    { ck.classList.add('auth-ck-dis'); ck.checked = false; }
    });
}

function authReadPermTable() {
    var menus = {};
    AUTH_MENUS.forEach(function(cat) {
        cat.items.forEach(function(item) {
            var k = item.key.replace(/-/g,'_');
            var g = function(perm) { var el = document.getElementById('arp-'+k+'-'+perm); return el ? el.checked : false; };
            menus[item.key] = { access:g('access'), view:g('view'), write:g('write'), edit:g('edit'), admin:g('admin'), ownOnly:g('ownOnly') };
        });
    });
    return menus;
}

function authRenderMembers(profileId) {
    var list = document.getElementById('auth-members-list');
    if (!list) return;
    var corpFilter = authGetCorpFilter();
    var baseProf   = authGetBaseProfile();
    var isBase     = baseProf && profileId === baseProf.id;
    var companies  = [];
    var raw = localStorage.getItem('scompData_v1');
    if (raw) { try { var arr = JSON.parse(raw); if (Array.isArray(arr)) companies = arr; } catch(e) {} }

    // 기본(일반사용자) 프로필이면 전체 직원 대상
    var empList = isBase
        ? employees.slice()
        : authAssignments.filter(function(a) { return a.profileId === profileId; })
            .map(function(a) { return employees.find(function(e) { return e.id === a.empId; }); })
            .filter(Boolean);

    var chips = empList.map(function(emp) {
        if (corpFilter) {
            var extRaw = localStorage.getItem('hrExtData_v1');
            var ext = {};
            if (extRaw) { try { ext = JSON.parse(extRaw); } catch(e) {} }
            var empExt = ext[emp.id] || {};
            var co = companies.find(function(c) { return c.name === empExt.corp || c.id === empExt.corpId; });
            if (!co || co.id !== corpFilter) return null;
        }
        return '<div class="auth-member-chip">' +
            '<div class="auth-member-av">' + (emp.name ? emp.name[0] : '?') + '</div>' +
            '<span class="auth-member-name">' + escHtml(emp.name) + '</span>' +
            '<span class="auth-member-dept">' + escHtml(emp.department || '') + '</span>' +
        '</div>';
    }).filter(Boolean);

    if (isBase && !chips.length && !corpFilter) {
        list.innerHTML = '<div style="color:#bbb;font-size:12px">등록된 직원이 없습니다.</div>';
    } else if (isBase) {
        list.innerHTML = (corpFilter ? '' : '<div style="color:#888;font-size:11px;margin-bottom:8px">전체 직원에게 기본 적용 · ' + empList.length + '명</div>') + chips.join('');
    } else {
        list.innerHTML = chips.length
            ? chips.join('')
            : '<div style="color:#bbb;font-size:12px">배정된 직원이 없습니다.' + (corpFilter ? ' (현재 법인 기준)' : '') + '</div>';
    }
}

function authSave() {
    var name = (document.getElementById('arf-name').value || '').trim();
    if (!name) { showToast('권한명을 입력해주세요.', 'error'); return; }
    var type  = document.getElementById('arf-type').value;
    var desc  = (document.getElementById('arf-desc').value || '').trim();
    var menus = authReadPermTable();
    if (authAddMode) {
        var np = { id: 'PROF_' + Date.now(), name:name, type:type, desc:desc, menus:menus };
        authProfiles.push(np);
        authSelectedId = np.id;
        authAddMode    = false;
    } else if (authSelectedId) {
        var idx = authProfiles.findIndex(function(p) { return p.id === authSelectedId; });
        if (idx >= 0) authProfiles[idx] = Object.assign({}, authProfiles[idx], { name:name, type:type, desc:desc, menus:menus });
    }
    authPersist();
    authRenderList();
    var cur = authProfiles.find(function(x) { return x.id === authSelectedId; });
    if (cur) authShowDetail(cur);
    showToast('저장되었습니다.', 'success');
}

async function authDelete() {
    if (!authSelectedId) return;
    var cnt = authAssignments.filter(function(a) { return a.profileId === authSelectedId; }).length;
    var msg = cnt > 0
        ? cnt + '명의 직원에게 배정된 권한입니다. 삭제하면 해당 직원의 권한이 해제됩니다. 삭제하시겠습니까?'
        : '이 권한프로필을 삭제하시겠습니까?';
    if (!await showConfirm(msg)) return;
    authProfiles    = authProfiles.filter(function(x) { return x.id !== authSelectedId; });
    authAssignments = authAssignments.filter(function(a) { return a.profileId !== authSelectedId; });
    authSelectedId  = null;
    authPersist();
    authRenderList();
    document.getElementById('auth-empty').style.display = 'flex';
    document.getElementById('auth-right').style.display = 'none';
    showToast('삭제되었습니다.', 'success');
}

/* --- 권한조회 (auth-view) --- */

var authvCurrentEmpId = null;

function authvInit() {
    authLoad();
    authvCurrentEmpId = null;
    authvTab('person', document.querySelector('.authv-tab-btn'));
    authvBuildCorpSel();
    authvPersonFilter();
    authvPopulateMenuSel();
}

function authvBuildCorpSel() {
    var sel = document.getElementById('authvp-sel-corp');
    if (!sel) return;
    var companies = [];
    var raw = localStorage.getItem('scompData_v1');
    if (raw) { try { var arr = JSON.parse(raw); if (Array.isArray(arr)) companies = arr; } catch(e) {} }
    sel.innerHTML = '<option value="">전체</option>' +
        companies.map(function(c) { return '<option value="' + c.id + '">' + escHtml(c.name) + '</option>'; }).join('');
    authvBuildCompanySel();
    authvBuildDeptSel();
}

function authvBuildCompanySel() {
    var corpSel    = document.getElementById('authvp-sel-corp');
    var companySel = document.getElementById('authvp-sel-company');
    if (!companySel) return;
    var corpId = corpSel ? corpSel.value : '';
    var workplaces = [];
    var raw = localStorage.getItem('swpData_v1');
    if (raw) { try { var arr = JSON.parse(raw); if (Array.isArray(arr)) workplaces = arr; } catch(e) {} }
    if (corpId) workplaces = workplaces.filter(function(w) { return w.companyId === corpId; });
    companySel.innerHTML = '<option value="">전체</option>' +
        workplaces.map(function(w) { return '<option value="' + w.id + '">' + escHtml(w.name) + '</option>'; }).join('');
}

function authvBuildDeptSel() {
    var corpSel  = document.getElementById('authvp-sel-corp');
    var deptSel  = document.getElementById('authvp-sel-dept');
    if (!deptSel) return;
    var corpId = corpSel ? corpSel.value : '';
    var depts = [];
    var raw = localStorage.getItem('sdeptData_v1');
    if (raw) { try { var d = JSON.parse(raw); if (d && Array.isArray(d.depts)) depts = d.depts; } catch(e) {} }
    if (corpId) depts = depts.filter(function(d) { return d.companyId === corpId; });
    deptSel.innerHTML = '<option value="">전체</option>' +
        depts.map(function(d) { return '<option value="' + escHtml(d.name) + '">' + escHtml(d.name) + '</option>'; }).join('');
}

function authvTab(tab, btn) {
    document.querySelectorAll('.authv-tab-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.authv-panel').forEach(function(p) { p.style.display = 'none'; });
    if (btn) btn.classList.add('active');
    var panel = document.getElementById('authv-panel-' + tab);
    if (panel) panel.style.display = 'flex';
}

function authvPersonFilter() {
    var q          = ((document.getElementById('authvp-q') || {}).value || '').toLowerCase();
    var corpId     = ((document.getElementById('authvp-sel-corp') || {}).value || '');
    var companyId  = ((document.getElementById('authvp-sel-company') || {}).value || '');
    var deptName   = ((document.getElementById('authvp-sel-dept') || {}).value || '');
    var list       = document.getElementById('authvp-list');
    if (!list) return;

    // 법인/사업장/부서 매핑을 위해 ext 데이터 로드
    var extRaw = localStorage.getItem('hrExtData_v1');
    var extData = {};
    if (extRaw) { try { extData = JSON.parse(extRaw); } catch(e) {} }
    var companies = [];
    var raw = localStorage.getItem('scompData_v1');
    if (raw) { try { var arr = JSON.parse(raw); if (Array.isArray(arr)) companies = arr; } catch(e) {} }
    var workplaces = [];
    var wraw = localStorage.getItem('swpData_v1');
    if (wraw) { try { var warr = JSON.parse(wraw); if (Array.isArray(warr)) workplaces = warr; } catch(e) {} }

    var filtered = employees.filter(function(e) {
        // 이름 검색
        if (q && e.name.toLowerCase().indexOf(q) < 0 && (e.department || '').toLowerCase().indexOf(q) < 0) return false;
        // 부서 필터
        if (deptName && e.department !== deptName) return false;
        // 법인/사업장 필터 — hrExtData 기준
        if (corpId || companyId) {
            var ext = extData[e.id] || {};
            if (corpId) {
                var co = companies.find(function(c) { return c.id === corpId; });
                if (!co) return false;
                if (ext.corp !== co.name && ext.corpId !== corpId) return false;
            }
            if (companyId) {
                var wp = workplaces.find(function(w) { return w.id === companyId; });
                if (!wp) return false;
                if (ext.company !== wp.name && ext.workplaceId !== companyId) return false;
            }
        }
        return true;
    });

    list.innerHTML = filtered.map(function(e) {
        var active = e.id === authvCurrentEmpId ? ' authvp-item-active' : '';
        var asgn   = authAssignments.find(function(a) { return a.empId === e.id; });
        var prof   = asgn ? authProfiles.find(function(p) { return p.id === asgn.profileId; }) : null;
        var chip   = prof ? '<span class="authvp-prof-chip">' + escHtml(prof.name) + '</span>' : '';
        return '<div class="authvp-item' + active + '" onclick="authvSelectPerson(\'' + e.id + '\')">' +
            '<div class="authvp-item-av">' + (e.name ? e.name[0] : '?') + '</div>' +
            '<div><div class="authvp-item-name">' + escHtml(e.name) + '</div>' +
            '<div class="authvp-item-sub">' + escHtml(e.department || '미지정') + (chip ? ' · ' + chip : '') + '</div></div>' +
        '</div>';
    }).join('') || '<div style="padding:20px;text-align:center;color:#bbb;font-size:13px">직원 없음</div>';
}

function authvSelectPerson(empId) {
    authvCurrentEmpId = empId;
    authvPersonFilter();
    var emp = employees.find(function(e) { return e.id === empId; });
    if (!emp) return;
    document.getElementById('authvp-empty').style.display  = 'none';
    var detail = document.getElementById('authvp-detail');
    detail.style.display = 'flex';
    var av = document.getElementById('authvpa-avatar');
    if (av) av.textContent = emp.name ? emp.name[0] : '?';
    var nameEl = document.getElementById('authvpa-name');
    if (nameEl) nameEl.textContent = emp.name;
    var subEl = document.getElementById('authvpa-sub');
    if (subEl) subEl.textContent = (emp.department || '부서 없음') + ' · ' + emp.id;
    // 추가 권한 드롭다운 — 기본(일반사용자) 프로필 제외
    var baseProf = authGetBaseProfile();
    var sel = document.getElementById('authvpa-sel');
    if (sel) {
        var extras = authProfiles.filter(function(p) { return !baseProf || p.id !== baseProf.id; });
        sel.innerHTML = '<option value="">없음</option>' +
            extras.map(function(p) {
                return '<option value="' + p.id + '">' + escHtml(p.name) + ' (' + (p.type === 'admin' ? '관리자' : '일반') + ')</option>';
            }).join('');
        var cur = authAssignments.find(function(a) { return a.empId === empId; });
        sel.value = cur ? cur.profileId : '';
    }
    authvRenderPersonPerm(empId);
}

function authGetBaseProfile() {
    return authProfiles.find(function(p) { return p.id === 'PROF_USER'; })
        || authProfiles.find(function(p) { return p.type === 'user'; })
        || null;
}

function authMergePerms(baseMenus, extraMenus) {
    var merged = {};
    AUTH_MENUS.forEach(function(cat) {
        cat.items.forEach(function(item) {
            var bp = (baseMenus || {})[item.key] || {};
            var ep = (extraMenus || {})[item.key] || {};
            merged[item.key] = {
                access:  bp.access  || ep.access,
                view:    bp.view    || ep.view,
                write:   bp.write   || ep.write,
                edit:    bp.edit    || ep.edit,
                admin:   bp.admin   || ep.admin,
                // 추가 권한이 접근 가능하면 ownOnly 해제 가능
                ownOnly: ep.access ? ep.ownOnly : bp.ownOnly
            };
        });
    });
    return merged;
}

function authvRenderPersonPerm(empId) {
    var tbody = document.getElementById('authvp-tbl-body');
    if (!tbody) return;
    var baseProf  = authGetBaseProfile();
    var asgn      = authAssignments.find(function(a) { return a.empId === empId; });
    var extraProf = asgn ? authProfiles.find(function(p) { return p.id === asgn.profileId; }) : null;
    var menus = authMergePerms(
        baseProf  ? baseProf.menus  : {},
        extraProf ? extraProf.menus : {}
    );
    var html = '';
    AUTH_MENUS.forEach(function(cat) {
        html += '<tr class="auth-cat-row"><td colspan="7">' + escHtml(cat.cat) + '</td></tr>';
        cat.items.forEach(function(item) {
            var p = menus[item.key] || {};
            html += '<tr class="auth-menu-row">' +
                '<td class="auth-menu-name">' + escHtml(item.label) + '</td>' +
                authDotCell(p.access) + authDotCell(p.view) + authDotCell(p.write) +
                authDotCell(p.edit)   + authDotCell(p.admin) + authDotCell(p.ownOnly) +
            '</tr>';
        });
    });
    tbody.innerHTML = html;
}

function authDotCell(val) {
    return '<td style="text-align:center">' +
        (val ? '<span class="auth-dot-y">●</span>' : '<span class="auth-dot-n">○</span>') +
    '</td>';
}

function authvSaveAssign() {
    var sel = document.getElementById('authvpa-sel');
    if (!sel || !authvCurrentEmpId) return;
    var profileId = sel.value;
    var baseProf  = authGetBaseProfile();
    // 기본 프로필은 implicit — 명시적 배정 불필요
    if (baseProf && profileId === baseProf.id) profileId = '';
    authAssignments = authAssignments.filter(function(a) { return a.empId !== authvCurrentEmpId; });
    if (profileId) authAssignments.push({ empId: authvCurrentEmpId, profileId: profileId });
    authPersist();
    authvPersonFilter();
    authvRenderPersonPerm(authvCurrentEmpId);
    if (authSelectedId) {
        var ml = document.getElementById('auth-members-list');
        if (ml) authRenderMembers(authSelectedId);
    }
    showToast('권한이 적용되었습니다.', 'success');
}

function authvPopulateMenuSel() {
    var sel = document.getElementById('authvm-sel');
    if (!sel) return;
    var opts = '<option value="">메뉴를 선택하세요</option>';
    AUTH_MENUS.forEach(function(cat) {
        opts += '<optgroup label="' + escHtml(cat.cat) + '">';
        cat.items.forEach(function(item) {
            opts += '<option value="' + item.key + '">' + escHtml(item.label) + '</option>';
        });
        opts += '</optgroup>';
    });
    sel.innerHTML = opts;
}

function authvMenuRender() {
    var sel    = document.getElementById('authvm-sel');
    var menuKey= sel ? sel.value : '';
    var tbody  = document.getElementById('authvm-tbl-body');
    if (!tbody) return;
    if (!menuKey) {
        tbody.innerHTML = '<tr><td colspan="10" style="text-align:center;color:#bbb;padding:32px;font-size:13px">메뉴를 선택하세요</td></tr>';
        return;
    }
    tbody.innerHTML = employees.map(function(emp) {
        var asgn = authAssignments.find(function(a) { return a.empId === emp.id; });
        var prof = asgn ? authProfiles.find(function(p) { return p.id === asgn.profileId; }) : null;
        var perm = prof ? ((prof.menus || {})[menuKey] || {}) : {};
        var profChip = prof
            ? '<span class="authvm-prof-chip ' + (prof.type === 'admin' ? 'chip-admin' : 'chip-user') + '">' + escHtml(prof.name) + '</span>'
            : '<span style="color:#bbb;font-size:12px">미지정</span>';
        return '<tr>' +
            '<td style="font-weight:600">' + escHtml(emp.name) + '</td>' +
            '<td>' + emp.id + '</td>' +
            '<td>' + escHtml(emp.department || '-') + '</td>' +
            '<td>' + profChip + '</td>' +
            authDotCell(perm.access) + authDotCell(perm.view) + authDotCell(perm.write) +
            authDotCell(perm.edit)   + authDotCell(perm.admin) + authDotCell(perm.ownOnly) +
        '</tr>';
    }).join('') || '<tr><td colspan="10" style="text-align:center;color:#bbb;padding:32px">직원이 없습니다</td></tr>';
}

function escHtml(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ===== 업로드 기능 =====

// ── 컬럼 정의: { col, required, format, example, note, codeGroup }
//   codeGroup: getCodeValues()로 허용값을 동적으로 읽어올 코드그룹 ID
var UPLOAD_SCHEMAS = {
    'hr-emp': {
        title: '사원 일괄 등록',
        notes: [
            { text: '1행은 반드시 컬럼명(헤더)이어야 합니다. 헤더명이 정확히 일치해야 매핑됩니다.' },
            { text: '불필요한 컬럼은 삭제해도 됩니다. 없는 컬럼은 빈값으로 처리됩니다.' },
            { text: '날짜 형식은 YYYY-MM-DD를 권장합니다. 엑셀 날짜 셀 형식도 인식합니다.' },
            { text: '중복 사번이 있으면 기존 정보를 덮어씁니다.', highlight: true },
            { text: '코드관리에 등록되지 않은 값을 입력해도 저장은 되지만, 시스템 팝업 검색에는 표시되지 않을 수 있습니다.' }
        ],
        fields: [
            { col:'사번',    required:false, format:'텍스트',          example:'EMP001',          note:'미입력 시 자동생성' },
            { col:'성명',    required:true,  format:'텍스트',          example:'홍길동',           note:'' },
            { col:'영문명',  required:false, format:'대문자 권장',      example:'HONG GIL DONG',   note:'' },
            { col:'성별',    required:false, format:'남성 / 여성',      example:'남성',            note:'' },
            { col:'생년월일',required:false, format:'YYYY-MM-DD',      example:'1990-01-15',      note:'하이픈 포함' },
            { col:'법인',    required:false, format:'시스템 등록 법인명', example:'케어링',          note:'' },
            { col:'사업장',  required:false, format:'시스템 등록 사업장명',example:'케어링 본사',    note:'' },
            { col:'부서',    required:true,  format:'시스템 등록 부서명', example:'개발팀',          note:'' },
            { col:'직위',    required:false, format:'코드관리 > 직책',  example:'과장',            codeGroup:'HR_POSITION' },
            { col:'직급',    required:false, format:'코드관리 > 직급',  example:'3급',             codeGroup:'HR_GRADE' },
            { col:'고용형태',required:false, format:'코드관리 > 고용형태',example:'정규직',          codeGroup:'HR_EMPTYPE' },
            { col:'근무형태',required:false, format:'코드관리 > 근무형태',example:'상근직',          codeGroup:'HR_WORKTYPE' },
            { col:'계약형태',required:false, format:'연봉제 / 월급제 / 시급제', example:'연봉제',   note:'' },
            { col:'입사일',  required:true,  format:'YYYY-MM-DD',      example:'2024-03-01',      note:'하이픈 포함' },
            { col:'휴대폰',  required:false, format:'010-XXXX-XXXX',   example:'010-1234-5678',   note:'' },
            { col:'이메일',  required:false, format:'이메일 형식',       example:'hong@caring.co.kr',note:'' }
        ]
    },
    'hr-appt': {
        title: '발령 일괄 등록',
        notes: [
            { text: '사번은 반드시 시스템에 등록된 사번이어야 합니다. 없는 사번은 오류로 처리됩니다.', highlight: true },
            { text: '발령후부서 / 발령후직위를 입력하면 해당 사원의 현재 부서·직위가 자동으로 업데이트됩니다.' },
            { text: '동일 사번에 여러 행을 입력하면 순서대로 모두 발령이력에 추가됩니다.' },
            { text: '날짜 형식은 YYYY-MM-DD를 권장합니다.' }
        ],
        fields: [
            { col:'사번',     required:true,  format:'시스템 등록 사번',  example:'EMP001',      note:'' },
            { col:'성명',     required:false, format:'참고용 (사번으로 매핑)', example:'홍길동',  note:'' },
            { col:'발령일',   required:true,  format:'YYYY-MM-DD',       example:'2024-03-01',  note:'하이픈 포함' },
            { col:'발령유형', required:true,  format:'입사/승진/전보/전출/휴직/복직/퇴직', example:'승진', note:'' },
            { col:'발령전부서',required:false, format:'부서명',           example:'개발팀',       note:'' },
            { col:'발령후부서',required:false, format:'부서명',           example:'기획팀',       note:'입력 시 현재 부서 업데이트' },
            { col:'발령전직위',required:false, format:'직위명',           example:'대리',         note:'' },
            { col:'발령후직위',required:false, format:'직위명',           example:'과장',         note:'입력 시 현재 직위 업데이트' },
            { col:'비고',     required:false, format:'자유 텍스트',       example:'정기 인사이동', note:'' }
        ]
    },
    'hr-card': {
        title: '인사기록카드 일괄 등록',
        notes: [
            { text: '첫 번째 열 [유형]에 학력 / 경력 / 자격면허 / 상벌 중 하나를 반드시 입력하세요.', highlight: true },
            { text: '사번은 시스템에 등록된 사번이어야 합니다. 없는 사번은 건너뜁니다.' },
            { text: '해당 유형에 맞는 열만 채우면 됩니다. 나머지 열은 빈칸으로 두세요.' },
            { text: '날짜 형식은 YYYY-MM-DD를 권장합니다.' }
        ],
        fields: [
            { col:'유형',     required:true,  format:'학력/경력/자격면허/상벌',      example:'학력',          note:'행의 종류 지정' },
            { col:'사번',     required:true,  format:'시스템 등록 사번',             example:'EMP001',         note:'' },
            { col:'성명',     required:false, format:'참고용',                       example:'홍길동',          note:'' },
            { col:'최종학력', required:false, format:'고졸/전문대졸/대졸/대학원졸',  example:'대졸',            note:'유형=학력 필수' },
            { col:'학교명',   required:false, format:'텍스트',                       example:'서울대학교',      note:'유형=학력' },
            { col:'학과',     required:false, format:'텍스트',                       example:'경영학과',        note:'유형=학력' },
            { col:'입학일',   required:false, format:'YYYY-MM-DD',                   example:'2010-03-01',      note:'유형=학력' },
            { col:'졸업일',   required:false, format:'YYYY-MM-DD',                   example:'2014-02-28',      note:'유형=학력' },
            { col:'졸업구분', required:false, format:'졸업/수료/중퇴',               example:'졸업',            note:'유형=학력' },
            { col:'회사명',   required:false, format:'텍스트',                       example:'케어링',          note:'유형=경력 필수' },
            { col:'부서',     required:false, format:'텍스트',                       example:'개발팀',          note:'유형=경력' },
            { col:'직위',     required:false, format:'텍스트',                       example:'대리',            note:'유형=경력' },
            { col:'입사일',   required:false, format:'YYYY-MM-DD',                   example:'2018-03-01',      note:'유형=경력' },
            { col:'퇴사일',   required:false, format:'YYYY-MM-DD',                   example:'2022-02-28',      note:'유형=경력' },
            { col:'담당업무', required:false, format:'자유 텍스트',                  example:'서비스 개발',     note:'유형=경력' },
            { col:'자격명',   required:false, format:'텍스트',                       example:'정보처리기사',    note:'유형=자격면허 필수' },
            { col:'발급기관', required:false, format:'텍스트',                       example:'한국산업인력공단',note:'유형=자격면허' },
            { col:'취득일',   required:false, format:'YYYY-MM-DD',                   example:'2020-05-15',      note:'유형=자격면허' },
            { col:'자격번호', required:false, format:'텍스트',                       example:'20200512345',     note:'유형=자격면허' },
            { col:'상벌구분', required:false, format:'상/벌',                        example:'상',              note:'유형=상벌 필수' },
            { col:'내용',     required:false, format:'자유 텍스트',                  example:'우수사원 표창',   note:'유형=상벌' },
            { col:'일자',     required:false, format:'YYYY-MM-DD',                   example:'2024-12-25',      note:'유형=상벌' },
            { col:'비고',     required:false, format:'자유 텍스트',                  example:'연말 시상',       note:'유형=상벌' }
        ]
    }
};

var uploadParsedData = {};

// 스키마 fields 배열 → 컬럼명 배열
function uploadGetCols(schema) {
    return schema.fields.map(function(f) { return f.col; });
}
// 스키마 fields 배열 → 필수 컬럼명 배열
function uploadGetRequired(schema) {
    return schema.fields.filter(function(f) { return f.required; }).map(function(f) { return f.col; });
}

function uploadDownloadTemplate(type) {
    var schema = UPLOAD_SCHEMAS[type];
    if (!schema) return;
    if (typeof XLSX === 'undefined') { showAlert('엑셀 라이브러리를 불러오는 중입니다. 잠시 후 다시 시도해주세요.'); return; }
    var cols = uploadGetCols(schema);
    // 2행: 형식/허용값 가이드 (codeGroup 있으면 실제 값 목록으로)
    var descRow = schema.fields.map(function(f) {
        if (f.codeGroup) {
            var vals = getCodeValues(f.codeGroup).map(function(c){ return c.label; });
            return vals.length ? '(' + vals.join('/') + ')' : '(' + f.format + ')';
        }
        var hint = f.format || '';
        if (f.note) hint += (hint ? ' · ' : '') + f.note;
        return hint ? '(' + hint + ')' : '';
    });
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet([cols, descRow]);
    ws['!cols'] = cols.map(function(c) { return { wch: Math.max(c.length * 2 + 4, 16) }; });
    cols.forEach(function(_, i) {
        var cellRef = XLSX.utils.encode_cell({ r: 1, c: i });
        if (ws[cellRef]) ws[cellRef].s = { font: { color: { rgb: 'AAAAAA' }, italic: true } };
    });
    XLSX.utils.book_append_sheet(wb, ws, '데이터');
    var titles = { 'hr-emp':'사원_일괄등록_템플릿', 'hr-appt':'발령_일괄등록_템플릿', 'hr-card':'인사기록카드_일괄등록_템플릿' };
    XLSX.writeFile(wb, (titles[type] || type) + '.xlsx');
}

// 업로드 페이지 열릴 때 가이드 테이블을 스키마에서 자동 렌더링
function uploadGuideRender(type) {
    var schema = UPLOAD_SCHEMAS[type];
    var tableContainer = document.getElementById('upload-guide-body-' + type);
    var notesContainer = document.getElementById('upload-guide-notes-' + type);
    if (!schema || !tableContainer) return;

    var fieldRows = schema.fields.map(function(f) {
        var formatCell = f.codeGroup
            ? (function() {
                var vals = getCodeValues(f.codeGroup).map(function(c){ return escHtml(c.label); });
                return vals.length ? vals.join(' / ') : escHtml(f.format || '');
              })()
            : escHtml(f.format || '');
        var noteCell = f.note ? escHtml(f.note) : '';
        return '<tr>' +
            '<td>' + escHtml(f.col) + '</td>' +
            '<td class="' + (f.required ? 'upload-guide-req' : '') + '">' + (f.required ? '필수' : '선택') + '</td>' +
            '<td>' + formatCell + (noteCell ? '<br><span style="color:#aaa;font-size:11px">' + noteCell + '</span>' : '') + '</td>' +
            '<td>' + escHtml(f.example || '') + '</td>' +
        '</tr>';
    }).join('');

    tableContainer.innerHTML =
        '<table class="upload-guide-tbl">' +
            '<thead><tr><th>컬럼명</th><th>필수</th><th>형식 / 허용값</th><th>예시</th></tr></thead>' +
            '<tbody>' + fieldRows + '</tbody>' +
        '</table>';

    if (notesContainer) {
        var noteItems = (schema.notes || []).map(function(n) {
            var txt = typeof n === 'string' ? n : n.text;
            var hl  = typeof n === 'object' && n.highlight;
            var inner = escHtml(txt).replace('YYYY-MM-DD', '<strong>YYYY-MM-DD</strong>');
            return hl
                ? '<li class="upload-guide-note-hl">' + inner + '</li>'
                : '<li>' + inner + '</li>';
        }).join('');
        notesContainer.innerHTML = noteItems
            ? '<ul class="upload-guide-notes">' + noteItems + '</ul>'
            : '';
    }
}

function uploadHandleDrop(event, type) {
    event.preventDefault();
    var zone = document.getElementById('drop-' + type);
    if (zone) zone.classList.remove('dragover');
    var files = event.dataTransfer && event.dataTransfer.files;
    if (files && files.length > 0) uploadParseFile(files[0], type);
}

function uploadHandleFile(input, type) {
    if (input.files && input.files.length > 0) uploadParseFile(input.files[0], type);
    input.value = '';
}

function uploadParseFile(file, type) {
    var schema = UPLOAD_SCHEMAS[type];
    if (!schema) return;
    if (typeof XLSX === 'undefined') { showAlert('엑셀 라이브러리를 불러오는 중입니다.'); return; }
    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var data = new Uint8Array(e.target.result);
            var wb = XLSX.read(data, { type: 'array', cellDates: true });
            var ws = wb.Sheets[wb.SheetNames[0]];
            var rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
            if (!rows || rows.length < 2) { showAlert('데이터가 없습니다. 템플릿에 데이터를 입력 후 업로드해주세요.'); return; }
            var headers = rows[0].map(function(h) { return String(h).trim(); });
            // 2번째 행이 설명 행이면 건너뜀 (템플릿 다운로드 시 삽입되는 가이드 행)
            var startIdx = 1;
            if (rows[1] && rows[1].every(function(c) { var s = String(c).trim(); return s === '' || s.charAt(0) === '('; })) startIdx = 2;
            var dataRows = rows.slice(startIdx).filter(function(r) { return r.some(function(c) { return String(c).trim() !== ''; }); });
            if (dataRows.length === 0) { showAlert('데이터 행이 없습니다.'); return; }
            if (dataRows.length > 1000) { showAlert('한 번에 최대 1,000건까지 업로드할 수 있습니다.'); return; }
            var parsed = dataRows.map(function(row) {
                var obj = { _errors: [] };
                headers.forEach(function(h, i) {
                    var v = row[i];
                    if (v instanceof Date) {
                        var yy = v.getFullYear();
                        var mm = String(v.getMonth()+1).padStart(2,'0');
                        var dd = String(v.getDate()).padStart(2,'0');
                        v = yy + '-' + mm + '-' + dd;
                    } else {
                        v = String(v === undefined || v === null ? '' : v).trim();
                    }
                    obj[h] = v;
                });
                uploadGetRequired(schema).forEach(function(req) {
                    if (!obj[req]) obj._errors.push('"' + req + '" 필수 항목입니다');
                });
                return obj;
            });
            uploadParsedData[type] = parsed;
            uploadRenderPreview(type, headers, parsed);
        } catch(err) {
            showAlert('파일을 읽는 중 오류가 발생했습니다: ' + err.message);
        }
    };
    reader.readAsArrayBuffer(file);
}

function uploadRenderPreview(type, headers, parsed) {
    var previewDiv = document.getElementById('upload-preview-' + type);
    var countEl    = document.getElementById('upload-count-' + type);
    var tbl        = document.getElementById('upload-tbl-' + type);
    if (!previewDiv || !tbl) return;
    var errCount = parsed.filter(function(r) { return r._errors.length > 0; }).length;
    countEl.textContent = '총 ' + parsed.length + '건' + (errCount > 0 ? ' (오류 ' + errCount + '건)' : '');
    var thead = '<thead><tr>' +
        headers.map(function(h) { return '<th>' + escHtml(h) + '</th>'; }).join('') +
        '<th>검증</th></tr></thead>';
    var tbody = '<tbody>' + parsed.map(function(row) {
        var hasErr = row._errors.length > 0;
        return '<tr' + (hasErr ? ' class="upload-row-err"' : '') + '>' +
            headers.map(function(h) { return '<td>' + escHtml(String(row[h] === undefined ? '' : row[h])) + '</td>'; }).join('') +
            '<td class="upload-err-cell">' + (hasErr ? row._errors.join(', ') : '<span style="color:#56C4A0">✓</span>') + '</td>' +
        '</tr>';
    }).join('') + '</tbody>';
    tbl.innerHTML = thead + tbody;
    previewDiv.style.display = '';
}

function uploadClear(type) {
    uploadParsedData[type] = null;
    var previewDiv = document.getElementById('upload-preview-' + type);
    var tbl        = document.getElementById('upload-tbl-' + type);
    if (previewDiv) previewDiv.style.display = 'none';
    if (tbl) tbl.innerHTML = '';
}

function uploadConfirm(type) {
    var parsed = uploadParsedData[type];
    if (!parsed || parsed.length === 0) return;
    var errCount = parsed.filter(function(r) { return r._errors.length > 0; }).length;
    if (errCount > 0) {
        showAlert('오류가 있는 행(' + errCount + '건)을 수정 후 다시 업로드해주세요.');
        return;
    }
    var schema = UPLOAD_SCHEMAS[type];
    var map = schema.mapKey;
    if (type === 'hr-emp') {
        uploadConfirmEmp(parsed, map);
    } else if (type === 'hr-appt') {
        uploadConfirmAppt(parsed, map);
    } else if (type === 'hr-card') {
        uploadConfirmCard(parsed, type);
    }
}

function uploadConfirmEmp(parsed, map) {
    showConfirm('총 ' + parsed.length + '명을 등록하시겠습니까?\n중복 사번은 기존 정보를 덮어씁니다.').then(function(ok) {
        if (!ok) return;
        var added = 0, updated = 0;
        parsed.forEach(function(row, idx) {
            var newId = (row['사번'] || '').trim();
            if (!newId) newId = 'EMP' + String(Date.now() + idx).slice(-6) + String(Math.floor(Math.random()*100)).padStart(2,'0');
            var existing = employees.find(function(e) { return e.id === newId; });
            if (existing) {
                if (row['성명'])  existing.name       = row['성명'];
                if (row['부서'])  existing.department = row['부서'];
                if (row['직위'])  existing.position   = row['직위'];
                if (row['직급'])  existing.jobGrade   = row['직급'];
                if (row['입사일']) existing.hire_date = row['입사일'];
                if (row['휴대폰']) existing.phone     = row['휴대폰'];
                if (row['이메일']) existing.email     = row['이메일'];
                updated++;
            } else {
                employees.push({
                    id:         newId,
                    name:       row['성명']  || '',
                    department: row['부서']  || '',
                    position:   row['직위']  || '',
                    jobGrade:   row['직급']  || '',
                    hire_date:  row['입사일'] || '',
                    phone:      row['휴대폰'] || '',
                    email:      row['이메일'] || ''
                });
                added++;
            }
            // hrExtData 동기화
            if (!hrExtData[newId]) hrExtData[newId] = {};
            var ext = hrExtData[newId];
            if (row['영문명'])  ext.name_en      = row['영문명'];
            if (row['성별'])    ext.gender        = row['성별'];
            if (row['생년월일']) ext.birth         = row['생년월일'];
            if (row['법인'])    ext.corp          = row['법인'];
            if (row['사업장'])  ext.company       = row['사업장'];
            if (row['고용형태']) ext.hire_type    = row['고용형태'];
            if (row['근무형태']) ext.work_type    = row['근무형태'];
            if (row['계약형태']) ext.contract_type= row['계약형태'];
            ext.status = '재직';
        });
        hrDataSave();
        hrSearch();
        uploadClear('hr-emp');
        showAlert('등록 완료: 신규 ' + added + '명, 수정 ' + updated + '명');
    });
}

function uploadConfirmAppt(parsed, map) {
    showConfirm('총 ' + parsed.length + '건의 발령을 등록하시겠습니까?').then(function(ok) {
        if (!ok) return;
        var added = 0, notFound = [];
        parsed.forEach(function(row) {
            var empId = row['사번'];
            var emp = employees.find(function(e) { return e.id === empId; });
            if (!emp) { notFound.push(empId); return; }
            if (!hrApptHistory[empId]) hrApptHistory[empId] = [];
            hrApptHistory[empId].push({
                date:     row['발령일']    || '',
                type:     row['발령유형']  || '',
                fromDept: row['발령전부서'] || '',
                toDept:   row['발령후부서'] || '',
                fromPos:  row['발령전직위'] || '',
                toPos:    row['발령후직위'] || '',
                note:     row['비고']      || ''
            });
            if (row['발령후부서'])  emp.department = row['발령후부서'];
            if (row['발령후직위'])  emp.position   = row['발령후직위'];
            added++;
        });
        hrDataSave();
        hrSearch();
        uploadClear('hr-appt');
        var msg = '발령 등록 완료: ' + added + '건';
        if (notFound.length > 0) msg += '\n미등록 사번: ' + notFound.join(', ');
        showAlert(msg);
    });
}

function uploadConfirmCard(parsed, uploadType) {
    var typeRoutes = {
        '학력':    { section:'edu',    firstField:'최종학력', fieldMap:{ '최종학력':'eduLevel', '학교명':'school', '학과':'major', '입학일':'enterDate', '졸업일':'gradDate', '졸업구분':'gradType' }},
        '경력':    { section:'career', firstField:'회사명',   fieldMap:{ '회사명':'company', '부서':'dept', '직위':'pos', '입사일':'enterDate', '퇴사일':'leaveDate', '담당업무':'duty' }},
        '자격면허':{ section:'cert',   firstField:'자격명',   fieldMap:{ '자격명':'name', '발급기관':'issuer', '취득일':'acquireDate', '자격번호':'number' }},
        '상벌':    { section:'reward', firstField:'상벌구분', fieldMap:{ '상벌구분':'type', '내용':'content', '일자':'date', '비고':'note' }}
    };
    showConfirm('총 ' + parsed.length + '건의 인사기록카드 이력을 등록하시겠습니까?').then(function(ok) {
        if (!ok) return;
        var counts = {}, notFound = [], unknownType = [];
        parsed.forEach(function(row) {
            var typeName = (row['유형'] || '').trim();
            var route = typeRoutes[typeName];
            if (!route) { unknownType.push(typeName || '(빈값)'); return; }
            var empId = (row['사번'] || '').trim();
            if (!empId) return;
            var emp = employees.find(function(e) { return e.id === empId; });
            if (!emp) { notFound.push(empId); return; }
            if (!hrExtData[empId]) hrExtData[empId] = {};
            var key = 'card_' + route.section;
            if (!hrExtData[empId][key]) hrExtData[empId][key] = [];
            var record = {};
            Object.keys(route.fieldMap).forEach(function(colName) {
                record[route.fieldMap[colName]] = row[colName] || '';
            });
            hrExtData[empId][key].push(record);
            counts[typeName] = (counts[typeName] || 0) + 1;
        });
        hrDataSave();
        uploadClear(uploadType);
        var parts = Object.keys(counts).map(function(t) { return t + ' ' + counts[t] + '건'; });
        var msg = '등록 완료: ' + (parts.length ? parts.join(', ') : '0건');
        if (notFound.length > 0) msg += '\n미등록 사번: ' + notFound.filter(function(v,i,a){return a.indexOf(v)===i;}).join(', ');
        if (unknownType.length > 0) msg += '\n알 수 없는 유형: ' + unknownType.filter(function(v,i,a){return a.indexOf(v)===i;}).join(', ');
        showAlert(msg);
    });
}
