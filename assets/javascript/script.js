/*=======================================================
Copyright (c) 2024. Alejandro Alberto Jiménez Brundin
=======================================================*/
let palabras = [
  ["mediterraneo", "Un mar"],
  ["movil", "Un dispositivo"],
  ["rosa", "Una flor"],
  ["ciudad", "Alicante"],
  ["rueda", "Invento revolucionario"],
  ["manzana", "Una fruta"],
  ["futbol", "Un juego"],
  ["ford", "Marca de coche"],
  ["everest", "Una montaña"],
  ["relampago", "Parecido al trueno"],
  ["perro", "Un animal"],
  ["españa", "Un país"],
  ["coche", "Un tipo de vehiculo"],
  ["mercadona", "Supermercado"],
  ["helado", "Postre"],
  ["pizza", "Comida restaurante"],
  ["pastel", "De la pastelería"],
  ["biblioteca", "Lugar para estudiar"],
  ["motogp", "Competición"],
  ["mostaza", "Tipo salsa"]
];
let palabra = "";
let rand;
let oculta = [];
let hueco = document.getElementById("palabra");
let cont = 6;
let buttons = document.getElementById("botonesLetras");
let btnInicio = document.getElementById("reset");

window.onload = inicio();

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
  cont = 6;
  document.getElementById("intentosRestantes").innerHTML = cont;
  generarLetras();
}

function reiniciar() {
  window.location.reload();
}

function generarLetras() {
  let numero = 1;
  let texto = "<div class='row'> <div class='col'> <div class='flex-row'>";
  for (let i = 'A'.charCodeAt(0); i <= 'J'.charCodeAt(0); i++) {
    texto += "<button class='letra' id='letra"+ String.fromCharCode(i) +"' onclick='jugar(\""+ String.fromCharCode(i) +"\")'>"+ String.fromCharCode(i) +"</button>";
    numero++;
  }
  texto += "</div> <div class='flex-row'>";
  for (let i = 'K'.charCodeAt(0); i <= 'T'.charCodeAt(0); i++) {
    texto += "<button class='letra' id='letra"+ String.fromCharCode(i) +"' onclick='jugar(\""+ String.fromCharCode(i) +"\")'>"+ String.fromCharCode(i) +"</button>";
    numero++;
  }
  texto += "</div> <div class='flex-row'>";
  for (let i = 'U'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    texto += "<button class='letra' id='letra"+ String.fromCharCode(i) +"' onclick='jugar(\""+ String.fromCharCode(i) +"\")'>"+ String.fromCharCode(i) +"</button>";
    numero++;
  }
  texto += "</div> </div> </div>";
  document.getElementById("botonesLetras").innerHTML = texto;
}

function jugar(valor) {
  document.getElementById("letra"+ valor).disabled = true;
  let comprobar = false;
  for (let index = 0; index < palabra.length; index++) {
    if (valor == palabra.charCodeAt(index)) {
      comprobar = true;
      break;
    }
  }
  if (comprobar) {
    for (let index = 0; index < palabra.length; index++) {
      if (valor == palabra.charCodeAt(index)) {
        oculta[index] = palabra.charAt(index);
        hueco.innerHTML = oculta.join("");
        document.getElementById("letra"+ valor).classList.add("green");
      }
    }
  } else {
    cont--;
    document.getElementById("imagen6").src = "assets/img/ahorcado_" + cont + ".png";
    document.getElementById("intentosRestantes").innerHTML = cont;
    document.getElementById("letra"+ valor).classList.add("red");
  }
}

/*=======================================================
Copyright (c) 2024. Alejandro Alberto Jiménez Brundin
=======================================================*/