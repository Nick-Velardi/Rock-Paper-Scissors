"use strict";
const computerPlay = function () {
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

// const computerSelection = computerPlay();

// let playerSelection = prompt(`Rock, Paper or Scissors?`).toUpperCase();

function playRound(playerSelection, computerSelection) {
  let winner;
  if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
    winner = "Rock beats Scissors! You lose.";
  } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
    winner = "Scissors beats Paper! You lose.";
  } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
    winner = "Paper beats Rock! You lose.";
  } else if (computerSelection == playerSelection) {
    winner = "Tie!";
  } else winner = `${playerSelection} beats ${computerSelection}! You win!`;
  return winner;
}

// console.log(playRound(playerSelection, computerSelection));
function game() {
  //Play game 5 times
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(`Rock, Paper or Scissors?`).toUpperCase();
    const computerSelection = computerPlay();
    // Call playRound function, passing in newly returned values
    // from the playerPlay and computerPlay functions
    const currentRound = playRound(playerSelection, computerSelection);
    // Log our result
    console.log(currentRound);
  }
}

game();
