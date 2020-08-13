// Grid creator
function newGrid(size = 16, numSquares = 16) {
    // Creates the grid
    document.documentElement.style.setProperty('--size', size)
    let gridContainer = document.getElementById("container");
    gridContainer.style.gridTemplateColumns = "repeat(var(--size), 1fr)";
    gridContainer.style.gridTemplateRows = "repeat(var(--size), 1fr)";

    // Fills grid with number of squares needed
    let allSquares = Array.from(document.querySelectorAll('.square'));
    allSquares.forEach(square => square.remove());
    squaredSquares = Math.pow(numSquares, 2);
    for(let i = 0; i < squaredSquares; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        let container = document.getElementById("container");
        container.appendChild(squareDiv);
    }
}

// Invoke functions for original grid
newGrid();

// Clears board
function clearBoard() {
    // For each div that has the class "hovered," remove "hovered"
    const hovered = Array.from(document.querySelectorAll(".hovered"));
    hovered.forEach(hover => hover.classList.remove("hovered"));
    // Makes new grid from user input
    let gridSize = prompt("What size would you like your canvas? (minimum size: 2)");
    newGrid(gridSize, gridSize);
    hover();
}

let button = document.getElementById("clear-button");
button.onclick = clearBoard;

// Changes color of div on hover
function changeColor() {
    this.classList.add("hovered")
}

// Detect hovers
function hover() {
    let squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.addEventListener('mouseover', changeColor));
}

// I DONT CARE
hover();