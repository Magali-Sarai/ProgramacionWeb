//Estoy reutilizando código desde el ejercicio 12 de los primeros ejercicios de la matera jiji
function verificar(){
//Obtiene el valor de kilometros
var edad=document.getElementById("edad").value;
//Primer validación: Asefurarse que rellenen el campo
if(edad==""){
    alert("Pon algo porfas");
    return;
}
if(edad>=18){
    document.getElementById("resultado").value=" Puedes votar";
} else{
    document.getElementById("resultado").value=" No puedes votar";

}

}