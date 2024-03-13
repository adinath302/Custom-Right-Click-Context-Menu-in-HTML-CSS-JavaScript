const contextmenu = document.querySelector(".wrapper"),
 sharemenu = contextmenu.querySelector(".share-menu");

document.addEventListener("contextmenu", e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,

        winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        cmWidth = contextmenu.offsetWidth;
    cmHeight = contextmenu.offsetHeight;

    if(x > (winWidth - cmWidth - sharemenu.offsetWidth)){
        sharemenu.style.left = "-200px"
    }else{
        sharemenu.style.left = ""
        sharemenu.style.right = "-200px"
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

    contextmenu.style.left = `${x}px`;
    contextmenu.style.top = `${y}px`;
    contextmenu.style.visibility = "visible";
});