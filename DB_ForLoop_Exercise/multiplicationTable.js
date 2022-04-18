function multiplicationTable(input) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${input[0]} = ${i * Number(input[0])}`)
    }
}

multiplicationTable(["5"])
