const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z0-9]{6,12}$/.test(username)


form.addEventListener('submit', event => {
    event.preventDefault()

    const isAValidUsername = testUsername(event.target.username.value)

    if (isAValidUsername) {
        feedback.textContent = 'username válido :)'
        return
    }

    feedback.textContent = 'o username deve conter entre 6 a 12 caracteres'
})

form.username.addEventListener('keyup', event => {
  const isAValidUsername = testUsername(event.target.value)
    console.log(event)
    if (isAValidUsername) {
        form.username.setAttribute('class', 'success')
        return
    }

    form.username.setAttribute('class', 'error')
})