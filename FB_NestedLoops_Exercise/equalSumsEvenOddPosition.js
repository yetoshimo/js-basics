function equalSumsEvenOddPosition(input) {
    let firstNumber = input[0];
    let secondNumber = input[1];
    let allNumbers = "";
    for (let i = firstNumber; i <= secondNumber; i++) {
        let stringSplit = i + "";
        let odds = Number(stringSplit[5]) + Number(stringSplit[3]) + Number(stringSplit[1]);
        let evens = Number(stringSplit[4]) + Number(stringSplit[2]) + Number(stringSplit[0]);
        if (odds == evens) {
            allNumbers += i + " ";
        }
    }
    console.log(allNumbers);
}

equalSumsEvenOddPosition(["100000", "100050"])

equalSumsEvenOddPosition(["123456", "124000"])

equalSumsEvenOddPosition(["299900", "300000"])

equalSumsEvenOddPosition(["100115", "100120"])
