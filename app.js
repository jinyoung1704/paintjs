const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    //console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    //console.log(x,y);
}

function onMouseDown(event){
    painting = true;
    //console.log(event);
}

function onMouseUp(event){
    stopPainting();
}

function onmouseleave(event){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave",onmouseleave);
}