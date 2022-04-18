function agencyProfit(input) {
    let airwaysName = input[0];
    let numberOfAdultTickets = Number(input[1]);
    let numberOfChildrenTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let childrenTicketPrice = adultTicketPrice * 0.3;
    let administrationFee = Number(input[4]);

    let totalProfit = numberOfAdultTickets * (adultTicketPrice + administrationFee)
    + numberOfChildrenTickets * (childrenTicketPrice + administrationFee);

    console.log(`The profit of your agency from ${airwaysName} tickets is ${(totalProfit * 0.2).toFixed(2)} lv.`)

}


agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])

agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])
