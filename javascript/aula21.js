// Comprehensions
// Python-like: [x*2 for x in range(1,6) if x > 2]
// const resultado = [x * 2 for (x of Array.from({length: 5}, (_, i) => i+1)) if (x > 2)];
// Resultado: [8, 10]

// Mais comum com map/filter
// const nums = [1,2,3,4,5];
// const paresMaioresQue2 = nums
//   .filter(x => x > 2)
//   .map(x => x * 2);  // [8, 10][web:4]

// funcao spread-usando para fazer copia de array ou objecto

const obj1 = { nome: 'João', idade: 25 };
const obj2 = { ...obj1, cidade: 'Luanda' };  
console.log(obj2)

// Copiar array
const original = [1, 2, 3];
const copia = [...original]; 
console.log(copia)

// Concatenar arrays
const a1 = [1, 2];
const a2 = [3, 4];
const combinado = [...a1, ...a2];  
console.log(combinado)

// usando funcao
function f(x, y, z) {}
var args = [0, 1, 2];
f(...args);
console.log(args)

