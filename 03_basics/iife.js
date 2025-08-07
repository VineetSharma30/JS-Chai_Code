// Immediately Invoked function Expression (IIFE)

// to stop the pollution of global scope to affect a fuction we use iife 

(function one(){
    // named IIFE
    console.log("Hello")
})(); // Hello

// Also  

// ( function two(){
//     console.log("Hi")
//} )() // This will produce error as we need to end an iife with ';'

// (()=>{
//     console.log("Hi ")
// })(); // Hi

let user ="Sam" ;
((user)=>{
    console.log(`Hi ${user}`)
})(user); // Hi Sam