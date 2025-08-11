const clock = document.getElementById("clock")

setInterval(()=>{
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
    // console.log(clock.innerHTML = date.toLocaleTimeString())
},1000)