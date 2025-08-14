const user = {
    username : "vineet", 
    loginCount : 8, 
    signedIn : true,
    getUserDetails : function(){
        // console.log("Got user details from DB")
        // console.log(`Username: ${this.username}`)
        console.log(this) // {username......getUserDetails}
    }
}

// console.log(user.username)
// // console.log(user.getUserDetails())
// console.log(this) // {}

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this // this is done implicitly
}
const userOne = User("Vineet", 12, true)
console.log(userOne) // {Vineet....true}
const userTwo = User("Sam", 3,false )
console.log(userOne) // {Sam....false}
const userThree =  new User("Max",6,true)
console.log(userOne) // {Sam....false}
console.log(userThree) // User { username: 'Max', loginCount: 6, isLoggedIn: true }
const newUser = new User("Vineet", 11 ,true)
console.log(newUser.constructor) // [Function: User] // Reference of User