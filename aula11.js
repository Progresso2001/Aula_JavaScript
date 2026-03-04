/*
O operador typeof em JavaScript é uma ferramenta essencial para verificar o tipo de uma variável ou valor, retornando uma string com o nome do tipo.
Sintaxe
Use typeof operando ou typeof(operando), onde o operando pode ser uma variável, literal ou expressão.
Tipos Retornados
Números: 'number' (inclui inteiros e floats).
Strings: 'string'.
Booleanos: 'boolean'.
undefined: 'undefined'.
Objetos e arrays: 'object' (arrays também são 'object').
Funções: 'function'.
null: 'object' (comportamento histórico do JS).
*/

console.log(typeof 24);
console.log(typeof "Joaquim");
console.log(typeof false);
console.log(typeof {});
console.log(typeof ["carro", "moto"]);
console.log(typeof function(){});
console.log(typeof undefined);
let nome ="Carlos"
console.log(typeof nome)