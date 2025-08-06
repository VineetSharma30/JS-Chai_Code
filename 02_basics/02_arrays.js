const marvel = ["thor", "ironman", "spidrman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)
// console.log(marvel)
// [ 'thor', 'ironman', 'spidrman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel.concat(dc))
// [ 'thor', 'ironman', 'spidrman', 'superman', 'flash', 'batman' ]


const all_heros = [...marvel,...dc]
console.log(all_heros)
// [ 'thor', 'ironman', 'spidrman', 'superman', 'flash', 'batman' ]

const another_arr = [1,2,3,[4,5,6],7,[6,7, [4,5]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr) // [1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Vineet")) //false
console.log(Array.from("Vineet")) // [ 'V', 'i', 'n', 'e', 'e', 't' ]

let s1 = 100
let s2 = 250
let s3 = 400
console.log(Array.of(s1,s2,s3)) // [100,250,400]
