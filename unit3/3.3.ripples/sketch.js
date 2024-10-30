let ripplex = 0; //x position of ripple
let rippley = 0;// y position of ripple
let diameter = 0; //diameter of ripple

let ripplers = []//create array for ripplers

class Rippler {
  constructor (x,y){
    this.x = x,
    this.y = y,
    this.d = 0,
    this.maxDiameter = random(100,200)
  }

  draw(){
    this.d += 1; //increase the diameter of the ripple
    stroke("gray"); //stroke of ripple color
    strokeWeight(5);// stroke of ripple thickness
    noFill(); //no color in the middle of the ripple
    circle(this.x, this.y, this.d);

  }
}

function setup() {
  createCanvas(600, 600); //creates a 600 by 600 canvas
}

function draw() {
  background(0,100,150); // sets background color to a bluegreenish pond color

  stroke("gray"); //stroke of ripple color
  strokeWeight(5);// stroke of ripple thickness
  noFill(); //no color in the middle of the ripple

  for (let i = 0; i < ripplers.length; i++){
    ripplers[i].draw();
  }

  

}

function mousePressed() { //create 5 ripples with each click 
let numRipples = 5; //number of ripples to create
for (let i = 0; i < numRipples; i++) {

  ripplers.push(new Rippler(mouseX, mouseY));
}
}