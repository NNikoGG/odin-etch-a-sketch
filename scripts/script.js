// creating a 16x16 div grid

const squareDivsContainer = document.querySelector('div.container');
const sizeButton = document.querySelector('div.size-button button');
const blackButton = document.getElementById('blackButton');
const rainbowButton = document.getElementById('rainbowButton');
const clearButton = document.getElementById('clearButton');

// setting a default color mode
let colorMode = 'black';
// setting a default grid dimension
let size = 16;

blackButton.addEventListener('click', () => colorMode = 'black');
rainbowButton.addEventListener('click', () => colorMode = 'rainbow');
sizeButton.addEventListener('click', sizeButtonClicked);
clearButton.addEventListener('click', () => createGrid(size));

function sizeButtonClicked(){
    size = prompt("Enter the size of the square grid (For eg: 16, 32 etc");
    size = parseInt(size);

    if (isNaN(size)){
        console.log("Error! Please enter a valid numerical size");
        sizeButtonClicked();
    }
    else if (size > 100){
        console.log("Error! Please enter a valid size below 100");
        sizeButtonClicked();
    }
    else {
        createGrid(size);
    }     
}

function createGrid(size) {
    squareDivsContainer.innerHTML = '';
    // Getting the size of each individual squares in the grid
    const squareSize = squareDivsContainer.clientWidth / size;

    for (let i = 0; i < size * size; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.className = "square-div";
        squareDiv.style.flexBasis = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        squareDivsContainer.appendChild(squareDiv);
        squareDiv.onmouseover = function() {
            if (colorMode === 'black'){
                squareDiv.style.backgroundColor = 'black';
            }
            else if (colorMode === 'rainbow'){
                squareDiv.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
            }
        }
    }
}

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

createGrid(size);
