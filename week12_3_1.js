//=========================================================================
// Event Handler Zone
//=========================================================================
let mouseDownHandler = function() { this.style.borderColor = "red";};
let mouseUpHandler = function() { this.style.borderColor = "gray";}
let mouseOverHandler = function() { this.style.backgroundColor = "yellow";}
let mouseOutHandler = function() { this.style.backgroundColor = "rgb(234, 222, 169)";}
//=========================================================================
window.onload = function() {
    let btnArray = document.querySelectorAll(".button");
    for(let btn of btnArray) {
        btn.addEventListener("mousedown", mouseDownHandler);
        btn.addEventListener("mouseup", mouseUpHandler);
        btn.addEventListener("mouseover", mouseOverHandler);
        btn.addEventListener("mouseout", mouseOutHandler);
    }

}
