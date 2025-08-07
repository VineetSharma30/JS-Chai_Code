const user ={
    username : "vineet",
    price : 999 ,
    welcomeMsg : function(){
        console.log(`${this.username } welcome to website`)
        console.log(this)
    }
}

// user.welcomeMsg() // vineet welcome to website
// user.username = "sam"
// user.welcomeMsg() // sam welcome to website

// user.welcomeMsg()
// vineet welcome to website
//{ username: 'vineet', price: 999, welcomeMsg: [Function: welcomeMsg] }

// console.log(this)  // {}

function chai(){
    console.log(this)
}
// chai()
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]        
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]        
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
  */

function tea(){
    let username = "Vineet"
    console.log(this.username)
}
// tea() //undefined

let newTea = function() {
    let username = "Vineet"
    console.log(this.username)
}

// newTea() // undefined

// Arrow function ()=>{}

const newChai = () => {
    let username = "Vineet"
    console.log(this.username)
}
// newChai() // undefined

// const sum = (num1,num2)=>{
//     return num1+num2
// }
// OR 
// const sum = (num1,num2) => num1+num2

// For Objects you must wrap them inside paraentheses ()

const sum = (num1,num2)=> ({username:"Vineet"})
console.log(sum(4,5)) // { username: 'Vineet' }
