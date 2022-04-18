function timePlus15(input) {
    let hour = Number(input[0]);
    let addedMinutes = Number(input[1]) + 15;
    if (addedMinutes >= 60) {
        hour++;
        addedMinutes -= 60;
    }
    if (hour > 23) {
        hour = 0;
    }
    console.log(`${hour}:${String(addedMinutes).padStart(2, "0")}`)
}

timePlus15(["1", "46"])
timePlus15(["0", "01"])
timePlus15(["23", "59"])
timePlus15(["11", "08"])
timePlus15(["12", "49"])
