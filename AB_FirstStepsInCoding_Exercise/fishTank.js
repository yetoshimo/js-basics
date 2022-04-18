function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;
    let volume = (lenght * width * height) * 0.001;
    console.log(volume * (1 - percent));
}

fishTank(["85",
"75",
"47",
"17"])
fishTank(["105",
"77",
"89",
"18.5"])
