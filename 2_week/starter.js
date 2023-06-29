////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

const calculator = (num1, num2, cb) => {
  if (+num1 && +num2) {
    num1 = +num1
    num2 = +num2
    return cb(num1, num2)
  } else {
    console.log(`please send in numbers`)
  }
}
const addResult = calculator(1, 2, add)
const subtractResult = calculator(3, 2, subtract)
const multiplyResult = calculator(4, 5, multiply)
const divideResult = calculator(10, 2, divide)
console.log(addResult)
console.log(subtractResult)
console.log(multiplyResult)
console.log(divideResult)

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
  {
    name: 'leash',
    colors: ['red', 'blue', 'green'],
    category: 1,
    inventory: 30,
    basePrice: 13.99,
    displayPrice: 13.99
  },
  {
    name: 'chew toy',
    colors: ['brown'],
    category: 2,
    inventory: 120,
    basePrice: 6.00,
    displayPrice: 6.00
  },
  {
    name: 'rope',
    colors: ['blue & green', 'red & yellow'],
    category: 2,
    inventory: 75,
    basePrice: 4.99,
    displayPrice: 4.99
  }
]

const catProducts = [
  {
    name: 'mouse toy',
    colors: ['pink', 'grey', 'black'],
    category: 2,
    inventory: 125,
    basePrice: 2.50,
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00,
    displayPrice: 10.00
  },
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99,
    displayPrice: 22.99
  }
]

// CODE HERE

const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount)
}

const applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount
}

const applyDiscountsToCollection = (arr, discount, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], discount)
  }
}

applyDiscountsToCollection(dogProducts, .1, applyPercentDiscount)
applyDiscountsToCollection(catProducts, 5, applyPercentDiscount)
// console.log(dogProducts)
// console.log(catProducts)

const applyDiscountByCategory = (category, discount, arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if arr[i].category === cate
  }
}

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
