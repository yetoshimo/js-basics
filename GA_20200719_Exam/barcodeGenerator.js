function barcodeGenerator(input) {
    let firstNumber = input[0].split("");
    let secondNumber = input[1].split("");

    let barcodes = "";

    let firstDigits = firstNumber.map(Number);
    let secondDigits = secondNumber.map(Number);

    let index = 0;

    for (let i = firstDigits[index]; i <= secondDigits[index]; i++) {
        if (i % 2 != 0) {
            for (let j = firstDigits[index + 1]; j <= secondDigits[index + 1]; j++) {
                if (j % 2 != 0) {
                    for (let k = firstDigits[index + 2]; k <= secondDigits[index + 2]; k++) {
                        if (k % 2 != 0){
                            for (let m = firstDigits[index + 3]; m <= secondDigits[index + 3]; m++) {
                                if (m % 2 != 0) {
                                    barcodes += i.toString() + j.toString() + k.toString() + m.toString() + " ";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(barcodes)
}

barcodeGenerator(["2345",
"6789"])
