// expressões regulares ou regex, regex é uma abrevicão de regulare expression, que são padrões usados para nós dar match em combinações de caracteres em strings.

const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()

    console.log(event.target.username.value)
})

const username = '@matheus'

const pattern = /^[a-z]{7,}$/

// const isAMatch = pattern.test(username)

// if (isAMatch)  {
//     console.log('O teste da regex passo :)')
// } else {
//     console.log('O teste da regex nao passo :(')
// }


const result = username.search(pattern)

console.log(result)