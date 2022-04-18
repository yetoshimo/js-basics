function braceletStand(input) {
    let pocketMoney = Number(input[0]);

    let dailyIncome = Number(input[1]);

    let expenses = Number(input[2]);

    let giftPrice = Number(input[3]);

    let numberOfDays = 5;

    let totalSum = (numberOfDays * (pocketMoney + dailyIncome)) - expenses;

    if (totalSum >= giftPrice) {
        console.log(`Profit: ${(totalSum).toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        console.log(`Insufficient money: ${(giftPrice - totalSum).toFixed(2)} BGN.`)
    }
}

braceletStand(["5.12",
"32.05",
"15",
"150"])

braceletStand(["2.10",
"17.50",
"20.20",
"148.50"])

braceletStand(["15.20",
"200.00",
"7.30",
"1500.12"])
