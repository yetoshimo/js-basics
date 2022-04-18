function vacation(input) {
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let nextAction;
    let amount;
    let spendedTimes = 0;
    let daysPassed = 0;
    while (true) {
        nextAction = input[index];
        amount = Number(input[index + 1]);
        daysPassed++;
        if (nextAction == "spend") {
            if (amount >= availableMoney) {
                availableMoney = 0;
            } else {
                availableMoney -= amount;
            }
            spendedTimes++;
            if (spendedTimes == 5) {
                break;
            }
        } else {
            availableMoney += amount;
            spendedTimes = 0;
            if (availableMoney >= neededMoney) {
                console.log(`You saved the money for ${daysPassed} days.`)
                break;
            }
        }
        index += 2;
    }
    if (spendedTimes == 5) {
        console.log("You can't save the money.")
        console.log(`${daysPassed}`)
    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
