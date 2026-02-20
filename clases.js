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


/*Diferencia de un constructor y un metodo:


El constructor es un método especial que 

Se ejecuta automáticamente cuando creas una nueva instancia (objeto) de la clase.
Sirve para inicializar propiedades.
Solo puede haber un constructor por clase.
Se define con la palabra clave constructor.



Un método es una función definida dentro de la clase que:

Se usa para definir comportamientos del objeto.
Puede haber muchos métodos en una clase.
Se ejecuta cuando tú lo llamas, no automáticamente



*/