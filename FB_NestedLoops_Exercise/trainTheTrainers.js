function trainTheTrainers(input) {
    let numberOfJurors = Number(input[0]);
    let index = 1;
    let nextLine = input[index];
    let allGrages = 0;
    let allMarks = 0;
    while (nextLine != "Finish") {
        let lectureName = nextLine;
        let lectureAverage = 0;
        for (let i = 0; i < numberOfJurors; i++) {
            index++;
            allGrages++;
            lectureAverage += Number(input[index]);
            allMarks += Number(input[index]);
        }
        console.log(`${lectureName} - ${(lectureAverage / numberOfJurors).toFixed(2)}.`)
        index++;
        nextLine = input[index];
    }
    console.log(`Student's final assessment is ${(allMarks / allGrages).toFixed(2)}.`);
}

trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])

trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
