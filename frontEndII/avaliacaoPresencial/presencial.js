// JSON com as perguntas iniciais
const dadosConsultas = {
  "consultas": [
    { "id": 1, "pergunta": "Qual a capital do Canadá?" },
    { "id": 2, "pergunta": "Como criar um componente em React?" },
    { "id": 3, "pergunta": "Quem foi Albert Einstein?" },
    { "id": 4, "pergunta": "O que é CSS Flexbox?" },
    { "id": 5, "pergunta": "Como faço para converter JSON em objeto no JavaScript?" }
  ]
};

// Função fornecida no comando da atividade
const adicionarItemLista = (ulId, texto) => {
  const ul = document.getElementById(ulId);
  if (ul) {
    const li = document.createElement('li');
    li.textContent = texto;
    ul.appendChild(li);
  } else {
    console.error('Elemento UL não encontrado.');
  }
};

// Carrega as perguntas do JSON ao iniciar a página
window.onload = () => {
  dadosConsultas.consultas.forEach(item => {
    adicionarItemLista("listaConsultas", item.pergunta);
  });
};

// Adiciona nova pergunta ao clicar em "Consultar"
document.getElementById("consultarBtn").addEventListener("click", () => {
  const input = document.getElementById("perguntaInput");
  const texto = input.value.trim();
  if (texto !== "") {
    adicionarItemLista("listaConsultas", texto);
    input.value = ""; // Limpa o campo
  } else {
    alert("Por favor, digite uma pergunta.");
  }
});
