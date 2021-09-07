/* function noParesDeContarImparesHasta(numero){
    let contador = 0
  for (let i = 0; i <= numero; i++){
      if (i%2 !== 0) {
          contador++
      }
    }
    return contador
} */
 //hecho en pg
function encontreUn5(numeros) {
    let mensaje = "Se encontró un 5!";
    let i = 0;
    do {
      if (numeros[i] === 5) {
          console.log( "Se encontró un 5!")
        return mensaje;
      }
      console.log(numeros[i]);
      i++;
    } while (i < numeros.length);
  }
  //hecho por profe 

  function encontreUn5(numeros) {
    let mensaje = "Se encontró un 5!";
    let i = 0;
    do {
      if (numeros[i] === 5) {
        return mensaje;
      }
      console.log(numeros[i]);
      i++;
    } while (i < numeros.length);
  }
  
  let arrayNums = [1, 2, 3, 8, 9, 5, 10, 15, 11];
  console.log(encontreUn5(arrayNums));

// intentado por mi
function encontrUn5(numeros) {
   let = 0;
   let mensaje ="se encontró un 5!";
    do {
        console.log(numeros[i]);
        if (numeros[i] === 5){
          return mensaje;
        }
        console.log(numeros[i]);
       i++
   } while (i < numeros.length);
}


let arrayNums = [1, 2, 3, 8, 9, 5, 10 ,15, 11];

console.log(encontreUn5(arrayNums));