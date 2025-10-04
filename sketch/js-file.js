
const gridContainer = document.querySelector(".grid-container");
const documentBody = document.querySelector("body");    
const createGridBtn = document.getElementById("create-grid");

const clearButton = document.createElement("button");
clearButton.id = "clear";
clearButton.textContent = "Clear";

const eraserBtn = document.createElement("button");
eraserBtn.id = "eraser";
eraserBtn.textContent = "Erase";

const drawBtn = document.createElement("button");
drawBtn.id = "draw";
drawBtn.textContent = "Draw";

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

    // add eraser mode which turns the mouse into an eraser
    if (document.getElementById("eraser")) {
        documentBody.removeChild(eraserBtn);
    }
    documentBody.appendChild(eraserBtn);
    
    eraserBtn.addEventListener("click", () => {
        squares.forEach(square => {
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "";
            });
        });
    }); 

    // add draw mode which turns the mouse into a draw
    if (document.getElementById("draw")) {
        documentBody.removeChild(drawBtn);
    }
    documentBody.appendChild(drawBtn);
    
    drawBtn.addEventListener("click", () => {
        squares.forEach(square => {
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "red";
            });
        });
    });
})

