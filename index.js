// A function that enables the PC to make a random choice from the selections array and then print the result.

let selections = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let computerSelection = Math.floor(Math.random() * selections.length);

  if (computerSelection === 0) {
    console.log(selections[0]);
  } else if (computerSelection === 1) {
    console.log(selections[1]);
  } else {
    console.log(selections[2]);
  }
}

const computerSelection = computerPlay();
const playerSelection = prompt("Select rock, paper or scissors: ");

let regExp = /^rock$||^paper$||^scissors$/gi;

function playRound(computerSelection, playerSelection) {}
