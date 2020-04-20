window.onload = carregarPelaHora();

function carregarPelaHora() {
    var hora = new Date().getHours();

    document.querySelector('#tituloVerificador').innerText = `Agora são ${hora} horas`;

    if(hora < 12){
        imgResultado.src = 'imgs/img_dia.jpg';
        imgResultado.alt = 'alt="Imagem do dia';
        
        document.body.style.background = '#FFCE34'
    } else if(hora <= 18) {
        imgResultado.src = 'imgs/img_tarde.jpg';
        imgResultado.alt = 'alt="Imagem da tarde';
        
        document.body.style.background = '#F58C22'
    } else {
        imgResultado.src = 'imgs/img_noite.jpg';
        imgResultado.alt = 'alt="Imagem da noite';
        
        document.body.style.background = '#00041A'
    }
}

