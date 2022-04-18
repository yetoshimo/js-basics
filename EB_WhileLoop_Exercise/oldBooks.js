function oldbooks(input) {
    let favoritebook = input[0];
    let index = 1;
    let isFound = false;
    let nextbook = input[index];
    while (nextbook != "No More Books") {
        if (nextbook == favoritebook) {
            console.log(`You checked ${index - 1} books and found it.`)
            isFound = true;
            break;
        } else {
            index++;
            nextbook = input[index];
        }
    }
    if (!isFound) {
        console.log("The book you search is not here!")
        console.log(`You checked ${index - 1} books.`)
    }
}

oldbooks(["Troy",
"Stronger",
"Life Style",
"Troy"])

oldbooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

oldbooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
