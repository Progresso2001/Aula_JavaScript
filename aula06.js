/*
Operadores Relacionais
Lista Principal
> (maior que): 5 > 3 resulta em true.
< (menor que): 5 < 3 resulta em false.
>= (maior ou igual): 5 >= 5 resulta em true.
<= (menor ou igual): 5 <= 3 resulta em false.
​
Igualdade e Diferença
== (igual solto): Compara valor, converte tipos ("5" == 5 é true).
=== (igual estrito): Valor e tipo ("5" === 5 é false).
!= (diferente solto) e !== (diferente estrito).
Use estritos (===, !==) para evitar bugs com conversões automáticas
*/
let num = 5;
if (num > 4){
    console.log("numero maior")
}
else{
    console.log("numero menor")
}

let num1=10
let num2=5
let num3=10
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 == num3)
console.log(num1 >= num2)
console.log(num1 != num2)
console.log(!(num1 == num2))