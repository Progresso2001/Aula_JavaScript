// APAGAR ELEMENTO DO ARRAY

var minhaFrutas=new Array(
    'Banana',
    'Goiaba',
    'Pera',
    'Maça',
    'Uva',
);
minhaFrutas[3] = undefined
if(3 in minhaFrutas){
    console.log("Nova lista de frutas: " + minhaFrutas)

}
console.log(minhaFrutas)

