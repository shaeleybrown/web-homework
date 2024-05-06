var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");


ctx.beginPath();
ctx.moveTo(200, 360);
ctx.lineTo(300, 500);
ctx.lineTo(100, 500);
ctx.closePath();
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.moveTo(50,0);
ctx.lineTo(150,0);
ctx.lineTo(150,500);
ctx.lineTo(50,500);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();


ctx.beginPath();
ctx.moveTo(400,0);
ctx.lineTo(450,0);
ctx.lineTo(450,500);
ctx.lineTo(400,500);
ctx.fill();


ctx.beginPath();
ctx.moveTo(300,0);
ctx.lineTo(320,0);
ctx.lineTo(320,300);
ctx.lineTo(300,300);
ctx.fill();

ctx.beginPath();
ctx.moveTo(200,0);
ctx.lineTo(230,0);
ctx.lineTo(230,350);
ctx.lineTo(200,350);
ctx.fill();


//Wines
ctx.font = '20pt Roboto';
ctx.fillStyle = 'red';
ctx.fillText('Winery', 200, 580);
