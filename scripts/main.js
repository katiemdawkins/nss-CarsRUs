import { CarShop } from "./CarShop.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarShop()
}

renderAllHTML()

// document.addEventListener("stateChanged", event => {
//     console.log("State of data has changed. Regenerating HTML...")
//     renderAllHTML()
// })