function walking(input) {
    let dailyTarget = 10000;
    let index = 0;
    let completedSteps = 0;
    while (true) {
        if (input[index] != "Going home") {
            completedSteps += Number(input[index]);
            if (completedSteps >= dailyTarget) {
                break;
            }
        } else {
            completedSteps += Number(input[index + 1]);
            break;
        }
        index++;
    }
    if (completedSteps >= dailyTarget) {
        console.log(`Goal reached! Good job!\n${completedSteps - dailyTarget} steps over the goal!`)
    } else {
        console.log(`${dailyTarget - completedSteps} more steps to reach goal.`)
    }
}

// walking(["1000",
// "1500",
// "2000",
// "6500"])

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])
