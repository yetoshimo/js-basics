function minNumber(input) {
    let minNumber = Number.POSITIVE_INFINITY;
    let index = 0;
    let nextItem = input[index]
    while (nextItem != "Stop") {
        index++;
        if (Number(nextItem) < minNumber) {
            minNumber = Number(nextItem);
        }
        nextItem = input[index];
    }
    console.log(minNumber)
}

// minNumber(["100",
// "99",
// "80",
// "70",
// "Stop"])

// minNumber(["-10",
// "20",
// "-30",
// "Stop"])

minNumber(["45",
"-20",
"7",
"99",
"Stop"])

minNumber(["999",
"Stop"])

minNumber(["-1",
"-2",
"Stop"])
