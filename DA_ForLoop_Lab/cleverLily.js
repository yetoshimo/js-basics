function cleverLily(input) {
    let ageOfLily = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let totalSum = 0;
    let baseMoney = 10;
    for (let i = 1; i <= ageOfLily; i++) {
        if (i % 2 == 0) {
            totalSum += (baseMoney * (i / 2)) - 1;
        } else {
            totalSum += toyPrice;
        }
    }
    if (totalSum >= washingMachinePrice) {
        console.log(`Yes! ${(totalSum - washingMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachinePrice - totalSum).toFixed(2)}`)
    }
}

cleverLily(["10", "170", "6"])
cleverLily(["21", "1570.98", "3"])
