const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

//사이즈 지정
canvas.width = 700;
canvas.height = 700;

ctx.strokStyle = "##2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    //console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){ 
        ctx.beginPath();
        ctx.moveTo(x,y); //x,y좌표로 이동
    }else{
        ctx.lineTo(x,y); //점과 점을 연결해줌
        ctx.stroke();
    }
    //console.log(x,y);
}

function onMouseDown(event){
    painting = true;
    //console.log(event);
}

/*
function onMouseUp(event){
    stopPainting();
}

function onmouseleave(event){
    painting = false;
}
*/

//이벤트 등록
if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}