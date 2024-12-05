function setup() {
  // create a canvas
  createCanvas(800, 800);
  angleMode(DEGREES)

  // disable animation
  noLoop();
}

function draw() {
  background(220);

  //smiley face

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

  stroke("goldenrod")
  //thickness of stroke around mouth 
  strokeWeight (5);
  noFill(0);
  arc(200, 220, 150, 100, 20, 160);

//angel face

    //color of the stroke around head
    stroke("gold");
    //thickness of the stroke around head
    strokeWeight(6);
    //color of the head
    fill("yellow");
    //makes the main circle(head)
    ellipse(600,200,250,250);

//color of stroke
stroke("goldenrod")    
 //stroke around left eye
strokeWeight(4);
//color of left eye 
fill("goldenrod");
//shape of left eye 
arc(565, 190, 20, 100, 190, 340);

//color of stroke
stroke("goldenrod")    
 //stroke around left eye
strokeWeight(4);
//color of left eye 
fill("goldenrod");
//shape of left eye 
arc(625, 190, 20, 100, 190, 340);

stroke("goldenrod")
//thickness of stroke around mouth 
strokeWeight (5);
noFill(0);
arc(600, 220, 150, 100, 20, 160);

stroke("dodgerblue");
strokeWeight(10);
ellipse(600, 90, 270, 50);


//eyes emoji

strokeWeight(1);//left eye
stroke("slategray");
fill("ivory");
ellipse(300, 600, 120, 250);

strokeWeight(1);//right eye
stroke("slategray");
fill("ivory");
ellipse(450, 600, 120, 250);

noStroke(0);//brown part of left eye
fill("saddlebrown");
ellipse(275, 600, 70,70);

noStroke(0); //brown part of right eye
fill("saddlebrown");
ellipse(425, 600, 70,70);

noStroke(0); //black part of left eye
fill("black");
ellipse(275, 600, 50, 50);

noStroke(0); //black part of right eye
fill("black");
ellipse(425, 600, 50, 50);

noStroke(0); //white dot on left eye
fill("ivory");
ellipse(265, 580, 20, 20);

noStroke(0); //white dot on right eye
fill("ivory");
ellipse(415, 580, 20, 20);

  rectMode(CENTER);
 
}