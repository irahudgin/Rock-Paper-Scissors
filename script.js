let playRound = (plr, cmp) => {
  if (plr === cmp) {
    let scoreString = `Draw! ${plr} + ${cmp}!`;
    return scoreString;
  } else if (plr === "rock" && cmp === "scissors") {
    let scoreString = `Player wins! ${plr} beats ${cmp}.`;
    return scoreString;
  } else if (plr === "scissors" && cmp === "paper") {
    let scoreString = `Player wins! ${plr} beats ${cmp}.`;
    return scoreString;
  } else if (plr === "paper" && cmp === "rock") {
    let scoreString = `Player wins! ${plr} beats ${cmp}.`;
    return scoreString;
  } else {
    let scoreString = `Computer wins! ${cmp} beats ${plr}.`;
    return scoreString;
  }
};

let game = () => {
  const choices = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 50; i++) {
    // let playerSelectionPrompt = prompt("Rock paper scissors! : ");

    let computerSelection = choices.at(Math.floor(Math.random() * 3));

    let playerSelection = playerSelectionPrompt.toLowerCase();

    let winner = playRound(playerSelection, computerSelection);
    console.log(winner);

    if (winner.charAt(0) === "P") {
      playerScore++;
    } else if (winner.charAt(0) === "C") {
      computerScore++;
    }

    console.log(`player: ${playerScore}`);
    console.log(`computer: ${computerScore}`);

    if (playerScore > 2) {
      console.log("Player wins the game!");
      break;
    } else if (computerScore > 2) {
      console.log("Computer wins the game!");
      break;
    }
  }
};

game();
