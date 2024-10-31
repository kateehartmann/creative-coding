function setup() {

  // create the canvas
  createCanvas(800, 800);

  noLoop();
  
}

function draw() {
  background(50,50,80);

  drawPineTree(random(0,800), 400);//draws a pine tree created in the drawPineTree function
  drawPineTree(random(0,800), 400);//draws a pine tree created in the drawPineTree function
  drawPineTree(random(0,800), 400);//draws a pine tree created in the drawPineTree function
  drawPineTree(random(0,800), 400);//draws a pine tree created in the drawPineTree function
  

  fill(0,100,0);//make grass green
  noStroke();//make grass have no stroke
  circle(400,2200,3500);//draw grass

  fill("black");//make road black
  rect(0,600,800,200);//draw road

  fill("yellow");//make lines yellow
  rect(0, 700, 50,20);//draw yellow lines

  fill("yellow");//make lines yellow
  rect(100, 700, 50,20);//draw yellow lines

  fill("yellow");//make lines yellow
  rect(200, 700, 50,20);//draw yellow lines
  
  fill("yellow");//make lines yellow
  rect(300, 700, 50,20);//draw yellow lines

  fill("yellow");//make lines yellow
  rect(400, 700, 50,20);//draw yellow lines

  fill("yellow");//make lines yellow
  rect(500, 700, 50,20);//draw yellow lines

  fill("yellow");//make lines yellow
  rect(600, 700, 50,20);//draw yellow lines

  fill("yellow");//make lines yellow
  rect(700, 700, 50,20);//draw yellow lines

  fill(255,255,200);
  circle(random(0,800), random(0,100), 50);

  
}

function drawPineTree(x, y) {//funtion to draw the pine trees
  
  fill(139, 69, 19); //make trunk brown
  rect(x - 15, y, 30, 100); //draw trunk

  fill(34, 139, 34);//make leaves green
  triangle(x - 60, y, x, y - 100, x + 60, y); // bottom triangle
  triangle(x - 40, y - 50, x, y - 150, x + 40, y - 50); // middle triangle
  triangle(x - 20, y - 100, x, y - 200, x + 20, y - 100); // top triangle
}

