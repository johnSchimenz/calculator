// Variable declarations
let display = "";
let operator = "";
let nextNumber = "";
let runningTotal = 0;
let previousOperator = "";
let currentOperator = "";
let beginning = true; // This will be true if everything is cleared, but false once a value is typed in

const displayCalculator = document.querySelector("#display");
const buttonsDigits = document.querySelectorAll("button.digit");
const buttonDecimal = document.querySelector("#decimal");
const buttonClear = document.querySelector("#clear");
const buttonEquals = document.querySelector("#equals"); // Need to finish this "click" steps
const buttonsOperators = document.querySelectorAll("button.operator");

// DONE
buttonsDigits.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        beginning = false;
        nextNumber = nextNumber + button.textContent;
        nextNumber = Number(nextNumber);
        console.log("nextNumber is " + nextNumber);
        displayCalculator.textContent = nextNumber;
        return nextNumber;
    });
});

// DONE
buttonsOperators.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        if (beginning === true)
        {
            runningTotal = 0;
            displayCalculator.textContent = runningTotal;
            console.log("runningTotal is " + runningTotal);
            currentOperator = button.textContent;
            console.log("currentOperator is " + currentOperator);
            return runningTotal;
        }
        else
        {
            previousOperator = currentOperator;
            console.log("previousOperator is " + previousOperator);
            currentOperator = button.textContent;
            console.log("currentOperator is " + currentOperator);
            runningTotal = operate(runningTotal, previousOperator, nextNumber);
            nextNumber = "";
            displayCalculator.textContent = runningTotal;
            console.log("runningTotal is " + runningTotal);
            return runningTotal;
        }
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
        return display;
    }
})

// Need to finish the "equals" steps below
buttonEquals.addEventListener("click", () =>
{
    previousOperator = currentOperator;
    currentOperator = "+";
    console.log("previousOperator is " + previousOperator);
    runningTotal = operate(runningTotal, previousOperator, nextNumber);
    console.log("runningTotal is " + runningTotal);
    nextNumber = "";
    display = runningTotal;
    displayCalculator.textContent = display;
    
    return display;
})

//DONE
buttonClear.addEventListener("click", () => 
{
    display = "";
    operator = "";
    nextNumber = "";
    runningTotal = 0;
    previousOperator = "";
    currentOperator = "";
    displayCalculator.textContent = 0;
    beginning = true;
})

// Perform operation - functions work by themselves
function operate(numberA, operator, numberB)
{
    if (operator === "+" && beginning === false)
    {
        return add(numberA, numberB);
    }
    if (operator === "-" && beginning === false)
    {
        return subtract(numberA, numberB);
    }
    if (operator === "*" && beginning === false)
    {
        return multiply(numberA, numberB);
    }
    if (operator === "/" && beginning === false)
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