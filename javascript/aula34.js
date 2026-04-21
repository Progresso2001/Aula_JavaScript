// Metodos Avançados de arrays

var nomes = ['joaquim', 'Eliseu', 'Menianga']
nomes.forEach(item => console.log(item))
// usando funcao anonima
nomes.forEach(function(nome){
    console.log(nome)
})

var numero = [2, 3, 4, 5]
// numero.map( n => console.log(n*2))
numero.map(function(n){
    console.log(n*3)
})

filter
var numero = [2, 3, 4, 5]
numero.filter( n => console.log(n % 2 ===0))

var alunos = [
    {nome:'Pedro', idade:12},
    {nome:'Joaquim', idade:15},
    {nome:'Maria', idade:18},
    {nome:'Sergio', idade:20}

];
var alunoMaior = alunos.filter(function(aluno){
    return aluno.idade >= 18
});
console.log(alunoMaior)

var alunos = [
    {nome:'Pedro', idade:12},
    {nome:'Joaquim', idade:15},
    {nome:'Maria', idade:18},
    {nome:'Sergio', idade:20}

];

var aluno = alunos.find(function(aluno){
    return aluno.nome ==='Joaquim'
}) 
console.log(aluno)

var alunos = [
    {nome:'Pedro', idade:18},
    {nome:'Joaquim', idade:20},
    {nome:'Maria', idade:24},
    {nome:'Sergio', idade:25}

];

var todosAlunosMaior = alunos.every(function(aluno){
    return aluno.idade > 18;
}) 
console.log(todosAlunosMaior);

var pesoDasMalas = [23, 13, 45, 29]
var temMalaAcimaDoPeso = pesoDasMalas.some(function(pesoDasMala){
    return pesoDasMala > 30
})
console.log(temMalaAcimaDoPeso)

Reduce()
var numeros = [1,2,3,4,5]
var soma = 0;
soma = numeros.reduce(function(soma, numero){
    return soma + numero
}, 0) //0 representa valor inicial 
console.log(soma)

var alunos = [
    {nome:'Pedro', idade:18},
    {nome:'Joaquim', idade:20},
    {nome:'Maria', idade:24},
    {nome:'Sergio', idade:25}

];
var nomes = alunos.reduce(function(arrayNomes, aluno){
    arrayNomes.push(aluno.nome);
    return arrayNomes
}, [])
console.log(nomes)
findIndex()
const valor = [5, 12, 8, 120]
const arr = valor.findIndex(x => x > 10)
console.log(arr)

const usuarios = [
    {id:1, nome:"Ana"},
    {id:2, nome:"Pedro"}
]
const indice = usuarios.findIndex(u => u.nome === 'Pedro')
console.log(indice)

indeOf
const n = [1, 2, 3]
const m = n.indexOf(3)
console.log(m)

sort()
let arr = [4, 5, 3, 2, 1]
let arrOrder = arr.sort()
console.log(arrOrder)

let n = [400, 5, 30, 2, 1]
let m = n.sort((a, b) => a - b)
console.log(m)


reverse()
let frutas = ['Banana', 'Laranja', 'Maçã']
let inverterFruta = frutas.reverse()
console.log(inverterFruta)

toString()
let arr = [4, 5, 3, 2, 1]
let arrParaString = arr.toString()
console.log(arrParaString)

splice()

let arr = [4, 5, 3, 2, 1]
let remover = arr.splice(1, 1)
console.log(remover)

slice()
let arr = [4, 5, 3, 2, 1] 
let newArr = arr.slice(1, 4)
console.log(newArr)