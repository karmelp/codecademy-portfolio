var seconds = 36784545;
var el = document.querySelector('#seconds-counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = seconds;
}

var cancel = setInterval(incrementSeconds, 1000);


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}