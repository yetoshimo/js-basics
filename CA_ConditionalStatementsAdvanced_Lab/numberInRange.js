function numberInRange(input) {
    if (-100 <= Number(input[0]) && Number(input[0]) <= 100 && Number(input[0]) != 0) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

numberInRange(["-25"])
numberInRange(["0"])
numberInRange(["25"])
