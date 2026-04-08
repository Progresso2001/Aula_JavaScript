// // função construtora de objectos
// function Carro(marca, modelo, ano){
//     this.marca = marca,
//     this.modelo = modelo,
//     this.ano = ano
// };

// var meucarro  = new Carro("Lamborghini", "LamboV8", 1989) //criando instancia
// console.log(meucarro)
// var carroDeKen = new Carro("Nissan", "300ZX", 1992);
// console.log(carroDeKen)
// var carroDeVPG = new Carro("Mazda", "Miata", 1990);
// console.log(carroDeVPG)


// function Pessoa(nome, idade, sexo, profissao){
//     this.nome = nome,
//     this.idade = idade,
//     this.sexo = sexo ,
//     this.profissao = profissao
// }

// var identPessoa = new Pessoa("Jose", 22, 'M')
// identPessoa.nome = 'Evaristo'
// identPessoa.profissao= 'Programador' ///adicionado uma propriedade a um objecto definido anteriormente.
// console.log(identPessoa)

// Recurso Avançados de inicializadores

// 1- shorthands Property Names( Propriedades Abrevidas)

// const nome = "joaquim";
// const idade =  23;

// Antes(verbose)
// const pessoa_1 = {nome:nome, idade:idade};
// console.log(pessoa_1)

//Agora(conciso)
// const pessoa_2 = {nome, idade}
// console.log(pessoa_2)

// 2) shorthands Methods Names( Metodos Abrevidas): define metodos sem palavra chave function()

// const calculadora = {
//     // forma tradicional
//     soma: function(a, b){
//         return a + b
//     },
//     // forma abreviada(ES6+)
//      subtrair(a, b){
//         return a - b
//     },
//     // metdod arrow function
//     multiplicar:(a, b) =>  a * b,
// };

// console.log("Resultado da soma: " + calculadora.soma(5, 3))
// console.log("Resultado da subtração: " + calculadora.subtrair(5, 3))
// console.log("Resultado da multiplicação: " + calculadora.multiplicar(5, 3))

// 3) Computed Property Names (Nomes de prop. computadas)

// const prefixo = "user";
// const id  =  42;
// const usuario = {
//     [`${prefixo}_${id}`]: "Maria",
//     [prefixo + "Nome"] : "Maria Silva",
//     ["data_" + new Date().getFullYear()]: true
// };
// console.log(usuario)

// Exemplo pratico 

// const criarProduto = (nome, preco, categoria) => {
//     const desconto = preco * 0.1;
//     return{
//         // shorthand property
//         nome, preco,
//         // Prop. computada
//         [`${categoria}_id`]: Math.random().toString(36).substring(2, 9),

//         // Metodos abreviados
//         getPrecoFinal(){
//             return this.preco - desconto;
//         },
//         // getter
//         get info(){
//             return `${this.nome} - R$ ${this.preco}`
//         }       
//     };
// };

// const produto = criarProduto("Notebook", 3500, "Electronico")
// console.log(produto.info);
// console.log("Valor do desconto do produto: " + produto.getPrecoFinal())

// -------------------------- FUNÇÕES CONSTRUCTORAS DE OBJECTOS ------------------------

// function Pessoa(nome, idade, profissao){
//     this.nome = nome,
//     this.idade = idade,
//     this.profissao = profissao,
//     // Metodo de instancia
//     this.apresentar = function(){
//         return `Olá sou o ${this.nome} e tenho ${this.idade} anos e sou ${this.profissao}.\n`
//     }
// };
// // criando instancia com new

// const pessoa_1 = new Pessoa("Maria", 23, "Engenheira de dados")
// const pessoa_2 = new Pessoa("Joaquim", 32)
// pessoa_2.profissao = "Programador" //Adicionado prop no objecto criado
// console.log(pessoa_1.apresentar())
// console.log(pessoa_2.apresentar())

// Problemas no Metodo de construtor (ineficiente)

// function Carro(modelo){
//     this.modelo = modelo
//     this.ligar = function(){
//         // X Evitar usar porque cria nova funcao em cada instancia
//         console.log(`${this.modelo} ligado!`)
//     }
// };

// const car1 = new Carro("Fusca")
// console.log(car1.ligar())
// const car2 = new Carro("Gol")
// console.log(car2.ligar()) 
// console.log(car1.ligar===car2.ligar)

// Solucao: usar Prototype (eficiente)

// function Carro(modelo, ano){
//     this.modelo = modelo,
//     this.ano = ano
//     Carro.prototype.ligar = function(){
        
//         console.log(`${this.modelo} ligado!`)
//     };
//     Carro.prototype.desligar = function(){
//         console.log(`${this.modelo} esta desligado, desde ${this.ano}`)
//     }
// };

// const car1 = new Carro("Fusca", 1907)
// const car2 = new Carro("Gol", 1876)
// console.log(car1.ligar())
// console.log(car2.desligar())
// console.log(car1.ligar === car2.ligar)
// console.log(car1 instanceof Carro)


function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}

Pessoa.prototype.saudar = function () {
  console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos`)
}

const p1 = new Pessoa("João", 25)
console.log(p1.saudar())


