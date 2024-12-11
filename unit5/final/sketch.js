//I had trouble coming up with an idea for this project, but 
//then I decided I wanted to play with colors, so I came up with 
//the idea to make the colors change when pushing certain buttons. 
//Then I realized I could make the background color change to 
//make different color combinations. 
//I also added a feature where you can enter your own hex code 

let circleColor = "#ADD8E6";//start color 
let currentShape = "circle";//start shape
let backgroundColor = "#D3D3D3"; //start background color 

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

  fill("black");
  noStroke();
  textSize(12);
  text(`click mouse: change shape color`, 20, 70);

  fill("black");
  noStroke();
  textSize(12);
  text(`click b: change background color`, 20, 90);

  fill("black");
  noStroke();
  textSize(12);
  text(`click c: type in hex code`, 20, 110);
  


  if (currentShape === "circle"){
    fill(circleColor);
    ellipse(400,400,400,400);
  }else if (currentShape === "square") {
    fill(circleColor);
    rectMode(CENTER);
    rect(400,400,400,400);
  }else if (currentShape === "triangle") {
    fill(circleColor);
    triangle (200, 600, 400, 200, 600, 600);
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
}


