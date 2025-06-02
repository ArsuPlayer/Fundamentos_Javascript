// Declaración de variables
let numeroEntero = 2008;
let numeroDecimal = 16;
let cadenaTexto = "Rojo";
let valorBooleano = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const mes = "Junio";

// Funciones para mostrar cada valor con alert
function mostrarNumeroEntero() {
  alert("Año nacimiento: " + numeroEntero);
}

function mostrarNumeroDecimal() {
  alert("Edad: " + numeroDecimal);
}

function mostrarCadenaTexto() {
  alert("Color favorito: " + cadenaTexto);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}
