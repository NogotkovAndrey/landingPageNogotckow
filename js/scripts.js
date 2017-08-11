window.onload = function() {
    var btnOpenMenu = document.getElementById("buttonOpenMenu");
    var verticalMenu = document.getElementById("verticalMenu");
    var headerMiddle = document.getElementById("headerMiddle");
    btnOpenMenu.onclick = function () {
        if (verticalMenu.style.right == -300 + "px") {
            verticalMenu.style.right = 0 + "px";
            headerMiddle.style.filter="brightness(0.5)";
            this.style.transform="rotate(180deg)";
        } else{
            verticalMenu.style.right = -300 + "px";
            headerMiddle.style.filter="brightness(1)";
            this.style.transform="rotate(-90deg)";
        }
    }
}
