function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let cost ;
    let place ;
    let typeOfStay ;
    if (budget > 1000) {
        typeOfStay = "Hotel";
        cost = budget * 0.9;
        place = "Europe";
    } else if (budget > 100) {
        place = "Balkans";
        switch (season) {
            case "summer":
                typeOfStay = "Camp";
                cost = budget * 0.4;
                break;
            case "winter":
                typeOfStay = "Hotel";
                cost = budget * 0.8;
                break;
        }
    } else {
        place = "Bulgaria";
        switch (season) {
            case "summer":
                typeOfStay = "Camp";
                cost = budget * 0.3;
                break;
            case "winter":
                typeOfStay = "Hotel";
                cost = budget * 0.7;
                break;
        }
    }
    console.log(`Somewhere in ${place}\n${typeOfStay} - ${cost.toFixed(2)}`)
}

journey(["50", "summer"])
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])
