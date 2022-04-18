function volleyball(input) {
    let yearType = input[0];
    let holidays = Number(input[1]);
    let travelWeekends = Number(input[2]);
    let weekendsPerYear = 48;
    let totalPlays = (((weekendsPerYear - travelWeekends) * 3 / 4) + travelWeekends) + (holidays * 2 / 3);
    if (yearType == "leap") {
        totalPlays *= 1.15;
    }
    console.log(Math.floor(totalPlays))
}

volleyball(["leap",
"5",
"2"])
volleyball(["normal",
"3",
"2"])
volleyball(["leap",
"2",
"3"])
volleyball(["normal",
"11",
"6"])
volleyball(["leap",
"0",
"1"])
volleyball(["normal",
"6",
"13"])
