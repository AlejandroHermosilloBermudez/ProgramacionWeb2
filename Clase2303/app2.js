// Arreglo de productos (ahora se podrá modificar)
let productos = [
    {nombre: 'camisa',   precio: 300},
    {nombre: 'pantalon', precio: 550},
    {nombre: 'zapatos',  precio: 750},
    {nombre: 'sombrero', precio: 550},
    {nombre: 'tenis',    precio: 1200}
];

let carrito = [];

// funcion para mostrar el menu
function mostrarMenu(){
    let menu = "Seleccione un producto para agregar al carrito\n";

    for(let i = 0; i < productos.length; i++){
        menu += (i+1) + " .- " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    menu += (productos.length+1) + ".- Ver carrito y total\n";
    menu += (productos.length+2) + ".- Agregar nuevo producto\n";
    menu += (productos.length+3) + ".- Salir\n";

    return menu;
}

// funcion para agregar productos al carrito
function agregarAlCarrito(index){
    let productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log("Producto " + productoSeleccionado.nombre + " agregado al carrito");
}

// funcion para mostrar carrito
function mostrarCarritoTotal(){
    if(carrito.length === 0){
        console.log("El carrito esta vacio");
    }else{
        let mensaje = "Carrito de compras\n";
        let total = 0;

        for(let i = 0; i < carrito.length; i++){
            mensaje += (i+1) + " .- " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }

        mensaje += "\nTotal: $" + total;
        console.log(mensaje);
    }
}

// NUEVA funcion para agregar productos al arreglo
function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto");
    let precio = Number(prompt("Ingresa el precio del producto"));

    if(nombre && !isNaN(precio)){
        productos.push({nombre: nombre, precio: precio});
        console.log("Producto agregado correctamente");
    }else{
        console.log("Datos invalidos, no se agrego el producto");
    }
}

// menu principal
let opcion;

do{
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);

    if(isNaN(opcion) || opcion < 1 || opcion > productos.length+3){
        console.log("Opcion no valida, intenta de nuevo");

    }else if(opcion >= 1 && opcion <= productos.length){
        agregarAlCarrito(opcion-1);

    }else if(opcion === productos.length+1){
        mostrarCarritoTotal();

    }else if(opcion === productos.length+2){
        agregarProducto();
    }

}while(opcion !== productos.length+3);

console.log("Gracias por su compra :)");