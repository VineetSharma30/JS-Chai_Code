class User {
    constructor(email, password){
        this.email = email
        this.password = password

    }
    get password(){
        // return this.password.toUpperCase()
        return this._password.toUpperCase()
    }
    set password(value){
        // this.password = value // this will cause - RangeError: Maximum call stack size exceeded
        this._password = value
    }

}

const vineet = new User("vineet@xyz.com", "abc")
console.log(vineet.password)