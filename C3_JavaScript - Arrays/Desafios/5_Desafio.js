/*
Desafio 5: Atualizando elementos

Temos que criar uma lista de chamada com os seguintes alunos:

    * João
    * Ana
    * Caio
    * Lara
    * Marjorie
    * Leo

Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será
atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.

*/

const nomes = [
    'João',
    'Ana',
    'Caio',
    'Lara',
    'Marjorie',
    'Leo'
];

// No primeiro parametro, você informa a partir de qual indice você quer
// remover o elemento, e o segundo parametro você informa a quantidde de 
// itens que você quer remover
nomes.splice(1, 2, 'Rodrigo');

// O splice consegue receber um terceiro parametro, onde ele vai remover a ana
// e o caio e colocar o rodrigo no lugar;

console.log(nomes);


// Outros exemplos

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈'];

animaisDoAquario.splice(1,0,'🐠');
animaisDoAquario.splice(3,2,'🐟');

console.log(animaisDoAquario);