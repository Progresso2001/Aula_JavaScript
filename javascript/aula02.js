// Variaveis e suas diferencias
"use strict"

let nome = "Joaquim"
console.log(nome)
// var nome = "jp"
console.log(nome)
// let nome = "Hadassa"   // A variavel ira imprimir o seu valor por estar fora do escopo
if (true){
    // let nome = "Rosa"  // A variavel não  ira imprimir por estar dentro do escopo
    var x = "Joaquim"
}
console.log("O seu meu é " + x)

const num = 35  //A variavel const é um tipo de variavel que não permite a mudança ou alteração de valor na memoria do pc.


num = 10  //Ela vai gerar um erro do tipo TypeError: Assignment to constant variable, porque não se pode alterar o valor da variavel const

// usando o let para alterar o const

// let num = 50
console.log("Tens " +  num + " anos de idade")