"use strict";
/*
console.log(document.querySelector(".message").textContent); //logged to the console
document.querySelector(".message").textContent = "🎉Correct Number!"; //changes the content of the .message class
console.log(document.querySelector(".message").textContent); //logged to the console

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// function getSecretNumber(secretNumber) {
//   let secretNumber = Math.trunc(Math.random() * 20) + 1;
//   return secretNumber;
// }

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function displayNumber(number) {
  document.querySelector(".number").textContent = number;
}

function displayMeasurement(measure) {
  document.querySelector(".number").style.width = measure;
}

function displayBodyBgColor(bodyColor) {
  document.querySelector("body").style.backgroundColor = bodyColor;
}
document.querySelector(".check").addEventListener("click", function () {
  // const guess1 = document.querySelector(".guess").value; //unconverted(un-casted data type) input by the user
  // console.log(guess1, typeof guess1);
  const guess = Number(document.querySelector(".guess").value); //converted(casted data type) input by the user
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number!";
    displayMessage("⛔ No Number!");

    //when the player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    // document.querySelector("body").style.backgroundColor = "#60b347";
    displayBodyBgColor("#60b347");
    // document.querySelector(".number").style.width = "30rem";
    displayMeasurement("30rem");
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  }

  //Code refactoring
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📉 Too high!" : "📈 Too low!";

      displayMessage(guess > secretNumber ? "📉 Too high!" : "📈 Too low!");
      // score = score - 1;
      score--;
      document.querySelector(".score").textContent = score;
      console.log(score);
    } else {
      // document.querySelector(".message").textContent = "📛 You lost the game!: High...";
      displayMessage("📛 You lost the game!: High...");
      document.querySelector(".score").textContent = 0;
    }
  }

  /*
  //when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too high!";
      // score = score - 1;
      score--;
      document.querySelector(".score").textContent = score;
      console.log(score);
    } else {
      document.querySelector(".message").textContent =
        "📛 You lost the game!: High...";
      document.querySelector(".score").textContent = 0;
    }
  }

  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too low!" ;
      // score = score - 1;
      score--;
      document.querySelector(".score").textContent = score;
      console.log(score);
    } else {
      document.querySelector(".message").textContent =
        "📛You lost the game!: Low...";
      document.querySelector(".score").textContent = 0;
    }
  }
  */
});

/*
Challenge

Implement a game reset functionality, so that the player can make a new guess
 
*/

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  // document.querySelector(".number").textContent = "?";
  displayNumber("?");
  document.querySelector(".guess").value = "";
  // document.querySelector("body").style.backgroundColor = "#222";
  displayBodyBgColor("#222");
  // document.querySelector(".number").style.width = "15rem";
  displayMeasurement("15rem");
});
