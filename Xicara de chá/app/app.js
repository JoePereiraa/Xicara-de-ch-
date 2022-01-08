console.log("Estou funcionando!!");
//Questão 1
let soma= imprimirSoma(10,10);
function imprimirSoma (soma1, soma2) {
     return soma1 + soma2;
}
console.log("Resultado de 10+10 é igual a", soma);


//Questão 2

/*function imprimirTriangulo1 (t1,t2,t3,t4,t5) {
    console.log(t1)
    console.log (t2) 
    console.log (t3)
    console.log(t4)
    console.log (t5)
}
imprimirTriangulo1("#","##","###","####","#####");*/



//Questão 3

function imprimirTriangulo (t1,t2,t3,t4,t5) {
    for (var imprimirTriangulo= t1,t2,t3,t4,t5; imprimirTriangulo < t5; imprimirTriangulo++) {
        console.log(imprimirTriangulo);}
};
imprimirTriangulo("#","##","###","####","#####");
