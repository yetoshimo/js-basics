function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleanerLitres = Number(input[2]);
    let discountRate = 1 - (Number(input[3]) / 100);

    console.log(`${(pens * 5.8 + markers * 7.2 + cleanerLitres * 1.2) * discountRate}`)
}

suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
)

suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
)