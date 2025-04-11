function translatePigLatin(word) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  //if word start with vowel return an end way
  if (vowel.includes(word[0])) {
    return word + "way";
  }

  //check first and secound letter both are consonants
  if (!vowel.includes(word[0]) && !vowel.includes(word[1])) {
    return word.slice(2) + word.slice(0, 2) + "Ay";
  }

  // if word start with a consonant
  return word.slice(1) + word[0] + "ay";
}

// get words from command line
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Please Enter a words");
  process.exit(1);
}
// translate each word ofo array
const translate = args.map(translatePigLatin).join(" ");
console.log("Pig Latin: ", translate);
