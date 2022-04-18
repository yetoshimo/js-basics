function specialNumbers(input) {
    let inputNumber = Number(input[0]);
    let isSpecial = true;
    let specials = "";
    for (let i = 1111; i <= 9999; i++) {
        let stringSplit = i + "";
        for (let j of stringSplit.split("")) {
            if (inputNumber % Number(j) != 0) {
                isSpecial = false;
            }
        }
        if (isSpecial) {
            specials += i + " ";
        }
        isSpecial = true;
    }
    console.log(specials);
}

specialNumbers(["3"])

specialNumbers(["11"])

specialNumbers(["16"])