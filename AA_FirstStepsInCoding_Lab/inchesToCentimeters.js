function inchesToCentimeters(input) {
    let a = Number(input[0]);
    let conversion = 2.54;
    let centimeters = a * conversion;
    console.log(centimeters);
}

inchesToCentimeters(["5"])
