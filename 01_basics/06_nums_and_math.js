const score = 400  // Type : number

const balance = new Number(100) // Type ; object

console.log(balance.toString()) // 100 Type : String
console.log(balance.toFixed(2)) // 100.00

const otherNumber = 23.8696
console.log(otherNumber.toPrecision(3)) // 23.9
console.log(otherNumber.toPrecision(2)) // 24

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,00,000

// ************************ Maths **************************

console.log(Math)
console.log(Math.abs(-4)) // 4
console.log(Math.round(4.6)) // 5
console.log(Math.ceil(4.3))  // 5
console.log(Math.floor(4.4)) // 4
console.log(Math.min(3, 6, 4, 2, 8)) // 2
console.log(Math.random()) // 0 to 1

const min = 10 
const max = 20

const numBetween = Math.floor(Math.random()*(max-min+1)+ min)
console.log(numBetween) // 6