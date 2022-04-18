function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    let examTime = examHour * 60 + examMinutes;
    let arrivalTime = arrivalHour * 60 + arrivalMinutes;
    let difference = arrivalTime - examTime;
    let lateHour ;
    let lateMinutes ;
    let earlyHour ;
    let earlyMinutes ;
    if (difference > 0) {
        console.log("Late")
        lateHour = Math.floor(difference / 60);
        lateMinutes = difference - (lateHour * 60);
        if (lateHour == 0) {
            console.log(`${lateMinutes} minutes after the start`)
        } else {
            console.log(`${lateHour}:${String(lateMinutes).padStart(2, "0")} hours after the start`)
        }
    } else if (difference < 0) {
        difference = Math.abs(difference);
        if (difference > 30) {
            console.log("Early")
        } else {
            console.log("On time")
        }        
        earlyHour = Math.floor(difference / 60);
        earlyMinutes = difference - (earlyHour * 60);
        if (earlyHour == 0) {
            console.log(`${earlyMinutes} minutes before the start`)
        } else {
            console.log(`${earlyHour}:${String(earlyMinutes).padStart(2, "0")} hours before the start`)
        }
    } else {
        console.log("On time")
    }
}

onTimeForExam(["9",
"30",
"9",
"50"])
onTimeForExam(["9",
"00",
"10",
"30"])
onTimeForExam(["9",
"00",
"8",
"30"])
onTimeForExam(["16",
"00",
"15",
"00"])
onTimeForExam(["14",
"00",
"13",
"55"])
onTimeForExam(["11",
"30",
"8",
"12"])
onTimeForExam(["11",
"30",
"10",
"55"])
onTimeForExam(["11",
"30",
"12",
"29"])
onTimeForExam(["10",
"10",
"10",
"10"])
