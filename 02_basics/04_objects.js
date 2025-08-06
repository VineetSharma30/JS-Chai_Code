
// const tinderuser ={}
//OR
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Max"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : { 
            firstname : "Vineet",
            lastname : "Sharma"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstname) // Vineet

// We can use ? at the end of object property so that it doesn't throw error if it is undefined of non-existant

// console.log(tinderUser.fullname.userFullname.firstname) // Error
console.log(tinderUser.fullname?.userFullname.firstname) // undefined

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "a", 4 : "b"}
const obj3 = { obj1, obj2}

console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1,obj2)
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// above one works but more preferable is the below version

const obj5 = Object.assign({}, obj1, obj2)
// Here {} is target and obj1 ,obj2 are source
console.log(obj5)

//But we mostly gonna use the below one

const obj6 =  {...obj1,...obj2}
console.log(obj6) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id : "0",
        email : "a@email.com"
    },
    {
        id : "1",
        email : "b@email.com"
    },
    {
        id : "2",
        email : "c@email.com"
    },
    {
        id : "3",
        email : "d@email.com"
    }
]

console.log(users[1].email) // b@email.com

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // [ '123abc', 'Max', false ]
console.log(Object.entries(tinderUser))
// [ [ 'id', '123abc' ], [ 'name', 'Max' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('name')) // true


const course = {
    courseName : "Js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor 

const {courseInstructor} = course
console.log(courseInstructor)  // hitesh

const {courseInstructor : instructor} = course
console.log(instructor) // hitesh


// {
//     "name" : "Vineet", 
//     "courseName" : "Js in hindi",
//     "price" : "free"
// }