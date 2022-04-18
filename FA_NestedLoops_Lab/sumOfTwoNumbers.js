function sumOfTwoNumbers(input) {
    let beginning = Number(input[0]);
    let ending = Number(input[1]);
    let targetNumber = Number(input[2]);
    let counter = 0;
    let isFound = false;
    for (let i = beginning; i <= ending; i++) {
        for (let j = beginning; j <= ending; j++) {
            if (i + j == targetNumber) {
                counter++;
                console.log(`Combination N:${counter} (${i} + ${j} = ${targetNumber})`)
                isFound = true;
                return;
            } else {
                counter++;
            }
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${targetNumber}`)
    }
}

sumOfTwoNumbers(["1",
    "10",
    "5"])

sumOfTwoNumbers(["88",
    "888",
    "1000"])

sumOfTwoNumbers(["23",
    "24",
    "20"])

sumOfTwoNumbers(["88",
    "888",
    "2000"])
