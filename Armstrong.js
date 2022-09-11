//? Program to check if a number is an Armstrong or not

//* Imports for the local file.
const readline = require('readline');

//* Code for taking input in Node.js Console.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//* Using the Module for asking and Printing Query to Console
rl.question("Enter Your Input? ", (answer) => {
    //* Passing the given Input into the Armstring function
    const response = Armstrong(answer);

    //* Checking if the given Number is Armstrong or not
    if (response == answer) {
        // Code -> Declearing the Number as an Armstrong Number
        console.log(`The Returned Number is an Armstrong Number.`)
    } else {
        // Code -> Declearing the Number as not an Armstrong Number
        console.log(`The Returned Number is not an Armstrong Number.`)
    }

    //* Closing the stdin/stdout process of the Console
    rl.close()
});

//* Calcuating if the Provided Number is Armstrong or not.
const Armstrong = (response) => {
    let operand = response;

    //* Variable to Store the length of the given Number
    let length = 0;

    //* Calculation for determining the length of the given input
    while (operand != 0) {
        operand = Math.floor(operand / 10)
        length += 1
    }

    //* Calculation of the Armstrong Number Portion
    let operandSecond = response;
    let current = 0;
    let arm = 0;
    while (operandSecond != 0) {
        current = operandSecond % 10;
        arm = arm * 1 + Math.pow(current, length);
        operandSecond = Math.floor(operandSecond / 10);
    }

    return arm;

}