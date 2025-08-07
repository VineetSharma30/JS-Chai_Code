// let a = 10
// const b = 20 
// var c =  30 

// console.log(a) // 10
// console.log(b) // 20 
// console.log(c) // 30

let a =300
var c =250

if (true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a)  // 300
// console.log(b)  //  error
// console.log(c)  // 30

// Scope is different in node environment and in browser

function one(){
    const username = "Vineet"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // Error 
    two()
}

one() // Vineet 

if (true){
    const username = "Vineet"
    if (username === "Vineet"){
        const website = "youtube"
        console.log(username + website) // Vineetyoutube
    }
    // console.log(website) // error
}
// console.log(username) // Error

// -------------- Instresting ---------------------

console.log(addone(5))  // 6

function addone(num){
    return num+1
}

console.log(addone(5))  // 6

// console.log(addTwo(5)) // error 

const addTwo = function(num){
    return num+2
}

console.log(addTwo(5)) // 7