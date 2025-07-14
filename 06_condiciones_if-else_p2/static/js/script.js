// Ejercicios Condiciones IF - ELSE

function longitudPalabra() {
  let pal1 = prompt("Ingrese primera palabra");
  let pal2 = prompt / ("Ingrese segunda palabra");
  if (pal1 == "" && pal2 == "") {
    alert("Ingrese algún valor para trabajar...")
  } if (pal1.length < pal2.length) {
    alert(`La palabra más larga es ${pal2} con ${pal2.length} carácteres`)
  } else if (pal1.length == pal2.length) {
    alert(`Las palabras ${pal2} y ${pal1} tienen el mismo largo con: \n
   ${pal.length} caracteres`)
  } else {
    alert(`La palabra más larga es ${pal1} con ${pal1.length} carácteres`)
  }
}