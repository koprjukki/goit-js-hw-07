const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// nameInput.addEventListener("input", () => {
//     if (nameInput.value) {
//         nameOutput.innerHTML = nameInput.value;
//     } else {
//         nameOutput.innerHTML = "незнакомец";
//     }
// })

nameInput.addEventListener("input", () => nameInput.value ? nameOutput.innerHTML = nameInput.value : nameOutput.innerHTML = "незнакомец");