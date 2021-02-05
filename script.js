// Counter for number of clicked boxes on time
boxList = document.getElementsByClassName("box");

function toBlue(){
    let pos = Math.floor(Math.random() * 10);
    boxList[pos].addEventListener('click', toOrigin);
    function toOrigin(){
        boxList[pos].style.backgroundColor = "antiquewhite";
    }
    boxList[pos].style.backgroundColor = 'blue';
    setTimeout(toOrigin, 1000);
}

setInterval(toBlue, 1000);