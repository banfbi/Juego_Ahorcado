/*=======================================================
Copyright (c) 2024. Alejandro Alberto Jiménez Brundin
=======================================================*/
let palabras = [["atlantico", "Un océano"], ["ordenador", "Una máquina"], ["laurel", "Un árbol"], ["plaza", "Espacio público"], ["rueda", "Gran invento"], ["cereza", "Una fruta"], ["petanca", "Un juego"], ["higuera", "Un árbol"], ["everest", "Un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["luxemburgo", "Un país"], ["uruguay", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["empanadilla", "De la panadería"], ["pastel", "De la pastelería"], ["colegio", "Lugar para estudiar"], ["carrera", "Competición"], ["mermelada", "Confitura"]];
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