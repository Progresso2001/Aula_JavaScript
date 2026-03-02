// Criando uma função e usar o escopo em bloco
function testeEscopo() {
    var carroVar = "Fusca";      // Escopo de função
    let carroLet = "Uno";        // Escopo de bloco
    const carroConst = "Gol";    // Escopo de bloco
    
    if (true) {
        var carroVar = "Ferrari";     // Sobrescreve a var externa
        let carroLet = "Lamborghini"; // Nova variável no bloco
        const carroConst = "Porsche"; // Nova constante no bloco
        
        console.log("DENTRO do if:");
        console.log("var:", carroVar);    // Ferrari
        console.log("let:", carroLet);    // Lamborghini  
        console.log("const:", carroConst); // Porsche
    }
    
    console.log("FORA do if:");
    console.log("var:", carroVar);    // Ferrari (mudou!)
    console.log("let:", carroLet);    // Uno (inalterado)
    console.log("const:", carroConst); // Gol (inalterado)
}

testeEscopo();
