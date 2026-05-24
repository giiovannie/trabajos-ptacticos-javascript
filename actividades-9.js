// Actividad 9. Mini proyecto integrador
// Consigna: Declarar el nombre del estudiante y un arreglo con sus notas. Calcular el
// promedio recorriendo el arreglo con un bucle. Mostrar el nombre, el promedio y un
// mensaje según el resultado: "Muy bueno" si el promedio es 7 o más, "Aprobado" si es 6 o
// más, y "Desaprobado" si es menor que 6.
// Objetivo: Integrar variables, arreglos, bucles, condicionales e interpolación de strings en
// un programa completo.
// Pista: Necesitás una variable acumuladora para la suma, un bucle for para recorrer el
// arreglo, y un if/else if para clasificar el resultado. El método toFixed(1) formatea el
// promedio con un decimal.

let nombre = prompt("ingrese su nombre completo")
let promedio = 0;

let estudiante = {
    nombre: nombre,
    notaParcial: [10,9,7,7,6]
}

for(num of estudiante.notaParcial){
    promedio += num;
}

promedio /= estudiante.notaParcial.length

if(promedio >= 7){
    document.write(`El/la alumno/a ${estudiante.nombre} tiene un promedio de : ${promedio.toFixed(0)}; <br> resultado: Muy bueno`)
}else if(promedio >= 6){
    document.write(`El/la alumno/a ${estudiante.nombre} tiene un promedio de : ${promedio.toFixed(0)}; <br> resultado: aprobado`)
}else{
    document.write(`El/la alumno/a ${estudiante.nombre} tiene un promedio de : ${promedio.toFixed(0)}; <br> resultado: desaprobado`)
}