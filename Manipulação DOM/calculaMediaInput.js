function calcularMedia() {

    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    
    if (isNaN(nota1) || isNaN(nota2)) {
        resultado.innerText = "Por favor, insira valores válidos.";
        return;
    }
    
    let media = (nota1 + nota2) / 2;
    resultado.innerText = "Sua média é: " + media.toFixed(2) + ".";
}

    let btn = document.getElementById('botao');
    btn.addEventListener('click', calcularMedia);