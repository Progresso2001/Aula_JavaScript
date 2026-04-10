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

Usando array de objectos

const produtos = [
    {id: 1, nome: "Notebook", preco: 2500},
    {id: 2, nome: "Mouse", preco: 500}
];

const prodString = JSON.stringify(produtos)
console.log(typeof produtos)
console.log(typeof prodString)
console.log(prodString)

Exemplo 3: Com parâmetros (espaçamento para formato legível)

const pessoa ={
    nome: "Carlos",
    endereco:{
        rua: "Avenida Principal",
        numero: 34
    }
}

console.log(JSON.stringify(pessoa, null, 2))

Exemplo 4: Usando replacer (filtrar propriedades)

const dados = {
  nome: "Maria",
  senha: "123456",
  email: "maria@email.com"
}

Remover a senha do Json
const dadosFiltrados = JSON.stringify(dados, ["nome", "email"])
console.log(dadosFiltrados)
usando funcao
const dadosFiltrados = JSON.stringify(dados, (key, value) => {
    if (key == "senha") return undefined
    return value
})
console.log(dadosFiltrados)

Exemplo 2: Array JSON
const jsonArray = '[{"produto":"Celular","preco":1500},{"produto":"Fone","preco":200}]'
const listaProdutos = JSON.parse(jsonArray)
console.log(listaProdutos)
console.log(listaProdutos[0].produto) 
console.log(listaProdutos[1].preco)

Tratamento de erros

const jsonString = '{"nome":"Pedro","idade":28,"cidade":"São Paulo"}'
function parseJsonSeguro(jsonString){
    try{
        return JSON.parse(jsonString)
    }catch (erro) {
        console.error("Json Inválido!", erro.message)
        return null

    }
}
const invalido = "{nome:'Joao'}" //Aspas faltando
const resultado = parseJsonSeguro(invalido)
console.log(resultado)

const valido = '{"nome":"João"}'
const resultado2 = parseJsonSeguro(valido)
console.log(resultado2.nome)


// Exemplo 4: Reviver function (transformar dados durante o parse)
const dadosJSON = '{"nome":"João","nascimento":"1990-05-15","preco":"99.90"}'

const dadosTransformados = JSON.parse(dadosJSON, (key, value) => {
  if (key === "nascimento") return new Date(value)
  if (key === "preco") return parseFloat(value)
  return value
})

console.log(dadosTransformados.nascimento) 
console.log(dadosTransformados.preco)      
console.log(typeof dadosTransformados.preco)

Salvando dados no localStorage

Salvar dados do usuário
const usuarioAtual = {
  id: 1,
  nome: "Mariana",
  preferencias: {
    tema: "escuro",
    notificacoes: true
  },
  ultimoAcesso: new Date()
}

// Converter para JSON e salvar
localStorage.setItem("usuario", JSON.stringify(usuarioAtual))

// Recuperar e converter de volta
const dadosSalvos = localStorage.getItem("usuario")
const usuarioRecuperado = JSON.parse(dadosSalvos)
usuarioRecuperado.ultimoAcesso = new Date(usuarioRecuperado.ultimoAcesso)

console.log(usuarioRecuperado.nome) 
console.log(usuarioRecuperado.preferencias.tema)

Simulando comunicação com API

Dados que chegam do servidor (string JSON)
const respostaAPI = `
{
  "status": "sucesso",
  "dados": {
    "usuarios": [
      {"id": 1, "nome": "Ana", "email": "ana@email.com"},
      {"id": 2, "nome": "Bruno", "email": "bruno@email.com"}
    ],
    "total": 2
  }
}
`

// Converter para objeto JavaScript
const resposta = JSON.parse(respostaAPI)

// Trabalhar com os dados
if (resposta.status === "sucesso") {
  resposta.dados.usuarios.forEach(usuario => {
    console.log(`${usuario.nome} - ${usuario.email}`)
  })
  console.log(`Total: ${resposta.dados.total} usuários`)
}

// Enviar dados para o servidor
const novoUsuario = {
  nome: "Carla",
  email: "carla@email.com",
  senha: "123456"
}

const dadosEnvio = JSON.stringify(novoUsuario)
console.log("Enviando para o servidor:", dadosEnvio)
