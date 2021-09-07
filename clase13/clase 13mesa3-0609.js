//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
const banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      let cliente = this.clientes[i];
      if (titular === cliente.titularCuenta) {
        return cliente;
      }
    }
  },
  deposito: function (titular, monto) {
      let clienteDeposito = this.consultarCliente(titular);
      clienteDeposito.saldoEnPesos += monto;
        return 'Depósito realizado, su nuevo saldo es: $' + clienteDeposito.saldoEnPesos;
  },
  extraccion: function (titular, montoExt) {
    let clienteExtraccion = this.consultarCliente(titular);
    if (montoExt <= clienteExtraccion.saldoEnPesos) {
        clienteExtraccion.saldoEnPesos -= montoExt;
        return 'Extracción realizada correctamente, su nuevo saldo es: $' + clienteExtraccion.saldoEnPesos;
    } else {
        return 'Fondos insuficientes'
    }
  }
};
let clienteEncontrado = banco.consultarCliente("Ramon Connell");
let montoAgregado = banco.deposito("Ramon Connell", 1000000)
let  montoExtraido = banco.extraccion("Ramon Connell", 20000)

console.log(clienteEncontrado);
console.log(montoAgregado);
console.log(montoExtraido);