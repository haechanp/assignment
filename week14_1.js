//===============================================================================
// Global variable zone
//===============================================================================
let ballTop, ballLeft;
//===============================================================================
function gid(id) {return document.getElementById(id); }
//-------------------------------------------------------------------------------
function moveHandler() {
    $("#ball").animate({
        left: "+=100px",
        top: "+=50px",
        width: "+=20px",
        height: "+=20px"
    })
}
//===============================================================================
//===============================================================================
//===============================================================================
$(document).ready(function(){
    //div 태그의 스타일 속성 top의 값을 ballTop 전역변수에 백업 받는다.
    ballTop = $("#ball").css("top");
    ballLeft = $("#ball").css("left");

    // gid("print").addEventListener("click", function(){
    //     gid("ball").innerHTML = "jQuery";
    // })

    $("#print").click(function(){
        $("#ball").html("<b>jqu<br>ery</b>");
    })

    //이벤트 핸들러를 해당 객체 연결한다.
    $("#move").click(moveHandler);
    $("#reset").click(function() {
        $("#ball").animate({
            left: ballLeft,
            top: ballTop,
            width: "50px",
            height: "50px"
        })
    })
})
//===============================================================================