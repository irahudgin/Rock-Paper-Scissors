let playerSelectionPrompt = prompt();

let playerSelection = playerSelectionPrompt.toLowerCase();

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

console.log(playRound(playerSelection, "rock"));
