console.log("Conexión Éxitosa")

/*
Contar números del 10 al 1 - Ejemplo
*/
//Creación función bucle while
function ejecutarWhile() {
    let resultado = "El resultado es: ";
    let count = 10;
    while (count > 0) {
        resultado += ` ${count}`;
        count--
    }
    alert(resultado)
}

//Creación función bucle For
function ejecutarFor() {
    let resultado = "El resultado es: ";
    for (let i = 10; i > 0; i--) {
        resultado += ` ${i}`
        console.log(i)

    }
    alert(resultado)

}

//Ejercicios While - For
/*
1️⃣ Imprimir del 1 a n (n es ingresado por teclado).
*/
function ejecutarIngreso() {
    let resultado =  "Contamos:"
    let n = parseInt(prompt("Ingresa un número: "));
        let count = 1;
    while (count <= n){
        resultado += ` ${count}`
        console.log(count)
        count ++;
    }
    alert(resultado)

}

/*
2️⃣ Cuenta regresiva del n al 1
*/
function cuentaRegresiva(){
    let resultado = "Conteo:"
}



