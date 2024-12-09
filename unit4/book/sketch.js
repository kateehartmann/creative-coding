/*

This is a p5.js sketch that creates a book by repeating some
word 50000 times, with punctuation and organization added so 
that it looks more like a real book.

You are welcome to use this template to make your own 
repetion-based computer-generated book.

What I Have Done:
 - chosen a word to repeat: quack
 - written the code that repeats that word an arbitrary number of 
   times, along with punctuation.
  
What You Should Do:
 - choose a different word. Animals sounds and screams have already
   been done. 
 - tweak the book layout options so it looks good.
 - take a look through the code below, which is written in a fairly
   verbose way so that you can adjust any aspect you need to. 
*/

//I chose to use the word "fire" because the way the words repeat, it reminds me of an echo. 
//At the summer camp I work at, I always lead the song "Ole Miss Oleary", which is a song 
//about the cow that started the great chicago fire. At the end of the song, we yell 
//"FIRE, FIRE, FIRE" as loud as possible. The campfire circle where we sing this song is 
//along the edge of the lake, so we can always hear the word fire echoing across the lake. 

let word = "fire"; //word that is repreated throughout the entire book
let wc = 0; 

function setup() {
  // We won't need any canvas
  noCanvas();

  let content = select("body");
  content.attribute("id","content");
  
  content.child(createElement("h1","Fire Burns Forever")); //header with title of the book 
  
  // make a sentence
  while( wc < 50000){//loop to generate content until the word count reaches 50,000
    content.child(createElement("h2",String(word+" ").repeat(random(2,6)).toUpperCase()));//create subheader 
    
    for (let p = 0; p < random(5,20); p++){ //loop that creates paragraphs
      let paragraph = '';
      for (let s = 0; s < random(3,20); s++){ //create sentences in paragraphs
        let internalPunct = [",",",",",",";"," --"]; //puntucation inside of sentences
        let endPunct = [".",".","?","!"]; //punctuation at the end of sentences 
        let sentence = word.charAt(0).toUpperCase() + word.slice(1); //capitalize first letter
        let sentenceLength = random(9,25); //random length of sentences between 9 and 25 words
        wc += sentenceLength + 1;
        for (let w = 0; w < sentenceLength; w++){
          sentence += " " + word; //add the word to the sentence
          if (random() < 0.2){  //randomly add punctuation in the sentence
            sentence += random(internalPunct);
          }
        }
        sentence += random(endPunct) + " "; //add an ending punctuation mark and space
        paragraph += sentence; //add sentence to paragraph
      }
      content.child(createElement("p",paragraph)); //add a paragraph element with the generated text
    }
  }
  
 // trigger the polyfill rendering
 window.PagedPolyfill.preview();
}