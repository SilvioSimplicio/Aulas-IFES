const dados = [
    {
      descricao: "Como fazer backup no Google Drive",
      navegador: "Google Chrome",
      data: "2025-04-25",
      autor: "Silvio Simplicio"
    },
    {
      descricao: "Melhores práticas em segurança da informação",
      navegador: "Mozilla Firefox",
      data: "2025-04-26",
      autor: "Silvio Simplicio"
    },
    {
      descricao: "O que é Machine Learning",
      navegador: "Microsoft Edge",
      data: "2025-04-27",
      autor: "Silvio Simplicio"
    },
    {
      descricao: "Como configurar uma VPN no Windows",
      navegador: "Opera",
      data: "2025-04-28",
      autor: "Silvio Simplicio"
    },
    {
      descricao: "Exemplos de modelos de negócio inovadores",
      navegador: "Safari",
      data: "2025-04-29",
      autor: "Silvio Simplicio"
    }
  ];
  
  function mostrarDados() {
    const container = document.getElementById("resultado");
    container.innerHTML = "";
  
    dados.forEach(item => {
      const div = document.createElement("div");
      div.className = "item";
  
      div.innerHTML = `
        <p><strong>Descrição:</strong> ${item.descricao}</p>
        <p><strong>Navegador:</strong> ${item.navegador}</p>
        <p><strong>Data:</strong> ${item.data}</p>
        <p><strong>Autor:</strong> ${item.autor}</p>
      `;
  
      container.appendChild(div);
    });
  }
  