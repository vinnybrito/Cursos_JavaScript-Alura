
// Como estavamos declarando as funções (na forma declarativa)
/*
    function minhaFuncao(parm) {
        // bloco de código
    }

    minhaFuncao("parm");
*/

// Existe uma outra forma de se escrever uma função no JavaScript
// que chamados de "espressão de função";

/* 
    const soma = function(num1, num2) {
        return num1 + num2;
    }
*/

// console.log(soma(1, 1));

// Porem existe diferença entre utilizar uma e a outra.
// As funções de expressoes são anonimas, o que possui nome seria a const, mas a função não.

// DIFERENÇA PRINCIPAL: HOISTING
// O javascript ao rodar o código faz um lista de todas as funções e var e executa eles 
// primeiro. por isso, é possivel utilizar um função antes dela "existir".


console.log(apresentar());

function apresentar() {
    return "olá";
}

// ------------------------

console.log(soma(1, 2))
const soma = function(num1, num2) {
    return num1 + num2;
}

// a diferença é que a segunda se comporta como um variavel 