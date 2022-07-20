// // modificando css pelo js

// const title = document.querySelector('h1')

// // title.setAttribute('style', 'margin: 40px;')

// console.log(title.style)
// console.log(title.style.color)

// title.style.margin = '40px'
// title.style.color = 'pink'
// title.style.fontSize = '3rem'


// Interagindo com classes CSS

// const paragraph = document.querySelector('p')

// console.log(paragraph.classList)

// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('success')

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(paragraph => {
//     if (paragraph.textContent.includes('error')) {
//         paragraph.classList.add('error')
//     }
//     if (paragraph.textContent.includes('success')) {
//         paragraph.classList.add('success')
//     }
// })

const title = document.querySelector('h1')

title.classList.toggle('test')
title.classList.toggle('test')
