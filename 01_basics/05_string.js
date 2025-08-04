const name = "Vineet"
const repoCount = 50

// console.log(name + repoCount + " Value") // Vineet50 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)


const gameName = new String('Vineetsh')
console.log(gameName) // [String: 'Vineetsh']
console.log(gameName[0]) // V
console.log(gameName.toUpperCase()) // VINEETSH
console.log(gameName.charAt(3)) // e
console.log(gameName.indexOf('n')) // 2
console.log(gameName.substring(1,4)) // ine
console.log(gameName.slice(-4, 6)) // et
console.log(gameName+" ".trim()+1) // Vineetsh1

const url = "https://vineet.com/vineet%20sharma"
console.log(url.replace('%20','-')) // https://vineet.com/vineet-sharma
console.log(url.includes('vineet')) // true
console.log("Hi-This-Is_Vineet".split('-')) // [ 'Hi', 'This', 'Is_Vineet' ]
