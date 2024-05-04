// js/main.js
window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("grapevineCanvas");
    const ctx = canvas.getContext("2d");

    // Draw a simple grapevine
    ctx.fillStyle = "#e0e0e0"; // Light background
    ctx.fillRect(0, 0, 500, 400); // Clear canvas

    // Draw a simple grapevine with grapes
    ctx.strokeStyle = "#2e8b57"; // Dark green
    ctx.lineWidth = 4;

    // Vine
    ctx.beginPath();
    ctx.moveTo(50, 300); // Start at bottom-left
    ctx.lineTo(450, 100); // End at top-right
    ctx.stroke();

    // Grapes
    ctx.fillStyle = "#8b2e2e"; // Deep red (for grapes)
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(100 + i * 70, 250 - i * 50, 30, 0, Math.PI * 2); // Draw grapes
        ctx.fill();
    }
});
