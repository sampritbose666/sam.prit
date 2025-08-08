document.addEventListener('DOMContentLoaded', () => {

    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;


    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        darkModeToggle.innerHTML = '🌙'; 
    } else {
        darkModeToggle.innerHTML = '☀️';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '🌙';
        } else {
            localStorage.removeItem('theme');
            darkModeToggle.innerHTML = '☀️';
        }
    });

    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});