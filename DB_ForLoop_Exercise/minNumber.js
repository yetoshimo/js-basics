function minNumber(input) {
    console.log(Math.min(...Array.from(input.slice(1)).map(Number)));
}

minNumber(["2",
"100",
"99"])

minNumber(["3",
"-10",
"20",
"-30"])

minNumber(["4",
"45",
"-20",
"7",
"99"])

minNumber(["1",
"999"])

minNumber(["2",
"-1",
"-2"])
