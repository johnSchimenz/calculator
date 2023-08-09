// Variable declarations
let numberA;
let operator = "";
let numberB;
let display = 0;
let operatorCounter = 0;
let arrayInputs = [numberA, numberB];
const buttonDisplay = document.querySelector("#display");
const buttonsDigits = document.querySelectorAll("button.digit");
const buttonDecimal = document.querySelector("#decimal");
const buttonClear = document.querySelector("#clear");
const buttonEquals = document.querySelector("#equals"); // Need to finish this "click" steps
const buttonsOperators = document.querySelectorAll("button.operator");

// What happens on button click - IN PROGRESS
buttonsDigits.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        if (display === 0)
        {
            display = button.textContent;
            console.log(display);
            return display;
        }
        else
        {
            display = display + button.textContent;
            console.log(display);
            return (display);            
        }

    })
})

//DONE
buttonDecimal.addEventListener("click", () =>
{
    if (display.includes(".") === false)
    {
        display = display + ".";
        console.log(display);
    }
})

// IN PROGRESS
buttonsOperators.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        operatorCounter++;
        if (operatorCounter === 1)
        {
            numberB = display;
        }
        
        else if (operatorCounter > 1)
        {
            numberA = numberB;
            numberB = display;
            operator = button.textContent;
            operate(numberA, numberB, operator);

        }
    })
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

// Perform operation
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

// Operator functions
function add (numberA, numberB)
{
    return display = numberA + numberB;
}

function subtract (numberA, numberB)
{
    return display = numberA - numberB;
}

function multiply (numberA, numberB)
{
    return display = numberA * numberB;
}

function divide (numberA, numberB)
{
    return display = numberA / numberB;
}