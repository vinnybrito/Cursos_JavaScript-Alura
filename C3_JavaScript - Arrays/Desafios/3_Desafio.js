/*
Desafio 3: Deletando elementos

Dessa vez, um dos professores acidentalmente lançou 5 notas no sistema para um aluno:

    - 10
    - 6
    - 8
    - 5.5
    - 10

Para corrigir, precisamos que remover a última nota e fazer o cálculo da média corretamente.
*/

const notas = [10, 6, 8, 5.5, 10];

// O método pop() é usado para remover o último elemento de um array e 
// retornar esse elemento removido.
notas.pop();

console.log(notas);