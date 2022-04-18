function maxNumber(input) {
    let maxNumber = Number.NEGATIVE_INFINITY;
    let index = 0;
    let nextItem = input[index]
    while (nextItem != "Stop") {
        index++;
        if (Number(nextItem) > maxNumber) {
            maxNumber = Number(nextItem);
        }
        nextItem = input[index];
    }
    console.log(maxNumber)
}

// maxNumber(["100",
// "99",
// "80",
// "70",
// "Stop"])

// maxNumber(["-10",
// "20",
// "-30",
// "Stop"])

// maxNumber(["45",
// "-20",
// "7",
// "99",
// "Stop"])

// maxNumber(["999",
// "Stop"])

maxNumber(["-1",
"-2",
"Stop"])
