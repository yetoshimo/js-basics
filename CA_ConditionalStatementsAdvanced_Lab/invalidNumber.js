function invalidNumber(input) {
    if (Number(input[0]) >= 100 && Number(input[0]) <= 200 || Number(input[0]) == 0) {
        //pass
    } else {
        console.log("invalid")
    }
}

invalidNumber(["75"])
invalidNumber(["150"])
invalidNumber(["220"])
invalidNumber(["199"])
invalidNumber(["-1"])
invalidNumber(["100"])
invalidNumber(["200"])
invalidNumber(["0"])
