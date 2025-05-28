// Estrutura de dados principal: Lista de notícias (array de objetos)
let noticias = [
    { id: 1, titulo: "Notícia 1", conteudo: "Conteúdo da notícia 1." },
    { id: 2, titulo: "Notícia 2", conteudo: "Conteúdo da notícia 2." },
    { id: 3, titulo: "Notícia 3", conteudo: "Conteúdo da notícia 3." }
  ];
  
  // Índice da notícia atual sendo visualizada
  let indiceAtual = 0;
  
  // Estrutura do tipo Pilha: armazena o histórico de visualização
  let historico = []; // push para empilhar, pop para voltar
  
  // Função que atualiza a interface com base no índice atual
  function exibirNoticia(indice) {
    if (noticias[indice]) {
      const noticia = noticias[indice];
      document.getElementById("titulo").textContent = noticia.titulo;
      document.getElementById("conteudo").textContent = noticia.conteudo;
    }
  }
  
  // Navegar para próxima notícia e salvar a atual no histórico (PILHA)
  document.getElementById("proxima-btn").addEventListener("click", () => {
    if (indiceAtual < noticias.length - 1) {
      historico.push(indiceAtual);
      indiceAtual++;
      exibirNoticia(indiceAtual);
    }
  });
  
  // Navegar para a anterior (também usando histórico)
  document.getElementById("anterior-btn").addEventListener("click", () => {
    if (indiceAtual > 0) {
      historico.push(indiceAtual);
      indiceAtual--;
      exibirNoticia(indiceAtual);
    }
  });
  
  // Função "voltar" baseada na pilha de histórico
  document.getElementById("voltar-btn").addEventListener("click", () => {
    if (historico.length > 0) {
      indiceAtual = historico.pop(); // recupera última visualizada
      exibirNoticia(indiceAtual);
    }
  });
  
  // Adiciona uma nova notícia ao final da lista (array)
  document.getElementById("adicionar-btn").addEventListener("click", () => {
    const titulo = document.getElementById("nova-titulo").value;
    const conteudo = document.getElementById("nova-conteudo").value;
    if (titulo && conteudo) {
      const novaId = noticias.length > 0 ? noticias[noticias.length - 1].id + 1 : 1;
      noticias.push({ id: novaId, titulo, conteudo });
      alert("Notícia adicionada!");
    }
  });
  
  // Remove uma notícia pelo ID fornecido (busca na lista e remove)
  document.getElementById("remover-btn").addEventListener("click", () => {
    const id = parseInt(document.getElementById("remover-id").value);
    const index = noticias.findIndex(n => n.id === id);
    if (index !== -1) {
      noticias.splice(index, 1); // remove do array
      if (indiceAtual >= noticias.length) indiceAtual = noticias.length - 1;
      exibirNoticia(indiceAtual);
      alert("Notícia removida!");
    } else {
      alert("ID não encontrado.");
    }
  });
  
  // Inicializa exibindo a primeira notícia
  exibirNoticia(indiceAtual);
  