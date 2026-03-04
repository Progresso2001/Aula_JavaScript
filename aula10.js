// Operadores ternarios: são uma forma de escrever condicionais if/else
// usando 3 operando: valorseTrue: valorseFalse.

// sintaxe: 
// let res = (idade >= 18) ? "Maior de idade" : "Menor de idade";
// console.log(res);

idade = 20;
let res = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(res)

let num = 10;
let res = num%2
if(res==0){
    console.log("Par")
}else{
    console.log("impar")
}
// usando operador ternario
let num = 10
let res = (num%2 ==0 ) ? "Par" : "Impar";
console.log(res);

let a = 10
let b = 4
c = (a > b ? "Verdadeiro" : "Falso")
console.log(c)

