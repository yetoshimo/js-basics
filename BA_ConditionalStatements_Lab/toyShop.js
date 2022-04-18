function toyShop(input) {
    const priceList = {"puzzle": 2.6, "speakingDoll": 3, "teddyBear": 4.1, "minion": 8.2, "truck": 2}
    let priceOfHoliday = Number(input[0]);
    let puzzles = Number(input[1]);
    let speakingDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    let discountAmount = 0.75;
    let totalProfit = puzzles * priceList["puzzle"]
    + speakingDoll * priceList["speakingDoll"]
    + teddyBear * priceList["teddyBear"]
    + minion * priceList["minion"]
    + truck * priceList["truck"];
    if ((puzzles + speakingDoll + teddyBear + minion + truck) >= 50) {
        totalProfit *= discountAmount;
    }
    let rent = 0.9;
    totalProfit *= rent;
    if (priceOfHoliday <= totalProfit) {
        console.log(`Yes! ${(totalProfit - priceOfHoliday).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(priceOfHoliday - totalProfit).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"])
toyShop(["320", "8", "2", "5", "5", "1"])
