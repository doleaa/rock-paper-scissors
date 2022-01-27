console.log("Welome to Rock, Paper, Scissors. Best out of 5 wins. Good luck!");

let selections = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;
let computerPoints = 0;
let playerPoints = 0;
let generalScore;

function playRound(computerSelection, playerSelection) {
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

  computerSelection = computerPlay();

  let initialSelection = prompt("Select rock, paper or scissors: ");
  initialSelection = initialSelection.toLowerCase();

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

  if (computerSelection === playerSelection) {
    console.log(
      `Computer chose ${playerSelection.toLowerCase()} too. Phew! This round is a draw.`
    );
    computerPoints = ++computerPoints;
    playerPoints = ++playerPoints;
  } else if (
    (computerSelection === selections[0] &&
      playerSelection === selections[1]) ||
    (computerSelection === selections[1] &&
      playerSelection === selections[2]) ||
    (computerSelection === selections[2] && playerSelection === selections[0])
  ) {
    console.log(
      `Computer chose ${computerSelection.toLowerCase()}. You win this round.`
    );
    playerPoints = ++playerPoints;
  } else {
    console.log(
      `Computer chose ${computerSelection.toLowerCase()} and won this round. Nice try though.`
    );
    computerPoints = ++computerPoints;
  }
  generalScore =
    "Score: Computer " + computerPoints + " - " + playerPoints + " Player";
  console.log(generalScore);
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(computerSelection, playerSelection);
  }
  if (computerPoints > playerPoints) {
    console.log(`Game over. You lost, sorry! Refresh to play again.`);
  } else if (playerPoints > computerPoints) {
    console.log(`Game over. You won, congratulations! Refresh to play again.`);
  } else {
    console.log(
      `Game over. Kinda weird but... It's a draw. Refresh to play again.`
    );
  }
}

game();
