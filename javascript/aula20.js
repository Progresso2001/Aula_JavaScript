// APAGAR ELEMENTO DO ARRAY

// var minhaFrutas=new Array(
//     'Banana',
//     'Goiaba',
//     'Pera',
//     'Maça',
//     'Uva',
// );
// minhaFrutas[3] = undefined
// if(3 in minhaFrutas){
//     console.log("Nova lista de frutas: " + minhaFrutas)

// }
// console.log(minhaFrutas)

// usando o operador in 
var meucarro = { marca: "Honda", modelo: "Accord", ano: 1998 };
console.log('marca'in meucarro)
console.log('qualidade'in meucarro)

const carro = { marca: "Honda", modelo: "Accord" };

delete carro.marca;

if ("marca" in carro === false) {
  carro.marca = "Suzuki";
}

console.log(carro.marca); 

// instanceof

var dia = new Date(2001,17,10)
if(dia instanceof Date){
    console.log(dia instanceof Date)
}

const car = {
  marca: "Honda",
  modelo: "Accord"
};

console.log("marca" in car);           
console.log(carro instanceof Object);

