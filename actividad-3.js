// Actividad 3. Clasificación por edad
// Consigna: Crear una variable edad y mostrar "Niño" si es menor de 13, "Adolescente" si tiene
// entre 13 y 17, y "Adulto" si tiene 18 o más.
// Objetivo: Practicar if, else if y else.

let edad = Number(prompt("ingrese su edad actual"));

if(edad <= 0 || isNaN(edad)){
    alert("ingrese una edad valida")
}else{
    if(edad < 13){
        alert("Niño")
    }
    else if(edad >= 13 && edad <= 17){
        alert("Adolescente")
    }
    else{
    alert("Adulto")
    }
}