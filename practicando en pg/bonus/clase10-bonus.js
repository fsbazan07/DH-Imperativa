let array1 = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let array2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
/*En este ejercicio deberás crear una función que devuelva un array con sus elementos
invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e
invierta el orden de sus elementos.

1. Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array).*/

function imprimirInverso(array) {
   // let arrayInvertido = [];
    let largo = array.length
    for (let i = 1; i <= largo; i++) {
      let arrayInvertido = array.pop();
        console.log(arrayInvertido);
    }
}

imprimirInverso(array1)
//.reverse invierte el orden de los elementos del array
console.log(array2.reverse());

/*2. Creá la función inversor que tome un arreglo como argumento y devuelva uno
nuevo invertido.*/

function inversor(array) {
    return array.reverse()
}
console.log(inversor(array2));

/*En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos.
Ejemplo:
● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10]) // 23
● sumArray([-5,100, 19]) // 114*/

function sumArray(array) {
    let total = 0 
    for (let i = 0; i < array.length; i++) {
        total+=array[i]; 
    }
    return total
}
console.log(sumArray([10, 13, 10]));

/* En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.
Ejemplo:
● join(["h","o","l","a"]) debe retornar el string "hola".
● join(["c","h","a,"u"]) debe retornar el string "chau". */
let hola = ["h","o","l","a"];
function join(array) {
    let joineado = " "
    let long = array.length
    for (let i = 0; i < long; i++) {
        joineado += array[i].concat()
    }
    console.log(joineado);
}
join(hola);