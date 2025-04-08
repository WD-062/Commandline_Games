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
  // Show original word
  console.log(`Input word: ${wordInput}`);
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
  cipher = progress.join("");
  console.log(`Cipher word: ${cipher}`);
}

// process.argv
const args = process.argv.slice(2);
// console.log(args);

// Input Message, Number of Ciphers, Direction (left or right)
inputWord(args[0], args[1], args[2]);

/*
// Old version
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
*/
