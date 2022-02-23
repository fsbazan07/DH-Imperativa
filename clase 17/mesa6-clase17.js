//ARROW FUNCTION

// Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetro

let pasarACm  = numero => numero*2.54;
/* Crear una función que recibe un string y lo convierte en una una URL. 
ej: “pepito” es devuelto como “http://www.pepito.com”*/

let http = url => `http://www.${url}.com`;

/*Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.*/

let edadPerrito = edad => edad*7;

/*Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.*/

let horaTrabajo = sueldoMensual => sueldoMensual/40;

/*Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores.*/

let imc = (altura, peso) => (peso/(altura*altura)).toFixed(2);

/*Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
*/

let mayus = str => str.toUpperCase();

/*Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. */

let tipoDe = tipo => typeof tipo;

/*Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia*/

let circunferencia = radio => 2*radio*Math.PI;
 
//CALLBACKS

const nombres = ['Martin','Homero','Cosme','Steven','Adam'];
function buscarNombre(nombre, callback){
    
    for (let i = 0; i < nombres.length; i++){
        if (nombre === nombres[i]){
            return 'El nombre ' + nombres[i] + ' fue encontrado'
        }
    }
        callback(nombre)
    }



function mostrarResultado (nombre) {
    if (nombre === '') {
        return "Nombre no encontrado"
    } else { 
        return "Nombre fue encontrado"}
}
//Ejemplo de invocacion
console.log(buscarNombre('', mostrarResultado));
