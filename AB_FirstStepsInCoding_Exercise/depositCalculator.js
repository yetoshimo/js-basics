function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let period = Number(input[1]);
    let interestRate = Number(input[2]) / 100;
    let yearlyInterestIncome = depositAmount * interestRate;
    let monthlyInterestIncome = yearlyInterestIncome / 12;
    console.log(depositAmount + (monthlyInterestIncome * period));
}

depositCalculator(["200", "3", "5.7"])
depositCalculator(["2350", "6", "7"])
