console.log("2">1) // true
console.log("02">1) // true

console.log(null>0) // false
console.log(null==0) // false
console.log(null>=0) // true
console.log(null<=0) // true

//Comparison operator converts null to 0 where as equality doesn't

console.log(undefined == 0) // false
console.log(undefined > 0)  // false
console.log(undefined < 0)  // false

//Strict Check ===

console.log("2" === 2) //false
