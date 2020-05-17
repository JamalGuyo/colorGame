let numSquares = 6;
// create a random color
let colors = generateRandomColors(numSquares);

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

// easy and hard btn
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", () => {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  // generate 3 colors
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  // pick color
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", () => {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  // generate 6 colors
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  // pick color
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

// reset button
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  // reset background of h1
  h1.style.backgroundColor = "#232323";
  // reset messageDisplay to default
  messageDisplay.textContent = "";
  // reset button text
  resetButton.textContent = "New Colors";
  // generate new random colors
  colors = generateRandomColors(numSquares);
  // pick new color
  pickedColor = pickColor();
  // set colorDisplay to picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

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
      resetButton.textContent = "Play Again!";
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
