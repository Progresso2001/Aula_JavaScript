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

const criarProduto = (nome, preco, categoria) => {
    const desconto = preco * 0.1;
    return{
        // shorthand property
        nome, preco,
        // Prop. computada
        [`${categoria}_id`]: Math.random().toString(36).substring(2, 9),

        // Metodos abreviados
        getPrecoFinal(){
            return this.preco - desconto;
        },
        // getter
        get info(){
            return `${this.nome} - R$ ${this.preco}`
        }       
    };
};

const produto = criarProduto("Notebook", 3500, "Electronico")
console.log(produto.info);
console.log("Valor do desconto do produto: " + produto.getPrecoFinal())
