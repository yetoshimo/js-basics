function password(input) {
    let username = input[0];
    let userPassword = input[1];
    let index = 2;
    let nextEntry = input[index];
    while (nextEntry != userPassword) {
        index++;
        nextEntry = input[index]
    }
    console.log(`Welcome ${username}!`)
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])

password(["Gosho",
"secret",
"secret"])
