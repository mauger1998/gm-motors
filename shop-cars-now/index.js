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
  
// CMS

// let URL = "https://ehpg4evy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22car%22%5D%20%7B%0A%20%20%20%20name%2C%0A%20%20%20%20price%2C%0A%20%20%20%20finance%2C%0A%20%20%20%20extraInfo%2C%0A%20%20%20%20%20%20featured%2C%0A%20%20%20%20%22imgUrl%22%3A%20image.asset-%3Eurl%0A%7D"

let URL = "https://ehpg4evy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22car%22%5D%20%7C%20order(order)%20%7B%0A%20%20%20%20name%2C%0A%20%20%20%20price%2C%0A%20%20%20%20finance%2C%0A%20%20%20%20extraInfo%2C%0A%20%20%20%20%20%20featured%2C%0A%20%20%20%20%22imgUrl%22%3A%20image.asset-%3Eurl%0A%7D"


fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          
          if (result.length > 0) {
            const allCarsGrid = document.querySelector(".all-cars-grid")
            allCarsGrid.innerHTML = ""
            const featuredCarsGrid = document.querySelector(".featured-bottom-grid")
            featuredCarsGrid.innerHTML = ""

            result.forEach((result, index) => {
                
                const gridItem = document.createElement("div")
                gridItem.classList.add("all-cars-grid-item")
                allCarsGrid.appendChild(gridItem)

                const allCarsGridImage = document.createElement("img")
                allCarsGridImage.src = result.imgUrl
                gridItem.appendChild(allCarsGridImage)

                const allCarsGridText = document.createElement("div")
                allCarsGridText.classList.add("all-cars-grid-item-text")
                gridItem.appendChild(allCarsGridText)

                const carsGridName = document.createElement("p")
                carsGridName.textContent = result.name
                allCarsGridText.appendChild(carsGridName)

                if (result.finance) {
                    const finance = document.createElement("p")
                    finance.textContent = "Finance Available"
                    allCarsGridText.appendChild(finance)
                } else {
                    const noFinance = document.createElement("p")
                    noFinance.textContent = "No Finance Available"
                    allCarsGridText.appendChild(noFinance)
                }

                
                

                const carPriceBox = document.createElement("div")
                carPriceBox.classList.add("car-price-box")
                allCarsGridText.appendChild(carPriceBox)
                const carsGridPrice = document.createElement("p")
                carsGridPrice.textContent = `£${result.price}`
                carPriceBox.appendChild(carsGridPrice)

                const carArrow = document.createElement("img")
                carArrow.src = "../recovery-png/down-arrow-backup-2-svgrepo-com.svg"
                carPriceBox.appendChild(carArrow)

               


                const moreInfoBox = document.createElement("div")
                moreInfoBox.classList.add("more-info-box")
                allCarsGridText.appendChild(moreInfoBox)

                const moreInfo = document.createElement("p")
                moreInfo.textContent = result.extraInfo
                moreInfoBox.appendChild(moreInfo)

                carArrow.addEventListener("click", (e) => {
                    moreInfoBox.classList.toggle("box-active")
                })

                const buttonContainer = document.createElement("div")
                buttonContainer.classList.add("button-container")
                allCarsGridText.appendChild(buttonContainer)

                const buttonA = document.createElement("a")
                buttonA.setAttribute("href", "#book")
                buttonContainer.appendChild(buttonA)


                const button = document.createElement("button")
                button.textContent = "BOOK TEST DRIVE"
                buttonA.appendChild(button)


                const secondaryA  = document.createElement("a")
                secondaryA.setAttribute("href", "#book")
                buttonContainer.appendChild(secondaryA)

                const secondaryButton = document.createElement("button")
                secondaryButton.textContent = "ENQUIRE NOW"
                secondaryA.appendChild(secondaryButton)
               

                const select = document.querySelector("select")

                const selectOption = document.createElement("option")
                selectOption.textContent = result.name
                selectOption.setAttribute("value", result.name)
                select.appendChild(selectOption)

                const selectImage = document.createElement("img")
                selectImage.src = result.imgUrl
                const bookImages = document.querySelector(".book-images")
                bookImages.appendChild(selectImage)


                buttonA.addEventListener("click", (e) => {
                    const bookImageArray = document.querySelectorAll(".book-images img")
                    select.value = selectOption.value
                    bookImageArray.forEach((book, index) => {
                        book.classList.remove("active-class")
                    })
                    bookImageArray[index].classList.add("active-class")
                    bookImageArray[index].classList.add("active-class")
                    const textArea = document.querySelector(".message-field")
                    textArea.classList.remove("active-message")
                    const dateTime = document.querySelector(".row")
                    dateTime.classList.add("active-message")
                    
                })
               
                secondaryA.addEventListener("click", (e) => {
                    const bookImageArray = document.querySelectorAll(".book-images img")
                    select.value = selectOption.value
                    bookImageArray.forEach((book, index) => {
                        book.classList.remove("active-class")
                    })
                    bookImageArray[index].classList.add("active-class")
                    const textArea = document.querySelector(".message-field")
                    textArea.classList.add("active-message")
                    const dateTime = document.querySelector(".row")
                    dateTime.classList.remove("active-message")
                    
                })

                if (result.featured == true) {

                const gridItem = document.createElement("div")
                gridItem.classList.add("all-cars-grid-item")
                featuredCarsGrid.appendChild(gridItem)

                const allCarsGridImage = document.createElement("img")
                allCarsGridImage.src = result.imgUrl
                gridItem.appendChild(allCarsGridImage)

                const allCarsGridText = document.createElement("div")
                allCarsGridText.classList.add("all-cars-grid-item-text")
                gridItem.appendChild(allCarsGridText)

                const carsGridName = document.createElement("p")
                carsGridName.textContent = result.name
                allCarsGridText.appendChild(carsGridName)

                if (result.finance) {
                    const finance = document.createElement("p")
                    finance.textContent = "Finance Available"
                    allCarsGridText.appendChild(finance)
                } else {
                    const noFinance = document.createElement("p")
                    noFinance.textContent = "No Finance Available"
                    allCarsGridText.appendChild(noFinance)
                }
                

                const carPriceBox = document.createElement("div")
                carPriceBox.classList.add("car-price-box")
                allCarsGridText.appendChild(carPriceBox)
                const carsGridPrice = document.createElement("p")
                carsGridPrice.textContent = `£${result.price}`
                carPriceBox.appendChild(carsGridPrice)

                const carArrow = document.createElement("img")
                carArrow.src = "../recovery-png/down-arrow-backup-2-svgrepo-com.svg"
                carPriceBox.appendChild(carArrow)

               


                const moreInfoBox = document.createElement("div")
                moreInfoBox.classList.add("more-info-box")
                allCarsGridText.appendChild(moreInfoBox)

                const moreInfo = document.createElement("p")
                moreInfo.textContent = result.extraInfo
                moreInfoBox.appendChild(moreInfo)

                carArrow.addEventListener("click", (e) => {
                    moreInfoBox.classList.toggle("box-active")
                })

                const buttonContainer = document.createElement("div")
                buttonContainer.classList.add("button-container")
                allCarsGridText.appendChild(buttonContainer)

                const buttonA = document.createElement("a")
                buttonA.setAttribute("href", "#book")
                buttonContainer.appendChild(buttonA)


                const button = document.createElement("button")
                button.textContent = "BOOK TEST DRIVE"
                buttonA.appendChild(button)


                const secondaryA  = document.createElement("a")
                secondaryA.setAttribute("href", "#book")
                buttonContainer.appendChild(secondaryA)

                const secondaryButton = document.createElement("button")
                secondaryButton.textContent = "ENQUIRE NOW"
                secondaryA.appendChild(secondaryButton)

                // const select = document.querySelector("select")

                // const selectOption = document.createElement("option")
                // selectOption.textContent = result.name
                // selectOption.setAttribute("value", result.name)
                // select.appendChild(selectOption)

                // const selectImage = document.createElement("img")
                // selectImage.src = result.imgUrl
                // const bookImages = document.querySelector(".book-images")
                // bookImages.appendChild(selectImage)


                buttonA.addEventListener("click", (e) => {
                    const bookImageArray = document.querySelectorAll(".book-images img")
                    select.value = selectOption.value
                    bookImageArray.forEach((book, index) => {
                        book.classList.remove("active-class")
                    })
                    bookImageArray[index].classList.add("active-class")
                    const textArea = document.querySelector(".message-field")
                    textArea.classList.remove("active-message")
                    const dateTime = document.querySelector(".row")
                    dateTime.classList.add("active-message")
                    
                })
                secondaryA.addEventListener("click", (e) => {
                    const bookImageArray = document.querySelectorAll(".book-images img")
                    select.value = selectOption.value
                    bookImageArray.forEach((book, index) => {
                        book.classList.remove("active-class")
                    })
                    bookImageArray[index].classList.add("active-class")
                    const textArea = document.querySelector(".message-field")
                    textArea.classList.add("active-message")
                    const dateTime = document.querySelector(".row")
                    dateTime.classList.remove("active-message")
                    
                })

                    
                }

            });

            const arrayOfBookImages = document.querySelectorAll(".book-images img")
            arrayOfBookImages[0].classList.add("active-class")
            const select = document.querySelector("select")
            const options = document.querySelectorAll("option")
            select.addEventListener("input", (e) => {
                options.forEach((option, index) =>  {
                    if (select.value == option.textContent) {
                        arrayOfBookImages[index].classList.add("active-class")
                    } else {
                        arrayOfBookImages[index].classList.remove("active-class")
                    }
                })
            })
          }
        })
        .catch((err) => console.error(err));


// CMS FEATURED 

const check = document.querySelector(".switch input")

check.addEventListener("change", (e) => {
    const textArea = document.querySelector(".message-field")
    textArea.classList.toggle("active-message")
    const dateTime = document.querySelector(".row")
    dateTime.classList.toggle("active-message")
})

if (check.checked) {
    const textArea = document.querySelector(".message-field")
    textArea.classList.remove("active-message")
    const dateTime = document.querySelector(".row")
    dateTime.classList.add("active-message")
}




