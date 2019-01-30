'use strict';

console.log('reading js');
/*capture the submit event with an event listener for onclick and a callback function of processForm
*/
document.querySelector('form').addEventListener('submit', processForm);
document.querySelector('#r').addEventListener('click', resetForm);

  //define process function
  function processForm(evt) {
  // capture html form inputs
  var noun = document.querySelector('#noun').value;
  var emotion = document.querySelector('#emotion').value;
  var name = document.querySelector('#name').value;
  var mountain = document.querySelector('#mountain').value;
  var noun2 = document.querySelector('#noun2').value;
  var number = document.querySelector('#number').value;
  var noun3 = document.querySelector('#noun3').value;
  var body = document.querySelector('#body').value;
  var sameName = document.querySelector('#sameName').value;


  // caputre myMsg
  var myMsg = document.querySelector('#myMsg');
  var msgSection = document.querySelector('#msgSection');

  //displays the message

  myMsg.innerHTML =
    '<p> Lucky you were born that far away so we could both make fun of <em> ' +
    noun +
    '</em> lucky that I <em>' +
    emotion +
    ' </em> a foreign land for the lucky fact of your existence. <em> '+
    name+
    ' </em> I would climb the <em> '+
    mountain +
    ' </em> solely to count the freckles on your <em> '+
    noun2 +
    ' </em> Never could imagine there were only <em> '+
    number +
    ' </em> million ways to love somebody. Whenever, wherever we were meant to be <em> '+
    noun3 +
    ' </em> I will be there and you will be near and that is the deal my dear there over, hereunder you have got me <em> '+
    body +
    ' </em> over heels, there is nothing left to fear if <em> '+
    sameName +
    ' </em> really feels the way I feel... </p>';

  msgSection.className = 'show';

  // prevent the page from reloading, which is the default behavior of a submit button
  evt.preventDefault();
  return false;
}

function resetForm() {
  msgSection.className = 'hide';
}
