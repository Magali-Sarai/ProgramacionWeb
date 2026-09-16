//Estoy reutilizando código desde el ejercicio 12 de los primeros ejercicios de la matera jiji
function convertir(){
//Obtiene el valor de kilometros
var kilometros=document.getElementById("kilometros").value;
//Primer validación: Asefurarse que rellenen el campo
if(kilometros==""){
    alert("Pon algo porfas");
    return;
}
//convertir
var resultado=parseInt(kilometros)*0.621371;
//Muestra el resultado en el elemento con el id resultado
document.getElementById("resultado").value=resultado + " Millas";
}