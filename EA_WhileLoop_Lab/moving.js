function moving(input) {
    let height = Number(input[0]);
    let depth = Number(input[1]);
    let width = Number(input[2]);
    let volume = height * depth * width;
    let usedVolume = 0;
    let index = 3;
    let nextBox = input[index];
    while (usedVolume <= volume && nextBox != "Done") {
        index++;
        usedVolume += Number(nextBox);
        nextBox = input[index];
    }
    if (usedVolume <= volume) {
        console.log(`${volume - usedVolume} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${usedVolume - volume} Cubic meters more.`)
    }
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

moving(["10",
"1",
"2",
"4",
"6",
"Done"])
