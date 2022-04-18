function sequence2Kplus1(input) {
    let targetNumber = Number(input[0]);
    let total = 1;
    while (total <= targetNumber) {
        console.log(total);
        total = (total * 2) + 1;
    }
}

// sequence2Kplus1(["3"])
// sequence2Kplus1(["8"])
// sequence2Kplus1(["17"])
sequence2Kplus1(["31"])
