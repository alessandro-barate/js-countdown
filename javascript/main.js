"use strict";

const start = document.getElementById("start");
const stop = document.getElementById("stop");
let timer;
let count = 10;

start.addEventListener("click", function () {
  console.log("start timer");

  timer = setInterval(function () {
    count--;
    console.log(count);

    if (count === 0) {
      console.log("Buon anno!!");
      clearInterval(timer);
    }
  }, 1000);
});

stop.addEventListener("click", function () {
  console.log("stoppo timer");
  clearInterval(timer);
});
