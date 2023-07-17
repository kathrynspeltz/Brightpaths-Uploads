// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. 
//The string will not contain spaces.

// For example:
// >>> makeUnique('helloworld')
// // helowrd
// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu

// Write your solution below:

function makeUnique(str) {
    let newStr = str.split("")
    const unique = [...new Set(newStr.map(item => item))];
    console.log(unique.join(""))
}
makeUnique('helloworld')
makeUnique('iwanttoclimbamountain')
