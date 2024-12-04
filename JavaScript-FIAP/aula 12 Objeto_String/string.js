//Criando a String
let frase = 'Javascript é uma linguagem de programação maravilhosa';
console.log(frase);

//Retorna o tamanho
console.log(frase.length)

//Percorrendo a String
console.log(frase[0])
console.log(frase[52])

//Letras Maiusculas
console.log(frase.toUpperCase());

//Letras Minusculas
console.log(frase.toLocaleLowerCase());


//Percorrendo com Método
console.log(frase.charAt(40));

//Buscar algo na string - Pelo inicio
console.log(frase.indexOf('a'));

//Buscar algo na String - Pelo final
console.log(frase.lastIndexOf('a'));

//Verificar se existe - retorna valor booleano
console.log(frase.includes('ling'));

//Juntando Strings
console.log(frase.concat(', porém eu gosto mais de Java'));

//Substituindo Caracteres
console.log(frase.replace('a','@'));
console.log(frase.replaceAll('a','@#$'));

//Parte da String
console.log(frase.substring(4,40));
console.log(frase.slice(4,40));

//Separando a string - Array
console.log(frase.split(''));

//Retirando espaços
console.log(frase);
console.log(frase.trim());

//Verificando se a String começa com uma cadeia de caracteres
console.log(frase.startsWith('Java'));

//Verificar se a String termina com uma cadeia de caracteres
console.log(frase.endsWith('osa'));