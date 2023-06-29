//Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// Write your code below

function palindrome(word) {
    let reverseWord = ""
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i]
    }
    return (reverseWord === word)
}

console.log(palindrome("hello"))
console.log(palindrome("racecar"))
console.log(palindrome("hannah"))