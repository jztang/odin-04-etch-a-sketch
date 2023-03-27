const container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseenter", () => {
    square.style["background-color"] = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  });
  container.appendChild(square);
}
