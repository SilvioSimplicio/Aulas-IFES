//1 Alterar a cor de fundo de um elemento HTML: Crie uma função de seta que, ao ser chamada, 
// altere a cor de fundo de um elemento HTML específico.

/*const mudaCorFundo = () => {
    const elemento = document.getElementById('silvio');
    elemento.style.backgroundColor = 'red'
}
mudaCorFundo()*/

//2 Alternar entre duas classes CSS de um elemento HTML: Crie uma função de seta que, ao ser chamada, 
// alterne entre duas classes CSS de um elemento HTML específico.

/*const toggleClasses = () => {
    const elemento = document.getElementById('silvio');
    elemento.classList.toggle('classe1')
    elemento.classList.toggle('classe2')
}
toggleClasses()*/

//3 Exibir uma mensagem em um elemento HTML ao clicar em um botão: Crie uma função de seta que, 
// ao ser chamada, exiba uma mensagem em um elemento HTML específico quando um botão for clicado.

/*const exibirMensagem = () => {
    const elemento = document.getElementById('silvio');
    elemento.innerText = 'Cliquei'
}*/

//4 Ocultar um elemento HTML após um período de tempo: Crie uma função de seta que, ao ser chamada, 
// oculte um elemento HTML específico após um determinado período de tempo.

/*const esconder = () => {
    const elemento = document.getElementById('silvio');
    setTimeout( () =>  {
        elemento.style.display = 'none';
    }, 1000)
}*/

//5 Alterar o texto de um elemento HTML ao passar o mouse sobre ele: Crie uma função de seta que, 
// ao ser chamada, altere o texto de um elemento HTML específico quando o mouse passar sobre ele.

c/*const passarMouse = () => {
    const elemento = document.getElementById('silvio');
    elemento.addEventListener('mouseover', () => {
    elemento.innerText = 'Passou o mouse';
    })
}
passarMouse()*/

//6 Exibir uma caixa de diálogo de confirmação ao clicar em um link: Crie uma função de seta que, 
// ao ser chamada, exiba uma caixa de diálogo de confirmação ao clicar em um link HTML específico.

 /*   function confirmarAcao() {
    const confirmacao = confirm('Tem certeza que deseja prosseguir?');
    if (confirmacao) {
        alert('ok');
    } else {
        alert('não ok');
    }
}*/

//Alternar a visibilidade de um elemento HTML ao clicar em outro elemento: Crie uma função de seta que, 
// ao ser chamada, alterne a visibilidade de um elemento HTML específico ao clicar em outro elemento.

const alternarVisibilidade = () => {
        const elemento1 = document.getElementById('silvio');
        const elemento2 = document.getElementById('davi');
        elemento2.addEventListener('click', () => {
        elemento1.style.display = 'none';
            })
}
alternarVisibilidade();

/*
Adicionar um novo item a uma lista ao pressionar Enter em um campo de entrada: Crie uma função de seta que, ao ser chamada, adicione um novo item a uma lista HTML quando o usuário pressionar a tecla Enter em um campo de entrada.
Criar um menu de navegação com efeito de deslize: Crie uma função de seta que, ao ser chamada, crie um menu de navegação com efeito de deslize ao clicar em um botão, utilizando CSS para animações.
Validar um formulário HTML ao enviar: Crie uma função de seta que, ao ser chamada, valide os campos de um formulário HTML específico ao enviar e exiba mensagens de erro, se necessário.*/