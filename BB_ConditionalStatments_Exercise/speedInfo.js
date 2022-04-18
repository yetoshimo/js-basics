function speedInfo(input) {
    if (input[0] > 1000) {
        console.log("extremely fast")
    } else if (input[0] > 150) {
        console.log("ultra fast")
    } else if (input[0] > 50) {
        console.log("fast")
    } else if (input[0] > 10) {
        console.log("average")
    } else {
        console.log("slow")
    }
}
