
let consultas = [
    {
        nome: "Como aprender React, Javascript, HTML e CSS",
        horario: '25/4/2025 15h29min'
    },
    {
        nome: "Como aprender Javascript avançado",
        horario: '25/4/2025 15h37min'
    }

]

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const nome = evento.target.elements[0].value
    const data = new Date()
    const horario = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()} às ${data.getHours()}h${data.getMinutes()}min.`

    const consulta = {nome, horario}
    
    atualizar(consulta)
    evento.target.elements[0].value = ''

    //consultas.push(consulta)
    consultas = [...consultas, consulta]

})

function atualizar(consulta) {
    const res = document.getElementById('respostas');
    res.innerHTML += `<div class="consulta">
                        ${consulta.nome} - Consulta realizada no dia ${consulta.horario}
                    </div>`
                    
}
