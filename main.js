// Variable declarations
let display = "";
let runningTotal = 0;
let nextNumber = "";
let previousOperator = "";
let currentOperator = "";

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
        nextNumber = nextNumber + button.textContent;
        nextNumber = Number(nextNumber);
        console.log("nextNumber is " + nextNumber);
        displayCalculator.textContent = nextNumber;
        return nextNumber;
    });
});

// In progress
buttonsOperators.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        previousOperator = currentOperator;
        console.log("previousOperator is " + previousOperator);
        currentOperator = button.textContent;
        console.log("currentOperator is " + currentOperator);

        // previousOperator is "" (beginning) - DONE
        if (previousOperator === "")
        {
            runningTotal = nextNumber;
            displayCalculator.textContent = runningTotal;
            console.log("runningTotal is " + runningTotal);
            nextNumber = String(nextNumber);
            nextNumber = "";
            return runningTotal;
        }

        // previousOperator is an operation and currentOperator is "=" - DONE
        else if (previousOperator !== "=" && previousOperator !== "" && currentOperator === "=")
        {
            runningTotal = operate(runningTotal, previousOperator, nextNumber);
            displayCalculator.textContent = runningTotal;
            console.log("runningTotal is " + runningTotal);
            nextNumber = String(nextNumber);
            nextNumber = "";
            return runningTotal;
        }
        
        // previousOperator is "=" and currentOperator is an operation - DONE
        else if (previousOperator === "=" && currentOperator !== "=" && currentOperator !== "")
        {
            displayCalculator.textContent = runningTotal;
            console.log("runningTotal is " + runningTotal);
            return runningTotal;
        }

        // both previousOperator and currentOperator are both "=" - DONE
        else if (previousOperator === "=" && currentOperator === "=")
        {
            displayCalculator.textContent = runningTotal;            
            console.log("runningTotal is " + runningTotal);
            return runningTotal;
        }
        
        // two of the following operations: + - * / - DONE
        else 
        {
            runningTotal = operate(runningTotal, previousOperator, nextNumber);
            displayCalculator.textContent = runningTotal;
            console.log("runningTotal is " + runningTotal);
            nextNumber = String(nextNumber);
            nextNumber = "";
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

// DONE
buttonClear.addEventListener("click", () => 
{
    display = "";
    runningTotal = 0;
    nextNumber = "";
    previousOperator = "";
    currentOperator = "";
    displayCalculator.textContent = runningTotal;
})

// Perform operation - DONE
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

// Operator functions - DONE
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