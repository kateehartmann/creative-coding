function setup() {
  // create a canvas
  createCanvas(400, 400);
  angleMode(DEGREES)

  // disable animation
  noLoop();
}

function draw() {
  background(220);

  stroke("gold");
  strokeWeight(6);
  fill("yellow");
  ellipse(200,200,250,250);

strokeWeight(0);
fill("goldenrod");
  ellipse(170,170,25,35)

  strokeWeight(0);
  fill("goldenrod");
  ellipse(230,170,25,35)

  stroke("goldenrod");
  strokeWeight(4);
  noFill();
  arc(200,230,50,21,-90,90);

  stroke("goldenrod");
  strokeWeight(4);
  noFill();
  arc(200,250,50,21,-90,90);

  rectMode(CENTER);
 
}