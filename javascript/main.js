"use strict";

const start = document.getElementById("start");
const stop = document.getElementById("stop");
let timer;
//const myCountdown = setInterval(countdown, 1000);
start.addEventListener("click", function () {
  console.log("start timer");

  timer = setInterval(function () {
    console.log("timer");
  }, 1000);
});

stop.addEventListener("click", function () {
  console.log("stoppo timer");
  clearInterval(timer);
});

/*function countdown() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
  clearInterval(myCountdown);
  return myCountdown;
}*/
