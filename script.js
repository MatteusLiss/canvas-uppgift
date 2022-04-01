// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
c.beginPath();
c.rect(35, 450, 330, 150);
c.stroke()

c.beginPath();
c.rect(915, 450, 330, 150);
c.stroke()

c.beginPath();
c.moveTo(35, 450);
c.lineTo(200, 200);
c.stroke();

c.beginPath();
c.moveTo(365, 450);
c.lineTo(200, 200);
c.stroke();

c.beginPath();
c.moveTo(915, 450);
c.lineTo(1075, 200);
c.stroke();

c.beginPath();
c.moveTo(1245, 450);
c.lineTo(1075, 200);
c.stroke();

c.fillStyle = "brown"
c.beginPath();
c.rect(610, 450, 40, 200);
c.stroke();
c.fill();

c.fillStyle = "green";
c.beginPath();
c.ellipse(630, 350, 125, 50, Math.PI / 2, 0.6, 1.81 * Math.PI);
c.stroke();
c.fill();

}
drawPicture();
