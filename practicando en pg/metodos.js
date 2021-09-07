//metodos de strings


// ejercicio 1:     Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar".
function dominio (s) {
    return "http://www."+ s;
}
dominio("digitalhouse.com.ar")

/*ejercicio 2
Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto (string), el que queramos. Luego, utilizando la propiedad length, tendremos que imprimir en consola el total de caracteres que contiene la frase */
let texto = " "
console.log(texto.length);

/*ejercicio 3
    Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

    1. Un texto.

    2. La palabra que vamos a buscar para reemplazar.

    3. La palabra que vamos a usar para reemplazar.

    La función deberá devolver el texto con la palabra reemplazada.

    Ejemplo:

let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'*/
function reemplazoFastFast(texto, buscar, usar) {
    return texto.replace(buscar, usar);
}
let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones)
/* Ejercicio 4
Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular.

    Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros: un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. La misma función retorna true en el caso de encontrar la palabra.

Ejemplo:

menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'); // true */

function menciona(texto, palabra) {
    texto.includes(palabra) ? console.log(true) : console.log(false);
    }
    menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','casa');
//lo anterior no lo aprobo el pg, pero si funciona
function menciona2(texto, palabra) {
    return texto.includes(palabra);
}
menciona2('Existen muchos lenguajes de programación y JavaScript es uno de ellos','casa');

/* ejercicio 5
    Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', deberemos recortarla para poder obtener el nombre 'Carli' en una nueva variable llamada licenciada.*/
    let frase = 'Hola!, soy Carli';
let licenciada =frase.slice(11)

console.log(licenciada);
//---------------------------------------------------------
//metodos arrays


/*Si lo juntamos, todo tiene sentido.

    Tenemos un array con palabras sueltas que, juntas, forman una gran frase.

    Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.

    Ejemplo:

console.log(fraseNueva); // "No he fracasado, simplemente me he topado con diez mil soluciones equivocadas"/practicando en pg*/

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  
  let fraseNueva = arrayFrase.join(" ");
  console.log(fraseNueva); 
  
/*ejercicio 2
    Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.

    Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.

    Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.*/

    let estudiantes = [
        {
          nombre: "Alvaro",
          promedio: 9,
          curso: "Android"
        },
        {
          nombre: "Daniel",
          promedio: 6,
          curso: "Full Stack"
        },
        {
          nombre: "Alexis",
          promedio: 3,
          curso: "iOS"
        }
      ];
      
      let alumnoEgresado = estudiantes.pop();

/* ejercicio  3     Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.

    Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.

    Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado. */
    let estudiantes = [
        {
          nombre: 'Alvaro',
          promedio : 9,
          curso : 'Android',
        },
        {
          nombre: 'Daniel',
          promedio : 6,
          curso : 'Full Stack',
        },
        {
          nombre: 'Alexis',
          promedio : 3,
          curso : 'iOS',
        },
      ]
      estudiantes.push({nombre: 'Juan',promedio: 5,curso: 'iOS'});
      
      estudiantes.push({nombre: 'Miguel',promedio: 2,curso: 'Android'});
      
      console.log(estudiantes);

      /* ejercicio 4   let estudiantes = [
        {
          nombre: 'Alvaro',
          promedio : 9,
          curso : 'Android',
        },
        {
          nombre: 'Daniel',
          promedio : 6,
          curso : 'Full Stack',
        },
        {
          nombre: 'Alexis',
          promedio : 3,
          curso : 'iOS',
        },
      ]
      estudiantes.push({nombre: 'Juan',promedio: 5,curso: 'iOS'});
      
      estudiantes.push({nombre: 'Miguel',promedio: 2,curso: 'Android'});
      
      console.log(estudiantes);*/

      let estudiantes = [
        {
           nombre: 'Alvaro',
           promedio : 9,
           curso : 'Android',
         },
          {
            nombre: 'Daniel',
            promedio : 6,
            curso : 'Full Stack',
          },
          {
            nombre: 'Alexis',
            promedio : 3,
            curso : 'iOS',
          },
        ]

let alumnoDeBaja = estudiantes.shift()

/* Se reintegraron alumnos.

    Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, se dieron de baja, ¡pero volvieron! Y para que no pierdan su lugar privilegiado queremos, utilizando un método de array, agregar al inicio del mismo a cada estudiante (de a uno a la vez).

    Los datos que hay que agregar de cada uno son:

    nombre: "Mariana",

    promedio: 9,

    curso: "Full Stack"

    -------------------------

    nombre: "Francisco",

    promedio: 2,

    curso: "Android" */

    let estudiantes = [
        {
          nombre: 'Alvaro',
          promedio : 9,
          curso : 'Android',
        },
        {
          nombre: 'Daniel',
          promedio : 6,
          curso : 'Full Stack',
        },
        {
          nombre: 'Alexis',
          promedio : 3,
          curso : 'iOS',
        }
      ]
      
      estudiantes.unshift({nombre: "Mariana",promedio: 9, curso: "Full Stack"})
      estudiantes.unshift({nombre: "Francisco", promedio: 2, curso: "Android"})