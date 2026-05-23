// Actividad 7. Objeto estudiante
// Consigna: Creá un objeto con los datos de un estudiante (nombre, apellido, nota). Mostrá un
// mensaje con todos sus datos y si aprobó o no.
// Objetivo: Practicar la creación y acceso a propiedades de objetos.
// Pista: Usá la notación punto (objeto.propiedad) para acceder a los valores. El operador ternario
// es útil para mostrar el estado en una sola línea.

let estudiante = {
    nombre: "ivan emmanuel",
    apellido: "Gomez",
    nota: 90
}

document.write(`Estudiante: ${estudiante.nombre} ${estudiante.apellido}. <br> Nota-parcial ${estudiante.nota} <br> Estado: ${estudiante.nota < 60 ? "desaprobado" : "aprobado"}` )



