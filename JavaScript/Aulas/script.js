//alert("hello world!")//caixa de dialogo

/* Variavel local x global
global pode ser chamada em qualquer parte do código
local deve ser chamada dentro da função que foi criada
*/

var escopo_global = "global"
console.log(escopo_global)

function escopoLocal() {
    let escopo_local = "local"
    console.log(escopo_local)
}
escopoLocal();//chamar a função e imprimir variavel local

/*
comparação ==
verifica apenas o valor e retorna resultado booleano
ex.: "0"==0 resultado: true
comparação identica ===
verifica se valor e tipo são iguais
ex.: "0"===0; resultado: false
*/

/* 
Função declarativa:
function nomeFuncao(){
console.log("Função declarativa")
} 
funcao();

Expresão de Funções: 
a nomeação é opcional
exemplo1:
var funcao = function nomeFuncao(){
    ${instrucao}
} 
funcao();
exemplo2:
var funcao = function(){
    ${instrucao}
}
funcao();

Arrow Function:
função de expressao de sintaxe curta. sempre sao anonimas
exemplo3:
var funcao =()=>{
    ${instrucao}
}
funcao();
*/
var funcao = function nomeFuncao() {
    console.log("função exemplo 1")
}
funcao();
var funcao = function () {
    console.log("função exemplo 2")
}
funcao();
var funcao = () => {
    console.log("função exemplo 3")
}
funcao();