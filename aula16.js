// Multiplas funções(Funções dentro de funções)
function A(x){
    function B(y){
        function C(z){
            return x + y + z;  // 1+2+3 = 6
        }
        return C(3);  // ← Captura retorno de C
    }
    return B(2);     // ← Captura retorno de B
}
console.log(A(1));  // Mostra: 6


const soma =(...valores)=>{
    const somar=val=>{
        let res =0
        for(v of val)
            res+=v 
        return res   
    }
    return somar(valores)
}
console.log(soma(1, 15, 10, 14))
valor=[1, 15, 10, 14]
console.log(soma(...valor))