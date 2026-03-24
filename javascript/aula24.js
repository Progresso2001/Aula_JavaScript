// ARRAY
// var arr = [];
// arr.length = 45;
// console.log(arr)

// var arr = Array(76.8)
// console.log(arr)
// Povoando um Array

// var empregados = []
// empregados[0] = "Ricardo";
// empregados[1] = "Bento";
// empregados[2] = "Rosa";
// empregados[3] = "Amoroso";
// console.log(empregados)
// console.log(empregados[1])

// var vazio = []
// vazio[3.6] = 'Banana';
// console.log(vazio)
// console.log(vazio.hasOwnProperty(3.6))

// const listAlimento = [
//     "Pão",
//     "Peixe",
//     "Feijão"
// ]
// listAlimento[2] = "Macarão";
// console.log(listAlimento.push("Frango"))
// console.log("Listas de alimentos favouritos: " + listAlimento)
// console.log("Quantidade alimentos: " + listAlimento.length)
// console.log("Eu gosto de: " + listAlimento[2] + ", " + `acompanhado de ${listAlimento[1]}`)
// listAlimento.push("Carne de Boi"); // O metodo push() usado para adicionar novo elemento dentro do array
// console.log("Adicionado novo alimento: " + listAlimento[3])

// var meuArray = []
// var minhaIdentidade = {
//     nome:"Joaquim",
//     idade:25,
//     profissao: "Programador Iniciante"
// }

// meuArray.push(minhaIdentidade)
// console.log(meuArray)

// iterando array

// var cores = ['vermelho', 'preto', 'verde', 'branco'];
// for(var i = 0; i < cores.length; i++){
//     console.log(cores[i])

// }

// usando o metodo forEach()
// var cores = ['vermelho', 'preto', 'verde', 'branco'];
// cores.forEach(function(cor){
//     console.log(cor)
// })

// usando o Arrow Function

// cores.forEach((cor) => console.log(cor))

// Elemnto não definido no array

// var list = ['primeiro', 'segundo', , 'terceiro'];
// list.forEach(function(elemento){
//     console.log(elemento)
// })

// if(list[2] == undefined){
//     console.log("list[2] é indefinido")
// }

// var list = ['primeiro', 'segundo', undefined, 'terceiro'];
// list.forEach(function(el){
//     console.log(el)
// })

// Metodos de Array

// concat()
// var meuArray = new Array('1', '2', '3');
// meuArray = meuArray.concat('a', 'b', 'c');
// console.log(meuArray)
// for(i = 0; i < meuArray.length; i++){
//     console.log(meuArray[i])
// }

// join(deliminator = ",")
// var meuArray = new Array('Vento', 'Fogo', 'Chuva');
// var lista = meuArray.join("-")
// console.log(lista)

// push()
// var meuArray = new Array('Vento', 'Fogo', 'Chuva');
// meuArray.push('Poeira')
// console.log(meuArray)

// pop()

// var meuArray = new Array('Vento', 'Fogo', 'Chuva');
// var ultElemento = meuArray.pop();
// console.log(meuArray)

// shift()
// var meuArray = new Array('Vento', 'Fogo', 'Chuva');
// var priElemento = meuArray.shift()
// console.log(meuArray)

// var meuArray = new Array('Vento', 'Fogo', 'Chuva');
// meuArray.unshift('Poeira', 'Tempestade')
// console.log(meuArray)

// slice(start index , up to index)
// var meuArray = new Array('a', 'b', 'c', 'd', 'e')
// meuArray =  meuArray.slice(1, 4)
// console.log(meuArray)

// splice(index, count to remove, addElemento1 , addElemento2, .....)

// var meuArray = new Array('1', '2', '3', '4', '5');
// meuArray.splice(1, 3, 'a', 'b', 'c', 'd')
// console.log(meuArray)

// reverse()
// var meuArray = new Array('1', '2', '3', '4', '5');
// meuArray.reverse()
// console.log(meuArray)

// sort()
// var meuArray = new Array('Fogo', 'Chuva', 'Prego');
// meuArray.sort()
// console.log(meuArray)

// indexOf(searchElement)

// var a = ['a', 'b', 'a', 'b', 'a']
// console.log(a.indexOf('b'))
// console.log(a.indexOf('b', 2))
// console.log(a.indexOf('z')) // mostra -1, porque 'z' não foi encontrado

// lastIndexOf()
// console.log(a.lastIndexOf('a'))

// map()
// var a = new Array("joaquim", "alberto", "miguel")
// var b = a.map(function(nome){
//     return nome.toUpperCase();
// });
// console.log(b)

// filter()
// var a = [1, 'a', 2, 'b', 5, 'd', 10]
// var b = a.filter(function (item){
//     return typeof item === 'number';
// });
// console.log(b)

// every()
// function isNumber(valor){
//     return typeof valor === "number";
// }
// var a = [1, 2, 3]
// console.log(a.every(isNumber))
// var b =  [1, '2', '5']
// console.log(b.every(isNumber))

// some()
// function isNumber(valor){
//     return typeof valor === "number";
// }
// var a = [1, 2, 3]
// console.log(a.some(isNumber))
// var b =  [1, '2', '5']
// console.log(b.some(isNumber))
// var c = ['1', '2', '3']
// console.log(c.some(isNumber))

//  reduce()
var a = [10, 20, 30]
var total = a.reduce(function(primeiro, segundo){
    return primeiro +  segundo;
}, 0)
console.log(total)