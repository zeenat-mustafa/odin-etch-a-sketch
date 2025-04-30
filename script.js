let container = document.querySelector('#container');
let sizeBtn = document.querySelector("button");
let gridSize = 16;
const containerWidth = 500;

function createGrid() {
    const squareSize = containerWidth / gridSize;

    for(let i = 0; i < gridSize * gridSize; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "palevioletred"
        });

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.appendChild(square);
    }
}

createGrid();

function changeSquareNumber () {
    let size = Number(prompt("Enter the Number of Squares per size. Note: 'Max 100'"));
    if (size <= 100) {
        gridSize = size;
        container.innerHTML = '';
        createGrid();
    } else {
        alert("Enter a number less or equal to 100");
    }
}

sizeBtn.addEventListener("click", changeSquareNumber);