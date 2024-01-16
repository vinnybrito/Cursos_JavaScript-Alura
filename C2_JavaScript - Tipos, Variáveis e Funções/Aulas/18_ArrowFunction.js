// Exemplo de como estamos costruindo uma função

function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// como utilizar uma arrow function

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow Function com mais de uma linha de intrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return `Somente números de 1 á 9`;
    } else {
        return num1 + num2;
    }
}


// Hoisting: Nessa caso a arrow function se comporta da mesma forma.

console.log(somaNumerosPequenos(2, 3));
