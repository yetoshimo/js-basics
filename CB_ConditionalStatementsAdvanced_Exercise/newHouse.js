function newHouse(input) {
    const priceList = { "Roses": 5, "Dahlias": 3.8, "Tulips": 2.8, "Narcissus": 3, "Gladiolus": 2.5 }
    let flowerType = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let midSum = priceList[flowerType] * numberOfFlowers
    switch (flowerType) {
        case "Roses":
            if (numberOfFlowers > 80) {
                midSum *= 0.9;
            }
            break;
        case "Dahlias":
            if (numberOfFlowers > 90) {
                midSum *= 0.85;
            }
            break;
        case "Tulips":
            if (numberOfFlowers > 80) {
                midSum *= 0.85;
            }
            break;
        case "Narcissus":
            if (numberOfFlowers < 120) {
                midSum *= 1.15;
            }
            break;
        case "Gladiolus":
            if (numberOfFlowers < 80) {
                midSum *= 1.2;
            }
            break;
    }
    if (budget >= midSum) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowerType} and ${(budget - midSum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(midSum - budget).toFixed(2)} leva more.`)
    }
}

newHouse(["Roses",
"55",
"250"])
newHouse(["Tulips",
"88",
"260"])
newHouse(["Narcissus",
"119",
"360"])
