let form = document.getElementById('userForm')
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            firstName: e.target[0].value,
            lastName: e.target[1].value
        })
    })
    .then((res) => {
        e.target[0].value = ''
        e.target[1].value = ''
})
    .catch((er) => alert('error', er) )
})