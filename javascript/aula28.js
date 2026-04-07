// Trabalhando com objetos em JavaScript

// Exemplo de objecto meuCarro, que tem as PropertyDecorator.: fabricacao, modelo, ano
// var meuCarro = new Object()
// meuCarro.fabricacao = 'Ford';
// meuCarro.modelo = 'Mustang',
// meuCarro.ano = 1978
// console.log(meuCarro)
// console.log("Este carro foi criado em: " + meuCarro.ano)

// const bolaDeFutebol = new Object();
// bolaDeFutebol.modelo = "FiFa champion";
// bolaDeFutebol.cor = "Branco e preto";
// bolaDeFutebol.dono = "Real Madrid";
// bolaDeFutebol.ano_fabr = 2026;

// console.log(`Esta bola de futebol de cor ${bolaDeFutebol.cor} foi feita em ${bolaDeFutebol.ano_fabr}.`)
// console.log(`Clube proprietário: ${bolaDeFutebol.dono} e tem o modelo ${bolaDeFutebol.modelo}.`)

// Diferentes formas de acessar propriedades 

// var meuObj = new Object();
// str  = "Minha String";
// aleartorio =  Math.random();
// obj = new Object()

// meuObj.tipo = "Sintaxe de ponto";
// meuObj['data de criacao'] = "String com espaço";
// meuObj[str] ="Valor da string";
// meuObj[aleartorio] = "Numero aleartorio";
// meuObj[obj]= "objecto"
// meuObj[""]="String vazia"
// console.log(meuObj.str) // gera undefined porque o valor da prop nao esta definido
// console.log(meuObj)

// Acessar a propriedades usando valor da string que esta armazenda em uma variavel

// var meuCarro = new Object()
// var nomeDaPropriedade = "Fabricacao";
// meuCarro[nomeDaPropriedade] = "Ford"

// var nomeDaPropriedade = "Modelo"
// meuCarro[nomeDaPropriedade] = "Mustang"

// console.log(meuCarro["Modelo"])

// iterando usando o laço for...in

// function mostrarProps(obj, nomeDoObj) {
//   var resultado = "";
//   for (var i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
//     }
//   }
//   return resultado;
// }

// Criar um objecto

// var meuCarro = {
//     fabricacao :"Hyundai",
//     modelo : "Hyundai 1",
//     ano : 2001
// }

// // Chamar a função 
// var props = mostrarProps(meuCarro, "meuCarro");

// // mostrar o resultado
// console.log(props)

//USANDO PROPRIDADES ENUMERAVEIS

function listarTodasAsPropriedades(o) {
  var objectoASerInspecionado;
  var resultado = [];

  for (
    objectoASerInspecionado = o;
    objectoASerInspecionado !== null;
    objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)
  ) {
    resultado = resultado.concat(
      Object.getOwnPropertyNames(objectoASerInspecionado),
    );
  }

  return resultado;
}

const pessoa = {
    nome: "Progresso",
    idade: 33,
    email: "progresso@yandex.com"
}

console.log(listarTodasAsPropriedades(pessoa))