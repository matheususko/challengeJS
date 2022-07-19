// Valores primitivos

// let scoreOne = 50
// let scoreTwo = scoreOne

// console.log(`Score One: ${scoreOne} | Score Two: ${scoreTwo}`)

// scoreOne = 100

// console.log(`Score One: ${scoreOne} | Score Two: ${scoreTwo}`)


// Valiores de referência
let userOne = { name: 'Matheus', age: 22}
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 32

console.log(userOne, userTwo)