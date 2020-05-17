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

// loop through all the divs
for(let i = 0, n = squares.length; i < n; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners
    squares[i].addEventListener('click', function(){
        // get color of clicked square
        let clickedColor = this.style.backgroundColor;
        // compare with picked color
        if(clickedColor === pickedColor){
            alert('correct!');
        }else{
            alert('wrong!');
        }
    })
}