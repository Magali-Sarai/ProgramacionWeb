// Arreglo global para almacenar los objetos de los estudiantes
var estudiantes = [];

function agregarEstudiante() {
    // Obtiene los valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var calificacion = document.getElementById("calificacion").value;

    // Validación para campos vacíos
    if (nombre == "" || calificacion == "") {
        alert("Pon algo crack. Llena todos los campos.");
        return;
    }

    // Convertir a número y validar que sea válido
    calificacion = parseFloat(calificacion);
    if (isNaN(calificacion)) {
        alert("La calificación debe ser un número válido.");
        return;
    }

    // Creación del objeto estudiante con sus dos propiedades
    var estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    // Agrega el objeto al arreglo global
    estudiantes.push(estudiante);

    // Limpia los campos para agregar al siguiente más fácil
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
    
    //confirmación
    console.log("Estudiante agregado:", estudiante);
}

function calcular() {
    // Validación en caso de que le den a "Calcular" sin haber agregado estudiantes
    if (estudiantes.length === 0) {
        alert("Primero debes agregar estudiantes crack.");
        return;
    }

    // 1. Cálculo del promedio usando reduce()
    var suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0); 
    var promedio = suma / estudiantes.length; 

    // 2. Encontrar la calificación más alta y más baja usando Math.max, Math.min y map()[cite: 3]
    var calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion)); 
    var calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion)); 

    // Buscar el nombre del estudiante que tiene esa calificación exacta
    var estudianteAlto = estudiantes.find(e => e.calificacion === calificacionMaxima).nombre;
    var estudianteBajo = estudiantes.find(e => e.calificacion === calificacionMinima).nombre;

    // 3. Mostrar los resultados en las cajas readonly
    document.getElementById("promedio").value = promedio;
    document.getElementById("masAlta").value = estudianteAlto;
    document.getElementById("masBaja").value = estudianteBajo;
}