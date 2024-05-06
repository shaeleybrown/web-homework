// Get the canvas context
var canvas = document.getElementById("wineCanvas");
var ctx = canvas.getContext("2d");

// Draw the body of the wine bottle
ctx.beginPath();
ctx.moveTo(100, 200);  // Start at the bottom-left corner of the bottle
ctx.lineTo(100, 50);   // Left side of the neck
ctx.bezierCurveTo(100, 30, 140, 30, 140, 50);  // Bottle neck curve
ctx.lineTo(140, 200);  // Right side of the bottle
ctx.closePath();
ctx.fillStyle = "#8B4513";  // Brown color for the bottle
ctx.fill();  // Fill the bottle

// Draw the neck of the bottle
ctx.beginPath();
ctx.moveTo(100, 50);
ctx.lineTo(100, 30);  // The neck's top
ctx.lineTo(140, 30);
ctx.lineTo(140, 50);
ctx.closePath();
ctx.fillStyle = "#654321";  // Darker brown for the neck
ctx.fill();  // Fill the neck

// Draw the wine inside the bottle
ctx.beginPath();
ctx.moveTo(100, 150);  // Bottom of the wine level
ctx.lineTo(140, 150);  // Horizontal line
ctx.lineTo(140, 200);  // Right side of the wine
ctx.lineTo(100, 200);  // Left side of the wine
ctx.closePath();
ctx.fillStyle = "#B22222";  // Dark red for wine
ctx.fill();  // Fill the wine

// Draw a label on the bottle
ctx.beginPath();
ctx.rect(105, 160, 30, 30);  // A simple square label
ctx.fillStyle = "#FFFFFF";  // White label
ctx.fill();
ctx.strokeStyle = "#000000";  // Label outline
ctx.stroke();  // Draw label border