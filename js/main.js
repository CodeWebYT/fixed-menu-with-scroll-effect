// Variables
let fixedNavbar = document.getElementById('navigation');
let menuPosition = fixedNavbar.getBoundingClientRect();
let btnBars = document.getElementById('btnBars');
let navbar = document.getElementById('navbar');

// Fixed navbar
window.onscroll = () => {
    if (window.scrollY >= menuPosition.top) {
        fixedNavbar.classList.add('navFixed');
    } else {
        fixedNavbar.classList.remove('navFixed');
    }
}

// Responsive navigation bar
btnBars.addEventListener('click', () => {
    if (btnBars.checked) {
        navbar.classList.add('navbarResponsive');
    } else {
        navbar.classList.remove('navbarResponsive');
    }
})