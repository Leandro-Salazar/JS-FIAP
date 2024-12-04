let numero1 = 50;
let numero2 = 80;
let resultado;

console.log(`Primeiro Número ${numero1}`);
console.log(`Segundo Número ${numero2}`);

//Operador && = Tudo precisa ser true para o resultado ser true.
resultado = (numero1 < numero2) && (numero1 !== numero2);
console.log(resultado);

//Operador || = Basta 1 ser true para a resposta ser true.
resultado = (numero1 > numero2) && (numero1 !== numero2);
console.log(resultado);

//Operador ! = Negação da resposta
resultado = !((numero1 > numero2) && (numero1 !== numero2));
console.log(resultado);


