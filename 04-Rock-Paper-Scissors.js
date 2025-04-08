// Rock Paper Scissors by Marco Czirpek
/* 
Win conditions (if):
Rock > Scissors
Scissors > Paper
Paper > Rock
Same element

Computer choose math()
rock 3.33
paper 3.33
scissors 3.33


*/
// Choose weapon for computer (between 0 - 2)
const weapon = ["rock", "paper", "scissors"];

function wins(inputPlayer) {
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
  } else {
    console.log(`${boilerText} Computer WINS.`);
  }
}

// process.argv
const args = process.argv.slice(2);

// Input Message, Number of Ciphers, Direction (left or right)
wins(args[0]);
