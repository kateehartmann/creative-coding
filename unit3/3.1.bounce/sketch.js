let x = 0;
let y = 0;
let xspeed = 1;
let yspeed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(200,200);

  circle (x, y, 50); //draw a circle 
}