//Ejercicios Condiciones IF - ELSE
console.log("conexión con js establecida...")
/*Edad para votar
 Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar (18 años o más) o no.
*/
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

function validarContrasena() {
    let clave = prompt("Ingresa tu contraseña:");
    if (clave == "1234") {
        alert("Contraseña aprobada");
    } else {
        alert("Contraseña rechazada");
    }
}
function verificarParImpar() {
    let num = parseInt(prompt("Ingrese un número"));
    if (num % 2 == 0) {
        alert("El número es par");
    }
}