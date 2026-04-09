// Getters e Setters

var num = {
    a:7,
    get b(){
        return this.a + 1;
    },
    set c(x){
        this.a = x / 2;
    },
};

console.log(num.a)
console.log(num.b) //getter
num.c = 50 //setter
console.log(num.a)

const pessoa = {
    _nome : "ana",
    _idade : 30,
    get nome(){
        return `${this._nome.toUpperCase()}`
    },
    set nome(valor){
        if(typeof valor !=="string" || valor.length < 3){
            console.log("Nome Inválido!");
            return;
        }
        this._nome = valor;
    },
    get nomeMaisIdade(){
        return `${this._nome} tem ${this._idade}`
    }
};

console.log(pessoa.nome) //getter
pessoa.nome ="ju" // set -> atribuir valor a prop
console.log(pessoa.nome)
pessoa.nome = "Jocas"  // get -> atribuir valor a prop
console.log(pessoa.nomeMaisIdade)

const prod = {
    _preco :100
};
Object.defineProperty(prod, "preco",{
    get(){
        return "O preço atual é: " + this._preco 
    },
    set(valor){
        if(valor <= 0 ){
            console.log("Preço deve ser maior de Zero.");
            return;
        }this._preco = valor
    }
});

console.log(prod.preco)
prod.preco = -5 //set
prod.preco =150  //get
console.log(prod.preco)