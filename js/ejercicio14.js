function calcular() {
    // Obtiene el valor del campo de texto
    var inputValor = document.getElementById("numeros").value;
    
    // Validación por si está vacío
    if(inputValor == "") {
        alert("Pon algo crack"); // Reutilizando tu validación 
        return;
    }

    // Separa los números ingresados como una cadena de texto en un arreglo usando las comas como delimitador[cite: 1]
    var arregloCadena = inputValor.split(","); 
    
    // Crea un nuevo arreglo convirtiendo las cadenas en números[cite: 1]
    var numeros = arregloCadena.map(Number); 

    // Calcula el número más grande pasando los elementos del arreglo como argumentos con el spread operator[cite: 1]
    var maximo = Math.max(...numeros); 
    
    // Calcula el número más pequeño pasando los elementos del arreglo como argumentos con el spread operator[cite: 1]
    var minimo = Math.min(...numeros); 

    // Suma todos los elementos para el cálculo del promedio usando reduce()[cite: 1]
    var suma = numeros.reduce((acc, valor) => acc + valor, 0); 
    
    // Divide el total entre la cantidad de elementos[cite: 1]
    var promedio = suma / numeros.length; 

    // Muestra los resultados en los elementos correspondientes[cite: 1]
    document.getElementById("mayor").value = maximo;
    document.getElementById("menor").value = minimo;
    document.getElementById("promedio").value = promedio;
}