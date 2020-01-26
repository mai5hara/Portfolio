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

/*=============================
     ScrollTrogger
=============================*/

/*------ about skills -------*/
let controller = new ScrollMagic.Controller();

toggleHtml = () => {
let scene = new ScrollMagic.Scene({
    triggerElement: '.skills__percentage__html',
    offset: -430
})
    .setClassToggle('.skills__percentage__html', 'percentage__html')
    .addTo(controller);
}

togglePs = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__ps',
        offset: -430
    })
        .setClassToggle('.skills__percentage__ps', 'percentage__ps')
        .addTo(controller);
    }

toggleAi = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__ai',
        offset: -430
    })
        .setClassToggle('.skills__percentage__ai', 'percentage__ai')
        .addTo(controller);
    }

togglePr = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__pr',
        offset: -430
    })
        .setClassToggle('.skills__percentage__pr', 'percentage__pr')
        .addTo(controller);
    }

toggleJs = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__js',
        offset: -430
    })
        .setClassToggle('.skills__percentage__js', 'percentage__js')
        .addTo(controller);
    }

toggleSketch = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__sketch',
        offset: -430
    })
        .setClassToggle('.skills__percentage__sketch', 'percentage__sketch')
        .addTo(controller);
    }

toggleSass = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__sass',
        offset: -430
    })
        .setClassToggle('.skills__percentage__sass', 'percentage__sass')
        .addTo(controller);
    }

toggleReact = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__react',
        offset: -430
    })
        .setClassToggle('.skills__percentage__react', 'percentage__react')
        .addTo(controller);
    }

toggleAf = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__af',
        offset: -430
    })
        .setClassToggle('.skills__percentage__af', 'percentage__af')
        .addTo(controller);
    }

toggleAi();
togglePr();
toggleHtml();
togglePs();
toggleJs();
toggleSketch();
toggleSass();
toggleReact();
toggleAf();


/*------ work title -------*/
toggleProjectTitle = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.work__contents__border__otm',
        triggerHook:　"onEnter"
    })
        .setClassToggle('.work__contents__border__otm', 'work__contents__border__otm')
        .addTo(controller);
    }

toggleProjectTitle();

/*=============================
     Smooth scroll
=============================*/

// const workPagenation = document.querySelectorAll(".work__pagenation a");
// const pagers = Array.prototype.slice.call(workPagenation, 0);	
// workPagenation.forEach(pagenation => {
//     pagenation.addEventListener("click", e => {
//         e.preventDefault();
//         const targetId = e.target.hash;
//         const target = document.querySelector(targetId);
//         target.scrollIntoView({ behavior: "smooth"});
//     });
// });

// const sectionsList = document.querySelectorAll(".work__contents__wrap");
// const sections = Array.prototype.slice.call(sectionsList, 0);	
// const observerRoot = document.querySelector(".home__inner");
// const options = {
//     root: observerRoot,
//     rootMargin: "-50% 0px",
//     threshold: 0
// };

// const observer = new IntersectionObserver(doWhenIntersect, options);
// sections.forEach(section => {
//     observer.observe(section);
// });

// function doWhenIntersect(entriesList) {
//     const entries = Array.prototype.slice.call(entriesList, 0);	
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//         activatePagenation(entry.target);
//         }
//     });
// }

// function activatePagenation(element) {
//     const currentActiveIndex = document.querySelector("#pagination .active");
//     if (currentActiveIndex !== null) {
//         currentActiveIndex.classList.remove("active");
//     }
//     const newActiveIndex = document.querySelector("a[href='#" + element.id + "']");
//     newActiveIndex.classList.add("active");
// }

new fullpage('.home__inner',{
    autoScrolling: true,
})