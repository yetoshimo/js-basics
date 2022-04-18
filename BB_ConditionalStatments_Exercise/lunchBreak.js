function lunchBreak(input) {
    let serialName = input[0];
    let lengthOfEpisode = Number(input[1]);
    let lengthOfBreak = Number(input[2]);

    let availableTime = lengthOfBreak -  (lengthOfBreak / 8) - (lengthOfBreak / 4);

    if (availableTime >= lengthOfEpisode) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(availableTime - lengthOfEpisode)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(lengthOfEpisode - availableTime)} more minutes.`)
    }
}

lunchBreak((["Game of Thrones",
"60",
"96"])
)

lunchBreak((["Teen Wolf",
"48",
"60"])
)