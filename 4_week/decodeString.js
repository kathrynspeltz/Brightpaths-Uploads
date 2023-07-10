// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"
// Write your code below this line


function decoder(string1) {
    let increment = Number(string1[0])
    let newPosition = 0
    let stringNum = ""
    for (let i = 1; i < string1.length; i++) {
        newPosition = (string1[i].charCodeAt()) + increment
        stringNum += String.fromCharCode(newPosition)
    }
    console.log(stringNum)
}

decoder("1a")
decoder("3ce")
decoder("2fcjjm")
decoder("2Fcjjm")