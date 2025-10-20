console.log("conexión correcta")

/*
1️⃣ Edad y etapa de vida
Pide la edad de una persona.
Si es menor a 13 → “Eres un niño”.
Si tiene entre 13 y 17 → “Eres adolescente”.
Si tiene 18 o más → “Eres adulto”.
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
};

/*
2️⃣ Validar contraseña exacta
Pide una contraseña.
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.
Si no, muestra “Acceso denegado”.
*/
function validarContraseña() {
    let contraseña = prompt("Ingrese su contraseña");
    if (contraseña === 12345) {
        alert("Acceso Permitido!")
    } else {
        alert("Acceso Denegado!")
    }
};

/*
3️⃣ Verificar letra en palabra
Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.
Si no → “No contiene la letra E”.
*/
function verificarPalabra() {
    let palabra = prompt("Ingrese una palabra:");
    if (palabra.toLowerCase().includes('e')) {
        alert("La palabra contiene la letra E")
    } else {
        alert("No contiene la letra E")
    }
};

/*
4️⃣ Comparar dos números
Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.
Si el segundo es mayor → “El segundo número es mayor”.
Si son iguales → “Son iguales”.
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
};

/*5️⃣ Determinar si el número es par o impar
Pide un número.
Si el resto al dividir por 2 (% 2) es 0 → “Número par”.
Si no → “Número impar”.
📘 Práctica: uso del operador módulo %.
*/
function parImpar() {
    let par = parseInt(prompt("Ingrese un número: "));
    if (par % 2 == 0) {
        alert("Es par")
    } else {
        alert("Es impar")
    }
};

/*
6️⃣ Revisar palabra inicial
Pide una palabra.
Si empieza con la letra “A” o “a” → “Empieza con A”.
Si no → “No empieza con A”.
💡 Puedes usar:
if (palabra[0].toLowerCase() === 'a') { ... }
*/
function pedirPalabra() {
    let pedir = prompt("Ingrese una palabra: ");
    if (pedir[0].toLowerCase().includes('a')) {
        alert("Su palabra comienza con la letra a ")
    } else {
        alert("Su palabra no empieza con a ")
    }
};

/*
7️⃣ Temperatura ambiente
Pide una temperatura.
Si es menor a 10 → “Hace frío”.
Si es entre 10 y 25 → “Clima templado”.
Si es mayor o igual a 26 → “Hace calor”.
📘 Práctica: comparaciones encadenadas.
*/
function temperaturaAmbiente() {
    let temperatura = parseInt(prompt("Ingrese la temperatura: "));
    if (temperatura < 10) {
        alert("Hace frío")
    } else if (temperatura >= 10 && temperatura <= 25) {
        alert("Clima templado")
    } else if (temperatura >= 26) {
        alert("Hace calor")
    } else {
        alert("Error")
    }
};

/*
8️⃣ Nombre reconocido
Pide un nombre.
Si el nombre es “Dany” → “Hola, profesor 👋”.
Si el nombre es “Ely” → “Hola, mamá 🌷”.
En cualquier otro caso → “Hola, visitante”.
*/
function pedirNombre() {
    let nombre = prompt("Ingrese un nombre: ");
    if (nombre.toLowerCase() == "dany") {
        alert("Hola, profesor 👋")
    } else if (nombre.toLowerCase() == "ely") {
        alert("Hola, mamá 🌷")
    } else {
        alert("Hola, visitante")
    }
};

/*
9️⃣ Nota de evaluación
Pide una nota entre 1 y 7.
Si es 4 o más → “Aprobado”.
Si es menor que 4 → “Reprobado”.
Si está fuera del rango 1–7 → “Nota inválida”.
*/
function notaEvaluacion() {
    let nota = parseFloat(prompt("Ingrese una nota entre 1 y 7: "))
    if (nota <= 3.9) {
        alert("Reprobado")
    } else if (nota >= 4.0 && nota <= 7.0) {
        alert("Aprobado")
    } else {
        alert("Nota inválida")
    }
};

/*
🔟 Verificar si contiene una palabra clave
Pide una frase.
Si incluye la palabra “Jesús” (mayúscula o minúscula) → “Tu frase tiene la palabra clave 🙌”.
Si no → “No contiene la palabra clave”.
*/
function palabraClave() {
    let frase = prompt("Escribe una frase: ")
    if (frase.toLowerCase().includes("jesús"));
    }
