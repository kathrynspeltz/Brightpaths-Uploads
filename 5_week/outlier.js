//You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a function that takes the array as an argument and returns this “outlier” N.

function outlier(arr) {
    let even = 0
    let odd = 0
    let evenNum
    let oddNum
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even += 1
            evenNum = arr[i]
        } else {
            odd += 1
            oddNum = arr[i]
        }
    } if (even > odd) {
        console.log(`The outlier is ${oddNum}`)
    } else {
        console.log(`The outlier is ${evenNum}`)
    }
}

outlier([2, 4, 0, 100, 4, 11, 2602, 36])
outlier([160, 3, 1719, 19, 11, 13, -21])