// var listNome = ['Paulo', 'Miguel', 'Sousa']
// var novaLista = [ ...listNome,'Antonio']
// console.log('O primeiro elemento na lista é: ' + novaLista[0] + '\nE o ultimo elemnto é: ' + novaLista[3])

// var value = ['one', 'two', 'three', 'four'].map(value=>value.length)
// console.log(value)

// filter na versao 5.1(Antiga)
// var numero=[5, 10, 15, 12, 34]
// var inteiroNumero = numero.filter(function(n){
//   return n % 2 !== 0;
// })
// console.log(inteiroNumero)

// filter na versao 6

// var valorFiltrado = numero.filter(n => n % 2 !== 0);
// console.log(valorFiltrado)

// var pessoa =[
//   {
//     id:1,
//     nome:'Paulo',
//     idade:23
//   },
//   {
//     id:2,
//     nome:'Bento',
//     idade:25
//   },
//   {
//     id:3,
//     nome:'Costa',
//     idade:23
//   }
// ]
// let jovem = pessoa.filter(p=> p.idade > 24);
// console.log(jovem)

// var pessoaArray = [{'pessoaId':123, 'nome':'Paulo', 'cidade':'Cabinda'},
//     {'pessoaId':113, 'nome':'Fonseca', 'cidade':'Cunene'} ,
//     {'pessoaId':100, 'nome':'Rosita', 'cidade':'Luanda'}
// ]
// console.table(pessoaArray, ['nome', 'cidade', 'pessoaId'])
// console.log(pessoaArray[0])

// var myObject = {
//     'foo':{
//         'bar':'data'
//     }
// }
// // console.dir(myObject)
// console.group(myObject)

// function reverterString(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverterString('Progresso'))

// var string = 'Progresso'
// console.log(string.charCodeAt(7))

// var nome = 'L\'oreal Kinh'
// console.log(nome)

// converter uma string em Array

// versao antiga 5.1
// var titulo = 'A vida é uma beleza natural'.split('') //usando a funcao split
// console.log(titulo)
// versao 6 usando o operador spread ... para converter em array
// var titulo = [...'A vida é uma beleza natural']
// console.log(titulo)

// arr = [1,2,3,4,5]
// arr.length = 2;
// console.log(arr)

// var pessoa = {
//     name:'John',
//     surname: 'Rui'
// }
// Object.defineProperty(pessoa, 'fullname',{
//     get: function(){
//         return this.name + " " + this.surname;
//     },
//     set: function(value){
//         [this.name, this.surname] = value.split(" ");
//     }
// })

// console.log(pessoa.fullname)
// pessoa.surname = 'Joaquim',
// console.log(pessoa.fullname)

// pessoa.fullname = 'Jocas Eliseu'
// console.log(pessoa.name)

// converter valores de objectos em Arrays

// var obj = {
//     a:"Olá",
//     b:"Este é",
//     c:"JavaScript!"
// }
// var array = Object.keys(obj)
//     .map(function(key){
//         return obj[key];
//     });
// console.log(array)


