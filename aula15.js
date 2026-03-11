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
console.log(dobro(4)); 
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
// function mudarTexto(){
//     let d1=document.getElementById("d1")
//     let d2=document.getElementById("d2")
//     let d3=document.getElementById("d3")
//     d1.innerHTML="CFB CURSOS"
//     d2.innerHTML="CFB CURSOS"
//     d3.innerHTML="CFB CURSOS"
// }

// Função parametrizada

function multiplicar(a, b=4){
    let mult = a * b
    if (mult >= 0){
        console.log("O valor é : Positivo")
    }else{
        console.log("O valor é : Negativo")
    }
    return `O resuldado da multiplicação é: ${mult} `
    
}

console.log(multiplicar(-3))

// Função Rest usando a metodo map()
/*Permite representar um numero in definido
de argumentos como um array.*/

function mult(multiplicador, ...args){
    return args.map((x)=>multiplicador*x);
}
var arr =mult(3,3,1,4) 
// o primeiro valor multiplica cada um dos elementos 
console.log(arr)

const num=[2, 4, 5]
const dobro = num.map(num=>num*2)
console.log(`resultadoe em dobro: ${dobro}`)
console.log(`conjunto original: ${num}`)

function soma(...valores){
    let res = 0
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(soma(3,4,5,1,5, 34))
console.log(typeof(soma()))


// Funções anonimas
/*
Funções anônimas em JavaScript são funções sem nome explícito, geralmente atribuídas a 
variáveis ou passadas como argumentos. 
const saudar=function(nome){
    return `Olá ${nome}`
}
console.log(saudar("Joaquim"))
*/
const saudar=function(nome){
    return `Olá ${nome}`
}
console.log(saudar("Joaquim"))

let f = function(n1, n2){
    return n1 * n2
}
console.log(f(3, 5))

let v=function(...valores){
    let r=0
    for (v of valores){
        r+=v
    }
    return r
}
console.log(v(3, 5))
// usando o new 
const b = new Function("v1", "v2","v3=10","return v1+v2+v3")
console.log(b(8,6))

// Funções Arrow
const d =(x)=>x*2;
console.log(d(4))

const add =n=>n+10 
console.log(add(6))


