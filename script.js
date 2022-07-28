let playRound = (plr) => {
  // Computer choices randomly chosen from array "choices"
  const choices = ["rock", "paper", "scissors"];
  let cmp = choices.at(Math.floor(Math.random() * 3));

  // Logic for determining winner of round
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

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("buttonclicked");
}

let game = (e) => {
  // Gets the button that was clicked by user, also adds and removes
  // transition
  const button = document.querySelector(`#${e.target.id}`);
  let playerSelection = e.target.id;
  button.classList.add("buttonclicked");
  button.addEventListener("transitionend", removeTransition);

  // Calls playRound to return a string of the result
  let winner = playRound(playerSelection);

  // Uses the string[0] to determine who won the round
  if (winner.charAt(0) === "P") {
    playerScore++;
  } else if (winner.charAt(0) === "C") {
    computerScore++;
  }

  // Updates live results div to show results of round
  let divlog = document.createElement("p");
  divlog.textContent = winner;
  liveresults.appendChild(divlog);
  divlog.scrollIntoView();

  // Selects the html elements plrscore and cmpscore to update the
  // numbers while the game is yet to be won
  const plrscore = document.querySelector("#plrscore");
  const cmpscore = document.querySelector("#cmpscore");
  plrscore.textContent = `Player Score: ${playerScore}`;
  cmpscore.textContent = `Computer Score: ${computerScore}`;

  // Logic for Winning the game
  if (playerScore === 5) {
    divlog.textContent = "Player Wins The Game!";
    liveresults.appendChild(divlog);
    divlog.scrollIntoView();
    playerScore = 0;
    computerScore = 0;
    plrscore.textContent = `Player Score: ${playerScore}`;
    cmpscore.textContent = `Computer Score: ${computerScore}`;
  } else if (computerScore === 5) {
    divlog.textContent = "Computer Wins The Game!";
    liveresults.appendChild(divlog);
    divlog.scrollIntoView();
    playerScore = 0;
    computerScore = 0;
    plrscore.textContent = `Player Score: ${playerScore}`;
    cmpscore.textContent = `Computer Score: ${computerScore}`;
  }
};

// initializers for scores
let playerScore = 0;
let computerScore = 0;

// Event listener starts game function upon user clicking a button
const button = document.querySelectorAll("button");
button.forEach((button) => {
  button.addEventListener("mousedown", game);
});
