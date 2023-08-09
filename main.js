// Variable declarations
let display = "";
let numberA = display;
let operator = "";
let numberB; // numberB is equal to "undefined"
let operatorCounter = 0;
let runningTotal = 0;
let readyForNextNumber = true;
const buttonDisplay = document.querySelector("#display");
const buttonsDigits = document.querySelectorAll("button.digit");
const buttonDecimal = document.querySelector("#decimal");
const buttonClear = document.querySelector("#clear");
const buttonEquals = document.querySelector("#equals"); // Need to finish this "click" steps
const buttonsOperators = document.querySelectorAll("button.operator");

// IN PROGRESS
buttonsOperators.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        readyForNextNumber = true;
        runningTotal = Number(display);
        console.log(runningTotal);
        return runningTotal;
    });
});

// What happens on button click - MOSTLY DONE (still need to link it to the display)
buttonsDigits.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        readyForNextNumber = false;
        display = display + button.textContent;
        console.log(display);
        return display;            
    });
});


// DONE
buttonDecimal.addEventListener("click", () =>
{
    readyForNextNumber = false;
    if (display.includes(".") === false)
    {
        display = display + ".";
        console.log(display);
        return display;
    }
})

//DONE
buttonClear.addEventListener("click", () => 
{
    display = "";
    readyForNextNumber = true;
    console.log(display);
    
})

// Need to finish the "equals" steps below
/*
buttonEquals.addEventListener("click", () =>
{
    numberA = 
    numberB = display;

})
*/

// Perform operation - IN PROGRESS - have to wait for numberB to be inputted
function operate(numberA, numberB, operator)
{
    if (operator === "+")
    {
        return add(numberA, numberB);
    }
    if (operator === "-")
    {
        return subtract(numberA, numberB);
    }
    if (operator === "*")
    {
        return multiply(numberA, numberB);
    }
    if (operator === "/")
    {
        return divide(numberA, numberB);
    }
}

// Operator functions - functions work by themselves
function add (numberA, numberB)
{
    return numberA + numberB;
}

function subtract (numberA, numberB)
{
    return numberA - numberB;
}

function multiply (numberA, numberB)
{
    return numberA * numberB;
}

function divide (numberA, numberB)
{
    return numberA / numberB;
}