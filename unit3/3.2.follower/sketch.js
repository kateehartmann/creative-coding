let speedfactor = 3; //sets speed
let xspeed = speedfactor; //sets xspeed to speedfactor 
let yspeed = speedfactor;//sets yspeed to speedfactor
let x = 0;
let y = 0;
let debug = true;
let score = 50;//sets the start score at 50 
let img;
 
function preload(){ //loads image 
  img = loadImage ('https://kateehartmann.github.io/creative-coding/unit3/3.2.follower/pacman-ghost-3.png');
}



function setup() {
  createCanvas(800, 800);

  x = random(width);// starts ball at a random location
  y = random(height);
}

function draw() {
  background(50,200,80); //background color is green

//distance formula
  let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

  //makes the ball move
  x += xspeed;
  y += yspeed

  //draw the image 
  image(img, x, y, 50,50); //draw the image at 0,0



  //follows the mouse to the right 
  if (mouseX > x){
    xspeed = speedfactor;

//follows the mouse to the left
  }else{
    xspeed= -speedfactor;
  }

  //follows the mouse upward
  if (mouseY > y){
    yspeed = speedfactor;

    //follows the mouse downward
  }else{
    yspeed = -speedfactor;
  }



if (d < 25){ //says what happens if the distance between the ball and mouse is less than 25 
  score -= 1; //decreases the score by one 
  x = random(width); //resets ball to a random x value 
  y = random(height); //resets ball to a random y value 

}

  if (debug){ 
  textSize(30);
  text("score: " + score, 50, 50);// displays score in the top left corner
}
}