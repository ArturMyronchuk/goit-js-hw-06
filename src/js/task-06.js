const inputName = document.querySelector("#validation-input");

inputName.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputName.dataset.length);
  const inputValueLength = Number(inputName.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputName.classList.add("valid");
    inputName.classList.remove("invalid");
  } else {
    inputName.classList.remove("valid");
    inputName.classList.add("invalid");
  }
}
