// Sample Strings
// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// For example:
// let sample1 = "This ( is unbalanced."
// let sample2 = "(This (is (a) balanced) string.)"
// let sample3 = "This is () also ) unbalanced."
// let sample4 = "Balanced."

// Write your solution below:

function has_balanced_parens(str) {
    let openParentheses = 0
    let closeParentheses = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            openParentheses += 1
        } else if (str[i] === ")") {
            closeParentheses += 1
        }
    } return closeParentheses === openParentheses
}
console.log(has_balanced_parens("()"))
console.log(has_balanced_parens("((There's a bonus open paren here.)"))
console.log(has_balanced_parens("(This has (too many closes.) ) )"))
console.log(has_balanced_parens("(This (is (a) balanced) string.)"))