// Dates 

let myDate = new Date()
console.log(myDate) // 2025-08-05T09:47:32.380Z 
console.log(typeof myDate) // objectṇ
console.log(myDate.toString()) // Tue Aug 05 2025 15:18:11 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Tue Aug 05 2025
console.log(myDate.toLocaleString()) // 5/8/2025, 3:21:11 pm
console.log(myDate.toLocaleDateString()) // 5/8/2025

let myCreatedDate = new Date(2025,0,25,5,3 )
console.log(myCreatedDate.toDateString()) // Sat Jan 25 2025
console.log(myCreatedDate.toLocaleString()) // 25/1/2025, 5:03:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1754388985048
console.log(myCreatedDate.getTime()) // 1737761580000

// For exact time :

console.log(Math.floor(Date.now()/1000)) // 1754389223 

let newDate = new Date()

console.log(newDate.getMonth()+1) // Current Month // 8

console.log(newDate.toLocaleString('default', {weekday:'long'})) // Tuesday


