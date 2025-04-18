function calcularMedia() {

    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let resultado = document.getElementById('resultado');

    nota1 = parseInt(nota1, 10);
    nota2 = parseInt(nota2, 10);
       
    let media = (nota1 + nota2) / 2;

    resultado.innerHTML = 'Sua média é: ' + media.toFixed(2) + '.';
   
    if (media < 60) {
        resultado.classList.remove('media-superior');
        resultado.classList.add('media-inferior');
    }

    else {
        resultado.classList.remove('media-inferior');
        resultado.classList.add('media-superior');
    }
}

    let btn = document.getElementById('botao');
    btn.addEventListener('click', calcularMedia);