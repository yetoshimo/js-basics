function countTheWords(input) {
    let totalLength = input[0].split(' ').length;
    if (totalLength > 10) {
        console.log(`The message is too long to be send! Has ${totalLength} words.`)
    } else {
        console.log("The message was sent successfully!")
    }
}

countTheWords(["This message has exactly eleven words. One more as it's allowed!"])
countTheWords(["This message has ten words and you can send it!"])
