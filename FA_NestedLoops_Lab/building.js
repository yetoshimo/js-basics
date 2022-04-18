function building(input) {
    let floors = Number(input[0]);
    let units = Number(input[1]);
    let apartments = "";
    for (let i = floors; i > 0; i--) {
        for (let j = 0; j < units; j++) {
            if (i == floors) {
                apartments += `L${i}${j} `
            } else if (i % 2 == 0) {
                apartments += `O${i}${j} `
            } else {
                apartments += `A${i}${j} `
            }
        }
        console.log(apartments);
        apartments = "";
    }
}

// building(["6", "4"])

// building(["9", "5"])

// building(["4", "4"])

building(["1", "2"])
