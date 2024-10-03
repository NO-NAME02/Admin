// Theme Toggle Script
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any, on load
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    // Save user preference in local storage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
