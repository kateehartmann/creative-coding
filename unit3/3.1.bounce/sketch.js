let x = 0;
let y = 0;
let xspeed = 3;
let yspeed = 2;
let circleColor;

function setup() {
  createCanvas(400, 400);
  circleColor = fill(100,100,250); //initial color

}
function draw() {
  background(220);

  if (x < 25 | x > 375){
    xspeed = xspeed * -1; //reverse the x direction
    changeColor();
  }

  if (y < 25 | y > 375){
    yspeed = yspeed * -1; //reverse the y direction
    changeColor();
  }

  x = x + xspeed; //iterate x
  y = y + yspeed; //iterate y

  circle (x, y, 50); //draw a circle
  
}
function changeColor() {
  circleColor = fill(random(173,216,320), random(30,144,255), random(0,255,255));//set color for change
}