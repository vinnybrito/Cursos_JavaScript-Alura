// Boolean 
const usuarioLogado = true;
const contaPaga = false;

// Truthy and Falsy

// 0 => false
// 1 => true

/*
    console.log(0 == false);
    console.log("" == false);
    console.log(1 == true);
*/

// null and undefined
// null => vazio ou nada

let minhaVar;
let varNull = null;

// console.log(minhaVar);
// console.log(varNull);

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);  // aparece como object

// é que quando o null foi criado no javaScript, ele foi criado como objeto
// Mas ele deveria ter sido criado como null. Esse é um dos bugs no JavaScript.
