var btnEnviar = document.querySelector("#btnEnviar");

function verificarIdade(){
    var anoAtual = new Date().getFullYear();
    var anoNascimento = Number(document.querySelector("#anoNascimento").value);

    if(anoNascimento > anoAtual || anoNascimento == 0 || anoNascimento < 1900){
        erro.innerHTML = '* Preencha o campo corretamente';
        erro.style.color = 'red';
        erro.style.fontSize = '10pt';
    } else {
        erro.innerHTML = '';
        var idade = anoAtual - anoNascimento;
        var sexo = verificaSexo(document.getElementsByName("rdSexo"));
        
        colocaImagem(idade, sexo); 
    } 
}

function verificaSexo(rdSexo) {
    if(rdSexo[0].checked) return 'Masculino';
    else return 'Feminino';
}

function colocaImagem(idade, sexo) {
    if(sexo == 'Masculino') {
        if(idade == 0 || idade < 4) {
            acimaImg.innerHTML = `Você é um bebê de <strong>${idade}</strong> anos` + 
                ` e nem deveria estar na internet. Cadê seus pais?`;
            imgResultado.src = 'imgs/bebe.jpg';
            imgResultado.alt = 'Imagem de um bebê mordendo o pé.';
        } else if(idade >= 4 && idade < 12) {
            acimaImg.innerHTML = `Você é um garoto de <strong>${idade}</strong> anos.`;
            imgResultado.src = 'imgs/menino.jpg';
            imgResultado.alt = 'Imagem de um garoto adolescente.';
        } else if(idade > 12 && idade < 18) {
            acimaImg.innerHTML = `Você é um adolescente de <strong>${idade}</strong> anos.`;
            imgResultado.src = 'imgs/menino-adolescente.jpg';
            imgResultado.alt = 'Imagem de um adolescente.';
        } else if(idade > 18 && idade < 27) {
            acimaImg.innerHTML = `Você é um homem jovem de <strong>${idade}</strong> anos.`;
            imgResultado.src = 'imgs/homem-jovem.jpg';
            imgResultado.alt = 'Imagem de um homem jovem.';
        } else if(idade > 27 && idade < 60) {
            acimaImg.innerHTML = `Você é um homem adulto de <strong>${idade}</strong> anos.`;
            imgResultado.src = 'imgs/homem-adulto.jpg';
            imgResultado.alt = 'Imagem de um homem adulto.';
        } else {
            acimaImg.innerHTML = `Você é um homem idoso de <strong>${idade}</strong> anos.`;
            imgResultado.src = 'imgs/homem-idoso.jpg';
            imgResultado.alt = 'Imagem de um homem idoso.';
        }
    } else {
        if(idade == 0 || idade < 4) {
            acimaImg.innerHTML = `Você é um bebê de <strong>${idade}</strong> anos` + 
                ` e nem deveria estar na internet. Cadê seus pais?`;
            imgResultado.src = 'imgs/bebe.jpg';
            imgResultado.alt = 'Imagem de um bebê mordendo o pé.';
        } else if(idade > 4 && idade < 12) {
            acimaImg.innerHTML = `Você é uma garota de <strong>${idade}</strong> anos.`;
            imgResultado.src = 'imgs/menina.jpg';
            imgResultado.alt = 'Imagem de uma garota adolescente.';
        } else if(idade > 12 && idade < 18) {
            acimaImg.innerHTML = `Você é uma adolescente de <strong>${idade}</strong> anos.`;
            imgResultado.src = 'imgs/menina-adolescente.jpg';
            imgResultado.alt = 'Imagem de uma adolescente.';
        } else if(idade > 18 && idade < 27) { 
            acimaImg.innerHTML = `Você é uma mulher jovem de <strong>${idade}</strong> anos.`;
            imgResultado.src = 'imgs/mulher-jovem.jpg';
            imgResultado.alt = 'Imagem de um mulher jovem.';
        } else if(idade > 27 && idade < 60) {
            acimaImg.innerHTML = `Você é uma mulher adulta de <strong>${idade}</strong> anos.`;
            imgResultado.src = 'imgs/mulher-adulta.jpg';
            imgResultado.alt = 'Imagem de um mulher adulta.';
        } else {
            acimaImg.innerHTML = `Você é uma mulher idosa de <strong>${idade}</strong> anos.`;
            imgResultado.src = 'imgs/mulher-idosa.jpg';
            imgResultado.alt = 'Imagem de uma mulher idosa.';
        }
    }
}