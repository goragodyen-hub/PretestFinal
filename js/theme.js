/* ==========================================================================
   Past Simple Tense Learning Suite - Dark / Light Theme Manager
   ========================================================================== */

(function() {
    // Default to 'dark' theme as requested by user
    const savedTheme = localStorage.getItem('pst_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
});

function initThemeToggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    syncBodyTheme(currentTheme);
    updateThemeButton(currentTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    syncBodyTheme(nextTheme);
    localStorage.setItem('pst_theme', nextTheme);
    updateThemeButton(nextTheme);
}

function syncBodyTheme(theme) {
    if (!document.body) return;
    if (theme === 'dark') {
        if (document.body.classList.contains('bg-slate-50')) {
            document.body.classList.remove('bg-slate-50', 'text-slate-800');
            document.body.classList.add('bg-slate-900', 'text-slate-100');
        }
    } else {
        if (document.body.classList.contains('bg-slate-900')) {
            document.body.classList.remove('bg-slate-900', 'text-slate-100');
            document.body.classList.add('bg-slate-50', 'text-slate-800');
        }
    }
}

function updateThemeButton(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        if (theme === 'dark') {
            btn.innerHTML = '☀️ โหมดสว่าง';
            btn.setAttribute('title', 'เปลี่ยนเป็นโหมดสว่าง (Light Theme)');
        } else {
            btn.innerHTML = '🌙 โหมดมืด';
            btn.setAttribute('title', 'เปลี่ยนเป็นโหมดมืด (Dark Theme)');
        }
    }

    const themeIconDesktop = document.getElementById('themeIconDesktop');
    const themeIconMobile = document.getElementById('themeIconMobile');
    const themeText = document.getElementById('themeText');
    if (themeIconDesktop) themeIconDesktop.innerText = theme === 'dark' ? '🌙' : '☀️';
    if (themeIconMobile) themeIconMobile.innerText = theme === 'dark' ? '🌙' : '☀️';
    if (themeText) themeText.innerText = theme === 'dark' ? 'โหมดมืด' : 'โหมดสว่าง';
}
