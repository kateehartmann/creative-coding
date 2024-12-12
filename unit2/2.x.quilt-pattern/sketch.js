function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}

function draw() {
  background(220);
  //move grid away from the side of the canvas
  translate(100,100);
  for (let x=0;x<8; x++){
    for (let y=0;y<8; y++){
      push();
      translate( x * 100, y * 100);

      //circle color
      fill(158,217,177);

      //no stroke
      noStroke();

      //draw squares
      rect(0,0,100,100);

      pop()
    }
  }
}