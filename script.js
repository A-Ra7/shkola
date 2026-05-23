// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Закрывать меню при клике на любую ссылку
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Параллакс эффект
document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.getElementById('parallax-image');
    
    // Настройки параллакса
    const heroParallaxSpeed = 0.3;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        // Параллакс для героя
        if(heroImage) {
            heroImage.style.transform = 'translate3d(0, ' + (scrollPosition * heroParallaxSpeed) + 'px, 0)';
        }
    });
});

