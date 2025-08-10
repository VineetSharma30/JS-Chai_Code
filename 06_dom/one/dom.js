// Different types of querry Selectors

// document.getElementById("title")
// document.getElementsByClassName("heading")
// document.getElementsByTagName("div")

// document.querySelector("#title") // # for id
// document.querySelector(".heading") // . for class
// document.querySelector("div") 

// Attributes

// document.getElementById("title").getAttribute("class")
// document.getElementById("title").setAttribute("class","heading new")

const title =  document.getElementById("title")
title.style.backgroundColor  = "lightgreen"
title.style.padding = "15px"
title.style.borderRadius = "15px"

//

// title.innerText // This only shows visible text 

// title.innerContent // This shows every content not only visible text but also shows hidden content/text