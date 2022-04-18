function aluminumWindows(input) {
    let numberOfFrames = Number(input[0]);
    let sizeOfFrame = input[1];
    let typeOfDelivery = input[2];

    let priceList = {"90X130": 110, "100X150": 140, "130X180": 190, "200X300": 250};

    const deliveryPrice = {"With delivery": 60, "Without delivery": 0};

    if (numberOfFrames < 10) {
        console.log("Invalid order");
        return;
    }

    switch (sizeOfFrame) {
        case "90X130":
            if (numberOfFrames > 60) {
                priceList[sizeOfFrame] = priceList[sizeOfFrame] * 0.92;
                break;
            } else if (numberOfFrames > 30) {
                priceList[sizeOfFrame] = priceList[sizeOfFrame] * 0.95;
                break;
            }
        case "100X150":
            if (numberOfFrames > 80) {
                priceList[sizeOfFrame] = priceList[sizeOfFrame] * 0.9;
                break;
            } else if (numberOfFrames > 40) {
                priceList[sizeOfFrame] = priceList[sizeOfFrame] * 0.94;
                break;
            }
        case "130X180":
            if (numberOfFrames > 50) {
                priceList[sizeOfFrame] = priceList[sizeOfFrame] * 0.88;
                break;
            } else if (numberOfFrames > 20) {
                priceList[sizeOfFrame] = priceList[sizeOfFrame] * 0.93;
                break;
            }
        case "200X300":
            if (numberOfFrames > 50) {
                priceList[sizeOfFrame] = priceList[sizeOfFrame] * 0.86;
                break;
            } else if (numberOfFrames > 25) {
                priceList[sizeOfFrame] = priceList[sizeOfFrame] * 0.91;
                break;
            }
    }

    let totalSum = numberOfFrames * priceList[sizeOfFrame] + deliveryPrice[typeOfDelivery] ;

    if (numberOfFrames > 99) {
        totalSum *= 0.96;
    }

    console.log(`${totalSum.toFixed(2)} BGN`)

}

aluminumWindows(["40", 
"90X130",
"Without delivery"])

aluminumWindows(["105",
"100X150",
"With delivery"])

aluminumWindows(["2",
"130X180",
"With delivery"])
