class Livro {
  constructor() {
    this.nome = null;
    this.valor = null;
    this.editora = [];
    this.autor = [];
    this.desconto = null;
    this.total = null;
  }

  adicionaNome(nome) {
    this.nome = nome;
  }

  adicionaValor(valor) {
    this.valor = valor;
  }

  adicionaEditora(editora) {
    this.editora.push(editora);
  }

  adicionaAutor(autor) {
    this.autor.push(autor);
  }

  adicionaDesconto(desconto) {
    this.desconto = desconto;
  }

  calculaTotal() {
    if (this.desconto == null) {
      throw new Error('Valor de desconto não informado');
    }
    if (this.valor == null) {
      throw new Error('Valor do produto não informado');
    }
    this.total = this.valor - (this.valor * this.desconto) / 100;
  }
}

export default Livro; 
