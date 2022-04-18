function catDiet(input) {
    const calories = {"fat": 9, "protein": 4, "carbohydrates": 4};

    let fatPercent = Number(input[0]) / 100;
    let proteinPercent = Number(input[1]) / 100;
    let carbohydratesPercent = Number(input[2]) / 100;

    let totalCalories = Number(input[3]);

    let waterPercent = Number(input[4]) / 100;

    let fatWeight = (totalCalories * fatPercent) / calories["fat"];
    let proteinWeight = (totalCalories * proteinPercent) / calories["protein"];
    let carbohydratesWeight = (totalCalories * carbohydratesPercent) / calories["carbohydrates"];

    let foodWeight = totalCalories / (fatWeight + proteinWeight + carbohydratesWeight);

    console.log((foodWeight * (1 - waterPercent)).toFixed(4));

}

catDiet(["60",
"25",
"15",
"2500",
"60"])

catDiet(["40",
"40",
"20",
"3000",
"40"])

catDiet(["20",
"60",
"20",
"1800",
"50"])
