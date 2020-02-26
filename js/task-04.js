let counter = 0;

const spanCounter = document.querySelector("#value");
const decrement = document.querySelector("button[data-action=decrement]");
const increment = document.querySelector("button[data-action=increment]");

increment.addEventListener("click", () => {
    counter += 1;
    return (spanCounter.textContent = counter)
})

decrement.addEventListener("click", () => {
    counter -= 1;
    return (spanCounter.textContent = counter)
})