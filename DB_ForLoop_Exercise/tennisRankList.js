function tennisRankList(input) {
    let numberOfTournaments = Number(input[0]);
    let totalScore = Number(input[1]);

    let totalGained = 0;
    let won = 0;

    for (let i = 2; i < input.length; i++) {
        if (input[i] == "W") {
            totalScore += 2000;
            totalGained += 2000;
            won++;
        } else if (input[i] == "F") {
            totalScore += 1200;
            totalGained += 1200;
        } else {
            totalScore += 720;
            totalGained += 720;
        }
    }
    console.log(`Final points: ${totalScore}`);
    console.log(`Average points: ${Math.floor(totalGained / numberOfTournaments)}`)
    console.log(`${((won / numberOfTournaments) * 100).toFixed(2)}%`)
}

tennisRankList(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])

tennisRankList(["4",
"750",
"SF",
"W",
"SF",
"W"])

tennisRankList(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])
