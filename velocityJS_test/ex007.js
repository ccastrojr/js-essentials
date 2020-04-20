// var vel = 60.5;
// console.log(`\nA velocidade do carro é ${vel} km/h.\n`);

// if(vel > 60) {
//     console.log(`Acima da velocidade. Cuidado!!\n`)
// } else {
//     console.log(`Sempre use cinto de segurança\n`);
// }

var data = new Date();
var hora = data.getDay();
console.log(`Agora são ${hora} horas.`);
if(hora < 12){
    console.log('Bom dia caralho!');
} else if(hora <= 18){
    console.log('Boa tarde xoxota!');
} else {
    console.log('Boa noite fdp!');
}

/*switch(hora) {
    case 0: console.log('Domingo'); break; 
    case 1: console.log('Segunda'); break;
    case 2: console.log('Terça'); break;
    case 3: console.log('Quarta'); break;
    case 4: console.log('Quinta'); break;
    case 5: console.log('Sexta'); break;
    case 6: console.log('Sabado'); break;
}*/
