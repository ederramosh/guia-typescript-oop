class Cuenta {
  private nombre: string;
  private cantidad: number;
  private tipoDeCuenta: string;
  private numeroDeCuenta: string;

  constructor(nombre: string, cantidad: number, tipoDeCuenta: string, numeroDeCuenta: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoDeCuenta = tipoDeCuenta;
    this.numeroDeCuenta = numeroDeCuenta;
  }

  depositar(valor: number): string {
    if (valor < 5) {
      return "El valor a depositar debe ser mayor a $5.00";
    } else {
      this.cantidad += valor;
      return `Depósito exitoso: $${valor.toFixed(2)}. Saldo actual: $${this.cantidad.toFixed(2)}`;
    }
  }

  retirar(valor: number): string {
    if (valor < 5) {
      return "El valor a retirar debe ser mayor a $5.00";
    } else if (valor > this.cantidad) {
      return "Fondos insuficientes para realizar el retiro.";
    } else {
      this.cantidad -= valor;
      return `Retiro exitoso: $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
    }
  }

  mostrarDatos(): string {
    return `Nombre: ${this.nombre}<br>Tipo de Cuenta: ${this.tipoDeCuenta}<br>Número de Cuenta: ${this.numeroDeCuenta}`;
  }
}

let cuentaCliente: Cuenta | null = null;

const formCliente = document.getElementById("formCliente") as HTMLFormElement;
const datosCliente = document.getElementById("datosCliente") as HTMLElement;

formCliente.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
  const cantidad = parseFloat((document.getElementById("cantidad") as HTMLInputElement).value);
  const tipo = (document.getElementById("tipo") as HTMLInputElement).value;
  const numero = (document.getElementById("numero") as HTMLInputElement).value;

  cuentaCliente = new Cuenta(nombre, cantidad, tipo, numero);
  datosCliente.innerHTML = cuentaCliente.mostrarDatos();
  formCliente.querySelectorAll("input, button").forEach(el => el.setAttribute("disabled", "true"));
});

const formOperaciones = document.getElementById("formOperaciones") as HTMLFormElement;
const resultado = document.getElementById("resultado") as HTMLElement;
const btnLimpiar = document.getElementById("btnLimpiar") as HTMLButtonElement;

formOperaciones.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!cuentaCliente) {
    resultado.textContent = "Primero debe crear una cuenta.";
    return;
  }

  const valor = parseFloat((document.getElementById("valorOperacion") as HTMLInputElement).value);
  const tipoOperacion = (document.getElementById("tipoOperacion") as HTMLSelectElement).value;

  let mensaje = "";
  if (tipoOperacion === "depositar") {
    mensaje = cuentaCliente.depositar(valor);
  } else {
    mensaje = cuentaCliente.retirar(valor);
  }
  resultado.textContent = mensaje;
});

btnLimpiar.addEventListener("click", () => {
  (document.getElementById("valorOperacion") as HTMLInputElement).value = "";
  resultado.textContent = "";
});