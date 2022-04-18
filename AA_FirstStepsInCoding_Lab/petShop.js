function petShop(input) {
    let numberOfDogs = Number(input[0]);
    let numberOfOtherAnimals = Number(input[1]);
    let priceOfDogFood = 2.5;
    let priceOfOtherFood = 4;
    console.log(`${numberOfDogs * priceOfDogFood + numberOfOtherAnimals * priceOfOtherFood} lv.`);
}

petShop(["13", "9"])
