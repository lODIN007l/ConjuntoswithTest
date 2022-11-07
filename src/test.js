const principal = require("./conjuntos");
//variables de prueba
// const primerConjunto = new Set([1, 2, 3, 4, 5]);
// const conVacio = new Set([]);
const primerConjunto = new Set([1, 2, 3, 4, 5]);
const segundoConjunto = new Set([4, 5, 8, 9, 10]);
//

// describe("Modulo Menu-Opciones", () => {
//   test("funcion Inicio  ", () => {
//     expect(fun_Inicio()).toEqual(
//       new Set([1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c", "d", "e"])
//     );
//   });
// });

// describe("Modulo Union", () => {
//   test("funcion Union  ", () => {
//     expect(fun_Union()).toEqual(
//       new Set([1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c", "d", "e"])
//     );
//   });
//   test("funcion Union  ", () => {
//     expect(fun_Union()).toEqual(expect.any(Object));
//   });
//   // test("funcion Union  ", () => {
//   //   expect(fun_Union([1, 2, 3, 4, 5], [])).toEqual(new Set([1, 2, 3, 4, 5]));
//   // });
// });
describe("Modulo Interseccion", () => {
  test("funcion Interseccion -cp1 ", () => {
    expect(fun_Inerseccion(primerConjunto, segundoConjunto)).toEqual(
      new Set([4, 5])
    );
  });
  test("funcion Interseccion - cp2  ", () => {
    expect(
      fun_Inerseccion([21, 22, 38, 44], new Set([44, 21, 38, 22, 44]))
    ).toEqual(new Set([21, 22, 38, 44]));
  });
  test("funcion Interseccion - cp3  ", () => {
    expect(fun_Inerseccion([1, 2, 3, 4, 5], new Set([6, 7, 8, 9, 10]))).toEqual(
      new Set([])
    );
  });
  test("funcion Interseccion - cp4  ", () => {
    expect(
      fun_Inerseccion(
        ["rosa", "tulipan", "girasol", "clavel"],
        new Set(["girasol", "rosa", "petunia"])
      )
    ).toEqual(new Set(["girasol", "rosa"]));
  });
  test("funcion Interseccion - cp5  ", () => {
    expect(fun_Inerseccion([1, 2, 3, 4, 5], new Set([]))).toEqual(new Set([]));
  });
});

describe("Modulo Diferencia", () => {
  test("funcion Diferencia - cp1  ", () => {
    expect(fun_Resta(primerConjunto, segundoConjunto)).toEqual(
      new Set([1, 2, 3])
    );
  });
  test("funcion Diferencia - cp2  ", () => {
    expect(fun_Resta([1, 2, 3, 4, 5], new Set([]))).toEqual(
      new Set([1, 2, 3, 4, 5])
    );
  });

  test("funcion Diferencia - cp3  ", () => {
    expect(fun_Resta(["rosa", "arbol", "casa"], new Set([1, 2, 3]))).toEqual(
      new Set(["rosa", "arbol", "casa"])
    );
  });
  test("funcion Diferencia - cp4  ", () => {
    expect(fun_Resta([1, 2, 3, 4, 5], new Set([6, 7, 8, 9, 10]))).toEqual(
      new Set([1, 2, 3, 4, 5])
    );
  });
  test("funcion Diferencia - cp5  ", () => {
    expect(
      fun_Resta(
        ["rosa", "tulipan", "girasol", "clavel"],
        new Set(["girasol", "rosa", "petunia"])
      )
    ).toEqual(new Set(["tulipan", "clavel"]));
  });
});
