function passwordGuess(input) {
    let secretPassword = "s3cr3t!P@ssw0rd";
    if (input[0] == secretPassword) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}

passwordGuess(["qwerty"])
passwordGuess(["s3cr3t!P@ssw0rd"])
passwordGuess(["s3cr3t!p@ss"])
