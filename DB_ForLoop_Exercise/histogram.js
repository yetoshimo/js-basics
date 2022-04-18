function histogram(input) {
    let numbers = Array.from(input).map(Number)
    let totalLength = numbers[0];
    let firstGroup = 0;
    let secondGroup = 0;
    let thirdGroup = 0;
    let fourthGroup = 0;
    let fifthGroup = 0;
    numbers.slice(1).forEach(function (item) {
        if (item >= 800) {
            fifthGroup++;
        } else if (item >= 600) {
            fourthGroup++;
        } else if (item >= 400) {
            thirdGroup++;
        } else if (item >= 200) {
            secondGroup++;
        } else {
            firstGroup++;
        }
    })
    console.log(`${((firstGroup / totalLength) * 100).toFixed(2)}%`)
    console.log(`${((secondGroup / totalLength) * 100).toFixed(2)}%`)
    console.log(`${((thirdGroup / totalLength) * 100).toFixed(2)}%`)
    console.log(`${((fourthGroup / totalLength) * 100).toFixed(2)}%`)
    console.log(`${((fifthGroup / totalLength) * 100).toFixed(2)}%`)
}

// histogram(["3",
//     "1",
//     "2",
//     "999"])

// histogram(["7",
// "800",
// "801",
// "250",
// "199",
// "399",
// "599",
// "799"])

// histogram(["9",
// "367", 
// "99", 
// "200", 
// "799",
// "999",
// "333",
// "555",
// "111",
// "9"])

histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])
