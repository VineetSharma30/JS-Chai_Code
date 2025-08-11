const form = document.querySelector("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const bmi = document.querySelector("#bmi")
    const bmiCategory = document.querySelector("#bmi-cat")
    console.log(bmiCategory)
    if (height === '' || height < 0 || isNaN(height)){
    bmi.innerHTML = 'Please Enter a valid height'
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
    bmi.innerHTML = 'Please Enter a valid weight'
    }
    else {
    const calulatedBmi = (weight/((height*height)/10000)).toFixed(2)
    bmi.innerHTML = `${calulatedBmi}`
    if (calulatedBmi < 16){
        bmiCategory.innerHTML = "Severe Thinness"
    }
    else if(calulatedBmi <= 18.5){
        bmiCategory.innerHTML = "Thin"
    }
    else if (calulatedBmi <= 25){
        bmiCategory.innerHTML = "Normal"
    }
    else if (calulatedBmi <= 30){
        bmiCategory.innerHTML = "Overweight"
    }
    else{
        bmiCategory.innerHTML = "Obese"
    }
    }

})