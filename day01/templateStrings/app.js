const postTitle = 'É bolacha ou biscoite?'
const postAuthor = 'Matheus Sad'
const postComments  = 15

// usando 'concatenação
// const postMessage = 'o post "' + postTitle + '" do ' + postAuthor + ', tem ' + ' comentários.'

// usando template strings
/**
 * const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`
console.log(postMessage)
 * 
 */

// criando templates HTML
const html = `
    <h2>${postTitle}</h2>^
    <p>Author: ${postComments}</p>
    <span>Este post tem ${postComments}</span>
`
console.log(html)