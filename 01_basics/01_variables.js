const accountID = 1234567
let accountEmail = "xyzh@gmail.com"
var accountPassword = "xyz"
accountCity = "G. Noida"
let accountState

// accountID = 23 //Not Allowed

accountEmail = "abc@gmail.com"
accountPassword = "abc123"
accountCity = "noida"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);