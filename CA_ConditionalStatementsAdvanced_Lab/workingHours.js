function workingHours(input) {
    switch (input[1]) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (Number(input[0]) >= 10 && Number(input[0]) <= 18) {
                console.log("open")
            } else {
                console.log("closed")
            }
            break;
        default:
            console.log("closed")
            break;
    }
}

workingHours(["11",
    "Monday"])
workingHours(["19",
    "Friday"])
workingHours(["11",
    "Sunday"])
