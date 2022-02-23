const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const jsonHelper = require ('./jsonHelper')

// A
const carreras = {

    // B
    bicicletas: jsonHelper.leerJson("bicicletas"),
    // C
    bicicletasPorTanda: 4,
    // D
    ciclistasHabilitados: function(){
        return this.bicicletas.filter((bici)=>!bici.dopaje)}
         
    ,
    // E
    listarBicicletas : function(array) {
        array.forEach(bici => {
            let estado = bici.dopaje ? 'inhabilitado' : 'habilitado'
            console.log(`Ciclista: ${bici.ciclista}, marca: ${bici.marca}, rodado: ${bici.rodado}, peso: ${bici.peso} kg, largo: ${bici.largo} cm,
        estado: ${estado}.`);          
        });
    },
    // F
    buscarPorId: function(id) {
        return this.bicicletas.find((bici) => {bici.id === id})
    },
    // G
    filtrarPorPeso : function(peso) {
        let habilitados = this.ciclistasHabilitados()
        return habilitados.filter((bici)=>{bici.peso <= peso})

    },

    // H
    ordenarPorRodado : function(){
        return this.bicicletas.sort((a,b) =>{a.rodado - b.rodado});
    },
    // I
    largoPromedio : function() {
        let sumatoria = this.bicicletas.reduce((acum, bici)=>{acum + bici.largo, 0});
        let  promedio = sumatoria / this.bicicletas.length
        return `El largo promedio de lads bicicletas es de ${promedio}`
    },
    // J
    aumentarPeso : function(peso, id) {
        let biciEncontrada = this.buscarPorId(id);
        if (biciEncontrada) {
            biciEncontrada.peso += peso;
            jsonHelper.escribirJson('bicicletas', this.bicicletas)
        }
        console.log('afuera');
    }
    // K
    
    // L
}
/******************************/
/* Ejecución de las consignas */
/******************************/

console.log(v, "\n" + oo + " .D. ");
// Ejecución aquí
//console.table(carreras.ciclistasHabilitados());
console.log(o);

console.log(v, oo + " .E.");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .F.");
// Ejecución aquí
//console.log(carreras.listarBicicletas(carreras.filtrarPorPeso(8)));
console.log(o);

console.log(v, oo + " .G.");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .H.");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .I.");
console.log(carreras.largoPromedio());
// Ejecución aquí
console.log(o);

console.log(v, oo + " .J. ");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .K. ");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .L. ");
// Ejecución aquí
console.log(o);
