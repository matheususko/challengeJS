## 3 Tipo des escopos em JS.

1. Escopo de funções;
2. Escopo de blocos;
3. Escopo de Lêxicos;

---

# O que é escopo?

## funções
    - é a visibilidade de uma variável:
dependendo da onde declaramos a nossa variável, vai depender se ela pode ser acessada de outro escopo ou não

```js
let message = 'oi'

function getMessage() {
    let message = 'Oi'

    
}
getMessage() message // 'Oi'
console.log(message) // 'oi'
```
---

## blocos
    - Não necessáriamente está relacionada a escopo de funções:
em js, um bloco tem anotações de abertura e fechamento com chaves.
- lops como if, for of, FOR, forEach etc são blcos.
- let e const tem regras diferente de VAR, pois var ela pode acessar global

```js
if (true) {
    let dragon = 'Balerion'
    console.log(dragon)
}

console.log(dragon) // dragon is not definied
```
---

## léxico
    - funções aninhada, elas possibilitam a utilização de variáveis em outras funções dentro de uma função, 

```js
    const external = () => {
        const greet = 'Oi'

        const internal = () => {
            const message = `${greet}. Seu pai tem boi?`
            console.log(message)
        } 
        
        internal()
    } 
```
---

## Document objectt Model - DOM / é o coração de qualquer modificação em uma web page
# Adicionar, modificar e remover conteúdo;
# Events
# PopUp

1. Decida qual elemento quer buscar
2. buscar ou selecionar = query/consultar na definição literal em português
3. depois manipulamos.
