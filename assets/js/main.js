// ELEMENTS 
const body = document.querySelector('body');
const themeToggler = document.querySelector('.theme-toggler');
const navbar = document.querySelector('#testnav');
const verticalNumbers = document.querySelectorAll('.vertical-numbers');
const numbersP = document.querySelectorAll('.numbers-p');
const aTag = document.querySelectorAll('a');
const footer = document.querySelector('footer');
const footerIcons = document.querySelectorAll('.footer-icons-a');
const cards = document.querySelectorAll('.card');
const hDash = document.querySelectorAll('.h-dash');
const portfolioNumbers = document.querySelectorAll('.portfolio-numbers');
const hR = document.querySelectorAll('hr');
const cardSubtitle = document.querySelectorAll('.card-subtitle');
const upArrowDiv = document.querySelector('.up-arrow-div');
const upArrow = document.querySelector('.up-arrow');
const port = document.querySelector('.portfolio-2-img');
const themeTogglerIcon = document.querySelector('.theme-toggler-icon');
const themeTogglerIcon2 = document.querySelector('.theme-toggler-icon-2');



// PRELOADER CODE 
var overlay = document.getElementById("overlay");

// NAVBAR COLLAPSE ON CLICK 
$(document).on("click", ".navbar-collapse", function (e) {
    if ($(e.target).is("a")) {
        $(this).collapse("hide");
    }
});
// AOS.init({ offset: 300, duration: 800 }); AOS ANIMATION INITIALIZER
$(function () {
    AOS.init({ offset: 300, duration: 1000, easing: "ease-out-quad", once: 0 });
    window.addEventListener('load', AOS.refresh);
});



// EVENT LISTENERS 
window.addEventListener('load', function () {
    overlay.style.display = 'none';
})
themeToggler.addEventListener('click', darkMode);



// DARKMODE FUNCTION 
function darkMode() {
    body.classList.toggle('dark');
    footer.classList.toggle('dark-footer');
    upArrowDiv.classList.toggle('dark-up-arrow-div');
    upArrow.classList.toggle('fa-up-arrow');
    upArrow.classList.toggle('dark-up-arrow');
    themeTogglerIcon2.classList.toggle('dark-theme-toggler');
    themeTogglerIcon.classList.toggle('show-theme-toggler');

    for (i = 0; i < verticalNumbers.length; i++) {
        verticalNumbers[i].classList.toggle('dark-border-color-left');
        numbersP[i].classList.toggle('dark-border-color-bottom');
    }
    for (j = 0; j < aTag.length; j++) {
        aTag[j].classList.toggle('dark-a');
    }
    for (k = 0; k < cards.length; k++) {
        cards[k].classList.toggle('dark-card');
    }
    for (l = 0; l < hDash.length; l++) {
        hDash[l].classList.toggle('dark-h-dash');
    }
    for (m = 0; m < portfolioNumbers.length; m++) {
        portfolioNumbers[m].classList.toggle('dark-numbers');
    }
    for (n = 0; n < hR.length; n++) {
        hR[n].classList.toggle('dark-hr');
    }
    for (o = 0; o < cardSubtitle.length; o++) {
        cardSubtitle[o].classList.toggle('text-muted');
        cardSubtitle[o].classList.toggle('dark-subtitle');
    }
    for (p = 0; p < footerIcons.length; p++) {
        // footerIcons[p].classList.toggle('footer-icons a');
        footerIcons[p].classList.toggle('dark-footer-icons');

    }

}
