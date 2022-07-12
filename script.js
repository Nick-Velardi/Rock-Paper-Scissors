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
  let winner;
  if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
    winner = "Rock beats Scissors! You lose.";
    cpuScore++;
    document.querySelector(".result").textContent =
      "Rock beats Scissors! You lose.";
  } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
    winner = "Scissors beats Paper! You lose.";
    cpuScore++;
    document.querySelector(".result").textContent =
      "Scissors beats Paper! You lose.";
  } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
    winner = "Paper beats Rock! You lose.";
    cpuScore++;
    document.querySelector(".result").textContent =
      "Paper beats Rock! You lose.";
  } else if (computerSelection == playerSelection) {
    winner = "Tie!";
    tie++;
  } else winner = `${playerSelection} beats ${computerSelection}! You win!`;
  score++;
  document.querySelector(
    ".result"
  ).textContent = `${playerSelection} beats ${computerSelection}! You win!`;
  return winner;
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
});

paper.addEventListener("click", function () {
  let computerSelection = computerPlay();
  winner("PAPER", computerSelection);
  document.querySelector(".player").textContent = score;
  document.querySelector(".computer").textContent = cpuScore;
  document.querySelector(".tie").textContent = tie;
});

scissors.addEventListener("click", function () {
  let computerSelection = computerPlay();
  winner("SCISSORS", computerSelection);
  document.querySelector(".player").textContent = score;
  document.querySelector(".computer").textContent = cpuScore;
  document.querySelector(".tie").textContent = tie;
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
