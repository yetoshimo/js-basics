function oscars(input) {
    let nameOfActor = input[0];

    let academyPoints = Number(input[1]);

    let jurors = Number(input[2]);

    let winningPoints = 1250.5;

    let isWon = false;

    for (let i = 3; i < 3 + jurors * 2; i += 2) {
        academyPoints += (input[i].length * Number(input[i + 1])) / 2;
        if (academyPoints > winningPoints) {
            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            isWon = true;
            return;
        }
    }
    if (!isWon) {
        console.log(`Sorry, ${nameOfActor} you need ${(winningPoints - academyPoints).toFixed(1)} more!`)
    }
}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
