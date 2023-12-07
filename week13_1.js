//================================================================================
// Event Handler Zone
//================================================================================
function gid(id) { return document.getElementById(id);}
//--------------------------------------------------------------------------------
let onFocusHandler = function() {
    this.style.backgroundColor = "yellow";
}
let onBlurHandler = function() {
    this.style.backgroundColor = "white";
}
let onKeyDownHandler = function(ev) {
    if(ev.keyCode == 13) {
        appendRow(this.value);
        this.value = "";
    }
}
//--------------------------------------------------------------------------------
// 어떤 행의 두 번째 셀(칼럼)을 클릭하면, 해당 행을 삭제한다.
let deleteRow = function() {
    //테이블에서 클릭한 행의 인덱스를 확인한다.
    let rowIndex = this.parentNode.rowIndex - 1;
    //해당 행을 삭제한다.
    gid("tbody").deleteRow(rowIndex);
}
//--------------------------------------------------------------------------------
// input tag에 내용을 입력한 후에,
// 테이블의 특정 행을 마우스로 클릭하면
// 클릭한 행의 앞에 새 행을 생성하고 input tag에 입력된 내용을 저장한다.
let insertFront = function() {
    //입력된 내용부터 가져온다.
    let input = gid("input");
    if(input.value.trim() == "")
        return;

    //테이블에서 클릭한 행의 인덱스를 확인한다.
    let rowIndex = this.parentNode.rowIndex - 1;
    let tbody = gid("tbody");
    let newRow = tbody.insertRow(rowIndex);
    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    //새로 생성된 셀들의 내용을 저장한다.
    cell0.innerHTML = "<strong>" + input.value + "</strong>";
    cell0.addEventListener("click", insertFront);
    cell1.innerHTML = input.value.length;
    cell1.addEventListener("click", deleteRow);

    //input tag의 내용을 삭제한다.
    input.value = "";

}
//--------------------------------------------------------------------------------
let appendRow = function(newWord) {
    // tbody 객체를 먼저 가져온다.
    let tbody = gid("tbody");
    // 가져온 tbody 객체를 통해서 새 행을 하나 생성한다.
    let newRow = tbody.insertRow(tbody.rows.length);
    //새로 생성된 newRow 행 객체를 이용하여 행 내부에 들어갈 칼럼(cell)들을 생성한다.
    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    //새로 생성된 셀들의 내용을 저장한다.
    cell0.innerHTML = "<strong>" + newWord + "</strong>";
    cell0.addEventListener("click", insertFront);

    cell1.innerHTML = newWord.length;
    cell1.addEventListener("click", deleteRow);
}
//--------------------------------------------------------------------------------
//================================================================================
window.onload = function() {
    // 1. input 태그 객체의 이벤트 핸들러를 연결한다.
    let input = gid("input");
    input.addEventListener("focus", onFocusHandler);
    input.addEventListener("blur", onBlurHandler);
    input.addEventListener("keydown", onKeyDownHandler);
}
//================================================================================