const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const form = document.getElementById('logIn');
const errorElement = document.getElement('error')
form.addEventListener('submit', (e) => {
    let messages = [];
    if (formName.value === "" || formName.value === null) {
        alert('Name is required!');

    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(',');
    }
});

////////////////////////////////////////////////////


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     checkInputs();
// });

// function checkInputs() {
//     const nameValue = formName.value.trim();
//     const emailValue = formEmail.value.trim();

//     if (nameValue === '') {
//         setErrorFor(formName, 'Username cannot be blank');
//     } else {
//         setSuccessFor(formName);
//     }
// }
// Web worker for counting time 
var w;

function startWorker() {
    if (typeof(Worker) !== "undefined") {
        if (typeof(w) == "undefined") {
            w = new Worker("worker.js");
        }
        w.onmessage = function(event) {
            let x = event.data;
            if (x >= 60) {
                result = parseInt(x / 60) + " minutes and " + (x % 60) + " seconds."
            } else {
                result = event.data + " seconds."
            }
            document.getElementById("result").innerHTML = result;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}

window.addEventListener("load", startWorker());