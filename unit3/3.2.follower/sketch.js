let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;
let debug = false;
let score = 20;
let img; 




function setup() {
  createCanvas(800, 800);

  x = random(width);
  y = random(height);
}

function draw() {
  background(50,200,80);

//distance formula
  let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

  //make it move
  x += xspeed;
  y += yspeed

  //draw a circle 
  circle(x,y,50);
  

  //move to the right
  if (mouseX > x){
    xspeed = speedfactor;
//move to the left
  }else{
    xspeed= -speedfactor;
  }

  //move up
  if (mouseY > y){
    yspeed = speedfactor;
    //move down
  }else{
    yspeed = -speedfactor;
  }


//check for collision
if (d < 25){
  score -= 1;
  x = random(width);
  y = random(height);

}

  if (debug){ 
  textSize(30);
  text("mouseX: " + mouseX, 50 ,50);
  text("mouseY: " + mouseY, 50, 80);
  text("x:" + x, 50 ,120);
  text("y:" + y, 50, 150);
  text("d: " + d, 50, 180);
  text("score: " + score, 50, 210);
}
}