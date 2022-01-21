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



    var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Gracias, nos pondremos en contacto con vos!";
        form.reset()
    }).catch(error => {
        status.innerHTML = "Oops! no olvides completar los campos"
    });
}
form.addEventListener("submit", handleSubmit) 
  