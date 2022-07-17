// for  loop
// 
// for (let i = 0; i < 5; i++ ) {
//     console.log(`dentro do loop: ${i}`)
// }

// console.log('Loop concluido!')

const names = ['linus', 'Ada', 'Bill']

for (let i = 0; i < names.length; i++) {
    const HTMLTemplate = `<p>${names[i]}</p>`
    console.log(HTMLTemplate)
}