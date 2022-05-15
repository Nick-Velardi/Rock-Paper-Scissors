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

const result = computerPlay();

let playerSelection = prompt(`Rock, Paper or Scissors?`).toUpperCase();

const playRound = function (result, playerSelection) {
  if (result == "ROCK" && playerSelection == "SCISSORS") {
    console.log("Rock beats scissors! You lose.");
  } else if (result == "SCISSORS" && playerSelection == "PAPER") {
    console.log("Scissors beats paper! You lose.");
  } else if (result == "PAPER" && playerSelection == "ROCK") {
    console.log("Paper beats rock! You lose.");
    //   } else if (
    //     playerSelection !== "ROCK" ||
    //     playerSelection !== "PAPER" ||
    //     playerSelection !== "SCISSORS"
    //   ) {
    //     console.log("Not a valid command. Please select rock, paper or scissors.");
  } else if (result == playerSelection) {
    console.log("Tie!");
  } else console.log(`${playerSelection} beats ${result}! You win!`);
};

console.log(playRound(result, playerSelection));


const playRound = function (result, playerSelection) {
    let winner;

    if (result == "ROCK" && playerSelection == "SCISSORS") {
      console.log("Rock beats scissors! You lose.");
    } else if (result == "SCISSORS" && playerSelection == "PAPER") {
      console.log("Scissors beats paper! You lose.");
    } else if (result == "PAPER" && playerSelection == "ROCK") {
      console.log("Paper beats rock! You lose.");
      //   } else if (
      //     playerSelection !== "ROCK" ||
      //     playerSelection !== "PAPER" ||
      //     playerSelection !== "SCISSORS"
      //   ) {
      //     console.log("Not a valid command. Please select rock, paper or scissors.");
    } else if (result == playerSelection) {
      console.log("Tie!");
    } else console.log(`${playerSelection} beats ${result}! You win!`);