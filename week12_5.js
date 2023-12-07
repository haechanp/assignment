//#########################################################################
// Event Handler Zone
//#########################################################################
let clearEventLog = function() {
    this.innerHTML = "";
}
//-------------------------------------------------------------------------
let mouseOver = function() {
    this.style.backgroundColor = "yellow";
    //이벤트 발생 내용을 div#eventlog에 기록한다.
    //예) Mouse Entered divA.
    document.getElementById("eventlog").innerHTML += "Mouse Over " + this.id + "<br>"
    //이벤트 전파를 중단 시킨다.
    event.stopPropagation();
}
//-------------------------------------------------------------------------
let mouseOut = function() {
    this.style.backgroundColor = "white";
    //이벤트 발생 내용을 div#eventlog에 기록한다.
    //예) Mouse Entered divA.
    document.getElementById("eventlog").innerHTML += "Mouse Out " + this.id + "<br>"
    event.stopPropagation();
}
//-------------------------------------------------------------------------
let mouseEnter = function() {
    this.style.borderColor = "blue";
    //이벤트 발생 내용을 div#eventlog에 기록한다.
    //예) Mouse Entered divA.
    document.getElementById("eventlog").innerHTML += "Mouse Entered " + this.id + "<br>"
}
//-------------------------------------------------------------------------
let mouseLeave = function() {
    this.style.borderColor = "gray";
    //이벤트 발생 내용을 div#eventlog에 기록한다.
    //예) Mouse Left divA.
    document.getElementById("eventlog").innerHTML += "Mouse Left " + this.id + "<br>"
}
//-------------------------------------------------------------------------
//#########################################################################
window.onload = function() {
    let divArray = document.getElementsByClassName("item");
    for(let div of divArray) {
        div.addEventListener("mouseenter", mouseEnter);
        div.addEventListener("mouseleave", mouseLeave);
        div.addEventListener("mouseover", mouseOver);
        div.addEventListener("mouseout", mouseOut);
    }
    //-----------------------------
    document.getElementById("eventlog").addEventListener("dblclick", clearEventLog);
}
