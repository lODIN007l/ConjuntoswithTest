//requerimientos para el prompt
const prompt = require("prompt-sync")({ sigint: true });
////////////////////////////////////////////////////////////////////////////

const primerConjunto = new Set([1, 2, 3, 4, 5]);
const segundoConjunto = new Set([4, 5, 6, 7, 8]);
const elemetos = new Set(["a", "b", "c", "d", "e"]);
const elemetos_2 = new Set(["a", "b", "c", "d", "e"]);
// const elements = [
//   { name: "Javascript" },
//   { name: "CSS" },
//   { name: "HTML" },
//   { name: "SVG" },
//   { name: "JSON" },
//   { name: "Javascript", type: "Node" },
//   { name: "PHP" },
//   { name: "Go" },
//   { name: "Javascript", type: "Deno" },
// ];
// const element_2 = [
//   { name: "JS" },
//   { name: "CSS" },
//   { name: "html" },
//   { name: "SVG2" },
//   { name: "JSON22" },
//   { name: "Javascript 1", type: "Node" },
//   { name: "PHP2" },
//   { name: "Go4" },
//   { name: "Javascript", type: "Deno" },
// ];
////////////////////////////////////////////////////////////////////////////
// Union de Conjuntos
fun_Union = () => {
  const setN = new Set([
    ...primerConjunto,
    ...segundoConjunto,
    // ...elements,
    // ...element_2,
    ...elemetos_2,
    ...elemetos,
  ]);

  return setN;
};

//Interseccion de COnjuntos
fun_Inerseccion = () => {
  const elementosComunes = [...primerConjunto].filter((element) =>
    segundoConjunto.has(element)
  );
  const setComunes = new Set(elementosComunes);
  return setComunes;
};

//Resta de Conjuntos
fun_Resta = () => {
  const elementodDif = [...primerConjunto].filter(
    (element) => !segundoConjunto.has(element)
  );
  const resultadoResta = new Set(elementodDif);
  return resultadoResta;
};
//ejecucion

//menu inicio
fun_Inicio = () => {
  console.log("Escoja la operaciona realizar");
  console.log("1. Union de Conjuntos");
  console.log("2. Interseccion de Conjuntos");
  console.log("3. Resta de Conjuntos");
  console.log("4. Salir");
  let opcion = prompt("Ingrese la opcion: ");
  switch (opcion) {
    case "1":
      // fun_Union();
      console.log(fun_Union());
      break;
    case "2":
      // fun_Inerseccion();
      console.log(fun_Inerseccion());
      break;
    case "3":
      // fun_Resta();
      console.log(fun_Resta());
      break;
    case "4":
      console.log("Gracias por usar el programa");
      break;
    default:
      console.log("Opcion no valida");
      break;
  }
};
fun_Inicio();

//incorporar ingreso de los datos un metodo para llamarlo en eneral y que nos devuelva el array de los datos pedidos por consola
//enviar los datos por parametros a las funciones para no esperar a que digitemos uno en si
//tener en cuenta los casos de error en los conjuntos por definiicon en el documento de la pinchecha
