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
"inhabitants":[
  "gingerbread men",
  "a family",
  "16 orphans",
  "old people",
  "grandmas",
  "grandpas",
  "Santa Clause and his elves",
  "the Grinch",
  "murderers",
  "beans",
  "pumpkins",
  "zucchinis",
  "friends",
  "Kenzie",
  "people named Kate",
  "horses",
  "alligators",
  "Dr. Whalen",
  "pink ponies",
  "country music singers",

],

"origin": "a house of #material# \n   #light# \n      #location# \n          housing #inhabitants# "
});

quatrain = grammar.flatten("#origin#");

function setup() {
  createCanvas(800, 800);
  frameRate(.1)
}

function draw() {
  background(220);

  textSize(30);

  for(let i = 1; i < 10; i+=3){
  quatrain = grammar.flatten("#origin#");
  text(quatrain, 50, 50);
  }

}