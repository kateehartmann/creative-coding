//I made alot of significant advancements on this assignment.
//there is now a variety of colors for the dots to choose from, and the size
//of the dots is random with each generation. The stroke size
//is also random within a certain range with each generation. 
//I also gave the background a better color.
//overall, this version is much more visually appealing and has more complexity to it. 

function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}

function draw() {
  background(255, 255, 153);//yellow background
  //move grid away from the side of the canvas
  translate(100,100);
  for (let x=0;x<8; x++){
    for (let y=0;y<8; y++){
      push();
      translate( x * 140, y * 140);

      let r = random(200,255);//make sure the fill color is 
      let g = random (50,150);//only using pinks and purples
      let b = random(150,255);
      //circle color
      fill(r, g, b);

      //stroke color
      stroke(0, 150, 250);

      //stroke size
      strokeWeight(random(5,10));

      //draw circles
      circle(0, 0, random(40,100));

      pop()
    }
  }
}