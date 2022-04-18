function balls(input) {
    let numberOfBalls = Number(input[0]);

    let totalPoints = 0;

    let redBalls, orangeBalls, yellowBalls, whiteBalls, blackBalls, otherBalls;

    redBalls = orangeBalls = yellowBalls = whiteBalls = blackBalls = otherBalls = 0

    for (let i = 1; i <= numberOfBalls; i++) {
        switch (input[i]) {
            case "red":
                totalPoints += 5;
                redBalls++;
                break;
            case "orange":
                totalPoints += 10;
                orangeBalls++;
                break;
            case "yellow":
                totalPoints += 15;
                yellowBalls++;
                break;
            case "white":
                totalPoints += 20;
                whiteBalls++;
                break;
            case "black":
                totalPoints = Math.floor(totalPoints / 2);
                blackBalls++;
                break;
            default:
                otherBalls++;
                break;
        }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Points from red balls: ${redBalls}`);
    console.log(`Points from orange balls: ${orangeBalls}`);
    console.log(`Points from yellow balls: ${yellowBalls}`);
    console.log(`Points from white balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}

// balls(["3",
// "white",
// "black",
// "pink"])

// balls(["5",
// "red",
// "red",
// "ddd",
// "ddd",
// "ddd"])

balls(["10",
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black"])