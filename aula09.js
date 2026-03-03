//Diferença entre Pré Incremento e Pós Incremento
/*
A diferença principal entre pré-incremento (++i) e pós-incremento (i++) em JavaScript está na ordem de avaliação: o pré-incremento altera o valor da variável primeiro e depois retorna o novo valor, enquanto o pós-incremento retorna o valor original primeiro e só depois altera a variável.
Pré-Incremento (++i)
Primeiro incrementa o valor de i em 1, depois usa o resultado na expressão.
Exemplo: let i = 5; let x = ++i; resulta em i = 6 e x = 6.
Pós-Incremento (i++)
Primeiro usa o valor atual de i na expressão, depois incrementa em 1.
Exemplo: let i = 5; let x = i++; resulta em x = 5 e i = 6.
Comparação em Loop
Em loops for, como for (let i = 0; i < 3; i++) ou ++i, o resultado é idêntico porque o valor de i não é atribuído a outra variável no teste da condição
*/ 
let n = 13
console.log(n++)
// Pré-incremento
let i = 4
console.log(++i)
// Pos-incremento
let i = 4
console.log(i++)

let y = 3

let x = --y

console.log(x)




