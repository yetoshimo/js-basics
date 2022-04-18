function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);
    let boatRent ;
    let discountRate ;
    let additionalDiscount = 1;
    switch (season) {
        case "Spring":
            boatRent = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatRent = 4200;
            break;
        case "Winter":
            boatRent = 2600;
            break;
    }
    if (fisherman >= 12) {
        discountRate = 0.75;
    } else if (fisherman >= 7) {
        discountRate = 0.85;
    } else if (fisherman <= 6) {
        discountRate = 0.9;
    }
    if (fisherman % 2 == 0 && season != "Autumn") {
        additionalDiscount = 0.95;
    }
    let totalCost = boatRent * discountRate * additionalDiscount;
    if (budget >= totalCost) {
        console.log(`Yes! You have ${(budget - totalCost).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3000",
"Summer",
"11"])
fishingBoat(["3600",
"Autumn",
"6"])
fishingBoat(["2000",
"Winter",
"13"])
