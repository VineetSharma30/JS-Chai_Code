// sigleton

// object literals

const mySym = Symbol("key1")

const userJS = { 
    name : "Vineet",
    age : 19,
    location : "Jharsuguda",
    email : "xyz@gmail.com",
    "full name" : "Vineet Sharma",
    [mySym] : "mykey1"

}

console.log(userJS.email) // xyz@gmail.com
console.log(userJS["email"]) // xyz@gmail.com
console.log(userJS["full name"]) // Vineet Sharma
console.log(userJS[mySym]) // mykey1
console.log(typeof mySym) // symbol

// To make sure the object is unchangeable we can use freeze

// userJS.email = "abc@gmail.com"
// console.log(userJS.email) // abc@gmail.com

// Object.freeze(userJS)

// userJS.email = "1234@gmail.com"
// console.log(userJS.email) // abc@gmail.com


userJS.greeting = function(){
    console.log("Hello JS user") // Hello JS user
}

userJS.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}


// console.log(userJS.greeting) // [Function (anonymous)]
console.log(userJS.greeting()) 
// Hello JS user
// undefined
console.log(userJS.greetingTwo())



