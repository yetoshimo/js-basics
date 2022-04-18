function operationsBetweenNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let operator = input[2];
    let result ;
    let evenOrOdd ;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${evenOrOdd}`)
            break;
        case "-":
            result = firstNumber - secondNumber;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${evenOrOdd}`)
            break;
        case "*":
            result = firstNumber * secondNumber;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${evenOrOdd}`)
            break;
        case "/":
            if (secondNumber != 0) {
                result = firstNumber / secondNumber;
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${result.toFixed(2)}`)
            } else {
                console.log(`Cannot divide ${firstNumber} by zero`)
            }
            break;
        case "%":
            if (secondNumber != 0) {
                result = firstNumber % secondNumber;
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
            } else {
                console.log(`Cannot divide ${firstNumber} by zero`)
            }
            break;
    }
}

operationsBetweenNumbers(["10",
"12",
"+"])
operationsBetweenNumbers(["10",
"1",
"-"])
operationsBetweenNumbers(["7",
"3",
"*"])
operationsBetweenNumbers(["123",
"12",
"/"])
operationsBetweenNumbers(["10",
"3",
"%"])
operationsBetweenNumbers(["112",
"0",
"/"])
operationsBetweenNumbers(["10",
"0",
"%"])
