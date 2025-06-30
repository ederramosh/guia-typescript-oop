/*
EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
*/
import "./output.css";
class Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        Object.defineProperty(this, "nombre", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "apellido", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "direccion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "telefono", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "edad", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    evaluaEdad() {
        if (this.edad >= 18) {
            return `${this.nombre} ${this.apellido} tiene ${this.edad} años, es mayor de edad.`;
        }
        else {
            return `${this.nombre} ${this.apellido} tiene ${this.edad} años, es menor de edad.`;
        }
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, direccion, telefono, edad, sueldo) {
        super(nombre, apellido, direccion, telefono, edad);
        Object.defineProperty(this, "sueldo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sueldo = sueldo;
    }
    imprimeDatosPersona() {
        return `
      Nombre: ${this.nombre} ${this.apellido}
      Dirección: ${this.direccion}
      Teléfono: ${this.telefono}
      Edad: ${this.edad}
      Sueldo: $${this.sueldo.toFixed(2)}
      Evaluación: ${this.evaluaEdad()}
    `;
    }
}
// Conexión con el HTML
const form = document.getElementById("formEmpleado");
const resultado = document.getElementById("resultado");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido")
        .value;
    const direccion = document.getElementById("direccion")
        .value;
    const telefono = document.getElementById("telefono")
        .value;
    const edad = parseInt(document.getElementById("edad").value);
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const empleado = new Empleado(nombre, apellido, direccion, telefono, edad, sueldo);
    resultado.textContent = empleado.imprimeDatosPersona();
});
