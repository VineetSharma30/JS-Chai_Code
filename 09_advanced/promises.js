const promiseOne =  new Promise((resolve,reject)=>{
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(()=>{
        console.log("Async task 1")
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise Consumed")
})

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(() => {
    console.log("Async  2 Resolved")
})

const promiseThree  =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username : "Sam", email : "sam123@xyz.com"})
    },1000)
})
promiseThree.then((user)=>{
    console.log(user)
})

const promiseFour =  new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username : "Vineet", password : "123"})
        }else{
            reject("ERROR : Something went wrong")
        }
    },1000)
})


promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=> console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username : "Vineet", password : "123"})
        }else{
            reject("ERROR : Something went wrong")
        }
    },1000)
})


async function consumePromiseFive(){
    // const response  = await promiseFive
    // console.log(response)
    // This syntax of async and await can not handle errors thrown by promise to handle it we have to use try catch block
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response =  await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error){
        console.log("ERROR", error)
    }
}
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error))