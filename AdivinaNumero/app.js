//Funcion random y juego
let random= Math.floor(Math.random()*(10-1)-1);
console.log(random);

let numero= parseInt(prompt("Adivina el numero entre 1 y 10"));
let vidas= 5;

while(random!== numero && vidas>1) {
	vidas--;
	numero= parseInt(prompt("Numero incorrecto, intentalo de nuevo. Tus vidas son "+ vidas));
}

if(random===numero) {
	console.log("Ganaste");
	alert("Ganaste");
} else {
	console.log("Perdiste");
	alert("Perdiste");
}