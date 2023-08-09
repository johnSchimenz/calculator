// Variable declarations
let display = "";
let numberA = display;
let operator = "";
let numberB;
let operatorCounter = 0;
let runningTotal = 0;
const buttonDisplay = document.querySelector("#display");
const buttonsDigits = document.querySelectorAll("button.digit");
const buttonDecimal = document.querySelector("#decimal");
const buttonClear = document.querySelector("#clear");
const buttonEquals = document.querySelector("#equals"); // Need to finish this "click" steps
const buttonsOperators = document.querySelectorAll("button.operator");

// What happens on button click - MOSTLY DONE (still need to link it to the display)
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
            return display;            
        }

    })
})

// DONE
buttonDecimal.addEventListener("click", () =>
{
    if (display.includes(".") === false)
    {
        display = display + ".";
        console.log(display);
        return display;
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
            numberA = Number(display);
            console.log(numberA);
        }
        else if (operatorCounter > 1)
        {
            numberB = Number(display);

        }
        numberA = Number(display);
        numberA = numberB;
        operator = button.textContent;
        console.log(button.textContent);
        console.log(operate(numberA, numberB, operator));
    });
});


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