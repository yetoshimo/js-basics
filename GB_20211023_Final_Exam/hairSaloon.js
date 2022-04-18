function hairSaloon(input) {
    const haircut = {"mens": 15, "ladies": 20, "kids": 10};
    const color = {"touch up": 20, "full color": 30};

    let targetIncome = Number(input[0]);

    let totalIncome = 0;

    let index = 1;

    let typeOfService = input[index];

    while (typeOfService != "closed") {
        index++;
        let subType = input[index];

        switch (typeOfService) {
            case "haircut":
                totalIncome += haircut[subType];
                break;
            case "color":
                totalIncome += color[subType];
                break;
        }

        if (totalIncome >= targetIncome) {
            break;
        }

        index += 1;
        typeOfService = input[index];
    }

    if (totalIncome >= targetIncome) {
        console.log("You have reached your target for the day!")
        console.log(`Earned money: ${totalIncome}lv.`)
    } else {
        console.log(`Target not reached! You need ${targetIncome - totalIncome}lv. more.`)
        console.log(`Earned money: ${totalIncome}lv.`)
    }

}

hairSaloon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])

hairSaloon(["50",
"color",
"full color",
"haircut",
"ladies"])
