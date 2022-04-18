function cake(input) {
    let totalNumberOfPieces = Number(input[0]) * Number(input[1]);
    let index = 2;
    let nextPiece;
    while (totalNumberOfPieces > 0) {
        nextPiece = input[index];
        if (nextPiece != "STOP") {
            totalNumberOfPieces -= Number(nextPiece);
        } else {
            break;
        }
        index++;
    }
    if (totalNumberOfPieces > 0) {
        console.log(`${totalNumberOfPieces} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${Math.abs(totalNumberOfPieces)} pieces more.`)
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
