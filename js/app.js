function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById('box').classList.remove('box');
    } else {
        document.getElementById('box').classList.add('box');
    }
}

const getSubmitData = () => {
    event.preventDefault()
    let name = document.getElementById('form-name').value;
    let number = document.getElementById('form-number').value;
    let to = document.getElementById('form-mail').value;
    let subject = document.getElementById('form-asunto').value;
    let body = document.getElementById('form-mensaje').value;
    if (name.value <= 0) {
        alert('completa los campos')
    } else {

    }
    //show the loading animation
    document.getElementById('loading').style.display = 'block';

    let url = "https://email-test-khali.herokuapp.com";
    let data = {
        name,
        number,
        to,
        subject,
        body,
    };



    fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.status === 'ok') {
                document.getElementById('form-name').value = '';
                document.getElementById('form-number').value = '';
                document.getElementById('form-mail').value = '';
                document.getElementById('form-asunto').value = '';
                document.getElementById('form-mensaje').value = '';
                document.getElementById('loading').style.display = 'none';
                document.getElementById('my-form-status').innerHTML = 'Mensaje enviado correctamente';
                document.getElementById('my-form-status').style.background.color = '#008000';
                document.getElementById('my-form-status').style.border.radius = '3px';
                document.getElementById('my-form-status').style.maxWidth = '450px';
            } else {

                document.getElementById('my-form-status').style.color = '#008000';
                document.getElementById('my-form-status').style.border.radius = '3px';
                document.getElementById('my-form-status').style.padding = '1em 2em';
                document.getElementById('my-form-status').innerHTML = 'Ooops.. ocurrio un error estamos trabajando en ello';
            }
        });

};
  