function tradeCommissions(input) {
    switch (input[0]) {
        case "Sofia":
            if (input[1] > 10000) {
                console.log((input[1] * 0.12).toFixed(2))
            } else if (input[1] > 1000) {
                console.log((input[1] * 0.08).toFixed(2))
            } else if (input[1] > 500) {
                console.log((input[1] * 0.07).toFixed(2))
            } else if (input[1] >= 0) {
                console.log((input[1] * 0.05).toFixed(2))
            } else {
                console.log("error")
            }
            break;
        case "Varna":
            if (input[1] > 10000) {
                console.log((input[1] * 0.13).toFixed(2))
            } else if (input[1] > 1000) {
                console.log((input[1] * 0.1).toFixed(2))
            } else if (input[1] > 500) {
                console.log((input[1] * 0.075).toFixed(2))
            } else if (input[1] >= 0) {
                console.log((input[1] * 0.045).toFixed(2))
            } else {
                console.log("error")
            }
            break;
        case "Plovdiv":
            if (input[1] > 10000) {
                console.log((input[1] * 0.145).toFixed(2))
            } else if (input[1] > 1000) {
                console.log((input[1] * 0.12).toFixed(2))
            } else if (input[1] > 500) {
                console.log((input[1] * 0.08).toFixed(2))
            } else if (input[1] >= 0) {
                console.log((input[1] * 0.055).toFixed(2))
            } else {
                console.log("error")
            }
            break;
        default:
            console.log("error")
            break;
    }
}

tradeCommissions(["Sofia",
"1500"])

tradeCommissions(["Plovdiv",
"499.99"])

tradeCommissions(["Varna",
"3874.50"])

tradeCommissions(["Kaspichan",
"-50"])
