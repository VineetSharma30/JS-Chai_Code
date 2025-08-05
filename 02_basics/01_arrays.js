// array

const myArr = [0,1,2,3,4,5]
console.log(myArr)

// Copying a Array is of two types :
// Shallow Copies - where copies share the same properties of the references
// Deep copies - where copies do not share the same properties of the references

// Array Methods

myArr.push(6)
console.log(myArr) // [0,1,2,3,4,5,6]

myArr.pop(6)
console.log(myArr) // [0,1,2,3,4,5]

myArr.unshift(9)
console.log(myArr) // [9,0,1,2,3,4,5]

myArr.shift()
console.log(myArr) // [0,1,2,3,4,5]
  
console.log(myArr.includes(4)) // true
console.log(myArr.indexOf(5)) // 5 if present else : -1

const newArr = myArr.join()
console.log(myArr) // [0,1,2,3,4,5]
console.log(newArr) // 0,1,2,3,4,5 type : string

// Slice and Splice

console.log("A ", myArr)
const myn1 = myArr.slice(1,4)
console.log(myn1) // [1,2,3]
console.log("B ", myArr)

console.log("A ", myArr) [0,1,2,3,4,5]
const myn2 = myArr.splice(1,4) 
console.log(myn2) // [1,2,3,4]
console.log("B ", myArr) // [0,5]
