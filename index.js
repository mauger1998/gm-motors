const selectorSwitches = document.querySelectorAll(".selector-switch")
const selectorImages = document.querySelectorAll(".selector-absolute")

console.log(selectorSwitches)

selectorSwitches.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        const activeButton = document.querySelector(".selector-switch.active")
        const activeImage = document.querySelector(".selector-absolute.active")
        activeImage.classList.remove("active")
        selectorImages[index].classList.add("active")

        activeButton.classList.remove("active")
        selectorSwitches[index].classList.add("active")
    })
})