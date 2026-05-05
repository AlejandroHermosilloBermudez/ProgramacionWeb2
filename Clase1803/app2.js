let alumno = {
    id: 319166103,
    nombre: "Alejandro",
    primerApellido: "Hermosillo",
    segundoApellido: "Bermudez",
    edad: 23,
    titulado: false,
    egresado: {
        estado: false
    },
    domicilio: {
        calle: {
            avenida: "Chicoasen",
            lote: 10,
            manzana: 3
        },
        numero: "612",
        colonia: "Pedregal de San Nicolas",
        alcaldia: "Tlalpan",
        estado: "CDMX",
        pais: "México",
        continenete: "Latinoamérica"
    },
    kinder: {
        nombre: "Kuruwi",
        actividadPrimerdia: function () {
            console.log("jugar con bloques");
        },
        actividadRecurrente: function () {
            console.log("cantar canciones");
        },
        datosMiss: {
            nombre: "Alexandra",
            edad: 29,
            estudios: "Maestría"
        }
    },
    primaria: {
        nombre: "KuruwiAgua",
        comer(comida) {
            return `ahora está comiendo ${comida}`;
        },
        mensaje(mensajeAlumno) {
            return `${this.nombre} es la Primaria y el alumno tiene que ir a ${mensajeAlumno}`;
        }
    }
}
console.log(alumno.kinder.datosMiss.nombre);
console.log(alumno.primaria.mensaje("Direccion"));
console.log(alumno.primaria.comer("Galleta"));