function tournamentOfChristmas(input) {
    let numberOfDays = Number(input[0]);
    let index = 1;
    let nextLine = input[index];
    let day = 1;
    let gatheredSum = 0;
    let win = 0;
    let lose = 0;
    let dailySum = 0;
    let winSum = 20;
    let daysWon = 0;
    let daysLost = 0;
    while (day <= numberOfDays) {
        while (nextLine != "Finish") {
            if (nextLine == "win") {
                win++;
                dailySum += winSum;
            } else if (nextLine == "lose") {
                lose++;
            }
            index++;
            nextLine = input[index];
        }
        if (win > lose) {
            dailySum = dailySum * 1.1;
            daysWon++;
        } else {
            daysLost++;
        }
        gatheredSum += dailySum;
        day++;
        dailySum = 0;
        win = 0;
        lose = 0;
        index++;
        nextLine = input[index];
    }
    if (daysWon > daysLost) {
        gatheredSum *= 1.2;
        console.log(`You won the tournament! Total raised money: ${gatheredSum.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${gatheredSum.toFixed(2)}`)
    }

}

tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])

tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])
