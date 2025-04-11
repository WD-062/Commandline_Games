
function translatePigLatin(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();

  if (vowel.includes(str[0])) {
    return str + "way";
  } else {
    const firstVowel = [...str].findIndex((letter) => vowel.includes(letter));
    if (firstVowel === -1) {
      return str + "ay";
    }
    const start = str.slice(0, firstVowel);
    const end = str.slice(firstVowel);
    return end + start + "ay";
  }
}
const args = process.argv.slice(2);
if (args.lenth === 0) {
  console.log("Please Enter Value");
  process.exit(1);
}
const translate = args.map(translatePigLatin).join(' ');
console.log("Pig Latin: " ,translate);
