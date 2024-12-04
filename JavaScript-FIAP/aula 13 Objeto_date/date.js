
let dataAtual = new Date();
console.log(dataAtual);

//Dia do Mês
let dataMes = dataAtual.getDate();

if (dataMes < 10) {
    dataMes = '0' + dataMes;
    console.log(dataMes);
}
console.log(dataMes);

//Dia da semana
let dataDia = dataAtual.getDay();
console.log(dataDia);
let diaSemanaExtenso;


//Colocando o dia da semana por extenso
switch (dataDia) {
    case 0:
        console.log('Hoje é Domingo');
        diaSemanaExtenso = 'Domingo'
        break;
    case 1:
        console.log('Hoje é Segunda-Feira');
        diaSemanaExtenso = 'Segunda-Feira'
        break;
    case 2:
        console.log('Hoje é Terça-Feira');
        diaSemanaExtenso = 'Terça-Feira'
        break;
    case 3:
        console.log('Hoje é Quarta-Feira');
        diaSemanaExtenso = 'Quarta-Feira'
        break;
    case 4:
        console.log('Hoje é Quinta-Feira');
        diaSemanaExtenso = 'Quinta-Feira'
        break;
    case 6:
        console.log('Hoje é Sexta-Feira');
        diaSemanaExtenso = 'Sexta-Feira'
        break;
    default:
        console.log('Hoje é Sábado'); 
        diaSemanaExtenso = 'Sabado';

}

// Mês
let mesAtual = dataAtual.getMonth() + 1;
console.log(mesAtual);

let mesAtualZero = (mesAtual < 10) ? '0' + mesAtual : mesAtual; //Operador Ternário
console.log(mesAtualZero);

// Ano
let anoAtual = dataAtual.getFullYear();
console.log(anoAtual);

//Pegando a Hora
let horaAtual = dataAtual.getHours();

horaAtual = (horaAtual < 10) ? '0' + horaAtual : horaAtual;
console.log(horaAtual);

//Minutos
let minutoAtual = dataAtual.getMinutes();
minutoAtual = (minutoAtual < 10) ? '0' + minutoAtual : minutoAtual;
console.log(minutoAtual);


//Segundos
let segundoAtual = dataAtual.getSeconds();
segundoAtual = (segundoAtual < 10) ? '0' + segundoAtual : segundoAtual;
console.log(segundoAtual);

//Montando a data
console.log(`${diaSemanaExtenso}, dia ${dataMes} do ${mesAtualZero} de ${anoAtual}, hora atual : ${horaAtual} : ${minutoAtual} : ${segundoAtual}`)