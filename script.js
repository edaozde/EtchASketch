//Faire grid 16x16 = 256 cell

const grid = document.querySelector(".grid");

//Faire une fonction pour créer une grille
const createGrid = (x) => {
  //créer les lignes de la grille avec la 1er boucle puis 16 boucles pour creer 16 cellules par lignes
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      //creer une constante qui va respresenter une cellule de la grille
      const cell = document.createElement("div");
      //on ajoute la class cell a chaque cellule pour stylisé en css
      cell.classList.add("cell");
      //La méthode appendChild ajoute un enfant à l'objet sur lequel elle est appelée.
      grid.appendChild(cell);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  createGrid(16);
});

function clearGrid(event) {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

grid.addEventListener("mouseover", function (event) {
  const target = event.target;
  if (target.classList.contains("cell")) {
    const color = document.getElementById("colorSelect").value;
    target.style.backgroundColor = color;
  }
});

// //télécharger son dessin

// function downloadDrawing() {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   const gridElements = [...document.querySelectorAll(".cell")];

//   const gridSize = 16;
//   const cellSize = 30; // Adjust this based on your grid size

//   // Set the canvas size to match the grid dimensions
//   canvas.width = gridSize * cellSize;
//   canvas.height = gridSize * cellSize;

//   // Draw each grid element onto the canvas
//   gridElements.forEach((element, index) => {
//     const row = Math.floor(index / gridSize);
//     const col = index % gridSize;
//     const color = element.style.backgroundColor;
//     context.fillStyle = color;
//     context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
//   });

//   // Generate data URL for the canvas content
//   const dataURL = canvas.toDataURL("image/png");

//   // Create a download link
//   const link = document.createElement("a");
//   link.href = dataURL;
//   link.download = "drawing.png";
//   link.click();
// }
