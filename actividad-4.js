// Actividad 4. Tabla de multiplicar
// Consigna: Crear una variable numero y mostrar su tabla de multiplicar del 1 al 10.
// Objetivo: Practicar bucles for.

let num = Number(prompt("¿que tabla queres saber?"));

for(let i = 0; i <= 10; i++){
    document.write(`${num} x ${i} = ${num * i} <br>`)
}