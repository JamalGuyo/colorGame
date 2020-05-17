// TODO: create a random color
let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
];
// select all the div with class of square
let squares = document.querySelectorAll('.square');

// picked color
let pickedColor = colors[3];
let colorDisplay = document.querySelector('#colorDisplay');
colorDisplay.textContent = pickedColor;

// loop through all the divs. assign the colors to the div
for(let i = 0, n = squares.length; i < n; i++){
    squares[i].style.backgroundColor = colors[i];
}