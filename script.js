var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // this does the same as an if statement (ternary operator)
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        })
    }
}

function reset(){
    colors = generateRandomColors(numOfSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of the squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]; 
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match pickedColor
        squares[i].style.backgroundColor = color;
    }   
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
        // get random color and push into arr
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a "Red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a "Green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a "Blue" from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}