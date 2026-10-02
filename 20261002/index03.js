/*
요구사항 정의서
 1. 선생님은 해당 학급 학생 시험 점수를 입력한다.
 2. 선생님은 해당 학교의 이름을 입력한다.
 3. 입력된 모든 학생의 시험점수 총점과 평균 그리고 학급 이름도 출력한다.
 학급이름 : 3-3반
 학생수 : 3명
 총점 : 270
 평균 : 90
*/

function printTotalAndAvg(clsName, scs) {

    var className = clsName;
    var scores = scs;

    console.log(`학급 이름 : ${className}`);
    console.log(`학생수 : ${scores.length}`);

    var totalScore = 0;
    for (var i = 0; i < scores.length; i++) {
        totalScore += scores[i];
    }
    console.log(`총점 : ${totalScore}`);
    console.log(`평점 : ${totalScore / scores.length}`);

}

// var className;  // 학급 이름 (3-3)
// var scores = [];     // 학생 시험 점수들([80, 90, 100])

function setData() {

    className = prompt('학급 이름 입력하세요.');    // 3-3

    var className;  // 학급 이름 (3-3)
    var scores = [];     // 학생 시험 점수들([80, 90, 100])

    var flag = true;
    while(flag) {
        var seletcMenu = Number(prompt('1. 점수 입력    2.출력&종료'));

        switch(seletcMenu) {
            case 1:     // 학생 점수 입력 시도
                var score = Number(prompt('학생 점수 입력하세요'));
                scores.push(score);
                break;

            case 2:     // 출력 하고 종료
                flag = false;
                printTotalAndAvg(className, scores);
                
                break;
        }

    }


}

setData();
// printTotalAndAvg();