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
// let num1 = 10
// let num2 = 4
// console.log( num1 & num2)
// // usando o operador OR |
// let num1 = 10
// let num2 = 4
// resul = num1 | num2
// console.log(resul)

// usando o operador ^ "OU Exclusivo" (em inglês, "Exclusive OR").
// let num1 = 10
// let num2 = 12
// resul = num1 ^ num2
// console.log(resul)

/*
Para determinar ou calcular operadores bitwise em JavaScript, converta os números para binário de 32 bits e aplique a operação bit a bit.

Passo a Passo
Converta operandos para inteiros de 32 bits (adiciona zeros à esquerda).

Compare cada bit correspondente.
Aplique a regra do operador e reconstrua o resultado decimal.
​Exemplo: 5 & 3 (AND)

5:  00000000 00000000 00000000 00000101
3:  00000000 00000000 00000000 00000011
---------------------------------------
& : 00000000 00000000 00000000 00000001 (= 1)

5:  00000101
1:  00000001
-----------
| : 00000101 (= 5)

O operador XOR bitwise (^) em JavaScript retorna 1 em cada bit onde os operandos diferem (um é 1 e o outro é 0).

Regra da Tabela Verdade (por bit)
| Bit 1 | Bit 2 | 1 ^ 2 |
| ----- | ----- | ----- |
| 0     | 0     | 0     |
| 0     | 1     | 1     |
| 1     | 0     | 1     |
| 1     | 1     | 0     |

Exemplo Detalhado: 5 ^ 3
5:  00000101
3:  00000011
----------------
^ : 00000110  (= 6)

*/ 

let n1 = 20
let res = n1 >> 1
console.log(res)

let n2 = 20
let r = n1 << 4
console.log(r)

let n3 = 20
let a = n1 >>> 3
console.log(a)
