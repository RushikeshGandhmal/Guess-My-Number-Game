"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
const inputElement = document.querySelector(".check");
const againButton = document.querySelector(".again");
let score = 20;
let highscore = Number.MIN_VALUE;

const displayMessage = () => {
  document.querySelector(".message").textContent = message;
};

const check = (score1, message) => {
  if (score1 > 1) {
    console.log("score", score);
    displayMessage(message);
    document.querySelector(".score").textContent = --score;
  } else {
    document.querySelector(".message").textContent = "💥 You lost the game!";
    document.querySelector(".score").textContent = 0;
  }
};

inputElement.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".check").disabled = true;
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
      highscore = score;
    }
  } else if (guess > secretNumber) {
    check(score, "📈 Too High!");
  } else {
    check(score, "📉 Too Low!");
  }
});

againButton.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").disabled = false;
});
