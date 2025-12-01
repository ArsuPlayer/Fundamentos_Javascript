/* 
🧩 Ejercicio 1: Frase a partir de un arreglo de palabras
Instrucciones:
Dado el siguiente arreglo de palabras:

let palabras = ["Juan", "corre", "rápidamente", "feliz", "parque"];

Usa los elementos del arreglo para construir una frase coherente y completa.
Utiliza alert() para mostrar la frase resultante.
Puedes agregar conectores o palabras que no estén en el arreglo (por ejemplo, "en", "el", etc.).
*/

let palabras = ["Juan", "corre", "rápidamente", "feliz", "parque"]

function construirFrase(){
    alert(`Frase: ${palabras[0]} ${palabras[1]} ${palabras[3]} y ${palabras[2]} en el ${palabras[4]} `)
};

/*
🧩 Ejercicio 2: Construir frase con número, verbo, adverbio, adjetivo y sustantivo
Instrucciones:
Dado el siguiente arreglo:

let datos = [3, "gatos", "negros", "duermen", "tranquilamente"];

Accede a los elementos necesarios y ordénalos para formar una frase correcta y completa.
Concátalos con espacios y muestra la frase con alert().
Puedes incluir artículos o conectores ("Los", "y", etc.) según sea necesario.
*/

let datos = [3, "gatos", "negros", "duermen", "tranquilamente"];

function construirFrase2(){
    alert(`Frase: Los ${datos[0]} ${palabras[1]} comen y luego ${palabras[3]} ${palabras[2]} ${palabras[4]} `)
};

/*
🧩 Ejercicio 3: Suma de dos elementos en una matriz de dos dimensiones
Instrucciones:
Dada la siguiente matriz:

let matriz = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];
Accede a dos valores específicos dentro de la matriz utilizando sus posiciones.
Realiza la suma de ambos valores.
Muestra el resultado mediante alert() con un mensaje explicativo.
 */

let matriz = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

