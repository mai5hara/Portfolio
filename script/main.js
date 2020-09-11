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
    Smooth scroll
=============================*/

const workPagenation = document.querySelectorAll(".work__pagenation a");

workPagenation.forEach(pagenation => {
    pagenation.addEventListener("click", e => {
        e.preventDefault();
        const targetId = e.target.hash;
        // console.log(targetId);

        const target = document.querySelector(targetId);
        // console.log(target);

        target.scrollIntoView({ behavior: "smooth"});
    });
});

const sections = document.querySelectorAll(".work__section");	
const observerRoot = document.querySelector(".home__inner");
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

// function activeCategoryAnimation(element2) {
//     const categoryActiveAnimation = document.querySelector(`#${element2.id} .work__contents__left .work__contents__title .work__contents_num`);
//     console.log(categoryActiveAnimation);

//     categoryActiveAnimationChange = () => {

//     }

//     if (categoryActiveAnimation.classList.contains("work__category__animation") === false) {
//         // console.log('This is null');
//         categoryActiveAnimation.classList.add("work__category__animation");
//     } else {
//         categoryActiveAnimation.classList.remove("work__category__animation");

//     }
//     // const newCategoryActiveAnimation = document.querySelector(`#${element2.id} .work__contents__left .work__contents__title .work__contents_num`);
//     // console.log(test);
//     // console.log(newCategoryActiveAnimation);
//     // newCategoryActiveAnimation.classList.add("work__category__animation");


// }

