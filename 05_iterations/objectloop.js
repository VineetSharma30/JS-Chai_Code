const myObject ={
    js : "javascript",
    cpp : "C++",
    rb : "ruby"
}

for (const key in myObject) {
    console.log(`${key} for shortcut is ${myObject[key]}`)        
}

const programming = ["js", "rb", "java", "cpp"]
for(const key in programming){
    console.log(key) // 0 1 2 3
    // console.log(programming[key])
}