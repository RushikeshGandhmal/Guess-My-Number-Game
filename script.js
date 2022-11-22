"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number Enterted!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎊 Correct Number";
    document.querySelector(".number").textContent = secretNumber;

    // manupulating the css to change bg color
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".highscore").textContent = Math.max(
      score,
      document.querySelector(".highscore").textContent
    );
  } else if (score > 1) {
    document.querySelector(".message").textContent =
      guess > secretNumber ? "Too high" : "Too low";
    document.querySelector(".score").textContent = --score;
  } else {
    document.querySelector(".message").textContent = "Lost the Game";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("number").style.width = "15rem";
});
