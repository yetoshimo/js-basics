function numbersDivisibleByNine (input) {
    let totalSum = 0;
    let numbersList = [];
    for (let i = Number(input[0]); i <= Number(input[1]); i++) {
        if (i % 9 == 0) {
            numbersList.push(i)
            totalSum += i;
        }
    }
    console.log(`The sum: ${totalSum}`)
    numbersList.forEach(item => console.log(item))
}

numbersDivisibleByNine(["100", "200"])
