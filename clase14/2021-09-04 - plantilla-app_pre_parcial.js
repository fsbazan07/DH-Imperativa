const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/
let inmobiliaria = {
  // A
  departamentos: departamentos,
  // B
  listarDepartamentos: function (arrayDptos){
  //let long = arrayDptos.length      
  for (let i = 0; i < arrayDptos.length; i++) {
    let disponibilidad = arrayDptos[i].disponible ? "Disponible" : "Alquilado"
    let mascotas = arrayDptos[i].aceptaMascotas ? "Acepta mascotas" : "No acepta mascotas"

    console.log(`id: ${arrayDptos[i].id}, precio $ ${arrayDptos[i].precioAlquiler}, está ${disponibilidad}, ${arrayDptos[i].cantidadHabitacion} ambientes, máximo ${arrayDptos[i].cantidadPersonas} personas, ${mascotas}, propietarios: ${arrayDptos[i].propietarios}`);
        
      }
  },
  // C
  departamentosDisponibles: function(){
    let disponibles = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].disponible === true) {
        disponibles.push(this.departamentos[i])
      }
    }
    return disponibles;
  },
  
  // D
  buscarPorId: function (id) {
    for (let i = 0; i < this.departamentos.length; i++) {
      if (id === this.departamentos[i].id){
      return this.departamentos[i];
      }
    }

  },
  // E
  buscarPorPrecio: function(precio) {
    let buscarDpto = [];
    let deptosDisponiblesPrecio = this.departamentosDisponibles();

    for (let i = 0; i < deptosDisponiblesPrecio.length; i++) {
      if (deptosDisponiblesPrecio[i].precioAlquiler <= precio) {
        buscarDpto.push(deptosDisponiblesPrecio[i])
      }
      
    }
    return buscarDpto
  },
  // F
  precioConImpuesto: function(porcentaje){

    for (let i = 0; i < departamentos.length; i++) {
      let precioImpuesto = this.departamentos[i].precioAlquiler * porcentaje/100;
      this.departamentos[i].precioAlquiler += precioImpuesto
      
    }
    return this.departamentos 
  },
  // G
  simplificarPropietarios: function() {
    for (let i = 0; i < departamentos.length; i++) {
      this.departamentos[i].propietarios = this.departamentos[i].propietarios.replace('Dueños', 'Prop.');
      this.departamentos[i].propietarios = this.departamentos[i].propietarios.replace('Dueñas', 'Prop.');
      this.departamentos[i].propietarios = this.departamentos[i].propietarios.replace('Dueña', 'Prop.');
      this.departamentos[i].propietarios = this.departamentos[i].propietarios.replace('Dueño', 'Prop.');
      }
      return inmobiliaria.listarDepartamentos(this.departamentos);
  },
}






/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí

inmobiliaria.listarDepartamentos(departamentos)
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles());
console.log(o);

console.log(v, oo + " D. buscarPorId");
// Ejecución aquí
console.log(inmobiliaria.buscarPorId(9));
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
console.log(inmobiliaria.buscarPorPrecio(10000));

console.log(o);

console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
console.log(inmobiliaria.precioConImpuesto(10));

console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
inmobiliaria.simplificarPropietarios();

console.log(o);
