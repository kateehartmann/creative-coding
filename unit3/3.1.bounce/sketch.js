let x = 0;
let y = 0;
let xspeed = 3;
let yspeed = 2;

function setup() {
  createCanvas(400, 400);
  translate(200,200);
}
function draw() {
  background(220);

  


  if (x < 0 | x > 375){
    xspeed = xspeed * -1; //reverse the x direction
  }

  if (y < 0 | y > 375){
    yspeed = yspeed * -1; //reverse the y direction
  }

  x = x + xspeed; //iterate x
  y = y + yspeed; //iterate y

  circle (x, y, 50); //draw a circle
  fill(Rand(30,40));
  
}