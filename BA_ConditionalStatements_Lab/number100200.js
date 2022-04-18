function number100200(input) {
    let givenNumber = Number(input[0]);
    if (givenNumber > 200) {
        console.log("Greater than 200")
    } else if (givenNumber >= 100) {
        console.log("Between 100 and 200")
    } else {
        console.log("Less than 100")
    }
}

number100200(["95"])
number100200(["120"])
number100200(["210"])
