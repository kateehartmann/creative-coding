//while time is more than just the hours, seconds, and minutes
//that pass, i wanted to make something that is defined only by
//those things. There are three bars that rise. the left one is 
//seconds, the middle is minutes, and the right is hours. each 
//resets when it hits zero, so the hour bar resets at 12am.
//I like this because when i think about what time is too hard
//it hurts my brain, so i wanted it to be simple.

let secondBarHeight = 0; //set start height for second bar
let minuteBarHeight = 0; //set start height for minute bar 
let hourBarHeight = 0; //set start height for hour bar 

function setup() {
  createCanvas(800, 800); //set canvas size to 800 x 800
  noStroke(); //set no stroke to entire thing
}

function draw() {
  background(255,143,160); //set background color to pink

  let currentTime = new Date(); //get the current time
  let seconds = currentTime.getSeconds(); //
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();

  let secondMaxHeight = 600; //max height of the seconds bar
  let minuteMaxHeight = 600; //max height of the seconds bar
  let hourMaxHeight = 600; //max height of the hours bar 

  //scale the time to the height of the bar 
  secondBarHeight = map(seconds, 0, 60, 0, secondMaxHeight); //second bar
  minuteBarHeight = map(minutes, 0, 60, 0, minuteMaxHeight); //minute bar
  hourBarHeight = map(hours, 0, 24, 0, hourMaxHeight); //hour bar

  fill(255, 185, 114); //orange
  rect(100, height - secondBarHeight - 50, 50, secondBarHeight); //draw the second bar

  fill (255, 203, 210); //pink
  rect(200, height - minuteBarHeight - 50, 50, minuteBarHeight); //draw the minute bar

  fill(255, 164, 71);//orange
  rect(300, height - hourBarHeight - 50, 50, hourBarHeight); //draw the hour bar
}

