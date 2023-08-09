// Variable declarations
let display = "";
let operator = "";
let nextNumber = "";
let runningTotal = 0;
let previousOperator = "";
let currentOperator = "+";
const buttonDisplay = document.querySelector("#display");
const buttonsDigits = document.querySelectorAll("button.digit");
const buttonDecimal = document.querySelector("#decimal");
const buttonClear = document.querySelector("#clear");
const buttonEquals = document.querySelector("#equals"); // Need to finish this "click" steps
const buttonsOperators = document.querySelectorAll("button.operator");

// Done
buttonsOperators.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        previousOperator = currentOperator;
        currentOperator = button.textContent;

        console.log("the previousOperator is " + previousOperator);
        runningTotal = operate(runningTotal, previousOperator, nextNumber);
        
        console.log("runningTotal is " + runningTotal);
        return runningTotal;
    });
});

// What happens on button click - IN PROGRESS - only works for single digits currently
buttonsDigits.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        nextNumber = button.textContent;
        console.log("nextNumber is " + nextNumber);
        nextNumber = Number(nextNumber);
        return nextNumber;
    });
});


// DONE? (need to check cases)
buttonDecimal.addEventListener("click", () =>
{
    // display puts on a decimal if none currently written, but if there is one, nothing happens
    // return nextNumber
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

// Perform operation - functions work by themselves
function operate(numberA, operator, numberB)
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