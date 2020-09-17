let controller = new ScrollMagic.Controller();

toggleHtml = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.about-skill__percentage-html',
        offset: -400
    })
        .setClassToggle('.about-skill__percentage-html', 'about-skill__percentage--html')
        .addTo(controller);
}

togglePs = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.about-skill__percentage-ps',
        offset: -400
    })
        .setClassToggle('.about-skill__percentage-ps', 'about-skill__percentage--ps')
        .addTo(controller);
}

toggleAi = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.about-skill__percentage-ai',
        offset: -400
    })
        .setClassToggle('.about-skill__percentage-ai', 'about-skill__percentage--ai')
        .addTo(controller);
}

togglePr = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.about-skill__percentage-pr',
        offset: -400
    })
        .setClassToggle('.about-skill__percentage-pr', 'about-skill__percentage--pr')
        .addTo(controller);
}

toggleJs = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.about-skill__percentage-js',
        offset: -400
    })
        .setClassToggle('.about-skill__percentage-js', 'about-skill__percentage--js')
        .addTo(controller);
}

toggleSketch = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.about-skill__percentage-sketch',
        offset: -400
    })
        .setClassToggle('.about-skill__percentage-sketch', 'about-skill__percentage--sketch')
        .addTo(controller);
}

toggleSass = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.about-skill__percentage-sass',
        offset: -400
    })
        .setClassToggle('.about-skill__percentage-sass', 'about-skill__percentage--sass')
        .addTo(controller);
}

toggleReact = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.about-skill__percentage-react',
        offset: -400
    })
        .setClassToggle('.about-skill__percentage-react', 'about-skill__percentage--react')
        .addTo(controller);
}

toggleAf = () => {
    let scene = new ScrollMagic.Scene({
        triggerElement: '.about-skill__percentage-af',
        offset: -400
    })
        .setClassToggle('.about-skill__percentage-af', 'about-skill__percentage--af')
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
