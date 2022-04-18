function summerOutfit(input) {
    let timeOfDay = input[1];
    let temperature = Number(input[0])
    switch (timeOfDay) {
        case "Morning":
            if (10 <= temperature && temperature <= 18) {
                console.log(`It's ${temperature} degrees, get your Sweatshirt and Sneakers.`)
            } else if (18 < temperature && temperature <= 24) {
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`)
            } else if (temperature >= 25) {
                console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`)
            }
            break;
        case "Afternoon":
            if (10 <= temperature && temperature <= 18) {
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`)
            } else if (18 < temperature && temperature <= 24) {
                console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`)
            } else if (temperature >= 25) {
                console.log(`It's ${temperature} degrees, get your Swim Suit and Barefoot.`)
            }
            break;
        case "Evening":
            if (10 <= temperature && temperature <= 18) {
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`)
            } else if (18 < temperature && temperature <= 24) {
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`)
            } else if (temperature >= 25) {
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`)
            }
            break;
    }
}

summerOutfit(["16",
"Morning"])
summerOutfit(["22",
"Afternoon"])
summerOutfit(["28",
"Evening"])
