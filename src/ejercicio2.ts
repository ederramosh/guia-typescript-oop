import './output.css'

/*
EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos: 
• Sumar 
• Restar 
• Multiplicar 
• Dividir 
• Potencia 
• Factorial 
*/

class Calculadora {
  private sumar(valorUno: number, valorDos: number): number {
    return valorUno + valorDos;
  }

  private restar(valorUno: number, valorDos: number): number {
    return valorUno - valorDos;
  }

  private multiplicar(valorUno: number, valorDos: number): number {
    return valorUno * valorDos;
  }

  private dividir(valorUno: number, valorDos: number): number {
    if (valorDos === 0) throw new Error("No se puede dividir entre cero");
    return valorUno / valorDos;
  }

  private potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  private factorial(n: number): number {
    if (n < 0) throw new Error("No se puede calcular el factorial de un número negativo");
    if (n === 0 || n === 1) return 1;

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

  public calcular(operacion: string, valor1: number, valor2?: number): number {
    switch (operacion) {
      case "sumar":
        return this.sumar(valor1, valor2!);
      case "restar":
        return this.restar(valor1, valor2!);
      case "multiplicar":
        return this.multiplicar(valor1, valor2!);
      case "dividir":
        return this.dividir(valor1, valor2!);
      case "potencia":
        return this.potencia(valor1, valor2!);
      case "factorial":
        return this.factorial(valor1);
      default:
        throw new Error("Operación no válida");
    }
  }
}

const calc = new Calculadora();

const form = document.getElementById("formulario") as HTMLFormElement;
const resultado = document.getElementById("resultado") as HTMLElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor1 = parseFloat((document.getElementById("valor1") as HTMLInputElement).value);
  const valor2Input = document.getElementById("valor2") as HTMLInputElement;
  const valor2 = valor2Input.value ? parseFloat(valor2Input.value) : undefined;
  const operacion = (document.getElementById("operacion") as HTMLSelectElement).value;

  try {
    const res = calc.calcular(operacion, valor1, valor2);
    resultado.textContent = `Resultado: ${res}`;
  } catch (error) {
    resultado.textContent = (error as Error).message;
  }
});