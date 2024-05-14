"use strict";

// Variabili
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let timer;
let count = 11;

// Evento click su bottone per far partire il countdown
start.addEventListener("click", function () {
  console.log("Pronti per l'arrivo dell'anno nuovo?");

  // Decremento il contatore iniziale e lo stampo in console e in pagina
  timer = setInterval(function () {
    count--;
    console.log(count);
    document.getElementById("display-counter").innerHTML = count;

    /* Condizione per avere la scritta a fine conteggio e il bottone start
    disabilitato durante il countdown */
    if (count === 0) {
      console.log("Buon anno!!");
      document.getElementById("display-counter").innerHTML = "Buon anno!!";
      start.disabled = false;
      clearInterval(timer);
      count = 11;
    } else if (count !== 0) {
      start.disabled = true;
    }
  }, 1000);
});

/* Evento click sul bottone stop per fermare il countdown, resettarlo
 e stampare in console e a schermo */
stop.addEventListener("click", function () {
  console.log("Buon anno!!");
  clearInterval(timer);
  document.getElementById("display-counter").innerHTML = "Buon anno!!";
  count = 11;
  start.disabled = false;
});

//Evento click per resettare il countdown
reset.addEventListener("click", function () {
  document.getElementById("display-counter").innerHTML = "";
  count = 11;
});

/* Chiedere:

1 - Perchè se assegno l'innerhtml ad una variabile nello scope globale e
 poi la pongo uguale al count, nell'html non viene visualizzata?
 
 2 - Se clicco più volte su start partono più conteggi e in console vedo numeri
 negativi dopo che appare buon anno. Ho risolto aggiungendo e togliendo
 .disabled al bottone start: quando è disabled però il bottone è grigio
 brutto. C'è un'alternativa?
 
 3 - Chiedere supporto nel refactor con l'uso di funzioni.
 
 4 - Chiedere info su settimeout ricorsivi */
