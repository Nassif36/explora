const sliders = document.querySelectorAll('.slide-in');
const faders = document.querySelectorAll('.fade-in');
var texts = document.querySelectorAll(".mask-up");

const appearOptions = {
    root: null,

    rootMargin: "0px 0px -150px 0px"
};


const appearOnScroll = new IntersectionObserver(
    function (entries, appearOnScroll) {
        
        entries.forEach(entry => {
           
            if (!entry.isIntersecting) {
                entry.target.classList.remove("appear");
                return true;
           
            } else {
                entry.target.classList.add("appear");
        
                appearOnScroll.unobserve(entry.target);

            }
        });
    },
    appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



var texts = document.querySelectorAll(".mask-up");

const appearTextOptions = {
    root: null,

    rootMargin: "0px 0px 20px 0px"
};


const appearTextOnScroll = new IntersectionObserver(
    function (entries, appearTextOnScroll) {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                entry.target.classList.remove("appear");
                return true;

            } else {
                entry.target.classList.add("appear");

                appearTextOnScroll.unobserve(entry.target);

            }
        });
    },
    appearTextOptions);

    texts.forEach(text => {
        appearTextOnScroll.observe(text);
    });