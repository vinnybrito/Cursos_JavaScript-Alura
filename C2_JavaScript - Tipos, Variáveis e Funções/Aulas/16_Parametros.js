
// parametros de função

// function soma(num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(2, 2));
// console.log(soma(245, 20));
// console.log(soma(-500, 60));

// parametros vs argumentos
// Ordem dos parametros


function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, e minha idade é ${idade}`;
}

// É importante prestar atenção na ordem em que declaramos os argumentos na nossa função;
// console.log(nomeIdade(40, "Vinicius"));


function soma(numero1, numero2) {
    return numero1 + numero2;
}

// é possível definir um valor padrão para o argumento
// Exemplo: numero1 = 1

function multiplica(numero1 = 1, numero2 = 2) {
    return numero1 * numero2;
}

//                          ( 9 )    
console.log(multiplica((soma(4, 5))));