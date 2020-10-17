const menuHamb = document.querySelector('.navbar-side__hamburger');
const menuNab = document.querySelector('.navbar-menu');

menuHamb.addEventListener('click', () => {
    menuHamb.classList.toggle('navbar-side__action');
    menuNab.classList.toggle('navbar-open');
});

//========================
//dropdown
//========================

$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        let links = this.el.find('.dropdownlink');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        };
    }

    let accordion = new Accordion($('#accordion'), false);
});