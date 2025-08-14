class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password =  password
    }

    addCourse(){
        console.log(`A new couse was added by ${this.username}`)
    }
} 

const chai = new Teacher("chai", "chai@xyz.com", "123")
chai.addCourse()

const tea = new User("tea")
tea.logMe()
chai.logMe()
console.log(chai === tea) // false
console.log(chai === Teacher) //false
console.log(chai instanceof Teacher) // true
console.log(chai instanceof User) // true