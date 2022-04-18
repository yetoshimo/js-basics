function areaOfFigures(input) {
    switch (input[0]) {
        case "square":
            console.log((Math.pow(input[1], 2)).toFixed(3))
            break;
        case "rectangle":
            console.log((input[1] * input[2]).toFixed(3))
            break;
        case "circle":
            console.log((Math.pow(input[1], 2) * Math.PI).toFixed(3))
            break;
        case "triangle":
            console.log((input[1] * input[2] / 2).toFixed(3))
            break;
    }
}

areaOfFigures(["square", "5"])
areaOfFigures(["rectangle","7","2.5"])
areaOfFigures(["circle","6"])
areaOfFigures(["triangle","4.5","20"])
