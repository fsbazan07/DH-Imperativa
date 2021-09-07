//Ejercicio 1: Discoteca

function discoteca(edad) {
    if (edad % 2 ==! 0) {
        console.log("Sabias que tu edad es impar?");
    }    
    if (edad < 0){
        console.log("Error, edad inválida. Por favor ingrese un numero válido");
    }
    else if (edad < 18) {
        console.log("No puede pasar al bar");
    }
    else if (edad < 21) {
        console.log("puede pasar al bar, pero no puede tomar alcohol");
    }
    else if (edad) {
        console.log("Felicidades por cumplir la mayoria de edad");        
    } else {
        console.log("Puede pasar al bar y tomar alcohol");
    }
}
discoteca(21)

//Ejercicio 2 precio de combustible
function calcularPrecio (litrosConsumidos, precio) {
        
    if (litrosConsumidos <= 25) {
        return precio += 50;
    } else if (litrosConsumidos > 25) {
        return precio += 25;
    }
    if (litrosConsumidos <= 25) {
        return precio += 50;
    } else if (litrosConsumidos > 25) {
        return precio += 25;
    }    
}
function totalAPagar(vehiculo, litrosConsumidos) {
    console.log("vehiculo", vehiculo);
    console.log("litros consumidos", litrosConsumidos);
    let precio;
    
    
    if (vehiculo == "coche") {
        precio = litrosConsumidos * 86;
        console.log(calcularPrecio(litrosConsumidos, precio));
    }
    else if (vehiculo == "moto") {
        precio = litrosConsumidos * 70;
        console.log(calcularPrecio(litrosConsumidos, precio));
    }
    else if (vehiculo == "autobus") {
    precio = litrosConsumidos * 55;
    console.log(calcularPrecio(litrosConsumidos, precio));
    }
}

totalAPagar("moto", 100);

//Ejercicio 3: local de sandwiches

function pedirSandwich (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    console.log("base", base);
    console.log("pan", pan);
    let precio = 0

    if (base == "pollo") {
        precio += 150;
    } else if (base == "carne") {
        precio += 200;        
    } else if ("veggie") {
        precio += 100;
    } else console.log("no se eligio ninguna base");

    if (pan == "blanco") {
        precio += 50;        
    } else if (pan == "negro") {
        precio += 60;
    } else if (pan == "s/gluten") {
        precio += 75;
    } else "No se eligio pan";
    
    queso ? precio += 20 : precio +=0;
    tomate ? precio += 15 : precio +=0;
    lechuga ? precio += 10 : precio +=0;
    cebolla ? precio += 15 : precio +=0;
    mayonesa ? precio += 5 : precio +=0;
    mostaza ? precio += 5 : precio +=0;
    
    console.log("precio", precio);
} 
pedirSandwich("carne", "s/gluten", false, false, false, false, true, false);


