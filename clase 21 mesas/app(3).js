const archivos = require ("./lecturaEscritura");
let arrayDepartamentos = archivos.leerJson("departamentos");

//console.log(arrayDeparyamentos);

let inmobiliaria = {
    departamentos : arrayDepartamentos,
    listarDepartamentos : function (arrayDeptos) {
        arrayDeptos.forEach(departamento => {
            console.log("id" +  departamento.id + ", precio $"
             + departamento.precioAlquiler
             + ", esta"
             + (departamento.disponible ? "Disponible" : "Alquilado")+", "
             + departamento.cantidadHabitacion + " ambientes");
        });
    },
    buscarPorId : function (array, id) {
        departamentoSeleccionado = array.find(id);
    }
};

//inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);
console.log(inmobiliaria.buscarPorId(inmobiliaria.departamentos, 3));