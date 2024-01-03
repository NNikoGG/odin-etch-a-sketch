// creating a 16x16 div grid
// Todo: Dunno if there's a better option this is all I could come up at the moment
const squareDivsContainer = document.querySelector('div.container');
for (let i = 0; i < 16; i++){
    const newDiv = document.createElement('div');
    newDiv.className = "new-div";
    squareDivsContainer.appendChild(newDiv);
    for (let i = 0; i < 16; i++){
        const squareDiv = document.createElement('div');
        squareDiv.className = "square-div";
        newDiv.appendChild(squareDiv);
        // squareDiv.textContent = 'O';
        squareDiv.setAttribute('style', 'background-color: blue; border: solid 1px black');
    }
}
