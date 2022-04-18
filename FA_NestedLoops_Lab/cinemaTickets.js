function cinemaTickets(input) {
    let index = 0;
    let nameOfMovie = input[index];
    var ticketType = {"student": 0, "standard": 0, "kid": 0}
    while (nameOfMovie != "Finish") {
        index++;
        let totalCapacity = Number(input[index]);
        let soldTickets = 0;
        let soldTicketType = "";
        while (soldTicketType != "End" && soldTickets < totalCapacity) {
            index++;
            soldTicketType = input[index];
            if (soldTicketType in ticketType) {
                ticketType[soldTicketType]++;
                soldTickets++;
            }
        }
        console.log(`${nameOfMovie} - ${((soldTickets / totalCapacity) * 100).toFixed(2)}% full.`)
        index++;
        nameOfMovie = input[index];
    }
    let allSold = Object.values(ticketType).reduce((a, b) => a + b);
    console.log(`Total tickets: ${allSold}`)
    console.log(`${((ticketType["student"] / allSold) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((ticketType["standard"] / allSold) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((ticketType["kid"] / allSold) * 100).toFixed(2)}% kids tickets.`)
}

// cinemaTickets(["Taxi",
// "10",
// "standard",
// "kid",
// "student",
// "student",
// "standard",
// "standard",
// "End",
// "Scary Movie",
// "6",
// "student",
// "student",
// "student",
// "student",
// "student",
// "student",
// "Finish"])

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
