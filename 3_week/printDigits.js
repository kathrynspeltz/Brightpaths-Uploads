// function printDigits(num) {
//     newNum = num.string()
//     for (let i = newNum.length - 1; i >= 0; i--) {
//         console.log(newNum[i])
//     }
// }

// printDigits(314)


function printDigits(num) {
    let remainder = 0
    while (num > 0) {
        remainder = num % 10
        num = Math.floor(num / 10)
        console.log(remainder)
    }
}
printDigits(314)
printDigits(246878)