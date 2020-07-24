navbarToggler = document.querySelector('.navbar-toggler');
navbar = document.querySelector('.navbar');
navlink = document.querySelectorAll('.nav-link');

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
// navbarToggler.addEventListener('click', pinkNavbar);
// navlink.addEventListener('click', pinkNavbar);
// navlink.addEventListener('click', function () {
//     this.navlink.forEach(i => {
//         console.log('I am clicked');
//     });
// })
// themeToggler.addEventListener('click', darkMode);




function pinkNavbar() {
    navbar.classList.toggle('bg-light');
    navbar.classList.toggle('pink-navbar');
    for (i = 0; i < navlink.length; i++) {
        navlink[i].classList.toggle('pink-navlink');

    }
}


// // DARKMODE FUNCTION 
// function darkMode() {
//     body.classList.toggle('dark');
//     footer.classList.toggle('dark-footer');
//     upArrowDiv.classList.toggle('dark-up-arrow-div');
//     upArrow.classList.toggle('fa-up-arrow');
//     upArrow.classList.toggle('dark-up-arrow');
//     themeTogglerIcon2.classList.toggle('dark-theme-toggler');
//     themeTogglerIcon.classList.toggle('show-theme-toggler');

//     for (i = 0; i < verticalNumbers.length; i++) {
//         verticalNumbers[i].classList.toggle('dark-border-color-left');
//         numbersP[i].classList.toggle('dark-border-color-bottom');
//     }
//     for (j = 0; j < aTag.length; j++) {
//         aTag[j].classList.toggle('dark-a');
//     }
//     for (k = 0; k < cards.length; k++) {
//         cards[k].classList.toggle('dark-card');
//     }
//     for (l = 0; l < hDash.length; l++) {
//         hDash[l].classList.toggle('dark-h-dash');
//     }
//     for (m = 0; m < portfolioNumbers.length; m++) {
//         portfolioNumbers[m].classList.toggle('dark-numbers');
//     }
//     for (n = 0; n < hR.length; n++) {
//         hR[n].classList.toggle('dark-hr');
//     }
//     for (o = 0; o < cardSubtitle.length; o++) {
//         cardSubtitle[o].classList.toggle('text-muted');
//         cardSubtitle[o].classList.toggle('dark-subtitle');
//     }
//     for (p = 0; p < footerIcons.length; p++) {
//         // footerIcons[p].classList.toggle('footer-icons a');
//         footerIcons[p].classList.toggle('dark-footer-icons');

//     }

// }
