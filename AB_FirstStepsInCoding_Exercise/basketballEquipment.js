function basketballEquipment(input) {
    let yearlyFee = Number(input[0]);

    let trainers = yearlyFee * 0.6;
    let clothing = trainers * 0.8;
    let ball = clothing * 0.25;
    let accessory = ball * 0.2;

    console.log(yearlyFee + trainers + clothing + ball + accessory);
}

basketballEquipment(["365 "])
basketballEquipment(["550 "])