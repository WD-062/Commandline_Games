// Define buttons
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const btnReset = document.getElementById("reset-button");

// Define Result elements
const scoreResult = document.getElementById("result");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

// Rock Paper Scissors by Marco Czirpek

// Choose weapon for computer (between 0 - 2)
const weapon = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;

function wins(inputPlayerRaw) {
  // Remove No result yes
  scoreResult.textContent = "";
  // Lowercase input Player
  const inputPlayer = inputPlayerRaw.toLowerCase();

  // Computer getting number and weapon
  const getNumber = Math.floor(Math.random() * 3);
  const inputComputer = weapon[getNumber];

  // Boiler Text
  const boilerText = `You chose ${inputPlayer}, Computer chose ${inputComputer},`;

  // Draw

  let finalText;

  if (inputPlayer == inputComputer) {
    finalText = `${boilerText} It's a DRAW.`;
  }

  // Win conditions Player
  else if (inputPlayer == "rock" && inputComputer == "scissors") {
    finalText = `${boilerText} Player WINS.`;
    scorePlayer++;
  } else if (inputPlayer == "scissors" && inputComputer == "paper") {
    finalText = `${boilerText} Player WINS.`;
    scorePlayer++;
  } else if (inputPlayer == "paper" && inputComputer == "rock") {
    finalText = `${boilerText} Player WINS.`;
    scorePlayer++;
  }

  // Win condition Computer
  else {
    finalText = `${boilerText} Computer WINS.`;
    scoreComputer++;
  }
  const addResult = (finalText) => {
    const p = document.createElement("p");
    p.textContent = finalText;
    scoreResult.appendChild(p);
  };

  function addScore(scoreComputer, scorePlayer) {
    userScore.textContent = scorePlayer;
    computerScore.textContent = scoreComputer;
  }

  addResult(finalText);
  addScore(scoreComputer, scorePlayer);
}

// Insert argument to button press
const insertRock = () => {
  wins("rock");
};

const insertPaper = () => {
  wins("paper");
};

const insertScissors = () => {
  wins("scissors");
};

const resetScore = () => {
  scorePlayer = 0;
  scoreComputer = 0;
  userScore.textContent = 0;
  computerScore.textContent = 0;
  scoreResult.textContent = "Reset successful";
};

// Buttons
btnRock.addEventListener("click", insertRock);
btnPaper.addEventListener("click", insertPaper);
btnScissors.addEventListener("click", insertScissors);
btnReset.addEventListener("click", resetScore);
