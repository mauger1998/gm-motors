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

document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
  
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
  })
  