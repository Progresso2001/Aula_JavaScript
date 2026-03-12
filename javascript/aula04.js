// conversao de dados 
let resp = 43
resp = "Ola como vai ";
console.log(resp)

// numeros e operadores + , ou seja converte o numero em uma string , fazendo uma concatenação
let r = 43
r= "Tenho " + 23 + " anos de idade";
console.log(r)

x = "56" + 7
console.log(x)

// Com todos os outros operadores, o JavaScript não converte valores numéricos em strings.

y = "45" - 9;
z = "123" * 6;
console.log(y)
console.log(z)

// Recuperar numero de sequencia
let n = '1.1' + '1.1'
let m = (+'1.1') + (+'1.1') // Nota: os parênteses são adicionados para maior clareza, não são obrigatórios.
console.log(n)
console.log(m)
// literais de array, usando o metodo length para descrever a quantidade de elementos
const coffees = ["French Roast", "Colombian", "Kona"];
console.log(coffees.length)

// Vírgulas extras em literais de array

const nome = ['julia', , 'Rosa']
console.log(nome.length)

const nomes = [, 'julia', , 'Rosa', ,] //Se acrescenta outra virgua no final ou no inicio dos elementos ela é simplesmente ignorada
console.log(nomes)

/*
Nota: Vírgulas finais ajudam a manter os git diffs limpos quando você tem um array multi-linha, 
porque adicionar um item ao final adiciona apenas uma linha, mas não modifica a linha anterior.
*/
const myList = [
  "home",
  "school",
+ "hospital",
];

console.log(myList)

// Literias de objectos

// Nota: Vírgulas finais ajudam a manter os git diffs limpos quando você tem um array multi-linha, 
// porque adicionar um item ao final adiciona apenas uma linha, mas não modifica a linha anterior.
// const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log("Meu carro: " + car.myCar); // Saturn
console.log("Tipo de carro: " + car.getCar); // Honda
console.log("Vendedor especial: " + car.special); // Toyota

/*
Além disso, você pode usar um literal numérico ou de string para o nome de uma 
propriedade ou encaixar um objeto dentro de outra. O exemplo a seguir utiliza essas opções. 
*/
const carro = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(carro.manyCars.b); // Jeep
console.log(carro[7]); // Mazda

// Nomes de propriedades que não são identificadores válidos não podem ser acessados como uma propriedade ponto.

const unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!",
};
// console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
// console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !

// Em vez disso, elas devem ser acessadas com a notação de colchetes[]
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!

// Literais de string
/*
Você pode chamar qualquer um dos métodos do objeto String em um valor literal de string. 
O JavaScript converte automaticamente o literal da string em um objeto String temporário, chama o método e
 então descarta o objeto String temporário. Você também pode usar a propriedade com um literal de string:length
*/
console.log("Joyo's cat".length);
console.log('one line \n another line')

// literais modelos , usado para criar recurso de interpolação

// Basic literal string creation
`In JavaScript '\n' is a line-feed.`;

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;

// String interpolation
const apelido = "Lev",
  time = "today";
`Hello ${apelido}, how are you ${time}?`;

const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Print a bulleted list
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // This object will be serialized to "[object Object]".
    // Let's print something nicer.
    return JSON.stringify(arg);
  }
  return arg;
};

// Usando templates marcados
const print = (segments, ...args) => {
  // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};

const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
];

const progress = { javascript: 20, html: 50, css: 10 };
// INTERPOLANDO NO ESTILO TEMPLATE
print`I need to do:
${todos}
My current progress is: ${progress}
`;

// INTERPOLANDO NO ESTILO CONSOLE LOG
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
// Personagens fugitivas (escapa aspas)
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote); //Resultado : He read "The Cremation of Sam McGee" by R.W. Service.

// Para incluir uma barra inversa literal dentro de uma sequência, você deve sair do caractere barra invertida. 
// Por exemplo, para atribuir o caminho do arquivo a uma string, use o seguinte:c:\temp
const home = "c:\\temp";

// Você também pode escapar das quebras de linha precedendo-as com barra invertida. 
// A barra diagonal e a quebra de linha são removidas do valor da sequência.

const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.