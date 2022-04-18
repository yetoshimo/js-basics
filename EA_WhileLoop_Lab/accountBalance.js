function accountBalance(input) {
    let total = 0;
    let index = 0;
    let nextItem = input[index]
    while (nextItem != "NoMoreMoney") {
        index++;
        if (Number(nextItem) < 0) {
            console.log("Invalid operation!")
            break;
        } else {
            console.log(`Increase: ${Number(nextItem).toFixed(2)}`)
            total += Number(nextItem)
        }
        nextItem = input[index]
    }
    console.log(`Total: ${total.toFixed(2)}`)
}

// accountBalance(["5.51", 
// "69.42",
// "100",
// "NoMoreMoney"])

accountBalance(["120",
"45.55",
"-150"])
