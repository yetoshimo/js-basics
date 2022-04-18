function coins(input) {
    let totalAmount = Math.floor(Number(input[0] * 100));
    let numberOfCoins = 0;
    while (totalAmount > 0) {
        if (totalAmount >= 200) {
            totalAmount -= 200;
            // numberOfCoins++;
        } else if (totalAmount >= 100) {
            totalAmount -= 100;
            // numberOfCoins++;
        } else if (totalAmount >= 50) {
            totalAmount -= 50;
            // numberOfCoins++;
        } else if (totalAmount >= 20) {
            totalAmount -= 20;
            // numberOfCoins++;
        } else if (totalAmount >= 10) {
            totalAmount -= 10;
            // numberOfCoins++;
        } else if (totalAmount >= 5) {
            totalAmount -= 5;
            // numberOfCoins++;
        } else if (totalAmount >= 2) {
            totalAmount -= 2;
            // numberOfCoins++;
        } else if (totalAmount >= 1) {
            totalAmount = 0;
        }
        numberOfCoins++;
    }
    console.log(numberOfCoins)
}

coins(["1.23"])

coins(["2"])

coins(["0.56"])

coins(["2.73"])