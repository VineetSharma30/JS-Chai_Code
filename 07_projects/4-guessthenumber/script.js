let randomNum  = Math.round(Math.random()*100+1)

const submit = document.querySelector("#subt")
const userInput =  document.querySelector("#guessField")
const guessSlot =  document.querySelector(".guesses")
const remaining =  document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver =  document.querySelector(".result")

const p =  document.createElement("p")
let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess) || guess < 1 || guess > 100){
        alert("Please enter a valid number")
    }else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNum){
        displayMsg(`You guessed it right. The number is ${guess}`)
    }else if (guess < randomNum){
        displayMsg("Number is small.")
    }else if (guess > randomNum){
        displayMsg("Number is big")
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML +=`${guess} ` 
    remaining.innerHTML = `${10-numGuess}`
    numGuess++
}

function displayMsg(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener("click", (e)=>{
        randomNum = Math.round(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `10`
        userInput.value = ''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMsg('')
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute("disabled",'')
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}