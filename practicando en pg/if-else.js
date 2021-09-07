/* ejercicio 1

    Declaremos una variable con el nombre dato y asignémosle un valor booleano.

    Luego, deberemos hacer un if que evalúe esa variable y, si el valor es igual a  true, que imprima por consola "es true". Caso contrario, que imprima por consola "es false".*/
    var dato = true;
if (dato) {
    console.log("es true");
} else {
    console.log("es false");
};

/*ejercicio 2
    En este ejercicio nos viene dada una variable llamada lenguaje, que tiene asignado un string. Nuestro trabajo es construir un condicional if/else para que, si la variable contiene "javascript", imprima por consola el texto "Estoy aprendiendo". De lo contrario, que imprima"Lo aprenderé más adelante".*/
    let lenguaje = "javascript";
    if (lenguaje= "javascript" ) {
        console.log("Estoy aprendiendo");
    } else {
        console.log("Lo aprenderé más adelante");
    }  

    /* ejercicio 3

        Debemos completar la función puedePasar para que, analizando el nombre que recibe por parámetro, determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito"", no lo dejará pasar y lo indicará retornando false; si la persona se llama de otra forma, lo dejará pasar y lo indicará retornando true. */
        function puedePasar(nombre) {
            if (nombre == "Cosme Fulanito") {
                return false;
            } else {
                return true;
            }
        }

//ternarios y switch

/* ejercicio 1 
    El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el día que contenga la variable dia. Para esto, ya presentamos un código hecho con if/else que tendremos que modificar y convertirlo a un switch, manteniendo el mismo resultado. */

    let dia = 'jueves'
function finDeSemana (dia) {	
	switch (dia) {
	  case 'viernes': 
    	console.log('buen finde')
		break;
	case 'lunes':
    	console.log('buena semana')
	break;
    default :console.log('buen dia')
	}
}
