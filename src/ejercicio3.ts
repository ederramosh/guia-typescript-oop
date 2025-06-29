import './output.css'

/*
EJERCICIO 3. Crea una clase llamada Canción: 
Atributos: título, género de la canción y un atributo privado que se llame autor. 
Métodos:  
• Crear un constructor que reciba como parámetros el título y género de la canción. 
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.  
• Crea un método para mostrar los datos de la canción.  
*/

class Cancion {
  private titulo: string;
  private genero: string;
  private autor: string = "";

  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
  }

  public setAutor(autor: string): void {
    this.autor = autor;
  }
  public obtenerInformacionHTML(): string {
    return `
      <p><strong>Título:</strong> ${this.titulo}</p>
      <p><strong>Género:</strong> ${this.genero}</p>
      <p><strong>Autor:</strong> ${this.autor}</p>
    `;
  }

  
}

const formulario = document.getElementById("formulario") as HTMLFormElement;
const btnLimpiar = document.getElementById("btnLimpiar") as HTMLButtonElement;
const divResultado = document.getElementById("resultado") as HTMLElement;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = (document.getElementById("titulo") as HTMLInputElement).value.trim();
  const genero = (document.getElementById("genero") as HTMLInputElement).value.trim();
  const autor = (document.getElementById("autor") as HTMLInputElement).value.trim();

  if (!titulo || !genero || !autor) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  const cancion = new Cancion(titulo, genero);
  cancion.setAutor(autor);
  divResultado.innerHTML = cancion.obtenerInformacionHTML();
});

btnLimpiar.addEventListener("click", () => {
  (document.getElementById("titulo") as HTMLInputElement).value = "";
  (document.getElementById("genero") as HTMLInputElement).value = "";
  (document.getElementById("autor") as HTMLInputElement).value = "";
  divResultado.innerHTML = "";
});
