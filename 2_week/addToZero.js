// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// For example:

// [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

// [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

// [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.

// Starting array
// let array = [1, 4, 11, 2, 37, -4];
// let numcompare = 0;
// let answer = false;

// for (let i = 0; i <= array.length - 1; i++) {
//     numcompare = array[i]
//     position = i
//     for (let i = 0; i <= array.length - 1; i++) {
//         if (numcompare + array[i] === 0 && position != i) {
//             answer = true
//         }
//     }
// }
// console.log(answer)

let array = [0, 1, 2, 3, 4, 5];
let numcompare = 0;
let answer = false;

for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j <= array.length - 1; j++) {
        if (array[j] + array[i] === 0 && j != i) {
            answer = true
        }
    }
}
console.log(answer)