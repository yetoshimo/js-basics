function sumAndProduct(input) {
    let numberN = Number(input[0]);
    let isFound = false;

    for (let a = 1; a < 9; a++) {
        for (let b = 9; b > a; b--) {
            for (let c = 0; c < 9; c++) {
                for (let d = 9; d > c; d--) {
                    let product = a * b * c * d;
                    let sum = a + b + c + d;
                    if (product == sum && numberN % 10 == 5) {
                        console.log(a * 1000 + b * 100 + c * 10 + d);
                        isFound = true;
                        return;
                    } else if (Math.trunc(product / sum) == 3 && numberN % 3 == 0) {
                        console.log(d * 1000 + c * 100 + b * 10 + a);
                        isFound = true;
                        return;
                    }
                }
            }
        }
    }
    if (!isFound) {
        console.log("Nothing found")
    }
}

sumAndProduct(["123"])

sumAndProduct(["145"])

sumAndProduct(["214"])