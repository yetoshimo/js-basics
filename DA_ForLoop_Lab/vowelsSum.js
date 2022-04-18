function vowelsSum(input) {
    const vowels = { "a": 1, "e": 2, "i": 3, "o": 4, "u": 5 }
    let sumVowels = 0;
    Array.from(input[0]).forEach(function(item) {
        if (item in vowels) {
            sumVowels += vowels[item];
        }
    })
    console.log(sumVowels)
}

vowelsSum(["hello"])
vowelsSum(["hi"])
vowelsSum(["bamboo"])
vowelsSum(["beer"])
