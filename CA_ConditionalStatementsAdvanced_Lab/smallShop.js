function smallShop(input) {
    const priceList = {"Sofia":   {"coffee": 0.5, "water": 0.8, "beer": 1.2, "sweets": 1.45, "peanuts": 1.6},
                       "Plovdiv": {"coffee": 0.4, "water": 0.7, "beer": 1.15, "sweets": 1.3, "peanuts": 1.5},
                       "Varna":   {"coffee": 0.45, "water": 0.7, "beer": 1.1, "sweets": 1.35, "peanuts": 1.55}}
    console.log(priceList[input[1]][input[0]] * input[2])
}

smallShop(["coffee",
"Varna",
"2"])
smallShop(["peanuts",
"Plovdiv",
"1"])
smallShop(["beer",
"Sofia",
"6"])
smallShop(["water",
"Plovdiv",
"3"])
smallShop(["sweets",
"Sofia",
"2.23"])
