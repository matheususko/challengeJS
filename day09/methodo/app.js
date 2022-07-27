// encadeando methodo de array

const books = [
    { name: 'Código Limpo', price: 30 },
    { name: 'O milagrew da manhã', price: 5 },
    { name: 'Alice no País das Maravilhas', price: 10 },
    { name: 'Quem Pensa Enriquece', price: 50 },
    { name: 'O livro da ciência', price: 40 },
]

const bookOnSale = books
    .filter(({ price }) => price > 20)
    .map(({ name, price }) => 
        `O preço do livro "${name}" caiu para ${price} reais`)
debugger