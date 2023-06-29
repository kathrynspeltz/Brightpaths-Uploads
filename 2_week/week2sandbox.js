let nums = [1, 2, 3, 4]

// nums.forEach(function (num, i) {
//     num += 10
//     nums[i] = num
// })

//wont modify original arry
nums.map(function (num) {
    return num += 2
})

//creates new arry
const mappedArr = nums.map(function (num) {
    return num += 2
})

const mappedArr2 = nums.map((num) => num += 2)

console.log(nums)
console.log(mappedArr)
console.log(mappedArr2)

