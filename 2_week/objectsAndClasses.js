const person = {
    firstname: "Kathryn",
    lastname: "Speltz",
    favoriteColor: "green"
}

const { firstname: nickname, lastname: surname, favoriteColor: bestColor } = person

person.hasPets = true

//console.log(person["hasPets"])

// console.log(nickname)
// console.log(surname)
// console.log(bestColor)



// console.log(person.firstname)
// console.log(person["lastname"])

// const color = "favoriteColor"

// console.log(person[color])

const meal = {
    appetizer: "chips and guac",
    entree: "tacos",
    dessert: "ice cream",
    drink: "spicy marg"
}
// console.log(meal)
// delete meal.entree
// console.log(meal)

// const { dessert } = meal
// const { appetizer, entree } = meal
// const { drink: myFavoriteMarg } = meal
// console.log(dessert)
// console.log(appetizer)
// console.log(entree)
// console.log(myFavoriteMarg)

// for (plate in meal) {
//     console.log(`The key is ${plate} and the value is ${meal[plate]}`)
// }

class Dog {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }
    greeting() {
        console.log(`Hello, I'm ${this.name} the ${this.breed} and I'm ${this.age}`)
    }
}

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel) {
        super(name, breed, age)

        this.trainingLevel = trainingLevel
    }
    piddle() {
        console.log(`${this.name} has peed on the floor`)
    }
    levelUp(num) {
        this.trainingLevel += num
    }
}

let fido = new Puppy("Fido", "Mutt", 1, 12)

console.log(fido)
fido.greeting()
fido.piddle()
fido.levelUp(4)
console.log(fido.tra)

let teddy = new Dog("Teddy", "Golden", 4)
let max = new Dog("Max", "Shitzu", 12)

// console.log(teddy.name)
// teddy.greeting()
// max.greeting()

// for (attr in teddy) {
//     console.log(teddy[attr])
// }

