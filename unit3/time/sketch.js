//while time is more than just the hours, seconds, and minutes
//that pass, i wanted to make something that is defined only by
//those things. There are three bars that rise. the left one is 
//seconds, the middle is minutes, and the right is hours. each 
//resets when it hits zero, so the hour bar resets at 12am.
//I like this because when i think about what time is too hard
//it hurts my brain, so i wanted it to be simple.


//UPDATE! after hearing i could resubmit this for maybe an extra point and a half, 
//I decided it would be fun to put a background behind the bars! 
//Since I have an upcoming trip to New York, I was drawn to the cityscape! 
//The images change during the day, sunrise, and sunset. 
//this took a minute to figure out, but I think it looks pretty cool. 

let secondBarHeight = 0; //set start height for second bar
let minuteBarHeight = 0; //set start height for minute bar 
let hourBarHeight = 0; //set start height for hour bar 
let backgroundImage;
let sunrise, sunset, daytime, nightime;


function preload(){//load images
  sunrise = loadImage('https://kateehartmann.github.io/creative-coding/unit3/time/sunrise-over-skyline-stockcake.jpg');
  sunset = loadImage('https://kateehartmann.github.io/creative-coding/unit3/time/sunset-city-reflection-stockcake.jpg');
  daytime = loadImage('https://kateehartmann.github.io/creative-coding/unit3/time/skyscraper-horizon-city-architecture-thumb.jpg');
  nightime = loadImage('https://kateehartmann.github.io/creative-coding/unit3/time/nighttime-cityscape-illumination-stockcake.jpg')
}

function setup() {
  createCanvas(800, 800); //set canvas size to 800 x 800
  noStroke(); //set no stroke to entire thing

}

function draw() { //background image based on the current time 
  
  if(hour()>= 6 && hour()<=7){
    backgroundImage = sunrise;
  }else if(hour()> 7 && hour()<= 18){
    backgroundImage = daytime;
  }else if (hour()> 18 && hour()<=19){
    backgroundImage = sunset;
  }else{
    backgroundImage = nightime;
  }

  image(backgroundImage, 0, 0, width, height);


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
  rect(400, height - minuteBarHeight - 50, 50, minuteBarHeight); //draw the minute bar

  fill(255, 164, 71);//orange
  rect(700, height - hourBarHeight - 50, 50, hourBarHeight); //draw the hour bar
}

