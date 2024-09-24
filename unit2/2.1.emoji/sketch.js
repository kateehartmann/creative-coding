function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(220);

  stroke("gold");
  strokeWeight(6);
  fill("yellow");

  ellipse(200,200,250,250);

  rectMode(CENTER);
 
}