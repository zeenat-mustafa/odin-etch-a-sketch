let container = document.querySelector('#container');
let gridSize = 16;

const containerWidth = 500;
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