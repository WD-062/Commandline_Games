// Rock Paper Scissors by Marco Czirpek

// Choose weapon for computer (between 0 - 2)
const weapon = ["rock", "paper", "scissors"];

function wins(inputPlayerRaw) {
  // Lowercase input Player
  const inputPlayer = inputPlayerRaw.toLowerCase();

  // Computer getting number and weapon
  const getNumber = Math.floor(Math.random() * 3);
  const inputComputer = weapon[getNumber];

  // Boiler Text
  const boilerText = `You chose ${inputPlayer}, Computer chose ${inputComputer},`;

  // Draw
  if (inputPlayer == inputComputer) {
    console.log(`${boilerText} It's a DRAW.`);
  }

  // Win conditions Player
  else if (inputPlayer == "rock" && inputComputer == "scissors") {
    console.log(`${boilerText} Player WINS.`);
  } else if (inputPlayer == "scissors" && inputComputer == "paper") {
    console.log(`${boilerText} Player WINS.`);
  } else if (inputPlayer == "paper" && inputComputer == "rock") {
    console.log(`${boilerText} Player WINS.`);
  }

  // Win condition Computer
  else {
    console.log(`${boilerText} Computer WINS.`);
  }
}

// process.argv
const args = process.argv.slice(2);

// Input Message
wins(args[0]);
