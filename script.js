console.log('reading js');
var l, a, i;
var colors = ["#DBE12F",
         "#96D5CE",
         "#FBB040",
         "#CBEAED",
         "#EBE95C",
         "#F1Ea67"];
// var colors = ['249, 190, 131', '247, 155, 119', '244, 124, 108', '232, 97, 104', '212, 73, 98', '193, 58, 99)'];

function setup() {
  // variables initialization
  l = 0;
  a = 250;

  // background(#ffffff);
  strokeWeight(3);

  //size is createCanvas in P5
  // create a variable to reference the canvas
  var myCanvas = createCanvas(800, 250);
  // connect my Canvas to mySketch
  myCanvas.parent("mySketch");
}

function draw() {
  //transparent rectangle for fading
  fill(2,85,167,2); // this is correct
  rect(-1,-1,802,255);




  // update the index value
  i = Math.floor(mouseX/160); // Math.floor truncates the decimal
  console.log('i is: ' + i);
  stroke(colors[i]);
  line(mouseX,a,pmouseX,l)

}


// /* 01/12/19 */
// // Move the mouse quickly to see the difference
// // between the current and previous position
// // color change
// color[] colors = {#F8BD82, #F79A76, #F47C6C, #E86269, #D44962, #C03A63};
//
// int l,a;
//
//
// void setup(){
// l=0;
// a=250;
// size(800,250);
// background(#ffffff);
// frameRate(60);
// }
//
// void draw() {
// fill(255,255,255,2);
// rect(-1,-1,801,256);
// strokeWeight(3);
// stroke(colors[mouseX/160]);
// line(mouseX, a, pmouseX, l);
//
// }
