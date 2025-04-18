function compararPessoas (){

   let davi = parseInt(document.getElementById('idadeDavi').value);
   let silvio = parseInt(document.getElementById('idadeSilvio').value);
   let resposta = document.getElementById('resposta');

   if (isNaN(davi) || isNaN(silvio)) {
    resposta.innerText = "Por favor, insira valores válidos.";
    return;
}
   
   if(davi > silvio) {
        
        resposta.innerHTML = 'Silvio é mais novo.'
    }
    else if (davi < silvio) {
       
        resposta.innerHTML = 'Davi é mais novo.'
    }

    else {
        resposta.innerHTML = 'Davi e Silvio têm a mesma idade.';
    }
    
}

let btn = document.getElementById('botao');
btn.addEventListener('click', compararPessoas);