const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav a');

menuIcon.addEventListener('click', function () {
    navUl.classList.toggle('show');
    toggleMenuIcon();
});
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const isMobile = window.innerWidth <= 600;

        // If it's a mobile screen, hide navigation menu and show hamburger icon
        if (isMobile) {
            navUl.classList.remove('show');
            toggleMenuIcon();
        }

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
    });
});

function toggleMenuIcon() {
    // Toggle hamburger icon
    if (navUl.classList.contains('show')) {
        menuIcon.style.display = 'none';
    } else {
        menuIcon.style.display = 'block';
    }
}