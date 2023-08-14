// Variable declarations
let display = "";
let runningTotal = 0;
let nextNumber = "";
let previousOperator = "";
let currentOperator = "";
const arrayOperatorId = ["#division", "#multiply", "#subtract", "#add", "#equals"];
const lengthArrayOperatorId = arrayOperatorId.length;
const arrayDigitId = ["#zero", "#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine", "#decimal"];
const lengthArrayDigitId = arrayDigitId.length;

const displayCalculator = document.querySelector("#display");
const buttonsDigits = document.querySelectorAll("button.digit");
const buttonClear = document.querySelector("#clear");
const buttonsOperators = document.querySelectorAll("button.operator");

// Digit buttons (0-9, .) instructions
buttonsDigits.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        // Makes operators clickable
        for (let i = 0; i < lengthArrayOperatorId; i++)
        {
            document.querySelector(arrayOperatorId[i]).removeAttribute("disabled");
        }

        // Allows user to use a decimal if no decimal is already included
        // Then, solidifies the next number to be operated on
        nextNumber = String(nextNumber);
        let includesDecimal = nextNumber.includes(".");
        if (includesDecimal === true && button.textContent === ".")
        {
            nextNumber = nextNumber;
        }
        else
        {
            nextNumber = nextNumber + button.textContent;
        }
        displayCalculator.textContent = nextNumber;
        return nextNumber;
    });
});

// Operator buttons (+, -, *, /, =) instructions
buttonsOperators.forEach((button) =>
{  
    
    // Makes operators unclickable at the beginning
    button.setAttribute("disabled", true);

    button.addEventListener("click", () =>
    {        
        
        nextNumber = Number(nextNumber);

        for (let i = 0; i < lengthArrayOperatorId; i++)
        {
            document.querySelector(arrayOperatorId[i]).setAttribute("disabled", true);
        }
        previousOperator = currentOperator;
        console.log("previousOperator is " + previousOperator);
        currentOperator = button.textContent;
        console.log("currentOperator is " + currentOperator);

        // previousOperator is "" in beginning
        if (previousOperator === "")
        {
            runningTotal = nextNumber;
            displayCalculator.textContent = runningTotal;
            console.log("runningTotal is " + runningTotal);
            nextNumber = String(nextNumber);
            nextNumber = "";
            return runningTotal;
        }

        // previousOperator is an operation and currentOperator is "="
        else if (previousOperator !== "=" && previousOperator !== "" && currentOperator === "=")
        {
            for (let i = 0; i < lengthArrayDigitId; i++)
            {
                document.querySelector(arrayDigitId[i]).setAttribute("disabled", true);
            }           
            runningTotal = operate(runningTotal, previousOperator, nextNumber);
            displayCalculator.textContent = runningTotal;
            console.log("runningTotal is " + runningTotal);
            nextNumber = String(nextNumber);
            nextNumber = "";
            return runningTotal;
        }
    });
});

// Clear "C" button instructions
buttonClear.addEventListener("click", () => 
{
    for (let i = 0; i < lengthArrayDigitId; i++)
    {
        document.querySelector(arrayDigitId[i]).removeAttribute("disabled");
    } 
    display = "";
    runningTotal = 0;
    nextNumber = "";
    previousOperator = "";
    currentOperator = "";
    displayCalculator.textContent = runningTotal;
})

// Perform operation
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
    result = numberA / numberB;
    if (numberB === 0)
    {
        return "Error: Divide by Zero"
    }
    return result;
}