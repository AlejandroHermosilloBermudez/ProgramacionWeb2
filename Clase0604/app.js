function generarListas(){
            let numero = document.getElementById("numero").value;
            let resultado = document.getElementById("resultado");

            // limpiar contenido anterior
            resultado.innerHTML = "";

            if(numero === "" || numero <= 0){
                alert("Ingresa un número válido");
                return;
            }

            numero = parseInt(numero);

            // generar listas
            for(let i = 1; i <= numero; i++){
                let lista = document.createElement("ul");

                // título de cada lista
                let titulo = document.createElement("h3");
                titulo.textContent = "Lista " + i;
                resultado.appendChild(titulo);

                // elementos dentro de cada lista
                for(let j = 1; j <= i; j++){
                    let item = document.createElement("li");
                    item.textContent = "Hola" + j;
                    lista.appendChild(item);
                }

                resultado.appendChild(lista);
            }
        }