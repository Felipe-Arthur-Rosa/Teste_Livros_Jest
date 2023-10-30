import Livro from './livro.js';
import Autor from './autor.js';
import Editora from './editora.js';

const livro = new Livro();

livro.adicionaNome('O Senhor dos Anéis');
livro.adicionaValor('46');

livro.adicionaEditora(new Editora('Martins Fontes', 'Rio de Janeiro', 'fontes@gmail.com'));
livro.adicionaAutor(new Autor('J. R. R. Tolkien', 'Britânico'));

livro.adicionaDesconto(10);

livro.calculaTotal();

console.log(livro);
