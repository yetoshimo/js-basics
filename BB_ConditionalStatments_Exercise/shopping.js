function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let memory = Number(input[3]);

    let videoCardPrice = 250;

    let videoCardSum = videoCards * videoCardPrice;

    let tempSum = videoCardSum + (videoCardSum * 0.35) * processors + (videoCardSum * 0.1) * memory;

    if (videoCards > processors) {
        tempSum = tempSum * 0.85;
    }

    if (tempSum > budget) {
        console.log(`Not enough money! You need ${(tempSum - budget).toFixed(2)} leva more!`)
    } else {
        console.log(`You have ${(budget - tempSum).toFixed(2)} leva left!`)
    }
}

shopping((["900",
"2",
"1",
"3"])
)

shopping((["920.45",
"3",
"1",
"1"])
)