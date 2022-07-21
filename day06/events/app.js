const ul = document.querySelector('ul')

// ul.remove()


const button = document.querySelector('button')

button.addEventListener('click', () => {
    // ul.innerHTML += '<li>Novo item</li>'
    const li = document.createElement('li')
    li.textContent = 'Novo item'
    
    ul.prepend(li)
})


ul.addEventListener('click', event => {
    const clickedElement = event.target

    if (clickedElement.tagName === 'LI' ) {
        clickedElement.remove()
    }
})