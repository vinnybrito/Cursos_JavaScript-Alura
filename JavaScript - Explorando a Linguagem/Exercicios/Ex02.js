// 2-) Crie uma função que recebe a idade como parâmetro e retorna "Maior de idade"
// se a idade for maior ou igual a 18, e "Menor de idade" caso contrário.

function age(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

let verificarIdade = age(6);
console.log(verificarIdade);

