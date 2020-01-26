const menuHamb = document.querySelector('.nav__menu__hamb');
    const menuNab = document.querySelector('.nav__nemu__container');

    menuHamb.addEventListener('click', () => {
        menuHamb.classList.toggle('nav__action');
        menuNab.classList.toggle('nav__open');
    });