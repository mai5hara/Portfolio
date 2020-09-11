let controller = new ScrollMagic.Controller();

toggleHtml = () => {
let scene = new ScrollMagic.Scene({
    triggerElement: '.skills__percentage__html',
    offset: -400
})
    .setClassToggle('.skills__percentage__html', 'percentage__html')
    .addTo(controller);
}

togglePs = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__ps',
        offset: -400
    })
        .setClassToggle('.skills__percentage__ps', 'percentage__ps')
        .addTo(controller);
    }

toggleAi = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__ai',
        offset: -400
    })
        .setClassToggle('.skills__percentage__ai', 'percentage__ai')
        .addTo(controller);
    }

togglePr = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__pr',
        offset: -400
    })
        .setClassToggle('.skills__percentage__pr', 'percentage__pr')
        .addTo(controller);
    }

toggleJs = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__js',
        offset: -400
    })
        .setClassToggle('.skills__percentage__js', 'percentage__js')
        .addTo(controller);
    }

toggleSketch = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__sketch',
        offset: -400
    })
        .setClassToggle('.skills__percentage__sketch', 'percentage__sketch')
        .addTo(controller);
    }

toggleSass = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__sass',
        offset: -400
    })
        .setClassToggle('.skills__percentage__sass', 'percentage__sass')
        .addTo(controller);
    }

toggleReact = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__react',
        offset: -400
    })
        .setClassToggle('.skills__percentage__react', 'percentage__react')
        .addTo(controller);
    }

toggleAf = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.skills__percentage__af',
        offset: -400
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
