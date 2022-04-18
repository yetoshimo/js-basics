function combinations(input) {
    let counter = 0;
    for (let i = 0; i <= Number(input[0]); i++) {
        for (let j = 0; j <= Number(input[0]); j++) {
            for (let k = 0; k <= Number(input[0]); k++) {
                if (i + j + k == Number(input[0])) {
                    counter++;
                }
            }
        }
    }
    console.log(counter)
}

combinations(["25"])

combinations(["20"])

combinations(["5"])
