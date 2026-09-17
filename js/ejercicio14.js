function calcular() {
    var inputValor = document.getElementById("numeros").value.trim();
    
    //vlidar que no esté vacío
    if (inputValor === "") {
        alert("El campo está vacío. Ingresa una serie de números separados por comas.");
        return;
    }

    var arregloCadena = inputValor.split(",");
    var numeros = [];

    //revisar cada elemento individualmente
    for (var i = 0; i < arregloCadena.length; i++) {
        var valorLimpio = arregloCadena[i].trim();
        
        // 
        if (valorLimpio === "" || isNaN(valorLimpio)) {
            alert("Error: Asegúrate de ingresar únicamente números válidos separados por comas.");
            
            // Limpiamos las cajas por si se había quedado pegado un NaN del intento anterior
            document.getElementById("mayor").value = "";
            document.getElementById("menor").value = "";
            document.getElementById("promedio").value = "";
            return; // Detiene la ejecución inmediatamente
        }
        
        // Si pasa la validación, lo convertimos a número y lo guardamos
        numeros.push(Number(valorLimpio));
    }

    //Si todo está correcto se realizan los calculos
    document.getElementById("mayor").value = Math.max(...numeros);
    document.getElementById("menor").value = Math.min(...numeros);
    document.getElementById("promedio").value = numeros.reduce((a, b) => a + b, 0) / numeros.length;
}