function exampreparation(input) {
    let failurePoints = Number(input[0]);
    let numberOfFails = 0;
    let allGrades = 0;
    let numberOfExercises = 0;
    let index = 1;
    let successGrade = 4;
    let nextExercise;
    let nextGrade;
    while (numberOfFails != failurePoints) {
        nextExercise = input[index];
        if (nextExercise == "Enough") {
            nextExercise = input[index - 2];
            break;
        } else {
            nextGrade = Number(input[index + 1]);
            if (nextGrade <= successGrade) {
                numberOfFails++;
                allGrades += nextGrade;
                numberOfExercises++;
            } else {
                allGrades += nextGrade;
                numberOfExercises++;
            }
        }
        index += 2;
    }
    if (numberOfFails != failurePoints) {
        console.log(`Average score: ${(allGrades / numberOfExercises).toFixed(2)}`)
        console.log(`Number of problems: ${numberOfExercises}`)
        console.log(`Last problem: ${nextExercise}`)
    } else {
        console.log(`You need a break, ${numberOfFails} poor grades.`)
    }
}

exampreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

exampreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
