let img;

function preLoad(){ //load background image
  img = loadImage('https://kateehartmann.github.io/creative-coding/unit1/1.2.ransom-letter/hands-paper.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(img);
 
}