const doc = document;

window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
    const nav = doc.querySelector('nav');
    if(scrollY > 0) {
        nav.classList.add('scroll');
    }else{
        nav.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll() {
    const backToTopButton = doc.querySelector('#backToTopButton');
    if(scrollY > 300) {
        backToTopButton.classList.add('show');
    }else{
        backToTopButton.classList.remove('show');
    }
}

function openMenu() {
    const body = doc.querySelector('body');
    body.classList.add('menu-expanded');
}

function closeMenu() {
    const body = doc.querySelector('body');
    body.classList.remove('menu-expanded');
}

var hue = 1;
function rainbow() {
    setInterval(() => {
        document.documentElement.style.setProperty('--hue', `${hue}`);
        hue++;
    }, 5);
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, #home img, 
#home .stats, #services, 
#services header, #services .cards, #about, #about header,
#about .content`);

/*rainbow();*/