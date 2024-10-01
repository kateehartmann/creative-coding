function setup() {
  // create a canvas
  createCanvas(400, 400);
  angleMode(DEGREES)

  // disable animation
  noLoop();
}

function draw() {
  background(220);

  //color of the stroke around head
  stroke("gold");
  //thickness of the stroke around head
  strokeWeight(6);
  //color of the head
  fill("yellow");
  //makes the main circle(head)
  ellipse(200,200,250,250);

  //stroke around left eye
strokeWeight(0);
//color of left eye 
fill("goldenrod");
//shape of left eye 
  ellipse(170,170,25,35)

  //stroke around right eye 
  strokeWeight(0);
  //color of right eye
  fill("goldenrod");
  //shape of right eye 
  ellipse(230,170,25,35)

  //color of upper lip
  stroke("goldenrod");
  //thickness of upper lip
  strokeWeight(4);
  noFill();
  //shape of upper lip
  arc(200,230,50,21,-90,90);

  //color of lower lip
  stroke("goldenrod");
  //thickness of lower lip
  strokeWeight(4);
  noFill();
  //shape of lower lip
  arc(200,250,50,21,-90,90);

  rectMode(CENTER);
 
}