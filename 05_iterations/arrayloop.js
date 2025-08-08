// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greeting = "Hello"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
}

// Map
// These are not iterable

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")
console.log(map)
// Map(3) {
//   'IN' => 'India',
//   'US' => 'United States of America',
//   'Fr' => 'France'
// }
for (const key of map) {
    console.log(key)
}
// [ 'IN', 'India' ]
// [ 'US', 'United States of America' ]
// [ 'Fr', 'France' ]
for (const [key,value] of map) { // this way will not work on objects
    console.log(key, ':-', value)
}
// IN :- India
// US :- United States of America
// Fr :- France
