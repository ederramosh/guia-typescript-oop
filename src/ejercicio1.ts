import './output.css'

/*
EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que 
obtenga el título, color y fuente de la página, el segundo método que indique como desea que 
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las 
propiedades.
*/

class CabezeraPagina {
  private titulo: string = "";
  private color: string = "";
  private fuentePagina: string = "";
  private alineacion: string = "";

  private asignarCaracteristicas(titulo: string, color: string, fuentePagina: string): void {
    this.titulo = titulo;
    this.color = color;
    this.fuentePagina = fuentePagina;
  }

  private asignarAlineacion(alineacion: string): void {
    this.alineacion = alineacion;
  }

  public obtenerCaracteristicas(titulo: string, color: string, fuentePagina: string): void {
    this.asignarCaracteristicas(titulo, color, fuentePagina);
  }

  public obtenerAlineacion(alineacion: string): void {
    this.asignarAlineacion(alineacion);
  }

  public aplicarCambios(): void {
    const h1 = document.getElementById("encabezado") as HTMLElement;
    
    if (h1) {
      h1.textContent = this.titulo;
      h1.style.textAlign = this.alineacion;
    }

    h1.style.color = this.color;
    h1.style.fontFamily = this.fuentePagina;
  }

  public mostrar(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuentePagina}`);
    console.log(`Alineacion: ${this.alineacion}`);
  }
}

const pagina = new CabezeraPagina();

window.addEventListener("DOMContentLoaded", () => {
  pagina.obtenerCaracteristicas("Encabezado por defecto", "#000000", "Arial");
  pagina.obtenerAlineacion("center");
  pagina.aplicarCambios();
});

// Captura del formulario
const formulario = document.getElementById("formulario") as HTMLFormElement;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = (document.getElementById("titulo") as HTMLInputElement).value;
  const color = (document.getElementById("color") as HTMLInputElement).value;
  const fuente = (document.getElementById("fuente") as HTMLSelectElement).value;
  const alineacion = (document.getElementById("alineacion") as HTMLSelectElement).value;

  pagina.obtenerCaracteristicas(titulo, color, fuente);
  pagina.obtenerAlineacion(alineacion);
  pagina.aplicarCambios();
});