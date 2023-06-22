/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

let jonSnowAttack = 25
let jamieLannisterAttack = 35


// if (jonSnowAttack > jamieLannisterAttack){
//     console.log("jon's attack is greater than Jamie's")
// } else {
//     console.log("Jamie's attack is greater")
// }

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("jon's attack is greater than Jamie's")
} else if (jonSnowAttack === jamieLannisterAttack) {
    console.log("They are going to tie")
}
else {
    console.log("Jamie's attack is greater")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth > jamieLannisterAttack) {
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snows remaining health is ${jonSnowHealth}`)
} else {
    console.log("Jon has been slain")
}

jonSnowDefense += 25

