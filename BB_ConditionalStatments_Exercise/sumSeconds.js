function sumSeconds(input) {
    let totalTime = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let minutes = Math.floor(totalTime / 60);
    let seconds = String(totalTime % 60);
    console.log(`${minutes}:${seconds.padStart(2, "0")}`)
}

sumSeconds(["35", "45", "44"])
sumSeconds(["22", "7", "34"])
sumSeconds(["50", "50", "49"])
sumSeconds(["14", "12", "10"])
