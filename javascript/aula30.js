// Usando o método Object.create

var Animal ={
    tipo: "Invertebrados", // Prop de valores padrao
    qualTipo: function(){
        // Método que irá mostrar o tipo de animal
       console.log( this.tipo)
    },
};
// Cria um novo tipo de animal chamado animal1

var animal1 = Object.create(Animal)
animal1.qualTipo(); 

// Cria um outrotipo de animal chamado peixe

var peixe = Object.create(Animal);
peixe.tipo = "Peixes";
peixe.qualTipo()

const humano = {
  saudar() {
    console.log(`Olá, eu sou ${this.nome}`);
  }
};

const pessoa = Object.create(humano, {
  nome: {
    value: "João",
    writable: true,
    enumerable: true
  }
});

pessoa.saudar(); 

const animal = {
    falar(){
        console.log("Faz algum som")
    }
};
const cachorro = Object.create(animal);
cachorro.falar()

