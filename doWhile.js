function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')

//Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim:
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
 
let opcao //somente iniciada a variável, sem valor inicial!
 
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)
 
console.log('Até a próxima!')