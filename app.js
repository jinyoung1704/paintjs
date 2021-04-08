const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2C2C2C";
const CANVAX_SIZE = 700;
//사이즈 지정
canvas.width = CANVAX_SIZE;
canvas.height = CANVAX_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAX_SIZE,CANVAX_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
ctx.fillStyle = INITIAL_COLOR;
//ctx.fillRect(50,20,100,49);

let painting = false;
let filling = false;


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

function handleColorClick(event){ //브러쉬 색 변경
    //console.log(event.target.style);
    
    const color = event.target.style.backgroundColor;
    //console.log(color);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
/*
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
*/

function handelRangeChange(event){ //브러쉬 사이즈 굵기
    //console.log(event.target.value);
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handelModeClick(event){ //fill 버튼 클릭 시
    if(filling == true){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "Paint";
        //ctx.fillStyle = ctx.strokeStyle;
    }
}

function handleCanvasClick(event){ //fill
    //ctx.fillRect(0,0,canvas.width,canvas.height);
    if(filling)
        ctx.fillRect(0,0,CANVAX_SIZE,CANVAX_SIZE);
}

function handleCM(event){
    //console.log(event);
    event.preventDefault(); //오른쪽 마우스로 저장이 아닌 아래 save버튼으로 저장하게 하기 위해 우클릭 막음
}

function handleSaveClick(event){
    const image = canvas.toDataURL();
    //console.log(image);
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    console.log(link);
    link.click();
}

//이벤트 등록
if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
    canvas.addEventListener("contextmenu",handleCM);
}

//console.log(Array.from(colors));
Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
  );


  if(range){
    range.addEventListener("input",handelRangeChange);
  }

  if(mode){
    mode.addEventListener("click",handelModeClick);
  }

  if(saveBtn){
    saveBtn.addEventListener("click",handleSaveClick);
}