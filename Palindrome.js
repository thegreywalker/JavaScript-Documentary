//? Program to determine whether a given input is Palindrome or not.

//* Imports for the local file
const readline = require('readline');

//* Code for taking input in Node.js console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//* Using the Module for asking and Printing Query to the Console
rl.question("Enter Your Input? ", (answer) => {
    //* Passing the given input into the Palindrome function
    const response = Palindrome(answer);
    if (response === answer) {
        // Code -> The Number is Palindrome
        console.log(`The Input ${answer} is a Palindrome.`)
    } else if (response != answer) {
        // Code -> The Number is not a Palindrome
        console.log(`The Input ${answer} is not a Palindrome.`)
    }

    //* Closing the stdin/stdoutProcess of the Console
    rl.close();
});

//* Calculating the Palindrome Sequence using an Arrow function and Passing the Stdinput into it.
const Palindrome = (response) => {
    const operand = response.toString();
    let revOperand = ''
    for (let i = operand.length - 1; i >= 0; i--) {
        revOperand += operand[i];
    }
    
    return revOperand;
}