// // O laço for 
// /*
// O laço for em JavaScript é usado para repetir 
// um bloco de código um número específico de vezes, 
// sendo ideal para iterar arrays ou executar tarefas contadas.

// Sintaxe Básica
// for (inicialização; condição; incremento) {
//     // Código executado em cada iteração
// }
// Inicialização: Executada uma vez no início (let i = 0)

// Condição: Verificada antes de cada iteração (i < 5)

// Incremento: Executada após cada iteração (i++)

// break e continue
// for (let i = 0; i < 10; i++) {
//     if (i === 5) break;      // Para o laço
//     if (i % 2 === 0) continue; // Pula números pares
    
//     console.log(i); // 1, 3
// }

// */
// for(let i = 0; i < 5; i++){
//     console.log(`Número: ${i}`);
// }

// // iternado array
// const frutas=["maçã", "banana", "laranja"]
// for(let i = 0; i < frutas.length; i++){
//     console.log(`Frutas ${i+1}: ${frutas[i]}`);
// }

// // Condicional do..while
// /*
// Os laços while e do...while em JavaScript executam um bloco de código 
// enquanto uma condição for verdadeira. 
// A diferença principal é que while verifica a condição antes da execução, 
// enquanto do...while executa pelo menos uma vez antes de verificar.
// sintaxe:while
// while (condicao) {
//     // Código executado enquanto condição for true
// }
// Sintaxe do...while
// do {
//     // Código executado pelo menos uma vez
// } while (condicao);
// */
// let i = 1;
// while (i <= 5) {
//     console.log(`Número: ${i}`);
//     i++;
// }

// let n = 0
// let x = 0
// while (n<3){
//     n++;
//     x+=n;
//     console.log(x)
// }

// do..while
// let i =0;
// do{
//     i+=1;
//     console.log(i);
// }while(i<5);

// // Teste pratico
// let idade = 15;
// while (idade >= 18) {
//     console.log("Pode entrar");
// } // Nada é impresso

// // do...while - EXECUTA 1 VEZ
// // do {
// //     console.log("Pode entrar");
// // } while (idade >= 18); // Executa uma vez mesmo sendo falso

// // instrução label
// /*
// A instrução label (etiqueta) em JavaScript permite identificar uma declaração 
// para usar com break ou continue em laços aninhados. 
// É útil para controlar fluxo em estruturas 
// complexas de repetição.
// Sintaxe Básica
// label: declaração
// O label é qualquer identificador válido seguido de dois pontos (:).

// Exemplo com Laços Aninhados
// loopExterno: for (let i = 0; i < 3; i++) {
//     loopInterno: for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 1) {
//             continue loopExterno; // Sai do loopExterno
//         }
//         console.log(`i=${i}, j=${j}`);
//     }
// }

// Usando break com Label
// externo: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 2) {
//             break externo; // Sai completamente dos dois laços
//         }
//         console.log(`i=${i}, j=${j}`);
//     }
// }
// // Para em: i=1, j=2
// */
// loopExterno: for (let i = 0; i < 3; i++) {
//     loopInterno: for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 1) {
//             continue loopExterno; // Sai do loopExterno
//         }
//         console.log(`i=${i}, j=${j}`);
//     }
// }
// // Usando break com Label
// loopExterno: for (let i = 0; i < 3; i++) {
//     loopInterno: for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 1) {
//             continue loopExterno; // Sai do loopExterno
//         }
//         console.log(`i=${i}, j=${j}`);
//     }
// }

// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }
// // Instrução continue
// // let i = 0;
// // let n = 0;
// // while (i < 5) {
// //   i++;
// //   if (i === 3) {
// //     continue;
// //   }
// //   n += i;
// //   console.log(n);
// // }
// // Usando o label e continue
// // let i = 0;
// // let j = 10;
// // checkIandJ: while (i < 4) {
// //   console.log(i);
// //   i += 1;
// //   checkJ: while (j > 4) {
// //     console.log(j);
// //     j -= 1;
// //     if (j % 2 === 0) {
// //       continue;
// //     }
// //     console.log(j, "is odd.");
// //   }
// //   console.log("i =", i);
// //   console.log("j =", j);
// // }
// // instrução for...in
// /*O laço for...in em JavaScript itera sobre as chaves
//  (propriedades) de objetos, 
// sendo ideal para percorrer propriedades enumeráveis.
// sintaxe
// for (let chave in objeto) {
//     // chave contém o nome da propriedade
//     // objeto[chave] contém o valor
// }
// */

// const pessoa = {
//     nome: "João",
//     idade: 25,
//     cidade: "Luanda"
// };

// for (let propriedade in pessoa) {
//     console.log(`${propriedade}: ${pessoa[propriedade]}`);
// }

// // Configurações de API do seu projeto
// const config = {
//     apiUrl: "https://api.exemplo.com",
//     timeout: 5000,
//     version: "1.0"
// };

// for (let chave in config) {
//     console.log(`Config ${chave}: ${config[chave]}`);
// }
// // usando função
// function dumpProps(obj, objName) {
//   let result = "";
//   for (const i in obj) {
//     result += `${objName}.${i} = ${obj[i]}<br>`;
//   }
//   result += "<hr>";
//   return result;
// }

// // Arrays com for...in (NÃO RECOMENDADO)

// const frutas = ["maçã", "banana"];
// for (let i in frutas) {
//     console.log(frutas[i]); // Funciona, mas...
// }// Pode incluir propriedades herdadas!

// // for ..of
// /*
// O laço for...of em JavaScript é a forma moderna e 
// limpa de iterar sobre valores de arrays, 
// strings, Sets, Maps e outros iteráveis
// Sintaxe Básica
// for (let valor of iteravel) {
//     // valor contém cada elemento diretamente
// }
// */
// const usuarios = ["João", "Maria", "Pedro"];

// for (let usuario of usuarios) {
//     console.log(`Olá, ${usuario}!`);
// }
// // Iterando Strings
// const nome = "Luanda";
// for (let letra of nome) {
//     console.log(letra);
// }

console.log("Estudando JavaScript")
for(let i = 0; i<5; i++){
    console.log("Estudando em data: " + i)
}
console.log("Avançar com Python")

const cidades={1:"Luanda", 2:"Cabinda",4:"Bie", 5:"Uige", 6:"Cunene"}
for(let i in cidades){
    console.log(`${i}:${cidades[i]}`)
}
// Factorial
// 5!=5*4*3*2*1=120
let n=5
let fat=1
while(n>=1){
    fat*=n
    n--
}
console.log("O valor do factorial de 5 é: " + fat)









