function salary(input) {
    const priceList = { "Facebook": 150, "Instagram": 100, "Reddit": 50 }
    let numberOfTabs = Number(input[0]);
    let salaryAmount = Number(input[1]);
    let isFinished = false;
    Array.from(input).slice(2).forEach(element => {
        if (element in priceList) {
            salaryAmount -= priceList[element]
            if (salaryAmount <= 0) {
                // console.log("You have lost your salary.")
                isFinished = true;
                return;
            }
        }
    });
    if (!isFinished) {
        console.log(salaryAmount)
    } else {
        console.log("You have lost your salary.")
    }
}

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
