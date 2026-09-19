/* ==========================================================================
   Past Simple Tense Learning Suite - Dark / Light Theme Manager
   ========================================================================== */

(function() {
    // Default to 'dark' theme as requested by user
    const savedTheme = localStorage.getItem('pst_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
});

function initThemeToggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateThemeButton(currentTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('pst_theme', nextTheme);
    updateThemeButton(nextTheme);
}

function updateThemeButton(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    
    if (theme === 'dark') {
        btn.innerHTML = '☀️ โหมดสว่าง';
        btn.setAttribute('title', 'เปลี่ยนเป็นโหมดสว่าง (Light Theme)');
    } else {
        btn.innerHTML = '🌙 โหมดมืด';
        btn.setAttribute('title', 'เปลี่ยนเป็นโหมดมืด (Dark Theme)');
    }
}
