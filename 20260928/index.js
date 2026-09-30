// alert("hello~")

// Object *****************************************************
/*
JavaScript에서 Object(객체)는 여러 값을 "키(key)와 값(value)의 쌍"으로 묶어 표현하는 자료구조입니다.
쉽게 말하면 "관련된 데이터를 하나로 묶어 놓은 것" 이라고 생각하면 됩니다.
*/

/*
number (10, 50, 80, 3.14), String("Hello", "Hi"), boolean(true, false)
*/

// 기초 데이터 타입 (Primitive Type) = 깊은 복사
// 데이터의 실제 값(Value) 자체가 변수가 할당된 메모리 공간(주로 스택 영역)에 직접 저장됩니다.

var height = 188;
var weight = 85;
var name = "myoungho";
var sge = 50;

// 참조 타입 (Reference Type)  = 얕은 복사
// 데이터의 실제 값은 별도의 메모리 공간(주로 힙 영역)에 저장되고 
// 변수에는 그 값이 위치한 메모리 주소(참조/Reference)만 저장됩니다.



console.log('height: ', height);    // 188
height = 190;
console.log('height: ', height);    // 190

var friendHeight = height;          // 190
console.log('friendHeight: ', friendHeight);

friendHeight = 200;                 // 200

console.log('height: ', height);    // 190
console.log('friendHeight: ', friendHeight);    // 200


var man ={
    height: 188,
    weight: 85,
    myName: "myoungho",
    age: 50
}

console.log("man: ", man);

var friendMan = man;

console.log("friendMan: ", friendMan);

friendMan.myName = "chanho";

console.log("-------------------------------------");
console.log("man: ", man);
console.log("friendMan: ", friendMan);

// 참조 타입을 깊은 복사 방법?
var obj1 = {
    myName : 'gildong'
}

// var obj2 = obj1;         // 얕은 복사
var obj2 = { ...obj1 }      // 깊은 복사 방법(스프레드 연산, 전개 연산)

obj1.myName = 'chanho';

console.log("obj1: ", obj1);    // chanho
console.log("obj2: ", obj2);    // gildong

//-------------------------------------------------------------
// Object 사용 방법
// 1. Object 선언 방법
var ourClass = {
    className : "1학년 1반",
    classLocation : "4층",
    classStudentCount : 20,
    classTeacherName : "홍길동"
}

// 2. Objcet 데이터 조회 방법 : .(도트 접근 연산자) 이용
console.log("classLocation: ", ourClass.classLocation);     // 4층

// 3. Object 데이터 변경 방법 : .(도트 접근 연산자) 이용
ourClass.classLocation = "5층";
console.log("classLocation: ", ourClass.classLocation);     // 5층

// 4. Object 데이터 삭제 방법 : delete & .(도트 접근 연산자) 이용
delete ourClass.classLocation;
console.log("ourClass: ", ourClass);

// 5. Objcet의 value에는 모든 데이터 타입이 들어갈 수 있다. *****
var objcet01 = {
    key1 : "abc",
    key2 : 100,
    key3 : 3.14,
    key4 : true,
    key5 : {
        key6 : 100,
        key7 : 3.141592,
        key8 : "Hello",
        key9 : false,
        key10 : [10, 20, 50, {
            key11 : "abc"
        }]
    }
}

console.log("objcet01: ", objcet01);

// Q1) number01과 number02의 값을 바꾸자!(Swapping)
var number01 = 10;
var number02 = 20;

console.log("number01 : ", number01);   // 10
console.log("number02 : ", number02);   // 20

var temp = number01;
number01 = number02;        // number01 is 20
number02 = temp;            // number02 is 10

console.log("number01 : ", number01);   // 20
console.log("number02 : ", number02);   // 10






