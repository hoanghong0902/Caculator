let addition=document.getElementById("Addition");
    addition.addEventListener("click",Addition);

function Addition(){
    let a = parseFloat(document.getElementById('number1').value);
    let b = parseFloat(document.getElementById('number2').value);
    let result = "Result = " + (a + b);
    document.getElementById('result').innerHTML = result;
}

let subtraction=document.getElementById("Subtraction");
    subtraction.addEventListener("click",Subtraction);
function Subtraction(){
    let a = parseFloat(document.getElementById('number1').value);
    let b = parseFloat(document.getElementById('number2').value);
    let result = "Result = " + (a - b);
    document.getElementById('result').innerHTML = result;
}

let multiplication=document.getElementById("Multiplication");
    multiplication.addEventListener("click",Multiplication);
function Multiplication(){
    let a = parseFloat(document.getElementById('number1').value);
    let b = parseFloat(document.getElementById('number2').value);
    let result = "Result = " + (a * b);
    document.getElementById('result').innerHTML = result;
}

let division=document.getElementById("Division");
    division.addEventListener("click",Division);
function Division(){
    let a = parseFloat(document.getElementById('number1').value);
    let b = parseFloat(document.getElementById('number2').value);
    let result = "Result = " + (a / b);
    document.getElementById('result').innerHTML = result;
}
