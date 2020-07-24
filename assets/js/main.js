navbarToggler = document.querySelector('.navbar-toggler');
navbar = document.querySelector('.navbar');
navlink = document.querySelectorAll('.nav-link');
navbarNav = document.querySelector('.navbar-nav');
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
navbarToggler.addEventListener('click', pinkNavbar);

for (j = 0; j < navlink.length; j++) {
    navlink[j].addEventListener('click', pinkNavbar);
}




// FUNCTIONS 
function pinkNavbar() {
    if (window.innerWidth < 768) {
        navbar.classList.toggle('bg-light');
        navbar.classList.toggle('pink-navbar');
        for (i = 0; i < navlink.length; i++) {
            navlink[i].classList.toggle('nav-link');
            navlink[i].classList.toggle('pink-navlink');

        };
    };
}


