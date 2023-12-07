//===================================================================
// Global Variable Zone
//------------------------------
let draggingCard = null;    //현재 드래깅 중인 카드 객체.
let dragOverBox = null;     //드래깅 중인 카드 객체가 올라가 있는 박스
let dragOverCard = null;    //드래깅 중인 카드 객체가 올라가 있는 카드
//===================================================================
// Card Event Handler
//-------------------------------------------------------------------
function onDragStartCard(ev) {
    draggingCard = this;    //드래깅 시작 카드를 드래깅 중인 카드로 등록
    this.classList.add("draggingCard");
}
function onDragEndCard(ev) {
    ev.preventDefault();
    draggingCard = null;    //드래깅 중인 카드가 없음으로 설정.
    this.classList.remove("draggingCard");

    // dragOver 상태에서 드래깅이 종료되면 dragLeave 이벤트가 발생하지 않고 종료되었기
    //   때문에 box 배경색이 복구되지 않는다. 그러므로 추가 정리가 필요함.
    if(dragOverBox) {
        dragOverBox.classList.remove("overBox");
        dragOverBox = null;
    }
}
function onDragOverCard(ev) {
    ev.preventDefault();
    console.log(this.innerHTML);
    this.classList.add("overCard");
    dragOverCard = this;
}
function onDragLeaveCard(ev) {
    ev.preventDefault();
    this.classList.remove("overCard");
    dragOverCard = null;
}
//-------------------------------------------------------------------
// Box Event Handler
//-------------------------------------------------------------------
function onDragOverBox(ev) {
    ev.preventDefault();
    dragOverBox = this;
    console.log(this.id);
    this.classList.add("overBox");
}
function onDragLeaveBox(ev) {
    dragOverBox = null;         // 나중에 수정 예정.
    this.classList.remove("overBox");
}
function onDropBox(ev) {
    ev.preventDefault();
    //Drop 이벤트가 발생한 box 객체(this)의 자식노드로 드래깅 중인 객체를 연결한다.
    this.appendChild(draggingCard); 
}
//===================================================================
$(document).ready(function(){
    let cardArray = document.getElementsByClassName("card");
    for(let card of cardArray) {
        card.addEventListener("dragstart", onDragStartCard);
        card.addEventListener("dragend", onDragEndCard);
        card.addEventListener("dragover", onDragOverCard);
        card.addEventListener("dragleave", onDragLeaveCard);
    }
    //----------------------------------------------------
    let boxArray = document.querySelectorAll(".box");
    for(let box of boxArray) {
        box.addEventListener("dragover", onDragOverBox);
        box.addEventListener("dragleave", onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }
})
//===================================================================