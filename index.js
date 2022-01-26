// A function that enables the PC to make a random choice from the selections array and then print the result.

let selections = ["Rock", "Paper", "Scissors"];

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

const computerSelection = computerPlay();
console.log(computerSelection);

let initialSelection = prompt("Select rock, paper or scissors: ");
initialSelection = initialSelection.toLowerCase();
let playerSelection;

if (initialSelection == "rock") {
  playerSelection = selections[0];
  console.log("You chose rock. Good luck.");
} else if (initialSelection == "paper") {
  playerSelection = selections[1];
  console.log("You chose paper. Good luck.");
} else if (initialSelection == "scissors") {
  playerSelection = selections[2];
  console.log("You chose scissors. Good luck.");
} else {
  console.log("Please submit valid input. Refresh and try again.");
}
