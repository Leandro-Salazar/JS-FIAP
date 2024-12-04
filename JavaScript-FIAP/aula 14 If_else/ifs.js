const numeroSorteado = Math.floor(Math.random() * 100);
console.log(`Número sorteado: ${numeroSorteado}`);
if (numeroSorteado % 2 === 0){
    console.log(`O número ${numeroSorteado} é par!!!`);
}
else {
    console.log(`O número ${numeroSorteado} é ímpar!!!`);
}

const numSorteado1 = Math.floor(Math.random() * 100);
const numSorteado2 = Math.floor(Math.random() * 100);
console.log(`Números sorteados: ${numSorteado1} e
${numSorteado2}`);
if (numSorteado1 > numSorteado2) {
    console.log(`O número ${numSorteado1} é maior que o número
${numSorteado2}`);
}
else if (numSorteado2 > numSorteado1) {
    console.log(`O número ${numSorteado2} é maior que o número
${numSorteado1}`);
}
else {
    console.log(`${numSorteado1} é igual ao número
${numSorteado2}`);
}

//operador Ternário
let estoque = 5;
let mensagem = estoque > 0 ? "Produto disponível!" : "Produto esgotado!";
console.log(mensagem);



