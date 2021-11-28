function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById('box').classList.remove('box');
    } else {
        document.getElementById('box').classList.add('box');
    }
}

var x = window.matchMedia("(max-width: 850px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes