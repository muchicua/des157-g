console.log('reading js');
// var l,a;
// var new color [] colors= { rgb(249, 190, 131) , rgb(247, 155, 119), rgb(244, 124, 108), rgb(232, 97, 104), rgb(212, 73, 98), rgb(193, 58, 99)};
function setup(){
  //size is createCanvas in P5
  // create a variable to reference the canvas
  // l=0;
  // a=250;

  var myCanvas = createCanvas(800,250);
  // background(#ffffff);

  // connect my Canvas to mySketch
  myCanvas.parent("MySketch");
}
function draw(){
  // strokeWeight(2);
  // stroke(color[mousex/160]);
  // line(mouseX,a,pmouseX,l)
   fill(113, 204, 98);
   ellipse(mouseX,mouseY,50,50);
}
