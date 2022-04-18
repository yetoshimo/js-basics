function foodDelivery(input) {
    let tempSum = Number(input[0]) * 10.35 +
        Number(input[1]) * 12.4 +
        Number(input[2]) * 8.15;
    
    console.log(tempSum + tempSum * 0.2 + 2.5);
}

foodDelivery(["2 ",
"4 ",
"3 "]
)

foodDelivery(["9 ",
"2 ",
"6 "]
)