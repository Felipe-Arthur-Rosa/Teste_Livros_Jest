import Editora from "../editora";

describe("Testes da classe Editora", () => {
  test("Deve criar um objeto Editora", () => {
    const editora = new Editora("Martins Fontes", "Rio de Janeiro");
    expect(editora).toEqual({ nome: "Martins Fontes", cidade: "Rio de Janeiro" });
  })});