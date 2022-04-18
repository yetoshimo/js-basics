function sumOfNumbers(input) {
    let totalSum = 0;
    Array.from(input[0]).forEach(function(item) {
        totalSum += Number(item)
    })
    console.log(`The sum of the digits is:${totalSum}`)
}

sumOfNumbers(["1234"])
sumOfNumbers(["564891"])
