// creating a 16x16 div grid

const squareDivsContainer = document.querySelector('div.container');
const sizeButton = document.querySelector('div.size-button button');
sizeButton.addEventListener('click', sizeButtonClicked);

function sizeButtonClicked(){
    let size = '';
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
    const squareSize = squareDivsContainer.clientWidth / size;

    for (let i = 0; i < size * size; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.className = "square-div";
        squareDiv.style.flexBasis = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`; // Set height to maintain aspect ratio

        squareDiv.onmouseover = function() {
            squareDiv.style.backgroundColor = 'black';
        }

        squareDivsContainer.appendChild(squareDiv);
    }
}

createGrid(16);
