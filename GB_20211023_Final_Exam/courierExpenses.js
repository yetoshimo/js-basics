function courierExpenses(input) {
    let weightOfPacket = Number(input[0]);

    let typeOfDelivery = input[1];

    let distance = Number(input[2]);

    let totalSum = 0;

    switch (typeOfDelivery) {
        case "standard":
            if (weightOfPacket >= 90) {
                totalSum = distance * 0.2;
            } else if (weightOfPacket >= 40) {
                totalSum = distance * 0.15;
            } else if (weightOfPacket >=10) {
                totalSum = distance * 0.1;
            } else if (weightOfPacket >= 1) {
                totalSum = distance * 0.05;
            } else {
                totalSum = distance * 0.03;
            }
            break;
        case "express":
            if (weightOfPacket >= 90) {
                totalSum = distance * (0.2 + weightOfPacket * 0.2 * 0.01);
            } else if (weightOfPacket >= 40) {
                totalSum = distance * (0.15 + weightOfPacket * 0.15 * 0.02);
            } else if (weightOfPacket >=10) {
                totalSum = distance * (0.1 + + weightOfPacket * 0.1 * 0.05);
            } else if (weightOfPacket >= 1) {
                totalSum = distance * (0.03  + weightOfPacket * 0.03 * 0.4);
            } else {
                totalSum = distance * (0.03  + weightOfPacket * 0.03 * 0.8);
            }
            break;
    }
    console.log(`The delivery of your shipment with weight of ${weightOfPacket.toFixed(3)} kg. would cost ${totalSum.toFixed(2)} lv.`)
}

// courierExpenses(["1.5",
// "standard",
// "100"])

// courierExpenses(["87",
// "express",
// "130"])

courierExpenses(["20", 
"standard",
"349"])
