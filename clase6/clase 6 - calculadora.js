function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "No se puede dividir por Cero";
  }
  return a / b;
}

function cuadradodeUnNumero(a) {
  return multiplicar(a, a);
}
function promedioDeTresNumeros(a, b, c) {
  return dividir(sumar(a, b) + c, 3);
}
function calcularPorcentaje(a, b) {
  return dividir(multiplicar(a, b), 100);
}
function generadorDePorcentaje(a, b) {
  return dividir(multiplicar(a, 100), b);
}

console.log("------------------Testeo de Operaciones------------------");
console.log(sumar(6, 3));
console.log(restar(6, 3));
console.log(multiplicar(6, 3));
console.log(dividir(6, 3));
console.log(dividir(6, 0));
console.log(cuadradodeUnNumero(6));
console.log(promedioDeTresNumeros(9, 9, 9));
console.log(calcularPorcentaje(300, 15));
console.log(generadorDePorcentaje(2, 200));
