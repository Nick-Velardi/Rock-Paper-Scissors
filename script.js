"use strict";
const computerPlay = function () {
  let computerNumber = Math.random();
  if (computerNumber < 0.33) {
    computerNumber = "PAPER";
  } else if (computerNumber < 0.66) {
    computerNumber = "ROCK";
  } else if (computerNumber < 0.99) {
    computerNumber = "SCISSORS";
  }
  return computerNumber;
};

let playerSelection = prompt(`Rock, Paper or Scissors?`).toUpperCase();

const playRound = function (computerPlay, playerSelection) {
  if (computerPlay == "ROCK" && playerSelection == "SCISSORS") {
    console.log("Rock beats scissors! You lose.");
  } else if (computerPlay == "SCISSORS" && playerSelection == "PAPER") {
    console.log("Scissors beats paper! You lose.");
  } else if (computerPlay == "PAPER" && playerSelection == "ROCK") {
    console.log("Paper beats rock! You lose.");
  } else console.log(`${playerSelection} beats ${computerPlay}! You win!`);
};

playRound(computerPlay, playerSelection);
