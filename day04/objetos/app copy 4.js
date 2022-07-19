//  a palavra-chave this
let user = {
    name: 'Matheus',
    age: 22,
    email: 'matheususko@gmail.com',
    city: 'São paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function () {
        console.log('Usuário logado')
    },
    logout: function () { 
        console.log('Usuário deslogado')
    },
    // logBlogPosts () { / chortcurlt
    logBlogPosts: function () {
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post)
        })
    }
}

user.logBlogPosts()
// user.login()
// user.logout()
