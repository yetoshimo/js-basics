function numberPyramid(input) {
    let currentLine = "";
    let currentNumber = 1;
    let isEnd = false;
    for (let row = 1; row <= Number(input[0]); row++) {
        for (let column = 1; column <= row; column++) {
            if (currentNumber > Number(input[0])) {
                isEnd = true;
                break;
            }
            currentLine += currentNumber + " ";
            currentNumber++;
        }
        console.log(currentLine)
        currentLine = "";
        if (isEnd) {
            break;
        }
    }
}

// numberPyramid(["7"])

// numberPyramid(["12"])

numberPyramid(["15"])