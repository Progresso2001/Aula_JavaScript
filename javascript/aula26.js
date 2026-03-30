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