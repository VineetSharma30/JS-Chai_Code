
function sayMyName(){
    console.log("Vineet")
}

sayMyName() // Vineet

function addTwoNums(num1,num2){
    console.log(num1+num2)
}

addTwoNums(3,4) // 7
addTwoNums(3,"4") // 34
addTwoNums(4,'a') // 3a
addTwoNums(3,null) // 3

const result = addTwoNums(3,4)
console.log(result) // 7 \n undefined

function newAddTwoNums(num1,num2){ 
    return num1+num2
}

const newResult = newAddTwoNums(4,5)
console.log(newResult) // 9

function loginUserMsg(username){
    return `${username} just logged in`
}

console.log(loginUserMsg("Vineet"))  //Vineet just logged in
console.log(loginUserMsg()) //undefined just logged in

function newLoginMsg(username){
    // if (username === undefined){
    //     console.log("Please enter a username")
    //     return
    // }
    // ----------- OR -------------

    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

function calculateCartPrice(...num1){
    return num1 
}
console.log(calculateCartPrice(200,300,400)) // [200,300,400]

const user = {
    product : "stand",
    price : 249
}

function handleObject(anyObj){
    console.log(`Product is ${anyObj.product} and price is ${anyObj.price}`)
}

handleObject(user) // Product is stand and price is 249