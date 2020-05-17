// TODO: create a random color
let colors = generateRandomColors(6);
// select all the div with class of square
let squares = document.querySelectorAll(".square");

// picked color
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;

// message to display
let messageDisplay = document.querySelector("#messageDisplay");
// select h1
let h1 = document.querySelector("h1");

// loop through all the divs
for (let i = 0, n = squares.length; i < n; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners
  squares[i].addEventListener("click", function () {
    // get color of clicked square
    let clickedColor = this.style.backgroundColor;
    // compare with picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(pickedColor);
      h1.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

// change all colors if picked color is correct
function changeColors(color) {
  // loop through squares
  for (let i = 0, n = squares.length; i < n; i++) {
    // change color of the squares to the picked color
    squares[i].style.backgroundColor = color;
  }
}

// randomly pick color
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// generate array of random colors
function generateRandomColors(num) {
  // make an array
  let arr = [];
  // repeat num times
  for (let i = 0; i < num; i++) {
    // add random color to array
    arr.push(randomColor());
  }

  // return array
  return arr;
}

// generate random color
function randomColor() {
  // randomly select red. 0-255.
  let r = Math.floor(Math.random() * 256);
  // randomly select green. 0-255.
  let g = Math.floor(Math.random() * 256);
  // randomly select blue. 0-255.
  let b = Math.floor(Math.random() * 256);
  // return random color
  return `rgb(${r}, ${g}, ${b})`;
}
