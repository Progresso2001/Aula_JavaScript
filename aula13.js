// Condicional if e else

/*As estruturas condicionais if e else em JavaScript permitem executar 
diferentes blocos de código com base em condições
 booleanas (verdadeiro ou falso). */
// simples condição if
let idade = 19;
if(idade >=10){
    console.log("Autorizado a conduzir")
}

// if and else
let idade = 10;
if(idade >=18){
    console.log("Autorizado a consumir")
}else{
    console.log("Não Autorizado a consumir")
}

// Para múltiplas condições, use else if:

let nota = 8.5;
if (nota >= 9) {
    console.log("A");
} else if (nota >= 7) {
    console.log("B");
} else if (nota >= 6) {
    console.log("C");
} else {
    console.log("Reprovado");
}

let energia = 100
let clima = "sol"
if(energia > 70 && clima=="sol"){
    console.log("Vou a praia")
}else{
    console.log("Vou ao mercado")
}

// operador switch case
/*
O operador switch...case em JavaScript é uma estrutura condicional 
que avalia uma expressão e executa o bloco de código 
correspondente ao valor que coincide com os case. 
É ideal para múltiplas verificações de igualdade, 
sendo mais limpo que vários else if

Sintaxe Básica

switch (expressao) {
    case valor1:
        // Código para valor1
        break;
    case valor2:
        // Código para valor2
        break;
    default:
        // Código se nenhum case coincidir
}

*/

let dia = 3;
let diaSemana;

switch (dia) {
    case 1:
        diaSemana = "Segunda";
        break;
    case 2:
        diaSemana = "Terça";
        break;
    case 3:
        diaSemana = "Quarta";
        break;
    case 4:
        diaSemana = "Quinta";
        break;
    case 5:
        diaSemana = "Sexta";
        break;
    case 6:
    case 7:
        diaSemana = "Fim de semana";
        break;
    default:
        diaSemana = "Dia inválido";
}
console.log(diaSemana); // "Quarta"

// Casos Múltiplos
// Vários case podem compartilhar o mesmo código sem break:
let nota = 7;
switch (nota) {
    case 9:
    case 10:
        console.log("Excelente!");
        break;
    case 7:
    case 8:
        console.log("Bom!");
        break;
    default:
        console.log("Estude mais!");
}


