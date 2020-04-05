const input = document.querySelector('#validation-input');
const lengthOfInput = document.querySelector("#validation-input[data-length]")

function inputCheckLength() {
    const basicLength = Number(input.dataset.length);
    let enteredValue = Number(input.value.length);
    console.log(input.value);
    if (basicLength === enteredValue) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid")
    }
}

input.addEventListener("blur", inputCheckLength)