// Objectos literaiis: é uma coleção de propriedades(dados) e metodos(função) definidas dentro de um par de chaves.

const pessoa = {
    nome:"Joaquim",
    idade: 25,
    profissao:"estudante",
    saudar : function(){
        console.log("Olá chamo-me " + this.nome + "sou " + this.profissao + " de ciencia da computação");
    }
};
console.log(pessoa)
pessoa.saudar()

// Exemplos

// Criando um objeto literal "carro"
const carro = {
  marca: "Toyota",           // Propriedade
  modelo: "Corolla",         // Propriedade
  ano: 2022,                 // Propriedade

  // Método usando function tradicional
  detalhes: function() {
    return `${this.marca} ${this.modelo} (${this.ano})`;
  },

  // Método usando sintaxe curta (ES6+)
  ligar() {
    console.log(`${this.marca} está ligado!`);
  }
};

// Acessando propriedades
console.log(carro.marca);       // Toyota
console.log(carro["modelo"]);   // Corolla

// Chamando métodos
console.log(carro.detalhes());  // Toyota Corolla (2022)
carro.ligar();                  // Toyota está ligado!
