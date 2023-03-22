// This variable stores the "Click to Color" button
let buttonOne = document.getElementById('click-button');

// This variable stores the "Scroll to Color" button
let buttonTwo = document.getElementById('scroll-button');

// This variable stores the "Key to Color" button
let buttonThree = document.getElementById('key-button');

// Variable for Reset button
let buttonReset = document.getElementById("reset-button");

// This random number function will create color codes for the randomColor variable
function colorValue() {
    return Math.floor(Math.random() * 256);
}

function colorChange(event) {
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.backgroundColor = randomColor;

}

function reset(){
    buttonOne.style.backgroundColor = "#141c3a"; 
    buttonTwo.style.backgroundColor = "#141c3a"; 
    buttonThree.style.backgroundColor = "#141c3a"; 
}

buttonOne.onclick = colorChange;
buttonTwo.onwheel = colorChange;
buttonThree.addEventListener('keydown', colorChange);
buttonReset.onclick = reset;
