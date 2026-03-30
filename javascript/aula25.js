// coleções com chave-valor


var sayings = new Map();
sayings.set("cat", "meow");
sayings.set("dog", "woof");
sayings.set("elephantt", "toot");
// console.log(sayings.get("fox")) //undefined
// console.log(sayings.has("cat"))
// console.log(sayings.delete("cat"))
console.log(sayings.has("cat"))
// console.log(sayings.size) // Usando o size para especificar o tamanho de elemntos
// console.log(sayings)

// for (var[key, value] of sayings){
//     console.log(key + " goes " + value)
// }

console.log(sayings.clear()); 
console.log(sayings.size);