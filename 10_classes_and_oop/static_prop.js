class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createId(){
        return `123`
    } // This will not be inherited as static keyword only allow it to be used inside the class
}

const vineet = new User("Vineet")
// console.log(vineet.createId()) // error

class Teacher extends User{
    constructor(username, password){
        super(username)
        this.password = password
    }
}

const iphone = new Teacher("iphone", "123")
iphone.logMe()
// console.log(iphone.createId()) //error 