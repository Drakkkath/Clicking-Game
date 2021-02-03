// Randomly select a box
// Change its color
// Wait a certain time
// Change its color back to the original one
// Repeat steps
boxList = document.getElementsByClassName("box");

function toBlue(){
    let pos = Math.floor(Math.random() * 10);
    function toOrigin(){
        boxList[pos].style.backgroundColor = "antiquewhite";
    }
    boxList[pos].style.backgroundColor = 'blue';
    setTimeout(toOrigin, 1000);
}

setInterval(toBlue, 1000);
