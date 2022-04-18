function fruitShop(input) {
    const priceListWeekdays = { "banana": 2.5, "apple": 1.2, "orange": 0.85, "grapefruit": 1.45, "kiwi": 2.7, "pineapple": 5.5, "grapes": 3.85 }
    const priceListWeekend = { "banana": 2.7, "apple": 1.25, "orange": 0.9, "grapefruit": 1.6, "kiwi": 3, "pineapple": 5.6, "grapes": 4.2 }
    switch (input[1]) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (input[0] in priceListWeekdays) {
                console.log((priceListWeekdays[input[0]] * input[2]).toFixed(2))
            } else {
                console.log("error")
            }
            break;
        case "Saturday":
        case "Sunday":
            if (input[0] in priceListWeekend) {
                console.log((priceListWeekend[input[0]] * input[2]).toFixed(2))
            } else {
                console.log("error")
            }
            break;
        default:
            console.log("error")
            break;
    }
}

fruitShop(["apple",
"Tuesday",
"2"])

fruitShop(["orange",
"Sunday",
"3"])

fruitShop(["kiwi",
"Monday",
"2.5"])

fruitShop(["grapes",
"Saturday",
"0.5"])

fruitShop(["tomato", "Monday", "0.5"])
