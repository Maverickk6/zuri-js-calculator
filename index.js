
const operator_choice = prompt('Enter operator ( either + or - or *  or / ): ');


const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator_choice == '+') {
    result = number1 + number2;
}
else if (operator_choice == '-') {
    result = number1 - number2;
}
else if (operator_choice == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator_choice} ${number2} = ${result}`);
alert(`${number1} ${operator_choice} ${number2} = ${result}`)