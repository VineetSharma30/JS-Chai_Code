
// console.log(Math.PI) // 3.14...
// Math.PI = 4
// console.log(Math.PI) // 3.14...

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)
// {
//   value: 3.141592653589793,
//   writable: false,  // Due to this prop it's unwritable and we can't change it
//   enumerable: false,
//   configurable: false
// }

// We can also create objects like this 

const chai = {
    name : "ginger chai",
    price : 250,
    isAvailable : true,
    orderChai : function(){
        console.log("chai nhi bani")
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,"name", {
    writable : false,
    enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}