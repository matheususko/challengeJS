// Reduce
// recebe uma função por argumento, e executa uma função para cada item do array, mas é um pouco diferente, por que a gente usa, quando baseado no array original, e precisar reduzir o array a algum tipo de dado: objLiteral, string ou newArray...

// const numbers = [1,2,3]

// const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

// console.log(sumResult) / 6

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Matheus Susko', score: 234 },
    { name: 'Alfredo Braga', score: 261 },
    { name: 'Pedro H. Silva', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Matheus Susko', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
        accumulator += phaseScore.score
    }

    return accumulator
}, 0)

console.log(rogerScore)