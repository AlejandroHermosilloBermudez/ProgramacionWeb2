const Frutas=[];

while (confirm("Bienvenido a la feria de frutas\nQue fruta quieres comprar?")){
    Frutas.push(prompt("Ingresa el nombre de la fruta"));
}
alert("Gracias por venir a la Feria de las Frutas");
document.getElementById("resultado").innerHTML = Frutas;
