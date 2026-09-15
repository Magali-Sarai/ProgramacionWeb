function convertir(){
    //Obtiene el valor del los grados
    var grados=document.getElementById("grados").value;
    //Validación
    if(grados==""){
        alert("Pon algo crack");
        return;
        }
    //Convierte 
    var resultado=(parseInt(grados)*1.8)+32;
    //Muestra el rsultado en el elemento con id resultado
    document.getElementById("resultado").value = resultado + " F";
}