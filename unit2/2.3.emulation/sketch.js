let numDots = 3000; //total number of dots
let dots = []; //hold dot positions
let colors = []; //hold colors

function setup() {
  //This is an attempt to emulate Number 2 Serie 1.1-6, a work by Frieder Nake
  //https://spalterdigital.com/artworks/number-2-serie-1-1-6/
  //I watched all of the p5.js tutorial videos on youtube plus the map() video, as well as
  //https://www.youtube.com/watch?v=cxppa6dNzxE this video on the switch function, which was 
  //long, but also extremely helpful
  // create the canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();

  //define colors
  colors.push(color(255,204,0))//yellow
  colors.push(color(25,150,255))//blue
  colors.push(color(220,60,130))//pink
  colors.push(color(220,60,130))//pink
  colors.push(color(1,100,32))//green
  colors.push(color(255,204,0))//yellow
  colors.push(color(255,204,0))//yellow
  colors.push(color(255,204,0))//yellow
  colors.push(color(25,150,255))//blue
  colors.push(color(25,150,255))//blue
  colors.push(color(25,150,255))//blue
  colors.push(color(1,100,32))//green

  //place random dots in each section
  for (let i = 0; i< numDots; i++){
    let area = floor(random(12)); //randomly choose an area
    let x, y, r;
    
    switch(area){
      case 0: //top yellow section
      x = random(0,400);
      y = random(0,65); // place dots randomly across entire canvas
      r = 4;
      break;

      case 1: //top blue section
      x = random(0,400);
      y = random(0,125); //place dots randomly across small portion of canvas
      r = random(5,7);
      break;

      case 2://pink section
      x = random(100,300);
      y = random(100,300);
      r = 6;
      break;

      case 3://pink section
      x = random(50,350);
      y = random(50,350);
      r = 6;
      break;

      case 4: // top green section
      x = random(50,350);
      y = random(50,200);
      r = 4
      break;

      case 5: //left yellow section
      x= random(0,65); 
      y= random(65,335);
      r = 4;
      break;
      
      case 6://bottom yellow section
      x = random(0,400);
      y = random(335,400);
      r = 4;
      break;

      case 7://right yellow section
      x = random(335,400);
      y = random(50,350);
      r = 4;
      break;

      case 8://bottom blue section
      x = random(0,400);
      y = random(275,400);
      r = random(5,7);
      break;

      case 9://left blue section
      x = random(0,125);
      y = random(100,300);
      r = 5;
      break;

      case 10:// right blue section
      x = random(275,400);
      y = random(100,300);
      r = 5;
      break;

      case 11: //bottom green section
      x = random(50,350);
      y = random(200,350);
      r = 4;
    break;

    }
    dots.push({position: createVector(x ,y), color: colors[area], size:r });//store position and color
  }
}

function draw() {
background(225) //off white/gray background

//draw dots
for (let dot of dots) {
  fill(dot.color); //fill color for dots
  noStroke(); //no stroke on dots
  ellipse(dot.position.x, dot.position.y, dot.size, dot.size);// draw dots
}

}