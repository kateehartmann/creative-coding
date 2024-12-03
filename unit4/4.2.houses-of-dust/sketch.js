let quatrain = '';

let grammar = tracery.createGrammar(
  {
"material": [
  "legos",
  "blocks",
  "sticks",
  "bricks",
  "straw",
  "candy",
  "gingerbread",
  "paper",
  "cardboard",
  "blankets",
  "pillows",
  "wood",
  "steel",
  "cotton balls",
  "flowers",
  "cake",
  "cookies"
],
"light":[
  "using a fireplace",
  "with windows",
  "with harsh lights",
  "with fairy lights",
  "lit by a christmas tree",
  "with jack-o-lanterns",
  "on fire",
  "using floating candles",
  "with electricity",
  "using LED lights",
  "with flashlights",
  "lit by the moon",
  "with no lights",
  "with 100 lamps",
  
],
"location":[
  "by the river",
  "near the school",
  "in a parking lot",
  "on a cliff",
  "under a bridge",
  "underwater",
  "on a hill",
  "in a closet",
  "at UMW",
  "in Fredericksburg",
  "in Chesapeake",
  "near the beach",
  "in China",
  "in the woods",
  "in a tree",
  "on a boat",
  "in my moms backyard",
  "in another house",
  "on an island"
],

"origin": "a house of #material# \n   #light# \n      #location# "
});

quatrain = grammar.flatten("#origin#");

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(220);

  textSize(40);
  text(quatrain, 50, 50);
}