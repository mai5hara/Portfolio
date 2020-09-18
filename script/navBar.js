const menuHamb = document.querySelector('.navbar-side__hamburger');
const menuNab = document.querySelector('.navbar-menu');

menuHamb.addEventListener('click', () => {
    menuHamb.classList.toggle('navbar-side__action');
    menuNab.classList.toggle('navbar-open');
});