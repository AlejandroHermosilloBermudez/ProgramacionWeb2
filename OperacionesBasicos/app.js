function sumar(){
    let numero1=parseFloat(document.getElementById('num1').value);
    let numero2=parseFloat(document.getElementById('num2').value);
    let resultado=numero1+numero2;
    console.log(resultado);
    document.getElementById('resultado').innerText=resultado;
}

function restar(){
    let numero1=parseFloat(document.getElementById('num1').value);
    let numero2=parseFloat(document.getElementById('num2').value);
    let resultado=numero1-numero2;
    console.log(resultado);
    document.getElementById('resultado').innerText=resultado;
}

function multiplicar(){
    let numero1=parseFloat(document.getElementById('num1').value);
    let numero2=parseFloat(document.getElementById('num2').value);
    let resultado=numero1*numero2;
    console.log(resultado);
    document.getElementById('resultado').innerText=resultado;
}

function dividir(){
    let numero1=parseFloat(document.getElementById('num1').value);
    let numero2=parseFloat(document.getElementById('num2').value);
    let resultado=numero1/numero2;
    console.log(resultado);
    document.getElementById('resultado').innerText=resultado;
}

function modulo(){
    let numero1=parseFloat(document.getElementById('num1').value);
    let numero2=parseFloat(document.getElementById('num2').value);
    let resultado=numero1%numero2;
    console.log(resultado);
    document.getElementById('resultado').innerText=resultado;
}

