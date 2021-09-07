/*let frase = "Hola!, soy Carli";
let array =["Alex", "Facundo", "Nanita", "Jorgito", 15]; //array siempre va en corchetes

console.log(frase.length);
console.log(frase.slice(7, 16));
console.log(frase.slice(8));
*/

let arrayCorreosPendientes = [
    'iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com',    'thanosdigitalhouse.com','thanos@digitalhouse.com'];
  /* array de correos admitidos */
  let arrayCorreosAdmitidos = [
       'thor@digitalhouse.com',
      'tucuMan@digitalhouse.com',
      'wanda@digitalhouse.com'
    ];
    let arrayCorreosDescartados = [];
    function verificarCorreo(correo){
        if (correo.includes("@")) {
            arrayCorreosAdmitidos.push(correo);
        } else {
            arrayCorreosDescartados.push(correo);
        }
    }
    verificarCorreo(arrayCorreosPendientes[0]);

    console.log("--- Array de correos admitidos: " + "longitud de array" + " ---");
    console.log(arrayCorreosAdmitidos);
    console.log();
    console.log("---Array de correos Descartados:"+  "longitud de array" + " ---");
    console.log(arrayCorreosDescartados);

   let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
];

function peliculasMayusculas(peliculas) {
     console.log(peliculas[0].toUpperCase());
     console.log(peliculas[1].toUpperCase());
     console.log(peliculas[2].toUpperCase());
     console.log(peliculas[3].toUpperCase());
     console.log(peliculas[4].toUpperCase());
}
peliculasMayusculas(peliculas);