function generateGrid(size) {
  const container = document.querySelector(".container");
  container.replaceChildren();

  for (let i = 1; i <= size * size; i++) {
    const square = document.createElement("div");
    square.style.height = `${800 / size}px`;
    square.style.width = `${800 / size}px`;
    square.addEventListener("mouseenter", () => {
      square.style["background-color"] = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
    container.appendChild(square);
  }
}

document.querySelector(".new-grid-btn").addEventListener("click", () => {
  const newSize = prompt("Enter new grid size (max 100)", 64);
  generateGrid(newSize);
});

generateGrid(16);
