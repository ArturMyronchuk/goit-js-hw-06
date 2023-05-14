const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const placeholder = (even) => {
  outputName.textContent =
    inputName.value !== "" ? even.currentTarget.value : "Anonymous";
};
inputName.addEventListener("input", placeholder);
