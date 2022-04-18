function cinema(input) {
    const priceList = { "Premiere": 12, "Normal": 7.5, "Discount": 5 };
    console.log(`${(Number(input[1]) * Number(input[2]) * priceList[input[0]]).toFixed(2)} leva`)
}

cinema(["Premiere",
"10",
"12"])
cinema(["Normal",
"21",
"13"])
cinema(["Discount",
"12",
"30"])
