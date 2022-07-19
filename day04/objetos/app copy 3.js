//  variáveos e escopo de bloco = areá que um valor de uma variavel está disponivel pra gente
let age = 31

if (true) {
    let age = 22
    let name = 'Matheus'
    console.log(`dentro do 1º bloco de código: ${age} ${name}`)
    
    //block aninhados
    if (true) {
        let age = 222
        console.log(`dentro do 2º bloco de código: ${age} ${name}`)
    }
}
console.log(`fora do bloco de código: ${age}`)