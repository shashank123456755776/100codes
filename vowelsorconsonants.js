let ar = ["a", "e", "i", "o", "u"];
let str = "oee";

function con(str, ar) {
  for (let i = 0; i < str.length; i++) {
    let isVowel = false; // Initialize a flag to check if the character is a vowel.
    
    for (let j = 0; j < ar.length; j++) {
      if (str[i] === ar[j]) {
        isVowel = true; // Set the flag to true if a vowel is found.
        break; // Exit the inner loop since we found a match.
      }
    }

    if (isVowel) {
      return "vowels hai";
    }
  }

  return "consonants hai";
}

let pop = con(str, ar);
console.log(pop);