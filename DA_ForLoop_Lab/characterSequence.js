// function characterSequence(input) {
//     for (let i = 0; i < input[0].length; i++) {
//         console.log(input[0][i]);
//     }
// }

function characterSequence(input) {
    Array.from(input[0]).forEach(item => console.log(item));
}

// characterSequence(["softuni"])
characterSequence(["ice cream"])