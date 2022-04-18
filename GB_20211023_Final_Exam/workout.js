function workout(input) {
    let numberOfDays = Number(input[0]);
    let initialDistance = Number(input[1]);
    let totalDistance = initialDistance;
    let targetDistance = 1000;
    for (let i = 2; i < 2 + numberOfDays; i++) {
        initialDistance = initialDistance * ((1 + Number(input[i]) / 100));
        totalDistance += initialDistance;
    }

    if (totalDistance >= targetDistance) {
        console.log(`You've done a great job running ${Math.ceil(totalDistance - targetDistance)} more kilometers!`)
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(targetDistance - totalDistance)} more kilometers`)
    }
}

workout(["5",
"30",
"10",
"15",
"20",
"5",
"12"])

workout(["4",
"100",
"30",
"50",
"60",
"80"])
