function hotelRoom(input) {
    let month = input[0];
    let numberOfNights = Number(input[1]);
    let studio ;
    let apartment ;
    switch (month) {
        case "May":
        case "October":
            if (numberOfNights > 14) {
                studio = 50 * 0.7;
            } else if (numberOfNights > 7) {
                studio = 50 * 0.95;
            } else {
                studio = 50;
            }
            if (numberOfNights > 14) {
                apartment = 65 * 0.9;
            } else {
                apartment = 65;
            }            
            break;
        case "June":
        case "September":
            if (numberOfNights > 14) {
                studio = 75.2 * 0.8;
            } else {
                studio = 75.2;
            }
            if (numberOfNights > 14) {
                apartment = 68.7 * 0.9;
            } else {
                apartment = 68.7;
            }
            break;
        case "July":
        case "August":
            studio = 76;
            if (numberOfNights > 14) {
                apartment = 77 * 0.9;
            } else {
                apartment = 77;
            }
            break;
    }
    console.log(`Apartment: ${(apartment * numberOfNights).toFixed(2)} lv.\nStudio: ${(studio * numberOfNights).toFixed(2)} lv.`)
}

hotelRoom(["May",
"15"])
hotelRoom(["June",
"14"])
hotelRoom(["August",
"20"])
