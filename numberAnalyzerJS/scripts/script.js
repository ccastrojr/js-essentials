var arrayNumero = [];

function enviaNumero() {
    var numero = document.getElementById('numero').valueAsNumber;

    if(numero < 0 || numero > 100 || isNaN(numero)) {
        criaSpan('* Número inválido.');
        return;
    }

    arrayNumero.push(numero);
    if(insereElementos(numero)) removeElemento('erro');
}

function insereElementos(numero) {
    if(document.getElementById('listaElementos') == null){
        criaSelect();
    }

    var item = document.createElement('option');
    item.text = `Número: ${numero} adicionado`;
    item.value = `n${numero}`;
    document.getElementById('listaElementos').appendChild(item);

    criaBtn();

    return true;
}

function finalizar(){
    var maior = 0;
    var menor = 0;
    var soma = 0;

    maior = arrayNumero[0];
    menor = arrayNumero[0];

    for(var num in arrayNumero) {
        if(arrayNumero[num] > maior) maior = arrayNumero[num];
        if(arrayNumero[num] < menor) menor = arrayNumero[num];

        soma += arrayNumero[num];
    }

    criaP(`A quantidade de elementos cadastrados é ${arrayNumero.length}`);
    criaP(`O maior número digitado foi ${maior}`);
    criaP(`O menor número digitado foi ${menor}`);
    criaP(`A soma de todos os números foi ${soma}`);
    criaP(`A média dos valores é ${(soma/arrayNumero.length).toFixed(2)}`);
}

function criaSelect(){
    var slcElementos = document.createElement('select');
    slcElementos.setAttribute('id', 'listaElementos');
    slcElementos.setAttribute('size', '10');

    document.getElementById('saidaDados').appendChild(slcElementos);
}

function criaBtn() {
    removeElemento('btnFinalizar');

    var bFinalizar = document.createElement('input');
    bFinalizar.setAttribute('type', 'button');
    bFinalizar.setAttribute('value', 'Finalizar');
    bFinalizar.setAttribute('id', 'btnFinalizar');
    bFinalizar.setAttribute('onclick', 'finalizar()');

    document.getElementById('btn').appendChild(bFinalizar);
}

function criaP(msg) { 
    var paragrafo = document.createElement('p');
    paragrafo.appendChild(document.createTextNode(msg));

    document.getElementById('resultado').appendChild(paragrafo);
}

function criaSpan(msgSpan) {
    removeElemento('erro');

    var msg = document.createElement('span');
    msg.setAttribute('id', 'erro');
    document.getElementById('inNumber').appendChild(msg);

    msg.innerHTML = `<br>${msgSpan}`;
}

function removeElemento(idElemento) {
    if(document.getElementById(idElemento) != null) {
        document.getElementById(idElemento).remove();
    }
}