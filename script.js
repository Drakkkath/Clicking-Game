let boxes = document.getElementsByClassName('box');
let len = boxes.length;
for (let i = 0; i < 10; ++i){
    let i = Math.floor(Math.random()*len);
    function test(){
        boxes[i].style.borderColor = 'black';
        boxes[i].removeAttribute("onclick");
    }
    boxes[i].setAttribute("onclick", "test()");
}

