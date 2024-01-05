console.log(`\nTrabalhando com Loops`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Salavador';

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);


let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } 
    contador += 1;
}

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpa, tivemos um erro!");
}

console.log("Destino existe: ", destinoExiste);


for (let cont = 0; cont < 3; cont++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } 
}