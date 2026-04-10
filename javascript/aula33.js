// JSON -> JAVASCRPT OBJECT NOTATION

// usando o metodo JSON.stringify : para converter objectos para Json 
var pessoa = {
    nome:"Joaquim",
    idade:34,
    profissao: "Programador",
    habilidades: [
       "Programar", "Jogar", "Correr"
    ]
};

var jsonStrin = JSON.stringify(pessoa)
console.log(jsonStrin)

// usando o metodo JSON.parse : para converter Json para objectos 
var pessoa = `{
    "nome": "Pedro",
    "idade": 23,
    "hobbies" :[
        {"hobbie_1": "Programar", "hobbie_2": "Jogar", "hobbie_3": "Correr"}
    ],
    "num_cidade": 3,
    "local" : [
        {"local_1": "Luanda", "local_2": "Bengo","local_3": "Uige"}
    ]
}`

var jsonparse = JSON.parse(pessoa)
console.log(jsonparse)