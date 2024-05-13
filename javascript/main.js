"use strict";

function countdown() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
  clearInterval(myCountdown);
}

const myCountdown = setInterval(countdown, 3000);
