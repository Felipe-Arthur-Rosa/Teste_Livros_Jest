import Autor from "../autor";
import Editora from "../editora";
import Livro from "../livro";

describe("Testes da classe Livro", () => {
  it("Livro inicia vazio", () => {
    const livro = new Livro();
    expect(livro).toEqual({
      nome: null,
      valor: null,
      editora: [],
      autor: [],
      desconto: null,
      total: null
    });
  });
  
  it("Adicionar valores", () => {
    const editora = new Editora("Martins Fontes", "Rio de Janeiro");
    const autor = new Autor("J. R. R. Tolkien", "Britânico");
  
    const livro = new Livro();
  
    livro.adicionaAutor(autor);
    livro.adicionaDesconto(10);
    livro.adicionaEditora(editora);
    livro.adicionaNome("O Senhor dos Anéis");
    livro.adicionaValor(46);
  
    expect(livro.autor).toEqual([{ nome: "J. R. R. Tolkien", nacionalidade: "Britânico" }]);
    expect(livro.desconto).toEqual(10);
    expect(livro.editora).toEqual([{ nome: "Martins Fontes", cidade: "Rio de Janeiro" }]);
    expect(livro.nome).toEqual("O Senhor dos Anéis");
    expect(livro.valor).toEqual(46);
    });
  
  it("Dar erro no calculo do total", () => { 
  
    function errodescontoLivro() {
      const livro = new Livro();
      livro.calculaTotal();
    }
  
    expect(errodescontoLivro).toThrowError('Valor de desconto não informado');
    
    function erroValorLivro() {
      const livro = new Livro();
      livro.adicionaDesconto(10);
      livro.calculaTotal();
    }
  
    expect(erroValorLivro).toThrowError('Valor do produto não informado');
  });
  
  it("Calcular o total do livro", () => {
    const editora = new Editora("Martins Fontes", "Rio de Janeiro");
    const autor = new Autor("J. R. R. Tolkien", "Britânico");
    const livro = new Livro();
  
    livro.adicionaAutor(autor);
    livro.adicionaDesconto(10);
    livro.adicionaEditora(editora);
    livro.adicionaNome("O Senhor dos Anéis");
    livro.adicionaValor(46);
    livro.calculaTotal();
  
    expect(livro.total).toEqual(41.4);
  });  
});

