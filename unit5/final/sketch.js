//I decided to make a color matching website, where you can try to put 
//two colors together! it also shows the hex code for the colors so you 
//can find them on other softwares, like Canva! you can also insert a certain
//color you already have the code for. 
//as an added bonus, there are a few other features. you can change the 
//shape to a triangle or square. 

let circleColor = "#ADD8E6";//start color 
let currentShape = "circle";//start shape
let backgroundColor = "#D3D3D3"; //start background color 
let strokeColor = "black"

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(backgroundColor);

  fill("white");
  stroke("black");
  strokeWeight(1);
  rectMode(CENTER);
  rect(105,85,190,150);

  fill("black");//write text that shows the color code 
  noStroke();
  textSize(12);//text size for color code
  text(`shape color: ${circleColor}`, 20, 30); 

  fill("black");//write the background color code
  noStroke();
  textSize(12);
  text(`background color: ${backgroundColor}`, 20, 50);

  fill("black"); //write the text that shows the stroke color code 
  noStroke();
  textSize(12);
  text(`border color: ${strokeColor}`, 20, 70);

  fill("black");
  noStroke();
  textSize(12);
  text(`click mouse: change shape color`, 20, 90);

  fill("black");
  noStroke();
  textSize(12);
  text(`click b: change background color`, 20, 110);

  fill("black");
  noStroke();
  textSize(12);
  text(`click c: type in hex code`, 20, 130);

  fill("black");
  noStroke();
  textSize(12);
  text(`click spacebar: change shape`, 20, 150);
  


  if (currentShape === "circle"){
    fill(circleColor);
    strokeWeight(10);
    stroke(strokeColor);
    ellipse(400,400,400,400);
  }else if (currentShape === "square") {
    fill(circleColor);
    strokeWeight(10);
    stroke(strokeColor);
    rectMode(CENTER);
    rect(400,400,400,400);
  }else if (currentShape === "triangle") {
    fill(circleColor);
    strokeWeight(10);
    stroke(strokeColor);
    triangle (200, 600, 400, 200, 600, 600);
  }else if (currentShape === "diamond"){
    fill(circleColor);
    strokeWeight(10);
    stroke(strokeColor);
    quad(400,200,600,400,400,600,200,400);
  }else if (currentShape === "trapezoid"){
    fill(circleColor);
    strokeWeight(10);
    stroke(strokeColor);
    quad(300,300,500,300,600,500,200,500);
  }else if (currentShape === "rhombus"){
    fill (circleColor);
    strokeWeight(10);
    stroke(strokeColor);
    quad(250,275,650,275,550,525,150,525);
  }
}

function mousePressed() { //change circle color when mouse is pressed
  let r = int(random(255)); //generate random r color value when mouse is pressed
  let g = int(random(255));
  let b = int(random(255));
  circleColor = "#" + hex(r, 2) + hex(g, 2) + hex(b, 2); //convert RGB color to hex color
}

function keyPressed(){ //function to change the shape when the space bar is pressed
  if (key === " "){

    if (currentShape === "circle") {
      currentShape = "square"; 
    }else if (currentShape === "square"){
      currentShape = "triangle";
      } else if (currentShape === "triangle"){
        currentShape = "diamond";
      }else if (currentShape === "diamond"){
        currentShape = "trapezoid";
      }else if (currentShape === "trapezoid"){
        currentShape = "rhombus";
      }else if (currentShape === "rhombus"){
        currentShape = "circle";
      }
  }

  else if (key === "c" || key === "C"){ //pressing "c" or "C" lets you pick your own color
    let userColor = prompt("ChOoSe YoUr OwN CoLoR: ");
    if (userColor && /^#[0-9A-Fa-f]{6}$/.test(userColor)) { //makes sure you enter a valid hex code
      circleColor = userColor;
    } else {
      alert("ThAt DoEsN't SeEm rIgHt. ChEcK fOr TyPoS & tRy AgAiN");
  }
}

else if(key === "b" || key === "B"){ //changed background color when pressing "b" or "B"
  let r = int(random(255)); //generate random r color value when mouse is pressed
  let g = int(random(255));
  let b = int(random(255));
  backgroundColor = "#" + hex(r, 2) + hex(g, 2) + hex(b, 2); //convert RGB color to hex color
}

else if (key === "s" || key === "S"){ //change stroke color by pressing "s" or "S"
  let r = int(random(255)); //generate random r color value when mouse is pressed
  let g = int(random(255));
  let b = int(random(255));
  strokeColor = "#" + hex(r, 2) + hex(g, 2) + hex(b, 2); //convert RGB color to hex color
}

}


