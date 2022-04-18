function radiansToDegrees(input) {
    let givenRadian = Number(input[0]);
    let conversionToDegree = 180 / Math.PI;
    console.log((givenRadian * conversionToDegree))
}

radiansToDegrees(["3.1416"])
radiansToDegrees(["6.2832"])
