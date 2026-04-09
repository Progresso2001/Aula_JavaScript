// Herança de objectos

const animal = {
    andar(){
        console.log(`${this.nome} esta andando.`);
    }
};

// cachorro herda de animal 

const cachorro = Object.create(animal)

cachorro.nome = "Rex"; //definindo prop para o objecto
cachorro.latir = function(){
    console.log(`${this.nome} esta latindo.`)
}
cachorro.andar()
cachorro.latir()

// Indexando objecto
const p = {nome:"Pedro" , idade: 88}
const chave = "nome"
console.log(p[chave])

// Definindo metodos de objectos

const pessoa = {
    nome:"Ana",
    sauda(){
        console.log(`Eu sou a ${this.nome}`)
    },
    dizerIdade(ano){
        return 2026 - ano
    }
};

pessoa.sauda()

console.log("E tenho: " + pessoa.dizerIdade(2000) + " anos de idade.")

