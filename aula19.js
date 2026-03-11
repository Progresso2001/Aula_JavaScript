// usando o operador this
// operador this em js refere-se ao objecto
// que esta executando a função atual
// com valor dinamico dependendo do contexto atual.

// const pessoa ={
//     nome:"Joaquim",
//     saudar(){
//         return `${this.nome}!`;
//     }
// }
// console.log(pessoa.saudar())

function aluno(nome, nota){
    this.nome=nome
    this.nota=nota

    this.dado_anonimo=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

        this.dado_arrow=function(){
        setTimeout(()=>{

            console.log(this.nome)
            console.log(this.nota)

        },2000)
    }
}

const al1= new aluno("Joaquim", 100)
al1.dado_anonimo()
al1.dado_arrow()
