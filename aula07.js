/*
Operadores Lógicos
Combinam expressões booleanas:
&& (E): true se ambos true.
|| (OU): true se pelo menos um true.
! (NÃO): inverte (true vira false).
*/
// Exemplos com AND (&&)
// Retorna true só se todos os lados forem true; 
// senão, para no primeiro false e retorna ele.

// let idade = 20;
// let temCarteira = true;
// if (idade >= 18 && temCarteira) {
//     console.log("Pode dirigir");  // Executa: true && true
// }
// // Exemplo curto-circuito: false && qualquercoisa → false
// console.log(0 && "texto"); 

// Exemplos com OR (||)
// Retorna true se pelo menos um lado for true; para no primeiro true.

// let nome = "";
// let sobrenome = "Silva";
// let nomeCompleto = nome || sobrenome;  // "Silva" (nome é falsy)
// console.log(nomeCompleto);

// let idade = 10
// if (idade < 18 || !temCarteira) {
//     console.log("Não dirige");  // OR com NOT
// }

// Exemplo com NOT (!)
// Inverte o booleano (true vira false).
let idade = 10
let ehMaior = !(idade < 18);  // true (não é menor)
console.log(!true);  // false[web:2][web:27]

