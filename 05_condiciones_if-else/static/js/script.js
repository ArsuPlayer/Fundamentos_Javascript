//Ejercicios Condiciones IF - ELSE
console.log("conexión con js establecida...")
/*Edad para votar
 Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar (18 años o más) o no.
*/
// 3. Suficiente edad para votar
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su Edad: "));
    //Input conversión string a número
    //Condición IF - else if - else
    if (edad >= 18) {
        alert("Su edad " + edad + " aprobado para votar.");
    } else if (edad >= 0 && edad < 18) {
        alert("Su edad " + edad + " no está aprobada para votar.");

    } else {
        alert("Ingrese un valor válido.");
    }
}
// 3. Validar Contraseña xd
function validarContrasena() {
    let clave = prompt("Ingresa tu contraseña:");
    if (clave == "1234") {
        alert("Contraseña aprobada");
    } else {
        alert("Contraseña rechazada");
    }
}
// 3. Verificar par o impar
function verificarParImpar() {
    let num = parseInt(prompt("Ingrese un número:"));
    if (num % 2 === 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
}

// 4. Temperatura ambiental
function temperaturaAmbiente() {
    let temp = parseFloat(prompt("Ingrese la temperatura actual:"));
    if (temp >= 30) {
        alert("Hace calor");
    } else {
        alert("Clima agradable");
    }
}

// 5. Comparar dos números
function comparaNum() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (num1 > num2) {
        alert("El primer número es mayor");
    } else if (num2 > num1) {
        alert("El segundo número es mayor");
    } else {
        alert("Ambos números son iguales");
    }
}

// 6. Calificación escolar
function notaEscuela() {
    let nota = parseFloat(prompt("Ingrese su nota (1 a 7):"));
    if (nota >= 4) {
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
}

// 7. Nombre de usuario válido
function verificarNombreUsuario() {
    let usuario = prompt("Ingrese el nombre de usuario:");
    if (usuario === "admin") {
        alert("Bienvenido, administrador");
    } else {
        alert("Usuario no reconocido");
    }
}

// 8. Verificar si una palabra empieza con "A"
function verificarPalabraConA() {
    let palabra = prompt("Ingrese una palabra:");
    if (palabra.charAt(0) === "A") {
        alert("La palabra empieza con 'A'");
    } else {
        alert("La palabra no empieza con 'A'");
    }
}

// 9. Precio con descuento
function precioDescuento() {
    let precio = parseInt(prompt("Ingrese el precio del producto:"));
    if (precio > 10000) {
        alert("Aplica descuento");
    } else {
        alert("Precio normal");
    }
}

// 10. Verificar si puede conducir
function verificarConducir() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let licencia = prompt("Tiene licencia? (si / no)");

    if (edad >= 18 && licencia === "si") {
        alert("Puede conducir");
    } else {
        alert("No puede conducir");
    }
}
