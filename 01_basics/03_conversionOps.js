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