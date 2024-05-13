"use strict";

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let timer;
let count = 11;

start.addEventListener("click", function () {
  console.log("Pronti per l'arrivo dell'anno nuovo?");

  timer = setInterval(function () {
    count--;
    console.log(count);
    document.getElementById("display-counter").innerHTML = count;

    if (count === 0) {
      console.log("Buon anno!!");
      document.getElementById("display-counter").innerHTML = "Buon anno!!";
      clearInterval(timer);
    }
  }, 1000);
});

stop.addEventListener("click", function () {
  console.log("Buon anno!!");
  clearInterval(timer);
  document.getElementById("display-counter").innerHTML = "Buon anno!!";
  count = 11;
});

reset.addEventListener("click", function () {
  document.getElementById("display-counter").innerHTML = "";
  count = 11;
});

// Chiedere perchè se assegno l'innerhtml nello scope globale e poi pongo quella
// uguale al count, nell'html non viene visualizzata.
