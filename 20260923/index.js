// console.log('hello javascript~');
// console.log('hello web~');
// alert('추석!');

// 1. 변수 정의 (선언과 초기화)
// 변수 정의 기본 문법 : var 변수명 = 데이터;
// 변수 정의, 디파인, 
// var myScore 변수 선언 = 특정 공간 청소하고 명찰을 달아 놓는 상태
// = 80; 데이터를 넣는것 변수 초기화 = 할당 연산자를 이용해서 데이터를 담아 놓는 것
// var myScore = 80; = 변수 정의, 디파인
var myScore = 80;
console.log(myScore);

// myScore = 100 <- 파이썬 방식 변수 정의
// myScore <- 변수 선언
// = 100 변수 초기화

myScore = 90;
console.log(myScore);

myScore= "Hello";
console.log(myScore);

myScore = 3.14;
console.log(myScore);

myScore = "0";
console.log(myScore);

myScore = true;
console.log(myScore);

// 2. 변수 언언 키워드 (var, (let, const) -> ES6+)
// var, let : 일반 변수를 선언하는 키워드
// const : 상수 선언

// let myName = "gildong";
// console.log(myName);

// myName = 11;
// console.log(myName);

// const PI = 3.14;
// console.log(PI);

// PI = 3.14;
// console.log(PI);

// Q-01) 변수 myName과 myMajor에 자신의 이름과 전공을 저장하고 출력해보자!
let myName = "이재성";
let myMajor = "컴퓨터공학";
console.log("myName: ", myName);
console.log("myMajor: ", myMajor);

let score;
score = 80;


/* 
Q-02) 다음 순서에 마주어 코드를 작성해봅시다.
1. intro 변수를 선언하고 'Hello'로 초기화합니다.
2. intro 변수에 저장된 값을 화면에 출력합니다.
3. intro 변수의 데이터를 '안녕하세요.'로 변경합니다.
4. 변경된 값을 화면에 출력합니다.
*/

let intro = 'Hello';
console.log(intro);     // Hello 출력
intro = '안녕하세요.';
console.log(intro);     // 안녕하세요. 출력

// 3. 변수명 규칙
// 3-1. 영문자를 사용한다.
var gildongAge = 20;
console.log(gildongAge);        // 20

// var 홍길동나이 = 20;
// console.log(홍길동나이);      // 20 출력은되나 나중에 큰 문제가 생김 에러 발생


// 3-2. 소문자로 시작한다.
var momey = 100;    // 권장
var Momey = 100;    // 권장하지 않음

// 3-3. 데이터의 의미를 쉽게 파악할 수 있게 짓는다.
// 길동 플레이어

var player = "gildong"; // 권장
var p = "gildong";      // 권장하지 않음
// 점수면 score 위치면 location 시간이면 time 현재시간이면 currentTime

// 3-4. 두개 이상의 단어가 조합될 경우 낙타표기법을 따른다.
// 새로운 아이템 new item -> newitem (비권장) -> newItem(권장)
// 현재위도값 current location latitude -> currentLocationLatitude

// 3-5. 예약어(키워드)는 변수명으로 사용할 수 없다.
// var let const for if else return ....
// let const = 'qnffkqnffk';

// 3-6. 언더바(_)를 제외한 특수문자는 사용할 수 없다.
var _score = 100;
var $score = 100;
// var -score = 100;
// var !score = 100;
// var ^^score = 100;
// var %score = 100;
// var sco re = 100;

// 3-7. 숫자는 첫 글자는 제외한 나머지 자리에서만 사용한다.
// var 1player = 'gildong'; (X)
var pla1yer = 'gildong';
var player1 = 'gildong';

/*
    * 첫 글자는 소문자로 시작하고 낙타표기법을 따른다.
    * 언더바(_)를 제외한 특수문자, 예약어, 공백문자는 사용하지 않는다.
    * 숫자를 사용할 경우 변수의 중간 또는 뒤에 사용한다.
*/

// 4. 데이터 자료형
// 정수형(integer) : 1, 100, 99, -20, -100, 0
// 실수형(float) : 3.14, 0.1, 0.0, -5.129
// 문자열형(String) : "Hello", "Hi", "good", 'a, '', " "
// js에서는 문자열형 문자형 구분하지 않기때문에 '', "" 상관없다
// 논리형(boolean) : true. false 딱 2가지 

/*  java
int currentScore = 100;
float currentScore_ = 0.1;
String currentScore__ "Hello";
boolean currentScore___ = true;
*/

var currentScore = 100;     // 4byte
var currentScore_ = 0.1;     // 4byte
var currentScore__ = "100";     // 
var currentScore___ = true;     // 1byte

console.log(typeof(currentScore));
console.log(typeof(currentScore_));
console.log(typeof(currentScore__));
console.log(typeof(currentScore___));
