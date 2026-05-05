// definir el arreglo 
let tareas = [];

// funcion para mostrar el menu
function mostrarMenu() {
    let opcion = prompt(`
Opciones disponibles
1.- Agregar una tarea
2.- Ver todas las tareas
3.- Marcar tarea como completada
4.- Salir

Elige una opcion:`);

    return parseInt(opcion);
}

// función para agregar tarea
function agregarTarea() {
    let nombre = prompt("Introduce el nombre de la tarea:");

    if (nombre === null || nombre.trim() === "") {
        alert("El nombre de la tarea no puede estar vacío");
        return;
    }

    let tarea = {
        nombre: nombre.trim(),
        completada: false
    };

    tareas.push(tarea);
    alert("Tarea agregada correctamente");
}

// función para ver tareas
function verTareas() {
    if (tareas.length === 0) {
        alert("Lista de tareas vacía");
        return;
    }

    let mensaje = "Lista de tareas:\n";

    tareas.forEach((tarea, index) => {
        mensaje += `${index + 1}.- ${tarea.nombre} [${tarea.completada ? "Completada" : "Pendiente"}]\n`;
    });

    alert(mensaje);
}

// función para marcar tarea como completada
function marcarTareaCompletada() {
    if (tareas.length === 0) {
        alert("No hay tareas para marcar");
        return;
    }

    let numero = prompt("Ingresa el número de la tarea a marcar como completada:");
    numero = parseInt(numero);

    if (isNaN(numero) || numero < 1 || numero > tareas.length) {
        alert("Número de tarea inválido");
        return;
    }

    tareas[numero - 1].completada = true;

    alert(`La tarea "${tareas[numero - 1].nombre}" ha sido marcada como completada`);
}

// función principal
function iniciarPrograma() {
    let bandera = true;

    while (bandera) {
        let opcion = mostrarMenu();

        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                bandera = false;
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida");
        }
    }
}

// iniciar programa
iniciarPrograma();