import './output.css';
/*
EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.
*/
class Cancion {
    constructor(titulo, genero) {
        Object.defineProperty(this, "titulo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "genero", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "autor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        this.titulo = titulo;
        this.genero = genero;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    obtenerInformacionHTML() {
        return `
      <p><strong>Título:</strong> ${this.titulo}</p>
      <p><strong>Género:</strong> ${this.genero}</p>
      <p><strong>Autor:</strong> ${this.autor}</p>
    `;
    }
}
const formulario = document.getElementById("formulario");
const btnLimpiar = document.getElementById("btnLimpiar");
const divResultado = document.getElementById("resultado");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value.trim();
    const genero = document.getElementById("genero").value.trim();
    const autor = document.getElementById("autor").value.trim();
    if (!titulo || !genero || !autor) {
        alert("Todos los campos son obligatorios.");
        return;
    }
    const cancion = new Cancion(titulo, genero);
    cancion.setAutor(autor);
    divResultado.innerHTML = cancion.obtenerInformacionHTML();
});
btnLimpiar.addEventListener("click", () => {
    document.getElementById("titulo").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("autor").value = "";
    divResultado.innerHTML = "";
});
