'use strict'
console.log('reading js');
// global variables
var sec1= document.querySelector('#sec1');
var sec2= document.querySelector('#sec2');
var sec3= document.querySelector('#sec3');

var box=document.querySelector('#box');
var des2=document.querySelector('#des2');
var des3=document.querySelector('#des3');

var close=document.querySelector('#close');
var close2=document.querySelector('#close2');
var close3=document.querySelector('#close3');

/* prompt2: call the addEventListener method on charlieTh to bind click event handler that invokes an anonymous function to show the overlay
*/
sec1.addEventListener('click',function(){
  box.style.display="block";
  // des.style.display="block";
});
sec2.addEventListener('click',function(){
  console.log('sec2 clicked');
  box2.style.display="block";
  // des2.style.display="block";
});
sec3.addEventListener('click',function(){
  box3.style.display="block";
  // des3.style.display="block";
});
/* prompt3: /* call the addEventListener method on close to bind click event handler that invokes to an anonymous callback function that changes the display of overlay to none
*/
close.addEventListener('click',function(){
  box.style.display="none"
}, false);

close2.addEventListener('click',function(){
  box2.style.display="none"
}, false);

close3.addEventListener('click',function(){
  box3.style.display="none"
}, false);
