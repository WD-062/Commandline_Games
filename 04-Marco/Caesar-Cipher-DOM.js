const inputForm = document.getElementById("word-form");
const cipherResult = document.getElementById("resultC");

// Caesar cipher by Marco Czirpek
// Plain alphabet array
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Input word array
let input;

// working step
let progress = [];

// final cipher array
let cipher;

function inputWord(wordInput, shiftValueStr, direction) {
  // Check if all inputs are complete
  if (!wordInput || !shiftValueStr || !direction) {
    cipherResult.textContent = "Please fill in all fields.";
    cipherResult.style.color = "red";
    return;
  }

  const shiftValue = Number(shiftValueStr);
  // Split and Uppercase word and put into empty array
  input = wordInput.toUpperCase().split("");

  // Check direction of Cipher ("left" or nothing for right)
  if (direction == "left") {
    // Go over each letter
    input.forEach((letter) => {
      // Check for Space
      if (letter !== " ") {
        // Check alphabet index with each letter of input word
        newValue = (alphabet.indexOf(letter) - shiftValue + 26) % 26;
        // Push new letter into array
        progress.push(alphabet[newValue]);
      } else {
        // If space push space
        progress.push(" ");
      }
    });
  }
  // Same as above but for other direction
  else {
    input.forEach((letter) => {
      if (letter !== " ") {
        newValue = (alphabet.indexOf(letter) + shiftValue) % 26;
        progress.push(alphabet[newValue]);
      } else {
        progress.push(" ");
      }
    });
  }

  // Put split word back together and cl cipher word
  const cipherWord = (cipher) => {
    cipherResult.style.color = "black";
    cipherResult.textContent = cipher;
  };

  cipher = progress.join("");
  progress = [];
  cipherWord(cipher);
}

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const word = document.getElementById("input").value.trim();
  const shiftNumber = document.getElementById("shiftNumber").value.trim();
  const shiftDirection = document.getElementById("direction").value.trim();

  inputWord(word, shiftNumber, shiftDirection);
});
