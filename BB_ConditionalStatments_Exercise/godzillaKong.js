function godzillaKong(input) {
    let filmBudget = Number(input[0]);
    let extras = Number(input[1]);
    let costumePrice = Number(input[2]);
    let decorPrice = filmBudget * 0.1;
    let costumePriceDiscount = 0.9;
    if (extras > 150) {
        costumePrice *= costumePriceDiscount;
    }
    if ((extras * costumePrice) + decorPrice <= filmBudget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(filmBudget - ((extras * costumePrice) + decorPrice)).toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(((extras * costumePrice) + decorPrice) - filmBudget).toFixed(2)} leva more.`)
    }
}

godzillaKong(["20000", "120", "55.5"])
godzillaKong(["15437.62", "186", "57.99"])
godzillaKong(["9587.88", "222", "55.68"])
