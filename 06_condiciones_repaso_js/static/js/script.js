console.log("conexión correcta")

/*
Edad y etapa de vida
Pide la edad de una persona.
Si es menor a 13 → “Eres un niño”.
Si tiene entre 13 y 17 → “Eres adolescente”.
Si tiene 18 o más → “Eres adulto”.
Práctica: uso de rangos con if, else if, else.
*/

function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad < 13) {
        alert("Eres un Niño!");
    } else if (edad >= 13 && edad < 18) {
        alert("Eres un Adolescente!")
    } else {
        alert("Eres un Adulto!")
    }
}

/*
Validar contraseña exacta
Pide una contraseña.
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.
Si no, muestra “Acceso denegado”.
Práctica: comparación exacta (===).
*/
function validarContraseña() {
    let contraseña = prompt("Ingrese su contraseña");
    if (contraseña === 12345) {
        alert("Acceso Permitido!")
    } else {
        alert("Acceso Denegado!")
    }
}

/*
Verificar letra en palabra
Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.
Si no → “No contiene la letra E”.
💡 Usa:
if (palabra.toLowerCase().includes('e')) { ... }
*/
function verificarPalabra() {
    let palabra = prompt("Ingrese una palabra:");
    if (palabra.toLowerCase().includes('e')) {
        alert("La palabra contiene la letra E")
    } else {
        alert("No contiene la letra E")
    }
}

/*
Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.
Si el segundo es mayor → “El segundo número es mayor”.
Si son iguales → “Son iguales”.
📘 Práctica: comparaciones dobles.
*/
function compararNumero() {
    let numero1 = parseInt(prompt("Ingresa un número"));
    let numero2 = parseInt(prompt("Ingresa otro número"));
    if (numero1 == numero2) {
        alert("Ambos números son iguales")
    } else if (numero1 > numero2) {
        alert("El primer número es mayor")
    } else if (numero1 < numero2) {
        alert("El segundo número es mayor")
    } else {
        alert("Ingresa los números correctamente")
    }
}