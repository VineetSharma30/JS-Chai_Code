const myNums =  [1,2,3]

const myTotal = myNums.reduce(function(acc,currval){
    
    console.log(`acc: ${acc} and currval : ${currval}`)
    return acc+currval
},0)

console.log(myTotal)
// acc: 0 and currval : 1
// acc: 1 and currval : 2
// acc: 3 and currval : 3
// 6

const myTotalTwo = myNums.reduce((acc,curr) => acc+curr ,0 )
console.log(myTotalTwo) // 6

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "java course",
        price : 3499
    },
    {
        itemName : "data science course",
        price : 12999
    },
]

const bill = shoppingCart.reduce((acc,item) => acc+item.price , 0)
console.log(bill) // 19497