// Get canvas context
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Draw the blue triangle
ctx.beginPath();
ctx.moveTo(200, 360);
ctx.lineTo(300, 500);
ctx.lineTo(100, 500);
ctx.closePath();
ctx.fillStyle = 'blue';  // Changed to blue
ctx.fill();  // Fill the shape
ctx.strokeStyle = 'purple';  // Changed to purple
ctx.stroke();  // Draw the outline

// Draw the blue rectangle on the left
ctx.beginPath();
ctx.moveTo(50, 0);
ctx.lineTo(150, 0);
ctx.lineTo(150, 500);
ctx.lineTo(50, 500);
ctx.closePath();
ctx.fillStyle = 'blue';  // Changed to blue
ctx.fill();  // Fill the shape

// Draw the purple rectangle on the right
ctx.beginPath();
ctx.moveTo(400, 0);
ctx.lineTo(450, 0);
ctx.lineTo(450, 500);
ctx.lineTo(400, 500);
ctx.fillStyle = 'purple';  // Changed to purple
ctx.fill();  // Fill the shape

// Draw another purple rectangle in the middle
ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(320, 0);
ctx.lineTo(320, 300);
ctx.lineTo(300, 300);
ctx.fillStyle = 'purple';  // Changed to purple
ctx.fill();

// Draw the last purple rectangle
ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(230, 0);
ctx.lineTo
