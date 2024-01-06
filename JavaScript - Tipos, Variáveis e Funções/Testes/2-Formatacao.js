// Realizando uma comparação de uma String

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false


// O JavaScript consegue diferenciar letras maiusculas de minusculas
// por isso, podemos formata-las

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true


// Ver quantidade de caracteres

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
