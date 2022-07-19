//  objetos em array
let user = {
    name: 'Matheus',
    age: 22,
    email: 'matheususko@gmail.com',
    city: 'São paulo',
    blogPosts: [
        {title: 'Empadão de frango', likes: 30},
        {title: '4 receitas de purê de batata', likes: 70}
    ],
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
            console.log(post.title, post.likes)
        })
    }
}

user.logBlogPosts()
// user.login()
// user.logout()
