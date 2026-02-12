/*Las clases en JavaScript son una "plantilla" para crear objetos.

Estructura básica
Una clase siempre incluye un método constructor, que es donde se inicializan las propiedades del objeto */

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre; // Propiedad
    this.edad = edad;
  }

  // Método: lo que el objeto puede "hacer"
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

// Crear una instancia (un objeto real)
const usuario = new Persona("Alex", 25);
usuario.saludar(); // "Hola, soy Alex"

