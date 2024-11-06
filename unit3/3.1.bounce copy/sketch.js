let balls = [];  // array to store all the balls

function setup() {
  createCanvas(400, 400);
  

  balls.push(createBall(random(25, 375), random(25, 375), random(3, 5), random(3, 5)));//add the first ball
}

function draw() {
  background(220);
  
  
  for (let i = 0; i < balls.length; i++) {//loop each ball in teh array
    let ball = balls[i];
    
    ball.x += ball.xspeed;//iterate x
    ball.y += ball.yspeed;//iterate y

    //check for collisions
    if (ball.x < 25 || ball.x > 375) {
      ball.xspeed = -ball.xspeed; //reverse the X direction
      ball.circleColor = randomColor(); //change the color when bouncing
    }

    if (ball.y < 25 || ball.y > 375) {
      ball.yspeed = -ball.yspeed; //reverse the Y direction
      ball.circleColor = randomColor(); //change the color when bouncing
    }

    
    fill(ball.circleColor);//set the fill color

    
    circle(ball.x, ball.y, 50);//draw the ball 
  }
}

function mousePressed() {
  //add a new ball when the mouse is pressed
  balls.push(createBall(random(25, 375), random(25, 375), random(3, 5), random(3, 5)));
}

//function to create new ball 
function createBall(x, y, xspeed, yspeed) {
  return {
    x: x,
    y: y,
    xspeed: xspeed,
    yspeed: yspeed,
    circleColor: randomColor(),//random initial color
  };
}

//function to make balls random color when they bounce off the walls 
function randomColor() {
  return color(random(0, 255), random(0, 255), random(0, 255));
}
