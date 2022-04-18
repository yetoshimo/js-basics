function factorial(input) {
    let totalSum = 1;
    for (let i = Number(input[0]); i >= 1; i--) {
        totalSum *= i
    }
    console.log(totalSum)
}

factorial(["4"])
factorial(["8"])
