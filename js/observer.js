const sliders = document.querySelectorAll('.slide-in');
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    root: null,

    rootMargin: "0px 0px -150px 0px"
};


const appearOnScroll = new IntersectionObserver(
    function (entries, appearOnScroll) {
         var textFixed = document.querySelectorAll(".mask-up");
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
