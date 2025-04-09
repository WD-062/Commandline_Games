// const userText = process.argv.slice(2);
// console.log(userText);
// let words = userText.split(" ").toLowerCase();
// console.log(words);

const words = process.argv.slice(2);
console.log(typeof words);
console.log(words);

const vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < words.length; i++);

let firstLetter = words[i][0];
let secondLetter = words[i][1];

if (!firstLetter.includes(vowel) && secondLetter.includes(vowel)) {
    let pigWord1 = words[i].slice(1) + words[i][0].toLowerCase() + "ay";
    console.log(pigWord1);
} else if (!firstLetter.includes(vowel) && !secondLetter.includes(vowel)) {
    let pigWord2 = words[i].slice(2) + words[i][(0, 1)].toLowerCase() + "ay";
    console.log(pigWord2);
} else if (firstLetter.includes(vowel)) {
    let pigWord3 = words[i] + "way";
    console.log(pigWord3);
} else {
    console.log("Please enter a valid text!");
}
