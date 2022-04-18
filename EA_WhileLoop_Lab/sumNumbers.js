function sumNumbers(input) {
    let targetNumber = Number(input[0])
    let index = 1;
    let nextNumber = Number(input[index]);
    while (nextNumber < targetNumber) {
        index++;
        nextNumber += Number(input[index])
    }
    console.log(nextNumber)
}

sumNumbers(["100",
"10",
"20",
"30",
"40"])

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
