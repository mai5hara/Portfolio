/*=============================
    index.html home greeting
=============================*/

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

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="index-wrap__greeting-cursor">${this.txt}</span>`;

        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.index-wrap__greeting');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}

/*=============================
    Smooth scroll
=============================*/

const workPagenation = document.querySelectorAll(".pagenation a");

workPagenation.forEach(pagenation => {
    pagenation.addEventListener("click", e => {
        e.preventDefault();
        const targetId = e.target.hash;

        const target = document.querySelector(targetId);

        target.scrollIntoView({ behavior: "smooth" });
    });
});

const sections = document.querySelectorAll(".portfolio-section");
const observerRoot = document.querySelector(".home-inner");
const options = {
    root: observerRoot,
    rootMargin: "-50% 0px",
    threshold: 0
};

const observer = new IntersectionObserver(doWhenIntersect, options);
sections.forEach(section => {
    observer.observe(section);
});

function doWhenIntersect(entriesList) {
    const entries = Array.prototype.slice.call(entriesList, 0);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            activatePagenation(entry.target);
            // activeCategoryAni mation(entry.target);
        }
    });
}

function activatePagenation(element) {
    const currentActiveIndex = document.querySelector("#pagenation .active");
    if (currentActiveIndex !== null) {
        currentActiveIndex.classList.remove("active");
    }
    const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
    newActiveIndex.classList.add("active");
}

/*=============================
    language change
=============================*/

const en = document.querySelector(".language-change__en");
const jp = document.querySelector(".language-change__jp");
const enContents = document.querySelector(".language-switch__en");
const jpContents = document.querySelector(".language-switch__jp");
console.log('enContents', enContents)
console.log('jpContents', jpContents)

en.addEventListener('click', () => {
    if (en.classList.contains('language-change__active')) {
        en.classList.remove('language-change__active')
        jp.classList.add('language-change__active--jp')
        enContents.classList.add('language-switch__inactive')
        jpContents.classList.remove('language-switch__inactive')
    } else {
        en.classList.add('language-change__active')
        jp.classList.remove('language-change__active--jp')
        enContents.classList.remove('language-switch__inactive')
        jpContents.classList.add('language-switch__inactive')
    }
})

jp.addEventListener('click', () => {
    if (jp.classList.contains('language-change__active--jp')) {
        en.classList.add('language-change__active')
        jp.classList.remove('language-change__active--jp')
        enContents.classList.remove('language-switch__inactive')
        jpContents.classList.add('language-switch__inactive')
    } else {
        en.classList.remove('language-change__active')
        jp.classList.add('language-change__active--jp')
        enContents.classList.add('language-switch__inactive')
        jpContents.classList.remove('language-switch__inactive')
    }
})