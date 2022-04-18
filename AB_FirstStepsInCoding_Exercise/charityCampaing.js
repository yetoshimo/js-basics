function charityCampaing(input) {
    let numberOfDays = Number(input[0]);
    let numberOfCooks = Number(input[1]);
    let numberOfCakes = Number(input[2]);
    let numberOfWaffles = Number(input[3]);
    let numberOfPancakes = Number(input[4]);
    const priceList = {"Cake": 45, "Waffle": 5.8, "Pancake": 3.2};
    let totalSum = numberOfCakes * priceList["Cake"] 
                 + numberOfWaffles * priceList["Waffle"] 
                 + numberOfPancakes * priceList["Pancake"];
    let totalPerDay = totalSum * numberOfCooks;
    let totalCampaign = totalPerDay * numberOfDays;
    console.log(totalCampaign * 7 / 8);
}

charityCampaing(["23", "8", "14", "30", "16"])
charityCampaing(["131", "5", "9", "33", "46"])
