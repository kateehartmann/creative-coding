//I decided for this project, I wanted the result to be something fun to look at,
//or something to relax my brain, since finals have been so stressful. I began 
//working on this and just wanted to keep going! I kept thinking of ways to make it 
//more and more interactive! The original idea was to just make the user able to 
//pick a shape and flip through a ton of colors, with the hex code displayed at the 
//bottom of the screen. I began thinking about how cool it would be to be able to use
//one color to begin and find another color to match it, so I added the feature
//that allows you to search a color by hex code. Then I decided to make the background 
//color changebale too, and got stuck thinking about how i could differentiate which
//hex code was for which color,so I added the text box to the top left corner, with 
//a list of hex codes, as well as instructions on all the interactive elements on this webpage.
// I then decided to add the ability to change the stroke color. 
//When I was first designing this, I remembered one episode of a TV show called Gameshakers 
//(I probably saw this when i was 12 or so). The girl is into coding and has created a 
//game that simply features a narwhal on the screen. She can change the color of the 
//narwhal by clicking the screen. Her friend asked her "why do you always play with that
//stupid narwhal?" and she says "it soothes me" and that was kind of my goal when making this.
//I just wanted something that would be soothing and useful.
//I think I achieved my goal with this project. It became a lot more complex as I worked,
//because I kept thinking of ways to make it better, and realized I was able to incorporate a
//lot of what i learned this semester. 
//I think this project could be extrememly useful as well. It started as something fun.
//but having the ability to randomly pair colors together like this, or pair together colors
//you already know the hex code of, is helpful when doing a lot of things. Some examples 
//I can think of are creating branding, picking out colors for a creative coding project, 
//trtying to paint a house, and designing clothes. 

let circleColor = "#ADD8E6";//start color 
let currentShape = "circle";//start shape
let backgroundColor = "#D3D3D3"; //start background color 
let strokeColor = "#000000";

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(backgroundColor);

  fill("white");
  stroke("black");
  strokeWeight(1);
  rectMode(CENTER);
  rect(125,120,230,220);

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
  text(`click s: change border color`, 20, 130);  

  fill("black");
  noStroke();
  textSize(12);
  text(`click c: type in hex code for shape`, 20, 150);

  fill("black");
  noStroke();
  textSize(12);
  text(`click p: type in hex code for background`, 20, 170);

  fill("black");
  noStroke();
  textSize(12);
  text(`click r: type in hex code for border`, 20, 190);

  fill("black");
  noStroke();
  textSize(12);
  text(`click spacebar: change shape`, 20, 210);



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

  else if (key === "c" || key === "C"){ //pressing "c" or "C" lets you pick your own color for the shape
    let userColor = prompt("ChOoSe YoUr OwN CoLoR: ");
    if (userColor && /^#[0-9A-Fa-f]{6}$/.test(userColor)) { //makes sure you enter a valid hex code
      circleColor = userColor;
    } else {
      alert("ThAt DoEsN't SeEm rIgHt. ChEcK fOr TyPoS & tRy AgAiN");
  }
}

else if (key === "P" || key === "p"){ //pressing "p" or "P" lets you pick your own color for the background
  let userColor = prompt("ChOoSe YoUr OwN CoLoR: ");
  if (userColor && /^#[0-9A-Fa-f]{6}$/.test(userColor)) { //makes sure you enter a valid hex code
    backgroundColor = userColor;
  } else {
    alert("ThAt DoEsN't SeEm rIgHt. ChEcK fOr TyPoS & tRy AgAiN");
}
}

else if (key === "r" || key === "R"){ //pressing "r" or "R" lets you pick your own color for the stroke
  let userColor = prompt("ChOoSe YoUr OwN CoLoR: ");
  if (userColor && /^#[0-9A-Fa-f]{6}$/.test(userColor)) { //makes sure you enter a valid hex code
    strokeColor = userColor;
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


