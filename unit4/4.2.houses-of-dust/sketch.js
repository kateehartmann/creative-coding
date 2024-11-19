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
  "pillows"
],
"light":[
  "using a fireplace",
  "with windows",
  "with harsh lights",
  "with fairy lights",
  "lit by a christmas tree",
  "with jack-o-lanterns",
  "on fire",
  "using floating candles"
],
"location":[
  "by the river",
  "near the school",
  "in a parking lot",
  "on a cliff",
  "under a bridge",
  "underwater",
  "on a hill",
  "in a closet"
],

"origin": "a house of #material# \n   #light# \n      #location#"
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