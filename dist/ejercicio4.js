import './output.css';
class Cuenta {
    constructor(nombre, cantidad, tipoDeCuenta, numeroDeCuenta) {
        Object.defineProperty(this, "nombre", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cantidad", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tipoDeCuenta", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "numeroDeCuenta", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoDeCuenta = tipoDeCuenta;
        this.numeroDeCuenta = numeroDeCuenta;
    }
    depositar(valor) {
        if (valor < 5) {
            return "El valor a depositar debe ser mayor a $5.00";
        }
        else {
            this.cantidad += valor;
            return `Depósito exitoso: $${valor.toFixed(2)}. Saldo actual: $${this.cantidad.toFixed(2)}`;
        }
    }
    retirar(valor) {
        if (valor < 5) {
            return "El valor a retirar debe ser mayor a $5.00";
        }
        else if (valor > this.cantidad) {
            return "Fondos insuficientes para realizar el retiro.";
        }
        else {
            this.cantidad -= valor;
            return `Retiro exitoso: $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
        }
    }
    mostrarDatos() {
        return `Nombre: ${this.nombre}<br>Tipo de Cuenta: ${this.tipoDeCuenta}<br>Número de Cuenta: ${this.numeroDeCuenta}`;
    }
}
let cuentaCliente = null;
const formCliente = document.getElementById("formCliente");
const datosCliente = document.getElementById("datosCliente");
formCliente.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const tipo = document.getElementById("tipo").value;
    const numero = document.getElementById("numero").value;
    cuentaCliente = new Cuenta(nombre, cantidad, tipo, numero);
    datosCliente.innerHTML = cuentaCliente.mostrarDatos();
    formCliente.querySelectorAll("input, button").forEach(el => el.setAttribute("disabled", "true"));
});
const formOperaciones = document.getElementById("formOperaciones");
const resultado = document.getElementById("resultado");
const btnLimpiar = document.getElementById("btnLimpiar");
formOperaciones.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cuentaCliente) {
        resultado.textContent = "Primero debe crear una cuenta.";
        return;
    }
    const valor = parseFloat(document.getElementById("valorOperacion").value);
    const tipoOperacion = document.getElementById("tipoOperacion").value;
    let mensaje = "";
    if (tipoOperacion === "depositar") {
        mensaje = cuentaCliente.depositar(valor);
    }
    else {
        mensaje = cuentaCliente.retirar(valor);
    }
    resultado.textContent = mensaje;
});
btnLimpiar.addEventListener("click", () => {
    document.getElementById("valorOperacion").value = "";
    resultado.textContent = "";
});
