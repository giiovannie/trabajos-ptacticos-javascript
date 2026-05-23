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