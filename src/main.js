import "./style.css";

const slider = document.querySelector(".slider");

function next() {
  const items = document.querySelectorAll(".item");
  slider.append(items[0]);
}

function prev() {
  const items = document.querySelectorAll(".item");
  slider.prepend(items[items.length - 1]);
}

function activate(e) {
  e.target.matches(".next") && next();
  e.target.matches(".prev") && prev();
}

document.addEventListener("click", activate, false);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});
