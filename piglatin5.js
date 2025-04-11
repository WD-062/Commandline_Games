// const userText = process.argv.slice(2);
// console.log(userText);
// let words = userText.split(" ").toLowerCase();
// console.log(words);

// const words = process.argv[2].toLowerCase().split(" ");
// console.log(words);
// let sentence = [];

let words = process.argv[2];
if (!words || words.trim().length === 0) {
    console.log("Please enter a text!");
    process.exit();
}
words = words.toLowerCase().split(" ");
console.log(words);
let sentence = [];

const vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < words.length; i++) {
    let firstLetter = words[i][0];
    let secondLetter = words[i][1];

    if (!vowels.includes(firstLetter) && vowels.includes(secondLetter)) {
        let pigWord1 = words[i].slice(1) + words[i][0] + "ay";
        sentence.push(pigWord1);
    } else if (
        !vowels.includes(firstLetter) &&
        !vowels.includes(secondLetter)
    ) {
        let pigWord2 = words[i].slice(2) + words[i].slice(0, 2) + "ay";
        sentence.push(pigWord2);
    } else if (vowels.includes(firstLetter)) {
        let pigWord3 = words[i] + "way";
        sentence.push(pigWord3);
    }
}

console.log(sentence.join(" "));
