var miCarro = new Object();
miCarro.marca='Porche';
miCarro.modelo='911RS';
miCarro.anio=2013;
console.log(miCarro);

var miCarro = {
    marca: 'Bugatti',
    modelo: 'Chirion',
    anio: 2022,
    verificado: true,
    emplacada: true,
    fechaMultas: ["12/05/2015","23/06/2024", "12/01/2026"]
}
console.log(miCarro);
//leer
console.log(miCarro.fechaMultas[2]);

miCarro.color="Azul";
console.log(miCarro.color);
console.log(miCarro);

miCarro.modelo="Ikon Fiesta";
console.log(miCarro);

delete miCarro.verificado;
console.log(miCarro);