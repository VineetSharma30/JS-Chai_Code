let score = "58"
console.log(typeof score) //string
console.log(typeof (score)) //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) //number


score = "58abc"
console.log(typeof valueInNumber) //number
console.log(valueInNumber) // NaN

score = null
console.log(typeof valueInNumber) //number
console.log(valueInNumber) // 0


// "33" => 33
// "33abc" => NaN
// true => 1 / false => 0

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn) 
console.log(boolIsLoggedIn) // true

isLoggedIn = ""
boolIsLoggedIn = Boolean(isLoggedIn) 
console.log(boolIsLoggedIn) // false

isLoggedIn = "Vineet"
boolIsLoggedIn = Boolean(isLoggedIn) 
console.log(boolIsLoggedIn) // true

// 1 => true / 0 => false
// '' => false
// 'xyz' => true

let someNumber = 35
let strNumber = String(someNumber)
console.log(strNumber) // '35'
console.log(typeof strNumber) // string

// **************** Operations ********************

let value = 5
let negValue = -value
console.log(negValue) // -5

let str1 ="Vineet "
let str2 ="Sharma"
console.log(str1+str2) // Vineet Sharma

console.log("1"+2) // 12
console.log("1"+2+2) // 122
console.log(1+2+"2") // 32

console.log(true)  // true
console.log(+true) // 1
// console.log(true+) // error

let gameCounter = 100
gameCounter++  // ++gameCounter
console.log(gameCounter) //101

