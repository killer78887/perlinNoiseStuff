const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let xoff = 0;
let frame = 1;
function draw(){
    xoff = 0+0.01*frame;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    for (var i = 0; i < canvas.width; i++) {
    let x = noise(xoff)*canvas.height;
    xoff+=0.01;
    
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(i,x,1,0,2 * Math.PI);
    ctx.fill();
    }
    frame++;
}