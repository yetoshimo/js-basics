function sumPrimeNonPrime(input) {
    let index = 0;
    let nextNumber = input[index];
    let primes = 0;
    let nonPrimes = 0;
    let divisionCount = 0;
    while (nextNumber != "stop") {
        let integerNumber = Number(nextNumber);
        if (integerNumber < 0) {
            console.log("Number is negative.");
        } else if (integerNumber > 0) {
            for (let i = 1; i <= integerNumber; i++) {
                if (integerNumber % i == 0) {
                    divisionCount++;
                }
            }
            if (divisionCount == 2) {
                primes += integerNumber;
            } else {
                nonPrimes += integerNumber;
            }
            divisionCount = 0;
        }
        index++;
        nextNumber = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primes}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimes}`);
}

sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])

sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])

sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])
