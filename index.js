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

// CMS 

let URL = "https://ehpg4evy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22car%22%5D%20%7C%20order(order)%20%7B%0A%20%20%20%20name%2C%0A%20%20%20%20price%2C%0A%20%20%20%20finance%2C%0A%20%20%20%20extraInfo%2C%0A%20%20%20%20%20%20featured%2C%0A%20%20%20%20%22imgUrl%22%3A%20image.asset-%3Eurl%0A%7D"

fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          
          if (result.length > 0) {
            const allCarsGrid = document.querySelector(".all-cars-grid")

            result.forEach((result, index) => {
            

               



              

                if (result.featured == true) {
                    const featuredCarsGrid = document.querySelector(".featured-bottom-grid")

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
                carArrow.src = "recovery-png/down-arrow-backup-2-svgrepo-com.svg"
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
                }

            });

          
          }
        })
        .catch((err) => console.error(err));


let URLTWO = "https://ehpg4evy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22newArrivals%22%5D%20%7B%0A%20%20name%2C%0A%20%20%20%20finance%2C%0A%20%20%20%20extraInfo%2C%0A%20%20%20%20price%2C%0A%20%20%20%20%22imgUrl%22%3A%20image.asset-%3Eurl%0A%7D"


fetch(URLTWO)
        .then((res) => res.json())
        .then(({ result }) => {
          const newSection = document.querySelector(".new-arrivals")
          if (result.length > 0) {
            const wrapper = document.createElement("div")
            wrapper.classList.add("wrapper")
            newSection.appendChild(wrapper)

            const newLeft = document.createElement("div")
            newLeft.classList.add("new-left")
            wrapper.appendChild(newLeft)

            const leftImg = document.createElement("img")
            leftImg.src = result[0].imgUrl
            newLeft.appendChild(leftImg)

            const newRight = document.createElement("div")
            newRight.classList.add("new-right")
            wrapper.appendChild(newRight)

            const mainTitle = document.createElement("h2")
            mainTitle.textContent = "New Arrival"
            newRight.appendChild(mainTitle)

            const priceWrapper = document.createElement("div")
            priceWrapper.classList.add("price-wrapper")
            newRight.appendChild(priceWrapper)

            const title = document.createElement("p")
            title.textContent = result[0].name 
            priceWrapper.appendChild(title)

            const price = document.createElement("p")
            price.textContent = `£${result[0].price}`
            priceWrapper.appendChild(price)
            price.classList.add("price")

           
            const finance = document.createElement("p")
            newRight.appendChild(finance)
            if (result[0].finance) {
                finance.textContent = "Finance Available"
            } else {
                finance.textContent = "No Finance Available"
            }
            

            const info = document.createElement("p")
            newRight.appendChild(info)
            info.textContent = result[0].extraInfo

            const aTag = document.createElement("a")
            newRight.appendChild(aTag)
            aTag.setAttribute("href", "shop-cars-now#featured")

            const button = document.createElement("button")
            button.textContent = "SHOP NOW"
            aTag.appendChild(button)

            result.forEach((result, index) => {
            

        

            });

          
          }
        })
        .catch((err) => console.error(err));