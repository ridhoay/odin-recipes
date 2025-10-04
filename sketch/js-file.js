
const gridContainer = document.querySelector(".grid-container");
const documentBody = document.querySelector("body");    
const createGridBtn = document.getElementById("create-grid");

const clearButton = document.createElement("button");
clearButton.id = "clear";
clearButton.textContent = "Clear";

createGridBtn.addEventListener("click", () => {
    
    // ask user for grid size
    gridSize = prompt("Enter grid size (1-100):");
    const rows = gridSize;
    const columns = gridSize;
    
    gridContainer.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < columns; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        gridContainer.appendChild(row);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        });
    });
        
    if (document.getElementById("clear")) {
        documentBody.removeChild(clearButton);
    }
    documentBody.appendChild(clearButton);
    
    clearButton.addEventListener("click", () => {
        squares.forEach(square => {
            square.style.backgroundColor = "";
        });
    });
})

