alunos = [
    'Vinicius',  // 0
    'Rodrigo',   // 1
    'Patricia'   // 2
];

let i = 0;

const aluno = (nome) => {
    while (i < alunos.length) {
        if (alunos[i] === nome) {
            return `Aluno encontrado na posição ${i}`;
        }
        i = i + 1;
    }

    return `Aluno não encontrado`;
};

const buscarAluno = aluno('Patricia');

console.log(buscarAluno);