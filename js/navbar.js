


// Navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var barraFixed = document.getElementById("barra");
    // var textFixed = document.querySelectorAll(".mask-up");
    //  for (let i = 0; i < textFixed.length; i++) {
    //      textFixed[i].style.transition = "all .8s ease"
    //  }
    if (prevScrollpos > currentScrollPos ) {
        barraFixed.style.top = "0";
        barraFixed.style.background = "black";
        barraFixed.style.margin = "0";
         barraFixed.style.padding = "1em 6.2%";


    } else {
        barraFixed.style.top = "-54vh";
        // for (let i = 0; i < textFixed.length; i++) {
        //      textFixed[i].style.transform = "translateY(0px)"
        // }


    } 
     if(currentScrollPos >= 5) {
        barraFixed.style.background = "black";
    } else {
        barraFixed.style.background = "transparent";
         barraFixed.style.margin = "2em 0";
    }
    
    prevScrollpos = currentScrollPos;
}


