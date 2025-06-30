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

abstract class Persona {
  protected nombre: string;
  protected apellido: string;
  protected direccion: string;
  protected telefono: string;
  protected edad: number;

  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: string,
    edad: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  protected evaluaEdad(): string {
    if (this.edad >= 18) {
      return `${this.nombre} ${this.apellido} tiene ${this.edad} años, es mayor de edad.`;
    } else {
      return `${this.nombre} ${this.apellido} tiene ${this.edad} años, es menor de edad.`;
    }
  }

  abstract imprimeDatosPersona(): string;
}

class Empleado extends Persona {
  protected sueldo: number;

  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: string,
    edad: number,
    sueldo: number
  ) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  public imprimeDatosPersona(): string {
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
const form = document.getElementById("formEmpleado") as HTMLFormElement;
const resultado = document.getElementById("resultado") as HTMLElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
  const apellido = (document.getElementById("apellido") as HTMLInputElement)
    .value;
  const direccion = (document.getElementById("direccion") as HTMLInputElement)
    .value;
  const telefono = (document.getElementById("telefono") as HTMLInputElement)
    .value;
  const edad = parseInt(
    (document.getElementById("edad") as HTMLInputElement).value
  );
  const sueldo = parseFloat(
    (document.getElementById("sueldo") as HTMLInputElement).value
  );

  const empleado = new Empleado(
    nombre,
    apellido,
    direccion,
    telefono,
    edad,
    sueldo
  );
  resultado.textContent = empleado.imprimeDatosPersona();
});
