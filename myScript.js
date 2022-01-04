const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('logIn');
const errorElement = document.getElement
form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === "" || name.value == null) {
        aler('Name is required!')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
})