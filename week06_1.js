// 함수 정의
function doubleX(n) {
    return n * 2;
}
//---------------------------------
function square(n) {
    return n * n;
}
//---------------------------------
function average(a, b) {
    return (a + b)/2;
}
//---------------------------------
// 안녕하세요 홍길동씨~!
// function sayHello(name) {
//     console.log(`안녕하세요 ${name}씨~~~`);
// }
//---------------------------------
// function tagString(tag, text) {
//     return `<${tag}>${text}</${tag}>`;
//     //return "<"+tag+">"+text+"</"+tag+">";
//}
//---------------------------------
// 매개변수 a (배열)의 모든 원소의 합을 계산하고 return 하기.
let sumArray = function (a) {
    let sum = 0;
    for (let item of a) {
        sum += item;
    }
    return sum;
}
//---------------------------------
// 매개변수 a(a는 배열)의 모든 원소가 number이면 true,
//  아니면 false 를 return.
let isAllNumber = function (a) {
    for(let item of a) {
        if(typeof(item) != 'number')
            return false;
    }
    return true;
}
//---------------------------------
let max = (a=0, b=0) => {

    return (a>b)? a : b;
}
//---------------------------------
// 위에서 정의한 max(a, b)를 활용할 것.
let max3 = (a=0 ,b=0, c=0) => {
    return max(max(a, b), c);
}
//---------------------------------
function welcome(target="손님", host="홍길동") { 
    if(target == "손님") {
        console.log(`어서오세요 ${target}, 저는 ${host}입니다.`);
    } else {
        console.log(`어서오세요 ${target}씨, 저는 ${host}입니다.`);
    }
}
//---------------------------------
function tagString(text, tag="div", cls=""){
    if(cls=="") {
        console.log(`<${tag}>${text}</${tag}>`);
    } else {
        console.log(`<${tag} class="${cls}">${text}</${tag}>`);
    }
}
//---------------------------------
let printDIT = function () { console.log("Hello DIT!!!!")};

function callFiveTimes(callBackFunction) {
    for(let i=1; i<=5; i++) {
        callBackFunction();
    }
}
//---------------------------------
function helloMaker(host) {
    let sayHello = function(guest) {
        console.log(`${guest}씨, 반갑습니다. 저는 ${host}입니다.`);
    }
    return sayHello;
}
//---------------------------------
//함수 호출

let aKey = setInterval(printDIT, 2000);

function stopPrintDIT() {
    clearInterval(aKey);
    console.log("printDIT 반복 실행을 종료시켰습니다.");
}

setTimeout(stopPrintDIT, 10000);