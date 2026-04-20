// Metodos Avançados de arrays

var nomes = ['joaquim', 'Eliseu', 'Menianga']
// nomes.forEach(item => console.log(item))
// usando funcao anonima
// nomes.forEach(function(nome){
//     console.log(nome)
// })

// var numero = [2, 3, 4, 5]
// // numero.map( n => console.log(n*2))
// numero.map(function(n){
//     console.log(n*3)
// })

// filter
// var numero = [2, 3, 4, 5]
// numero.filter( n => console.log(n % 2 ===0))

// var alunos = [
//     {nome:'Pedro', idade:12},
//     {nome:'Joaquim', idade:15},
//     {nome:'Maria', idade:18},
//     {nome:'Sergio', idade:20}

// ];
// var alunoMaior = alunos.filter(function(aluno){
//     return aluno.idade >= 18
// });
// console.log(alunoMaior)

// var alunos = [
//     {nome:'Pedro', idade:12},
//     {nome:'Joaquim', idade:15},
//     {nome:'Maria', idade:18},
//     {nome:'Sergio', idade:20}

// ];

// var aluno = alunos.find(function(aluno){
//     return aluno.nome ==='Joaquim'
// }) 
// console.log(aluno)

// var alunos = [
//     {nome:'Pedro', idade:18},
//     {nome:'Joaquim', idade:20},
//     {nome:'Maria', idade:24},
//     {nome:'Sergio', idade:25}

// ];

// var todosAlunosMaior = alunos.every(function(aluno){
//     return aluno.idade > 18;
// }) 
// console.log(todosAlunosMaior);

var pesoDasMalas = [23, 13, 45, 29]
var temMalaAcimaDoPeso = pesoDasMalas.some(function(pesoDasMala){
    return pesoDasMala > 30
})
console.log(temMalaAcimaDoPeso)
