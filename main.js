const colorPicker = document.querySelector(".c--picker");
const imageWidth = document.querySelector("#width");
const imageHeight = document.querySelector("#height");
const canva = document.querySelector("#canvas");
const body = document.querySelector("body");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const width = imageWidth.value;
  const height = imageHeight.value;
  const color = colorPicker.value;
});
// colorPicker.addEventListener("change", (e) => {
//   console.log("changed");
// });
colorPicker.addEventListener("input", (e) => {
  body.style.backgroundColor = colorPicker.value;
});
