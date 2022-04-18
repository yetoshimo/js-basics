function graduationPart2(input) {
    let studentName = input[0];
    let average = 0;
    let classYear = 1;
    let failedCount = 0;
    while (classYear <= 12 && failedCount < 1) {
        let nextGrade = Number(input[classYear]);
        if (nextGrade >= 4) {
            average += nextGrade;
            classYear++;
        } else {
            failedCount++;
            classYear++;
        }
    }
    if (failedCount < 1) {
        console.log(`${studentName} graduated. Average grade: ${(average / (classYear - 1)).toFixed(2)}`)
    } else {
        console.log(`${studentName} has been excluded at ${classYear - 1} grade`)
    }
}

graduationPart2(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

graduationPart2(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
