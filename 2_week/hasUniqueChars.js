// Write your code below
// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true

function hasUniqueChars(word) {
    let valueOfWord = true;
    for (let i = 0; i <= word.length - 1; i++) {
        for (let x = 0; x <= word.length - 1; x++) {
            if (x != i && word[x] === word[i]) {
                valueOfWord = false;
            }
        }
    }
    return valueOfWord;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("MMonday"));
console.log(hasUniqueChars("Mmonday"));