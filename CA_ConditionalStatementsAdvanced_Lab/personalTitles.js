function personalTitles(input) {
    switch (input[1]) {
        case "m":
            if (input[0] < 16) {
                console.log("Master")
            } else {
                console.log("Mr.")
            }
            break;
        case "f":
            if (input[0] < 16) {
                console.log("Miss")
            } else {
                console.log("Ms.")
            }
            break;
    }
}

personalTitles(["12",
"f"])
personalTitles(["17",
"m"])
personalTitles(["25",
"f"])
personalTitles(["13.5",
"m"])
