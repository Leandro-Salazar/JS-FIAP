//Declarando as variáveis
let nome = 'Clark Kent';
let email= 'clark@fiap.com.br';
let logado = true;
let idade = 35;

//Exibindo no console
console.log(nome);
console.log(email);
console.log(logado);
console.log(idade);

//Exibindo o tipo
console.log(typeof nome);
console.log(typeof email);
console.log(typeof logado);
console.log(typeof idade);
console.log(typeof(nome),nome);

//Const, Let, Var (Evite o Var)

/*Quando o valor da constante é atribuído pelo desenvolvedor, existe o padrão de declarar o nome usando apenas letras maiúsculas. Quando o valor da constante é atribuído por alguma funcionalidade do script, declaramos o nome usando o padrão camelCase.*/

const DATA_NASCIMENTO = '02/11/1986';
console.log(DATA_NASCIMENTO);

var novoNome = 'Bruce Wayne';
console.log (novoNome);

novoNome = 'Logan';
console.log (novoNome);

console.log(poder);
var poder = 'voar';

let valorInicial = true;
console.log (valorInicial, typeof(valorInicial))

// Convertendo para String

valorInicial = String(valorInicial);
console.log (valorInicial, typeof(valorInicial))

//Convertendo para Booolean

valorInicial = Boolean(valorInicial)
console.log (valorInicial, typeof(valorInicial))

//Convertendo para number 

let numero = '12345';
console.log(typeof(numero), numero);

numero = Number(numero);
console.log(typeof(numero), numero);


