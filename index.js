// An array for the game choices.
let selections = ["Rock", "Paper", "Scissors"];

// A function that enables the PC to make a random choice from the selections array.
function computerPlay() {
  let randomSelection = Math.floor(Math.random() * selections.length);
  if (randomSelection == 0) {
    randomSelection = selections[0];
  } else if (randomSelection == 1) {
    randomSelection = selections[1];
  } else if (randomSelection == 2) {
    randomSelection = selections[2];
  }
  return randomSelection;
}

// Assigning the function output to this variable.
let computerSelection = computerPlay();
// console.log(computerSelection);

// Prompting the user for an input and converting it to lowercase.
let initialSelection = prompt("Select rock, paper or scissors: ");
initialSelection = initialSelection.toLowerCase();

let playerSelection;

// Conditional statement that turns user input into a value from selection array.
if (initialSelection == "rock") {
  playerSelection = selections[0];
  console.log(`You chose ${playerSelection.toLowerCase()}.`);
} else if (initialSelection == "paper") {
  playerSelection = selections[1];
  console.log(`You chose ${playerSelection.toLowerCase()}.`);
} else if (initialSelection == "scissors") {
  playerSelection = selections[2];
  console.log(`You chose ${playerSelection.toLowerCase()}.`);
} else {
  console.log(
    "You can only choose rock, paper or scissors. Refresh and try again."
  );
}

// Function for an actual play round.
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    console.log(
      `Computer chose ${playerSelection.toLowerCase()} too. Phew! It's a draw. Refresh for next round.`
    );
  } else if (
    (computerSelection === selections[0] &&
      playerSelection === selections[1]) ||
    (computerSelection === selections[1] &&
      playerSelection === selections[2]) ||
    (computerSelection === selections[2] && playerSelection === selections[0])
  ) {
    console.log(
      `Computer chose ${computerSelection.toLowerCase()}. You won! Refresh for next round.`
    );
  } else {
    console.log(
      `Computer chose ${computerSelection.toLowerCase()} and beat your ass. Nice try though. Refresh for next round.`
    );
  }
}

playRound(computerSelection, playerSelection);
