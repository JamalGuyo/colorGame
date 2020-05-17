let numSquares = 6;
let colors = [];
let pickedColor;
// selectors
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#messageDisplay");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}
// set mode buttons
function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

// set squares
function setupSquares() {
  for (let i = 0, n = squares.length; i < n; i++) {
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
}
// reset
function reset() {
  // reset background of h1
  h1.style.backgroundColor = "steelblue";
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
  for (let i = 0, n = squares.length; i < n; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}
// reset button listener
resetButton.addEventListener("click", function () {
  reset();
});

// loop through all the divs
for (let i = 0, n = squares.length; i < n; i++) {
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
