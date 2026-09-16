// Funciones flecha para las operaciones básicas
const sumar = (a, b) => a + b; 
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b; 
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero'; 

// Función principal que coordina el flujo
function calcularOperacion(operacion) {
    //obtener valores de los campos de entrada
    var val1 = document.getElementById("numero1").value.trim();
    var val2 = document.getElementById("numero2").value.trim();

    //validación de campos vacíos utilizando SweetAlert2
    if (val1 === "" || val2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingresa ambos números.'
        });
        return;
    }

    // Convertir a números
    var a = parseFloat(val1);
    var b = parseFloat(val2);

    //validación: Verificar que los valores ingresados sean números válidos
    if (isNaN(a) || isNaN(b)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Los valores ingresados no son números válidos.'
        });
        return;
    }

    var res;

    //llamada a las funciones flecha según el botón presionado
    if (operacion === 'suma') {
        res = sumar(a, b);
    } else if (operacion === 'resta') {
        res = restar(a, b);
    } else if (operacion === 'multiplicacion') {
        res = multiplicar(a, b);
    } else if (operacion === 'division') {
        res = dividir(a, b);
    }

    //manejo del error específico de división por cero
    if (res === 'Error: División por cero') {
        Swal.fire({
            icon: 'error',
            title: 'Operación no permitida',
            text: res
        });
        document.getElementById("resultado").value = ""; // Limpia el resultado si hay error
    } else {
        //mstrar el resultado en el campo readonly
        document.getElementById("resultado").value = res;
    }
}