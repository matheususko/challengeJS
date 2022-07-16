// pra que usar array: Pra armazenar uma lista de valores, que geralmente tem uma relação entre si.

// Array
let heroes = ['Batman', 'Cat woman', 'Iron Man']
//sobre-escrevendo
heroes[2] = 'Spider-Man'

const ages = [31, 25, 42, 62, 25]

const randomArray = ['Parker', 'Diana', 19, 18]


// Métodos de Array
// console.log(heroes.length)

// join coloca uma separador entre os dados do array
const joinHeroes = heroes.join()
// indexOf pega a primeira posição do array
const indexOf25 = ages.indexOf(25)
// concat pode juntar dois array
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
// push (mutação de valores)
const pushToHeroes = heroes.push('Cyclops', 'Hulk')
// pop remove o ultimo dado de um array
const popHeroes = heroes.pop()

console.log(heroes)

