/*=======================================================
Copyright (c) 2024. Alejandro Alberto Jiménez Brundin
=======================================================*/
let palabras = [["mediterraneo", "Un mar"], ["movil", "Un dispositivo"], ["rosa", "Una flor"], ["ciudad", "Alicante"], ["rueda", "Invento revolucionario"], ["manzana", "Una fruta"], ["futbol", "Un juego"], ["ford", "Marca de coche"], ["everest", "Una montaña"], ["relampago", "Parecido al trueno"], ["perro", "Un animal"], ["españa", "Un país"], ["coche", "Un tipo de vehiculo"], ["mercadona", "Supermercado"], ["helado", "Postre"], ["pizza", "Comida restaurante"], ["pastel", "De la pastelería"], ["biblioteca", "Lugar para estudiar"], ["motogp", "Competición"], ["mostaza", "Tipo salsa"]];
let palabra = "";
let rand;
let oculta = [];
let hueco = document.getElementById("palabra");
let cont = 5;
let buttons = document.getElementsByClassName('letra');
let btnInicio = document.getElementById("reset");
let inputPalabra = document.querySelector('.palabraPoner');

inputPalabra.addEventListener('input', function() {
  let longitudPalabraOculta = oculta.length;
  inputPalabra.maxLength = longitudPalabraOculta;
});

function generaPalabra() {
  rand = (Math.random() * 19).toFixed(0);
  palabra = palabras[rand][0].toUpperCase();
  console.log(palabra);
}

function pintarGuiones(num) {
  for (let i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  hueco.innerHTML = oculta.join("");
}

function pista() {
  document.getElementById("pistaHueco").innerHTML = palabras[rand][1];
}

function inicio() {
  generaPalabra();
  pintarGuiones(palabra.length);
  cont = 5;
  document.getElementById("intentosRestantes").innerHTML = cont;
}

function inicio() {
    generaPalabra();
    pintarGuiones(palabra.length);
    cont = 5;
    document.getElementById("intentosRestantes").innerHTML=cont;
  }

window.onload = inicio();

function reiniciar() {
  window.location.reload();
}

/*=======================================================
Copyright (c) 2024. Alejandro Alberto Jiménez Brundin
=======================================================*/