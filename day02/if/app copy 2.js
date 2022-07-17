// Operadores lógicos - "OU" || e "E" &&

const password = 'oi1s4'

if (password.length >= 12 && password.includes('1')) {
    console.log('Essa senha é muito forte :)')
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
    console.log('Senha forte')
} else {
    console.log('A senha deve conter 8 ou mais caracteres')
}