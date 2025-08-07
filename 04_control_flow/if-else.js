// if

const isUserloggedIn = true

if(isUserloggedIn){
    console.log("Logged")
}

//  <, >, <=, >=, ==, !=, ===, !==

if (3!=2){
    console.log('Executed')
}

const balance = 1000

// if (balance>500) console.log("more than 500"),console.log("test")
// It is not best practice to use the above method

if (balance < 500){
    console.log("less than 500")
}else if (balance < 750) {
    console.log("less than 750")
}else if (balance < 900){
    console.log("less than 900")
}else {
    console.log("less than 1200")
}

isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (isUserloggedIn && debitCard && balance>750 ){
    console.log("Allowed to buy")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In")
}

