function vacationBooksList(input) {
    let totalNumberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let neededHours = totalNumberOfPages / pagesPerHour;
    console.log(neededHours / numberOfDays);
}

vacationBooksList(["212", "20", "2"])
vacationBooksList(["432", "15", "4"])
