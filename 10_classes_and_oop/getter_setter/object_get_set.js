const User = {
    _email: "vineet@xyz.com",
    _password : "abc",
    // underscore represent private property
    // but using get and set we can access it
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

//factory function

const tea = Object.create(User)
console.log(tea.email) //VINEET@XYZ.COM