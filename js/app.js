const background = document.querySelector(".background");
const square = document.querySelector(".square");
const backgroundWidth = parseInt(
  window.getComputedStyle(background, null).getPropertyValue("width"),
  10
);
const barWidth =
  parseInt(
    window.getComputedStyle(square, null).getPropertyValue("width"),
    10
  ) / 3;

for (let i = 0; i < backgroundWidth / barWidth / 2; i++) {
  background.innerHTML += "<div class='bar'></div>";
}
