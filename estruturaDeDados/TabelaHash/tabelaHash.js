 // TabelaHash
    class TabelaHash {
      constructor() {
        this.tamanho = 50;
        this.tabela = new Array(this.tamanho);
      }

      // Função de dispersão
      hash(key) {
        key = key.toString();
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i);
        }
        return hash % this.tamanho;
      }

      // Inserir
      inserir(key, valor) {
        const index = this.hash(key);
        if (!this.tabela[index]) {
          this.tabela[index] = [];
        }
        
        this.tabela[index].push({ key, valor });
      }

      // Obter
      obter(key) {
        const index = this.hash(key);
        if (this.tabela[index]) {
          for (let item of this.tabela[index]) {
            if (item.key === key) {
              return item.valor;
            }
          }
        }
        return undefined;
      }

      // Excluir (se for o caso de usar)
      excluir(key) {
        const index = this.hash(key);
        if (this.tabela[index]) {
          for (let i = 0; i < this.tabela[index].length; i++) {
            if (this.tabela[index][i].key === key) {
              this.tabela[index].splice(i, 1);
              return true;
            }
          }
        }
        return false;
      }
    }

    // Instanciando a tabela
    const tabela = new TabelaHash();

    // Inserção de 50 placas automáticas
    for (let i = 0; i < 50; i++) {
      const placa = `ABC${1000 + i}`;
      const dados = [`Proprietário ${i + 1}`, `Modelo ${i + 1}`];
      tabela.inserir(placa, dados);
    }

    // Função para inserir via formulário
    function inserir() {
      const placa = document.getElementById('placa').value.toUpperCase().trim();
      const proprietario = document.getElementById('proprietario').value.trim();
      const modelo = document.getElementById('modelo').value.trim();

      if (placa && proprietario && modelo) {
        const dados = [proprietario, modelo];
        tabela.inserir(placa, dados);
        document.getElementById('resultado').innerText = `Veículo ${placa} cadastrado/atualizado com sucesso.`;
      } else {
        document.getElementById('resultado').innerText = "Preencha todos os campos.";
      }

      // Limpa os campos
      document.getElementById('placa').value = '';
      document.getElementById('proprietario').value = '';
      document.getElementById('modelo').value = '';
    }

    // Função para buscar via formulário
    function buscar() {
      const placa = document.getElementById('placaBusca').value.toUpperCase().trim();
      const resultado = tabela.obter(placa);

      if (resultado) {
        document.getElementById('resultado').innerText = 
          `Placa: ${placa}\nProprietário: ${resultado[0]}\nModelo: ${resultado[1]}`;
      } else {
        document.getElementById('resultado').innerText = 
          `Veículo com placa ${placa} não encontrado.`;
      }
    }