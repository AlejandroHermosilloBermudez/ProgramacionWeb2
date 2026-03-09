//Operadores Logicos

//Operador AND
console.log("Operador AND\n_________________");
console.log("| A | B |");
let resultado;
resultado= false&&false;
console.log("| 0 | 0 | "+resultado+" |");
resultado= false&&true;
console.log("| 0 | 1 | "+resultado+" |");
resultado= true&&false;
console.log("| 1 | 0 | "+resultado+" |");
resultado= true&&true;
console.log("| 1 | 1 | "+resultado+"  |");
console.log("\n\n");
//Operador OR
console.log("Operador OR\n_________________");
console.log("| A | B |");
let resultado2;
resultado2= false||false;
console.log("| 0 | 0 | "+resultado2+" |");
resultado2= false||true;
console.log("| 0 | 1 | "+resultado2+"  |");
resultado2= true||false;
console.log("| 1 | 0 | "+resultado2+"  |");
resultado2= true||true;
console.log("| 1 | 1 | "+resultado2+"  |");
console.log("\n\n");

//Operador NOT
console.log("Operador NOT\n_________________");
console.log("| A |");
let resultado3;
resultado3=! false;
console.log("| 0 | "+resultado3);

resultado3=! true;
console.log("| 1 | "+resultado3);