// Add event listener to ensure code executes after the DOM is fully loaded
window.addEventListener("load", function() {
    // Get the canvas and its context
    var canvas = document.getElementById("wineCanvas");
    var ctx = canvas.getContext("2d");

    // Ensure the context is available
    if (!ctx) {
        console.error("Failed to get 2D context from canvas.");
        return;
    }

    // Draw the body of the wine bottle
    ctx.beginPath();
    ctx.moveTo(150, 500); // Bottom-left
    ctx.bezierCurveTo(150, 350, 250, 350, 250, 500); // Round body
    ctx.closePath();
    ctx.fillStyle = "#8B4513"; // Brown color for the bottle
    ctx.fill(); // Fill the bottle

    // Draw the neck of the bottle
    ctx.beginPath();
    ctx.moveTo(150, 350); // Start of the neck
    ctx.lineTo(150, 250); // Left side of the neck
    ctx.bezierCurveTo(150, 200, 250, 200, 250, 250); // Neck curve
    ctx.lineTo(250, 350); // Right side of the neck
    ctx.closePath();
    ctx.fillStyle = "#654321"; // Darker brown for the neck
    ctx.fill(); // Fill the neck

    // Draw the top of the bottle
    ctx.beginPath();
    ctx.moveTo(150, 250);
    ctx.lineTo(150, 230); // Top of the neck
    ctx.lineTo(250, 230); // Top right
    ctx.lineTo(250, 250);
    ctx.closePath();
    ctx.fillStyle = "#4D3226"; // Even darker brown for the top
    ctx.fill(); // Fill the top of the neck

    // Draw the cork or cap (optional)
    ctx.beginPath();
    ctx.moveTo(150, 230);
    ctx.lineTo(250, 230); // Top right
    ctx.bezierCurveTo(200, 220, 200, 220, 150, 230); // Round cap
    ctx.closePath();
    ctx.fillStyle = "#D2B48C"; // Cork-like color
    ctx.fill(); // Fill the cork or cap

    // Draw a gradient for the wine inside the bottle
    var wineGradient = ctx.createLinearGradient(150, 350, 250, 350);
    wineGradient.addColorStop(0, "#B22222"); // Dark red
    wineGradient.addColorStop(1, "#A52A2A"); // Lighter red

    ctx.beginPath();
    ctx.moveTo(150, 350); // Wine level
    ctx.lineTo(250, 350);
    ctx.lineTo(250, 500); // Right side of the bottle
    ctx.lineTo(150, 500); // Left side
    ctx.closePath(); 
    ctx.fillStyle = wineGradient; // Fill with gradient
    ctx.fill(); // Fill with gradient

    // Add a label to the bottle
    ctx.beginPath();
    ctx.rect(175, 400, 50, 70); // A simple rectangular label
    ctx.fillStyle = "#FFFFFF"; // White label
    ctx.fill(); // Fill the label
    ctx.strokeStyle = "#000000"; // Black outline
    ctx.stroke(); // Draw label outline
});
