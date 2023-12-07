window.onload = function() {
    let btn = document.querySelector(".button");
    btn.onmousedown = function() { this.style.borderColor = "red";}
    btn.onmouseup = function() { this.style.borderColor = "gray";}
    btn.onmouseover = function() { this.style.backgroundColor = "yellow";}
    btn.onmouseout = function() { this.style.backgroundColor = "rgb(234, 222, 169)";}

}
