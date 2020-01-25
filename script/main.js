/*=============================
     index.html navbar
=============================*/

// navActiveMenu = () => {
    const menuHamb = document.querySelector('.nav__menu__hamb');
    const menuNab = document.querySelector('.nav__nemu__container');

    menuHamb.addEventListener('click', () => {
        menuHamb.classList.toggle('nav__action');
        menuNab.classList.toggle('nav__open');
    });
// };

// navActiveMenu();


/*=============================
     index.html hometitle
=============================*/

// const TypeWriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// TypeWriter.prototype.type = function() {
//     const current = this.wordIndex % this.words.length;
//     const fullTxt = this.words[current];

//     // console.log(fullTxt)

//     if(this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.txtElement.innerHTML = `<span class="home__title__add">${this.txt}</span>`;

//     let typeSpeed = 300;
//     if(this.isDeleting) {
//         typeSpeed /= 2;
//     }

//     if(!this.isDeleting && this.txt === fullTxt) {
//         typeSpeed = this.wait;
//         this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.wordIndex++;
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed)
// }

// document.addEventListener('DOMContentLoaded', init);

// function init() {
//     const txtElement = document.querySelector('.home__title');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');

//     new TypeWriter(txtElement, words, wait);
// }

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        // console.log(fullTxt)

        if(this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="home__title__add">${this.txt}</span>`;

        let typeSpeed = 300;
        if(this.isDeleting) {
            typeSpeed /= 2;
        }

        if(!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.home__title');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}