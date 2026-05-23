// Consigna: Recorrer los números del 1 al 20 y mostrar si cada número es par o impar.
// Objetivo: Usar módulo y condicionales.
// Pista: Recordá que numero % 2 === 0 permite saber si un número es par.

let num = 0;

for(let i = 1; i <= 20; i++){
    num += 1;
    if(num % 2 === 0){
        document.write(`${num} es par <br>`)
    }else{
        document.write(`${num} es impar <br>`)
    }
}