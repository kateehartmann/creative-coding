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

strokeWeight(0);
fill("goldenrod");
  ellipse(170,170,25,35)

  strokeWeight(0);
  fill("goldenrod");
  ellipse(230,170,25,35)

  strokeWeight(4);
fill("goldenrod");
  arc(200,200,25,35);

  rectMode(CENTER);
 
}