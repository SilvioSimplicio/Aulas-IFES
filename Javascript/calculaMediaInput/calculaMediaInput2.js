let btn = document.getElementById('btnMedia');
btn.addEventListener('click', calcularMedia);

function calcularMedia() {
    let aluno = document.querySelector('.dados-aluno');
    let dados = aluno.querySelectorAll('div');

    let n1 = dados[1].innerText;
    let n2 = dados[2].innerText;
    let n3 = dados[3].innerText;

    let media = (parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3;
    
    let resultado = dados[4];
    resultado.innerText = media.toFixed(2);



    if(media >= 60) {
        resultado.classList.add('aprovado');
        resultado.classList.remove('reprovado');
    }

    else {
        resultado.classList.add('reprovado');
        resultado.classList.remove('aprovado');
    }

}