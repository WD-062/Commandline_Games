const moves = ["rock", "paper", "scissors"];
const randomMove = Math.floor(Math.random() * moves.length);

const computerMove = moves[randomMove];
const playerMove = process.argv[2];

if (playerMove === "rock" && computerMove === "paper") {
  console.log("Computer Wins!");
} else if (playerMove === "paper" && computerMove === "scissors") {
  console.log("Computer Wins!");
} else if (playerMove === "scissors" && computerMove === "rock") {
  console.log("Computer Wins!");
} else if (playerMove === "rock" && computerMove === "scissors") {
  console.log("Player Wins!");
} else if (playerMove === "paper" && computerMove === "rock") {
  console.log("Player Wins!");
} else if (playerMove === "scissors" && computerMove === "paper") {
  console.log("Player Wins!");
} else if (playerMove === computerMove) {
  console.log("It's a draw!");
}
