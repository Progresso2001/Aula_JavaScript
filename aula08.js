/*
Operadores bitwise em JavaScript operam nos bits individuais de números inteiros (convertidos para 32 bits assinados).
Operadores Bitwise Binários
& (AND): 1 se ambos bits forem 1. Ex: 5 & 3 (101 & 011 = 001) resulta em 1.
| (OR): 1 se pelo menos um bit for 1. Ex: 5 | 3 (101 | 011 = 111) resulta em 7.
^ (XOR): 1 se bits forem diferentes. Ex: 5 ^ 3 (101 ^ 011 = 110) resulta em 6.
Operadores Unários e Shifts
~ (NOT): Inverte bits. Ex: ~5 resulta em -6.
<< (left shift): Desloca bits à esquerda. Ex: 5 << 1 resulta em 10.
>> (right shift): Desloca à direita, preserva sinal. Ex: 5 >> 1 resulta em 2.
>>> (right shift sem sinal): Preenche com 0s. Ex: -5 >>> 1 resulta em grande número positivo.
São úteis para flags, máscaras de bits ou otimizações de performance, mas raros em apps web comuns
*/
// usando o operador And &
let num1 = 10
let num2 = 4
console.log( num1 & num2)
// // usando o operador OR |
let num1 = 10
let num2 = 4
resul = num1 | num2
console.log(resul)

// usando o operador ^ "OU Exclusivo" (em inglês, "Exclusive OR").
let num1 = 10
let num2 = 12
resul = num1 ^ num2
console.log(resul)

//Nota: Para melhor pratica de conversao recomenda se usar a tabela hexadecimal