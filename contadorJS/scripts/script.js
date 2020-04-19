document.querySelector('#btnContar').addEventListener('click', contagem);

function contagem(){
    pContagem.innerText = '';
    var inicio = Number(document.querySelector('#inicio').value);
    var fim = Number(document.querySelector('#fim').value);
    var passo = Number(document.querySelector('#passo').value);

    if(inicio > fim || passo < 0) {
        tituloContador.innerHTML = 'Impossível contar dessa maneira.'
        tituloContador.style.color = '#d10e0e';
    } else if (passo == 0) {
        tituloContador.innerHTML = 'Como é impossível contar com passo = 0, vamos considerar passo = 1.'
        tituloContador.style.color = '#0ba30b';
        iniciaContagem(inicio, fim, 1);
    } else {
        tituloContador.innerHTML = 'Aqui está sua contagem:';
        tituloContador.style.color = '#0ba30b';
        iniciaContagem(inicio, fim, passo);
    }
}

function iniciaContagem(inicio, fim, passo){
    for(inicio; inicio<=fim; inicio+=passo) {
        pContagem.innerHTML += `${inicio} - `;
    }
    pContagem.innerHTML += `\u{1F3C1}`;
}