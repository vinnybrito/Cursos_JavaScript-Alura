/*
Desafio 7: Lista com 2 dimensões

    Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro 
    estudantes e a segunda possui suas respectivas médias:

        'João', 'Juliana', 'Caio', 'Ana'
        10, 8, 7.5, 9

    Nosso objetivo é criar uma lista que contenha essas duas listas. Já adiantando: 
    é possível uma lista conter outras listas. A seguir, vamos aprender como lidar 
    com esse tipo de dado mais complexo.
*/

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];


// Nesse caso adicionamos duas listas dentro de uma lista;
const listaDeAlunosEMedia = [alunos, medias];

// E para acessar os elementos dessa forma, o primeiro parametro,
// informa a lista que você quer acessar, e o segundo parametro,
// informa o elemento que você quer acessar;
console.log(
    `\nAluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedia[0][1]}.
    \nA nota dessa aluna é: ${listaDeAlunosEMedia[1][1]}
`);

// console.log(listaDeAlunosEMedia);