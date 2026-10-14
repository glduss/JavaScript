// Q) 전기 요금 계산기
/*
전기를 많이 사용하면 누진세가 붙어 단가와 기본요금이 올라갑니다.
다음 누진제가 적용된 단가표를 참고하여 전기 사용량을 입력하면 
전기료가 출력되는 프로그램을 만들어봅시다.

-------------------------------------------------------
사용량(kwh)   200이하     201초과 ~ 400이하      400초과
단가(원)        99.3                187.9       280.6
기본요금         910                 1600        7300
-------------------------------------------------------

전기 사용량을 입력하세요. 190
사용량 : 190.0 kwh
기본요금 : 910 원
단가 : 99.3 원
전기 요금 : 19777.0 

*/

/*

var kwh = Number(prompt('전기 사용량을 입력하세요.'));
var eleBill = 0
if (kwh <= 200) {
    eleBill = 910 + (99.3 * kwh);
    alert(`전기요금 : ${eleBill}원`);
} else if (kwh <= 400) {
    eleBill = 1600 + (187.9 * kwh);
    alert(`전기요금 : ${eleBill}원`);
} else {
    eleBill = 7300 + (280.6 * kwh);
    alert(`전기요금 : ${eleBill}원`);
}


var elecUse = Number(prompt('전기 사용량(kwh)을 입력하세요'));
var basicPrice = 0;     // 기본요금
var unitPrice = 0;      // 단가
var totalPrice = 0      // 전기요금

if (elecUse <= 200) {
    // console.log(`${910+99.3*elecUse}원`)
    basicPrice = 910;
    unitPrice = 99.3;
} else if (elecUse <= 400) {
    // console.log(`${1600+187.9*elecUse}원`)
    basicPrice = 1600;
    unitPrice = 187.9;
} else if (elecUse > 400) {
    // console.log(`${7300+280.6*elecUse}원`)
    basicPrice = 7300;
    unitPrice = 280.6;
}

totalPrice = basicPrice + unitPrice * elecUse;

console.log(totalPrice);

*/


// Q) 다음의 요구사항을 삼항 연산자(조건식)와 if ~ else문을 이용해서 각각의 프로그램으로 만드시오.
/*
 - 시험 점수를 입력한다.
 - 점수가 85점 이상이면 'success'를 출력하고, 85점 미만이면 'fail'을 출력한다.
*/


var score = Number(prompt("시험 점수를 입력하세요."));
score >= 85 ? alert('success') : alert('fail');

if (score >= 85) {
    alert('success');
} else {
    alert('fail');
}


// Q) 어린이의 신장을 입력하면 놀이기구 탑승 여부가 출력되는 프로그램을 만드시오
// (단, 놀이기구 탑승은 신장이 최소 120cm 최대 160cm까지 가능하다)



var height = Number(prompt('어린이의 신장을 입력하세요.'));

if (height >= 120 && height <= 160) {
    alert('탑승가능!')
} else {
    alert('탑승불가!')
}
    


// Q) 다음의 요구사항을 충족시키는 프로그램을 만드시오.
/*
 - 아침 최저 기온을 입력한다.
 - 오후 최고 기온을 입력한다.
 - 일교차가 10도 이상이면 '감기 조심하세요.'를 출력한다.
 - 오후 최고 기온이 28도 이상이고 일교차가 10도 미만이면 '초여름 날씨입니다.'를 출력한다.
*/



var minTemp = Number(prompt('아침 최저 기온을 입력하세요'));
var maxTemp = Number(prompt('오후 최고 기온을 입력하세요'));
var temp= maxTemp - minTemp
console.log(temp)

if (temp >= 10) {
    alert('감기 조심하세요.')
    } else if (maxTemp >= 28 && temp < 10) {
        alert('초여름 날씨입니다')
    } else {
        alert('다시 입력해주세요')
    }



// Q) 사용자가 입력한 문자 메시지 길이에 따라서 SMS 또는 MMS의 발송을 결정하는 
// 프로그램을 완성하시오
// (단, 메시지 길이가 50 이하면 SMS 발송, 그렇지 않으면 MMS를 발송한다).
// 문자의 길이는 string.length를 이용합니다.('hello'.length => 5)

var sms = prompt('문자 메시지를 입력하세요');
var smsLen = sms.length;

if (smsLen <= 50) {
    alert('SMS 발송')
} else {
    alert('MMS 발송')
}