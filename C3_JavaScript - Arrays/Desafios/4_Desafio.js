/*
Desafio 4: Sala dividida

Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:

    'João', 
    'Juliana', 
    'Ana', 
    'Caio', 
    'Lara', 
    'Marjorie', 
    'Guilherme', 
    'Aline', 
    'Fabiana', 
    'Andre', 
    'Carlos', 
    'Paulo', 
    'Bia', 
    'Vivian', 
    'Isabela', 
    'Vinícius', 
    'Renan', 
    'Renata', 
    'Daisy', 
    'Camilo'

Nosso desafio é dividi-los em duas salas com a mesma quantidade de pessoas. 
Isto é, duas listas com 10 estudantes, cada.
*/

const alunos = [
    "João",       // 0
    "Juliana",    // 1
    "Ana",        // 2
    "Caio",       // 3
    "Lara",       // 4
    "Marjorie",   // 5
    "Guilherme",  // 6
    "Aline",      // 7
    "Fabiana",    // 8
    "Andre",      // 9
    "Carlos",     // 10
    "Paulo",      // 11
    "Bia",        // 12
    "Vivian",     // 13
    "Isabela",    // 14
    "Vinícius",   // 15
    "Renan",      // 16
    "Renata",     // 17
    "Daisy",      // 18
    "Camilo",     // 19
];


// O slice serve para dividir(Copiar) uma parte do array para outro array.
// Mas precisamos ter cuidado, porque ele não vai pegar os alunos do indice 
// 0 á 10, ou seja, do João ao Carlos. Ele vai pegar os alunos do indice de
// 0 á 9, que nesse caso serão os alunos entre o João ao Andre;
const sala_1 = alunos.slice(0, 10);

// Nesse caso não precisa colocar o ultimo parametro, porque o método
// entende que você que pegar o aluno do indice 10 até o final do array;
const sala_2 = alunos.slice(10);

// caso eu queira dividir os alunos entre dois, podemos fazer da seguinte 
// forma:

const sala_3 = alunos.slice(0, alunos.length / 2);

console.log(sala_1);
console.log(sala_2);
console.log(sala_3);
