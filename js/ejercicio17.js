// CLOSURE: Encapsula la lógica para mantener las variables privadas
const manejarTareas = (function() {
    //obtenerTareas(): Recupera las tareas del Local Storage
    function obtenerTareas() {
        // Scope Local: 'tareasGuardadas' solo existe dentro de esta función
        let tareasGuardadas = localStorage.getItem("tareas"); 
        
        // Uso de JSON.parse() para convertir de texto JSON a un arreglo JS
        if (tareasGuardadas) {
            return JSON.parse(tareasGuardadas); 
        } else {
            return [];
        }
    }

    // agregarTarea(): Agrega una nueva tarea al almacenamiento
    function agregarTarea(tareaObjeto) {
        let tareas = obtenerTareas();
        tareas.push(tareaObjeto);
        
        //uso de JSON.stringify() para convertir el arreglo JS a texto JSON
        localStorage.setItem("tareas", JSON.stringify(tareas)); 
    }

    // eliminarTarea(): Elimina una tarea específica
    function eliminarTarea(index) {//index= le da la ultima posición del arreglo
        let tareas = obtenerTareas();//aqui da el arreglo js
        tareas.splice(index, 1); // Remueve 1 elemento en la posición indicada
        localStorage.setItem("tareas", JSON.stringify(tareas)); //javascript a json
    }

    //funciones q tienen q ser públicas (accesibles desde fuera del closure)
    return {
        agregar: agregarTarea,
        eliminar: eliminarTarea,
        obtener: obtenerTareas
    };
})();

// FUNCIONES GLOBALES: Interactúan con el HTML (DOM)

// Se ejecuta cuando el usuario da clic en "Agregar Tarea"
function interfazAgregarTarea() {
    var inputTarea = document.getElementById("nuevaTarea").value.trim();
    
    if (inputTarea === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Debes escribir una tarea antes de agregarla.'
        });
        return;
    }

    // Objeto JSON base para la tarea
    var nuevaTareaObj = {
        tarea: inputTarea,
        completada: false
    };

    // Llamamos al método público del closure
    manejarTareas.agregar(nuevaTareaObj);
    
    // Limpiamos el input y volvemos a dibujar la lista
    document.getElementById("nuevaTarea").value = "";
    renderizarTareas();
}

// Se ejecuta cuando el usuario da clic en "Eliminar" en alguna tarea
function interfazEliminarTarea(index) {
    // Confirmar la eliminación con un alert sweet
    Swal.fire({
        title: '¿Estás seguro?',
        text: "La tarea será eliminada permanentemente.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Llamamos al método público del closure para borrar
            manejarTareas.eliminar(index);
            
            // Volvemos a dibujar la lista actualizada
            renderizarTareas();
            
            Swal.fire(
                'Eliminada',
                'Tu tarea ha sido eliminada del Local Storage.',
                'success'
            );
        }
    });
}

//renderizarTareas(): Dibuja las tareas en la página web
function renderizarTareas() {
    var listaContenedor = document.getElementById("listaTareas");
    listaContenedor.innerHTML = ""; // Limpia el contenedor antes de redibujar
    
    var tareasActuales = manejarTareas.obtener(); // Obtenemos el arreglo del Local Storage
    
    // Recorremos el arreglo y creamos elementos HTML para cada tarea
    tareasActuales.forEach(function(item, index) {
        // Se crea un contenedor para la tarea y su botón
        var divTarea = document.createElement("div");
        divTarea.style.marginBottom = "10px";
        
        // El input será readonly y el botón pasará el índice exacto para saber cuál borrar
        divTarea.innerHTML = `
            <input type="text" value="${item.tarea}" readonly style="width: 60%; display: inline-block;">
            <button type="button" class="boton-convertir" style="width: auto; padding: 5px 10px; background-color: #d9534f;" onclick="interfazEliminarTarea(${index})">Eliminar</button>
        `;
        
        listaContenedor.appendChild(divTarea);
    });
}

// Al recargar o abrir el navegador, las tareas se cargan desde el Local Storage
window.onload = function() {
    renderizarTareas();
};