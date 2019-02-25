console.log('reading js');
'use strict';

var phoToppins = 0;
var phoPlate = document.querySelector('#pho');
var resetAll = document.querySelector('#resetAll');


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (phoToppins >= 3) {
        resetAll.style.display='block';
        return;
    }
    phoPlate.appendChild(document.getElementById(data));
    phoToppins++;
}

resetAll.addEventListener('click', function () {
    window.location.reload();
})
