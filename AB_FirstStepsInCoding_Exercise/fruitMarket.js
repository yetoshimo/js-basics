function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);
    let bananaAmount = Number(input[1]);
    let orangeAmount = Number(input[2]);
    let raspberryAmount = Number(input[3]);
    let strawberryAmount = Number(input[4]);
    let raspberryPrice = strawberryPrice * 0.5;
    let orangePrice = raspberryPrice * 0.6;
    let bananaPrice = raspberryPrice * 0.2;
    let totalSum = strawberryAmount * strawberryPrice 
    + bananaAmount * bananaPrice 
    + orangeAmount * orangePrice 
    + raspberryAmount * raspberryPrice;
    console.log(totalSum);
}

fruitMarket(["48",
"10",
"3.3",
"6.5",
"1.7"])
fruitMarket(["63.5",
"3.57",
"6.35",
"8.15",
"2.5"])
