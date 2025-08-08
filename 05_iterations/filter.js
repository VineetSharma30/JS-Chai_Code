const coding = ["js", "ruby", "java", "python", "cpp"]

const value = coding.forEach((item) => {
    // console.log(item) 
    return item // undefined
    //cannot return a value 
})
// console.log(value)

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums)

// This does same work as above filter method

const newNumsTwo =[]
myNums.forEach((num) => {
    if (num >4 ){
        newNumsTwo.push(num)
    }
})
 
