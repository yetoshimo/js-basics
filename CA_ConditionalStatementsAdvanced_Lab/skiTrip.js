function skiTrip(input) {
    const priceList = { "room for one person": 18, "apartment": 25, "president apartment": 35 };
    let numberOfNights = Number(input[0]) - 1;
    let typeOfStay = input[1];
    let feedback = input[2];
    let positiveFeedback = 1.25;
    let negativeFeedback = 0.9;
    let totalPrice = 0;
    switch (typeOfStay) {
        case "room for one person":
            switch (feedback) {
                case "positive":
                    console.log(((priceList[typeOfStay] * numberOfNights) * positiveFeedback).toFixed(2))
                    break;
                case "negative":
                    console.log(((priceList[typeOfStay] * numberOfNights) * negativeFeedback).toFixed(2))
                    break;
            }
            break;
        case "apartment":
            if (numberOfNights > 15) {
                totalPrice = priceList[input[1]] * numberOfNights * 0.5
            } else if (numberOfNights >= 10) {
                totalPrice = priceList[input[1]] * numberOfNights * 0.65
            } else {
                totalPrice = priceList[input[1]] * numberOfNights * 0.7
            } 
            switch (feedback) {
                case "positive":
                    console.log((totalPrice * positiveFeedback).toFixed(2))
                    break;
                case "negative":
                    console.log((totalPrice * negativeFeedback).toFixed(2))
                    break;
            }
            break;
        case "president apartment":
            if (numberOfNights > 15) {
                totalPrice = priceList[input[1]] * numberOfNights * 0.8
            } else if (numberOfNights >= 10) {
                totalPrice = priceList[input[1]] * numberOfNights * 0.85
            } else {
                totalPrice = priceList[input[1]] * numberOfNights * 0.9
            } 
            switch (feedback) {
                case "positive":
                    console.log((totalPrice * positiveFeedback).toFixed(2))
                    break;
                case "negative":
                    console.log((totalPrice * negativeFeedback).toFixed(2))
                    break;
            }
            break;
    }
}

skiTrip(["14",
"apartment",
"positive"])

skiTrip(["30",
"president apartment",
"negative"])

skiTrip(["12",
"room for one person",
"positive"])

skiTrip(["2",
"apartment",
"positive"])



