const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item){
    console.log(item)
})

// OR

coding.forEach( (item) => {
    console.log(item)
})

// OR

function printme(item){
    console.log(item)
}
coding.forEach(printme)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr)
})