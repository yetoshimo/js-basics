function worldRecord(input) {
    let currentRecord = Number(input[0]);
    let length = Number(input[1]);
    let secondsPerMeter = Number(input[2]);
    let waterHardness = 12.5;
    let waterHardnessThreshold = 15;
    let neededTime = length * secondsPerMeter;
    neededTime += Math.floor((length / waterHardnessThreshold)) * waterHardness;
    if (currentRecord <= neededTime) {
        console.log(`No, he failed! He was ${(neededTime - currentRecord).toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${neededTime.toFixed(2)} seconds.`)
    }
}

worldRecord(["10464",
"1500",
"20"])
worldRecord(["55555.67",
"3017",
"5.03"])
