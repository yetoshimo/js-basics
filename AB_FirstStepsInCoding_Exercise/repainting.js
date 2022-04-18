function repainting(input) {
    let cover = Number(input[0]) + 2;
    let paint = Number(input[1]) * 1.1;
    let solvent = Number(input[2]);
    let hours = Number(input[3]);

    let plasticBag = 0.4;

    let tempSum = cover * 1.5 + paint * 14.5 + solvent * 5 + plasticBag;

    console.log(tempSum + ((tempSum * 0.3) * hours));

}

repainting(["10 ",
"11 ",
"4 ",
"8 "]
)

repainting(["5 ",
"10 ",
"10 ",
"1 "]
)