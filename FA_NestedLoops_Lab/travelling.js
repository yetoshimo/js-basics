function travelling(input) {
    let index = 0;
    let nextLine = input[index];
    let destination = nextLine;
    let neededMoney = Number(input[index + 1]);
    let availableMoney = 0;
    index = 1;
    while (nextLine != "End") {
        index++;
        availableMoney += Number(input[index]);
        if (neededMoney <= availableMoney) {
            console.log(`Going to ${destination}!`);
            availableMoney = 0;
            if (input[index + 1] != "End") {
                destination = input[index + 1];
                neededMoney = Number(input[index + 2]);
                index += 2;
            }
        }
        nextLine = input[index]
    }
}

travelling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])

// travelling(["France",
// "2000",
// "300",
// "300",
// "200",
// "400",
// "190",
// "258",
// "360",
// "Portugal",
// "1450",
// "400",
// "400",
// "200",
// "300",
// "300",
// "Egypt",
// "1900",
// "1000",
// "280",
// "300",
// "500",
// "End"])
