"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  const guessChecker = (check) => {
    if (score > 1) {
      displayMessage(check);
      //   document.querySelector(".message").textContent = check;
      document.querySelector(".score").textContent = --score;
    } else {
      //   document.querySelector(".message").textContent =
      //     "🎃 You Lost The Game, Try Again!";
      displayMessage("🎃 You Lost The Game, Try Again!");
      document.querySelector(".score").textContent = 0;
    }
  };

  // When there is no inout
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number!";
    displayMessage("⛔ No Number!");

    // When guess is above range
  } else if (guess > 20) {
    // document.querySelector(".message").textContent = "⚠ Out of Range";
    displayMessage("⚠ Out of Range");

    // When guess is Too High
  } else if (guess > secretNumber) {
    guessChecker("Too High!");

    // When guess is Too Low
  } else if (guess < secretNumber) {
    guessChecker("Too Low!");

    // When guess is Correct
  } else {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    highScore = Math.max(highScore, score);
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".check").disabled = true;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#b54b4b";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  //   document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
});
