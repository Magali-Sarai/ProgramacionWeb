//Estoy reutilizando código desde el ejercicio 12 de los primeros ejercicios de la matera jiji
function convertir(){
//Obtiene el valor de pesos
var pesos=document.getElementById("pesos").value;
//Primer validación: Asefurarse que rellenen el campo
if(pesos==""){
    alert("Pon algo porfas");
    return;
}
//convertir
var resultado=parseInt(pesos)*0.055;
//Muestra el resultado en el elemento con el id resultado
document.getElementById("resultado").value=resultado + " USD";
}