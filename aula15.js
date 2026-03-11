/*
Funções em JavaScript são blocos de código reutilizáveis que executam tarefas específicas quando chamadas. Elas ajudam a organizar o código, evitando repetições, e podem receber parâmetros e retornar valores.

Tipos Principais
Existem vários tipos de funções, cada uma com sintaxe própria.
Funções declaradas: Definidas com function e nome, hoisted (podem ser chamadas antes da declaração).
Funções expressas: Atribuídas a variáveis, executadas só após a definição.
Arrow functions: Sintaxe curta com =>, ideal para callbacks curtos.
Exemplos Básicos
Aqui vão exemplos práticos de cada tipo.

Função Declarada
function saudacao(nome) {
  return "Olá, " + nome + "!";
}
console.log(saudacao("Joaquim"));

Função Expressa
const soma = function(a, b) {
  return a + b;
};
console.log(soma(5, 3)); 

Arrow Function

const dobro = (x) => x * 2;
console.log(dobro(4)); // Saída: 8
*/
// function nome(){
//     console.log("Curso de JavaScript")
// }
// nome() //chamada da função





// function dado(nome){
//     return ("Eu chamo-me " + nome + "e estou aprendendo JavaScript")
    
// }
// console.log(dado("joaquim"))

// Funções de retorno
// function canal(){
//     let n1= 10
//     let n2 =20
//     let r = n1 * n2
//     // return r
//     if (r%2 == 0)
//         return "é um numero par"
//     else
//         return "é um numero impar"
    
// }
// let num = canal()
// console.log(num)

// usando exemplo com html index15
function mudarTexto(){
    let d1=document.getElementById("d1")
    let d2=document.getElementById("d2")
    let d3=document.getElementById("d3")
    d1.innerHTML="CFB CURSOS"
    d2.innerHTML="CFB CURSOS"
    d3.innerHTML="CFB CURSOS"
}
