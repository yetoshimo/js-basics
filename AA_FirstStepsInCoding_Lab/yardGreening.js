function yardGardening(input) {
    let area = Number(input[0]);
    let pricePerArea = 7.61;
    let discountRate = 0.18;
    let totalPrice = area * pricePerArea;
    let discountSum = totalPrice * discountRate;    
    let finalPrice = totalPrice - discountSum
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountSum} lv.`);
}

yardGardening(["550"])
yardGardening(["150"])
