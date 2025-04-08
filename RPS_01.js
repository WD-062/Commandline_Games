const choice = ["rock", "paper", "scissors"];

function playRound(playerSelection) {
  choice.includes(playerSelection) ||
    (console.log("Invalid input"), process.exit(1));

  const computerSlection = choice[Math.floor(Math.random() * choice.length)];
  console.log(`Computer Selection is : ${computerSlection}`);
  console.log(`Your Choice is : ${playerSelection}`);

  if (computerSlection === "rock" && playerSelection === "paper") {
    return "You Win! :-)";
  } else if (computerSlection === "paper" && playerSelection === "scissors") {
    return "You Win! :-)";
  } else if (computerSlection === "scissors" && playerSelection === "rock") {
    return "You Win! :-)";
  } else if (computerSlection === "rock" && playerSelection === "scissors") {
    return "You Lose! :-(";
  } else if (computerSlection === "scissors" && playerSelection === "paper") {
    return "You Lose! :-(";
  } else if (computerSlection === "paper" && playerSelection === "rock") {
    return "You Lose! :-(";
  } else {
    return "It's a draw! :-|";
  }
}

const args = process.argv.slice(2);
const userInput = args[0]?.toLowerCase();
userInput
  ? console.log(playRound(userInput))
  : console.log("please provide your choice ");
