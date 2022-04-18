function birthdayParty(input) {
    let rentPrice = Number(input[0]);
    let cakePrice = rentPrice * 0.2;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = rentPrice / 3;
    console.log(rentPrice + cakePrice + drinksPrice + animatorPrice);
}

birthdayParty(["2250"])
birthdayParty(["3720"])
