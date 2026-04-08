// função construtora de objectos
function Carro(marca, modelo, ano){
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano
};

var meucarro  = new Carro("Lamborghini", "LamboV8", 1989) //criando instancia
console.log(meucarro)
var carroDeKen = new Carro("Nissan", "300ZX", 1992);
console.log(carroDeKen)
var carroDeVPG = new Carro("Mazda", "Miata", 1990);
console.log(carroDeVPG)


function Pessoa(nome, idade, sexo, profissao){
    this.nome = nome,
    this.idade = idade,
    this.sexo = sexo ,
    this.profissao = profissao
}

var identPessoa = new Pessoa("Jose", 22, 'M')
identPessoa.nome = 'Evaristo'
identPessoa.profissao= 'Programador' ///adicionado uma propriedade a um objecto definido anteriormente.
console.log(identPessoa)