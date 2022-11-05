const principal = require("./conjuntos");

// describe("Modulo Menu-Opciones", () => {
//   test("funcion Inicio  ", () => {
//     expect(fun_Inicio()).toEqual(
//       new Set([1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c", "d", "e"])
//     );
//   });
// });

describe("Modulo Union", () => {
  test("funcion Union  ", () => {
    expect(fun_Union()).toEqual(
      new Set([1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c", "d", "e"])
    );
  });
});
describe("Modulo Interseccion", () => {
  test("funcion Interseccion  ", () => {
    expect(fun_Union()).toEqual(
      new Set([1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c", "d", "e"])
    );
  });
});

describe("Modulo Diferencia", () => {
  test("funcion Diferencia  ", () => {
    expect(fun_Union()).toEqual(
      new Set([1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c", "d", "e"])
    );
  });
});
