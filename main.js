const colorPicker = document.querySelector("c--picker");
const imageWidth = document.querySelector("#width");
const imageHeight = document.querySelector("#height");
const canva = document.querySelector("#canvas");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const pickr = new Pickr.create({
  el: ".color-picker",
  theme: "classic",
  swatches: [],
  useAsButton: false,
  default: "#3498db",
  components: {
    preview: false,
    opacity: true,
    hue: true,
    interaction: {
      hex: true,
      rgba: true,
      hsla: false,
      hsva: false,
      cmyk: false,
      input: true,
      clear: false,
      save: false,
    },
  },
});
