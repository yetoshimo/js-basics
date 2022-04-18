function divideWithoutRemainder(input) {
    let numbers = Array.from(input).map(Number)
    let totalLength = numbers[0];
    let firstGroup = 0;
    let secondGroup = 0;
    let thirdGroup = 0;
    numbers.slice(1).forEach(function (item) {
        if (item % 2 == 0) {
            firstGroup++;
        }
        if (item % 3 == 0) {
            secondGroup++;
        }
        if (item % 4 == 0) {
            thirdGroup++;
        }
    })
    console.log(`${((firstGroup / totalLength) * 100).toFixed(2)}%`)
    console.log(`${((secondGroup / totalLength) * 100).toFixed(2)}%`)
    console.log(`${((thirdGroup / totalLength) * 100).toFixed(2)}%`)
}

// divideWithoutRemainder(["10",
// "680",
// "2",
// "600",
// "200",
// "800",
// "799",
// "199",
// "46",
// "128",
// "65"])

divideWithoutRemainder(["3",
"3",
"6",
"9"])
