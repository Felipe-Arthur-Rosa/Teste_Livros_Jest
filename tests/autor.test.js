import Autor from "../autor";

describe("Testes da classe Autor", () => {
  test("Deve criar um objeto Autor", () => {
    const autor = new Autor("J. R. R. Tolkien", "Britânico");
    expect(autor).toEqual({ nome: "J. R. R. Tolkien", nacionalidade: "Britânico" });
  });
});

