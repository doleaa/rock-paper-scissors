alert("Welome to Rock, Paper, Scissors. Best out of 5 wins. Good luck!");

let selections = ["Rock", "Paper", "Scissors"];
let computerPoints = 0;
let playerPoints = 0;

function computerWins(givenComputerSelection, givenPlayerSelection) {
  if (givenComputerSelection === givenPlayerSelection) {
    return false;
  } else if (givenComputerSelection === "rock") {
    if (givenPlayerSelection === "paper") {
      return false;
    }
  } else if (givenComputerSelection === "paper") {
    if (givenPlayerSelection === "scissors") {
      return false;
    }
  } else {
    if (givenPlayerSelection === "rock") {
      return false;
    }
  }
  return true;
}

function itIsADraw(givenComputerSelection, givenPlayerSelection) {
  if (givenComputerSelection !== givenPlayerSelection) {
    return false;
  }

  return true;
}

function parseUserSelection(givenUserPopupSelection) {
  if (givenUserPopupSelection == "rock") {
    alert(`You chose ${givenUserPopupSelection.toLowerCase()}.`);
    return selections[0];
  } else if (givenUserPopupSelection == "paper") {
    alert(`You chose ${givenUserPopupSelection.toLowerCase()}.`);
    return selections[1];
  } else if (givenUserPopupSelection == "scissors") {
    alert(`You chose ${givenUserPopupSelection.toLowerCase()}.`);
    return selections[2];
  } else {
    alert(
      "You can only choose rock, paper or scissors. Refresh and try again."
    );
  }

  return undefined;
}

function generateComputerSelection() {
  const randomNumber = Math.floor(Math.random() * selections.length);
  return selections[randomNumber];
}

function playRound() {
  let computerSelection;
  let playerSelection;

  computerSelection = generateComputerSelection();

  let popupReference = prompt("Select rock, paper or scissors: ");
  let userPopupSelection = popupReference.toLowerCase();

  playerSelection = parseUserSelection(userPopupSelection);

  if (itIsADraw(computerSelection, playerSelection)) {
    alert(
      `Computer chose ${playerSelection.toLowerCase()} too. Phew! This round is a draw.`
    );
    // ++computerPoints;
    // ++playerPoints;
  } else if (computerWins(computerSelection, playerSelection)) {
    alert(
      `Computer chose ${computerSelection.toLowerCase()} and won this round. Nice try though.`
    );
    ++computerPoints;
  } else {
    alert(
      `Computer chose ${computerSelection.toLowerCase()}. You win this round.`
    );
    ++playerPoints;
  }

  alert(`Score: Computer ${computerPoints} - ${playerPoints} Player`);
}

function game() {
  for (let i = 0; i < 5; i++) {
    alert(`Round ${i + 1} out of 5.`);
    playRound();
    if (
      (computerPoints === 3 && playerPoints === 0) ||
      (computerPoints === 0 && playerPoints === 3)
    ) {
      break;
    }
  }
  if (computerPoints > playerPoints) {
    alert(`Game over. You lost, sorry! Refresh to play again.`);
  } else if (playerPoints > computerPoints) {
    alert(`Game over. You won, congratulations! Refresh to play again.`);
  } else {
    alert(`Game over. Kinda weird but... It's a draw. Refresh to play again.`);
  }
}

game();
