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

  canva.style.display = "none";
  canva.width = width.toString();
  canva.height = height.toString();

  const ctx = canva.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  image = canva
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
