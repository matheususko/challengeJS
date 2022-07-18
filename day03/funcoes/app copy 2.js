// argumentos, parâmentros e default paramenters
const myFunc = function (name = 'Estrôncio', lastName = 'Almeida') {
    console.log(`Oi, ${name} ${lastName}`)
}

myFunc()
myFunc('Roger', 'Melo')