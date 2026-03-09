//Comparar dos numeros
let dato= parseInt(prompt("Ingresa un numero"));
let dato1= parseInt(prompt("Ingresa otro numero"));
if(dato==dato1) {
	console.log("El valor de los datos son: "+dato+" y "+dato1);
	console.log(dato+" y "+dato1+" son iguales");
} else {
	if(dato>dato1) {
		console.log("El valor de los datos son: "+dato+" y "+dato1);
		console.log(dato+" es mayor que "+dato1);
	} else {
		console.log("El valor de los datos son: "+dato+" y "+dato1);
		console.log(+dato1+" es mayor que "+ dato);
	}
}