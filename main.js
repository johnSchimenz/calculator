// Variable declarations
let display = "";
let operator = "";
let nextNumber = "";
let runningTotal = 0;
let previousOperator = "";
let currentOperator = "+";
const displayCalculator = document.querySelector("#display");
const buttonsDigits = document.querySelectorAll("button.digit");
const buttonDecimal = document.querySelector("#decimal");
const buttonClear = document.querySelector("#clear");
const buttonEquals = document.querySelector("#equals"); // Need to finish this "click" steps
const buttonsOperators = document.querySelectorAll("button.operator");

// DONE
buttonsOperators.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        previousOperator = currentOperator;
        console.log(previousOperator);
        currentOperator = button.textContent;
        runningTotal = operate(runningTotal, previousOperator, nextNumber);
        console.log(runningTotal);
        nextNumber = "";
        displayCalculator.textContent = runningTotal;
        return runningTotal;
    });
});

// DONE
buttonsDigits.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        nextNumber = nextNumber + button.textContent;
        nextNumber = Number(nextNumber);
        console.log(nextNumber);
        displayCalculator.textContent = nextNumber;
        return nextNumber;
    });
});


// Does not work yet; don't worry until get everything else working
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
    operator = "";
    nextNumber = "";
    runningTotal = 0;
    previousOperator = "";
    currentOperator = "+";
    displayCalculator.textContent = 0;
})

// Need to finish the "equals" steps below
buttonEquals.addEventListener("click", () =>
{
    previousOperator = currentOperator;
    runningTotal = operate(runningTotal, previousOperator, nextNumber);
    nextNumber = "";
    display = runningTotal;
    console.log(display);
    runningTotal = 0;
    displayCalculator.textContent = display;
    return display;
})


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