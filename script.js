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

// faire une fonction mouseover
// on recup les grid, ensuite pour chaque grid on ajoute un evet listener mousevent

grid.addEventListener("mouseover", function (event) {
  const target = event.target;
  if (target.classList.contains("cell")) {
    target.style.backgroundColor = "red";
  }
});
// const changeGridColor = () => {

// }
