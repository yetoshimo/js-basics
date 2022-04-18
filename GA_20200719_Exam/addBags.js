function addBags(input) {
    let baggageFee = Number(input[0]);
    let baggageWeight = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let numberOfBaggages = Number(input[3]);

    if (baggageWeight > 20) {
        
    } else if (baggageWeight >= 10) {
        baggageFee *= 0.5;
    } else {
        baggageFee *= 0.2;
    }

    if (numberOfDays > 30) {
        baggageFee *= 1.1;
    } else if (numberOfDays >= 7) {
        baggageFee *= 1.15;
    } else {
        baggageFee *= 1.4;
    }

    console.log(`The total price of bags is: ${(baggageFee * numberOfBaggages).toFixed(2)} lv.`)

}

addBags(["30",
"18",
"15",
"2"])

addBags(["25.50",
"5",
"36",
"6"])

addBags(["63.80",
"23",
"3",
"1"])
