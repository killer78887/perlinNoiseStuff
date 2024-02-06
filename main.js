const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let xoff = 0;

function draw(){
    xoff+=0.01;
    let x = noise(xoff)*canvas.width;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x,200,5,0,2 * Math.PI);
    ctx.fill();
}