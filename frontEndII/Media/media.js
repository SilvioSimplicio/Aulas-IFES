//alert('oi');

function calcular() {
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let resposta = document.getElementById('resposta');

    nota1 = parseInt(nota1, 10);
    nota2 = parseInt(nota2, 10);

    let media = (nota1 + nota2) / 2;

    console.log(media);
    console.log(typeof media);

    resposta.innerHTML = 'Média vale ' + media;
    if (media < 60) {
        resposta.classList.remove('media-superior');
        resposta.classList.add('media-inferior');
    }
    else {
        resposta.classList.remove('media-inferior');
        resposta.classList.add('media-superior');
    }

}


let btn = document.getElementById('botao');
btn.addEventListener('click', calcular);