class Cuenta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(deposito) {
    this.saldo += deposito;
    document.write(`<p>Se ingreso $${deposito}</p>`);
  }
  extraer(retirar) {
    if (this.saldo >= retirar) {
      this.saldo -= retirar;
      document.write(`<p>Se retiro $${retirar}</p>`);
    } else {
      document.write(`<p>Saldo insuficiente</p>`);
    }
  }
  informacion() {
    document.write(`<p>Tu saldo actual es $${this.saldo} </p>`);
  }

  get mostrarTitular() {
    return this.titular;
  }
  get mostrarSaldo() {
    return this.saldo;
  }
}

let usuario = new Cuenta("Alex", 0);

let deposito = parseFloat(prompt("Ingrese el monto a depositar"));
usuario.ingresar(deposito);

let extraccion = parseFloat(prompt("Ingrese el monto a extraer"));
usuario.extraer(extraccion);

usuario.informacion();
