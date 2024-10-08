let numDots = 1000; //total number of dots
let dots = []; //hold dot positions
let colors = []; //hold colors

function setup() {
  // create the canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();

  //define colors
  colors.push(color(255,204,0))//yellow
  colors.push(color(0,204,255))//blue
  colors.push(color(255,100,200))//pink
  colors.push(color(0,255,0))//green

  //place random dots in each section
  for (let i = 0; i< numDots; i++){
    let area = floor(random(4)); //randomly choose an area
    let x, y;
    
    switch(area){
      case 0: //(full canvas)
      x = random(0,400);
      y = random(0,400); // place dots randomly across entire canvas
      break;

      case 1: //small portion of canvas
      x = random(0,400);
      y = random(0,400); //place dots randomly across small portion of canvas
      break;

      case 2: //smallest portion of canvas
      x = random(90,310);
      y = random(90,310);// place dots randomly in smallest portion of canvas
      break;

      case 3: //smaller portion of canvas
      x = random(50,350);
      y = random(50,350); // place dots randomly in smaller portion of canvas
      break;
    }
    dots.push({position: createVector(x ,y), color: colors[area]});//store position and color
  }
}

function draw() {
background(225) //off white/gray background

//draw dots
for (let dot of dots) {
  fill(dot.color); //fill color for dots
  noStroke(); //no stroke on dots
  ellipse(dot.position.x, dot.position.y, 8, 8);// draw dots
}

}