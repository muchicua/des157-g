'use strict'
console.log('reading js');
// global variables
var sec1= document.querySelector('#sec1');
var sec2= document.querySelector('#sec2');
var sec3= document.querySelector('#sec3');
var box=document.querySelector('#box');
var box2=document.querySelector('#box2');
var box3=document.querySelector('#box3');
var close=document.querySelector('#close');

/* prompt2: call the addEventListener method on charlieTh to bind click event handler that invokes an anonymous function to show the overlay
*/
sec1.addEventListener('click',function(){
  box.style.display="block";
  des.style.display="block";
});
sec2.addEventListener('click',function(){
  box2.style.display="block";
  des2.style.display="block";
});
sec3.addEventListener('click',function(){
  box3.style.display="block";
  des3.style.display="block";
});
/* prompt3: /* call the addEventListener method on close to bind click event handler that invokes to an anonymous callback function that changes the display of overlay to none
*/
close.addEventListener('click',function(){
  box.style.display="none"
}, false);
