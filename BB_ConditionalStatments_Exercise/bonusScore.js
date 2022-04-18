function bonusScore(input) {
    let givenNumber = Number(input[0]);
    let bonusPoints = 0;
    if (givenNumber > 1000) {
        bonusPoints = givenNumber * 0.1;
    } else if (givenNumber > 100) {
        bonusPoints = givenNumber * 0.2;
    } else {
        bonusPoints = 5;
    }
    if (givenNumber % 2 == 0) {
        bonusPoints++;
    }
    if (givenNumber % 10 == 5) {
        bonusPoints += 2;
    }
    console.log(bonusPoints);
    console.log(givenNumber + bonusPoints);
}

bonusScore(["20"])
bonusScore(["175"])
bonusScore(["2703"])
bonusScore(["15875"])
