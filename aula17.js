// Funções geradoras: são funções que permitem pausar(adiar)
// e retornar uma execução produzindo valores sequencialmete
// yield, bloquear o codigo principal

function* geradorNumerico(){
    yield 1;
    yield 2;
    yield 3;
    return 'Fim'
}
const gen =geradorNumerico();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
// usando o laço for
for(valor of geradorNumerico()){
    console.log(valor)
}

// -------------------------------
function* cores(){
    yield "verde";
    yield "vermelho";
    yield "branco";
    yield "preta ";
}
for(let cor of cores()){
    console.log(`Esta é a cor: ${cor}`)
}

function* perguntas(){
    const nome = yield "Qual o teu nome?"
    const desporto= yield "Qual o teu desporto favourito?"
    const idade= yield "Qual a tua idade?"
    return "Seu nome é " + nome + " gostas de " + desporto + " Tens " + idade + " de idade"
}
const dado=perguntas()
console.log(dado.next().value)
console.log(dado.next("Joaquim").value)
console.log(dado.next("Futebol").value)
console.log(dado.next(34).value)



function* contador(){
    let i=0
    while(true){
        yield i++
        if(i>5)
            break

    }
}
const itc=contador()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// usando o for
// for(let i = 0;i<10; i++){
//     console.log(itc.next().value)
// }
// criando um loop infinito e usando o a condição if e break para parar o loop
for(let contar of contador()){
    console.log(contar)
}