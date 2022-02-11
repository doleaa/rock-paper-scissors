alert("Welome to Rock, Paper, Scissors. Best out of 5 wins. Good luck!");

let selections = ["Rock", "Paper", "Scissors"];
let computerPoints = 0;
let playerPoints = 0;

function computerWins(givenComputerSelection, givenPlayerSelection) {
  if (givenComputerSelection === givenPlayerSelection) {
    return false;
  } else if (givenComputerSelection === "Rock") {
    if (givenPlayerSelection === "Paper") {
      return false;
    }
  } else if (givenComputerSelection === "Paper") {
    if (givenPlayerSelection === "Scissors") {
      return false;
    }
  } else {
    if (givenPlayerSelection === "Rock") {
      return false;
    }
  }
  return true;
}

function itIsADraw(givenComputerSelection, givenPlayerSelection) {
  return (givenComputerSelection === givenPlayerSelection);
}

function parseUserSelection(givenUserPopupSelectionInLowerCase) {
  let selectedValue;

  if (givenUserPopupSelectionInLowerCase === "rock") {
    selectedValue = selections[0];
  } else if (givenUserPopupSelectionInLowerCase === "paper") {
    selectedValue = selections[1];
  } else if (givenUserPopupSelectionInLowerCase === "scissors") {
    selectedValue = selections[2];
  } else {
    alert(
      "You can only choose Rock, Paper or Scissors. Refresh and try again."
    );

    return undefined;
  }

  alert(`You chose ${selectedValue}.`);
  return selectedValue;
}

function generateComputerSelection() {
  const randomNumber = Math.floor(Math.random() * selections.length);
  return selections[randomNumber];
}

function playRound() {
  let computerSelection;
  let playerSelection;

  computerSelection = generateComputerSelection();

  let popupReference = prompt("Select Rock, Paper or Scissors: ");
  let userPopupSelectionInLowerCase = popupReference.toLowerCase();

  playerSelection = parseUserSelection(userPopupSelectionInLowerCase);

  if (itIsADraw(computerSelection, playerSelection)) {
    alert(`Computer chose ${playerSelection.toLowerCase()} too. Phew! This round is a draw.`);
  } else if (computerWins(computerSelection, playerSelection)) {
    alert(`Computer chose ${computerSelection.toLowerCase()} and won this round. Nice try though.`);
    ++computerPoints;
  } else {
    alert(`Computer chose ${computerSelection.toLowerCase()}. You win this round.`);
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
