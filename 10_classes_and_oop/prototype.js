
let myHero =  ["thor","spiderman"]

let heroPower = {
    thor : "thundergod",
    spiderman : "web",

    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman6}`)
    }
}

Object.prototype.vineet = function(){
    console.log(`vineet is present in all objects`)
}

Array.prototype.heyVineet =  function(){
    console.log(`Hello Vineet`)
}

// heroPower.vineet()
myHero.vineet()
myHero.heyVineet()
// heroPower.heyVineet() // error

// inheritance 

// old syntax

const user = {
    name : " chai",
    email : "abc@xyz.com"
}

const teacher = {
    makeVideo : true,
}

const teachingSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__: teachingSupport
}
teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher )

let userName = "ChaiaurCode    "
String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`)
}

userName.truelength()