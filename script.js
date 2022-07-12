"use strict";

const computerPlay = function () {
  //computer picks randomly from rock, paper or scissors
  let result;
  let computerNumber = Math.random();
  if (computerNumber < 0.33) {
    result = "PAPER";
  } else if (computerNumber < 0.66) {
    result = "ROCK";
  } else if (computerNumber < 0.99) {
    result = "SCISSORS";
  }
  return result;
};

let winner = function playRound(playerSelection, computerSelection) {
  //plays one round of rock paper scissors

  if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
    cpuScore++;
    document.querySelector(".result").textContent =
      "Rock beats Scissors! You lose.";
  } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
    cpuScore++;
    document.querySelector(".result").textContent =
      "Scissors beats Paper! You lose.";
  } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
    cpuScore++;
    document.querySelector(".result").textContent =
      "Paper beats Rock! You lose.";
  } else if (computerSelection === playerSelection) {
    tie++;
    document.querySelector(".result").textContent = "Tie!";
  } else score++;
  document.querySelector(
    ".result"
  ).textContent = `${playerSelection} beats ${computerSelection}! You win!`;
};

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let score = 0;
let cpuScore = 0;
let tie = 0;

rock.addEventListener("click", function () {
  let computerSelection = computerPlay();
  winner("ROCK", computerSelection);
  document.querySelector(".player").textContent = score;
  document.querySelector(".computer").textContent = cpuScore;
  document.querySelector(".tie").textContent = tie;
  if (score == 5) {
    document.querySelector(".result").textContent = "You win!";
  } else if (cpuScore == 5) {
    document.querySelector(".result").textContent = "You lose.";
  }
});

paper.addEventListener("click", function () {
  let computerSelection = computerPlay();
  winner("PAPER", computerSelection);
  document.querySelector(".player").textContent = score;
  document.querySelector(".computer").textContent = cpuScore;
  document.querySelector(".tie").textContent = tie;
  if (score == 5) {
    document.querySelector(".result").textContent = "You win!";
  } else if (cpuScore == 5) {
    document.querySelector(".result").textContent = "You lose.";
  }
});

scissors.addEventListener("click", function () {
  let computerSelection = computerPlay();
  winner("SCISSORS", computerSelection);
  document.querySelector(".player").textContent = score;
  document.querySelector(".computer").textContent = cpuScore;
  document.querySelector(".tie").textContent = tie;
  if (score == 5) {
    document.querySelector(".result").textContent = "You win!";
  } else if (cpuScore == 5) {
    document.querySelector(".result").textContent = "You lose.";
  }
});

// let playerSelection = prompt(`Rock, Paper or Scissors?`).toUpperCase();
// function game() {
//   //Play game 5 times
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt(`Rock, Paper or Scissors?`).toUpperCase();
//     const computerSelection = computerPlay();
//     // Call winner function, passing in newly returned values
//     // from the playerPlay and computerPlay functions
//     const currentRound = playRound(playerSelection, computerSelection);
//     // Log our result
//     console.log(currentRound);
//   }
// }

// game();
