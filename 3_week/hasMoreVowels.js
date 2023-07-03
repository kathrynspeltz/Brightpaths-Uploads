// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. 
//The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// // true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
// // false

// hasMoreVowels('graph')
// // false
// Don’t consider “y” as a vowel:

// hasMoreVowels('yay')
// // false
// Uppercase vowels are still vowels:

// hasMoreVowels('Aal')
// // true

function hasMoreVowels(word) {
    numOfVowels = 0
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
            numOfVowels += 1
        }
    } if (numOfVowels > (word.length / 2)) {
        return true
    } else {
        return false
    }
}

function hasMoreVowels2(word) {
    numOfVowels = 0
    word = word.toLowerCase()
    vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            numOfVowels += 1
        }
    }
    if (numOfVowels > (word.length / 2)) {
        return true
    } else {
        return false
    }
}

console.log(hasMoreVowels("yay"))
console.log(hasMoreVowels('mice'))
console.log(hasMoreVowels('mOOse'))

console.log(hasMoreVowels2("yay"))
console.log(hasMoreVowels2('mice'))
console.log(hasMoreVowels2('mOOse'))