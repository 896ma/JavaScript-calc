
//Declaring and initializing two intergral values
let num1 =8
let num2 =2
var sumEl

//storing the initialized values of the variables 
document.getElementById("num1-el")=num1
document.getElementById("num2-el")=num2
document.getElementById("sum-el")=sumEl

// Create four functions: add(), subtract(), divide(), multiply()

// Perform the given calculation using num1 and num2
function add(){
    let result= num1 + num2
    sumEl.textcontent= "sum :" + result

}
function subtract(){
    let result= num1 -num2
    sumEl.textcontent= "sum :" + result

}
function divide(){
    let result= num1 / num2
    sumEl.textcontent= "sum :" + result

}
function multiply(){
    let result= num1 * num2
    sumEl.textcontent= "sum :" + result

}
// Call the correct function when the user clicks on one of the buttons

// Render the result of the calculation in the paragraph with id="sum-el"
// E.g. if the user clicks on the "Plus" button, you should render



