import './output.css';
/*
EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
*/
class CabezeraPagina {
    constructor() {
        Object.defineProperty(this, "titulo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "fuentePagina", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "alineacion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
    }
    asignarCaracteristicas(titulo, color, fuentePagina) {
        this.titulo = titulo;
        this.color = color;
        this.fuentePagina = fuentePagina;
    }
    asignarAlineacion(alineacion) {
        this.alineacion = alineacion;
    }
    obtenerCaracteristicas(titulo, color, fuentePagina) {
        this.asignarCaracteristicas(titulo, color, fuentePagina);
    }
    obtenerAlineacion(alineacion) {
        this.asignarAlineacion(alineacion);
    }
    aplicarCambios() {
        const h1 = document.getElementById("encabezado");
        if (h1) {
            h1.textContent = this.titulo;
            h1.style.textAlign = this.alineacion;
        }
        h1.style.color = this.color;
        h1.style.fontFamily = this.fuentePagina;
    }
    mostrar() {
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
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const color = document.getElementById("color").value;
    const fuente = document.getElementById("fuente").value;
    const alineacion = document.getElementById("alineacion").value;
    pagina.obtenerCaracteristicas(titulo, color, fuente);
    pagina.obtenerAlineacion(alineacion);
    pagina.aplicarCambios();
});
