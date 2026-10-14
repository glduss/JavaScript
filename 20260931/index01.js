
var now = new Date();
var date = now.getDate();   // 오늘 날짜
var carNum = Number(prompt("차량번호 4자리를 입력하세요."));    // 차량번호

console.log(`오늘 날짜 : ${date}`)

// if (carNum % 2 === 0 && date % 2 == 0) {
//     console.log(`오늘 날짜 : ${date}`)
//     console.log(`오늘 입차 : 번호가 짝수인 차량`)
//     console.log(`오늘 입차 : ${carNum}`)
//     console.log("귀하의 차량은 입차 가능합니다.")
// } else {
//     console.log(`오늘 날짜 : ${date}`)
//     console.log(`오늘 입차 : 번호가 짝수인 차량`)
//     console.log(`오늘 입차 : ${carNum}`)
//     console.log("귀하의 차량은 입차 불가합니다.")
// }

if (date % 2 === 0) {       // 짝수 날

    /*
    if (carNum % 2 === 0)
        alert("입차가능")
    else 
        alert("입차불가")
    */
    date % 2 === 0 
    ? 
    alert("입차가능!") 
    : 
    alert("입차불가!")

} else {                    // 홀수 날
    
    /*
    if (carNum % 2 === 0)
        alert("입차불가")
    else
        alert("입차가능")
    */

//    carNum % 2 === 0 ? alert("입차불가") : alert("입차가능");
    var resultStr = carNum % 2 === 0 ? '입차불가!' : '입차가능!';
    alert(resultStr);
}

