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

function inputWord(wordInput, shiftValue, direction) {
  // Show original word
  console.log(`Input word: ${wordInput}`);
  // Split and Uppercase word and put into empty array
  input = wordInput.toUpperCase().split("");
  // console.log(input);

  // cipher function
  // input.forEach((element) => {
  //   if (element !== " ") {
  //     newValue = alphabet.indexOf(element) + shiftValue;
  //     // console.log(newValue);
  //     progress.push(alphabet[newValue]);
  //     // console.log(progress);
  //   } else {
  //     progress.push(" ");
  //   }
  // });

  if (direction == "left") {
    input.forEach((element) => {
      if (element !== " ") {
        newValue = (alphabet.indexOf(element) - shiftValue + 26) % 26;
        console.log(newValue);
        progress.push(alphabet[newValue]);
        // console.log(progress);
      } else {
        progress.push(" ");
      }
    });
  } else {
    input.forEach((element) => {
      if (element !== " ") {
        newValue = (alphabet.indexOf(element) + shiftValue) % 26;
        console.log(newValue);
        progress.push(alphabet[newValue]);
        // console.log(progress);
      } else {
        progress.push(" ");
      }
    });
  }

  // Put split word back together and cl cipher word
  cipher = progress.join("");
  console.log(`Cipher word: ${cipher}`);
}

inputWord("A hi Z", 1, "right");
