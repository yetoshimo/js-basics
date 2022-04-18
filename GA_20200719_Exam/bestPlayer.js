function bestPlayer(input) {
    let index = 0;
    let nameOfPlayer = input[index];

    let maxScore = Number.MIN_VALUE;
    let highestScorer;
    
    while (nameOfPlayer != "END") {
        index++;
        let scoreOfPlayer = Number(input[index]);

        if (scoreOfPlayer > maxScore) {
            maxScore = scoreOfPlayer;
            highestScorer = nameOfPlayer;
        }

        if (scoreOfPlayer >= 10) {
            break;
        }

        index++;
        nameOfPlayer = input[index];
    }

    console.log(`${highestScorer} is the best player!`)
    if (maxScore >= 3) {
        console.log(`He has scored ${maxScore} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${maxScore} goals.`)
    }
}

// bestPlayer(["Neymar", "2",
// "Ronaldo",
// "1",
// "Messi",
// "3",
// "END"])

// bestPlayer(["Silva",
// "5",
// "Harry Kane",
// "10"])

// bestPlayer(["Rooney",
// "1",
// "Junior",
// "2",
// "Paolinio",
// "2",
// "END"])

// bestPlayer(["Petrov",
// "2",
// "Drogba",
// "11"])

bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])
