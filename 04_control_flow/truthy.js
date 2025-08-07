const userEmail = 'abc@gmail.com'

if (userEmail){
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

// -- falsy values :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// -- truthy values : Every other thing than falsy values
// "0", 'false', " ", [], {}, function(){}

const myArr = []

if (myArr){
 console.log("Array is not Empty")
} 

// To rectify this use length of array

if (userEmail.length === 0){
   console.log("Empty Array")
} 

const emptyObj = {}

if (Object.keys(myArr).length === 0){
    console.log("Empty Object")
}

console.log(false == 0) // true
console.log(false == '') // true
console.log(0 == '') // true

// -- Nullish Coalesing Operator (??) : null, undefined

let val1;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 // 10
val1 = null ?? undefined //undefined
val1 = undefined ?? null // null

console.log(val1)

// Ternary Operator 
// condition ? true : false 

const iceTeaPrice  = 100
iceTeaPrice >=80 ? console.log("more than 80") : console.log("less than 80")