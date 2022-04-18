function trekkingMania(input) {
    let numberOfGroups = Number(input[0]);

    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    
    for (let i = 1; i <= numberOfGroups; i++) {
        if (Number(input[i]) >= 41) {
            everest += Number(input[i]);
        } else if (Number(input[i]) >= 26) {
            k2 += Number(input[i]);
        } else if (Number(input[i]) >= 13) {
            kilimanjaro += Number(input[i]);
        } else if (Number(input[i]) >= 6) {
            montblanc += Number(input[i]);
        } else {
            musala += Number(input[i]);
        }
    }

    let total = musala + montblanc + kilimanjaro + k2 + everest;

    console.log(`${((musala / total) * 100).toFixed(2)}%`)
    console.log(`${((montblanc / total) * 100).toFixed(2)}%`)
    console.log(`${((kilimanjaro / total) * 100).toFixed(2)}%`)
    console.log(`${((k2 / total) * 100).toFixed(2)}%`)
    console.log(`${((everest / total) * 100).toFixed(2)}%`)
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
