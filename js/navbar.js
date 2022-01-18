


// Navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var barraFixed = document.getElementById("barra");

    if (prevScrollpos > currentScrollPos ) {
        barraFixed.style.top = "0";
        barraFixed.style.background = "#3164a3";
        barraFixed.classList.add('fixed')

    } else {
        barraFixed.style.top = "-54vh";
    } 
     if(currentScrollPos >= 5) {
        barraFixed.style.background = "#3164a3";

    } else {
        barraFixed.style.background = "transparent";
        barraFixed.classList.remove('fixed')


    }
    prevScrollpos = currentScrollPos;
}

// Mobile menu
var menu = document.querySelector('.navigation-links');
var menuBtn = document.querySelector(".site-navigation");

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened');
    menuBtn.classList.toggle('opened');
});
var menuLink = document.querySelectorAll(".nav_links li");
menuLink.forEach(menuLink => menuLink.addEventListener('click', () => {
    menu.classList.toggle('opened');
}));