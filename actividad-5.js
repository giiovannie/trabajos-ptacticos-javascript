// Actividad 5. Suma acumulada
// Consigna: Sumar los números del 1 al 100 y mostrar el resultado final.
// Objetivo: Practicar variables acumuladoras.
// Pista: Necesitás una variable para acumular el resultado y un for para recorrer los números.

let acc = 0;

for(let i = 1 ; i <= 100; i++){
    acc += 1;
    document.write(`${acc} <br>`);
}