const colorPicker = document.querySelector(".c--picker");
const imageWidth = document.querySelector("#width");
const imageHeight = document.querySelector("#height");
const canvas = document.querySelector("#canvas");
const body = document.querySelector("body");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const width = imageWidth.value;
  const height = imageHeight.value;
  const color = colorPicker.value;

  canvas.style.display = "none";
  canvas.width = width.toString();
  canvas.height = height.toString();

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  image = canvas
    .toDataURL("image/png", 1.0)
    .replace("image/png", "image/octet-stream");

  const link = document.createElement("a");
  link.download = "background.png";
  link.href = image;
  link.click();
});

colorPicker.addEventListener("input", (e) => {
  body.style.backgroundColor = colorPicker.value;
});
