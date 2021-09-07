//Ejercicio 1

let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]
let pelisAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let videojuegos = pelisAnimadas.pop()

 function convertirAMayusculas(array){
    let pelisEnMayusculas = [];
    for (let i = 0; i < array.length; i++) {
        pelisEnMayusculas.push(array[i].toUpperCase())
    }
    return pelisEnMayusculas
  }

  console.log(convertirAMayusculas(peliculas)); 

  // Ejercicio 2


  function pasajeDeElementos(array1, array2) {
      
    for (let i = 0; i < array2.length; i - 1) {
     array1.push(array2.pop().toUpperCase())        
    }
    return array1;
}
console.log(pasajeDeElementos(convertirAMayusculas(peliculas), pelisAnimadas));

//Ejercicio 3

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
 for (let i = 0; i < asia.length; i++) {

    comparacionesAsiaEuropa = asia[i] === europa[i]
}
    return comparacionesAsiaEuropa
}
console.log(compararCalificaciones(asiaScores, euroScores));

