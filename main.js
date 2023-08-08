// Variable declarations
let numberA;
let operator = "";
let numberB;

function operate (numberA, numberB, operator)
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

console.log(add(5, 2));
console.log(subtract(5, 2));
console.log(multiply(5, 2));
console.log(divide(5, 2));

console.log(operate(5, 2, "+"))
// Works for addition but not other operations
console.log(operate(5, 2, "-"));
console.log(operate(5, 2, "*"));
console.log(operate(5, 2, "/"));