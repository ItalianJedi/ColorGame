let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
         this.classList.add("selected"); 
         if(this.textContent === "Easy"){
             numSquares = 3;
         }else{
             numSquares = 6;
         }
        reset();
    });
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent ="New Colors";
    messageDisplay.textContent = "";
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
        squares[i].style.background = "none";
        }
    }
    h1.style.background = "steelblue";
}

/*easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.background = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.background = "block";
    }
});*/

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent ="New Colors";
    messageDisplay.textContent = "";
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
   squares[i].addEventListener("click", function(){
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "oh yeah, you're correct";
            resetButton.textContent = "play again?"

            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323"
            messageDisplay.textContent = "try again bucko"
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
    //change each color to match winning color
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr = []
    for(let i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}