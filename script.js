let playRound = (plr) => {
  const choices = ["rock", "paper", "scissors"];
  let cmp = choices.at(Math.floor(Math.random() * 3));

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

let game = (e) => {
  let playerScore = 0;
  let computerScore = 0;

  let playerSelection = e.target.id;

  let winner = playRound(playerSelection);
  console.log(winner);

  if (winner.charAt(0) === "P") {
    playerScore++;
  } else if (winner.charAt(0) === "C") {
    computerScore++;
  }

  let divlog = document.createElement("p");
  divlog.textContent = winner;
  liveresults.appendChild(divlog);

  console.log(`player: ${playerScore}`);
  console.log(`computer: ${computerScore}`);
};

const button = document.querySelectorAll("button");
button.forEach((button) => button.addEventListener("click", game));
