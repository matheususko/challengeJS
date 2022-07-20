// Manipulando elementos, como modificar o texto dentro dos elementos que selecionamos

const paragraph = document.querySelector('p')

// paragraph.innerText += 'Texto Inserido'

const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph, index) => {
//     paragraph.innerHTML += ` bl ${index + 1}`
// })

const div = document.querySelector('.content')

// div.innerHTML += '<h2>Novo h2</h2>'

const people = [ 'Jonatan', 'Vinicius', 'Diego' ]

people.forEach(person => {
    div.innerHTML += `<p>${person}</p>`
})