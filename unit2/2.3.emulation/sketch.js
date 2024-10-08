let numDots = 2000; //total number of dots
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
  colors.push(color(0,204,255))//blue
  colors.push(color(255,100,200))//pink
  colors.push(color(255,100,200))//pink
  colors.push(color(0,255,0))//green
  colors.push(color(255,204,0))//yellow
  colors.push(color(255,204,0))//yellow
  colors.push(color(255,204,0))//yellow

  //place random dots in each section
  for (let i = 0; i< numDots; i++){
    let area = floor(random(8)); //randomly choose an area
    let x, y;
    
    switch(area){
      case 0: //top yellow section
      x = random(0,400);
      y = random(0,65); // place dots randomly across entire canvas
      break;

      case 1: //blue section
      x = random(0,400);
      y = random(0,400); //place dots randomly across small portion of canvas
      break;

      case 2://pink section
      x = random(100,300);
      y = random(100,300);// place dots randomly in smallest portion of canvas
      break;

      case 3://pink section
      x = random(50,350);
      y = random(50,350);
      break;

      case 4: //green section
      x = random(50,350);
      y = random(50,350); // place dots randomly in smaller portion of canvas
      break;

      case 5: //left yellow section
      x= random(0,65); 
      y= random(65,335);
      break;
      
      case 6://bottom yellow section
      x = random(0,400);
      y = random(335,400);
      break;

      case 7://right yellow section
      x = random(335,400);
      y = random(50,350);
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