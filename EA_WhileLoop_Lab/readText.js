function readText(input) {
    let index = 0;
    while (input[index] != "Stop") {
        console.log(input[index])
        index++;
    }
}

// readText(["Nakov",
// "SoftUni",
// "Sofia",
// "Bulgaria",
// "SomeText",
// "Stop",
// "AfterStop",
// "Europe",
// "HelloWorld"])

readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])
