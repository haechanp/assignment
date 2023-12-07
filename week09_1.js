/*
    학생을 객체로 표현하기
*/
let defaultAge = 20;

let st = {
    name: "홍길동",
     age: defaultAge,
    code: 202312345,
    dept: "컴퓨터소프트웨어과",
   intro: function() {
            console.log(`안녕하세요, 저는 ${this.dept}에 재학중인 ${this.name}입니다.`);
          },
몇살이에요: function() {
            console.log(`저는 ${this.age}살 입니다.`);
          }
}
let kdw = {

}
let phc = {
    
}

st.몇살이에요();
st.btype = "B";
st.혈액형 = function () {
    console.log(`제 혈액형은 ${this.btype}형 입니다.`);
}
st.혈액형();

