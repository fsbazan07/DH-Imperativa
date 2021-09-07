//for loops

/* ejercicio 1 Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!

    La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.*/
    function loro(texto){
        for(let i = 1; i <=5; i++){
        console.log(texto);
            }
        }
    /* ejercicio 2 
        En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

Ejemplo:
console.log(noParesDeContarImparesHasta(4)) // imprime por pantalla el valor 2, que se obtiene de contar 1 y 3. Los valores 0, 2 y 4 no los contabiliza por ser números pares.*/
function noParesDeContarImparesHasta(numero){
    let contador = 0
  for (let i = 0; i <= numero; i++){
      if (i%2 !== 0) {
          contador++
      }
    }
    return contador
}