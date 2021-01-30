boxes = document.getElementsByClassName('box');
function test(){
    let i = Math.floor(Math.random()*10);
    selectedBox = boxes[i];
    selectedBox.style.backgroundColor = 'red';
}

setInterval(test, 1000)