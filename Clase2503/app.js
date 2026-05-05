// definir el arreglo de productos
let productos = [];

// función para mostrar el menú
function mostrarMenu() {
    let opcion = prompt(`
Opciones disponibles
1.- Agregar producto
2.- Ver todos los productos
3.- Marcar producto como vendido
4.- Salir

Elige una opción:`);

    return parseInt(opcion);
}

// función para agregar producto
function agregarProducto() {
    let nombre = prompt("Introduce el nombre del producto:");
    let precio = prompt("Introduce el precio del producto:");

    if (nombre === null || nombre.trim() === "" || precio === null || precio.trim() === "") {
        alert("Nombre y precio no pueden estar vacíos");
        return;
    }

    precio = parseFloat(precio);

    if (isNaN(precio) || precio <= 0) {
        alert("Precio inválido");
        return;
    }

    let producto = {
        nombre: nombre.trim(),
        precio: precio,
        vendido: false
    };

    productos.push(producto);
    alert("Producto agregado correctamente");
}

// función para ver productos
function verProductos() {
    if (productos.length === 0) {
        alert("No hay productos en la tienda");
        return;
    }

    let mensaje = "Lista de productos:\n";

    productos.forEach((producto, index) => {
        mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio} [${producto.vendido ? "Vendido" : "Disponible"}]\n`;
    });

    alert(mensaje);
}

// función para marcar producto como vendido
function marcarProductoVendido() {
    if (productos.length === 0) {
        alert("No hay productos para vender");
        return;
    }

    let numero = prompt("Ingresa el número del producto vendido:");
    numero = parseInt(numero);

    if (isNaN(numero) || numero < 1 || numero > productos.length) {
        alert("Número inválido");
        return;
    }

    productos[numero - 1].vendido = true;

    alert(`El producto "${productos[numero - 1].nombre}" ha sido marcado como vendido`);
}

// función principal
function iniciarPrograma() {
    let bandera = true;

    while (bandera) {
        let opcion = mostrarMenu();

        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                verProductos();
                break;
            case 3:
                marcarProductoVendido();
                break;
            case 4:
                bandera = false;
                alert("Saliendo del sistema de tienda...");
                break;
            default:
                alert("Opción no válida");
        }
    }
}

// iniciar programa
iniciarPrograma();
