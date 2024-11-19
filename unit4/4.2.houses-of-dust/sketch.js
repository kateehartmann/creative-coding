let quatrain = '';

let grammar = tracery.createGrammar(
  {
"material": [
  "SAND",
  "DUST",
  "LEAVES",
  "PAPER",
  "TIN",
  "ROOTS",
  "BRICK",
  "BROKEN DISHES",
  "WOOD",
  "STRAW",
  "WEEDS"
],
"light":[
  "using electricity",
  "with candles",
],
"location":[
  "by the river",
  "near the school",
  "in a parking lot",
  "on a cliff",
  "under a bridge",
  "underwater"
],

"origin": "A HOUSE OF #material# #light# #location#"
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