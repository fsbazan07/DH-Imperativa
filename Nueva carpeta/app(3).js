const jsonHelper = require("./JSONHelper");

const carrera = {
  autos: jsonHelper.lector("autos"),
  autosPorTanda: 6,
  autosHabilitados: function () {
    return this.autos.filter((auto) => auto.sancionado === false);
  },
  listarAutos: function (arrayAutos) {
    arrayAutos.forEach((auto) => {
      let estaHabilitado = auto.sancionado ? "sancionado" : "habilitado";
      console.log(
        `Piloto: ${auto.piloto}, patente: ${auto.patente}, peso en kg: ${auto.peso}, estado: ${estaHabilitado}.`
      );
    });
  },
  buscarPorPatente: function (patente) {
    return this.autos.find((auto) => auto.patente === patente);
  },

  filtrarPorCilindrada: function(cilindrada) {
      let habilitados = this.autosHabilitados();
      let total = habilitados.filter((auto) => auto.cilindrada <= cilindrada, 0);
      return total;
  },
  ordenarPorVelocidad : function() {
    return this.autos.sort((a,b)=>a.velocidad - b.velocidad);
  },
  habilitarVehiculo: function(patente){
    let auto = this.buscarPorPatente(patente);
    if (auto.sancionado === false) {
      auto.sancionado = true;
      jsonHelper.escritor("autos", this.autos);      
      return auto;
    } else { return undefined}
  },
  generarTanda : function (peso, cilindrada){
    
    let habilitadosPorCilindrada = this.filtrarPorCilindrada(cilindrada);
    let filtrados = habilitadosPorCilindrada.filter(auto => auto.peso <= peso);
    let tanda = filtrados.slice(0, this.autosPorTanda);
    return tanda
    },
  pesoPromedio: function () {
    let habilitados = this.autosHabilitados();
    let total = habilitados.reduce((acum, auto) => acum + auto.peso, 0);
    let promedio = total / habilitados.length;
    return `El peso promedio de los vehiculos habilitados es de ${promedio}Kg`;
  },
  listarPodio: function(podio) {
      //let  = arrayAutos.generarTanda();
      let tanda = podio.sort((a,b)=> b.puntaje - a.puntaje);

      console.log(`El ganador es: ${tanda[0].piloto}, con un puntaje de ${tanda[0].puntaje}.
        El segundo puesto es para ${tanda[1].piloto}, con un puntaje de ${tanda[1].puntaje}.
        El tercer puesto es para ${tanda[2].piloto}, con un puntaje de ${tanda[2].puntaje}.`);
  },
};

// console.log(carrera.autos);
//console.table(carrera.autosHabilitados());
// carrera.listarAutos(carrera.autos);
//console.log(carrera.buscarPorPatente("JOK850"));
//console.log(carrera.filtrarPorCilindrada(2500));
//console.table(carrera.ordenarPorVelocidad());
//console.log(carrera.habilitarVehiculo("RGB159"));
//carrera.listarAutos(carrera.generarTanda(2000,2000));
//console.log(carrera.pesoPromedio());
carrera.listarPodio(carrera.generarTanda(1500,2000))
