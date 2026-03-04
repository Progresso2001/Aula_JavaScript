/*
O operador spread (...) em JavaScript é usado para expandir elementos de arrays, objetos ou strings em contextos apropriados, facilitando cópias,
 merges e chamadas de funções.
 Diferença com Rest
Spread expande; rest (...) coleta argumentos em array. Ambos usam ..., mas contextos opostos
 Sintaxe
A sintaxe básica é ...iterável, aplicada em arrays ([...array]), objetos ({...objeto}) ou funções (função(...args)).
*/
// Usos Comuns
//Arrays: Copiar ou concatenar.
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Objetos: Clonar ou mesclar propriedades.
// const obj1 = { a: 1 };
// const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// Funções: Passar array como argumentos.
// const soma = (x, y) => x + y;
// const nums = [1, 2];
// console.log(soma(...nums)); // 3

// Strings: Converter em array de caracteres.
// const str = 'abc';
// console.log([...str]); // ['a', 'b', 'c']

let a = [1, 3, 4, 10]
let b = [20, 5, 6, 17]
let c =  [...a, ...b]
console.log("conjunto a: " + a)
console.log("conjunto b: " + b)
console.log("conjunto c: " + c )

let str = "Progresso"
let str2  = "aeiou"
let str3 = []
console.log("str3 conjunto de vogais e alfabetos: " + [...str2, ...str])
// função

const mult = (x,y) => x * y;
const res = [3, 4];
console.log("O valor da res é: " +  mult(...res))

const soma =(a,b,c) =>{
    return a+b+c
}
let valor=[1,4,6]
console.log("A soma dos valores é:" + soma(...valor))