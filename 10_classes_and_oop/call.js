function setUsername(username){
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    setUsername.call(this,username) // call is uesd to hold the reference otherwise it will only be called 
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@xyz.com", "123")
console.log(chai) // createUser { username: 'chai', email: 'chai@xyz.com', password: '123' }