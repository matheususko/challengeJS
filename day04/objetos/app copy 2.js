//  adicionando métodos a um objeto

let user = {
    name: 'Matheus',
    age: 22,
    email: 'matheususko@gmail.com',
    city: 'São paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login:  function() {
        console.log('Usuário logado')
    },
    logout: function() {
        console.log('Usuário deslogado')
    }
}

user.login()
user.logout()