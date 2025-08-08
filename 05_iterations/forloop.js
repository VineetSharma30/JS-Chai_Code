// for loop

// for (let index = 0; index <=10; index++) {
//     // console.log(index) // 0 \n 1 \n 2 ..... \n 10
//     if (index==5){
//         console.log("5 is the best no.")
//     }
// }


// for(let i = 1; i <= 10; i++ ){
//     console.log(`outer loop value : ${i}`)
//     for(let j =1; j <= 10; j++){
//         console.log(i + '*' + j + '=' + i*j)
//     }
// }

let myArr  = ["flash", "batman", "superman"]
for(let i=0; i<myArr.length; i++){
    const element = myArr[i]
    console.log(element) 
}
//flash \n batman \n superman
console.log(myArr[(myArr.length)]) // undefined


// break and continue

for (let i = 0; i <= 20 ; i++) {
    if (i == 5) {
        console.log('5 Detected')
        // break  // this will transfer the execution out of the loop
        continue // this will transfer the execution immediately to next the iteration
    }
    console.log(i)
}
// 0 \n 1 \n 2 \n 3 \n 4 \n Detected 5